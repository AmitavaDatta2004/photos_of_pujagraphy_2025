
import React from 'react';
import { User } from '@supabase/supabase-js';
import LikeButton from '../LikeButton';
import { useIsMobile } from '@/hooks/use-mobile';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  photoCategory: string;
  photographer: string;
  caption: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageSelect: (image: GalleryImage, index: number) => void;
  user: User | null;
}

const GalleryGrid = ({ images, onImageSelect, user }: GalleryGridProps) => {
  const isMobile = useIsMobile();

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-festival-maroon dark:text-festival-golden">No photos match your search criteria.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-festival-saffron/20 text-festival-maroon rounded-lg hover:bg-festival-saffron/30 transition-colors dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  // Determine grid columns based on screen size
  const gridCols = isMobile ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid ${gridCols} gap-4`}>
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className="card-festive overflow-hidden transform transition-all hover:scale-[1.02] group relative"
        >
          <div 
            className="aspect-square overflow-hidden cursor-pointer"
            onClick={() => onImageSelect(image, index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
              loading="lazy" // Add lazy loading for better performance
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-light">{image.category}</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start">
              <div className="flex-grow overflow-hidden">
                <h3 className="font-medium text-festival-maroon dark:text-festival-golden truncate">{image.alt}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">By {image.photographer}</p>
              </div>
              <LikeButton photoId={image.id} user={user} className="mt-1 flex-shrink-0 ml-2" />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-block px-2 py-1 text-xs bg-festival-golden/20 rounded-full text-festival-maroon dark:bg-amber-900/40 dark:text-amber-300 whitespace-nowrap">
                {image.category}
              </span>
              <span className="inline-block px-2 py-1 text-xs bg-festival-red/20 rounded-full text-festival-maroon dark:bg-rose-900/40 dark:text-rose-300 whitespace-nowrap">
                {image.photoCategory}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
