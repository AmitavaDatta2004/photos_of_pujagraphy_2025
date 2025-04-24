
import { sponsors } from "../data/sponsors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Star, Package, ArrowRight } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Link } from "react-router-dom";

const getTierIcon = (tier: string) => {
  if (tier === "platinum") return <Award size={22} className="text-amber-500" />;
  if (tier === "gold") return <Star size={22} className="text-yellow-500" />;
  return <Package size={20} className="text-zinc-400" />;
};

const SponsorShowcase = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-14 relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-festival-cream/80 via-festival-golden/10 to-white dark:from-gray-900/90 dark:via-gray-800/30 dark:to-gray-900/95 backdrop-blur-xl z-0" />
      
      <div className="festival-container flex flex-col items-center relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-festival-maroon dark:text-festival-golden tracking-tight mb-4">
            Meet Our Sponsors
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Grateful for our <span className="text-festival-saffron font-semibold">generous partners</span>
          </p>
          <Link 
            to="/sponsors" 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-festival-maroon via-festival-red to-festival-saffron 
            text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg 
            dark:from-amber-500 dark:via-amber-600 dark:to-red-600 group"
          >
            View All Sponsors
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
                    className="relative overflow-hidden rounded-2xl p-4 sm:p-6 backdrop-blur-md
                    bg-white/40 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/30
                    hover:shadow-xl hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-gray-800/60
                    transition-all duration-300 group"
                    style={{ minHeight: 280 }}
                  >
                    {/* Glassmorphism inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent dark:from-white/10" />
                    
                    <div className="relative z-10">
                      <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {getTierIcon(sponsor.tier)}
                      </div>
                      
                      <div className="relative mb-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-16 w-auto object-contain mx-auto rounded-lg
                          group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-festival-maroon dark:text-festival-golden text-lg 
                        hover:text-festival-red dark:hover:text-amber-400 transition-colors duration-300 block"
                      >
                        {sponsor.name}
                      </a>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                        {sponsor.description}
                      </p>
                      
                      {sponsor.discount && (
                        <div className="mt-4 p-2 rounded-lg bg-festival-golden/10 dark:bg-festival-golden/20
                        transform group-hover:scale-105 transition-all duration-300">
                          <p className="text-sm font-medium text-festival-maroon dark:text-white">
                            {sponsor.discount}
                            {sponsor.promoCode && (
                              <span className="block mt-1 font-mono text-xs opacity-75">
                                Code: {sponsor.promoCode}
                              </span>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-3 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 z-20">
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 bg-white/80 dark:bg-gray-800/80 
              hover:bg-festival-golden/20 hover:text-festival-maroon dark:hover:text-festival-golden
              border border-white/20 dark:border-gray-700/30" />
            </div>
            
            <div className="absolute -right-3 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 z-20">
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 bg-white/80 dark:bg-gray-800/80 
              hover:bg-festival-golden/20 hover:text-festival-maroon dark:hover:text-festival-golden
              border border-white/20 dark:border-gray-700/30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;
