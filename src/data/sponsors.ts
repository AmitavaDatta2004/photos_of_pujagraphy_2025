
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
    id: 'canon',
    name: 'Canon',
    logo: 'https://placehold.co/200x80/222/fff?text=Canon',
    tier: 'platinum',
    website: 'https://www.canon.com',
    description: 'Leading provider of professional photography equipment and printing solutions.',
    promoCode: 'PUJAGRAPHY2025',
    discount: '15% off on select DSLR cameras'
  },
  {
    id: 'adobe',
    name: 'Adobe',
    logo: 'https://placehold.co/200x80/f00/fff?text=Adobe',
    tier: 'platinum',
    website: 'https://www.adobe.com',
    description: 'Industry standard software for photo editing and creative design.',
    promoCode: 'PHOTOFEST25',
    discount: '20% off first 3 months of Creative Cloud'
  },
  {
    id: 'nikon',
    name: 'Nikon',
    logo: 'https://placehold.co/200x80/222/yellow?text=Nikon',
    tier: 'gold',
    website: 'https://www.nikon.com',
    description: 'Precision optics and imaging products for photographers worldwide.',
    promoCode: 'NIKONFEST',
    discount: '10% off accessories'
  },
  {
    id: 'sandisk',
    name: 'SanDisk',
    logo: 'https://placehold.co/200x80/red/fff?text=SanDisk',
    tier: 'gold',
    website: 'https://www.sandisk.com',
    description: 'High-performance storage solutions for photographers and creators.',
    promoCode: 'SDSTORE25',
    discount: 'Buy 1 Get 1 on SD cards'
  },
  {
    id: 'manfrotto',
    name: 'Manfrotto',
    logo: 'https://placehold.co/200x80/333/fff?text=Manfrotto',
    tier: 'silver',
    website: 'https://www.manfrotto.com',
    description: 'Professional tripods, lighting supports, and camera accessories.',
    promoCode: 'TRIPOD25',
    discount: '25% off tripods'
  },
  {
    id: 'fujifilm',
    name: 'Fujifilm',
    logo: 'https://placehold.co/200x80/green/fff?text=Fujifilm',
    tier: 'silver',
    website: 'https://www.fujifilm.com',
    description: 'Innovative cameras and printing solutions with legendary color science.',
    promoCode: 'FUJI2025',
    discount: 'Free photo print with any purchase'
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
