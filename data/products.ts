export interface ProductVariant {
  name: string;
  options: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  tags: string[];
  images: string[];
  description: string;
  shortDescription: string;
  specifications: ProductSpec[];
  variants: ProductVariant[];
  featured: boolean;
  isNew: boolean;
  isSale: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export const gunModels = [
  'גלוק 17', 'גלוק 19', 'גלוק 19X', 'גלוק 26', 'גלוק 34', 'גלוק 43', 'גלוק 45',
  'CZ Shadow 2', 'CZ P-10C', 'CZ P-10F',
  'Sig Sauer P226', 'Sig Sauer P320', 'Sig Sauer P365',
  'Beretta 92FS', 'Smith & Wesson M&P 9', 'Smith & Wesson M&P Shield',
  'Walther PDP', 'Walther PPQ',
  'IWI Masada', 'SP-21 Barak', 'Canik TP9', 'Canik TP9 SF',
  'HK VP9', 'HK USP',
];

export const flashlightOptions = [
  'ללא פנס',
  'Streamlight TLR-1',
  'Streamlight TLR-1 HL',
  'Streamlight TLR-7',
  'Streamlight TLR-7A',
  'SureFire X300U-A',
  'SureFire X300U-B',
  'SureFire X300V',
  'Olight PL-Pro',
  'Olight PL-Mini 2',
];

export const carryTypes = [
  'אפנדיקס IWB (שעה 12)',
  'Strong Side IWB (שעה 3-4)',
  'Cross Draw IWB',
  'OWB חיצוני',
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'appendix-carry',
    name: 'נרתיק אפנדיקס',
    nameEn: 'Appendix Carry',
    price: 319,
    category: 'appendix',
    tags: ['appendix', 'iwb', 'kydex', 'everyday-carry'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/6.png?v=1771059722'],
    description: `נרתיק אפנדיקס Kydex פרימיום, מיוצר בישראל בעבודת יד. מתאים לנשיאה יומיומית ומספק שליפה חלקה ומהירה. כל נרתיק מותאם אישית לדגם כלי הנשק שלך עם שמירת נשק מדויקת.

הנרתיק עשוי מ-Kydex 0.08" איכותי עם ציוד מחברים פרימיום. עיצוב שמבטיח נוחות מירבית לנשיאה יומיומית ממושכת, עם שמירה מתכווננת לפי העדפתך האישית.

כל נרתיק עובר בקרת איכות קפדנית לפני המשלוח.`,
    shortDescription: 'נרתיק Kydex לנשיאה אפנדיקס, עשוי בישראל בעבודת יד',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'DCC Clip / Ulticlip (לבחירה)' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'עובי', value: '1.5mm' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
      { label: 'משקל', value: 'כ-80 גרם' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
      { name: 'סוג נשיאה', options: carryTypes.slice(0, 3) },
    ],
    featured: true,
    isNew: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 47,
    inStock: true,
  },
  {
    id: '2',
    slug: 'appendix-carry-flashlight',
    name: 'נרתיק אפנדיקס עם פנס',
    nameEn: 'Appendix Carry Flashlight',
    price: 339,
    category: 'appendix',
    tags: ['appendix', 'iwb', 'kydex', 'flashlight', 'everyday-carry'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/13_c9f2263a-7d91-4506-bfac-61837352e730.png?v=1771059739'],
    description: `נרתיק אפנדיקס Kydex פרימיום עם תאימות לפנס טקטי. מיוצר בישראל בעבודת יד עם התאמה אישית מלאה לדגם כלי הנשק ודגם הפנס.

מבטיח שמירה מדויקת של כלי הנשק עם הפנס המותקן, תוך שמירה על שליפה חלקה ומהירה. מתאים לכל פנסי ה-Rail המובילים בשוק.`,
    shortDescription: 'נרתיק Kydex אפנדיקס עם תאימות לפנס טקטי',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'DCC Clip / Ulticlip' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'תאימות פנס', value: 'TLR-1/7, X300, PL-Pro ועוד' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions.slice(1) },
    ],
    featured: true,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
  },
  {
    id: '3',
    slug: 'appendix-sidecar-holster',
    name: 'נרתיק SideCar אפנדיקס',
    nameEn: 'Appendix SideCar Holster',
    price: 445,
    category: 'appendix',
    tags: ['appendix', 'sidecar', 'iwb', 'kydex', 'mag-carrier'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/Gemini_Generated_Image_82ymna82ymna82ym.png?v=1771059700'],
    description: `נרתיק SideCar — השילוב המושלם של נרתיק אפנדיקס ומחזיק מחסנית בפלטפורמה אחת. עשוי Kydex פרימיום בישראל.

מאפשר נשיאה נוחה ומאורגנת עם גישה מהירה לנשק ולמחסנית חילוף. מאזן את משקל הנשיאה לנוחות מרבית לאורך היום.`,
    shortDescription: 'נרתיק אפנדיקס ומחזיק מחסנית משולב — SideCar',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'DCC Clip / Ulticlip' },
      { label: 'כולל', value: 'נרתיק + מחזיק מחסנית' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
    ],
    featured: true,
    isNew: true,
    isSale: false,
    rating: 5.0,
    reviewCount: 18,
    inStock: true,
  },
  {
    id: '4',
    slug: 'bpx-sidecar-holster',
    name: 'נרתיק BPX SideCar',
    nameEn: 'BPX SideCar Holster',
    price: 510,
    category: 'appendix',
    tags: ['appendix', 'sidecar', 'bpx', 'iwb', 'kydex'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/WhatsAppImage2026-01-23at14.14.44_1.jpg?v=1772204691'],
    description: `נרתיק BPX SideCar — גרסה מתקדמת של מערכת ה-SideCar עם פלטפורמה משופרת לנשיאת נשק ומחסנית יחד. עשוי Kydex פרימיום בישראל בעבודת יד.

מתוכנן לנשיאה אפנדיקס עם זווית שליפה מיטבית ואיזון משקל מושלם. פתרון הנשיאה האולטימטיבי לנשאי יומי.`,
    shortDescription: 'מערכת BPX SideCar משולבת — נרתיק + מחסנית',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'DCC Clip / Ulticlip' },
      { label: 'כולל', value: 'נרתיק + מחזיק מחסנית' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
    ],
    featured: true,
    isNew: true,
    isSale: false,
    rating: 4.9,
    reviewCount: 12,
    inStock: true,
  },
  {
    id: '5',
    slug: 'hybrid-flex',
    name: 'נרתיק HYBRID FLEX',
    nameEn: 'HYBRID FLEX',
    price: 349,
    category: 'appendix',
    tags: ['appendix', 'hybrid', 'flex', 'iwb', 'kydex'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/sig_365_xmacro_baldar_haybrid_flex.png?v=1771608744'],
    description: `נרתיק HYBRID FLEX — שילוב ייחודי של Kydex קשיח ואחורית גמישה מעור/קנבס לנוחות נשיאה מרבית. עשוי בישראל בעבודת יד.

מעניק את הנוחות של נרתיק היברידי עם הדיוק של Kydex. מתאים במיוחד לנשיאה יומיומית ממושכת.`,
    shortDescription: 'נרתיק היברידי Kydex + אחורית גמישה לנוחות מרבית',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08" + אחורית גמישה' },
      { label: 'מחברים', value: 'Belt Loops / DCC Clip' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
    ],
    featured: false,
    isNew: false,
    isSale: false,
    rating: 4.7,
    reviewCount: 22,
    inStock: true,
  },
  {
    id: '6',
    slug: 'owb-flashlight-holster',
    name: 'נרתיק OWB עם פנס',
    nameEn: 'OWB FlashLight Holster',
    price: 329,
    category: 'owb',
    tags: ['owb', 'outside-waistband', 'kydex', 'flashlight'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/Gemini_Generated_Image_yy92qmyy92qmyy92_20bd97df-07dc-42a6-bc8f-2097ec9b19e1.png?v=1772204701'],
    description: `נרתיק OWB (Outside Waistband) עם תאימות לפנס טקטי. עשוי Kydex פרימיום בישראל. מתאים לאימונים, טווח ירי ונשיאה חיצונית.

מציע גישה מהירה לנשק עם הפנס המותקן. שמירה מתכווננת לביצועים אופטימליים. מתאים לשוטרים, אנשי ביטחון וירי ספורטיבי.`,
    shortDescription: 'נרתיק Kydex לנשיאה חיצונית (OWB) עם פנס טקטי',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'Blade-Tech Tek-Lok' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'תאימות פנס', value: 'TLR-1/7, X300, PL-Pro ועוד' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions.slice(1) },
    ],
    featured: true,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
  },
  {
    id: '7',
    slug: 'bgun-magazine-pouches',
    name: 'מחזיקי מחסניות B-GUN',
    nameEn: 'B-GUN Magazine Pouches',
    price: 99,
    category: 'magazine',
    tags: ['magazine', 'kydex', 'mag-carrier', 'pouch'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/Gemini_Generated_Image_yth2u6yth2u6yth2_b0290c65-60ba-451d-8ced-dc2c16d383ba.png?v=1771450529'],
    description: `מחזיקי מחסניות Kydex פרימיום של B-GUN. עשויים בישראל בעבודת יד עם התאמה אישית לדגם כלי הנשק.

מספקים שמירה מדויקת של המחסנית עם שחרור נוח. עיצוב דק ומינימליסטי לנוחות נשיאה מרבית.`,
    shortDescription: 'מחזיקי מחסניות Kydex של B-GUN — עשוי בישראל',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'קיבולת', value: 'מחסנית יחידה' },
      { label: 'מחברים', value: 'Belt Clip' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
    ],
    featured: false,
    isNew: false,
    isSale: false,
    rating: 4.6,
    reviewCount: 19,
    inStock: true,
  },
  {
    id: '8',
    slug: 'appendix-kydex-mag-carrier',
    name: 'מחזיק מחסנית Kydex אפנדיקס',
    nameEn: 'Appendix Kydex Mag Carrier',
    price: 139,
    category: 'magazine',
    tags: ['magazine', 'kydex', 'appendix', 'mag-carrier'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/Gemini_Generated_Image_wmu8nwmu8nwmu8nw.png?v=1771450535'],
    description: `מחזיק מחסנית Kydex פרימיום לנשיאה אפנדיקס. מתאים לנשיאה כפולה עם נרתיק האפנדיקס. עשוי בישראל בעבודת יד עם התאמה אישית לדגם כלי הנשק.

מספק שמירה מדויקת של המחסנית עם שחרור נוח וחד-פעמי. עיצוב דק ומינימליסטי לנוחות נשיאה מרבית.`,
    shortDescription: 'מחזיק מחסנית Kydex לנשיאה אפנדיקס',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'קיבולת', value: 'מחסנית יחידה' },
      { label: 'מחברים', value: 'DCC Clip' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
    ],
    featured: false,
    isNew: false,
    isSale: false,
    rating: 4.7,
    reviewCount: 23,
    inStock: true,
  },
  {
    id: '9',
    slug: 'leo-double-mag-carrier',
    name: 'מחזיק מחסניות כפול LEO',
    nameEn: 'LEO Style Double Mag Carrier',
    price: 259,
    category: 'magazine',
    tags: ['magazine', 'kydex', 'double', 'leo', 'duty'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/Gemini_Generated_Image_5uysk75uysk75uys.png?v=1772204707'],
    description: `מחזיק מחסניות כפול בסגנון LEO — מיועד לאנשי ביטחון ואכיפת חוק. עשוי Kydex פרימיום בישראל בעבודת יד.

מאפשר נשיאת שתי מחסניות בנגישות מלאה. עיצוב חזק ועמיד לשימוש אינטנסיבי בשטח.`,
    shortDescription: 'מחזיק מחסניות כפול בסגנון LEO לאנשי ביטחון',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'קיבולת', value: '2 מחסניות' },
      { label: 'מחברים', value: 'Duty Belt Mount' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
    ],
    featured: false,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 11,
    inStock: true,
  },
  {
    id: '10',
    slug: 'owb-double-mag-slim',
    name: 'מחזיק מחסניות כפול OWB סלים',
    nameEn: 'OWB Double Mag Slim Profile',
    price: 239,
    category: 'magazine',
    tags: ['magazine', 'kydex', 'double', 'owb', 'slim'],
    images: ['https://cdn.shopify.com/s/files/1/0977/1011/3133/files/17_c47241c2-01e6-4699-99f6-fb355529b011.png?v=1771450536'],
    description: `מחזיק מחסניות כפול OWB בפרופיל סלים — נשיאה חיצונית עם שתי מחסניות בעיצוב דק ונוח. עשוי Kydex פרימיום בישראל.

מאפשר גישה מהירה לשתי מחסניות חילוף בפרופיל מינימלי. מתאים לטווח ירי ולנשיאה ספורטיבית.`,
    shortDescription: 'מחזיק מחסניות כפול OWB בפרופיל סלים',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'קיבולת', value: '2 מחסניות' },
      { label: 'מחברים', value: 'Blade-Tech Tek-Lok' },
      { label: 'פרופיל', value: 'סלים' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
    ],
    featured: false,
    isNew: false,
    isSale: false,
    rating: 4.6,
    reviewCount: 8,
    inStock: true,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured);

export const getProductsByCategory = (category: string) =>
  category === 'all' ? products : products.filter((p) => p.category === category);

export const categories = [
  { id: 'all', name: 'כל המוצרים' },
  { id: 'appendix', name: 'אפנדיקס IWB' },
  { id: 'owb', name: 'OWB חיצוני' },
  { id: 'magazine', name: 'מחזיקי מחסניות' },
];
