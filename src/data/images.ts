
// Define the available categories
export const categories = [
  'All',
  'Idol Making',
  'Cultural Events',
  'Street Shots',
  'Rituals & Traditions',
  'Portraits',
  'Moments & Emotions',
];

// Define the photo categories
export type PhotoCategory = 'Mobile Captures' | 'Camera Captures';

// Gallery images data with category information
export const galleryImages = [
  {
    id: 1,
    src: 'mobile/amitava_datta_01.jpg',
    alt: 'Durga Idol',
    category: 'Puja Idol',
    photographer: 'Amitava Datta',
    caption: 'The majestic Durga idol adorned with intricate details and vibrant colors.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 2,
    src: 'camera/amitava_datta_01.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Puja Idol',
    photographer: 'Amitava Datta',
    caption: 'The stunning Jagadhatri idol captured in the golden hour light.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 3,
    src: 'camera/Soumendra Mohan Ray_pic_1.jpg',
    alt: 'Jagadhatri Idol(Adi Maa)',
    category: 'Street Shots',
    photographer: 'Soumendra Mohan Ray',
    caption: 'প্রনাম (Pronaam) - A devotee offering prayers with utmost devotion.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 4,
    src: 'camera/Soumendra Mohan Ray_pic_2.jpg',
    alt: 'Ritaul of Blessing',
    category: 'Rituals & Traditions',
    photographer: 'Soumendra Mohan Ray',
    caption: 'আর্শীবাদ (Arshibad) - The blessings of the goddess captured in a moment.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 5,
    src: 'mobile/Sudip Dutta_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'Cultural Events',
    photographer: 'Sudip Dutta',
    caption: 'আরাধনা (Aaradhana) - The worship of the goddess during the festival.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 6,
    src: 'mobile/Sudip Dutta_pic_2.jpg',
    alt: 'Idol Details',
    category: 'Idol Making',
    photographer: 'Sudip Dutta',
    caption: 'দেবীরুপে সংহিস্তান (Debirupen Sanghistan) - The intricate details of the idol.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 7,
    src: 'mobile/Tanmoy banerjee_pic_1.jpg',
    alt: 'Kali Idol',
    category: 'Cultural Events',
    photographer: 'Rajan Dutta',
    caption: 'শক্তি (Shakti) - The power of the goddess captured in a moment.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 8,
    src: 'mobile/Koushik Das_pic_1.jpg',
    alt: 'Mukhoshree',
    category: 'Portraits',
    photographer: 'Koushik Das',
    caption: 'Chakroborty barir sampurna',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 9,
    src: 'mobile/Koushik Das_pic_2.jpg',
    alt: 'Devotee Portrait',
    category: 'Portraits',
    photographer: 'Koushik Das',
    caption: 'Mukherjee barir haimantika',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 10,
    src: 'mobile/SUPRATIM BHAR_pic_1.jpg',
    alt: 'Joy of Festival',
    category: 'Moments & Emotions',
    photographer: 'Supratim Bhar',
    caption: 'চিরস্থায়ী হোক শৈশব স্মৃতি (Chirashthayi Hok Shoishob Smriti) - The joy of childhood memories during the festival.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 11,
    src: 'mobile/SUPRATIM BHAR_pic_2.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Rituals & Traditions',
    photographer: 'Supratim Bhar',
    caption: 'চিরন্তনী জগদ্ধাত্রী (Chirontoni Jagadhatri) - The eternal beauty of the Jagadhatri idol.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 12,
    src: 'mobile/Bhaskar Bhattacharya_pic_1.jpg',
    alt: 'Jagadhatri Idol(Shantipur)',
    category: 'Moments & Emotions',
    photographer: 'Bhaskar Bhattacharya',
    caption: 'দেবী জগদ্ধাত্রী সুত্রাগড় কদবেল তলা শান্তিপুর নদীয়া .',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 13,
    src: 'camera/Bhaskar Bhattacharya_pic_1.jpg',
    alt: 'Idol',
    category: 'Rituals & Traditions',
    photographer: 'Bhaskar Bhattacharya',
    caption: 'মুখশ্রী ♥️',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 14,
    src: 'camera/Prithwiraj Paul_pic_2.JPG',
    alt: 'Cultural Event',
    category: 'Cultural Events',
    photographer: 'Prithwiraj Paul',
    caption: 'Sandhya Aroti - A mesmerizing moment during the festival.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 15,
    src: 'camera/Prithwiraj Paul_pic_1.JPG',
    alt: 'Candid Moment',
    category: 'Portraits',
    photographer: 'Prithwiraj Paul',
    caption: 'A candid moment capturing the essence of the festival spirit.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 16,
    src: 'mobile/rajib bagui_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'Moments & Emotions',
    photographer: 'Rajib Bagui',
    caption: 'Shanti Rupen Sansthitan - The goddess in her serene form.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 17,
    src: 'mobile/rajib bagui_pic_2.jpg',
    alt: 'Durga Idol',
    category: 'Moments & Emotions',
    photographer: 'Rajib Bagui',
    caption: 'উৎসবে জমজমাট (Utsobe Jomjomat) - The vibrant atmosphere of the festival.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
];

// Organizing team data
export const organizingTeam = [
  {
    id: 1,
    name: "Ria Sen",
    role: "Lead Coordinator",
    team: "Event Management Team",
    photo: "https://source.unsplash.com/random/300x300/?portrait",
    social: {
      instagram: "https://instagram.com/riasen",
      facebook: "https://facebook.com/riasen",
      twitter: "https://twitter.com/riasen",
    }
  },
  {
    id: 2,
    name: "Arjun Sharma",
    role: "Photography Expert",
    team: "Curation Team",
    photo: "https://source.unsplash.com/random/300x300/?man",
    social: {
      instagram: "https://instagram.com/arjunsharma",
      facebook: "https://facebook.com/arjunsharma",
      linkedin: "https://linkedin.com/in/arjunsharma"
    }
  },
  {
    id: 3,
    name: "Priyanka Roy",
    role: "Creative Director",
    team: "Event Management Team",
    photo: "https://source.unsplash.com/random/300x300/?woman",
    social: {
      instagram: "https://instagram.com/priyankaroy",
      behance: "https://behance.net/priyankaroy",
      dribbble: "https://dribbble.com/priyankaroy"
    }
  },
  {
    id: 4,
    name: "Rahul Gupta",
    role: "Technical Lead",
    team: "Curation Team",
    photo: "https://source.unsplash.com/random/300x300/?indian",
    social: {
      instagram: "https://instagram.com/rahulgupta",
      github: "https://github.com/rahulgupta",
      linkedin: "https://linkedin.com/in/rahulgupta"
    }
  }
];
