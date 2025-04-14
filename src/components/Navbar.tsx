
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen ? 
        (theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm shadow-lg py-2') 
      : 
        (theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-white/95 backdrop-blur-sm py-4')
    }`}>
      <div className="festival-container flex items-center justify-between">
        <a href="#" className="flex flex-col items-start gap-0">
          <span className={`font-heading text-2xl font-bold ${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'}`}>
            Photos of Pujagraphy
          </span>
          <span className={`text-xs ${theme === 'dark' ? 'text-festival-saffron/80' : 'text-festival-saffron'} -mt-1`}>
            by Utsab Unites
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>About</a>
          <a href="#gallery" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Gallery</a>
          <a href="#submit" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Submit</a>
          <a href="#judges" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Judges</a>
          <a href="#winners" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Winners</a>
          <a href="#team" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Team</a>
          <a href="#contact" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Contact</a>
          <a href="#developer" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-festival-red hover:after:w-full after:transition-all`}>Developer</a>
          
          {/* Theme toggle */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                : 'bg-festival-cream text-festival-maroon hover:bg-festival-cream/60'
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {/* Theme toggle for mobile */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800 text-yellow-300' 
                : 'bg-festival-cream text-festival-maroon'
            }`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button className={`${theme === 'dark' ? 'text-white' : 'text-festival-maroon'}`} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
        style={{ top: '60px' }}
      >
        <div className={`p-4 flex flex-col gap-4 text-lg h-full ${theme === 'dark' ? 'bg-gray-900/98 backdrop-blur-md' : 'bg-white/98 backdrop-blur-md'}`}>
          <a href="#about" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#gallery" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#submit" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Submit</a>
          <a href="#judges" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Judges</a>
          <a href="#winners" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Winners</a>
          <a href="#team" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Team</a>
          <a href="#contact" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-festival-golden/20'}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#developer" className={`${theme === 'dark' ? 'text-white hover:text-festival-golden' : 'text-festival-maroon hover:text-festival-red'} font-medium transition-colors p-2`} onClick={() => setMobileMenuOpen(false)}>Developer</a>
          
          <div className={`mt-4 p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-festival-cream/30'} rounded-lg text-center`}>
            <p className={`${theme === 'dark' ? 'text-festival-golden' : 'text-festival-saffron'} font-medium`}>Organized by</p>
            <p className={`${theme === 'dark' ? 'text-white' : 'text-festival-maroon'} text-xl font-heading`}>Utsab Unites</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
