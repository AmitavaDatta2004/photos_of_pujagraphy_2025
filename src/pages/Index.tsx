
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <SubmitSection />
      <JudgesSection />
      <WinnersSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
