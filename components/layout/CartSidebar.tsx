'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import ProductPlaceholder from '@/components/products/ProductPlaceholder';

export default function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (state.isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [state.isOpen]);

  return (
    <>
      {/* Overlay */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#111111] border-l border-[#333333] z-[70] flex flex-col transition-transform duration-300 ease-in-out ${
          state.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#333333]">
          <div className="flex items-center gap-2">
            <h2 className="text-white font-bold text-lg">עגלת קניות</h2>
            {totalItems > 0 && (
              <span className="bg-[#bda775] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-[#A0A0A0] hover:text-white hover:bg-white/5 rounded-md transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <svg className="w-16 h-16 text-[#333333] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <p className="text-[#A0A0A0] text-lg font-medium mb-2">העגלה ריקה</p>
              <p className="text-[#666666] text-sm mb-6">הוסף מוצרים כדי להמשיך</p>
              <button
                onClick={closeCart}
                className="bg-[#bda775] hover:bg-[#c9b088] text-white px-6 py-3 rounded-md font-bold transition-colors"
              >
                המשך בקנייה
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-[#1A1A1A] rounded-lg p-3 border border-[#333333]"
              >
                {/* Product image */}
                <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 bg-[#151515]">
                  <ProductPlaceholder name={item.product.name} src={item.product.images[0]} small />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.slug}`}
                    onClick={closeCart}
                    className="text-white font-medium text-sm hover:text-[#bda775] transition-colors line-clamp-2"
                  >
                    {item.product.name}
                  </Link>

                  {/* Selected variants */}
                  {Object.entries(item.selectedVariants).length > 0 && (
                    <div className="mt-1 space-y-0.5">
                      {Object.entries(item.selectedVariants).map(([key, val]) => (
                        <p key={key} className="text-[#666666] text-xs">
                          {key}: <span className="text-[#A0A0A0]">{val}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 bg-[#333333] hover:bg-[#444444] text-white rounded text-sm flex items-center justify-center font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="text-white text-sm w-6 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 bg-[#333333] hover:bg-[#444444] text-white rounded text-sm flex items-center justify-center font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-[#bda775] font-bold text-sm">
                      ₪{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-[#666666] hover:text-red-500 transition-colors self-start mt-1 flex-shrink-0"
                  aria-label="הסר מוצר"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer summary */}
        {state.items.length > 0 && (
          <div className="p-5 border-t border-[#333333] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#A0A0A0] text-sm">סה&quot;כ לפני משלוח</span>
              <span className="text-white font-bold text-xl">₪{totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-[#666666] text-xs text-center">
              משלוח חינם בהזמנות מעל ₪500
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full bg-[#bda775] hover:bg-[#c9b088] text-white text-center py-4 rounded-md font-bold text-base transition-colors"
            >
              ← לתשלום
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-[#666666] hover:text-white text-sm transition-colors py-1"
            >
              המשך בקנייה
            </button>
          </div>
        )}
      </div>
    </>
  );
}
