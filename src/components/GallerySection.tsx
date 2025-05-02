"use client"

import { useState, useEffect, useContext } from "react"
import { X, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { galleryImages, type PhotoCategory } from "../data/images"
import { useTheme } from "../hooks/useTheme"
import LikeButton from "./LikeButton"
import { AuthContext } from "../App"
import { useIsMobile } from "../hooks/use-mobile"

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [activePhotoCategory, setActivePhotoCategory] = useState<PhotoCategory | "All">("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [randomImages, setRandomImages] = useState<typeof galleryImages>([])
  const { theme } = useTheme()
  const { user } = useContext(AuthContext)
  const isMobile = useIsMobile()

  // Get 6 random images from the gallery
  useEffect(() => {
    const getRandomImages = () => {
      const shuffled = [...galleryImages].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, isMobile ? 4 : 6)
    }

    setRandomImages(getRandomImages())
  }, [isMobile])

  const categories = ["All", "Idol Making", "Cultural Events", "Street Shots", "Rituals & Traditions"]
  const photoCategories: (PhotoCategory | "All")[] = ["All", "Mobile Captures", "Camera Captures"]

  // Filter images based on category and photo category
  const filteredImages = randomImages.filter((img) => {
    const matchesCategory = activeFilter === "All" || img.category === activeFilter
    const matchesPhotoCategory = activePhotoCategory === "All" || img.photoCategory === activePhotoCategory
    return matchesCategory && matchesPhotoCategory
  })

  return (
    <section id="gallery" className={`py-10 md:py-20 ${theme === "dark" ? "bg-gray-800/20" : "bg-festival-cream/30"}`}>
      <div className="festival-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Capturing the essence of Puja by Utsab Unites</p>

        {/* Photo Category Filters (Mobile/Camera) */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 px-2 py-1">
          {photoCategories.map((photoCategory) => (
            <button
              key={photoCategory}
              onClick={() => setActivePhotoCategory(photoCategory)}
              className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-all ${
                activePhotoCategory === photoCategory
                  ? theme === "dark"
                    ? "bg-amber-600 text-white"
                    : "bg-festival-golden text-festival-maroon"
                  : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-amber-800/50"
                    : "bg-white text-festival-maroon hover:bg-festival-golden/20"
              }`}
            >
              {photoCategory}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-12 px-2 py-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-all ${
                activeFilter === category
                  ? theme === "dark"
                    ? "bg-rose-600 text-white"
                    : "bg-festival-red text-white"
                  : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-rose-900/50"
                    : "bg-white text-festival-maroon hover:bg-festival-golden/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="card-festive overflow-hidden transform transition-all hover:scale-[1.05] hover:shadow-xl group relative"
            >
              <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => setSelectedImage(image)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
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
                    <h3
                      className={`font-medium truncate ${theme === "dark" ? "text-festival-golden" : "text-festival-maroon"}`}
                    >
                      {image.alt}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">By {image.photographer}</p>
                  </div>
                  <LikeButton photoId={image.id.toString()} user={user} className="mt-1 flex-shrink-0 ml-2" />
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full truncate ${
                      theme === "dark" ? "bg-amber-900/40 text-amber-300" : "bg-festival-golden/20 text-festival-maroon"
                    }`}
                  >
                    {image.category}
                  </span>
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full truncate ${
                      theme === "dark" ? "bg-rose-900/40 text-rose-300" : "bg-festival-red/20 text-festival-maroon"
                    }`}
                  >
                    {image.photoCategory}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            to="/gallery"
            className="btn-festive inline-flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Photos
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Lightbox - More responsive for mobile */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in overflow-y-auto">
            <div
              className={`max-w-4xl w-full ${theme === "dark" ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-sm rounded-lg overflow-hidden relative shadow-2xl border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
            >
              <button
                className={`absolute top-2 right-2 ${theme === "dark" ? "bg-gray-700" : "bg-white"} rounded-full p-1 z-10 hover:bg-festival-red hover:text-white transition-colors duration-300`}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} className={`${theme === "dark" ? "text-white" : "text-festival-maroon"}`} />
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 bg-black/20 dark:bg-black/40">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[40vh] md:max-h-[70vh] object-contain mx-auto"
                  />
                </div>
                <div className="p-4 md:p-6 w-full md:w-1/3">
                  <div className="flex justify-between items-start">
                    <h3
                      className={`text-xl font-bold ${theme === "dark" ? "text-festival-golden" : "text-festival-maroon"} mb-2`}
                    >
                      {selectedImage.alt}
                    </h3>
                    <LikeButton photoId={selectedImage.id.toString()} user={user} />
                  </div>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        theme === "dark"
                          ? "bg-amber-900/40 text-amber-300"
                          : "bg-festival-golden/20 text-festival-maroon"
                      }`}
                    >
                      {selectedImage.category}
                    </span>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full truncate ${
                        theme === "dark" ? "bg-rose-900/40 text-rose-300" : "bg-festival-red/20 text-festival-maroon"
                      }`}
                    >
                      {selectedImage.photoCategory}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-1 dark:text-gray-300">Photographer:</p>
                  <p className={`text-lg ${theme === "dark" ? "text-amber-400" : "text-festival-saffron"} mb-4`}>
                    {selectedImage.photographer}
                  </p>
                  <p className="text-sm font-medium mb-1 dark:text-gray-300">Caption:</p>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{selectedImage.caption}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection
