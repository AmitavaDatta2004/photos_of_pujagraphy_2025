
import { platinumSponsors } from '../data/sponsors';
import { useTheme } from '../hooks/useTheme';
import { Camera } from 'lucide-react';

const SponsorsHeroBanner = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`w-full py-3 px-4 ${theme === 'dark' ? 'bg-gray-800/90 border-b border-gray-700' : 'bg-festival-cream/90 border-b border-festival-golden/20'} backdrop-blur-sm`}>
      <div className="festival-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Camera size={18} className="text-festival-red" />
          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-festival-maroon'}`}>
            Proudly sponsored by
          </span>
        </div>
        
        <div className="flex items-center gap-4 overflow-x-auto py-1 no-scrollbar">
          {platinumSponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition hover:opacity-80"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsHeroBanner;
