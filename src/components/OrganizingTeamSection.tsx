
import { Instagram, Facebook, Twitter, Linkedin, Globe, Users, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// Organizing teams data
const organizingTeams = [
  {
    id: 1,
    name: "Utsab Unites Cultural Team",
    description: "Leading cultural initiatives and traditional festivities",
    logo: "https://source.unsplash.com/random/200x200/?logo",
    coverImage: "https://source.unsplash.com/random/600x400/?festival,indian",
    members: "15+ dedicated members",
    established: "2018",
    location: "Kolkata, West Bengal",
    social: {
      website: "https://example.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: 2,
    name: "Pujagraphy Team",
    description: "Photography and visual documentation specialists",
    logo: "https://source.unsplash.com/random/200x200/?camera,logo",
    coverImage: "https://source.unsplash.com/random/600x400/?photography,team",
    members: "8 professional photographers",
    established: "2020",
    location: "Kolkata, West Bengal",
    social: {
      website: "https://example.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    }
  }
];

const OrganizingTeamSection = () => {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);
  
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
      case 'website':
        return <Globe size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="festival-container">
        <h2 className="section-title">Organizing Teams</h2>
        <p className="section-subtitle">The groups behind Utsab Unites</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {organizingTeams.map((team) => (
            <div 
              key={team.id} 
              className="card-festive overflow-hidden group hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredTeam(team.id.toString())}
              onMouseLeave={() => setHoveredTeam(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={team.coverImage} 
                  alt={team.name} 
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ${hoveredTeam === team.id.toString() ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Team logo */}
                <div className="absolute top-4 left-4 h-16 w-16 rounded-full overflow-hidden border-2 border-white/80 bg-white">
                  <img 
                    src={team.logo} 
                    alt={`${team.name} logo`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Social icons */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {Object.entries(team.social).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-festival-maroon hover:bg-festival-red hover:text-white transition-colors duration-300 hover:scale-110"
                    >
                      {renderSocialIcon(platform)}
                    </a>
                  ))}
                </div>
                
                {/* Team info on the banner */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{team.name}</h3>
                  <p className="text-sm text-white/80">{team.established} • {team.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={20} className="text-festival-saffron" />
                  <span className="text-sm font-medium text-festival-maroon">{team.members}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{team.description}</p>
                
                <div className="bg-festival-cream/30 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-festival-maroon mb-2">Contribution</h4>
                  <p className="text-xs text-gray-600">
                    {team.id === 1 ? 
                      "Organizing cultural events, creating awareness about Bengali traditions, and fostering community engagement through Durga Puja celebrations." : 
                      "Documenting festival moments, training photographers, and creating visual archives of cultural heritage through stunning photography."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizingTeamSection;
