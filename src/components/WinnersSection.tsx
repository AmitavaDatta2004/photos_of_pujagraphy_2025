"use client";

import { Trophy, Medal, Award, Image } from "lucide-react";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const WinnersSection = () => {
  // State to animate cards on hover
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section id="winners" className="py-20 dark:bg-gray-900">
      <div className="festival-container">
        <h2 className="section-title">Results & Winners</h2>
        <p className="section-subtitle mb-8">
          Celebrating excellence in Puja photography
        </p>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="card-festive p-8 text-center bg-gradient-to-r from-white via-festival-cream/30 to-white dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800 transition-all duration-500 shadow-md hover:shadow-xl">
            <Trophy
              size={48}
              className="text-festival-golden mx-auto mb-4 animate-pulse"
            />
            <h3 className="text-2xl font-bold text-festival-maroon mb-3">
              Winners Announced!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Congratulations to all our winners! We received incredible entries
              that captured the spirit and beauty of Puja celebrations. Explore
              the winning photographs below and celebrate with us.
            </p>
          </div>
        </div>

        {/* Best of Best */}
        <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">
          Grand Prize - Best of Best
        </h3>
        <div className="max-w-7xl mx-auto mb-24 flex justify-center gap-12 flex-wrap">
          <div
            className={`card-festive w-[28rem] overflow-hidden text-center p-10 transition-all duration-500 ${
              activeCard === "best"
                ? "shadow-2xl scale-105 bg-gradient-to-r from-festival-golden/20 to-white dark:from-amber-700/30 dark:to-gray-800"
                : ""
            }`}
            onMouseEnter={() => handleCardHover("best")}
            onMouseLeave={handleCardLeave}
          >
            <div className="inline-block bg-gradient-to-r from-festival-golden via-festival-red to-purple-500 p-5 rounded-full mb-8 transition-transform duration-300 hover:rotate-12">
              <Award size={64} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-festival-maroon mb-5">
              Best of Best Prize
            </h3>
            <div className="aspect-square w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-6 overflow-hidden group relative border-4 border-dashed border-festival-golden/50 hover:border-festival-golden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <p className="text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    size={64}
                    className="mx-auto mb-2 opacity-40 group-hover:opacity-80 transition-all"
                  />
                  <span className="text-lg font-medium">Winner Photo</span>
                </p>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-base font-medium">
                    Click to view full image
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Exciting prizes will be handed over
            </p>
          </div>

          {/* Duplicate of the above card with same big styles */}
          <div
            className={`card-festive w-[28rem] overflow-hidden text-center p-10 transition-all duration-500 ${
              activeCard === "best"
                ? "shadow-2xl scale-105 bg-gradient-to-r from-festival-golden/20 to-white dark:from-amber-700/30 dark:to-gray-800"
                : ""
            }`}
            onMouseEnter={() => handleCardHover("best")}
            onMouseLeave={handleCardLeave}
          >
            <div className="inline-block bg-gradient-to-r from-festival-golden via-festival-red to-purple-500 p-5 rounded-full mb-8 transition-transform duration-300 hover:rotate-12">
              <Award size={64} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-festival-maroon mb-5">
              Best of Best Prize
            </h3>
            <div className="aspect-square w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-6 overflow-hidden group relative border-4 border-dashed border-festival-golden/50 hover:border-festival-golden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <p className="text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    size={64}
                    className="mx-auto mb-2 opacity-40 group-hover:opacity-80 transition-all"
                  />
                  <span className="text-lg font-medium">Winner Photo</span>
                </p>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-base font-medium">
                    Click to view full image
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Exciting prizes will be handed over
            </p>
          </div>
        </div>

        {/* Mobile Captures Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">
            Mobile Captures Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "mobile-1st"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-festival-golden/20 to-white dark:from-amber-700/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("mobile-1st")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-festival-golden p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                1st Prize
              </h3>
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden group relative border-2 border-dashed border-festival-golden/50 hover:border-festival-golden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p className="text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      size={40}
                      className="mx-auto mb-2 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <span className="font-medium">Winner Photo</span>
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">
                      Click to view full image
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>

            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "mobile-2nd"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-[#C0C0C0]/20 to-white dark:from-zinc-400/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("mobile-2nd")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-[#C0C0C0] p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                2nd Prize (2 Winners)
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 1
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 2
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>

            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "mobile-3rd"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-[#CD7F32]/20 to-white dark:from-orange-600/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("mobile-3rd")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-[#CD7F32] p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                3rd Prize (2 Winners)
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 1
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 2
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>
          </div>
        </div>

        {/* Camera Captures Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">
            Camera Captures Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "camera-1st"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-festival-golden/20 to-white dark:from-amber-700/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("camera-1st")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-festival-golden p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                1st Prize
              </h3>
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden group relative border-2 border-dashed border-festival-golden/50 hover:border-festival-golden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <p className="text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      size={40}
                      className="mx-auto mb-2 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <span className="font-medium">Winner Photo</span>
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">
                      Click to view full image
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>

            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "camera-2nd"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-[#C0C0C0]/20 to-white dark:from-zinc-400/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("camera-2nd")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-[#C0C0C0] p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                2nd Prize (2 Winners)
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 1
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 2
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>

            <div
              className={`card-festive overflow-hidden text-center p-6 transition-all duration-500 ${
                activeCard === "camera-3rd"
                  ? "shadow-xl scale-105 bg-gradient-to-r from-[#CD7F32]/20 to-white dark:from-orange-600/30 dark:to-gray-800"
                  : ""
              }`}
              onMouseEnter={() => handleCardHover("camera-3rd")}
              onMouseLeave={handleCardLeave}
            >
              <div className="inline-block bg-[#CD7F32] p-3 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">
                3rd Prize (2 Winners)
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 1
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-xs group-hover:scale-110 transition-transform duration-300">
                      Winner 2
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Exciting prizes will be handed over
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-festival-maroon mb-6">
            Honorable Mentions (5 Winners)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="card-festive p-3 hover:shadow-lg hover:scale-105 transition-all duration-300"
                onMouseEnter={() => handleCardHover(`honor-${num}`)}
                onMouseLeave={handleCardLeave}
              >
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-purple-400/30 hover:border-purple-400 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Image
                      size={24}
                      className="mx-auto mb-1 opacity-40 group-hover:opacity-70 transition-all"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-sm group-hover:scale-110 transition-transform duration-300">
                      Winner {num}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
