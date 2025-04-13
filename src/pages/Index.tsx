
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <SubmitSection />
      <JudgesSection />
      <WinnersSection />
      <ContactSection />
      <DeveloperSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
