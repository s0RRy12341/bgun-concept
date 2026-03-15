'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';
import type { Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import QuickViewModal from '@/components/products/QuickViewModal';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#c8a84a] font-semibold text-sm tracking-widest uppercase mb-2">
              המוצרים שלנו
            </p>
            <h2 className="text-white font-black text-4xl sm:text-5xl">
              נרתיקים מובחרים
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-[#c8a84a] font-medium transition-colors"
          >
            <span>לכל המוצרים</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/collections"
            className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-md font-bold transition-colors"
          >
            לכל המוצרים
          </Link>
        </div>

        {/* Shipping note */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: '🚚', text: 'משלוח חינם מעל ₪500' },
            { icon: '🔒', text: 'תשלום מאובטח' },
            { icon: '↩', text: 'החזרה תוך 14 יום' },
            { icon: '🇮🇱', text: 'ייצור בישראל' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-zinc-500 text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
}
