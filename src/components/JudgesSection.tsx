
import { Camera, Instagram, Award } from 'lucide-react';

// Sample judges data
const judges = [
  {
    id: 1,
    name: 'Priya Sharma',
    title: 'Award-Winning Photographer',
    bio: 'Priya is a renowned photographer specializing in cultural documentation with over 15 years of experience capturing festivals across India.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    expertise: 'Cultural Photography',
    socialLink: 'https://instagram.com'
  },
  {
    id: 2,
    name: 'Rajiv Malhotra',
    title: 'Photography Professor',
    bio: 'As a professor at the National Institute of Photography, Rajiv brings academic expertise and technical knowledge to the judging panel.',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    expertise: 'Technical Excellence',
    socialLink: 'https://instagram.com'
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    title: 'Durga Puja Documentarian',
    bio: 'Ananya has spent the last decade documenting Durga Puja celebrations across Bengal, creating an extensive visual archive of the festival.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    expertise: 'Festival Documentation',
    socialLink: 'https://instagram.com'
  },
  {
    id: 4,
    name: 'Amit Sen',
    title: 'Creative Director',
    bio: 'With a background in advertising and visual arts, Amit brings a unique perspective on creativity and visual storytelling to the panel.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    expertise: 'Visual Storytelling',
    socialLink: 'https://instagram.com'
  }
];

const JudgesSection = () => {
  return (
    <section id="judges" className="py-20 bg-gradient-to-b from-white to-festival-cream/30 dark:from-transparent dark:to-transparent">
      <div className="festival-container">
        <h2 className="section-title">Judging Panel</h2>
        <p className="section-subtitle">Meet our expert judges</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map(judge => (
            <div key={judge.id} className="card-festive overflow-hidden group dark:bg-gray-800/80 dark:border-purple-500/30 dark:hover:border-purple-400/50 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={judge.image} 
                  alt={judge.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-festival-maroon dark:text-yellow-300">{judge.name}</h3>
                <p className="text-festival-saffron dark:text-amber-400 mb-2">{judge.title}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-festival-golden/20 text-festival-maroon dark:bg-amber-500/20 dark:text-amber-300 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                    <Award size={12} />
                    {judge.expertise}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{judge.bio}</p>
                
                <a 
                  href={judge.socialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-festival-maroon dark:text-amber-400 hover:text-festival-red dark:hover:text-amber-300 transition-colors"
                >
                  <Instagram size={16} />
                  <span className="text-sm">Follow</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
