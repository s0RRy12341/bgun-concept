import StarRating from '@/components/ui/StarRating';

const testimonials = [
  {
    name: 'אמיר כ.',
    role: 'נושא נשק יומיומי',
    rating: 5,
    text: 'קניתי נרתיק אפנדיקס לגלוק 19 שלי. האיכות מדהימה — ב-Kydex שעשו בחו"ל שלי לא האמנתי שאפשר לקבל כזה כיסוי ישראלי. השליפה חלקה, הנשיאה נוחה, ועדיין בטוח לחלוטין. ממליץ בחום!',
    product: 'נרתיק אפנדיקס — גלוק 19',
  },
  {
    name: 'יונתן מ.',
    role: 'אנשי ביטחון',
    rating: 5,
    text: 'בדיוטי השתמשתי בנרתיקים יקרים מחו"ל. מאז שקניתי ב-B-Gun לא חזרתי. המחיר סביר לאיכות שמקבלים, ובני שמבצע את העבודה בודק כל אחד בעצמו. שירות אישי, מענה מהיר, מוצר מושלם.',
    product: 'נרתיק OWB דיוטי',
  },
  {
    name: 'רוני ש.',
    role: 'ירי ספורטיבי',
    rating: 5,
    text: 'לתחרויות IPSC אני צריך נרתיק שעובד בדיוק אותו דבר בכל שליפה. ה-OWB של B-Gun נותן בדיוק את זה. חישבתי כמה שנים על זה, ועכשיו לא אחליף שוב.',
    product: 'נרתיק OWB — CZ Shadow 2',
  },
  {
    name: 'ליאור א.',
    role: 'נושא רישיון',
    rating: 5,
    text: 'פניתי לבני עם דגם שהוא לא רגיל — IWI Masada עם TLR-7. תוך ימים קיבלתי נרתיק שמתאים כמו כפפה. זה בדיוק מה שאני מצפה ממוצר ישראלי — התאמה אמיתית, לא פתרון כללי.',
    product: 'נרתיק אפנדיקס עם פנס — IWI Masada',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-3">
            מה אומרים הלקוחות
          </p>
          <h2 className="text-white font-black text-4xl sm:text-5xl mb-4">
            הביקורות מדברות
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={5} size="lg" />
            <span className="text-[#A0A0A0] text-lg font-semibold">4.9/5</span>
            <span className="text-[#666666] text-sm">(120+ ביקורות)</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 hover:border-[#bda775]/40 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating rating={t.rating} size="sm" />

              {/* Quote */}
              <blockquote className="mt-4 mb-5">
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Product */}
              <div className="text-[#bda775] text-xs font-medium mb-4 pb-4 border-b border-[#333333]">
                {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#333333] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#666666] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ),
              label: '4.9/5 דירוג ממוצע',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              ),
              label: '500+ לקוחות',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              label: '98% ממליצים לאחרים',
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              ),
              label: 'גאים לייצר בישראל',
            },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-[#A0A0A0]">
              <span className="text-[#bda775]">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
