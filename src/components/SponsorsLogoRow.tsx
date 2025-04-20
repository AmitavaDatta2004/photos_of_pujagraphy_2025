
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 sm:gap-x-8 items-center justify-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group transition-all duration-300
                hover:scale-105 hover:rotate-[-2deg]
                ${sponsor.tier === 'platinum' ? 'scale-110 z-10' : sponsor.tier === 'gold' ? 'scale-100' : 'scale-95'}
              `}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-3 transition-all duration-300 
                group-hover:shadow-md group-hover:bg-white dark:group-hover:bg-gray-800">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-10 sm:h-12 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
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
