'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    badge: 'עשוי בישראל',
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
    badge: 'עבודת יד',
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
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://www.justintime.co.il/wp-content/uploads/2026/03/153544-1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-b border-r border-white/15" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-t border-l border-white/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#bda775]" />
            <span className="text-white/90 font-semibold text-sm">{slide.badge}</span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: animating ? '0ms' : '50ms' }}
          >
            <span className="text-white">{slide.title} </span>
            <span className="text-[#bda775]">{slide.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl transition-all duration-300 ${
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
              className="bg-[#bda775] hover:bg-[#c9b088] text-white px-8 py-4 rounded-md font-black text-lg transition-all duration-200 shadow-lg shadow-black/40 hover:scale-[1.02]"
            >
              {slide.cta}
            </Link>
            <Link
              href={slide.secondaryLink}
              className="border border-white/35 hover:border-white/60 text-white/75 hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-200 backdrop-blur-sm"
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
                <div className="text-[#bda775] font-black text-2xl sm:text-3xl">{stat.value}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
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
              i === current ? 'w-8 h-2 bg-[#bda775]' : 'w-2 h-2 bg-white/25 hover:bg-white/45'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
