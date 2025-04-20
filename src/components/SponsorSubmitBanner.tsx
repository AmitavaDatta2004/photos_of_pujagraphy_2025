
import { useEffect, useState } from 'react';
import { sponsors } from '../data/sponsors';
import { ExternalLink, BadgePercent } from 'lucide-react';

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

  // Reappear logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!isOpen && !hiddenTimestamp) {
      setHiddenTimestamp(Date.now());
    }
    if (!isOpen && hiddenTimestamp) {
      timer = setTimeout(() => {
        setIsOpen(true);
        setHiddenTimestamp(null);
      }, 30000); // 30s
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen, hiddenTimestamp]);

  if (!randomSponsor || !isOpen) return null;

  return (
    <div className="card-festive p-4 mb-6 bg-gradient-to-br from-festival-golden/30 to-festival-cream/90 dark:from-indigo-900/50 dark:to-gray-900 shadow-xl relative overflow-hidden group animate-fade-in rounded-xl">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 z-10 text-festival-red/60 dark:text-festival-golden/80 bg-white/60 hover:bg-white transition rounded-full p-1 shadow-sm"
        aria-label="Close Sponsor Offer"
      >
        ×
      </button>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 w-36 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded glass shadow-inner">
          <img
            src={randomSponsor.logo}
            alt={randomSponsor.name}
            className="max-h-12 max-w-28 object-contain transition-transform group-hover:scale-110"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1 mb-1 text-festival-maroon dark:text-festival-golden font-semibold">
            <BadgePercent size={18} className="inline" />
            Special offer for participants:
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            {randomSponsor.discount}
            {randomSponsor.promoCode && (
              <span className="ml-2 font-mono bg-white/90 dark:bg-gray-800 px-2 py-0.5 rounded text-xs">
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
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-festival-red via-festival-maroon to-festival-red text-white dark:bg-amber-500 dark:text-gray-900 rounded-lg text-sm font-medium shadow-lg hover:opacity-90 transition"
          >
            Redeem <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorSubmitBanner;
