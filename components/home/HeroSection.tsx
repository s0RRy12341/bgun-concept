'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    badge: '🇮🇱 עשוי בישראל',
    title: 'נרתיקי Kydex',
    titleAccent: 'פרימיום',
    subtitle: 'מיוצרים בישראל, בעבודת יד, לנשיאה יומיומית',
    cta: 'בנה את הנרתיק שלך',
    ctaLink: '/collections',
    secondary: 'קרא עוד',
    secondaryLink: '/about',
    stat1: { value: '500+', label: 'לקוחות מרוצים' },
    stat2: { value: '100%', label: 'ייצור בישראל' },
    stat3: { value: '3 שנים', label: 'ניסיון מוכח' },
  },
  {
    badge: '🛠 עבודת יד',
    title: 'התאמה אישית',
    titleAccent: 'מושלמת',
    subtitle: 'כל נרתיק מותאם לדגם הנשק, הפנס וסוג הנשיאה שלך',
    cta: 'לכל המוצרים',
    ctaLink: '/collections',
    secondary: 'צור קשר',
    secondaryLink: '/contact',
    stat1: { value: '30+', label: 'דגמי נשק' },
    stat2: { value: '10+', label: 'דגמי פנס' },
    stat3: { value: 'אחריות', label: 'שנה' },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f7f5ee]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(181,157,90,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,157,90,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(181,157,90,0.08)_0%,_transparent_70%)]" />

      {/* Right decorative bar */}
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#b59d5a]/40 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-b border-r border-[#b59d5a]/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-t border-l border-[#b59d5a]/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-[#b59d5a]/15 border border-[#b59d5a]/40 rounded-full px-4 py-2 mb-6 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="text-[#b59d5a] font-semibold text-sm">{slide.badge}</span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: animating ? '0ms' : '50ms' }}
          >
            <span className="text-black">{slide.title} </span>
            <span className="text-[#b59d5a]">{slide.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-zinc-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: animating ? '0ms' : '100ms' }}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: animating ? '0ms' : '150ms' }}
          >
            <Link
              href={slide.ctaLink}
              className="bg-[#b59d5a] hover:bg-[#c4ad6a] text-black px-8 py-4 rounded-md font-black text-lg transition-all duration-200 shadow-lg shadow-[#b59d5a]/20 hover:shadow-[#b59d5a]/30 hover:scale-[1.02]"
            >
              {slide.cta}
            </Link>
            <Link
              href={slide.secondaryLink}
              className="border border-zinc-300 hover:border-zinc-500 text-zinc-600 hover:text-black px-8 py-4 rounded-md font-bold text-lg transition-all duration-200"
            >
              {slide.secondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-sm">
            {[slide.stat1, slide.stat2, slide.stat3].map((stat, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${
                  animating ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ transitionDelay: animating ? '0ms' : `${200 + i * 50}ms` }}
              >
                <div className="text-[#b59d5a] font-black text-2xl sm:text-3xl">{stat.value}</div>
                <div className="text-zinc-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-2 bg-[#b59d5a]' : 'w-2 h-2 bg-zinc-300 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
