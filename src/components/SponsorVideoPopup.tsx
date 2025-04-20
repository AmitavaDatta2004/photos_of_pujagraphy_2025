
import React, { useState } from "react";
import { sponsors } from "@/data/sponsors";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Video } from "lucide-react";

const videoSponsor = sponsors.find(s => s.video);

const SponsorVideoPopup = () => {
  if (!videoSponsor) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-8 left-8 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all">
          <Video className="w-5 h-5" />
          <span className="font-medium">Watch Sponsor Video</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white/95 dark:bg-gray-900/95 rounded-xl p-0 overflow-hidden">
        <div className="relative pt-[56.25%]">
          <iframe
            src={videoSponsor.video!}
            title={videoSponsor.name + " Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-b-xl"
          ></iframe>
        </div>
        <div className="text-center mt-4 mb-2 text-lg font-bold text-festival-maroon dark:text-yellow-300">
          Sponsored by {videoSponsor.name}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SponsorVideoPopup;
