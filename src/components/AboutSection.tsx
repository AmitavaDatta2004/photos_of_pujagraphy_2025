
import { CalendarDays, Award, Camera, UserCheck, Info, Users, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-festival-golden/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-80 h-80 bg-festival-red/5 rounded-full blur-3xl"></div>
      
      <div className="festival-container">
        <h2 className="section-title">About the Competition</h2>
        <p className="section-subtitle">Celebrating Puja through the art of photography</p>
        
        <div className="max-w-3xl mx-auto text-center mb-12 transform transition-all duration-300 hover:scale-105 card-festive p-6 border-l-4 border-festival-saffron dark:border-festival-golden">
          <p className="text-lg mb-6">
            "Photos of Pujagraphy" is a photography competition dedicated to 
            celebrating the spirit of Puja through the lens of passionate 
            photographers. The competition invites participants to capture and share 
            the soul, emotion, and cultural richness of Puja across two categories: Mobile and Camera.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-saffron/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Users className="text-festival-saffron" />
              Who Can Participate
            </h3>
            <p className="mb-4">
              Our competition is open to photographers of all levels:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="transition-transform duration-200 hover:translate-x-1">Amateur and professional photographers</li>
              <li className="transition-transform duration-200 hover:translate-x-1">All age groups welcome</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Photography enthusiasts with passion for culture</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Anyone with a camera or smartphone</li>
            </ul>
          </div>
          
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-saffron/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Camera className="text-festival-saffron" />
              Judging Criteria
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="transition-transform duration-200 hover:translate-x-1"><span className="font-semibold">Photo Quality:</span> Technical excellence and clarity</li>
              <li className="transition-transform duration-200 hover:translate-x-1"><span className="font-semibold">Emotional Depth:</span> Ability to convey feelings</li>
              <li className="transition-transform duration-200 hover:translate-x-1"><span className="font-semibold">Cultural Relevance:</span> Connection to Durga Puja</li>
              <li className="transition-transform duration-200 hover:translate-x-1"><span className="font-semibold">Originality:</span> Creative perspective and unique vision</li>
              <li className="transition-transform duration-200 hover:translate-x-1"><span className="font-semibold">Storytelling:</span> Narrative quality of the image</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-red/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <CalendarDays className="text-festival-saffron" />
              Important Dates
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                <div className="bg-festival-golden/20 p-2 rounded min-w-[40px] text-center">
                  <span className="font-bold">18</span>
                  <span className="block text-xs">APR</span>
                </div>
                <div>
                  <span className="font-semibold">Registration Opens</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Submissions begin for both Mobile & Camera categories</p>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                <div className="bg-festival-golden/20 p-2 rounded min-w-[40px] text-center">
                  <span className="font-bold">28</span>
                  <span className="block text-xs">APR</span>
                </div>
                <div>
                  <span className="font-semibold">Submission Deadline</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Last day to submit entries</p>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                <div className="bg-festival-golden/20 p-2 rounded min-w-[40px] text-center">
                  <span className="font-bold">31</span>
                  <span className="block text-xs">MAY</span>
                </div>
                <div>
                  <span className="font-semibold">Winners Announced</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Results published on website</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-red/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Trophy className="text-festival-saffron" />
              Prizes & Recognition
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                <div className="p-2 rounded bg-gradient-to-r from-festival-golden to-amber-400 text-white min-w-[40px] text-center">
                  <span className="font-bold">BB</span>
                </div>
                <div>
                  <span className="font-semibold">Best of Best</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special prize for the overall best photo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-festival-maroon dark:text-festival-golden flex items-center">
                    <Info size={16} className="mr-1" /> Mobile Category
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-festival-golden text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">1st</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">First Prize</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-[#C0C0C0] text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">2nd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Silver Award</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-[#CD7F32] text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">3rd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Bronze Award</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-festival-maroon dark:text-festival-golden flex items-center">
                    <Camera size={16} className="mr-1" /> Camera Category
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-festival-golden text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">1st</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">First Prize</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-[#C0C0C0] text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">2nd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Silver Award</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-[#CD7F32] text-white min-w-[32px] text-center text-sm">
                        <span className="font-bold">3rd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Bronze Award</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3 hover:bg-festival-cream/30 p-2 rounded-md transition-colors duration-200 mt-4">
                <div className="p-2 rounded bg-festival-red/20 min-w-[40px] text-center">
                  <span className="font-bold">HM</span>
                </div>
                <div>
                  <span className="font-semibold">Honorable Mentions (5)</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special recognition and featured display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
