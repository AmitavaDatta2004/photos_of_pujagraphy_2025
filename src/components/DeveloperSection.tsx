"use client"

import { Code, Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useState } from "react"

const developers = [
  {
    name: "Amitava Datta",
    role: "Full Stack Developer",
    image: "developer/AmitavaDatta.jpg",
    quote:
      "I'm passionate about creating digital experiences that celebrate our cultural heritage. 'Photos of Pujagraphy' is a platform that aims to capture the essence of Durga Puja through the eyes of photographers both amateur and professional.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "UI/UX Design"],
    links: {
      github: "https://github.com/AmitavaDatta2004",
      linkedin: "https://www.linkedin.com/in/amitava-datta-301920292/",
      email: "mailto:dattaamitava2004@gmail.com",
      portfolio: "https://portfolio.example.com",
    },
  },
  {
    name: "Pranay De",
    role: "Backend Developer",
    image: "developer/PranayDe.jpg",
    quote:
      "Crafting robust backend systems and building tools that empower communities is my passion. I believe technology should feel human.",
    skills: ["Node.js", "Express.js", "MongoDB", "Python", "REST API", "Next.js"],
    links: {
      github: "https://github.com/PRANAY130",
      linkedin: "https://www.linkedin.com/in/pranay-de-026370312/",
      email: "mailto:pranayde201@gmail.com",
      portfolio: "https://pranayde.vercel.app",
    },
  },
  
]

const DeveloperSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="developer"
      className="py-20 bg-gradient-to-b from-white via-festival-cream/10 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="festival-container">
        <h2 className="section-title text-2xl">Meet the Developers</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {developers.map((developer, index) => (
            <div
              key={developer.name}
              className="card-festive overflow-hidden border border-festival-golden/30 hover:border-festival-golden hover:shadow-2xl transition-all duration-500 relative bg-gradient-to-br from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80"
            >
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-festival-saffron/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-festival-red/20 rounded-full blur-xl" />

              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-festival-maroon/5 to-festival-saffron/5 dark:from-festival-maroon/10 dark:to-festival-saffron/10 flex items-center justify-center p-8">
                  <div
                    className={`relative w-48 h-48 rounded-full overflow-hidden border-4 ${
                      hoveredIndex === index ? "border-festival-red" : "border-festival-golden"
                    } transition-all duration-500 group shadow-lg`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={developer.image}
                      alt={developer.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4 transition-opacity duration-500 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3 className="text-white font-medium text-lg">{developer.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={20} className="text-festival-saffron" />
                    <h3 className="text-2xl font-medium text-festival-maroon dark:text-festival-golden">{developer.name}</h3>
                    <span className="px-2 py-1 bg-festival-golden/10 dark:bg-festival-golden/20 text-xs rounded-full text-festival-maroon dark:text-festival-golden border border-festival-golden/20">
                      {developer.role}
                    </span>
                  </div>

                  <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-festival-saffron dark:border-festival-golden pl-4 italic">
                    "{developer.quote}"
                  </p>

                  <div className="bg-gradient-to-r from-festival-cream/30 to-white dark:from-gray-700/30 dark:to-gray-800/30 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-festival-maroon dark:text-festival-golden mb-2">
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-festival-maroon dark:text-festival-golden border border-festival-golden/10 hover:border-festival-golden/30 hover:shadow-sm transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a
                          href={developer.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-festival-maroon/10 to-festival-red/10 dark:from-festival-maroon/30 dark:to-festival-red/30 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto">GitHub Profile</HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a
                          href={developer.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-festival-maroon/10 to-festival-red/10 dark:from-festival-maroon/30 dark:to-festival-red/30 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto">LinkedIn Profile</HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a
                          href={developer.links.email}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-festival-maroon/10 to-festival-red/10 dark:from-festival-maroon/30 dark:to-festival-red/30 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <Mail size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto">Send Email</HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a
                          href={developer.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-festival-maroon/10 to-festival-red/10 dark:from-festival-maroon/30 dark:to-festival-red/30 flex items-center justify-center hover:bg-festival-maroon hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto">Portfolio Website</HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          <span>Built with</span> <Heart size={16} className="text-festival-red" /> <span>for Utsab Unites</span>
        </div>
      </div>
    </section>
  )
}

export default DeveloperSection
