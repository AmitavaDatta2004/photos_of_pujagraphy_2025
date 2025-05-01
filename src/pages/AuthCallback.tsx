
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { hash, search } = window.location;
    
    const handleAuthCallback = async () => {
      try {
        // Debug what we're receiving
        console.log("Processing auth callback with hash:", hash);
        
        // If we have a hash with access_token, this is likely a successful OAuth login
        if (hash && hash.includes("access_token")) {
          console.log("OAuth authentication detected, processing...");
          
          // Get session from URL (this will set the session in supabase's internal storage)
          const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
          
          if (sessionError) {
            throw sessionError;
          }
          
          if (sessionData?.session) {
            // We have a valid session now
            console.log("Session retrieved successfully");
            const user = sessionData.session.user;
            
            // Check if user profile exists
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', user.id)
              .single();
            
            if (profileError && profileError.code !== 'PGRST116') {
              console.error('Error checking profile:', profileError);
            }
            
            // Create profile if it doesn't exist
            if (!profile) {
              console.log("Creating new user profile");
              let username = '';
              
              // For Google auth, prioritize display name
              if (user.app_metadata?.provider === 'google') {
                username = user.user_metadata?.name?.split(' ')[0] || 
                           user.user_metadata?.email?.split('@')[0] || 
                           'user';
                
                console.log("Using Google profile data for username:", username);
              } else {
                username = user.email ? user.email.split('@')[0] : 'user';
              }
              
              const { error: insertError } = await supabase
                .from('profiles')
                .insert({
                  id: user.id,
                  username: username,
                  avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture
                });
              
              if (insertError) {
                console.error('Error creating profile:', insertError);
                // Continue anyway as this might be a non-critical error
              }
            }
            
            toast({
              title: "Welcome!",
              description: "You have successfully logged in.",
              duration: 3000,
            });
            
            // Redirect to home page or the page user was trying to access
            navigate('/');
            return;
          }
        }
        
        // Email verification flow or other auth flows
        const { data, error } = await supabase.auth.getUser();
        
        if (error) {
          console.error("Error fetching user:", error);
          throw error;
        }
        
        if (data.user) {
          console.log("User found:", data.user.id);
          
          // Check if user has a profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();
          
          if (profileError && profileError.code !== 'PGRST116') {
            console.error('Error checking profile:', profileError);
          }
          
          // If no profile exists, create one
          if (!profile) {
            let username = data.user.email ? data.user.email.split('@')[0] : 'user';
            
            // For Google auth, use name from user_metadata if available
            if (data.user.app_metadata?.provider === 'google' && data.user.user_metadata?.name) {
              username = data.user.user_metadata.name.split(' ')[0];
              console.log("Creating profile with Google username:", username);
            } else if (data.user.app_metadata?.provider === 'google' && data.user.user_metadata?.email) {
              // If no name but email is available, extract username from email
              username = data.user.user_metadata.email.split('@')[0];
              console.log("Creating profile with Google email username:", username);
            }
            
            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                username: username,
                avatar_url: data.user.user_metadata?.avatar_url || data.user.user_metadata?.picture
              });
            
            if (insertError) {
              console.error('Error creating profile:', insertError);
            }
          }
          
          toast({
            title: "Welcome!",
            description: "You have successfully logged in.",
            duration: 3000,
          });
          navigate('/');
        } else {
          // No user found, redirect to auth page
          console.log("No user found, redirecting to auth page");
          navigate('/auth');
        }
      } catch (error: any) {
        console.error('Error during authentication:', error);
        toast({
          title: "Authentication Error",
          description: error.message || "Failed to complete authentication",
          variant: "destructive",
          duration: 5000,
        });
        navigate('/auth');
      }
    };
    
    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-festival-cream/30 dark:bg-gray-800/30">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-festival-maroon dark:text-festival-golden mx-auto mb-4" />
        <h2 className="text-xl font-heading text-festival-maroon dark:text-festival-golden mb-2">
          Completing authentication...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Please wait while we log you in.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
