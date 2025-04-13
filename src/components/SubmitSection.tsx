
import { ExternalLink, Camera, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const SubmitSection = () => {
  // Set deadline to one month from now
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 30);

  return (
    <section id="submit" className="py-20 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="festival-container relative z-10">
        <h2 className="section-title">Submit Your Entry</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-8">
            Share your best Durga Puja photographs with us! We're looking for images
            that capture the essence, emotion, and cultural richness of the festival.
            Click the button below to submit your photo through our official Google Form.
          </p>
          
          <div className="card-festive p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-festival-maroon mb-4 flex justify-center md:justify-start items-center gap-2">
                  <Clock className="text-festival-red" />
                  Time Remaining
                </h3>
                <CountdownTimer 
                  targetDate={deadline} 
                  className="scale-75 md:scale-90 origin-top"
                />
              </div>
              
              <div className="text-center">
                <a 
                  href="https://forms.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-festive"
                >
                  <Camera size={20} />
                  Submit Your Photo
                  <ExternalLink size={16} />
                </a>
                <p className="mt-3 text-sm text-gray-600">
                  Submissions open until October 15th
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-festival-maroon mb-6 text-center">Submission Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-festive p-6">
              <h4 className="text-lg font-bold text-festival-maroon mb-4">Photo Requirements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>High-resolution images (minimum 1920x1080 pixels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>JPG or PNG format only</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>File size under 10MB</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span>Minimal editing allowed (no major alterations)</span>
                </li>
              </ul>
            </div>
            
            <div className="card-festive p-6">
              <h4 className="text-lg font-bold text-festival-maroon mb-4">Entry Rules</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Maximum 3 entries per participant</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Photos must be your original work</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Include a brief description with each photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-festival-golden/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span>Submission implies consent for website display</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitSection;
