'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const subjects = [
    'שאלה על מוצר',
    'הזמנה מותאמת אישית',
    'מצב הזמנה',
    'החזרה / החלפה',
    'שיתוף פעולה',
    'אחר',
  ];

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Hero */}
      <div className="bg-[#1A1A1A] border-b border-[#333333] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#bda775] font-semibold text-sm tracking-widest uppercase mb-3">
            יצירת קשר
          </p>
          <h1 className="text-white font-black text-5xl mb-4">דבר איתנו</h1>
          <p className="text-[#A0A0A0] text-xl">
            שאלה על מוצר? רוצה הזמנה מותאמת אישית? אנחנו כאן.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-white font-bold text-2xl mb-6">פרטי יצירת קשר</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: 'אימייל',
                    value: 'benny@bgun-holsters.com',
                    href: 'mailto:benny@bgun-holsters.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
                      </svg>
                    ),
                    label: 'אתר',
                    value: 'bgun-holsters.com',
                    href: 'https://www.bgun-holsters.com',
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 group"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 bg-[#1A1A1A] border border-[#333333] rounded-xl flex items-center justify-center text-[#A0A0A0] group-hover:border-[#bda775]/40 group-hover:text-[#bda775] transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#666666] text-xs">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-[#bda775] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">עקבו אחרינו</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] hover:border-[#bda775]/40 rounded-xl px-4 py-3 text-[#A0A0A0] hover:text-white transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>פייסבוק</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] hover:border-[#bda775]/40 rounded-xl px-4 py-3 text-[#A0A0A0] hover:text-white transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                  <span>אינסטגרם</span>
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="text-[#bda775] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">זמן תגובה</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    אנחנו מגיבים לרוב הפניות תוך 24 שעות בימי עסקים.
                    לפניות דחופות — ניתן לפנות ישירות לאימייל.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#bda775]/10 border border-[#bda775]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#bda775]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-white font-black text-3xl mb-3">ההודעה נשלחה!</h2>
                <p className="text-[#A0A0A0] text-lg mb-8">
                  תודה שפנית אלינו. ניצור קשר בהקדם האפשרי.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                  className="bg-[#bda775] hover:bg-[#c9b088] text-white px-8 py-3 rounded-md font-bold transition-colors"
                >
                  שלח הודעה נוספת
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-8 space-y-5"
              >
                <h2 className="text-white font-bold text-2xl mb-6">שלח הודעה</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#A0A0A0] text-sm font-medium mb-2">שם מלא *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="ישראל ישראלי"
                      className="w-full bg-[#111111] border border-[#333333] rounded-md px-4 py-3 text-white placeholder-[#666666] focus:outline-none focus:border-[#bda775] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[#A0A0A0] text-sm font-medium mb-2">טלפון</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="050-0000000"
                      className="w-full bg-[#111111] border border-[#333333] rounded-md px-4 py-3 text-white placeholder-[#666666] focus:outline-none focus:border-[#bda775] text-sm"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#A0A0A0] text-sm font-medium mb-2">אימייל *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-[#111111] border border-[#333333] rounded-md px-4 py-3 text-white placeholder-[#666666] focus:outline-none focus:border-[#bda775] text-sm"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-[#A0A0A0] text-sm font-medium mb-2">נושא</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full bg-[#111111] border border-[#333333] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#bda775] text-sm"
                  >
                    <option value="">בחר נושא</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#A0A0A0] text-sm font-medium mb-2">הודעה *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={5}
                    placeholder="ספר לנו על עצמך ועל מה שאתה מחפש..."
                    className="w-full bg-[#111111] border border-[#333333] rounded-md px-4 py-3 text-white placeholder-[#666666] focus:outline-none focus:border-[#bda775] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#bda775] hover:bg-[#c9b088] text-white py-4 rounded-md font-black text-base transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? 'שולח...' : 'שלח הודעה'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 bg-[#1A1A1A] border border-[#333333] rounded-xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 text-center">שאלות נפוצות</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { q: 'כמה זמן לוקח ייצור הנרתיק?', a: '7-14 ימי עסקים מרגע אישור ההזמנה.' },
              { q: 'האם אפשר לבקש דגם שלא ברשימה?', a: 'בהחלט! פנה אלינו ישירות ונבדוק התאמה.' },
              { q: 'מה ההבדל בין DCC ל-Ulticlip?', a: 'שניהם מחברים איכותיים — Ulticlip מאפשר שמירה ללא חגורה.' },
              { q: 'האם יש אחריות?', a: 'כן — אחריות שנה על כל פגם ייצור.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#333333] rounded-lg p-4">
                <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                <p className="text-[#A0A0A0] text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
