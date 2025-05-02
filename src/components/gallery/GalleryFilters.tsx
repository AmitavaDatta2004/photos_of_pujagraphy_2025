"use client"
import type { PhotoCategory } from "../../data/images"

interface GalleryFiltersProps {
  activeFilter: string
  activePhotoCategory: PhotoCategory | "All"
  setActiveFilter: (filter: string) => void
  setActivePhotoCategory: (category: PhotoCategory | "All") => void
  setCurrentPage: (page: number) => void
}

const GalleryFilters = ({
  activeFilter,
  activePhotoCategory,
  setActiveFilter,
  setActivePhotoCategory,
  setCurrentPage,
}: GalleryFiltersProps) => {
  const categories = [
    "All",
    "Idol Making",
    "Cultural Events",
    "Street Shots",
    "Rituals & Traditions",
    "Portraits",
    "Moments & Emotions",
  ]
  const photoCategories: (PhotoCategory | "All")[] = ["All", "Mobile Captures", "Camera Captures"]

  return (
    <>
      {/* Photo Category Filters (Mobile/Camera) */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
        {photoCategories.map((photoCategory) => (
          <button
            key={photoCategory}
            onClick={() => {
              setActivePhotoCategory(photoCategory)
              setCurrentPage(1)
            }}
            className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-all ${
              activePhotoCategory === photoCategory
                ? "bg-festival-golden text-festival-maroon dark:bg-amber-500 dark:text-white"
                : "bg-white text-festival-maroon hover:bg-festival-golden/20 dark:bg-gray-800 dark:text-white dark:hover:bg-amber-900/50"
            }`}
          >
            {photoCategory}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveFilter(category)
              setCurrentPage(1)
            }}
            className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full transition-all ${
              activeFilter === category
                ? "bg-festival-red text-white dark:bg-rose-600"
                : "bg-white text-festival-maroon hover:bg-festival-golden/20 dark:bg-gray-800 dark:text-white dark:hover:bg-rose-900/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  )
}

export default GalleryFilters
