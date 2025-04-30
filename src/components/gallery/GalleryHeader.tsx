
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AuthButton from '../AuthButton';
import { User } from '@supabase/supabase-js';

interface GalleryHeaderProps {
  user: User | null;
  loading: boolean;
}

const GalleryHeader = ({ user, loading }: GalleryHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8 flex items-center justify-between">
      <Button 
        variant="outline" 
        className="text-festival-maroon border-festival-golden hover:bg-festival-golden/10 group dark:text-festival-golden dark:border-festival-golden/70 dark:hover:bg-festival-golden/20"
        onClick={() => navigate('/')}
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Button>
      
      <div className="text-center flex-1">
        <span className="text-sm md:text-base text-festival-saffron font-medium dark:text-festival-saffron/80">Presented by</span>
        <h3 className="text-lg md:text-xl font-heading text-festival-maroon dark:text-festival-golden">Utsab Unites</h3>
      </div>
      
      {!loading && <AuthButton user={user} onAuthChange={() => {}} />}
    </div>
  );
};

export default GalleryHeader;
