
import { sponsors } from "../data/sponsors";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Star, Package } from "lucide-react";

const getTierColor = (tier: string) => {
  switch (tier) {
    case "platinum":
      return "from-amber-300 via-amber-100 to-amber-500 dark:from-gray-700 dark:to-gray-900";
    case "gold":
      return "from-yellow-200 via-amber-50 to-yellow-400 dark:from-amber-900/30 dark:to-gray-900";
    case "silver":
    default:
      return "from-slate-200 via-white to-gray-100 dark:from-gray-800 dark:to-gray-900";
  }
};

const getTierIcon = (tier: string) => {
  if (tier === "platinum") return <Award size={18} className="text-amber-500" />;
  if (tier === "gold") return <Star size={18} className="text-yellow-400" />;
  return <Package size={18} className="text-gray-400" />;
};

const SponsorShowcase = () => (
  <section className="w-full py-10 md:py-14 bg-gradient-to-br from-festival-cream via-festival-golden/10 to-white dark:from-gray-900 dark:to-indigo-950/70 relative mb-10">
    <div className="festival-container flex flex-col items-center">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-festival-maroon dark:text-festival-golden tracking-tight mb-2">
          Our Amazing Sponsors
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-3">
          Photography Fest is made possible by our generous partners
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselPrevious />
          <CarouselContent>
            {sponsors.map((sponsor) => (
              <CarouselItem key={sponsor.id} className="basis-1/2 md:basis-1/3 px-2">
                <div
                  className={`flex flex-col items-center justify-center py-6 px-4 rounded-2xl transition-shadow hover:shadow-2xl glass bg-gradient-to-b ${getTierColor(
                    sponsor.tier
                  )} animate-fade-in`}
                >
                  <div className="mb-2">{getTierIcon(sponsor.tier)}</div>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-14 md:h-16 object-contain mb-2"
                  />
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-festival-red dark:text-amber-400 hover:underline mb-1"
                  >
                    {sponsor.name}
                  </a>
                  <span className="text-xs text-gray-600 dark:text-gray-200 text-center">
                    {sponsor.description}
                  </span>
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
