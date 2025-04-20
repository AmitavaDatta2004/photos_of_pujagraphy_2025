
import { sponsors } from '../data/sponsors';
import { useTheme } from '../hooks/useTheme';

const SponsorsLogoRow = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-gray-50'}`}>
      <div className="festival-container">
        <h3 className={`text-center text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Proudly Supported By
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`opacity-60 hover:opacity-100 transition-opacity ${
                sponsor.tier === 'platinum' ? 'scale-110' : 
                sponsor.tier === 'gold' ? 'scale-100' : 'scale-90'
              }`}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsLogoRow;
