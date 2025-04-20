
import { useEffect, useState } from 'react';
import { sponsors } from '../data/sponsors';
import { ExternalLink, BadgePercent } from 'lucide-react';

// Only sponsors with a discount will be shown in the promo banner
const sponsorsWithDiscount = sponsors.filter(s => s.discount);

const getRandomSponsor = () =>
  sponsorsWithDiscount[Math.floor(Math.random() * sponsorsWithDiscount.length)];

const SponsorSubmitBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hiddenTimestamp, setHiddenTimestamp] = useState<number | null>(null);
  const [randomSponsor, setRandomSponsor] = useState(() => getRandomSponsor());

  // Re-roll sponsor whenever banner is shown
  useEffect(() => {
    if (isOpen) setRandomSponsor(getRandomSponsor());
  }, [isOpen]);

  // When closed, reappear after 30s
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!isOpen && !hiddenTimestamp) setHiddenTimestamp(Date.now());
    if (!isOpen && hiddenTimestamp) {
      timer = setTimeout(() => {
        setIsOpen(true);
        setHiddenTimestamp(null);
      }, 30000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, hiddenTimestamp]);

  if (!randomSponsor || !isOpen) return null;

  return (
    <div className="sponsor-banner-glow card-festive p-4 mb-8 bg-gradient-to-r from-amber-200 via-festival-golden/40 to-festival-cream/90 dark:from-indigo-900/70 dark:via-festival-golden/10 dark:to-gray-900 shadow-2xl relative overflow-hidden group animate-fade-in rounded-xl animate-bounce-in">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 z-10 text-festival-red/70 dark:text-festival-golden/80 bg-white/60 hover:bg-white/80 blur-effect transition rounded-full p-1 shadow-sm hover:scale-105"
        aria-label="Close Sponsor Offer"
      >
        ×
      </button>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 w-36 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-inner sponsor-logo-glow relative overflow-hidden hover:scale-110 transition-transform duration-300">
          <img
            src={randomSponsor.logo}
            alt={randomSponsor.name}
            className="max-h-12 max-w-28 object-contain z-10"
          />
          <span className="absolute inset-0 glassy-gloss pointer-events-none" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1 mb-1 text-festival-maroon dark:text-festival-golden font-semibold">
            <BadgePercent size={20} className="inline animate-float" />
            Special offer for participants!
          </div>
          <div className="text-gray-800 dark:text-white text-base md:text-lg font-medium">
            {randomSponsor.discount}
            {randomSponsor.promoCode && (
              <span className="ml-2 font-bold text-festival-maroon/80 bg-white/60 dark:bg-gray-800 px-2 py-0.5 rounded text-xs shimmer-highlight">
                Code: {randomSponsor.promoCode}
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href={randomSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-festival-red/90 via-festival-maroon to-festival-red/80 text-white dark:bg-amber-500 dark:text-gray-900 rounded-xl text-base font-bold shadow-lg hover:scale-105 hover:bg-festival-red/70 transition-all duration-200"
          >
            Redeem <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorSubmitBanner;
