
import { Sponsor } from '../data/sponsors';
import { ExternalLink } from 'lucide-react';

interface SponsorTierSectionProps {
  tier: string;
  sponsors: Sponsor[];
  bgClass: string;
  tierDescription: string;
}

const SponsorTierSection = ({ tier, sponsors, bgClass, tierDescription }: SponsorTierSectionProps) => {
  return (
    <section className={`rounded-xl p-6 mb-16 ${bgClass}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-festival-maroon dark:text-festival-golden">
          {tier} Sponsors
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {tierDescription}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {sponsors.map((sponsor) => (
          <div 
            key={sponsor.id}
            className="card-festive p-6 flex flex-col items-center md:items-start md:flex-row gap-6 hover-lift"
          >
            <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg p-2">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-16 max-w-32 object-contain"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-2">
                {sponsor.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {sponsor.description}
              </p>
              
              {sponsor.discount && (
                <div className="mb-4 p-2 bg-festival-golden/10 dark:bg-festival-golden/20 rounded-md text-festival-maroon dark:text-white">
                  <span className="font-bold">Special Offer:</span> {sponsor.discount}
                  {sponsor.promoCode && (
                    <span className="ml-2 font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded text-sm">
                      Code: {sponsor.promoCode}
                    </span>
                  )}
                </div>
              )}
              
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-festival-red dark:text-amber-400 hover:underline"
              >
                Visit Website <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorTierSection;
