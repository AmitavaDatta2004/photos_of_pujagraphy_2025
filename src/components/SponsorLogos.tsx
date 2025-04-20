
import React from "react";
import { sponsors } from "@/data/sponsors";

const SponsorLogos = () => (
  <section
    className="w-full py-5 flex items-center justify-center sponsor-logos-row bg-gradient-to-r from-festival-saffron/50 via-festival-cream/80 to-festival-red/20 dark:from-festival-maroon/40 dark:via-orange-900/60 dark:to-festival-golden/10"
    aria-label="Our Sponsors"
  >
    <div className="flex flex-wrap gap-8 px-2 md:px-8 w-full max-w-5xl justify-center items-center">
      {sponsors.map((sponsor) => (
        <a
          href={sponsor.website}
          key={sponsor.id}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:drop-shadow-xl"
          title={sponsor.name}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="h-12 w-12 md:h-16 md:w-16 rounded-lg shadow-md bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-festival-golden/20 p-1"
          />
        </a>
      ))}
    </div>
  </section>
);

export default SponsorLogos;
