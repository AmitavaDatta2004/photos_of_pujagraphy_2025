
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { hash } = window.location;
    
    const handleAuthCallback = async () => {
      try {
        // This will work for both email and OAuth providers
        const { data, error } = await supabase.auth.getUser();
        
        if (error) throw error;
        
        if (data.user) {
          // Check if user has a profile, if not, create one
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();
          
          if (profileError && profileError.code !== 'PGRST116') {
            console.error('Error checking profile:', profileError);
          }
          
          // If no profile exists, create one with username from email
          if (!profile) {
            let username = data.user.email ? data.user.email.split('@')[0] : 'user';
            
            // For Google auth, we might have user_metadata with a name
            if (data.user.app_metadata?.provider === 'google' && data.user.user_metadata?.name) {
              username = data.user.user_metadata.name.split(' ')[0];
            }
            
            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                username: username,
                avatar_url: data.user.user_metadata?.avatar_url
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
          // If no user is found, check if we have a session in the URL
          if (hash && hash.includes("access_token")) {
            // We have a hash with access token - OAuth login is completing
            const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
            
            if (sessionError) throw sessionError;
            
            if (sessionData?.session) {
              // Check/create profile similar to above
              const user = sessionData.session.user;
              
              const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();
              
              if (profileError && profileError.code !== 'PGRST116') {
                console.error('Error checking profile:', profileError);
              }
              
              if (!profile) {
                let username = user.email ? user.email.split('@')[0] : 'user';
                
                if (user.app_metadata?.provider === 'google' && user.user_metadata?.name) {
                  username = user.user_metadata.name.split(' ')[0];
                }
                
                await supabase
                  .from('profiles')
                  .insert({
                    id: user.id,
                    username: username,
                    avatar_url: user.user_metadata?.avatar_url
                  });
              }
              
              toast({
                title: "Welcome!",
                description: user.app_metadata?.provider === 'google' 
                  ? "You have successfully logged in with Google." 
                  : "You have successfully logged in.",
                duration: 3000,
              });
              navigate('/');
            }
          } else {
            // No user and no session in URL - redirect to auth page
            navigate('/auth');
          }
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
