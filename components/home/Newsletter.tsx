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
    <section className="py-20 bg-[#f7f5ee] border-y border-[#e0d9c8] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(181,157,90,1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5ee] via-transparent to-[#f7f5ee]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-black font-black text-3xl sm:text-4xl mb-3">
          הישאר מעודכן
        </h2>
        <p className="text-zinc-600 text-lg mb-8">
          מבצעים, מוצרים חדשים וטיפים לנשיאה — ישירות לתיבת הדואר שלך.
          ללא ספאם, ניתן לביטול בכל עת.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-green-700 font-bold text-xl mb-2">נרשמת בהצלחה!</h3>
            <p className="text-zinc-600">תודה! נשמח לעדכן אותך על מבצעים ומוצרים חדשים.</p>
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
                className="flex-1 bg-white border border-[#e0d9c8] rounded-md px-4 py-3.5 text-black placeholder-zinc-400 focus:outline-none focus:border-[#b59d5a] text-sm"
              />
              <button
                type="submit"
                className="bg-[#b59d5a] hover:bg-[#c4ad6a] text-black px-6 py-3.5 rounded-md font-bold whitespace-nowrap transition-colors"
              >
                הרשמה
              </button>
            </div>
            <p className="text-zinc-400 text-xs mt-3">
              🔒 הפרטים שלך מאובטחים. ניתן לבטל הרשמה בכל עת.
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
              <div className="text-[#b59d5a] font-black text-2xl">{item.num}</div>
              <div className="text-zinc-500 text-xs mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
