
import { sponsors } from "../data/sponsors";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const SponsorShowcase = () => {
  if (sponsors.length === 0) return null;
  
  return (
    <section className="w-full py-14 bg-gradient-to-br from-festival-cream/80 via-festival-golden/10 to-white dark:from-gray-900 dark:to-indigo-950/60 relative">
      <div className="festival-container flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-festival-maroon dark:text-festival-golden tracking-tight mb-2 fancy-underline">
            Our Gold Sponsor
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-1">
            Proud to be supported by <span className="text-festival-saffron font-semibold">{sponsors[0].name}</span>
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl group">
            <a
              href={sponsors[0].website}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold px-6 py-3 rounded-full bg-festival-maroon/80 backdrop-blur-sm flex items-center gap-2">
                  Contact Now <ExternalLink size={18} />
                </span>
              </div>
              <img 
                src={sponsors[0].banner} 
                alt={sponsors[0].name}
                className="w-full h-auto rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/sponsors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-festival-maroon text-white rounded-full hover:bg-festival-red transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Sponsorship Details
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;
