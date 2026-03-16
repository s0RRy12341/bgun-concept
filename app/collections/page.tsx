'use client';

import { useState, useMemo } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

type SortKey = 'default' | 'price-asc' | 'price-desc' | 'name' | 'rating';

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState<SortKey>('default');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

    switch (sort) {
      case 'price-asc':  return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price);
      case 'name':       return [...list].sort((a, b) => a.name.localeCompare(b.name, 'he'));
      case 'rating':     return [...list].sort((a, b) => b.rating - a.rating);
      default:           return list;
    }
  }, [activeCategory, sort]);

  return (
    <>
      {/* Page header */}
      <div className="bg-[#1A1A1A] border-b border-[#333333] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#666666] text-sm mb-2">
            <a href="/" className="hover:text-white transition-colors">בית</a>
            {' '}/{' '}
            <span className="text-[#A0A0A0]">חנות</span>
          </p>
          <h1 className="text-white font-black text-4xl">החנות שלנו</h1>
          <p className="text-[#A0A0A0] mt-2">נרתיקי Kydex פרימיום — מיוצרים בישראל, בעבודת יד</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#333333]">
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#bda775] text-white font-bold'
                    : 'bg-[#1A1A1A] hover:bg-[#333333] text-[#A0A0A0] hover:text-white border border-[#333333]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-4">
            <span className="text-[#666666] text-sm">{filtered.length} מוצרים</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-[#1A1A1A] border border-[#333333] text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:border-[#bda775]"
            >
              <option value="default">מיון: ברירת מחדל</option>
              <option value="price-asc">מחיר: מנמוך לגבוה</option>
              <option value="price-desc">מחיר: מגבוה לנמוך</option>
              <option value="name">שם: א-ת</option>
              <option value="rating">דירוג</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#A0A0A0] text-lg">לא נמצאו מוצרים בקטגוריה זו.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-[#bda775] hover:underline"
            >
              הצג את כל המוצרים
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Info banner */}
        <div className="mt-16 bg-[#1A1A1A] border border-[#333333] rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3 text-[#bda775]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">הזמנה אישית</h3>
              <p className="text-[#A0A0A0] text-sm">כל נרתיק מיוצר לפי ההזמנה שלך — דגם נשק, פנס וסוג נשיאה</p>
            </div>
            <div>
              <div className="flex justify-center mb-3 text-[#bda775]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">זמן ייצור</h3>
              <p className="text-[#A0A0A0] text-sm">7-14 ימי עסקים מרגע ההזמנה ועד המשלוח</p>
            </div>
            <div>
              <div className="flex justify-center mb-3 text-[#bda775]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">משלוח מכובד</h3>
              <p className="text-[#A0A0A0] text-sm">משלוח מהיר לכל הארץ. חינם בהזמנות מעל ₪500</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
