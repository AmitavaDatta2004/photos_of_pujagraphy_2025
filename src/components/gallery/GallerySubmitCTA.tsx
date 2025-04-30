
import React from 'react';
import { Share, Camera } from 'lucide-react';

const GallerySubmitCTA = () => {
  return (
    <div className="mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-festival-maroon/20 to-festival-golden/20 dark:from-festival-maroon/10 dark:to-festival-golden/10 -z-10 rounded-xl"></div>
      
      <div className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-center border border-festival-golden/30 dark:border-festival-golden/20">
        <div className="mx-auto w-12 h-12 bg-festival-maroon/10 dark:bg-festival-golden/10 rounded-full flex items-center justify-center mb-4">
          <Camera className="text-festival-maroon dark:text-festival-golden" size={24} />
        </div>
        
        <h3 className="text-2xl font-heading text-festival-maroon dark:text-festival-golden mb-3">
          Capture the Magic of Puja?
        </h3>
        
        <p className="mb-6 text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
          Share your beautiful moments with our community and be featured in our gallery. 
          Your photographs help preserve and celebrate our cultural heritage!
        </p>
        
        <a 
          href="https://forms.google.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center bg-festival-maroon hover:bg-festival-maroon/90 text-white dark:bg-festival-golden dark:hover:bg-festival-golden/90 dark:text-festival-maroon py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <Share size={18} className="mr-2" />
          Submit Your Photos
        </a>
      </div>
    </div>
  );
};

export default GallerySubmitCTA;
