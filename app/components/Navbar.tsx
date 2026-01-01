"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 flex justify-between items-center z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-[#F4F1EA] border-transparent"
            : "bg-[var(--color-background)] text-[var(--color-brand-primary)] border-b border-[var(--color-brand-primary)]/10 shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-heading-tech font-bold tracking-widest hover:opacity-80 transition-opacity">
          ECOGEAR
        </Link>
        
        {/* Navigation Links - Desktop */}
        <div className={`hidden md:flex gap-10 font-sans text-xs tracking-widest transition-colors ${!isTransparent ? "text-[var(--color-brand-primary)]/70" : "text-[#F4F1EA]/80"}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-[var(--color-brand-highlight)] transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Cart, CTA, Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart Icon */}
          <Link 
            href="/cart" 
            className={`relative p-2 hover:opacity-80 transition-opacity ${!isTransparent ? "text-[var(--color-brand-primary)]" : "text-white"}`}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] text-[8px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button variant={!isTransparent ? "secondary" : "outline"} showArrow={false}>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Hamburger Menu - Mobile only */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 hover:opacity-80 transition-opacity ${!isTransparent ? "text-[var(--color-brand-primary)]" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--color-background)] z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-lg font-heading-tech uppercase tracking-wider text-[var(--color-brand-primary)] hover:text-[var(--color-brand-highlight)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--color-brand-primary)]/10">
              <Button variant="primary" className="w-full">
                <Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
