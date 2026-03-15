import Link from 'next/link';

const quickLinks = [
  { href: '/collections', label: 'חנות' },
  { href: '/collections?category=appendix', label: 'נרתיקי אפנדיקס' },
  { href: '/collections?category=owb', label: 'נרתיקי OWB' },
  { href: '/collections?category=magazine', label: 'מחזיקי מחסניות' },
  { href: '/about', label: 'מי אנחנו' },
  { href: '/blog', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' },
];

const infoLinks = [
  { href: '/shipping', label: 'משלוחים ומדיניות החזרה' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/privacy', label: 'מדיניות פרטיות' },
  { href: '/terms', label: 'תנאי שימוש' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c8a84a] rounded flex items-center justify-center font-black text-black text-lg">
                B
              </div>
              <div>
                <div className="text-white font-black text-base">B-GUN</div>
                <div className="text-[#c8a84a] text-[10px] font-semibold tracking-widest uppercase">
                  Boutique Holster
                </div>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              נרתיקי Kydex פרימיום, מיוצרים בישראל בעבודת יד. כל נרתיק מותאם אישית לכלי הנשק שלך.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-800 hover:bg-[#c8a84a] hover:text-black text-zinc-400 rounded flex items-center justify-center transition-all"
                aria-label="פייסבוק"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-800 hover:bg-[#c8a84a] hover:text-black text-zinc-400 rounded flex items-center justify-center transition-all"
                aria-label="אינסטגרם"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/972"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-800 hover:bg-[#c8a84a] hover:text-black text-zinc-400 rounded flex items-center justify-center transition-all"
                aria-label="וואטסאפ"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-zinc-800">
              קישורים מהירים
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-[#c8a84a] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-zinc-800">
              מידע
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-[#c8a84a] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-zinc-800">
              צור קשר
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:benny@bgun-holsters.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-[#c8a84a] text-sm transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                benny@bgun-holsters.com
              </a>
              <a
                href="https://www.bgun-holsters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-[#c8a84a] text-sm transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                bgun-holsters.com
              </a>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">עדכונים ומבצעים</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="כתובת אימייל"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c8a84a]"
              />
              <button className="bg-[#c8a84a] hover:bg-[#d4b86a] text-black px-4 py-2 rounded text-sm font-bold transition-colors">
                הרשמה
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center sm:text-right">
            © 2026 B-Gun Boutique Holster. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#c8a84a] font-bold text-sm">🇮🇱 Proudly Made In Israel</span>
            <div className="flex items-center gap-2">
              {/* Payment icons placeholder */}
              {['VISA', 'MC', 'BIT', 'PAY'].map((p) => (
                <span key={p} className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px] px-2 py-1 rounded font-mono">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
