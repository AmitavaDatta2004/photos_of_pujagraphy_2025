
import { Mail, Phone, MapPin, HelpCircle, Instagram, Facebook, Youtube } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-festival-cream/30">
      <div className="festival-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with our team</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <div className="card-festive p-6">
              <h3 className="text-xl font-bold text-festival-maroon mb-6">Reach Out</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="text-festival-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@photosofpujagraphy.com" className="text-gray-600 hover:text-festival-maroon transition-colors">
                      info@photosofpujagraphy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-festival-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-festival-maroon transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-festival-red mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Puja Avenue, Kolkata<br />
                      West Bengal, India 700001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-festival-maroon mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-festival-red text-white flex items-center justify-center hover:bg-festival-maroon transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-festival-red text-white flex items-center justify-center hover:bg-festival-maroon transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-festival-red text-white flex items-center justify-center hover:bg-festival-maroon transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="card-festive p-6 h-full">
              <h3 className="text-xl font-bold text-festival-maroon mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="text-festival-saffron mt-1 flex-shrink-0" size={18} />
                    <h4 className="font-semibold">How many photos can I submit?</h4>
                  </div>
                  <p className="text-gray-600 ml-6">You can submit up to 3 photos for consideration in the competition.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="text-festival-saffron mt-1 flex-shrink-0" size={18} />
                    <h4 className="font-semibold">Is there an entry fee?</h4>
                  </div>
                  <p className="text-gray-600 ml-6">No, participation in the "Photos of Pujagraphy" competition is completely free.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="text-festival-saffron mt-1 flex-shrink-0" size={18} />
                    <h4 className="font-semibold">What kind of photos can I submit?</h4>
                  </div>
                  <p className="text-gray-600 ml-6">Any photograph that captures the essence of Durga Puja – including idols, rituals, celebrations, cultural events, and street scenes.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="text-festival-saffron mt-1 flex-shrink-0" size={18} />
                    <h4 className="font-semibold">When will winners be announced?</h4>
                  </div>
                  <p className="text-gray-600 ml-6">Winners will be announced on October 30th on our website and social media channels.</p>
                </div>
                
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <HelpCircle className="text-festival-saffron mt-1 flex-shrink-0" size={18} />
                    <h4 className="font-semibold">How will my photos be used?</h4>
                  </div>
                  <p className="text-gray-600 ml-6">Selected photos will be displayed on our website gallery with proper credit. Winners' photos may be featured in our promotional materials with attribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
