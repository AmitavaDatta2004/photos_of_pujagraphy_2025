
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-16 bg-gradient-to-b from-white to-festival-cream/30">
      <div className="festival-container">
        <h2 className="section-title text-2xl">Developer</h2>
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className="card-festive overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-festival-maroon/5 flex items-center justify-center p-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-festival-golden hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://source.unsplash.com/random/400x400/?portrait" 
                    alt="Amitava Datta" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-medium text-lg">Amitava Datta</h3>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={20} className="text-festival-saffron" />
                  <h3 className="text-xl font-medium text-festival-maroon">Amitava Datta</h3>
                </div>
                
                <p className="mb-4 text-gray-700">
                  I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. 
                  "Photos of Pujagraphy" is a project close to my heart, combining my technical skills with my appreciation 
                  for the cultural richness of Durga Puja.
                </p>
                
                <div className="flex gap-4 mt-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300"
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
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300"
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
                        href="mailto:contact@example.com" 
                        className="w-10 h-10 rounded-full bg-festival-maroon/10 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300"
                      >
                        <Mail size={20} />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      Send Email
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>Built with ❤️ for Utsab Unites</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
