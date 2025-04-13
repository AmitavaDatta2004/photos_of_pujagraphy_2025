
import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/images';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [randomImages, setRandomImages] = useState<typeof galleryImages>([]);

  // Get 6 random images from the gallery
  useEffect(() => {
    const getRandomImages = () => {
      const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    };
    
    setRandomImages(getRandomImages());
  }, []);

  const categories = ['All', 'Idol Making', 'Cultural Events', 'Street Shots', 'Rituals & Traditions'];

  const filteredImages = activeFilter === 'All' 
    ? randomImages 
    : randomImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-festival-cream/30">
      <div className="festival-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Capturing the essence of Durga Puja by Utsab Unites</p>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="card-festive overflow-hidden cursor-pointer transform transition-all hover:scale-[1.05] hover:shadow-xl group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-light">{image.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-festival-maroon">{image.alt}</h3>
                <p className="text-sm text-gray-600">By {image.photographer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link to="/gallery" className="btn-festive inline-flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Photos
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative">
              <button 
                className="absolute top-2 right-2 bg-white rounded-full p-1 z-10 hover:bg-festival-red hover:text-white transition-colors duration-300"
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
