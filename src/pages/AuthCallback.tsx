
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User } from '@supabase/supabase-js';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const processAuth = async () => {
      try {
        // Supabase JS client automatically handles the hash fragment (#) for OAuth.
        // We just need to wait for the session to be established.
        // getSession is preferred here as it reads from storage and doesn't rely on the hash still being in the URL
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

        console.log("AuthCallback: Checking session...");

        if (sessionError) {
          console.error("AuthCallback: Error getting session:", sessionError);
          throw sessionError;
        }

        if (sessionData?.session?.user) {
          const user = sessionData.session.user;
          console.log("AuthCallback: User session found:", user.id);

          // Check if user profile exists and create if not
          await ensureUserProfile(user);

          toast({
            title: "Welcome!",
            description: "You have successfully logged in.",
            duration: 3000,
          });
          console.log("AuthCallback: Navigating to /");
          navigate('/', { replace: true }); // Use replace to remove callback from history

        } else {
           // This might happen if the user lands here without a valid session fragment
           // or if the email verification link was clicked but the session isn't immediately available.
           // Let's try getUser as a fallback, useful for email confirm flow.
           console.log("AuthCallback: No session found via getSession, trying getUser...");
           const { data: userData, error: userError } = await supabase.auth.getUser();

           if (userError && userError.message !== 'User not found') { // Ignore "User not found" as it's expected if not logged in
             console.error("AuthCallback: Error getting user:", userError);
             // Don't throw here, maybe just redirect
           }

           if (userData?.user) {
             const user = userData.user;
             console.log("AuthCallback: User found via getUser:", user.id);
             await ensureUserProfile(user);
             toast({
               title: "Welcome!",
               description: "Login confirmed.", // Slightly different message for clarity
               duration: 3000,
             });
             console.log("AuthCallback: Navigating to /");
             navigate('/', { replace: true });
           } else {
             // If still no user after both checks, redirect to auth page.
             console.log("AuthCallback: No user found, redirecting to /auth");
             toast({
               title: "Authentication Required",
               description: "Please log in to continue.",
               variant: "default",
               duration: 4000,
             });
             navigate('/auth', { replace: true });
           }
        }
      } catch (error: any) {
        console.error('AuthCallback: Error during authentication processing:', error);
        toast({
          title: "Authentication Error",
          description: error.message || "Failed to complete authentication process. Please try logging in again.",
          variant: "destructive",
          duration: 5000,
        });
        navigate('/auth', { replace: true });
      }
    };

    // Helper function to check/create profile
    const ensureUserProfile = async (user: User) => {
       console.log("AuthCallback: Ensuring profile exists for user:", user.id);
       try {
         const { data: profile, error: profileError } = await supabase
           .from('profiles')
           .select('id') // Only select 'id' or '*' if needed
           .eq('id', user.id)
           .maybeSingle(); // Use maybeSingle to handle 0 or 1 row without error

         if (profileError) {
           console.error('AuthCallback: Error checking profile:', profileError);
           // Decide if this error is critical. Maybe log and continue.
           // throw profileError; // Uncomment if profile check failure should stop auth
         }

         if (!profile) {
           console.log("AuthCallback: Profile not found, creating new one.");
           let username = 'user'; // Default username
           let avatarUrl = null; // Default avatar

           // Extract username and avatar from provider data if available
           if (user.app_metadata?.provider === 'google') {
             username = user.user_metadata?.name?.split(' ')[0] || user.user_metadata?.email?.split('@')[0] || username;
             avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
             console.log(`AuthCallback: Using Google data - Username: ${username}, Avatar: ${avatarUrl ? 'Exists' : 'None'}`);
           } else if (user.email) {
             // For email signup, use username from options.data if available, else email prefix
             username = user.user_metadata?.username || user.email.split('@')[0];
             console.log(`AuthCallback: Using Email data - Username: ${username}`);
             // Note: Email signup doesn't provide an avatar_url by default
           }

           const { error: insertError } = await supabase
             .from('profiles')
             .insert({
               id: user.id,
               username: username,
               // Only set avatar_url if it's not null/undefined
               ...(avatarUrl && { avatar_url: avatarUrl })
             });

           if (insertError) {
             console.error('AuthCallback: Error creating profile:', insertError);
             // Non-critical? Log the error and maybe show a less severe toast later.
             toast({
                title: "Profile Issue",
                description: "Could not automatically create user profile details. You can update this later.",
                variant: "default", // Or "destructive" if it's more serious
                duration: 4000,
              });
           } else {
             console.log("AuthCallback: Profile created successfully for user:", user.id);
           }
         } else {
            console.log("AuthCallback: Profile already exists for user:", user.id);
         }
       } catch (err) {
          console.error("AuthCallback: Unexpected error in ensureUserProfile:", err);
          // Handle unexpected errors during profile management
       }
    };

    processAuth();

  }, [navigate, toast]); // Dependencies for the effect

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md z-50">
      <div className="bg-card p-8 rounded-xl shadow-lg border border-border max-w-md w-full text-center">
        <Loader2 className="h-12 w-12 animate-spin text-festival-maroon dark:text-festival-golden mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-festival-maroon dark:text-festival-golden mb-2">
          Processing Authentication...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Please wait a moment.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
