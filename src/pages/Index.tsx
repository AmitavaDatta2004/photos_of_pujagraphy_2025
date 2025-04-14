
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import SubmitSection from "../components/SubmitSection";
import JudgesSection from "../components/JudgesSection";
import WinnersSection from "../components/WinnersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import StatsSection from "../components/StatsSection";
import DeveloperSection from "../components/DeveloperSection";
import ContestTimeline from "../components/ContestTimeline";
import OrganizingTeamSection from "../components/OrganizingTeamSection";

const Index = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 bg-white transition-colors duration-300 dark:bg-gradient-to-b dark:from-gray-900 dark:to-indigo-950/50">
      <div className="dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-indigo-900/20 dark:via-gray-900 dark:to-gray-900">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ContestTimeline />
        <StatsSection />
        <GallerySection />
        <SubmitSection />
        <JudgesSection />
        <WinnersSection />
        <OrganizingTeamSection />
        <DeveloperSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
