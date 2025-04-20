
import React, { useState } from "react";
import { sponsors } from "@/data/sponsors";
import { X } from "lucide-react";

const SponsorBanner = () => {
  // Cycle through banners if more than one
  const [open, setOpen] = useState(true);
  const activeSponsor = sponsors[0];
  
  if (!open) return null;

  return (
    <div
      className="w-full fixed top-0 left-0 z-50 text-white flex items-center justify-center px-4 py-3 animate-fade-in"
      style={{
        background: "linear-gradient(90deg,#FF9A00,#F25C54,#851E52,#7A4988)",
        boxShadow: "0 2px 18px 0 rgba(0,0,0,0.10)"
      }}
    >
      <div className="flex items-center gap-3 max-w-4xl mx-auto">
        <img
          src={activeSponsor.logo}
          alt={activeSponsor.name}
          className="h-8 w-8 rounded-full shadow border border-white/40"
        />
        <span className="font-semibold text-base md:text-lg sponsor-banner-text">
          {activeSponsor.banner} &nbsp;
          <a
            href={activeSponsor.website}
            className="underline hover:text-yellow-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </span>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="ml-5 text-white/70 hover:text-amber-200 focus:outline-none"
        aria-label="Dismiss sponsor banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SponsorBanner;
