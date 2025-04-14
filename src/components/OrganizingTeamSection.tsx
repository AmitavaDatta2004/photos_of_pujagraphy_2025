
import { Instagram, Facebook, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';
import { organizingTeam } from '../data/images';

const OrganizingTeamSection = () => {
  // Function to render social media icon based on platform
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={18} />;
      case 'facebook':
        return <Facebook size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'dribbble':
        return <Dribbble size={18} />;
      default:
        return <Instagram size={18} />;
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="festival-container">
        <h2 className="section-title">Organizing Team</h2>
        <p className="section-subtitle">Meet the people behind Utsab Unites</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {organizingTeam.map((member) => (
            <div key={member.id} className="card-festive overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Team label */}
                <div className="absolute top-3 right-3 bg-festival-golden text-white text-xs px-2 py-1 rounded-full">
                  {member.team}
                </div>
                
                {/* Social icons */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-festival-maroon hover:bg-festival-red hover:text-white transition-colors duration-300"
                    >
                      {renderSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-festival-maroon">{member.name}</h3>
                <p className="text-festival-saffron text-sm mb-1">{member.role}</p>
                <div className="h-1 w-12 bg-festival-red mt-2 mb-3 rounded-full"></div>
                <p className="text-sm text-gray-600">Passionate member of Utsab Unites dedicated to celebrating and preserving our cultural heritage.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingTeamSection;
