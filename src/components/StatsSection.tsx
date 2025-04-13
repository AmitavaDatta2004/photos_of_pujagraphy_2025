
import { useState, useEffect } from 'react';
import { Users, Camera, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-festival-maroon/5">
      <div className="festival-container">
        <h2 className="section-title">Contest Statistics</h2>
        <p className="section-subtitle">Presented by Utsab Unites</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Submissions Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:bg-festival-golden/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-festival-saffron/20 flex items-center justify-center">
                <Camera size={32} className="text-festival-maroon" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-festival-maroon mb-2">
              {isVisible ? '342' : '0'}
            </h3>
            <p className="text-lg font-medium">Total Submissions</p>
          </div>

          {/* Participants Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:bg-festival-golden/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-festival-red/20 flex items-center justify-center">
                <Users size={32} className="text-festival-maroon" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-festival-maroon mb-2">
              {isVisible ? '189' : '0'}
            </h3>
            <p className="text-lg font-medium">Participants</p>
          </div>

          {/* Categories Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:bg-festival-golden/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-festival-golden/20 flex items-center justify-center">
                <Award size={32} className="text-festival-maroon" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-festival-maroon mb-2">
              {isVisible ? '7' : '0'}
            </h3>
            <p className="text-lg font-medium">Categories</p>
          </div>

          {/* Days Left Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:bg-festival-golden/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-festival-cream flex items-center justify-center">
                <Clock size={32} className="text-festival-maroon" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-festival-maroon mb-2">
              {isVisible ? '21' : '0'}
            </h3>
            <p className="text-lg font-medium">Days Left to Submit</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-festival-maroon">Join our growing community of photographers celebrating Durga Puja!</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
