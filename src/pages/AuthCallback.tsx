
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
      if (hash) {
        try {
          const { data, error } = await supabase.auth.getUser();
          
          if (error) throw error;
          
          if (data.user) {
            toast({
              title: "Welcome!",
              description: "You have successfully logged in.",
              duration: 3000,
            });
            navigate('/');
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
      } else {
        navigate('/');
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
