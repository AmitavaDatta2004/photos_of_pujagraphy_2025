
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Import the gallery images from the GallerySection component
// In a production app, these would be fetched from an API
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
  },
  {
    id: 9,
    src: 'https://source.unsplash.com/random/800x600/?devotion',
    alt: 'Devotee Portrait',
    category: 'Portraits',
    photographer: 'Arun Mehta',
    caption: 'The devotion and faith reflected in the eyes of a believer.'
  },
  {
    id: 10,
    src: 'https://source.unsplash.com/random/800x600/?emotion',
    alt: 'Joy of Festival',
    category: 'Moments & Emotions',
    photographer: 'Kavita Sharma',
    caption: 'Pure joy captured during sindoor khela celebrations.'
  },
  {
    id: 11,
    src: 'https://source.unsplash.com/random/800x600/?artist',
    alt: 'Artisan at Work',
    category: 'Idol Making',
    photographer: 'Rahul Das',
    caption: 'A skilled artisan giving final touches to the idol.'
  },
  {
    id: 12,
    src: 'https://source.unsplash.com/random/800x600/?crowd',
    alt: 'Festival Crowd',
    category: 'Street Shots',
    photographer: 'Vikram Singh',
    caption: 'The energy of the crowd during evening aarti.'
  },
  {
    id: 13,
    src: 'https://source.unsplash.com/random/800x600/?temple',
    alt: 'Temple Ritual',
    category: 'Rituals & Traditions',
    photographer: 'Sanjay Bose',
    caption: 'An age-old ritual being performed with utmost devotion.'
  },
  {
    id: 14,
    src: 'https://source.unsplash.com/random/800x600/?performer',
    alt: 'Stage Performance',
    category: 'Cultural Events',
    photographer: 'Neha Rao',
    caption: 'Cultural drama depicting scenes from mythology.'
  },
  {
    id: 15,
    src: 'https://source.unsplash.com/random/800x600/?portrait',
    alt: 'Candid Moment',
    category: 'Portraits',
    photographer: 'Dinesh Joshi',
    caption: 'A candid moment capturing the essence of the festival spirit.'
  },
  {
    id: 16,
    src: 'https://source.unsplash.com/random/800x600/?emotion',
    alt: 'Emotional Farewell',
    category: 'Moments & Emotions',
    photographer: 'Tanya Ghosh',
    caption: 'The emotional farewell during Durga visarjan (immersion).'
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  
  const imagesPerPage = 8;
  const categories = ['All', 'Idol Making', 'Cultural Events', 'Street Shots', 'Rituals & Traditions', 'Portraits', 'Moments & Emotions'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Calculate total pages
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  
  // Get current images for pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  // Handle navigating to next image in lightbox
  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  // Handle navigating to previous image in lightbox
  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-festival-cream/30">
        <div className="festival-container">
          <h1 className="section-title">Moments of Pujagraphy</h1>
          <p className="section-subtitle">A visual celebration of Maa Durga and the culture that surrounds Her</p>

          {/* Back to Home button */}
          <div className="mb-8 text-center">
            <Button 
              variant="outline" 
              className="text-festival-maroon border-festival-golden hover:bg-festival-golden/10"
              onClick={() => navigate('/')}
            >
              <ChevronLeft size={16} />
              Back to Home
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setCurrentPage(1); // Reset to first page when changing filter
                }}
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

          {/* Gallery Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentImages.map(image => (
              <div 
                key={image.id} 
                className="card-festive overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02]"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
                }}
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
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-festival-golden/20 rounded-full text-festival-maroon">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        isActive={currentPage === index + 1}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="max-w-6xl w-full bg-white rounded-lg overflow-hidden relative">
                <button 
                  className="absolute top-2 right-2 bg-white rounded-full p-1 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} className="text-festival-maroon" />
                </button>
                
                {/* Navigation buttons */}
                <button 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 z-10"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft size={24} className="text-festival-maroon" />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 z-10"
                  onClick={handleNextImage}
                >
                  <ChevronRight size={24} className="text-festival-maroon" />
                </button>
                
                <div className="md:flex">
                  <div className="md:w-2/3 bg-gray-100">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.alt} 
                      className="w-full h-full object-contain max-h-[70vh]"
                    />
                  </div>
                  <div className="p-6 md:w-1/3">
                    <h3 className="text-xl font-bold text-festival-maroon mb-2">{selectedImage.alt}</h3>
                    <p className="text-sm text-gray-500 mb-4">Category: {selectedImage.category}</p>
                    <p className="text-sm font-medium mb-1">Photographer:</p>
                    <p className="text-lg text-festival-saffron mb-4">{selectedImage.photographer}</p>
                    <p className="text-sm font-medium mb-1">Caption:</p>
                    <p className="text-gray-700">{selectedImage.caption}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      Image {currentImageIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit CTA */}
          <div className="mt-16 p-6 bg-white rounded-xl shadow-md text-center card-festive">
            <h3 className="text-xl font-heading text-festival-maroon mb-3">Have your own magical Puja frame to share?</h3>
            <p className="mb-4">Submit it today and be featured in our gallery!</p>
            <a href="#submit" className="btn-festive">
              Submit via Google Form
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
