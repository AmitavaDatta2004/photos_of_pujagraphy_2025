
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
import { ThemeProvider } from "../hooks/useTheme";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-gray-900 bg-white transition-colors duration-300">
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
        <ContactSection />
        <DeveloperSection />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
