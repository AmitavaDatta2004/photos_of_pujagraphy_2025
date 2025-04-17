
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
  // {
  //   id: 3,
  //   src: 'https://source.unsplash.com/random/800x600/?celebration',
  //   alt: 'Street Decorations',
  //   category: 'Street Shots',
  //   photographer: 'Sameer Khan',
  //   caption: 'Beautifully lit street decorations creating a magical atmosphere.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 4,
  //   src: 'https://source.unsplash.com/random/800x600/?ritual',
  //   alt: 'Aarti Ceremony',
  //   category: 'Rituals & Traditions',
  //   photographer: 'Nita Patel',
  //   caption: 'The mesmerizing aarti ceremony with glowing lamps.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 5,
  //   src: 'https://source.unsplash.com/random/800x600/?light',
  //   alt: 'Festival Lights',
  //   category: 'Street Shots',
  //   photographer: 'Rajiv Gupta',
  //   caption: 'The pandal illuminated with thousands of colorful lights.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 6,
  //   src: 'https://source.unsplash.com/random/800x600/?sculpture',
  //   alt: 'Idol Details',
  //   category: 'Idol Making',
  //   photographer: 'Anjali Sharma',
  //   caption: 'Close-up detail of the intricate work on Durga\'s face.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 7,
  //   src: 'https://source.unsplash.com/random/800x600/?music',
  //   alt: 'Dhak Players',
  //   category: 'Cultural Events',
  //   photographer: 'Rajan Dutta',
  //   caption: 'The rhythmic beats of dhak drums filling the air with energy.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 8,
  //   src: 'https://source.unsplash.com/random/800x600/?prayer',
  //   alt: 'Morning Prayers',
  //   category: 'Rituals & Traditions',
  //   photographer: 'Meera Roy',
  //   caption: 'Devotees offering morning prayers with flowers and incense.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 9,
  //   src: 'https://source.unsplash.com/random/800x600/?devotion',
  //   alt: 'Devotee Portrait',
  //   category: 'Portraits',
  //   photographer: 'Arun Mehta',
  //   caption: 'The devotion and faith reflected in the eyes of a believer.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 10,
  //   src: 'https://source.unsplash.com/random/800x600/?emotion',
  //   alt: 'Joy of Festival',
  //   category: 'Moments & Emotions',
  //   photographer: 'Kavita Sharma',
  //   caption: 'Pure joy captured during sindoor khela celebrations.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 11,
  //   src: 'https://source.unsplash.com/random/800x600/?artist',
  //   alt: 'Artisan at Work',
  //   category: 'Idol Making',
  //   photographer: 'Rahul Das',
  //   caption: 'A skilled artisan giving final touches to the idol.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 12,
  //   src: 'https://source.unsplash.com/random/800x600/?crowd',
  //   alt: 'Festival Crowd',
  //   category: 'Street Shots',
  //   photographer: 'Vikram Singh',
  //   caption: 'The energy of the crowd during evening aarti.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 13,
  //   src: 'https://source.unsplash.com/random/800x600/?temple',
  //   alt: 'Temple Ritual',
  //   category: 'Rituals & Traditions',
  //   photographer: 'Sanjay Bose',
  //   caption: 'An age-old ritual being performed with utmost devotion.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 14,
  //   src: 'https://source.unsplash.com/random/800x600/?performer',
  //   alt: 'Stage Performance',
  //   category: 'Cultural Events',
  //   photographer: 'Neha Rao',
  //   caption: 'Cultural drama depicting scenes from mythology.',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 15,
  //   src: 'https://source.unsplash.com/random/800x600/?portrait',
  //   alt: 'Candid Moment',
  //   category: 'Portraits',
  //   photographer: 'Dinesh Joshi',
  //   caption: 'A candid moment capturing the essence of the festival spirit.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  // {
  //   id: 16,
  //   src: 'https://source.unsplash.com/random/800x600/?emotion',
  //   alt: 'Emotional Farewell',
  //   category: 'Moments & Emotions',
  //   photographer: 'Tanya Ghosh',
  //   caption: 'The emotional farewell during Durga visarjan (immersion).',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
  // {
  //   id: 17,
  //   src: 'https://source.unsplash.com/random/800x600/?emotion',
  //   alt: 'Emotional Farewell',
  //   category: 'Moments & Emotions',
  //   photographer: 'Tanya Ghosh',
  //   caption: 'The emotional farewell during Durga visarjan (immersion).',
  //   photoCategory: 'Mobile Captures' as PhotoCategory
  // },
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
