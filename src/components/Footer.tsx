
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-festival-maroon text-white py-12">
      <div className="festival-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold">Photos of Pujagraphy</h2>
            <p className="text-white/70 mt-2">Capture the Spirit, Share the Soul of Puja</p>
            <p className="text-festival-golden text-sm mt-1">Organized by Utsab Unites</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">About</a>
            <a href="#gallery" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Gallery</a>
            <a href="#submit" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Submit</a>
            <a href="#judges" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Judges</a>
            <a href="#winners" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Winners</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Contact</a>
            <a href="#developer" className="text-white/90 hover:text-white transition-colors hover:scale-105 transform duration-300 inline-block">Developer</a>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="text-center text-white/70">
          <p className="mb-2">
            &copy; {currentYear} Photos of Pujagraphy by Utsab Unites. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-festival-red" /> by Amitava Datta for Puja enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
