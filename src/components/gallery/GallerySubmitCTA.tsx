"use client"

import { Share, Camera } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const GallerySubmitCTA = () => {
  const isMobile = useIsMobile()

  return (
    <div className="mt-10 sm:mt-16 relative overflow-hidden px-4 sm:px-0">
      <div className="absolute inset-0 bg-gradient-to-r from-festival-maroon/20 to-festival-golden/20 dark:from-festival-maroon/10 dark:to-festival-golden/10 -z-10 rounded-xl"></div>

      <div className="p-4 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg text-center border border-festival-golden/30 dark:border-festival-golden/20">
        <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 bg-festival-maroon/10 dark:bg-festival-golden/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
          <Camera className="text-festival-maroon dark:text-festival-golden" size={isMobile ? 20 : 24} />
        </div>

        <h3 className="text-xl sm:text-2xl font-heading text-festival-maroon dark:text-festival-golden mb-2 sm:mb-3">
          Capture the Magic of Puja?
        </h3>

        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
          Share your beautiful moments with our community and be featured in our gallery. Your photographs help preserve
          and celebrate our cultural heritage!
        </p>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-festival-maroon hover:bg-festival-maroon/90 text-white dark:bg-festival-golden dark:hover:bg-festival-golden/90 dark:text-festival-maroon py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <Share size={isMobile ? 16 : 18} className="mr-2" />
          Submit Your Photos
        </a>
      </div>
    </div>
  )
}

export default GallerySubmitCTA
