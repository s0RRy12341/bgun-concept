'use client';

import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/products/ProductCard';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();

  return (
    <>
      <div className="bg-[#f7f5ee] border-b border-[#e0d9c8] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-400 text-sm mb-2">
            <Link href="/" className="hover:text-[#b59d5a] transition-colors">בית</Link>
            {' '}/{' '}
            <span className="text-zinc-700">רשימת משאלות</span>
          </p>
          <h1 className="text-black font-black text-4xl">רשימת המשאלות שלי</h1>
          <p className="text-zinc-600 mt-2">{items.length} פריטים שמורים</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <svg
              className="w-16 h-16 text-zinc-200 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <p className="text-zinc-400 text-lg mb-4">רשימת המשאלות שלך ריקה</p>
            <Link
              href="/collections"
              className="inline-block bg-[#b59d5a] hover:bg-[#c4ad6a] text-black font-bold px-6 py-3 rounded-md transition-colors"
            >
              עבור לחנות
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
