
import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { sponsors } from '../data/sponsors';

const SponsorBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show badge after 5 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isDismissed]);

  if (!isVisible || isDismissed || sponsors.length === 0) return null;

  const currentSponsor = sponsors[0];

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[300px] animate-fade-in">
      <div className="card-festive overflow-hidden shadow-lg backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
        <div className="flex items-center justify-between bg-festival-maroon dark:bg-gray-800 text-white px-3 py-2">
          <span className="text-sm font-medium">Special Offer</span>
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-center h-16 mb-2">
            <img 
              src={currentSponsor.logo} 
              alt={currentSponsor.name} 
              className="max-h-16 w-auto object-contain"
            />
          </div>
          
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-3">
            {currentSponsor.description}
          </p>
          
          <a 
            href={currentSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-festival-red hover:bg-festival-maroon text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorBadge;
