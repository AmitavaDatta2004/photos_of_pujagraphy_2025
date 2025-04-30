
import { useState, useEffect, useContext } from 'react';
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useTheme } from "../hooks/useTheme";
import { galleryImages, PhotoCategory } from '../data/images';
import { AuthContext } from '../App';
import GalleryHeader from '../components/gallery/GalleryHeader';
import GallerySearch from '../components/gallery/GallerySearch';
import GalleryFilters from '../components/gallery/GalleryFilters';
import GalleryGrid from '../components/gallery/GalleryGrid';
import ImageLightbox from '../components/gallery/ImageLightbox';
import GalleryPagination from '../components/gallery/GalleryPagination';
import GallerySubmitCTA from '../components/gallery/GallerySubmitCTA';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePhotoCategory, setActivePhotoCategory] = useState<PhotoCategory | 'All'>('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme();
  const { user, loading } = useContext(AuthContext);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const imagesPerPage = 8;

  // Convert gallery images to have string IDs for consistency with the GalleryGrid component
  const galleryImagesWithStringIds = galleryImages.map(img => ({
    ...img,
    id: img.id.toString()
  }));

  // Filter images based on category, photo category, and search term
  const filteredImages = galleryImagesWithStringIds.filter(img => {
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
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle image selection
  const handleImageSelect = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="pt-10 pb-20 bg-festival-cream/30 dark:bg-gray-800/30 min-h-screen transition-colors duration-300">
        <div className="festival-container">
          {/* Header with navigation and auth */}
          <GalleryHeader user={user} loading={loading} />
          
          <h1 className="section-title">Moments of Pujagraphy</h1>
          <p className="section-subtitle">A visual celebration of Maa Durga and the culture that surrounds Her</p>

          {/* Search Bar */}
          <GallerySearch searchTerm={searchTerm} onSearch={handleSearch} />

          {/* Filters */}
          <GalleryFilters 
            activeFilter={activeFilter}
            activePhotoCategory={activePhotoCategory}
            setActiveFilter={setActiveFilter}
            setActivePhotoCategory={setActivePhotoCategory}
            setCurrentPage={setCurrentPage}
          />

          {/* Gallery Grid */}
          <GalleryGrid 
            images={currentImages}
            onImageSelect={(image, index) => handleImageSelect(image, indexOfFirstImage + index)}
            user={user}
          />

          {/* Pagination */}
          <GalleryPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />

          {/* Lightbox */}
          <ImageLightbox
            selectedImage={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrevious={handlePrevImage}
            onNext={handleNextImage}
            currentImageIndex={currentImageIndex}
            totalImages={filteredImages.length}
            user={user}
          />

          {/* Submit CTA */}
          <GallerySubmitCTA />
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
