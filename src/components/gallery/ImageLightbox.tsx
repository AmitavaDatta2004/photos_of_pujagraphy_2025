
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LikeButton from '../LikeButton';
import { User } from '@supabase/supabase-js';

interface ImageLightboxProps {
  selectedImage: any;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentImageIndex: number;
  totalImages: number;
  user: User | null;
}

const ImageLightbox = ({ 
  selectedImage, 
  onClose, 
  onPrevious, 
  onNext, 
  currentImageIndex, 
  totalImages,
  user 
}: ImageLightboxProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <button 
          className="absolute top-2 right-2 bg-white dark:bg-gray-700 rounded-full p-1 z-10 hover:bg-festival-red hover:text-white dark:hover:bg-festival-red transition-colors duration-300"
          onClick={onClose}
        >
          <X size={24} className="text-festival-maroon dark:text-white" />
        </button>
        
        {/* Navigation buttons */}
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 z-10 hover:bg-festival-golden/20 dark:hover:bg-festival-golden/40 transition-colors duration-300"
          onClick={onPrevious}
        >
          <ChevronLeft size={24} className="text-festival-maroon dark:text-white" />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 z-10 hover:bg-festival-golden/20 dark:hover:bg-festival-golden/40 transition-colors duration-300"
          onClick={onNext}
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
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden">{selectedImage.alt}</h3>
              <LikeButton photoId={selectedImage.id} user={user} />
            </div>
            
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
              Image {(currentImageIndex + 1).toString()} of {totalImages.toString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
