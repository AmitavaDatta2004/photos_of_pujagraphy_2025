
import { useState, useEffect } from 'react';
import { Users, Camera, Award, Clock } from 'lucide-react';
import { galleryImages } from '../data/images';
import { useTheme } from '../hooks/useTheme';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  
  // Calculate statistics
  const totalSubmissions = galleryImages.length;
  const uniqueParticipants = new Set(galleryImages.map(img => img.photographer)).size;
  const categoryCount = 2; // Mobile and Camera categories
  
  // Calculate days left until May 15, 2025
  const calculateDaysLeft = () => {
    const deadline = new Date('April 28, 2025');
    const today = new Date();
    const diffTime = Math.abs(deadline.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return deadline > today ? diffDays : 0;
  };
  
  const daysLeft = calculateDaysLeft();

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
    <section id="stats-section" className={`py-16 ${theme === 'dark' ? 'bg-gray-800/30' : 'bg-festival-maroon/5'}`}>
      <div className="festival-container">
        <h2 className="section-title">Contest Statistics</h2>
        <p className="section-subtitle">Presented by Utsab Unites</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Submissions Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-festival-golden/10'} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-amber-900/30' : 'bg-festival-saffron/20'} flex items-center justify-center`}>
                <Camera size={32} className={`${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'}`} />
              </div>
            </div>
            <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'} mb-2`}>
              {isVisible ? totalSubmissions : '0'}
            </h3>
            <p className="text-lg font-medium dark:text-gray-200">Total Submissions</p>
          </div>

          {/* Participants Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-festival-golden/10'} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-rose-900/30' : 'bg-festival-red/20'} flex items-center justify-center`}>
                <Users size={32} className={`${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'}`} />
              </div>
            </div>
            <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'} mb-2`}>
              {isVisible ? uniqueParticipants : '0'}
            </h3>
            <p className="text-lg font-medium dark:text-gray-200">Participants</p>
          </div>

          {/* Categories Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-festival-golden/10'} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-amber-800/30' : 'bg-festival-golden/20'} flex items-center justify-center`}>
                <Award size={32} className={`${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'}`} />
              </div>
            </div>
            <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'} mb-2`}>
              {isVisible ? categoryCount : '0'}
            </h3>
            <p className="text-lg font-medium dark:text-gray-200">Categories</p>
          </div>

          {/* Days Left Counter */}
          <div 
            className={`card-festive p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-festival-golden/10'} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-festival-cream'} flex items-center justify-center`}>
                <Clock size={32} className={`${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'}`} />
              </div>
            </div>
            <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-festival-golden' : 'text-festival-maroon'} mb-2`}>
              {isVisible ? daysLeft : '0'}
            </h3>
            <p className="text-lg font-medium dark:text-gray-200">Days Left to Submit</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-festival-maroon'}`}>
            Join our growing community of photographers celebrating Puja!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
