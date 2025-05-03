
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
    photographer: 'Harshit Banerjee',
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
  {
    id: 18,
    src: 'mobile/Sankar Das_pic_1.jpg',
    alt: 'Idol',
    category: 'Moments & Emotions',
    photographer: 'Sankar Das',
    caption: 'পৃথিবীর সব চেয়ে শান্তির জায়গা হল মায়ের কোলে - The most peaceful place in the world is in the lap of the mother.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  // {
  //   id: 19,
  //   src: 'camera/Amarnath Roy_pic_2.jpg',
  //   alt: 'Jagadhatri Idol',
  //   category: 'Street Shots',
  //   photographer: 'Amarnath Roy',
  //   caption: 'বিদায় বেলায়, আলোক মালায়.... The farewell of the goddess adorned with lights.',
  //   photoCategory: 'Camera Captures' as PhotoCategory
  // },
  {
    id: 20,
    src: 'camera/Amarnath Roy_pic_1.jpg',
    alt: 'Idol making',
    category: 'Idol Making',
    photographer: 'Amarnath Roy',
    caption: 'আহ্লাদে মা রাখবো তোরে.... আমার হাতে বন্দি করে......',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 21,
    src: 'mobile/Amarnath Roy_pic_1.jpg',
    alt: 'Jagadhatri Idol',
    category: 'cultural events',
    photographer: 'Amarnath Roy',
    caption: 'উৎসবে জমজমাট (Utsobe Jomjomat) - The vibrant atmosphere of the festival.',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 22,
    src: 'mobile/Amarnath Roy_pic_2.jpg',
    alt: 'Durga Idol',
    category: 'Moments & Emotions',
    photographer: 'Amarnath Roy',
    caption: 'দৃষ্টি ',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 23,
    src: 'mobile/Tanmoy banerjee_pic_2.jpg',
    alt: 'Idol',
    category: 'Street Shots',
    photographer: 'Harshit Banerjee',
    caption: '" বিদায় বেলায়, চোখে জলের খেলায় "... 💔',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 24,
    src: 'camera/Surajit Ghosh_pic_1.jpg',
    alt: 'Kali Idol',
    category: 'Street Shots',
    photographer: 'Surajit Ghosh',
    caption: 'জয়কালী কলকাত্তাওয়ালি...',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 25,
    src: 'mobile/Tanmoy Das_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'cultural events',
    photographer: 'Tanmoy Das',
    caption: 'হাওড়ার রাজরানী 🤎🔱🌼',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 26,
    src: 'mobile/Swapnadeep Bhar_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'cultural events',
    photographer: 'Swapnadeep Bhar',
    caption: 'মোবাইল ক্যামেরায় ক্যামেরাবন্দি ❤️ লালবাগান এর মা জগদ্ধাত্রী ❤️',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 27,
    src: 'mobile/Swapnadeep Bhar_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'Street Shots',
    photographer: 'Swapnadeep Bhar',
    caption: 'দুই মা এর দেখা ❤️',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 28,
    src: 'camera/Amarnath Roy_pic_2.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Street Shots',
    photographer: 'Amarnath Roy',
    caption: 'বিদায় বেলায়, আলোক মালায়.... The farewell of the goddess adorned with lights.',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 29,
    src: 'camera/SAYAK KUNDU_pic_1.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Street Shots',
    photographer: 'SAYAK KUNDU',
    caption: 'আলোর শহরে আদিমা',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 30,
    src: 'camera/SAYAK KUNDU_pic_2.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Portraits',
    photographer: 'SAYAK KUNDU',
    caption: 'চারমন্দিরতলার মায়ের মুখশ্রী',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 31,
    src: 'mobile/Sujata bhakta_pic_1.jpg',
    alt: 'Jagadhatri Idol',
    category: 'Street Shots',
    photographer: 'Sujata Bhakta',
    caption: 'মায়ের আলোয় আলোকিত😌✨',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 32,
    src: 'camera/Rajib_pic_2.jpg',
    alt: 'Jagadhatri Idol',
    category: 'portraits',
    photographer: 'Rajib',
    caption: 'স্বর্ণময়ী সোনা মা ',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 33,
    src: 'mobile/Rajib_pic_1.jpg',
    alt: 'Jagadhatri Idol',
    category: 'portraits',
    photographer: 'Rajib',
    caption: '৮০০০ গাছে পুরাণের সাজে ',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 34,
    src: 'mobile/Ishita Santra_pic_1.jpeg',
    alt: 'Tradition',
    category: 'Rituals & Traditions',
    photographer: 'Ishita Santra',
    caption: 'প্রত্যেক নারীতেই তার অধিষ্ঠান',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 35,
    src: 'mobile/Ishita Santra_pic_2.jpeg',
    alt: 'Kali puja',
    category: 'Rituals & Traditions',
    photographer: 'Ishita Santra',
    caption: 'প্রত্যেক নারীতেই তার অধিষ্ঠান',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 36,
    src: 'camera/Ishita Santra_pic_1.JPG',
    alt: 'Jagadhatri Idol',
    category: 'portraits',
    photographer: 'Ishita Santra',
    caption: 'চিন্ময়ী',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 37,
    src: 'camera/Ishita Santra_pic_2.JPG',
    alt: 'tradition',
    category: 'portraits',
    photographer: 'Ishita Santra',
    caption: 'প্রত্যেক নারীতেই তার অধিষ্ঠান',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 38,
    src: 'mobile/Souparno Datta_pic_1.jpg',
    alt: 'tradition',
    category: 'moments & emotions',
    photographer: 'Souparno Datta',
    caption: 'চক্ষুদান পর্ব 😍',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 39,
    src: 'camera/Souparno Datta_pic_1.jpg',
    alt: 'tradition',
    category: 'portraits',
    photographer: 'Souparno Datta',
    caption: 'শিল্পী ও তার শিল্প',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 40,
    src: 'camera/ARPAN_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Arpan Sarkar',
    caption: '২০২৪ এর চন্দননগর ফটকগোড়া সার্বজনীন',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 41,
    src: 'camera/ARPAN_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Arpan Sarkar',
    caption: '২০২৪ এর চন্দননগর গঞ্জ শীতলা তালা সার্বজনীন',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 42,
    src: 'mobile/Prantik Maji_pic_1.jpg',
    alt: 'Kali Idol',
    category: 'tradition',
    photographer: 'Prantik Maji',
    caption: 'Mayer biday',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 43,
    src: 'mobile/Prantik Maji_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'street shots',
    photographer: 'Prantik Maji',
    caption: 'Asche bochor abar hobe',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 44,
    src: 'camera/Tanmoy banerjee_pic_1.jpeg',
    alt: 'Kali idol',
    category: 'portraits',
    photographer: 'Harshit Banerjee',
    caption: ' চক্ষুদান',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 45,
    src: 'mobile/sujata bhakta_pic_2.jpg',
    alt: 'Kartik idol',
    category: 'portraits',
    photographer: 'Sujata Bhakta',
    caption: 'বিশ্বকর্মা পূজা-কারুশিল্পের প্রতি শ্রদ্ধার এক প্রকাশ। Morton dairy 2024',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 46,
    src: 'mobile/Arpan Sarkar_pic_1.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Arpan Sarkar',
    caption: 'faboulous idol of maa durga',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 47,
    src: 'camera/PALLABI DUTTA_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Pallabi Dutta',
    caption: 'তেঁতুলতলা মায়ের বরণের সময়❤️😌🙏',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 48,
    src: 'camera/PALLABI DUTTA_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Pallabi Dutta',
    caption: 'রাণীমায়ের নগর ভ্রমণ❤️😌🙏',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 49,
    src: 'mobile/Arijit koley_pic_1.jpg',
    alt: 'Durga idol',
    category: 'rituals & traditions',
    photographer: 'Arijit Koley',
    caption: 'bisarjan',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 50,
    src: 'camera/Ovideep Chakraborty_pic_1.jpeg',
    alt: 'Kali idol',
    category: 'rituals & traditions',
    photographer: 'Ovideep Chakraborty ',
    caption: 'bisarjan',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 51,
    src: 'camera/Biswajit Das_pic_1.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Biswajit Das',
    caption: 'অভয়া, বরদা',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 52,
    src: 'mobile/Nirmallya Saha_pic_1.jpg',
    alt: 'Monosa idol',
    category: 'portraits',
    photographer: 'Nirmallya Saha',
    caption: 'এতো আনন্দ আয়োজন সবই বৃথা তোমায় ছাড়া',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 53,
    src: 'mobile/Nirmallya Saha_pic_2.jpg',
    alt: 'Jagadhatri idol',
    category: 'portraits',
    photographer: 'Biswajit Das',
    caption: '✨জগৎ ধরণকারী মা জগদ্ধাত্রীর আরাধনা ✨',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 54,
    src: 'camera/Rajib Chakraborty_pic_1.jpg',
    alt: 'Jagadhatri idol',
    category: 'portraits',
    photographer: 'Rajib Chakraborty',
    caption: 'পরমাপ্রকৃতি',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 55,
    src: 'mobile/Rajib Chakraborty _pic_1.jpg',
    alt: 'Jagadhatri idol',
    category: 'portraits',
    photographer: 'Rajib Chakraborty',
    caption: 'বুড়ি মা',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 56,
    src: 'camera/Raunak Ganguly_pic_1.jpg',
    alt: 'Jagadhatri idol',
    category: 'portraits',
    photographer: 'Raunak Ganguly',
    caption: 'একি লাবণ্যে পূর্ণ প্রাণ...',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 57,
    src: 'mobile/Raunak Ganguly_pic_1.jpg',
    alt: 'Sarashwati idol',
    category: 'portraits',
    photographer: 'Raunak Ganguly',
    caption: 'নয়নাভিরাম ওই নয়ন যুগল।',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 58,
    src: 'mobile/Ovideep Chakraborty_pic_1.jpeg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Ovideep Chakraborty',
    caption: 'আনন্দময়ী',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 59,
    src: 'camera/Biswajit Das_pic_2.jpg',
    alt: 'Idol',
    category: 'portraits',
    photographer: 'Biswajit Das',
    caption: 'পরিত্রানায়া সাধুনাং বিনাশয় চ দুষ্কৃতম',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 60,
    src: 'mobile/PALLABI DUTTA_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'portraits',
    photographer: 'Pallabi Dutta',
    caption: 'মায়ের চক্ষুদান ❤️🙏',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 61,
    src: 'mobile/PALLABI DUTTA_pic_2.jpg',
    alt: 'Durga Idol',
    category: 'street shots',
    photographer: 'Pallabi Dutta',
    caption: 'মায়ের বিদায়বেলা ❤️🙏😊',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 62,
    src: 'camera/Harshit Banerjee_pic_2.jpg',
    alt: 'Kali Idol',
    category: 'rituals & traditions',
    photographer: 'Harshit Banerjee',
    caption: 'বহ্নিশিখা..🔥',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 63,
    src: 'camera/Sanchita Arup Ray_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'rituals & traditions',
    photographer: 'Sanchita Arup Ray',
    caption: 'Face behind all power',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 64,
    src: 'camera/Sanchita Arup Ray_pic_2.jpg',
    alt: 'Durga Idol',
    category: 'rituals & traditions',
    photographer: 'Sanchita Arup Ray',
    caption: 'decorated with love',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 65,
    src: 'mobile/Shreya Srimani_pic_1.jpg',
    alt: 'Durga Idol',
    category: 'rituals & traditions',
    photographer: 'Sreya Srimani',
    caption: 'The almighty goddess',
    photoCategory: '  Mobile Captures' as PhotoCategory
  },
  {
    id: 66,
    src: 'mobile/Shreya Srimani_pic_2.jpg',
    alt: 'Durga Idol',
    category: 'portraits',
    photographer: 'Sreya Srimani',
    caption: 'decorated with love',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 67,
    src: 'mobile/Projjal Das_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Projjal Das',
    caption: 'মায়ের মুখশ্রী',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 68,
    src: 'mobile/Projjal Das_pic_2.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Projjal Das',
    caption: 'মায়ের মুখশ্রী',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 69,
    src: 'mobile/Arijit koley_pic_2.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Arijit Koley',
    caption: 'দেবীর চক্ষুদান',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 70,
    src: 'camera/Surajit Ghosh_pic_2.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Surajit Ghosh',
    caption: 'অর্জুনপুর অমরা সবাই Arjunpur Amra Sabai  ক্লাব ২০২৪ দূর্গা পূজা ',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 71,
    src: 'mobile/Subhadip Roy_pic_1.jpg',
    alt: 'Saraswati idol',
    category: 'portraits',
    photographer: 'Subhadip Roy',
    caption: 'বীণা রঞ্জিত পুস্তক হস্তে, ভগবতী ভারতী দেবী নমস্তে',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 72,
    src: 'mobile/Subhadip Roy_pic_2.jpg',
    alt: 'Kali idol',
    category: 'rituals & traditions',
    photographer: 'Subhadip Roy',
    caption: 'আলোর পরশমণি🪔 🌺',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 73,
    src: 'camera/Subarno Talapatra_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Subarno Talapatra',
    caption: 'আলোকধারিনী',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 74,
    src: 'camera/Subarno Talapatra_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Subarno Talapatra',
    caption: 'দুই নয়নে স্নেহের হাসি, ললাটনেত্র আগুনবরণ',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 75,
    src: 'mobile/Sayoni Manna_pic_1.jpg',
    alt: 'durga idol',
    category: 'cultural events',
    photographer: 'Sayoni Manna',
    caption: 'অভয়দায়িনী মা দূর্গা আরতি',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 76,
    src: 'mobile/Sayoni Manna_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'cultural events',
    photographer: 'Sayoni Manna',
    caption: 'জগদ্ধাত্রী পূজা ',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 77,
    src: 'mobile/Arpita Roy_pic_1.jpg',
    alt: 'Durga idol',
    category: 'cultural events',
    photographer: 'Arpita Roy',
    caption: 'Captured the soul of Bengal—one click at a time!',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 78,
    src: 'mobile/Arpita Roy_pic_2.jpg',
    alt: 'Durga idol',
    category: 'rituals & traditions',
    photographer: 'Arpita Roy',
    caption: '"Durga Pujo isn’t just a festival, it’s an emotion in every frame!"',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 79,
    src: 'camera/Ranjabati Das_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Ranjabati Das',
    caption: 'মায়ের মুখশ্রী',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 80,
    src: 'mobile/Swagoto Mondal_pic_1.jpg',
    alt: 'Durga idol',
    category: 'moments & emotions',
    photographer: 'Swagoto Mondal',
    caption: 'আগমনীর সুরে বাঁধে ভলোবাসার গান | দেবীপক্ষের সূচনায় হোক পাপের বিসর্জন।।🙏🏻♥️✨',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 81,
    src: 'mobile/Swagoto Mondal_pic_2.jpg',
    alt: 'Durga idol',
    category: 'moments & emotions',
    photographer: 'Sawgoto Mondal',
    caption: 'মা এলো আজ বছর ঘুরে | বাঁচার নতুন ছন্দ নিয়ে, |আকাশ জুড়ে মেঘের খেলা | উৎসবের এক রঙের ভেলা , | কাশ ফুলের এই মাঠ পেরিয়ে | মা আসছে ,আজ সকালে 🌴',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 82,
    src: 'camera/Ranjabati Das_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Ranjabati Das',
    caption: 'ভদ্রেশ্বর গঞ্জ ',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 83,
    src: 'camera/Argho Roy Choudhury_pic_1.jpg',
    alt: 'kali idol',
    category: 'portraits',
    photographer: 'Argho Roy Choudhury',
    caption: 'মহাকালকামিনী',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 84,
    src: 'camera/Argho Roy Choudhury_pic_2.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer: 'Argho Roy Choudhury',
    caption: 'দুর্গতিনাশিনী ',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 85,
    src: 'mobile/Ayush Ghosh_pic_1.jpeg',
    alt: 'Annapurna idol',
    category: 'portraits',
    photographer: 'Argho Roy Choudhury',
    caption: '🌾 অন্নদা 🌾',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 86,
    src: 'mobile/Ayush Ghosh_pic_2.jpeg',
    alt: 'Kali idol',
    category: 'portraits',
    photographer: 'Ayush Ghosh',
    caption: '✨ কালী করালী ✨',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 87,
    src: 'mobile/ARIJIT Chakraborty_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer: 'Arijit Chakraborty',
    caption: 'মাতৃরূপে সংস্থিতা',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 88,
    src: 'mobile/Arijit Chakraborty_pic_2.jpg',
    alt: 'Shiv Durga idol',
    category: 'portraits',
    photographer:'Arijit Chakraborty',
    caption:'শিব সঙ্গে সদা রঙ্গে আনন্দে মগনা ',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 89,
    src: 'camera/ABONTIKA DAS_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer:'ABONTIKA DAS',
    caption:'mukhshree',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 90,
    src: 'camera/ABONTIKA DAS_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer:'ABONTIKA DAS',
    caption:'তুলির টানে',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 91,
    src: 'mobile/ABONTIKA DAS_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer:'ABONTIKA DAS',
    caption:'Tematha Sarbojonin',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 92,
    src: 'mobile/ABONTIKA DAS_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'street shots',
    photographer:'ABONTIKA DAS',
    caption:'আকাশচুম্বী সিংহ বাহী মা জগদ্ধাত্রী',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 93,
    src: 'camera/Rajib Chakraborty_pic.jpg',
    alt: 'Kali idol',
    category: 'portraits',
    photographer:'Rajib Chakraborty',
    caption:'মা কালীর মুখশ্রী',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 94,
    src: 'camera/Rajeswar Bhattacharjee_pic_1.jpg',
    alt: 'durga idol',
    category: 'street shots',
    photographer:'Rajeswar Bhattacharjee',
    caption:'The Arrival of the Goddess',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 95,
    src: 'camera/Rajeswar Bhattacharjee_pic_2.jpg',
    alt: 'durga idol',
    category: 'portraits',
    photographer:'Rajeswar Bhattacharjee',
    caption:'Frame in frame',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 96,
    src: 'camera/SUBHRO BHATTACHARYA_pic_1.jpg',
    alt: 'idol',
    category: 'rituals & traditions',
    photographer:'Subhro Bhattacharya',
    caption:'Konokanjali',
    photoCategory: 'Camera Captures' as PhotoCategory
  },
  {
    id: 97,
    src: 'mobile/SUBHRO BHATTACHARYA_pic_1.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer:'Subhro Bhattacharya',
    caption:'Matri Rupena',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 98,
    src: 'mobile/Anindita Chatterjee_PIC_1.jpg',
    alt: 'Durga idol',
    category: 'portraits',
    photographer:'Anindita Chatterjee',
    caption:'দুর্গাপূজা ২০২৪',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 99,
    src: 'mobile/Anindita Chatterjee_PIC_2.jpg',
    alt: 'jagadhatri idol',
    category: 'portraits',
    photographer:'Anindita Chatterjee',
    caption:'জগদ্ধাত্রী পূজা ২০২৪',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 100,
    src: 'mobile/Supriyo Das_pic_1.jpg',
    alt: 'Sarashwati idol',
    category: 'portraits',
    photographer:'Supriyo Das',
    caption:'সরস্বতী পুজা 2024',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 101,
    src: 'mobile/Supriyo vlogs_pic_2.jpg',
    alt: 'jagadhatri idol',
    category: 'street shots',
    photographer:'Supriyo Das',
    caption:'জগদ্ধাত্রী পূজা ২০২৪',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 102,
    src: 'mobile/INDRANIL MUKHERJEE_pic_1.jpg',
    alt: 'durga idol',
    category: 'rituals & traditions',
    photographer:'Indranil Mukherjee',
    caption:'DURGA PUJA ASHTAMI ANJALI',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 103,
    src: 'mobile/Soma Das_pic_1.jpg',
    alt: 'durga idol',
    category: 'rituals & traditions',
    photographer:'Soma Das',
    caption:'Bisorjon, 2024',
    photoCategory: 'Mobile Captures' as PhotoCategory
  },
  {
    id: 104,
    src: 'mobile/Soma Das_pic_2.jpg',
    alt: 'Idol Making',
    category: 'idol making',
    photographer:'Soma Das',
    caption:'Agomoni, 2024',
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
