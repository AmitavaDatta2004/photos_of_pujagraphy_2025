
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { sponsors } from '../data/sponsors';

const SponsorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Show popup after 20 seconds of browsing
  useEffect(() => {
    // Check if we've shown this popup recently
    const lastShown = localStorage.getItem('sponsorPopupLastShown');
    const currentTime = new Date().getTime();
    
    // Only show once per day
    if (!lastShown || currentTime - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('sponsorPopupLastShown', currentTime.toString());
      }, 20000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Get a random platinum or gold sponsor
  const featuredSponsors = sponsors.filter(s => s.tier === 'platinum' || s.tier === 'gold');
  const randomSponsor = featuredSponsors[Math.floor(Math.random() * featuredSponsors.length)];
  
  if (!randomSponsor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="relative">
          <DialogClose className="absolute top-2 right-2 z-10 rounded-full bg-black/20 p-1 text-white hover:bg-black/40">
            <X size={18} />
          </DialogClose>
          
          <div className="bg-gradient-to-r from-festival-red/90 to-festival-maroon dark:from-amber-600 dark:to-red-700 p-4 text-white">
            <h3 className="text-xl font-bold">Special Offer from {randomSponsor.name}</h3>
            <p className="text-sm opacity-90">Exclusive for Pujagraphy participants</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-900">
            <div className="flex justify-center mb-4">
              <img 
                src={randomSponsor.logo} 
                alt={randomSponsor.name}
                className="max-h-16 object-contain" 
              />
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              {randomSponsor.description}
            </p>
            
            {randomSponsor.discount && (
              <div className="bg-festival-golden/10 dark:bg-festival-golden/20 p-4 rounded-lg mb-6 text-center">
                <p className="font-bold text-festival-maroon dark:text-white text-lg mb-1">
                  {randomSponsor.discount}
                </p>
                {randomSponsor.promoCode && (
                  <p className="font-mono bg-white dark:bg-gray-800 inline-block px-3 py-1 rounded text-gray-800 dark:text-white">
                    {randomSponsor.promoCode}
                  </p>
                )}
              </div>
            )}
            
            <div className="flex justify-center gap-4">
              <DialogClose asChild>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Maybe Later
                </button>
              </DialogClose>
              
              <a 
                href={randomSponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-festival-red text-white dark:bg-amber-500 dark:text-gray-900 rounded-md hover:opacity-90 transition-opacity"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsorPopup;
