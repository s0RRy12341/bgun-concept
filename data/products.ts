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
    images: ['/products/appendix-1.jpg', '/products/appendix-2.jpg', '/products/appendix-3.jpg'],
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
    images: ['/products/appendix-fl-1.jpg', '/products/appendix-fl-2.jpg'],
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
    slug: 'appendix-kydex-mag-carrier',
    name: 'מחזיק מחסנית Kydex אפנדיקס',
    nameEn: 'Appendix Kydex Mag Carrier',
    price: 139,
    category: 'magazine',
    tags: ['magazine', 'kydex', 'appendix', 'mag-carrier'],
    images: ['/products/mag-1.jpg', '/products/mag-2.jpg'],
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
    id: '4',
    slug: 'appendix-sidecar-holster',
    name: 'נרתיק SideCar אפנדיקס',
    nameEn: 'Appendix SideCar Holster',
    price: 445,
    category: 'appendix',
    tags: ['appendix', 'sidecar', 'iwb', 'kydex', 'mag-carrier'],
    images: ['/products/sidecar-1.jpg', '/products/sidecar-2.jpg'],
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
    id: '5',
    slug: 'owb-holster',
    name: 'נרתיק OWB',
    nameEn: 'B-Gun OWB Holster',
    price: 289,
    category: 'owb',
    tags: ['owb', 'outside-waistband', 'kydex', 'range'],
    images: ['/products/owb-1.jpg', '/products/owb-2.jpg'],
    description: `נרתיק OWB (Outside Waistband) Kydex פרימיום לנשיאה חיצונית. מתאים לאימונים, טווח ירי ונשיאה חיצונית. עשוי בישראל עם חומרים פרימיום.

מציע גישה מהירה לנשק עם שמירה מתכווננת. מתאים לשוטרים, אנשי ביטחון וירי ספורטיבי.`,
    shortDescription: 'נרתיק Kydex לנשיאה חיצונית (OWB)',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'מחברים', value: 'Blade-Tech Tek-Lok' },
      { label: 'שמירה', value: 'מתכווננת' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
    ],
    featured: true,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
  },
  {
    id: '6',
    slug: 'owb-duty-holster',
    name: 'נרתיק OWB דיוטי',
    nameEn: 'OWB Duty Holster',
    price: 349,
    compareAtPrice: 399,
    category: 'owb',
    tags: ['owb', 'duty', 'kydex', 'security'],
    images: ['/products/owb-duty-1.jpg', '/products/owb-duty-2.jpg'],
    description: `נרתיק OWB דיוטי Kydex פרימיום לאנשי ביטחון ואכיפת חוק. מציע שמירה ברמה 2, שחרור מהיר, ועמידות מרבית. עשוי בישראל.`,
    shortDescription: 'נרתיק דיוטי Kydex לאנשי ביטחון',
    specifications: [
      { label: 'חומר', value: 'Kydex 0.08"' },
      { label: 'רמת שמירה', value: '2' },
      { label: 'מחברים', value: 'Safariland Style' },
      { label: 'ייצור', value: 'ישראל' },
      { label: 'אחריות', value: 'שנה' },
    ],
    variants: [
      { name: 'דגם כלי נשק', options: gunModels },
      { name: 'פנס', options: flashlightOptions },
    ],
    featured: false,
    isNew: false,
    isSale: true,
    rating: 4.6,
    reviewCount: 14,
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
