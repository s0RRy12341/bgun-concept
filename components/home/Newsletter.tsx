'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#151515] border-y border-[#333333] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(198,40,40,1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151515] via-transparent to-[#151515]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#C62828] font-semibold text-sm tracking-widest uppercase mb-3">עדכונים ומבצעים</p>
        <h2 className="text-white font-black text-3xl sm:text-4xl mb-3">
          הישאר מעודכן
        </h2>
        <p className="text-[#A0A0A0] text-lg mb-8">
          מבצעים, מוצרים חדשים וטיפים לנשיאה — ישירות לתיבת הדואר שלך.
          ללא ספאם, ניתן לביטול בכל עת.
        </p>

        {submitted ? (
          <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">נרשמת בהצלחה!</h3>
            <p className="text-[#A0A0A0]">תודה! נשמח לעדכן אותך על מבצעים ומוצרים חדשים.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="כתובת האימייל שלך"
                required
                className="flex-1 bg-[#1A1A1A] border border-[#333333] rounded-md px-4 py-3.5 text-white placeholder-[#666666] focus:outline-none focus:border-[#C62828] text-sm"
              />
              <button
                type="submit"
                className="bg-[#C62828] hover:bg-[#D32F2F] text-white px-6 py-3.5 rounded-md font-bold whitespace-nowrap transition-colors"
              >
                הרשמה
              </button>
            </div>
            <p className="text-[#666666] text-xs mt-3">
              הפרטים שלך מאובטחים. ניתן לבטל הרשמה בכל עת.
            </p>
          </form>
        )}

        <div className="flex items-center justify-center gap-8 mt-12">
          {[
            { num: '500+', label: 'מנויים' },
            { num: '2x', label: 'בחודש' },
            { num: '0%', label: 'ספאם' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[#C62828] font-black text-2xl">{item.num}</div>
              <div className="text-[#666666] text-xs mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
