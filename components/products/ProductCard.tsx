'use client';

import Link from 'next/link';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Badge from '@/components/ui/Badge';
import StarRating from '@/components/ui/StarRating';
import ProductPlaceholder from './ProductPlaceholder';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  return (
    <div className="group relative bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#C62828]/40 hover:shadow-xl hover:shadow-black/40">
      {/* Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        {product.isNew && <Badge variant="new">חדש</Badge>}
        {product.isSale && discount && <Badge variant="sale">-{discount}%</Badge>}
      </div>

      {/* Wishlist button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleItem(product);
        }}
        className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
          inWishlist
            ? 'bg-[#C62828] text-white'
            : 'bg-black/60 text-[#A0A0A0] opacity-0 group-hover:opacity-100'
        }`}
        aria-label={inWishlist ? 'הסר מרשימת המשאלות' : 'הוסף לרשימת המשאלות'}
      >
        <svg
          className="w-4 h-4"
          fill={inWishlist ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#151515]">
          <ProductPlaceholder name={product.name} src={product.images[0]} />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-white font-semibold text-sm hover:text-[#C62828] transition-colors line-clamp-2 leading-snug mb-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-[#666666] text-xs">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C62828] font-bold text-lg">₪{product.price.toLocaleString()}</span>
            {product.compareAtPrice && (
              <span className="text-[#666666] text-sm line-through">
                ₪{product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product, 1)}
            className="bg-[#333333] hover:bg-[#C62828] text-[#A0A0A0] hover:text-white p-2 rounded-md transition-all duration-200"
            aria-label="הוסף לעגלה"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
