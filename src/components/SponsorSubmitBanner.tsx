
import { useState } from 'react';
import { sponsors } from '../data/sponsors';
import { ExternalLink } from 'lucide-react';

// Pick a random sponsor with a discount
const sponsorsWithDiscount = sponsors.filter(s => s.discount);
const randomSponsor = sponsorsWithDiscount[Math.floor(Math.random() * sponsorsWithDiscount.length)];

const SponsorSubmitBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  if (!randomSponsor || !isOpen) return null;
  
  return (
    <div className="card-festive p-4 mb-6 bg-gradient-to-r from-festival-cream to-white dark:from-indigo-900/30 dark:to-gray-900 shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 w-36 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded p-2">
          <img 
            src={randomSponsor.logo} 
            alt={randomSponsor.name}
            className="max-h-12 max-w-28 object-contain"
          />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <p className="text-festival-maroon dark:text-festival-golden font-medium mb-1">
            Special offer for participants:
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {randomSponsor.discount}
            {randomSponsor.promoCode && (
              <span className="ml-2 font-mono bg-white dark:bg-gray-800 px-2 py-0.5 rounded text-xs">
                Code: {randomSponsor.promoCode}
              </span>
            )}
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <a 
            href={randomSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-festival-red text-white dark:bg-amber-500 dark:text-gray-900 rounded text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Redeem <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorSubmitBanner;
