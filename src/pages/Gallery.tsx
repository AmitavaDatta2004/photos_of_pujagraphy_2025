
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, ArrowLeft } from 'lucide-react';
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "../hooks/useTheme";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { galleryImages, PhotoCategory } from '../data/images';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePhotoCategory, setActivePhotoCategory] = useState<PhotoCategory | 'All'>('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const imagesPerPage = 8;
  const categories = ['All', 'Idol Making', 'Cultural Events', 'Street Shots', 'Rituals & Traditions', 'Portraits', 'Moments & Emotions'];
  const photoCategories: (PhotoCategory | 'All')[] = ['All', 'Mobile Captures', 'Camera Captures'];

  // Filter images based on category, photo category, and search term
  const filteredImages = galleryImages.filter(img => {
    const matchesCategory = activeFilter === 'All' || img.category === activeFilter;
    const matchesPhotoCategory = activePhotoCategory === 'All' || img.photoCategory === activePhotoCategory;
    const matchesSearch = searchTerm === '' || 
      img.alt.toLowerCase().includes(searchTerm.toLowerCase()) || 
      img.photographer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.caption.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPhotoCategory && matchesSearch;
  });

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
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="pt-10 pb-20 bg-festival-cream/30 dark:bg-gray-800/30 min-h-screen transition-colors duration-300">
        <div className="festival-container">
          {/* Back to Home button - replacing navbar */}
          <div className="mb-8 flex items-center justify-between">
            <Button 
              variant="outline" 
              className="text-festival-maroon border-festival-golden hover:bg-festival-golden/10 group dark:text-festival-golden dark:border-festival-golden/70 dark:hover:bg-festival-golden/20"
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
            
            <div className="text-center flex-1">
              <span className="text-sm md:text-base text-festival-saffron font-medium dark:text-festival-saffron/80">Presented by</span>
              <h3 className="text-lg md:text-xl font-heading text-festival-maroon dark:text-festival-golden">Utsab Unites</h3>
            </div>
            
            <div className="w-[100px]"></div> {/* Empty div for balance */}
          </div>
          
          <h1 className="section-title">Moments of Pujagraphy</h1>
          <p className="section-subtitle">A visual celebration of Maa Durga and the culture that surrounds Her</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto my-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full bg-white border border-festival-golden/30 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-festival-golden/50 focus:border-transparent dark:bg-gray-800 dark:border-festival-golden/40 dark:text-white"
                placeholder="Search by title, photographer, category..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Photo Category Filters (Mobile/Camera) */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {photoCategories.map((photoCategory) => (
              <button
                key={photoCategory}
                onClick={() => {
                  setActivePhotoCategory(photoCategory);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full transition-all ${
                  activePhotoCategory === photoCategory
                    ? 'bg-festival-golden text-festival-maroon dark:bg-amber-500 dark:text-white'
                    : 'bg-white text-festival-maroon hover:bg-festival-golden/20 dark:bg-gray-800 dark:text-white dark:hover:bg-amber-900/50'
                }`}
              >
                {photoCategory}
              </button>
            ))}
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
                    ? 'bg-festival-red text-white dark:bg-rose-600'
                    : 'bg-white text-festival-maroon hover:bg-festival-golden/20 dark:bg-gray-800 dark:text-white dark:hover:bg-rose-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* No Results Message */}
          {currentImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-festival-maroon dark:text-festival-golden">No photos match your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                  setActivePhotoCategory('All');
                }}
                className="mt-4 px-4 py-2 bg-festival-saffron/20 text-festival-maroon rounded-lg hover:bg-festival-saffron/30 transition-colors dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Gallery Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentImages.map(image => (
              <div 
                key={image.id} 
                className="card-festive overflow-hidden cursor-pointer transform transition-all hover:scale-[1.02] group"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
                }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-light">{image.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-festival-maroon dark:text-festival-golden">{image.alt}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">By {image.photographer}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-block px-2 py-1 text-xs bg-festival-golden/20 rounded-full text-festival-maroon dark:bg-amber-900/40 dark:text-amber-300">
                      {image.category}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-festival-red/20 rounded-full text-festival-maroon dark:bg-rose-900/40 dark:text-rose-300">
                      {image.photoCategory}
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
                      className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""} ${theme === 'dark' ? 'text-white hover:text-festival-golden' : ''}`}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        isActive={currentPage === index + 1}
                        onClick={() => paginate(index + 1)}
                        className={theme === 'dark' && currentPage !== index + 1 ? 'text-white hover:text-festival-golden' : ''}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : ""} ${theme === 'dark' ? 'text-white hover:text-festival-golden' : ''}`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
              <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative">
                <button 
                  className="absolute top-2 right-2 bg-white dark:bg-gray-700 rounded-full p-1 z-10 hover:bg-festival-red hover:text-white dark:hover:bg-festival-red transition-colors duration-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} className="text-festival-maroon dark:text-white" />
                </button>
                
                {/* Navigation buttons */}
                <button 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 z-10 hover:bg-festival-golden/20 dark:hover:bg-festival-golden/40 transition-colors duration-300"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft size={24} className="text-festival-maroon dark:text-white" />
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 z-10 hover:bg-festival-golden/20 dark:hover:bg-festival-golden/40 transition-colors duration-300"
                  onClick={handleNextImage}
                >
                  <ChevronRight size={24} className="text-festival-maroon dark:text-white" />
                </button>
                
                <div className="md:flex">
                  <div className="md:w-2/3 bg-gray-100 dark:bg-gray-900">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.alt} 
                      className="w-full h-full object-contain max-h-[70vh]"
                    />
                  </div>
                  <div className="p-6 md:w-1/3">
                    <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-2">{selectedImage.alt}</h3>
                    
                    <div className="flex gap-2 mb-4">
                      <span className="inline-block px-2 py-1 text-xs bg-festival-golden/20 rounded-full text-festival-maroon dark:bg-amber-900/40 dark:text-amber-300">
                        {selectedImage.category}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs bg-festival-red/20 rounded-full text-festival-maroon dark:bg-rose-900/40 dark:text-rose-300">
                        {selectedImage.photoCategory}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium mb-1 dark:text-gray-300">Photographer:</p>
                    <p className="text-lg text-festival-saffron dark:text-amber-400 mb-4">{selectedImage.photographer}</p>
                    <p className="text-sm font-medium mb-1 dark:text-gray-300">Caption:</p>
                    <p className="text-gray-700 dark:text-gray-300">{selectedImage.caption}</p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      Image {currentImageIndex + 1} of {filteredImages.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit CTA */}
          <div className="mt-16 p-6 bg-white rounded-xl shadow-md text-center card-festive">
            <h3 className="text-xl font-heading text-festival-maroon dark:text-festival-golden mb-3">Have your own magical Puja frame to share?</h3>
            <p className="mb-4 dark:text-gray-300">Submit it today and be featured in our gallery!</p>
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="btn-festive transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
