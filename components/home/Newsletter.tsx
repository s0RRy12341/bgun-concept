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
    <section className="py-20 bg-[#141414] border-y border-zinc-800 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(200,168,74,1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent to-[#141414]" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-white font-black text-3xl sm:text-4xl mb-3">
          הישאר מעודכן
        </h2>
        <p className="text-zinc-400 text-lg mb-8">
          מבצעים, מוצרים חדשים וטיפים לנשיאה — ישירות לתיבת הדואר שלך.
          ללא ספאם, ניתן לביטול בכל עת.
        </p>

        {submitted ? (
          <div className="bg-green-900/30 border border-green-700/50 rounded-xl p-8">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-green-400 font-bold text-xl mb-2">נרשמת בהצלחה!</h3>
            <p className="text-zinc-400">תודה! נשמח לעדכן אותך על מבצעים ומוצרים חדשים.</p>
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
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#c8a84a] text-sm"
              />
              <button
                type="submit"
                className="bg-[#c8a84a] hover:bg-[#d4b86a] text-black px-6 py-3.5 rounded-md font-bold whitespace-nowrap transition-colors"
              >
                הרשמה
              </button>
            </div>
            <p className="text-zinc-600 text-xs mt-3">
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
              <div className="text-[#c8a84a] font-black text-2xl">{item.num}</div>
              <div className="text-zinc-500 text-xs mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
