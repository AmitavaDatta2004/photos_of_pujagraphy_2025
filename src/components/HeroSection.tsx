
import { Camera } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  // Set deadline to one month from now
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 30);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Hero Content */}
      <div className="festival-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-festival-maroon mb-6 animate-float">
            Photos of Pujagraphy
          </h1>
          
          <p className="text-xl md:text-2xl text-festival-saffron mb-8 font-heading">
            "Capture the Spirit, Share the Soul of Puja."
          </p>
          
          <div className="mb-10">
            <div className="text-lg mb-2 text-festival-maroon font-medium">Registration Deadline:</div>
            <CountdownTimer targetDate={deadline} />
          </div>
          
          <a 
            href="https://forms.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-festive"
          >
            <Camera size={20} />
            Submit Your Photo
          </a>
          
          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-festival-golden animate-bounce"
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
