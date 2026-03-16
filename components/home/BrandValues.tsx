const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'ייצור בישראל',
    subtitle: 'Made In Israel',
    description:
      'כל נרתיק מיוצר בישראל, ידנית, עם בקרת איכות קפדנית. לא ייצור המוני — כל מוצר מקבל תשומת לב מלאה.',
    detail: '100% ייצור מקומי',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'עבודת יד + התאמה אמיתית',
    subtitle: 'Handmade & Custom Fit',
    description:
      'כל נרתיק נבנה בהתאמה מלאה לדגם כלי הנשק, סוג הפנס וסוג הנשיאה שלך — לא מוצר גנרי "one-size-fits-all".',
    detail: '30+ דגמי נשק',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'חומרי גלם פרימיום',
    subtitle: 'Premium Materials',
    description:
      'Kydex 0.08" איכותי, ציוד מחברים חזק ועמיד (DCC, Ulticlip, Tek-Lok), חומרה שנבנית להחזיק לשנים.',
    detail: 'אחריות שנה',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    ),
    title: 'נבנה לנשיאה אמיתית',
    subtitle: 'Built for Real Carry',
    description:
      'שמירה מדויקת, שליפה חלקה, נוחות לשעות של נשיאה — לנושאי נשק יומיומיים, כוחות ביטחון וירי ספורטיבי.',
    detail: 'שליפה תוך שניה',
  },
];

export default function BrandValues() {
  return (
    <section className="py-24 bg-[#1A1A1A] border-y border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#C62828] font-semibold text-sm tracking-widest uppercase mb-3">
            למה B-Gun?
          </p>
          <h2 className="text-white font-black text-4xl sm:text-5xl mb-4">
            ארבעת העקרונות שלנו
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            לא מוצרים — ערכים. כל נרתיק שאנחנו מייצרים עומד בארבעת העקרונות האלה ללא פשרות.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <div
              key={index}
              className="group relative bg-[#111111] border border-[#333333] rounded-xl p-6 hover:border-[#C62828]/50 transition-all duration-300 hover:bg-[#151515]"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#C62828] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="text-[#C62828] mb-4">{val.icon}</div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg leading-snug mb-1">{val.title}</h3>
              <p className="text-[#666666] text-xs font-medium mb-3 tracking-wider">{val.subtitle}</p>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5">{val.description}</p>

              {/* Detail badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#C62828]/10 border border-[#C62828]/25 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 bg-[#C62828] rounded-full" />
                <span className="text-[#C62828] text-xs font-semibold">{val.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white font-medium transition-colors"
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
