import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  // Set deadline to May 15, 2025
  const deadline = new Date("May 15, 2025");
  
  const [typewriterText, setTypewriterText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    "Capture the Spirit",
    "Share the Soul of Puja",
    "Feel the Devotion",
    "Live the Tradition",
    "Celebrate with Utsab Unites"
  ];

  useEffect(() => {
    const typewriterEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting text
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // Typing text
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }
      
      // Logic for changing phrases
      if (!isDeleting && typewriterText === currentPhrase) {
        // Finished typing, pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(150);
      } else if (isDeleting && typewriterText === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setTypingSpeed(150);
      }
    };
    
    const timer = setTimeout(typewriterEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Floating elements for aesthetics */}
      <div className="absolute w-24 h-24 bg-festival-golden/10 rounded-full top-1/4 left-[10%] animate-float"></div>
      <div className="absolute w-16 h-16 bg-festival-red/10 rounded-full top-1/3 right-[15%] animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-20 h-20 bg-festival-maroon/10 rounded-full bottom-1/4 left-[20%] animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Hero Content */}
      <div className="festival-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg mb-2 transform hover:scale-105 transition-transform duration-300">
            <span className="text-festival-red font-medium">Presented by Utsab Unites</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-festival-maroon mb-6 animate-float">
            Photos of Pujagraphy
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-festival-saffron font-heading relative after:content-[''] after:inline-block after:w-1 after:h-8 after:bg-festival-saffron after:ml-1 after:align-middle after:animate-pulse">
              {typewriterText}
            </p>
          </div>
          
          <div className="mb-10 mt-8">
            <div className="text-lg mb-2 text-festival-maroon font-medium">Registration Deadline: May 15, 2025</div>
            <CountdownTimer targetDate={deadline} />
          </div>
          
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-festive transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Camera size={20} />
            Submit Your Photo
          </a>
          
          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-festival-golden animate-bounce hover:bg-festival-golden/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-festival-maroon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-10 left-0 w-full h-24 bg-festive-gradient opacity-10 transform -skew-y-2"></div>
    </section>
  );
};

export default HeroSection;
