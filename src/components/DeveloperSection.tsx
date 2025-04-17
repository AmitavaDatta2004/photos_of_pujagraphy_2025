
import { Code, Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState } from 'react';

const DeveloperSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="developer" className="py-20 bg-gradient-to-b from-white to-festival-cream/30">
      <div className="festival-container">
        <h2 className="section-title text-2xl">Meet the Developer</h2>
        
        <div className="max-w-3xl mx-auto mt-10">
          <div className="card-festive overflow-hidden border border-festival-golden/30 hover:border-festival-golden hover:shadow-2xl transition-all duration-500 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-festival-saffron/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-festival-red/20 rounded-full blur-xl"></div>
            
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-festival-maroon/5 to-festival-saffron/5 flex items-center justify-center p-8">
                <div 
                  className={`relative w-48 h-48 rounded-full overflow-hidden border-4 ${isHovered ? 'border-festival-red' : 'border-festival-golden'} transition-all duration-500 group`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img 
                    src="developer/AmitavaDatta.jpg" 
                    alt="Amitava Datta" 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-white font-medium text-lg">Amitava Datta</h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={20} className="text-festival-saffron" />
                  <h3 className="text-2xl font-medium text-festival-maroon">Amitava Datta</h3>
                  <span className="px-2 py-1 bg-festival-golden/10 text-xs rounded-full text-festival-maroon border border-festival-golden/20">Full Stack Developer</span>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed border-l-2 border-festival-saffron pl-4 italic">
                  "I'm passionate about creating digital experiences that celebrate our cultural heritage. 
                  'Photos of Pujagraphy' is a platform that aims to capture the essence of Durga Puja 
                  through the eyes of photographers both amateur and professional."
                </p>
                
                <div className="bg-festival-cream/30 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-festival-maroon mb-2">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'UI/UX Design'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-festival-maroon border border-festival-golden/10 hover:border-festival-golden/30 hover:shadow-sm transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="https://github.com/AmitavaDatta2004" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      GitHub Profile
                    </HoverCardContent>
                  </HoverCard>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="https://www.linkedin.com/in/amitava-datta-301920292/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin size={20} />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      LinkedIn Profile
                    </HoverCardContent>
                  </HoverCard>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="mailto:dattaamitava2004@gmail.com" 
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <Mail size={20} />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      Send Email
                    </HoverCardContent>
                  </HoverCard>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="https://portfolio.example.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      Portfolio Website
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500 flex items-center justify-center gap-2">
            <span>Built with</span> <Heart size={16} className="text-festival-red" /> <span>for Utsab Unites</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
