
import { Calendar, Star, Award, Users } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const ContestTimeline = () => {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-12 bg-festive-gradient opacity-10"></div>
      
      <div className="festival-container relative z-10">
        <h2 className="section-title">Contest Timeline</h2>
        <p className="section-subtitle">Mark your calendars for Utsab Unites' Photos of Pujagraphy</p>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Registration */}
            <div className="card-festive p-6 bg-gradient-to-br from-white to-yellow-50 hover:from-yellow-50 hover:to-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-festival-golden/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar size={28} className="text-festival-maroon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon">Registration Open</h3>
                  <p className="text-2xl font-heading mt-2 text-festival-red">18th April, 2025</p>
                  <p className="mt-4 text-gray-700">
                    Begin your journey with us! Registration opens for all photography enthusiasts to participate in this celebration of Puja through your lens.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Submission Deadline */}
            <div className="card-festive p-6 bg-gradient-to-br from-white to-rose-50 hover:from-rose-50 hover:to-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-festival-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={28} className="text-festival-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon">Submission Deadline</h3>
                  <p className="text-2xl font-heading mt-2 text-festival-red">28th April, 2025</p>
                  <p className="mt-4 text-gray-700">
                    Last chance to submit your stunning captures! Make sure your entries are in before the clock strikes midnight.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Judging Period */}
            <div className="card-festive p-6 bg-gradient-to-br from-white to-purple-50 hover:from-purple-50 hover:to-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={28} className="text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon">Judging Period</h3>
                  <p className="text-2xl font-heading mt-2 text-purple-700">May 16-30, 2025</p>
                  <p className="mt-4 text-gray-700">
                    Our panel of expert judges will review all submissions and select the most captivating and meaningful captures of Puja.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Winners Announced */}
            <div className="card-festive p-6 bg-gradient-to-br from-white to-amber-50 hover:from-amber-50 hover:to-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon">Winners Announced</h3>
                  <p className="text-2xl font-heading mt-2 text-amber-700">June 1, 2025</p>
                  <p className="mt-4 text-gray-700">
                    The moment we've all been waiting for! Join us online as we reveal the winners and celebrate the best of Puja photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScQjLoo3U9XI9a5MSiblGE31GO0ZRW05F_nFxOV4HuX6ivung/viewform?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-festive bg-festive-gradient text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar size={20} />
              Register Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-festive-gradient opacity-10 transform rotate-180"></div>
    </section>
  );
};

export default ContestTimeline;
