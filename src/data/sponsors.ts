
// Sponsor tiers and information
export type SponsorTier = 'platinum' | 'gold' | 'silver';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: SponsorTier;
  website: string;
  description: string;
  promoCode?: string;
  discount?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators',
    logo: 'https://placehold.co/200x80/222/fff?text=TechInnovators',
    tier: 'platinum',
    website: 'https://example.com/tech-innovators',
    description: 'Leading provider of innovative photography and imaging solutions.',
    promoCode: 'PHOTOFEST25',
    discount: '20% off on all premium equipment'
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio Pro',
    logo: 'https://placehold.co/200x80/f00/fff?text=CreativeStudio',
    tier: 'platinum',
    website: 'https://example.com/creative-studio',
    description: 'Professional software solutions for creative professionals.',
    promoCode: 'CREATE25',
    discount: '3 months free subscription'
  },
  {
    id: 'photo-masters',
    name: 'Photo Masters',
    logo: 'https://placehold.co/200x80/222/yellow?text=PhotoMasters',
    tier: 'gold',
    website: 'https://example.com/photo-masters',
    description: 'Premium photography equipment and accessories.',
    promoCode: 'MASTER2025',
    discount: '15% off on all accessories'
  },
  {
    id: 'digital-store',
    name: 'Digital Store Plus',
    logo: 'https://placehold.co/200x80/red/fff?text=DigitalStore',
    tier: 'gold',
    website: 'https://example.com/digital-store',
    description: 'Your one-stop shop for all digital photography needs.',
    promoCode: 'DIGITAL25',
    discount: 'Buy 1 Get 1 on memory cards'
  },
  {
    id: 'pro-gear',
    name: 'Pro Gear Solutions',
    logo: 'https://placehold.co/200x80/333/fff?text=ProGear',
    tier: 'silver',
    website: 'https://example.com/pro-gear',
    description: 'Professional photography gear and accessories.',
    promoCode: 'GEAR2025',
    discount: '25% off on stands and supports'
  },
  {
    id: 'image-tech',
    name: 'Image Tech Labs',
    logo: 'https://placehold.co/200x80/green/fff?text=ImageTech',
    tier: 'silver',
    website: 'https://example.com/image-tech',
    description: 'Innovative imaging solutions for photographers.',
    promoCode: 'IMAGE25',
    discount: 'Free prints with every purchase'
  }
];

// Helper function to get sponsors by tier
export const getSponsorsByTier = (tier: SponsorTier): Sponsor[] => {
  return sponsors.filter(sponsor => sponsor.tier === tier);
};

// Get all platinum sponsors
export const platinumSponsors = getSponsorsByTier('platinum');

// Get all gold sponsors
export const goldSponsors = getSponsorsByTier('gold');

// Get all silver sponsors
export const silverSponsors = getSponsorsByTier('silver');
