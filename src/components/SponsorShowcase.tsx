import { sponsors } from "../data/sponsors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Star, Package, ArrowRight } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Link } from "react-router-dom";

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
                    className="relative overflow-hidden border border-festival-golden/30 dark:border-festival-golden/40 
                    hover:shadow-xl transition-all duration-500 group rounded-2xl p-4 sm:p-6 
                    bg-white/20 backdrop-blur-sm dark:bg-gray-900/40
                    hover:scale-[1.02] hover:rotate-[0.5deg]"
                    style={{ minHeight: 280 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex flex-col items-center z-10 relative">
                      <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300 ease-out">
                        {getTierIcon(sponsor.tier)}
                      </div>
                      <div className="relative">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-16 w-auto object-contain mb-2 rounded-xl mx-auto transform group-hover:scale-110 transition-all duration-500 ease-out"
                        />
                      </div>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-festival-red dark:text-festival-golden text-lg hover:text-festival-maroon transition-all duration-300 
                        relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-festival-maroon dark:after:bg-festival-golden 
                        hover:after:w-full after:transition-all after:duration-300"
                      >
                        {sponsor.name}
                      </a>
                      <span className="block text-xs text-gray-800 dark:text-gray-200 mt-2 text-center px-2 transform group-hover:scale-105 transition-all duration-300">
                        {sponsor.description}
                      </span>
                      {sponsor.discount && (
                        <span className="mt-3 inline-block rounded-lg bg-festival-golden/10 dark:bg-festival-golden/30 text-xs text-festival-maroon dark:text-white px-3 py-1 transform group-hover:scale-105 transition-all duration-300">
                          <span className="font-semibold">{sponsor.discount}</span>
                          {sponsor.promoCode && <span className="ml-2 font-mono">({sponsor.promoCode})</span>}
                        </span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute -left-3 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 dark:bg-gray-800/80 hover:bg-festival-golden/20 hover:text-festival-maroon 
              dark:hover:text-festival-golden backdrop-blur-sm transition-all duration-300" />
            
            <CarouselNext className="absolute -right-3 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 
              bg-white/80 dark:bg-gray-800/80 hover:bg-festival-golden/20 hover:text-festival-maroon 
              dark:hover:text-festival-golden backdrop-blur-sm transition-all duration-300" />
          </Carousel>
        </div>

        <Link
          to="/sponsors"
          className="mt-10 group inline-flex items-center gap-2 px-6 py-3 rounded-full 
          bg-gradient-to-r from-festival-maroon to-festival-red dark:from-festival-golden dark:to-festival-red
          text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300
          relative overflow-hidden"
        >
          <span className="relative z-10">View All Sponsors</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-festival-red to-festival-maroon dark:from-festival-red dark:to-festival-golden opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default SponsorShowcase;
