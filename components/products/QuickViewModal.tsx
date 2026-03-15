'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import ProductPlaceholder from './ProductPlaceholder';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      const defaults: Record<string, string> = {};
      product.variants.forEach((v) => {
        if (v.options[0]) defaults[v.name] = v.options[0];
      });
      setSelectedVariants(defaults);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    addItem(product, 1, selectedVariants);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#141414] border border-zinc-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="aspect-square sm:aspect-auto sm:h-full min-h-[250px] bg-zinc-900 rounded-tr-none rounded-tl-xl sm:rounded-tl-xl sm:rounded-tr-none sm:rounded-bl-xl overflow-hidden">
            <ProductPlaceholder name={product.name} />
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              {product.isNew && <Badge variant="new">חדש</Badge>}
              {product.isSale && <Badge variant="sale">מבצע</Badge>}
            </div>

            <h2 className="text-white font-bold text-xl leading-tight mb-2">{product.name}</h2>
            <p className="text-zinc-500 text-xs mb-2">{product.nameEn}</p>

            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-zinc-400 text-sm">({product.reviewCount} ביקורות)</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#c8a84a] font-black text-3xl">₪{product.price.toLocaleString()}</span>
              {product.compareAtPrice && (
                <span className="text-zinc-500 text-lg line-through">
                  ₪{product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {product.shortDescription}
            </p>

            {/* Variants */}
            <div className="space-y-4 mb-6">
              {product.variants.map((variant) => (
                <div key={variant.name}>
                  <label className="text-zinc-300 text-sm font-medium block mb-2">
                    {variant.name}
                  </label>
                  <select
                    value={selectedVariants[variant.name] || ''}
                    onChange={(e) =>
                      setSelectedVariants((prev) => ({ ...prev, [variant.name]: e.target.value }))
                    }
                    className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-[#c8a84a]"
                  >
                    {variant.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-md font-bold text-base transition-all duration-200 mb-3 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-[#c8a84a] hover:bg-[#d4b86a] text-black'
              }`}
            >
              {added ? '✓ נוסף לעגלה' : 'הוסף לעגלה'}
            </button>

            <Link
              href={`/products/${product.slug}`}
              onClick={onClose}
              className="block text-center text-zinc-400 hover:text-[#c8a84a] text-sm transition-colors"
            >
              לדף המוצר המלא ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
