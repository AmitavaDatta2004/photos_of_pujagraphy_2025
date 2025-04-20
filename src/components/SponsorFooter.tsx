
import { sponsors } from '../data/sponsors';

const SponsorFooter = () => {
  return (
    <div className="py-6 border-t border-white/10">
      <div className="festival-container">
        <div className="text-center mb-4">
          <p className="text-white/60 text-sm">Proudly Supported By</p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
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

export default SponsorFooter;
