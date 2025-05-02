import { CalendarDays, Camera, Info, Users, Trophy } from "lucide-react"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-festival-cream/10 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative elements */}
      <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-festival-golden/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-80 h-80 bg-festival-red/5 rounded-full blur-3xl"></div>

      <div className="festival-container">
        <h2 className="section-title">About the Competition</h2>
        <p className="section-subtitle">Celebrating Puja through the art of photography</p>

        <div className="max-w-3xl mx-auto text-center mb-12 transform transition-all duration-300 hover:scale-105 card-festive p-6 border-l-4 border-festival-saffron dark:border-festival-golden bg-gradient-to-r from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80">
          <p className="text-lg mb-6 dark:text-gray-300">
            "Photos of Pujagraphy" is a photography competition dedicated to celebrating the spirit of Puja through the
            lens of passionate photographers. The competition invites participants to capture and share the soul,
            emotion, and cultural richness of Puja across two categories: Mobile and Camera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-saffron/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1 bg-gradient-to-br from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Users className="text-festival-saffron" />
              Who Can Participate
            </h3>
            <p className="mb-4 dark:text-gray-300">Our competition is open to photographers of all levels:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                Amateur and professional photographers
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                All age groups welcome
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                Photography enthusiasts with passion for culture
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                Anyone with a camera or smartphone
              </li>
            </ul>
          </div>

          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-saffron/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1 bg-gradient-to-br from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Camera className="text-festival-saffron" />
              Judging Criteria
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                <span className="font-semibold dark:text-gray-200">Photo Quality:</span> Technical excellence and
                clarity
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                <span className="font-semibold dark:text-gray-200">Emotional Depth:</span> Ability to convey feelings
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                <span className="font-semibold dark:text-gray-200">Cultural Relevance:</span> Connection to Durga Puja
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                <span className="font-semibold dark:text-gray-200">Originality:</span> Creative perspective and unique
                vision
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 dark:text-gray-300">
                <span className="font-semibold dark:text-gray-200">Storytelling:</span> Narrative quality of the image
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-red/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1 bg-gradient-to-br from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <CalendarDays className="text-festival-saffron" />
              Important Dates
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                <div className="bg-gradient-to-br from-festival-golden/30 to-festival-golden/10 dark:from-festival-golden/30 dark:to-festival-golden/10 p-2 rounded min-w-[40px] text-center shadow-inner">
                  <span className="font-bold dark:text-white">18</span>
                  <span className="block text-xs dark:text-gray-300">APR</span>
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-200">Registration Opens</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Submissions begin for both Mobile & Camera categories
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                <div className="bg-gradient-to-br from-festival-golden/30 to-festival-golden/10 dark:from-festival-golden/30 dark:to-festival-golden/10 p-2 rounded min-w-[40px] text-center shadow-inner">
                  <span className="font-bold dark:text-white">28</span>
                  <span className="block text-xs dark:text-gray-300">APR</span>
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-200">Submission Deadline</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Last day to submit entries</p>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                <div className="bg-gradient-to-br from-festival-golden/30 to-festival-golden/10 dark:from-festival-golden/30 dark:to-festival-golden/10 p-2 rounded min-w-[40px] text-center shadow-inner">
                  <span className="font-bold dark:text-white">31</span>
                  <span className="block text-xs dark:text-gray-300">MAY</span>
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-200">Winners Announced</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Results published on website</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-festive p-6 transition-all duration-300 hover:shadow-lg hover:shadow-festival-red/10 dark:hover:shadow-festival-golden/20 hover:-translate-y-1 bg-gradient-to-br from-white to-festival-cream/20 dark:from-gray-800 dark:to-gray-900/80">
            <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden mb-4 flex items-center gap-2">
              <Trophy className="text-festival-saffron" />
              Prizes & Recognition
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                <div className="p-2 rounded bg-gradient-to-r from-festival-golden to-amber-400 text-white min-w-[40px] text-center shadow-sm">
                  <span className="font-bold">BB</span>
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-200">Best of Best</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special prize for the overall best photo</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-festival-maroon dark:text-festival-golden flex items-center">
                    <Info size={16} className="mr-1" /> Mobile Category
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-festival-golden to-amber-400 text-white min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">1st</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">First Prize</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-gray-800 min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">2nd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">Silver Award</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-[#CD7F32] to-[#E8A87C] text-white min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">3rd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">Bronze Award</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-festival-maroon dark:text-festival-golden flex items-center">
                    <Camera size={16} className="mr-1" /> Camera Category
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-festival-golden to-amber-400 text-white min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">1st</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">First Prize</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-gray-800 min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">2nd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">Silver Award</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200">
                      <div className="p-2 rounded bg-gradient-to-r from-[#CD7F32] to-[#E8A87C] text-white min-w-[32px] text-center text-sm shadow-sm">
                        <span className="font-bold">3rd×2</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold dark:text-gray-200">Bronze Award</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:bg-festival-cream/30 dark:hover:bg-festival-golden/10 p-2 rounded-md transition-colors duration-200 mt-4">
                <div className="p-2 rounded bg-gradient-to-r from-festival-red/30 to-festival-red/10 min-w-[40px] text-center shadow-inner">
                  <span className="font-bold dark:text-white">HM</span>
                </div>
                <div>
                  <span className="font-semibold dark:text-gray-200">Honorable Mentions (5)</span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Special recognition and featured display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
