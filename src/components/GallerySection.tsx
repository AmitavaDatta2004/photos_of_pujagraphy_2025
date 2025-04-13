
import { useState } from 'react';
import { X } from 'lucide-react';

// Sample gallery images (in production, these would be dynamically loaded)
const galleryImages = [
  {
    id: 1,
    src: 'https://source.unsplash.com/random/800x600/?durga',
    alt: 'Durga Idol',
    category: 'Idol Making',
    photographer: 'Anurag Deb',
    caption: 'The magnificent Durga idol being crafted by skilled artisans in Kumartuli.'
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/random/800x600/?festival',
    alt: 'Cultural Dance',
    category: 'Cultural Events',
    photographer: 'Priya Sen',
    caption: 'Traditional dance performance during the evening celebrations.'
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/random/800x600/?celebration',
    alt: 'Street Decorations',
    category: 'Street Shots',
    photographer: 'Sameer Khan',
    caption: 'Beautifully lit street decorations creating a magical atmosphere.'
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/random/800x600/?ritual',
    alt: 'Aarti Ceremony',
    category: 'Rituals & Traditions',
    photographer: 'Nita Patel',
    caption: 'The mesmerizing aarti ceremony with glowing lamps.'
  },
  {
    id: 5,
    src: 'https://source.unsplash.com/random/800x600/?light',
    alt: 'Festival Lights',
    category: 'Street Shots',
    photographer: 'Rajiv Gupta',
    caption: 'The pandal illuminated with thousands of colorful lights.'
  },
  {
    id: 6,
    src: 'https://source.unsplash.com/random/800x600/?sculpture',
    alt: 'Idol Details',
    category: 'Idol Making',
    photographer: 'Anjali Sharma',
    caption: 'Close-up detail of the intricate work on Durga\'s face.'
  },
  {
    id: 7,
    src: 'https://source.unsplash.com/random/800x600/?music',
    alt: 'Dhak Players',
    category: 'Cultural Events',
    photographer: 'Rajan Dutta',
    caption: 'The rhythmic beats of dhak drums filling the air with energy.'
  },
  {
    id: 8,
    src: 'https://source.unsplash.com/random/800x600/?prayer',
    alt: 'Morning Prayers',
    category: 'Rituals & Traditions',
    photographer: 'Meera Roy',
    caption: 'Devotees offering morning prayers with flowers and incense.'
  }
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const categories = ['All', 'Idol Making', 'Cultural Events', 'Street Shots', 'Rituals & Traditions'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-festival-cream/30">
      <div className="festival-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Capturing the essence of Durga Puja</p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-festival-red text-white'
                  : 'bg-white text-festival-maroon hover:bg-festival-golden/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="card-festive overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-festival-maroon">{image.alt}</h3>
                <p className="text-sm text-gray-600">By {image.photographer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative">
              <button 
                className="absolute top-2 right-2 bg-white rounded-full p-1 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} className="text-festival-maroon" />
              </button>
              <div className="md:flex">
                <div className="md:w-2/3">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 md:w-1/3">
                  <h3 className="text-xl font-bold text-festival-maroon mb-2">{selectedImage.alt}</h3>
                  <p className="text-sm text-gray-500 mb-4">Category: {selectedImage.category}</p>
                  <p className="text-sm font-medium mb-1">Photographer:</p>
                  <p className="text-lg text-festival-saffron mb-4">{selectedImage.photographer}</p>
                  <p className="text-sm font-medium mb-1">Caption:</p>
                  <p className="text-gray-700">{selectedImage.caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
