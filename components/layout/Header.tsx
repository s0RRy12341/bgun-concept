'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/collections', label: 'חנות' },
  { href: '/about', label: 'מי אנחנו' },
  { href: '/blog', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openCart, totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#b59d5a] text-black text-center py-2 text-sm font-semibold">
        🇮🇱 משלוח חינם בהזמנות מעל ₪500 | ייצור בישראל | בקרת איכות ידנית
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/10'
            : 'bg-white'
        } border-b border-[#e0d9c8]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 bg-[#b59d5a] rounded flex items-center justify-center font-black text-black text-lg leading-none">
                B
              </div>
              <div className="leading-tight">
                <div className="text-black font-black text-base tracking-tight">B-GUN</div>
                <div className="text-[#b59d5a] text-[10px] font-semibold tracking-widest uppercase">
                  Boutique Holster
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-black hover:bg-[#f7f5ee] rounded-md transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Action icons */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-zinc-500 hover:text-black hover:bg-[#f7f5ee] rounded-md transition-all"
                aria-label="חיפוש"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2.5 text-zinc-500 hover:text-black hover:bg-[#f7f5ee] rounded-md transition-all hidden sm:flex"
                aria-label="רשימת משאלות"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-[#b59d5a] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2.5 text-zinc-500 hover:text-black hover:bg-[#f7f5ee] rounded-md transition-all"
                aria-label="עגלת קניות"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#b59d5a] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 text-zinc-500 hover:text-black hover:bg-[#f7f5ee] rounded-md transition-all"
                aria-label="תפריט"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="חפש נרתיק, דגם נשק..."
                  autoFocus
                  className="w-full bg-[#f7f5ee] border border-[#e0d9c8] rounded-md px-4 py-3 text-black placeholder-zinc-400 focus:outline-none focus:border-[#b59d5a] text-sm"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-80 bg-white border-l border-[#e0d9c8] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#e0d9c8]">
              <span className="text-black font-bold text-lg">תפריט</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-zinc-500 hover:text-black"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center py-3 px-4 text-zinc-700 hover:text-black hover:bg-[#f7f5ee] rounded-md text-lg font-medium transition-colors mb-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-[#e0d9c8]">
              <p className="text-zinc-500 text-sm text-center">📧 benny@bgun-holsters.com</p>
              <p className="text-[#b59d5a] text-sm text-center mt-1 font-semibold">
                🇮🇱 Proudly Made In Israel
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
