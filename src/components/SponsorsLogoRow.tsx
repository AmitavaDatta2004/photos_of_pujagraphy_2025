"use client"

import { sponsors } from "../data/sponsors"
import { useTheme } from "../hooks/useTheme"

const SponsorsLogoRow = () => {
  const { theme } = useTheme()
  return (
    <section
      className={`py-12 ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-900 to-gray-800"
          : "bg-gradient-to-r from-festival-cream/40 to-white"
      }`}
    >
      <div className="festival-container">
        <h3
          className={`text-center text-lg mb-8 fancy-underline relative inline-block mx-auto ${
            theme === "dark" ? "text-festival-golden" : "text-festival-maroon"
          } after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bottom-0 after:left-1/4 after:bg-current`}
        >
          Proudly Supported By
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 sm:gap-x-8 items-center justify-center justify-items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group transition-all duration-300
                hover:scale-105 hover:rotate-[-2deg]
                ${sponsor.tier === "platinum" ? "scale-110 z-10" : sponsor.tier === "gold" ? "scale-100" : "scale-95"}
              `}
            >
              <div
                className={`${
                  theme === "dark"
                    ? "bg-gray-800/80 group-hover:bg-gray-700 group-hover:shadow-lg group-hover:shadow-festival-golden/10"
                    : "bg-white/80 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-festival-maroon/10"
                } rounded-lg p-3 transition-all duration-300`}
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
                    theme === "dark" ? "group-hover:brightness-125" : "group-hover:brightness-110"
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsLogoRow
