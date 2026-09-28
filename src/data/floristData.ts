import heroFloralImg from '../assets/images/kanel_hero_floral_1789905547877.jpg';
import arrangementsImg from '../assets/images/kanel_arrangements_1789905563036.jpg';
import craftTableImg from '../assets/images/kanel_craft_table_1789905578164.jpg';
import shopAmbianceImg from '../assets/images/kanel_shop_ambiance_1789905590443.jpg';

export const BUSINESS_DETAILS = {
  name: 'Kanel Florist',
  category: 'Florist',
  address: 'Strehlgasse 2, 8001 Zürich, Switzerland',
  city: 'Zürich',
  postalCode: '8001',
  country: 'Switzerland',
  street: 'Strehlgasse 2',
  phone: 'Not provided',
  rating: 4.7,
  maxRating: 5,
  reviewCount: 62,
  description: 'Flower shop providing bouquets and floral arrangements in Zürich',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kanel+Florist+Strehlgasse+2+8001+Z%C3%BCrich+Switzerland',
} as const;

export const IMAGES = {
  hero: heroFloralImg,
  arrangements: arrangementsImg,
  craft: craftTableImg,
  shop: shopAmbianceImg,
};

export const COLOR_PALETTE = {
  midnightPlum: '#220E24',
  plumLight: '#341838',
  softCoral: '#D9654E',
  coralLight: '#E88673',
  palePeach: '#F8DFD4',
  peachLight: '#FDF3EE',
  warmIvory: '#FAF7F2',
  ivoryBorder: '#EFE8DD',
};

export const FLORAL_DISCIPLINES = [
  {
    title: 'Sculptural Bouquets',
    subtitle: 'Form & Gesture',
    description:
      'Contemporary bouquets composed with deliberate negative space, allowing distinct floral varieties to breathe while highlighting natural curve and posture.',
  },
  {
    title: 'Floral Arrangements',
    subtitle: 'Vessel & Architecture',
    description:
      'Arrangements composed in ceramic, stoneware, and glass vessels, bringing dimensional depth and botanical texture into residential and curated interiors.',
  },
  {
    title: 'Seasonal Palette Curation',
    subtitle: 'Tone & Texture',
    description:
      'Thoughtful color combinations transitioning from deep plum and rich wine to soft coral, warm ivory, and dusty peach tones across the changing seasons.',
  },
  {
    title: 'Stem Selection & Care',
    subtitle: 'Purity & Longevity',
    description:
      'Every bloom is inspected for fresh vigor and conditioned to thrive, ensuring arrangements remain expressive and vibrant in everyday environments.',
  },
];

export const EVERYDAY_OCCASIONS = [
  {
    moment: 'Interior Sanctuaries',
    reflection:
      'Introducing living botanical architecture into quiet living rooms, entry consoles, and personal workspaces to ground everyday routines.',
  },
  {
    moment: 'Shared Gatherings',
    reflection:
      'Sculptural centerpieces and delicate table arrangements that accompany memorable dinners, conversations, and celebratory gatherings with friends and family.',
  },
  {
    moment: 'Personal Gestures',
    reflection:
      'Presenting a hand-tied bouquet to convey gratitude, sympathy, affection, or encouragement without needing ornate explanations.',
  },
  {
    moment: 'Quiet Rituals',
    reflection:
      'The simple pleasure of selecting fresh seasonal flowers on a morning walk through Zürich Old Town to replenish your home for the coming week.',
  },
];
