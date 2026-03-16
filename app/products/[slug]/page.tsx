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
    <div className="min-h-screen bg-[#111111]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-[#666666] text-sm">
          <Link href="/" className="hover:text-white transition-colors">בית</Link>
          {' '}/{' '}
          <Link href="/collections" className="hover:text-white transition-colors">חנות</Link>
          {' '}/{' '}
          <span className="text-[#A0A0A0]">{product.name}</span>
        </p>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-[#1A1A1A] border border-[#333333] rounded-xl overflow-hidden relative">
              <ProductPlaceholder name={product.name} src={product.images[activeImage]} />
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
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-[#1A1A1A] border rounded-lg overflow-hidden transition-all ${
                    activeImage === i ? 'border-[#bda775]' : 'border-[#333333] hover:border-[#555555]'
                  }`}
                >
                  <ProductPlaceholder name={`${product.name} ${i + 1}`} src={img} small />
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
              <p className="text-[#666666] text-sm">{product.nameEn}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating} size="md" />
              <span className="text-[#A0A0A0] text-sm font-medium">{product.rating}/5</span>
              <span className="text-[#666666] text-sm">({product.reviewCount} ביקורות)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-[#bda775] font-black text-4xl">₪{product.price.toLocaleString()}</span>
              {product.compareAtPrice && (
                <span className="text-[#666666] text-xl line-through">
                  ₪{product.compareAtPrice.toLocaleString()}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="bg-[#bda775]/10 border border-[#bda775]/30 text-[#bda775] text-sm font-bold px-2 py-1 rounded">
                  חיסכון ₪{(product.compareAtPrice - product.price).toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-[#A0A0A0] text-base leading-relaxed">{product.shortDescription}</p>

            {/* Made in Israel badge */}
            <div className="flex items-center gap-3 bg-[#bda775]/10 border border-[#bda775]/25 rounded-lg px-4 py-3">
              <svg className="w-5 h-5 text-[#bda775] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <div>
                <p className="text-[#bda775] font-bold text-sm">Proudly Made In Israel</p>
                <p className="text-[#A0A0A0] text-xs">מיוצר בישראל, בעבודת יד, עם בקרת איכות ידנית</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#333333]" />

            {/* Variant selectors */}
            {product.variants.map((variant) => (
              <div key={variant.name}>
                <label className="text-[#A0A0A0] font-semibold text-sm block mb-2">
                  {variant.name}:&nbsp;
                  <span className="text-[#bda775] font-bold">
                    {selectedVariants[variant.name]}
                  </span>
                </label>
                <select
                  value={selectedVariants[variant.name] || ''}
                  onChange={(e) =>
                    setSelectedVariants((prev) => ({ ...prev, [variant.name]: e.target.value }))
                  }
                  className="w-full bg-[#1A1A1A] border border-[#333333] text-white rounded-md px-4 py-3 focus:outline-none focus:border-[#bda775] text-sm"
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
              <div className="flex items-center border border-[#333333] rounded-md overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors font-bold text-lg"
                >
                  −
                </button>
                <span className="px-5 py-3 text-white font-bold text-lg border-x border-[#333333]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors font-bold text-lg"
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
                    ? 'bg-green-700 text-white'
                    : product.inStock
                    ? 'bg-[#bda775] hover:bg-[#c9b088] text-white hover:scale-[1.01]'
                    : 'bg-[#333333] text-[#666666] cursor-not-allowed'
                }`}
              >
                {added ? '✓ נוסף לעגלה!' : product.inStock ? 'הוסף לעגלה' : 'אזל מהמלאי'}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleItem(product)}
                className={`p-3 border rounded-md transition-all ${
                  inWishlist
                    ? 'border-[#bda775] bg-[#bda775]/10 text-[#bda775]'
                    : 'border-[#333333] text-[#A0A0A0] hover:border-[#555555] hover:text-white'
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
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                  text: 'תשלום מאובטח',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                  text: 'משלוח מהיר לכל הארץ',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                  ),
                  text: 'החזרה תוך 14 יום',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  text: 'אחריות שנה',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#A0A0A0] text-sm">
                  <span className="text-[#bda775]">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-[#333333] pt-10">
          <div className="flex gap-1 mb-8 border-b border-[#333333]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 -mb-px ${
                  activeTab === tab.key
                    ? 'border-[#bda775] text-[#bda775]'
                    : 'border-transparent text-[#A0A0A0] hover:text-white'
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
                  <p key={i} className="text-[#A0A0A0] text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="overflow-hidden rounded-lg border border-[#333333]">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#333333] last:border-0 ${
                          i % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#111111]'
                        }`}
                      >
                        <td className="px-5 py-3.5 text-[#A0A0A0] font-medium w-1/3">{spec.label}</td>
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
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    ),
                    title: 'זמן ייצור',
                    body: 'כל נרתיק מיוצר לפי הזמנה. זמן ייצור ממוצע הוא 7-14 ימי עסקים מרגע אישור ההזמנה.',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                    title: 'משלוח',
                    body: 'משלוח בדואר ישראל / חברת שליחויות לכל הארץ. משלוח חינם בהזמנות מעל ₪500. זמן משלוח: 2-4 ימי עסקים.',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                      </svg>
                    ),
                    title: 'מדיניות החזרה',
                    body: 'ניתן להחזיר מוצרים תוך 14 יום מקבלת ההזמנה, בתנאי שלא נעשה שימוש. נרתיקים שהוזמנו בהתאמה אישית אינם ניתנים להחזרה.',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                    title: 'אחריות',
                    body: 'אחריות יצרן לשנה על כל הפגמים. צרו קשר בכל שאלה: benny@bgun-holsters.com',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[#bda775] mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-[#333333] pt-10">
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
