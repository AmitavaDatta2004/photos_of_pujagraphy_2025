
import { sponsors } from "../data/sponsors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Star, Package } from "lucide-react";

const getTierColor = (tier: string) => {
  switch (tier) {
    case "platinum":
      return "from-yellow-400 via-amber-200 to-yellow-500 dark:from-festival-golden dark:via-yellow-600 dark:to-yellow-900";
    case "gold":
      return "from-amber-200 via-yellow-50 to-yellow-400 dark:from-yellow-900/40 dark:via-festival-golden/30 dark:to-amber-900/60";
    case "silver":
    default:
      return "from-gray-100 via-white to-gray-200 dark:from-gray-700 dark:to-gray-950/60";
  }
};

const getTierIcon = (tier: string) => {
  if (tier === "platinum") return <Award size={22} className="text-yellow-500 drop-shadow-glow" />;
  if (tier === "gold") return <Star size={22} className="text-amber-400 drop-shadow-glow" />;
  return <Package size={20} className="text-gray-400/80" />;
};

const SponsorShowcase = () => (
  <section className="w-full py-14 bg-gradient-to-br from-festival-cream/80 via-festival-golden/10 to-white dark:from-gray-900 dark:to-indigo-950/60 relative mb-10">
    <div className="festival-container flex flex-col items-center">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-festival-maroon dark:text-festival-golden tracking-tight mb-2 fancy-underline">
          Meet Our Sponsors
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-1">
          Grateful for our <span className="text-festival-saffron font-semibold">generous partners</span>
        </p>
      </div>
      <div className="w-full max-w-5xl relative">
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselPrevious />
          <CarouselContent>
            {sponsors.map((sponsor, i) => (
              <CarouselItem key={sponsor.id} className="basis-11/12 sm:basis-5/12 lg:basis-1/3 2xl:basis-1/4 px-3">
                <div
                  className={`relative border-2 border-festival-golden/30 dark:border-festival-golden/40 bg-clip-padding hover:shadow-golden/60 hover:scale-[1.03] transition-all duration-300 ease-glow group rounded-2xl p-6 md:p-8 glassy-card backdrop-blur-xl bg-gradient-to-b ${getTierColor(
                    sponsor.tier
                  )} animate-fade-in`}
                  style={{ minHeight: 300 }}
                >
                  {/* Shimmer ring */}
                  <div className="absolute -inset-1 z-0 rounded-2xl pointer-events-none shimmer-gradient group-hover:opacity-90 opacity-50 transition-opacity duration-300" />
                  {/* Tier + logo/icons */}
                  <div className="flex flex-col items-center z-10 relative">
                    <div className="mb-2 animate-float">{getTierIcon(sponsor.tier)}</div>
                    <div className="relative">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-16 w-auto object-contain mb-2 rounded-xl mx-auto hover:drop-shadow-glow transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none glassy-gloss" />
                    </div>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-festival-red dark:text-festival-golden text-lg hover:text-festival-maroon hover:scale-105 fancy-link transition mt-2"
                    >
                      {sponsor.name}
                    </a>
                    <span className="block text-xs text-gray-800 dark:text-gray-200 mt-2 text-center px-2">
                      {sponsor.description}
                    </span>
                    {sponsor.discount && (
                      <span className="mt-3 inline-block rounded-lg bg-festival-golden/10 dark:bg-festival-golden/30 text-xs text-festival-maroon dark:text-white px-3 py-1 shimmer-highlight">
                        <span className="font-semibold">{sponsor.discount}</span>
                        {sponsor.promoCode && <span className="ml-2 font-mono">({sponsor.promoCode})</span>}
                      </span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  </section>
);

export default SponsorShowcase;
