
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="festival-container flex items-center justify-between">
        <a href="#" className="flex flex-col items-start gap-0">
          <span className="text-festival-maroon font-heading text-2xl font-bold">Photos of Pujagraphy</span>
          <span className="text-xs text-festival-saffron -mt-1">by Utsab Unites</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">About</a>
          <a href="#gallery" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Gallery</a>
          <a href="#submit" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Submit</a>
          <a href="#judges" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Judges</a>
          <a href="#winners" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Winners</a>
          <a href="#contact" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Contact</a>
          <a href="#developer" className="text-festival-maroon hover:text-festival-red font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all">Developer</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-festival-maroon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '60px' }}>
        <div className="p-4 flex flex-col gap-4 text-lg">
          <a href="#about" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#gallery" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#submit" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>Submit</a>
          <a href="#judges" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>Judges</a>
          <a href="#winners" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>Winners</a>
          <a href="#contact" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2 border-b border-festival-golden/20" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#developer" className="text-festival-maroon hover:text-festival-red font-medium transition-colors p-2" onClick={() => setMobileMenuOpen(false)}>Developer</a>
          
          <div className="mt-4 p-4 bg-festival-cream/30 rounded-lg text-center">
            <p className="text-festival-saffron font-medium">Organized by</p>
            <p className="text-festival-maroon text-xl font-heading">Utsab Unites</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
