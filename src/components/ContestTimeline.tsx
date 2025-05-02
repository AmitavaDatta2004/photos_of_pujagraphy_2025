import { Calendar, Star, Award, Users } from "lucide-react"

const ContestTimeline = () => {
  return (
    <section
      id="timeline"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-festival-cream/10 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-12 bg-festive-gradient opacity-10"></div>

      <div className="festival-container relative z-10">
        <h2 className="section-title">Contest Timeline</h2>
        <p className="section-subtitle">Mark your calendars for Utsab Unites' Photos of Pujagraphy</p>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Registration */}
            <div className="card-festive p-6 bg-gradient-to-br from-white via-yellow-50 to-white dark:from-gray-800 dark:via-amber-950/20 dark:to-gray-800 hover:from-yellow-50 hover:via-white hover:to-yellow-50 dark:hover:from-amber-950/20 dark:hover:via-gray-800 dark:hover:to-amber-950/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-festival-golden/30 to-festival-golden/10 dark:from-festival-golden/30 dark:to-festival-golden/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Calendar size={28} className="text-festival-maroon dark:text-festival-golden" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden">
                    Registration Open
                  </h3>
                  <p className="text-2xl font-heading mt-2 text-festival-red dark:text-festival-red">
                    18th April, 2025
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Begin your journey with us! Registration opens for all photography enthusiasts to participate in
                    this celebration of Puja through your lens.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Deadline */}
            <div className="card-festive p-6 bg-gradient-to-br from-white via-rose-50 to-white dark:from-gray-800 dark:via-rose-950/20 dark:to-gray-800 hover:from-rose-50 hover:via-white hover:to-rose-50 dark:hover:from-rose-950/20 dark:hover:via-gray-800 dark:hover:to-rose-950/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-festival-red/30 to-festival-red/10 dark:from-festival-red/30 dark:to-festival-red/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Star size={28} className="text-festival-red dark:text-festival-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden">
                    Submission Deadline
                  </h3>
                  <p className="text-2xl font-heading mt-2 text-festival-red dark:text-festival-red">
                    28th April, 2025
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Last chance to submit your stunning captures! Make sure your entries are in before the clock strikes
                    midnight.
                  </p>
                </div>
              </div>
            </div>

            {/* Judging Period */}
            <div className="card-festive p-6 bg-gradient-to-br from-white via-purple-50 to-white dark:from-gray-800 dark:via-purple-950/20 dark:to-gray-800 hover:from-purple-50 hover:via-white hover:to-purple-50 dark:hover:from-purple-950/20 dark:hover:via-gray-800 dark:hover:to-purple-950/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-300 to-purple-100 dark:from-purple-500/30 dark:to-purple-700/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Users size={28} className="text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden">Judging Period</h3>
                  <p className="text-2xl font-heading mt-2 text-purple-700 dark:text-purple-400">May 16-30, 2025</p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Our panel of expert judges will review all submissions and select the most captivating and
                    meaningful captures of Puja.
                  </p>
                </div>
              </div>
            </div>

            {/* Winners Announced */}
            <div className="card-festive p-6 bg-gradient-to-br from-white via-amber-50 to-white dark:from-gray-800 dark:via-amber-950/20 dark:to-gray-800 hover:from-amber-50 hover:via-white hover:to-amber-50 dark:hover:from-amber-950/20 dark:hover:via-gray-800 dark:hover:to-amber-950/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-300 to-amber-100 dark:from-amber-500/30 dark:to-amber-700/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Award size={28} className="text-amber-700 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-festival-maroon dark:text-festival-golden">
                    Winners Announced
                  </h3>
                  <p className="text-2xl font-heading mt-2 text-amber-700 dark:text-amber-400">June 1, 2025</p>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    The moment we've all been waiting for! Join us online as we reveal the winners and celebrate the
                    best of Puja photography.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQjLoo3U9XI9a5MSiblGE31GO0ZRW05F_nFxOV4HuX6ivung/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-festive bg-gradient-to-r from-festival-maroon to-festival-red dark:from-festival-maroon/90 dark:to-festival-red/90 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar size={20} />
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-festive-gradient opacity-10 transform rotate-180"></div>
    </section>
  )
}

export default ContestTimeline
