
import { sponsors } from '../data/sponsors';
import { useTheme } from '../hooks/useTheme';

const SponsorsLogoRow = () => {
  const { theme } = useTheme();
  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-900/70' : 'bg-festival-cream/40'}`}>
      <div className="festival-container">
        <h3 className={`text-center text-lg mb-8 fancy-underline inline-block relative ${theme === 'dark' ? 'text-festival-golden/80' : 'text-festival-maroon/70'}`}>
          Proudly Supported By
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 sm:gap-x-8 items-center justify-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group transition-all duration-300 p-4
                hover:scale-110 hover:-rotate-2
                ${sponsor.tier === 'platinum' ? 'scale-110 z-10' : sponsor.tier === 'gold' ? 'scale-105' : 'scale-100'}
              `}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3 transition-all duration-300 
                backdrop-blur-sm group-hover:shadow-xl
                group-hover:bg-white dark:group-hover:bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent dark:from-white/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-10 sm:h-12 w-auto object-contain relative z-10 
                    group-hover:brightness-110 transition-all duration-300
                    filter hover:drop-shadow-lg"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsLogoRow;
