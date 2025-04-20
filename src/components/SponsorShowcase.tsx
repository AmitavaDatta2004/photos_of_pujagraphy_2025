
import { sponsors } from "../data/sponsors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Star, Package } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

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
  if (tier === "platinum") return <Award size={22} className="text-yellow-500" />;
  if (tier === "gold") return <Star size={22} className="text-amber-400" />;
  return <Package size={20} className="text-gray-400/80" />;
};

const SponsorShowcase = () => {
  const isMobile = useIsMobile();
  
  return (
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
        
        <div className="w-full max-w-5xl relative px-4">
          <Carousel opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {sponsors.map((sponsor) => (
                <CarouselItem 
                  key={sponsor.id} 
                  className="basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 px-2 sm:px-3"
                >
                  <div
                    className={`relative border-2 border-festival-golden/30 dark:border-festival-golden/40 
                    hover:shadow-md transition-all duration-300 group rounded-2xl p-4 sm:p-6 
                    bg-gradient-to-b ${getTierColor(sponsor.tier)} 
                    hover:translate-y-[-5px] hover:rotate-[1deg]`}
                    style={{ minHeight: 280 }}
                  >
                    {/* Tier + logo/icons */}
                    <div className="flex flex-col items-center z-10 relative">
                      <div className="mb-2 group-hover:animate-bounce">{getTierIcon(sponsor.tier)}</div>
                      <div className="relative">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-16 w-auto object-contain mb-2 rounded-xl mx-auto group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-festival-red dark:text-festival-golden text-lg hover:text-festival-maroon transition mt-2 
                        relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-festival-maroon dark:after:bg-festival-golden 
                        hover:after:w-full after:transition-all after:duration-300"
                      >
                        {sponsor.name}
                      </a>
                      <span className="block text-xs text-gray-800 dark:text-gray-200 mt-2 text-center px-2">
                        {sponsor.description}
                      </span>
                      {sponsor.discount && (
                        <span className="mt-3 inline-block rounded-lg bg-festival-golden/10 dark:bg-festival-golden/30 text-xs text-festival-maroon dark:text-white px-3 py-1 group-hover:scale-105 transform transition-transform duration-300">
                          <span className="font-semibold">{sponsor.discount}</span>
                          {sponsor.promoCode && <span className="ml-2 font-mono">({sponsor.promoCode})</span>}
                        </span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-3 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 relative left-0 bg-white/80 dark:bg-gray-800/80 
              hover:bg-festival-golden/20 hover:text-festival-maroon dark:hover:text-festival-golden" />
            </div>
            
            <div className="absolute -right-3 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 relative right-0 bg-white/80 dark:bg-gray-800/80 
              hover:bg-festival-golden/20 hover:text-festival-maroon dark:hover:text-festival-golden" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;
