
import React from "react";
import { sponsors } from "@/data/sponsors";
import { BadgeDollarSign } from "lucide-react";

const badgeSponsor = sponsors[1] ?? sponsors[0];

const SponsorBadge = () => (
  <a
    href={badgeSponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-40 bottom-8 right-8 px-4 py-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-amber-400 via-orange-600 to-pink-500 text-white font-semibold shadow-lg border-2 border-white/20 hover:scale-105 hover:shadow-xl sponsor-badge"
    title={badgeSponsor.name}
  >
    <BadgeDollarSign className="w-5 h-5" />
    <span className="hidden sm:inline">{badgeSponsor.badgeText}</span>
  </a>
);

export default SponsorBadge;
