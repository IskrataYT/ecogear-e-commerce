"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/app/components/Button";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart, cartCount } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderNumber] = useState(() => `ECO-${Date.now().toString(36).toUpperCase()}`);

  const shipping = cartTotal >= 100 ? 0 : 12;
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order submission
    setIsSubmitted(true);
    clearCart();
  };

  // Empty cart redirect
  if (cartCount === 0 && !isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

        <div className="flex-1 flex flex-col items-center justify-center py-32 px-6">
          <h1 className="font-heading-tech text-3xl font-bold text-[var(--color-brand-primary)] mb-4">
            Your Cart is Empty
          </h1>
          <p className="font-sans text-lg text-[var(--color-text-secondary)] mb-8">
            Add some gear before checking out.
          </p>
          <Link href="/shop">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Link>
        </div>

      </div>
    );
  }

  // Order Confirmation
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

        <div className="flex-1 flex flex-col items-center justify-center py-32 px-6">
          <div className="mb-6 text-[var(--color-brand-primary)]">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="font-heading-tech text-4xl font-bold text-[var(--color-brand-primary)] mb-4">
            Order Confirmed!
          </h1>
          <p className="font-sans text-lg text-[var(--color-text-secondary)] mb-2">
            Thank you for your order.
          </p>
          <p className="font-heading-tech text-xl text-[var(--color-brand-highlight)] mb-8">
            Order #{orderNumber}
          </p>
          <p className="font-sans text-sm text-[var(--color-text-secondary)] mb-8 max-w-md text-center">
            You&apos;ll receive a confirmation email shortly with tracking information. 
            Your gear will arrive in 3-5 business days.
          </p>
          <Link href="/shop">
            <Button variant="primary" size="lg">
              Continue Shopping
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
            Checkout
          </h1>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Contact */}
              <div className="bg-white border border-[var(--color-brand-primary)]/10 p-8">
                <h2 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 555-5555"
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="bg-white border border-[var(--color-brand-primary)]/10 p-8">
                <h2 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-6">
                  Shipping Address
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Address</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Apartment, suite, etc. (optional)</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">City</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">State</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Country</label>
                    <select className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)] bg-white">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white border border-[var(--color-brand-primary)]/10 p-8">
                <h2 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-6">
                  Payment Method
                </h2>

                {/* Method Selection */}
                {/* Method Selection */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button 
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center p-4 border transition-all h-[80px] ${
                      paymentMethod === "card" 
                        ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/5" 
                        : "border-[var(--color-brand-primary)]/10 hover:border-[var(--color-brand-primary)]/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      <span className="font-heading-tech text-sm font-bold">Credit Card</span>
                    </div>
                  </button>

                  <button 
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`flex flex-col items-center justify-center p-4 border transition-all h-[80px] ${
                      paymentMethod === "cash" 
                        ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/5" 
                        : "border-[var(--color-brand-primary)]/10 hover:border-[var(--color-brand-primary)]/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                       <svg className="w-6 h-6 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                       <span className="font-heading-tech text-sm font-bold">Cash on Delivery</span>
                    </div>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Card Number</label>
                      <input 
                        type="text" 
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">Expiry</label>
                        <input 
                          type="text" 
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-sm text-[var(--color-foreground)] mb-2">CVV</label>
                        <input 
                          type="text" 
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 border border-[var(--color-brand-primary)]/20 font-sans focus:outline-none focus:border-[var(--color-brand-primary)]"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "cash" && (
                  <div className="text-center py-8 bg-[#F9F9F9] rounded-lg border border-dashed border-[var(--color-brand-primary)]/20">
                    <div className="text-2xl mb-2">💵</div>
                    <p className="font-heading-tech text-sm font-bold text-[var(--color-brand-primary)] mb-1">
                      Pay on Delivery
                    </p>
                    <p className="font-sans text-sm text-[var(--color-text-secondary)]">
                      Please have the exact amount ready upon delivery.
                    </p>
                  </div>
                )}
                
                <div className="font-sans text-xs text-[var(--color-text-secondary)] mt-6 flex items-center gap-2">
                  <div className="flex items-center justify-center w-3 h-3 text-[var(--color-brand-primary)]">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  Your payment information is encrypted and secure.
                </div>
              </div>

              {/* Submit */}
              <Button variant="primary" size="lg" className="w-full">
                Place Order — ${total.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[var(--color-brand-primary)]/10 p-8 sticky top-32">
              <h2 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-6">
                Order Summary
              </h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#F5F5F5] relative shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--color-brand-primary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading-tech text-sm font-bold text-[var(--color-brand-primary)]">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-[var(--color-text-secondary)]">
                        ${item.product.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="font-heading-tech text-sm font-bold text-[var(--color-brand-primary)]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--color-brand-primary)]/10 pt-4 space-y-3">
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-[var(--color-text-secondary)]">Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-[var(--color-text-secondary)]">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-[var(--color-brand-primary)]/10 pt-4 mt-4">
                <div className="flex justify-between font-heading-tech text-xl font-bold">
                  <span className="text-[var(--color-brand-primary)]">Total</span>
                  <span className="text-[var(--color-brand-primary)]">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/cart" className="block mt-6">
                <p className="font-sans text-xs text-[var(--color-brand-secondary)] hover:underline text-center">
                  ← Return to cart
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
