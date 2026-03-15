import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'מי אנחנו',
  description: 'B-Gun Boutique Holster — ייצור נרתיקי Kydex פרימיום בישראל, בעבודת יד, עם התאמה אישית לכל דגם נשק.',
};

const timeline = [
  {
    year: '2021',
    title: 'ההתחלה',
    description: 'B-Gun Boutique Holster נוסדה מתוך צורך אמיתי — חיפשנו נרתיקים שיתאימו לנשיאה יומיומית בישראל ולא מצאנו מה שצריך. הפתרון: לבנות אחד בעצמנו.',
  },
  {
    year: '2022',
    title: 'הרחבת קטלוג',
    description: 'הוספנו נרתיקי OWB, מחזיקי מחסניות ופלטפורמות SideCar. כל מוצר נבנה מהצרכים הישירים של הלקוחות.',
  },
  {
    year: '2023',
    title: 'גדילה',
    description: 'עברנו את 200 הלקוחות הראשונים. הוספנו תמיכה ב-10+ דגמי פנס ו-20+ דגמי נשק. המוניטין בנוי על המלצות מפה לאוזן.',
  },
  {
    year: '2024',
    title: 'פרמיום עוד יותר',
    description: 'שדרגנו את חומרי הגלם — Kydex 0.08" בלבד, ציוד מחברים DCC ו-Ulticlip. שינוי שהלקוחות מרגישים מיד.',
  },
  {
    year: '2025-26',
    title: 'הווה ועתיד',
    description: 'יותר מ-500 לקוחות מרוצים. ממשיכים לגדול תוך שמירה על אותה פילוסופיה: לא מוצר המוני — כל נרתיק מקבל את תשומת הלב שהוא ראוי לה.',
  },
];

const team = [
  {
    name: 'בני',
    role: 'מייסד ויצרן ראשי',
    description: 'נושא נשק יומיומי כבר מעל 10 שנים. הבין שנרתיק טוב הוא ההבדל בין נשיאה נוחה לנשיאה מעצבנת. כל נרתיק שיוצא מהסדנה — עובר בידיו.',
    emoji: '🇮🇱',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[#f0f0e8] border-b border-[#d4d4cc] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(181,157,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(181,157,90,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-4">מי אנחנו</p>
          <h1 className="text-black font-black text-5xl sm:text-6xl mb-6 leading-tight">
            B-Gun Boutique Holster
          </h1>
          <p className="text-zinc-600 text-xl leading-relaxed max-w-2xl mx-auto">
            נוסדנו מתוך צורך אמיתי — ייצור נרתיקים שאפשר לסמוך עליהם ביום יום,
            ללא פשרות על איכות, נוחות ובטיחות.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-4">הסיפור שלנו</p>
              <h2 className="text-black font-black text-4xl mb-6">
                מצורך אמיתי לעסק אמיתי
              </h2>
              <div className="space-y-4 text-zinc-700 text-base leading-relaxed">
                <p>
                  B-Gun Boutique Holster נוסדה מתוך צורך אמיתי לנרתיקי נשיאה יומיומיים איכותיים —
                  ללא פשרות על איכות, נוחות ובטיחות.
                </p>
                <p>
                  אנחנו מתמחים בנרתיקי Kydex פרימיום המותאמים אישית לדגם כלי הנשק,
                  סוג הפנס וסוג הנשיאה. הכל מיוצר בישראל, ביד, עם חומרי גלם פרימיום
                  ובקרת איכות קפדנית.
                </p>
                <p>
                  קהל היעד שלנו: נושאי נשק יומיומיים, בעלי רישיון נשיאה, אנשי ביטחון,
                  ויורי ספורט — כל מי שמבין שנרתיק טוב הוא לא אביזר, הוא ציוד.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="bg-[#5c6b30] hover:bg-[#6e7f3a] text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  לחנות שלנו
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#c8c8c0] hover:border-zinc-400 text-zinc-700 hover:text-black px-6 py-3 rounded-md font-bold transition-colors"
                >
                  דבר איתנו
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '500+', label: 'לקוחות מרוצים', icon: '👥' },
                { value: '100%', label: 'ייצור בישראל', icon: '🇮🇱' },
                { value: '30+', label: 'דגמי נשק נתמכים', icon: '🔫' },
                { value: '4.9/5', label: 'דירוג ממוצע', icon: '⭐' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#f0f0e8] border border-[#d4d4cc] rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-[#5c6b30] font-black text-3xl mb-1">{stat.value}</div>
                  <div className="text-zinc-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f0f0e8] border-y border-[#d4d4cc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-3">הפילוסופיה שלנו</p>
            <h2 className="text-black font-black text-4xl">מה מנחה אותנו</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🇮🇱', title: 'ייצור מקומי', body: 'כל נרתיק מיוצר בישראל, בידיים ישראליות. לא מוצר מיובא שמוכרים כ"מקומי".' },
              { icon: '🛠', title: 'עבודת יד', body: 'לא מכונות — ידיים. כל נרתיק עובד, כוונן ונבדק אישית לפני שיוצא מהסדנה.' },
              { icon: '🎯', title: 'התאמה אישית', body: 'אין נרתיק "גנרי" כאן. כל מוצר מותאם לנשק, לפנס ולנשיאה שלך ספציפית.' },
              { icon: '💎', title: 'לא מתפשרים', body: 'Kydex 0.08", מחברים פרימיום, ציוד חזק. לא מחפשים לחסוך על חשבון האיכות.' },
            ].map((v, i) => (
              <div key={i} className="bg-white border border-[#d4d4cc] rounded-xl p-6 hover:border-[#5c6b30]/30 transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-black font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-3">הדרך שלנו</p>
            <h2 className="text-black font-black text-4xl">הציר הכרונולוגי</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#5c6b30] rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="flex-1 w-0.5 bg-[#d4d4cc] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-[#5c6b30] text-sm font-bold mb-1">{item.year}</div>
                  <h3 className="text-black font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f0f0e8] border-t border-[#d4d4cc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#5c6b30] font-semibold text-sm tracking-widest uppercase mb-3">האנשים מאחורי המותג</p>
          <h2 className="text-black font-black text-4xl mb-12">הצוות שלנו</h2>

          {team.map((member, i) => (
            <div key={i} className="bg-white border border-[#d4d4cc] rounded-2xl p-10">
              <div className="w-20 h-20 bg-[#e8e8e0] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                {member.emoji}
              </div>
              <h3 className="text-black font-black text-2xl mb-1">{member.name}</h3>
              <p className="text-[#5c6b30] font-semibold text-sm mb-6">{member.role}</p>
              <p className="text-zinc-700 text-base leading-relaxed max-w-xl mx-auto">{member.description}</p>

              <div className="mt-8 pt-6 border-t border-[#d4d4cc]">
                <a
                  href="mailto:benny@bgun-holsters.com"
                  className="text-zinc-600 hover:text-[#5c6b30] text-sm transition-colors"
                >
                  📧 benny@bgun-holsters.com
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f0f0e8] border-t border-[#d4d4cc]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-black font-black text-4xl mb-4">מוכן לנרתיק שלך?</h2>
          <p className="text-zinc-600 text-lg mb-8">
            בנה את הנרתיק המושלם עבורך — מותאם לנשק שלך, לפנס שלך ולאיך שאתה נושא.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-[#5c6b30] hover:bg-[#6e7f3a] text-white px-8 py-4 rounded-md font-black text-lg transition-all hover:scale-[1.02]"
          >
            לחנות שלנו
          </Link>
        </div>
      </section>
    </div>
  );
}
