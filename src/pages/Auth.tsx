
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, LogIn, Mail, User as UserIcon, CheckCircle2, AlertTriangle } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };
    
    checkUser();
  }, [navigate]);
  
  // Handle email/password authentication
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      if (isSignUp) {
        // Sign up
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username || email.split('@')[0],
            },
            emailRedirectTo: window.location.origin + '/auth-callback'
          }
        });
        
        if (error) throw error;
        
        setSuccess('Account created! Please check your email to confirm your account.');
        toast({
          title: "Account created!",
          description: "Please check your email to confirm your account.",
          duration: 5000,
        });
      } else {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
          duration: 3000,
        });
        
        navigate('/');
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      toast({
        title: "Authentication Error",
        description: error.message || 'An error occurred',
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/auth-callback',
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      setError(error.message || 'Failed to sign in with Google');
      toast({
        title: "Google Sign In Error",
        description: error.message || 'Failed to sign in with Google',
        variant: "destructive",
        duration: 5000,
      });
      setGoogleLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-festival-cream/30 dark:bg-gray-800/30 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md border border-festival-golden/30 dark:border-festival-golden/20 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')} 
              className="mr-2 text-festival-maroon hover:text-festival-maroon/80 dark:text-festival-golden dark:hover:text-festival-golden/80"
            >
              <ArrowLeft size={16} />
            </Button>
            <div>
              <CardTitle className="text-2xl font-heading text-festival-maroon dark:text-festival-golden">
                {isSignUp ? 'Create an Account' : 'Welcome Back'}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {isSignUp 
                  ? 'Sign up to like and comment on photos'
                  : 'Log in to your account to continue'
                }
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        {success && (
          <div className="mx-6 my-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm text-green-700 dark:text-green-300">{success}</span>
          </div>
        )}

        {error && (
          <div className="mx-6 my-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
          </div>
        )}

        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input 
                    id="username" 
                    className="pl-9 border-festival-golden/30 focus:border-festival-golden focus:ring focus:ring-festival-golden/20"
                    placeholder="Enter your preferred username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  id="email" 
                  type="email" 
                  className="pl-9 border-festival-golden/30 focus:border-festival-golden focus:ring focus:ring-festival-golden/20"
                  placeholder="example@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</Label>
              <Input 
                id="password" 
                type="password" 
                className="border-festival-golden/30 focus:border-festival-golden focus:ring focus:ring-festival-golden/20"
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-festival-maroon hover:bg-festival-maroon/90 text-white dark:bg-festival-golden dark:hover:bg-festival-golden/90 dark:text-festival-maroon"
            >
              <LogIn className="mr-2 h-4 w-4" />
              {isLoading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Log In'}
            </Button>
            
            <div className="flex items-center gap-2 py-2">
              <Separator className="flex-1" />
              <span className="text-xs text-gray-500 dark:text-gray-400">OR</span>
              <Separator className="flex-1" />
            </div>
            
            <Button 
              type="button"
              variant="outline"
              disabled={googleLoading}
              onClick={handleGoogleSignIn}
              className="w-full border-festival-golden/30 hover:bg-festival-golden/10 dark:border-festival-golden/20 dark:hover:bg-festival-golden/10"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign {isSignUp ? 'up' : 'in'} with Google
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col">
          <Button 
            variant="link" 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="w-full text-festival-maroon dark:text-festival-golden"
          >
            {isSignUp 
              ? 'Already have an account? Log In' 
              : "Don't have an account? Sign Up"
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
