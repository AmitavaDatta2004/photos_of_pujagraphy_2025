
import { sponsors } from '../data/sponsors';
import { useTheme } from '../hooks/useTheme';

const SponsorsLogoRow = () => {
  const { theme } = useTheme();
  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-900/70' : 'bg-festival-cream/40'}`}>
      <div className="festival-container">
        <h3 className={`text-center text-lg mb-8 fancy-underline ${theme === 'dark' ? 'text-festival-golden/80' : 'text-festival-maroon/70'}`}>
          Proudly Supported By
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-center justify-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group transition-transform duration-300
                hover:scale-105 hover:drop-shadow-golden hover:rotate-[-2deg]
                ${sponsor.tier === 'platinum' ? 'scale-110 z-10' : sponsor.tier === 'gold' ? 'scale-100' : 'scale-95'}
              `}
            >
              {/* Sparkle shimmer on hover */}
              <span className="absolute inset-0 pointer-events-none shimmer-gradient group-hover:opacity-80 opacity-40 rounded -z-10 transition-opacity duration-200" />
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-12 md:h-12 w-auto object-contain sponsor-logo-img group-hover:brightness-110 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsLogoRow;
