'use client';

import { useState, useMemo } from 'react';
import { products, categories } from '@/data/products';
import type { Product } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import QuickViewModal from '@/components/products/QuickViewModal';

type SortKey = 'default' | 'price-asc' | 'price-desc' | 'name' | 'rating';

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sort, setSort] = useState<SortKey>('default');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

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
      <div className="bg-[#0f0f0f] border-b border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-zinc-500 text-sm mb-2">
            <a href="/" className="hover:text-[#c8a84a] transition-colors">בית</a>
            {' '}/{' '}
            <span className="text-zinc-300">חנות</span>
          </p>
          <h1 className="text-white font-black text-4xl">החנות שלנו</h1>
          <p className="text-zinc-400 mt-2">נרתיקי Kydex פרימיום — מיוצרים בישראל, בעבודת יד</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800">
          {/* Category filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#c8a84a] text-black font-bold'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">{filtered.length} מוצרים</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:border-[#c8a84a]"
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
            <p className="text-zinc-500 text-lg">לא נמצאו מוצרים בקטגוריה זו.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 text-[#c8a84a] hover:underline"
            >
              הצג את כל המוצרים
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}

        {/* Info banner */}
        <div className="mt-16 bg-[#141414] border border-zinc-800 rounded-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🛠</div>
              <h3 className="text-white font-bold mb-1">הזמנה אישית</h3>
              <p className="text-zinc-400 text-sm">כל נרתיק מיוצר לפי ההזמנה שלך — דגם נשק, פנס וסוג נשיאה</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⏱</div>
              <h3 className="text-white font-bold mb-1">זמן ייצור</h3>
              <p className="text-zinc-400 text-sm">7-14 ימי עסקים מרגע ההזמנה ועד המשלוח</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📦</div>
              <h3 className="text-white font-bold mb-1">משלוח מכובד</h3>
              <p className="text-zinc-400 text-sm">משלוח מהיר לכל הארץ. חינם בהזמנות מעל ₪500</p>
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </>
  );
}
