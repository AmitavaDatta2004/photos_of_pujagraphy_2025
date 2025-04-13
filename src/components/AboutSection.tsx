
import { CalendarDays, Award, Camera, UserCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="festival-container">
        <h2 className="section-title">About the Competition</h2>
        <p className="section-subtitle">Celebrating Durga Puja through the art of photography</p>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-6">
            "Photos of Pujagraphy" is a photography competition dedicated to 
            celebrating the spirit of Durga Puja through the lens of passionate 
            photographers. The competition invites participants to capture and share 
            the soul, emotion, and cultural richness of Puja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-festive p-6">
            <h3 className="text-xl font-bold text-festival-maroon mb-4 flex items-center gap-2">
              <UserCheck className="text-festival-saffron" />
              Who Can Participate
            </h3>
            <p className="mb-4">
              Our competition is open to photographers of all levels:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Amateur and professional photographers</li>
              <li>All age groups welcome</li>
              <li>Photography enthusiasts with passion for culture</li>
              <li>Anyone with a camera or smartphone</li>
            </ul>
          </div>
          
          <div className="card-festive p-6">
            <h3 className="text-xl font-bold text-festival-maroon mb-4 flex items-center gap-2">
              <Camera className="text-festival-saffron" />
              Judging Criteria
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold">Photo Quality:</span> Technical excellence and clarity</li>
              <li><span className="font-semibold">Emotional Depth:</span> Ability to convey feelings</li>
              <li><span className="font-semibold">Cultural Relevance:</span> Connection to Durga Puja</li>
              <li><span className="font-semibold">Originality:</span> Creative perspective and unique vision</li>
              <li><span className="font-semibold">Storytelling:</span> Narrative quality of the image</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-festive p-6">
            <h3 className="text-xl font-bold text-festival-maroon mb-4 flex items-center gap-2">
              <CalendarDays className="text-festival-saffron" />
              Important Dates
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-festival-golden/20 p-2 rounded">
                  <span className="font-bold">1</span>
                  <span className="block text-xs">SEP</span>
                </div>
                <div>
                  <span className="font-semibold">Registration Opens</span>
                  <p className="text-sm text-gray-600">Submissions begin</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-festival-golden/20 p-2 rounded">
                  <span className="font-bold">15</span>
                  <span className="block text-xs">OCT</span>
                </div>
                <div>
                  <span className="font-semibold">Submission Deadline</span>
                  <p className="text-sm text-gray-600">Last day to submit entries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-festival-golden/20 p-2 rounded">
                  <span className="font-bold">30</span>
                  <span className="block text-xs">OCT</span>
                </div>
                <div>
                  <span className="font-semibold">Winners Announced</span>
                  <p className="text-sm text-gray-600">Results published on website</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="card-festive p-6">
            <h3 className="text-xl font-bold text-festival-maroon mb-4 flex items-center gap-2">
              <Award className="text-festival-saffron" />
              Prizes & Recognition
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded bg-festival-golden text-white">
                  <span className="font-bold">1st</span>
                </div>
                <div>
                  <span className="font-semibold">Grand Prize</span>
                  <p className="text-sm text-gray-600">Professional camera accessories package</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#C0C0C0] text-white">
                  <span className="font-bold">2nd</span>
                </div>
                <div>
                  <span className="font-semibold">Silver Award</span>
                  <p className="text-sm text-gray-600">Photography workshop voucher</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#CD7F32] text-white">
                  <span className="font-bold">3rd</span>
                </div>
                <div>
                  <span className="font-semibold">Bronze Award</span>
                  <p className="text-sm text-gray-600">Photo printing voucher</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="p-2 rounded bg-festival-red/20">
                  <span className="font-bold">HM</span>
                </div>
                <div>
                  <span className="font-semibold">Honorable Mentions (5)</span>
                  <p className="text-sm text-gray-600">Featured display on website</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
