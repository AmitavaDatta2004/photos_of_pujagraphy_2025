
import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import { Heart, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface AuthButtonProps {
  user: User | null;
  onAuthChange: (user: User | null) => void;
}

const AuthButton = ({ user, onAuthChange }: AuthButtonProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogin = () => {
    navigate('/auth');
  };
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      onAuthChange(null);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };
  
  return (
    <div>
      {user ? (
        <Button
          onClick={handleLogout}
          variant="outline"
          className="flex items-center gap-2 text-festival-maroon border-festival-golden hover:bg-festival-golden/10 dark:text-festival-golden dark:border-festival-golden/70 dark:hover:bg-festival-golden/20"
        >
          <UserIcon size={16} className="mr-1" />
          <span className="hidden md:inline">{user.email?.split('@')[0]}</span>
          <LogOut size={16} />
        </Button>
      ) : (
        <Button
          onClick={handleLogin}
          variant="outline"
          className="flex items-center gap-2 text-festival-maroon border-festival-golden hover:bg-festival-golden/10 dark:text-festival-golden dark:border-festival-golden/70 dark:hover:bg-festival-golden/20"
        >
          <LogIn size={16} className="mr-1" />
          <span>Log In</span>
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
