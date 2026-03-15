'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/products/ProductCard';
import ProductPlaceholder from '@/components/products/ProductPlaceholder';
import StarRating from '@/components/ui/StarRating';
import Badge from '@/components/ui/Badge';

type Tab = 'description' | 'specs' | 'shipping';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.variants.forEach((v) => { if (v.options[0]) defaults[v.name] = v.options[0]; });
    return defaults;
  });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>('description');
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const inWishlist = isInWishlist(product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, quantity, selectedVariants);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'description', label: 'תיאור המוצר' },
    { key: 'specs', label: 'מפרט טכני' },
    { key: 'shipping', label: 'משלוח והחזרה' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-zinc-500 text-sm">
          <Link href="/" className="hover:text-[#c8a84a] transition-colors">בית</Link>
          {' '}/{' '}
          <Link href="/collections" className="hover:text-[#c8a84a] transition-colors">חנות</Link>
          {' '}/{' '}
          <span className="text-zinc-300">{product.name}</span>
        </p>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-[#141414] border border-zinc-800 rounded-xl overflow-hidden relative">
              <ProductPlaceholder name={product.name} />
              {product.isNew && (
                <div className="absolute top-4 right-4">
                  <Badge variant="new">חדש</Badge>
                </div>
              )}
              {product.isSale && (
                <div className="absolute top-4 right-4">
                  <Badge variant="sale">מבצע</Badge>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-[#141414] border rounded-lg overflow-hidden transition-all ${
                    activeImage === i ? 'border-[#c8a84a]' : 'border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <ProductPlaceholder name={`${product.name} ${i + 1}`} small />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex gap-2 mb-3">
                {product.isNew && <Badge variant="new">חדש</Badge>}
                {product.isSale && <Badge variant="sale">מבצע</Badge>}
                {product.inStock
                  ? <Badge variant="success">במלאי</Badge>
                  : <Badge variant="info">אזל מהמלאי</Badge>
                }
              </div>
              <h1 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-1">
                {product.name}
              </h1>
              <p className="text-zinc-500 text-sm">{product.nameEn}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size="md" />
              <span className="text-zinc-400 text-sm font-medium">{product.rating}/5</span>
              <span className="text-zinc-600 text-sm">({product.reviewCount} ביקורות)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-[#c8a84a] font-black text-4xl">₪{product.price.toLocaleString()}</span>
              {product.compareAtPrice && (
                <span className="text-zinc-500 text-xl line-through">
                  ₪{product.compareAtPrice.toLocaleString()}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="bg-red-900/40 text-red-400 text-sm font-bold px-2 py-1 rounded">
                  חיסכון ₪{(product.compareAtPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">{product.shortDescription}</p>

            {/* Made in Israel badge */}
            <div className="flex items-center gap-2 bg-[#c8a84a]/10 border border-[#c8a84a]/20 rounded-lg px-4 py-3">
              <span className="text-2xl">🇮🇱</span>
              <div>
                <p className="text-[#c8a84a] font-bold text-sm">Proudly Made In Israel</p>
                <p className="text-zinc-400 text-xs">מיוצר בישראל, בעבודת יד, עם בקרת איכות ידנית</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-800" />

            {/* Variant selectors */}
            {product.variants.map((variant) => (
              <div key={variant.name}>
                <label className="text-zinc-200 font-semibold text-sm block mb-2">
                  {variant.name}:&nbsp;
                  <span className="text-[#c8a84a] font-bold">
                    {selectedVariants[variant.name]}
                  </span>
                </label>
                <select
                  value={selectedVariants[variant.name] || ''}
                  onChange={(e) =>
                    setSelectedVariants((prev) => ({ ...prev, [variant.name]: e.target.value }))
                  }
                  className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#c8a84a] text-sm"
                >
                  {variant.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* Quantity + Add to cart */}
            <div className="flex gap-3 items-stretch">
              {/* Quantity */}
              <div className="flex items-center border border-zinc-700 rounded-md overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-bold text-lg"
                >
                  −
                </button>
                <span className="px-5 py-3 text-white font-bold text-lg border-x border-zinc-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors font-bold text-lg"
                >
                  +
                </button>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                disabled={!product.inStock}
                className={`flex-1 py-3 rounded-md font-black text-base transition-all duration-200 ${
                  added
                    ? 'bg-green-600 text-white'
                    : product.inStock
                    ? 'bg-[#c8a84a] hover:bg-[#d4b86a] text-black hover:scale-[1.01]'
                    : 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                }`}
              >
                {added ? '✓ נוסף לעגלה!' : product.inStock ? 'הוסף לעגלה' : 'אזל מהמלאי'}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleItem(product)}
                className={`p-3 border rounded-md transition-all ${
                  inWishlist
                    ? 'border-[#c8a84a] bg-[#c8a84a]/10 text-[#c8a84a]'
                    : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
                }`}
                aria-label="רשימת משאלות"
              >
                <svg className="w-5 h-5" fill={inWishlist ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🔒', text: 'תשלום מאובטח' },
                { icon: '🚚', text: 'משלוח מהיר לכל הארץ' },
                { icon: '↩', text: 'החזרה תוך 14 יום' },
                { icon: '🛡', text: 'אחריות שנה' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex gap-1 mb-8 border-b border-zinc-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? 'border-[#c8a84a] text-[#c8a84a]'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            {activeTab === 'description' && (
              <div className="prose">
                {product.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-300 text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="overflow-hidden rounded-lg border border-zinc-800">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={i}
                        className={`border-b border-zinc-800 last:border-0 ${
                          i % 2 === 0 ? 'bg-[#141414]' : 'bg-[#1a1a1a]'
                        }`}
                      >
                        <td className="px-5 py-3.5 text-zinc-400 font-medium w-1/3">{spec.label}</td>
                        <td className="px-5 py-3.5 text-white font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                {[
                  { icon: '📦', title: 'זמן ייצור', body: 'כל נרתיק מיוצר לפי הזמנה. זמן ייצור ממוצע הוא 7-14 ימי עסקים מרגע אישור ההזמנה.' },
                  { icon: '🚚', title: 'משלוח', body: 'משלוח בדואר ישראל / חברת שליחויות לכל הארץ. משלוח חינם בהזמנות מעל ₪500. זמן משלוח: 2-4 ימי עסקים.' },
                  { icon: '↩', title: 'מדיניות החזרה', body: 'ניתן להחזיר מוצרים תוך 14 יום מקבלת ההזמנה, בתנאי שלא נעשה שימוש. נרתיקים שהוזמנו בהתאמה אישית אינם ניתנים להחזרה.' },
                  { icon: '🛡', title: 'אחריות', body: 'אחריות יצרן לשנה על כל הפגמים. צרו קשר בכל שאלה: benny@bgun-holsters.com' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-zinc-800 pt-10">
            <h2 className="text-white font-bold text-2xl mb-8">מוצרים קשורים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
