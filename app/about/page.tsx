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
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1A1A1A] border-b border-[#333333] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(198,40,40,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(198,40,40,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-4">מי אנחנו</p>
          <h1 className="text-white font-black text-5xl sm:text-6xl mb-6 leading-tight">
            B-Gun Boutique Holster
          </h1>
          <p className="text-[#A0A0A0] text-xl leading-relaxed max-w-2xl mx-auto">
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
              <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-4">הסיפור שלנו</p>
              <h2 className="text-white font-black text-4xl mb-6">
                מצורך אמיתי לעסק אמיתי
              </h2>
              <div className="space-y-4 text-[#A0A0A0] text-base leading-relaxed">
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
                  className="bg-[#bda775] hover:bg-[#c9b088] text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  לחנות שלנו
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#333333] hover:border-[#555555] text-[#A0A0A0] hover:text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  דבר איתנו
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  value: '500+',
                  label: 'לקוחות מרוצים',
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                },
                {
                  value: '100%',
                  label: 'ייצור בישראל',
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                },
                {
                  value: '30+',
                  label: 'דגמי נשק נתמכים',
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  ),
                },
                {
                  value: '4.9/5',
                  label: 'דירוג ממוצע',
                  icon: (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ),
                },
              ].map((stat, i) => (
                <div key={i} className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3 text-[#bda775]">{stat.icon}</div>
                  <div className="text-[#bda775] font-black text-3xl mb-1">{stat.value}</div>
                  <div className="text-[#A0A0A0] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1A1A1A] border-y border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-3">הפילוסופיה שלנו</p>
            <h2 className="text-white font-black text-4xl">מה מנחה אותנו</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'ייצור מקומי',
                body: 'כל נרתיק מיוצר בישראל, בידיים ישראליות. לא מוצר מיובא שמוכרים כ"מקומי".',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'עבודת יד',
                body: 'לא מכונות — ידיים. כל נרתיק עובד, כוונן ונבדק אישית לפני שיוצא מהסדנה.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                ),
                title: 'התאמה אישית',
                body: 'אין נרתיק "גנרי" כאן. כל מוצר מותאם לנשק, לפנס ולנשיאה שלך ספציפית.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
                title: 'לא מתפשרים',
                body: 'Kydex 0.08", מחברים פרימיום, ציוד חזק. לא מחפשים לחסוך על חשבון האיכות.',
              },
            ].map((v, i) => (
              <div key={i} className="bg-[#111111] border border-[#333333] rounded-xl p-6 hover:border-[#bda775]/40 transition-all">
                <div className="text-[#bda775] mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-3">הדרך שלנו</p>
            <h2 className="text-white font-black text-4xl">הציר הכרונולוגי</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#bda775] rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="flex-1 w-0.5 bg-[#333333] mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-[#bda775] text-sm font-bold mb-1">{item.year}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#1A1A1A] border-t border-[#333333]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-3">האנשים מאחורי המותג</p>
          <h2 className="text-white font-black text-4xl mb-12">הצוות שלנו</h2>

          {team.map((member, i) => (
            <div key={i} className="bg-[#111111] border border-[#333333] rounded-2xl p-10">
              <div className="w-20 h-20 bg-[#bda775] rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-6">
                B
              </div>
              <h3 className="text-white font-black text-2xl mb-1">{member.name}</h3>
              <p className="text-[#bda775] font-semibold text-sm mb-6">{member.role}</p>
              <p className="text-[#A0A0A0] text-base leading-relaxed max-w-xl mx-auto">{member.description}</p>

              <div className="mt-8 pt-6 border-t border-[#333333]">
                <a
                  href="mailto:benny@bgun-holsters.com"
                  className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
                >
                  benny@bgun-holsters.com
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] border-t border-[#333333]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-white font-black text-4xl mb-4">מוכן לנרתיק שלך?</h2>
          <p className="text-[#A0A0A0] text-lg mb-8">
            בנה את הנרתיק המושלם עבורך — מותאם לנשק שלך, לפנס שלך ולאיך שאתה נושא.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-[#bda775] hover:bg-[#c9b088] text-white px-8 py-4 rounded-md font-black text-lg transition-all hover:scale-[1.02]"
          >
            לחנות שלנו
          </Link>
        </div>
      </section>
    </div>
  );
}
