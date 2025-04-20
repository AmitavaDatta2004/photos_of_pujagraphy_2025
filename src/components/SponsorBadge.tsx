
import { useState, useEffect } from 'react';
import { sponsors } from '../data/sponsors';
import { X } from 'lucide-react';

const SponsorBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sponsorIndex, setSponsorIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Rotate through sponsors every 10 seconds
  useEffect(() => {
    if (isDismissed) return;
    
    const timer = setTimeout(() => {
      setSponsorIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [sponsorIndex, isDismissed]);

  // Show badge after 5 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const currentSponsor = sponsors[sponsorIndex];

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[250px] animation-fade-in">
      <div className="card-festive overflow-hidden shadow-lg">
        <div className="flex items-center justify-between bg-festival-maroon dark:bg-gray-800 text-white px-3 py-2">
          <span className="text-sm font-medium">Featured Sponsor</span>
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-900">
          <div className="flex items-center justify-center h-16 mb-2">
            <img 
              src={currentSponsor.logo} 
              alt={currentSponsor.name} 
              className="max-h-12 max-w-[180px] object-contain"
            />
          </div>
          
          <p className="text-sm text-center text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
            {currentSponsor.discount || currentSponsor.description}
          </p>
          
          <a 
            href={currentSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-festival-red text-white dark:bg-amber-500 dark:text-gray-900 py-1.5 rounded text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorBadge;
