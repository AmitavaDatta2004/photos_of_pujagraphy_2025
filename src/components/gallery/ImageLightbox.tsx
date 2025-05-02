"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import LikeButton from "../LikeButton"
import type { User } from "@supabase/supabase-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommentSection from "./CommentSection"
import { useIsMobile } from "@/hooks/use-mobile"

interface ImageLightboxProps {
  selectedImage: any
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  currentImageIndex: number
  totalImages: number
  user: User | null
}

const ImageLightbox = ({
  selectedImage,
  onClose,
  onPrevious,
  onNext,
  currentImageIndex,
  totalImages,
  user,
}: ImageLightboxProps) => {
  const isMobile = useIsMobile()

  if (!selectedImage) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto">
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative max-h-[95vh] sm:max-h-[90vh] flex flex-col"
      >
        <button
          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-1 z-10 hover:bg-festival-red hover:text-white dark:hover:bg-festival-red transition-colors duration-300"
          onClick={onClose}
        >
          <X size={isMobile ? 20 : 24} className="text-festival-maroon dark:text-white" />
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-1 sm:p-2 z-10 hover:bg-festival-golden/80 dark:hover:bg-festival-golden/80 transition-colors duration-300"
          onClick={onPrevious}
        >
          <ChevronLeft size={isMobile ? 20 : 24} className="text-festival-maroon dark:text-white" />
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-1 sm:p-2 z-10 hover:bg-festival-golden/80 dark:hover:bg-festival-golden/80 transition-colors duration-300"
          onClick={onNext}
        >
          <ChevronRight size={isMobile ? 20 : 24} className="text-festival-maroon dark:text-white" />
        </button>

        <div className="overflow-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh]"
              />
            </div>
            <div
              className="p-4 sm:p-6 w-full md:w-1/3 overflow-y-auto"
              style={{ maxHeight: isMobile ? "calc(50vh)" : "calc(90vh - 2rem)" }}
            >
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-festival-maroon dark:text-festival-golden">
                      {selectedImage.alt}
                    </h3>
                    <LikeButton photoId={selectedImage.id} user={user} />
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs bg-festival-golden/20 rounded-full text-festival-maroon dark:bg-amber-900/40 dark:text-amber-300">
                      {selectedImage.category}
                    </span>
                    <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs bg-festival-red/20 rounded-full text-festival-maroon dark:bg-rose-900/40 dark:text-rose-300">
                      {selectedImage.photoCategory}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium mb-1 dark:text-gray-300">Photographer:</p>
                  <p className="text-base sm:text-lg text-festival-saffron dark:text-amber-400 mb-3 sm:mb-4">
                    {selectedImage.photographer}
                  </p>
                  <p className="text-xs sm:text-sm font-medium mb-1 dark:text-gray-300">Caption:</p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{selectedImage.caption}</p>
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Image {(currentImageIndex + 1).toString()} of {totalImages.toString()}
                  </div>
                </TabsContent>

                <TabsContent value="comments">
                  <CommentSection photoId={selectedImage.id} user={user} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLightbox
