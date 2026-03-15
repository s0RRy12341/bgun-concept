const values = [
  {
    icon: '🇮🇱',
    title: 'ייצור בישראל',
    subtitle: 'Made In Israel',
    description:
      'כל נרתיק מיוצר בישראל, ידנית, עם בקרת איכות קפדנית. לא ייצור המוני — כל מוצר מקבל תשומת לב מלאה.',
    detail: '100% ייצור מקומי',
  },
  {
    icon: '🛠',
    title: 'עבודת יד + התאמה אמיתית',
    subtitle: 'Handmade & Custom Fit',
    description:
      'כל נרתיק נבנה בהתאמה מלאה לדגם כלי הנשק, סוג הפנס וסוג הנשיאה שלך — לא מוצר גנרי "one-size-fits-all".',
    detail: '30+ דגמי נשק',
  },
  {
    icon: '🧱',
    title: 'חומרי גלם פרימיום',
    subtitle: 'Premium Materials',
    description:
      'Kydex 0.08" איכותי, ציוד מחברים חזק ועמיד (DCC, Ulticlip, Tek-Lok), חומרה שנבנית להחזיק לשנים.',
    detail: 'אחריות שנה',
  },
  {
    icon: '🎯',
    title: 'נבנה לנשיאה אמיתית',
    subtitle: 'Built for Real Carry',
    description:
      'שמירה מדויקת, שליפה חלקה, נוחות לשעות של נשיאה — לנושאי נשק יומיומיים, כוחות ביטחון וירי ספורטיבי.',
    detail: 'שליפה תוך שניה',
  },
];

export default function BrandValues() {
  return (
    <section className="py-24 bg-white border-y border-[#d4d4cc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-3">
            למה B-Gun?
          </p>
          <h2 className="text-black font-black text-4xl sm:text-5xl mb-4">
            ארבעת העקרונות שלנו
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            לא מוצרים — ערכים. כל נרתיק שאנחנו מייצרים עומד בארבעת העקרונות האלה ללא פשרות.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <div
              key={index}
              className="group relative bg-[#f0f0e8] border border-[#d4d4cc] rounded-xl p-6 hover:border-[#5c6b30]/50 transition-all duration-300 hover:bg-[#f3f0e8]"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#5c6b30] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="text-4xl mb-4">{val.icon}</div>

              {/* Content */}
              <h3 className="text-black font-bold text-lg leading-snug mb-1">{val.title}</h3>
              <p className="text-zinc-400 text-xs font-medium mb-3 tracking-wider">{val.subtitle}</p>
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">{val.description}</p>

              {/* Detail badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#5c6b30]/10 border border-[#5c6b30]/25 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 bg-[#5c6b30] rounded-full" />
                <span className="text-[#5c6b30] text-xs font-semibold">{val.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#5c6b30] font-medium transition-colors"
          >
            <span>קרא עוד על B-Gun Boutique Holster</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
