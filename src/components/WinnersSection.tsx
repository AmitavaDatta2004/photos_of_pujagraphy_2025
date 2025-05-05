
"use client";

import { Trophy, Medal, Award, Image, Eye, Camera } from "lucide-react";
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
            className={`card-festive w-full md:w-[28rem] overflow-hidden text-center p-6 md:p-10 transition-all duration-500 ${
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
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Best of Best Winner" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                <span className="bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                  <Eye size={20} />
                  <span>View Full Image</span>
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Exciting prizes will be handed over
            </p>
          </div>

          {/* Duplicate of the above card with same big styles */}
          <div
            className={`card-festive w-full md:w-[28rem] overflow-hidden text-center p-6 md:p-10 transition-all duration-500 ${
              activeCard === "best2"
                ? "shadow-2xl scale-105 bg-gradient-to-r from-festival-golden/20 to-white dark:from-amber-700/30 dark:to-gray-800"
                : ""
            }`}
            onMouseEnter={() => handleCardHover("best2")}
            onMouseLeave={handleCardLeave}
          >
            <div className="inline-block bg-gradient-to-r from-festival-golden via-festival-red to-purple-500 p-5 rounded-full mb-8 transition-transform duration-300 hover:rotate-12">
              <Award size={64} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-festival-maroon mb-5">
              Best of Best Prize
            </h3>
            <div className="aspect-square w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-6 overflow-hidden group relative border-4 border-dashed border-festival-golden/50 hover:border-festival-golden transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Best of Best Winner" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                <span className="bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                  <Eye size={20} />
                  <span>View Full Image</span>
                </span>
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
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Mobile 1st Prize Winner" 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <Camera size={24} className="text-white" />
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
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Mobile 2nd Prize Winner 1" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Mobile 2nd Prize Winner 2" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
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
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Mobile 3rd Prize Winner 1" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Mobile 3rd Prize Winner 2" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
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
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Camera 1st Prize Winner" 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-black/70 backdrop-blur-sm p-2 rounded-full">
                    <Camera size={24} className="text-white" />
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
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Camera 2nd Prize Winner 1" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#C0C0C0]/50 hover:border-[#C0C0C0] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Camera 2nd Prize Winner 2" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
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
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Camera 3rd Prize Winner 1" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-[#CD7F32]/50 hover:border-[#CD7F32] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Camera 3rd Prize Winner 2" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-black/70 backdrop-blur-sm p-1 rounded-full">
                      <Camera size={16} className="text-white" />
                    </div>
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
            {[1, 2, 3, 4, 5].map((num, index) => {
              const images = [
                "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              ];
              
              return (
                <div
                  key={num}
                  className="card-festive p-3 hover:shadow-lg hover:scale-105 transition-all duration-500 group"
                  onMouseEnter={() => handleCardHover(`honor-${num}`)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden group relative border-2 border-dashed border-purple-400/30 hover:border-purple-400 transition-all duration-300">
                    <img 
                      src={images[index]} 
                      alt={`Honorable Mention ${num}`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Camera size={14} className="text-white" />
                        <span className="text-white text-xs">Winner {num}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
