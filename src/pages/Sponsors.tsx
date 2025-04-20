
import { sponsors, platinumSponsors, goldSponsors, silverSponsors } from '../data/sponsors';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ExternalLink } from 'lucide-react';
import SponsorTierSection from '../components/SponsorTierSection';

const Sponsors = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 bg-white transition-colors duration-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-950/50">
      <div className="dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-indigo-900/20 dark:via-gray-900 dark:to-gray-900">
        <Navbar />
        
        <main className="pt-28 pb-20">
          <div className="festival-container">
            <h1 className="section-title">Our Sponsors</h1>
            <p className="section-subtitle mb-16">Partners who make this competition possible</p>
            
            {/* Platinum Sponsors */}
            <SponsorTierSection 
              tier="Platinum" 
              sponsors={platinumSponsors}
              bgClass="bg-gradient-to-r from-gray-200 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
              tierDescription="Our premier partners who provide extraordinary support for our photography competition."
            />
            
            {/* Gold Sponsors */}
            <SponsorTierSection 
              tier="Gold" 
              sponsors={goldSponsors}
              bgClass="bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-amber-900/20 dark:via-gray-900 dark:to-amber-900/20"
              tierDescription="Key supporters who contribute significantly to our prizes and competition operations."
            />
            
            {/* Silver Sponsors */}
            <SponsorTierSection 
              tier="Silver" 
              sponsors={silverSponsors}
              bgClass="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50"
              tierDescription="Valued partners who help enhance the competition experience for all participants."
            />
            
            <div className="mt-24 text-center">
              <h2 className="text-2xl font-heading font-bold text-festival-maroon dark:text-festival-golden mb-4">Interested in Sponsoring?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
                We offer various sponsorship packages for businesses looking to connect with photography enthusiasts. 
                Reach out to learn more about partnership opportunities.
              </p>
              <a 
                href="#contact" 
                className="btn-festive"
              >
                Contact For Sponsorship
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Sponsors;
