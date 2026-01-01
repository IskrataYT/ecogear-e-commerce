"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/app/components/Button";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  const shipping = cartTotal >= 100 ? 0 : 12;
  const total = cartTotal + shipping;

  if (cartCount === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

        <div className="flex-1 flex flex-col items-center justify-center py-32 px-6">
          <div className="mb-6 text-[var(--color-brand-primary)]/20">
            <svg 
              className="w-24 h-24" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
              />
            </svg>
          </div>
          <h1 className="font-heading-tech text-3xl font-bold text-[var(--color-brand-primary)] mb-4">
            Your Cart is Empty
          </h1>
          <p className="font-sans text-lg text-[var(--color-text-secondary)] mb-8">
            Looks like you haven&apos;t added any gear yet.
          </p>
          <Link href="/shop">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

      
      {/* Header */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading-tech text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight">
            Your Cart
          </h1>
          <p className="font-sans text-lg text-[var(--color-text-secondary)] mt-2">
            {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex gap-6 p-6 bg-white border border-[var(--color-brand-primary)]/10">
                {/* Image */}
                <Link href={`/products/${item.product.slug}`} className="shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#F5F5F5] relative">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Link>
                
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/products/${item.product.slug}`}>
                      <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] hover:text-[var(--color-brand-highlight)] transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="font-sans text-sm text-[var(--color-text-secondary)] mt-1">
                      {item.product.material}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-[var(--color-brand-primary)]/20">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5 transition-colors"
                      >
                        −
                      </button>
                      <span className="w-10 h-10 flex items-center justify-center font-heading-tech font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    {/* Price & Remove */}
                    <div className="text-right">
                      <div className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="font-sans text-xs text-[var(--color-text-secondary)] hover:text-red-600 transition-colors mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[var(--color-brand-primary)]/10 p-8 sticky top-32">
              <h2 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-sans">
                  <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                  <span className="text-[var(--color-foreground)]">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-sans">
                  <span className="text-[var(--color-text-secondary)]">Shipping</span>
                  <span className="text-[var(--color-foreground)]">
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="font-sans text-xs text-[var(--color-brand-secondary)]">
                    Free shipping on orders over $100
                  </p>
                )}
              </div>
              
              <div className="border-t border-[var(--color-brand-primary)]/10 pt-4 mb-8">
                <div className="flex justify-between font-heading-tech text-xl font-bold">
                  <span className="text-[var(--color-brand-primary)]">Total</span>
                  <span className="text-[var(--color-brand-primary)]">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout" className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>

              <Link href="/shop" className="block mt-4">
                <Button variant="outline" size="default" className="w-full text-[var(--color-brand-primary)] border-[var(--color-brand-primary)]" showArrow={false}>
                  Continue Shopping
                </Button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[var(--color-brand-primary)]/10">
                <div className="flex flex-col gap-3 text-xs font-sans text-[var(--color-text-secondary)]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-4 h-4 text-[var(--color-brand-primary)]">
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-4 h-4 text-[var(--color-brand-primary)]">
                       <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                    </div>
                    <span>Carbon Neutral Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-4 h-4 text-[var(--color-brand-primary)]">
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    <span>30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
