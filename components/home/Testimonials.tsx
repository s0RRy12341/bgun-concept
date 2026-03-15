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
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c8a84a] font-semibold text-sm tracking-widest uppercase mb-3">
            מה אומרים הלקוחות
          </p>
          <h2 className="text-white font-black text-4xl sm:text-5xl mb-4">
            הביקורות מדברות
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={5} size="lg" />
            <span className="text-zinc-400 text-lg font-semibold">4.9/5</span>
            <span className="text-zinc-600 text-sm">(120+ ביקורות)</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating rating={t.rating} size="sm" />

              {/* Quote */}
              <blockquote className="mt-4 mb-5">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Product */}
              <div className="text-[#c8a84a] text-xs font-medium mb-4 pb-4 border-b border-zinc-800">
                🛒 {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
          {[
            { icon: '⭐', label: '4.9/5 דירוג ממוצע' },
            { icon: '👥', label: '500+ לקוחות' },
            { icon: '🔄', label: '98% ממליצים לאחרים' },
            { icon: '🇮🇱', label: 'גאים לייצר בישראל' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-zinc-400">
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
