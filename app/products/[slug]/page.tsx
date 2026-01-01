"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/app/components/Button";
import ProductCard from "@/app/components/ProductCard";
import { getProductBySlug, products, Product } from "@/app/lib/products";
import { useCart } from "@/app/context/CartContext";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuickAdd = (p: Product) => {
    addToCart(p, 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

      
      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-secondary)]">
            <Link href="/" className="hover:text-[var(--color-brand-primary)]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[var(--color-brand-primary)]">Shop</Link>
            <span>/</span>
            <Link href={`/shop?category=${product.category}`} className="hover:text-[var(--color-brand-primary)]">{product.category}</Link>
            <span>/</span>
            <span className="text-[var(--color-brand-primary)]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5F5F5] relative overflow-hidden">
              {product.tag && (
                <div className={`absolute top-4 left-4 z-10 text-white text-[10px] font-heading-tech px-3 py-1.5 uppercase tracking-widest ${
                  product.tag === "Sale" ? "bg-red-600" : "bg-[var(--color-brand-primary)]"
                }`}>
                  {product.tag}
                </div>
              )}
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 bg-[#F5F5F5] relative overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-[var(--color-brand-primary)]" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <p className="font-sans text-sm text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="font-heading-tech text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] mb-4">
                {product.name}
              </h1>
              <p className="font-sans text-sm text-[var(--color-brand-secondary)] mb-4">
                {product.material}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-heading-tech text-3xl font-bold text-[var(--color-brand-primary)]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="font-sans text-xl text-[var(--color-text-secondary)] line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="font-sans text-lg text-[var(--color-foreground)]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[var(--color-brand-primary)]/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5 transition-colors"
                >
                  −
                </button>
                <span className="w-12 h-12 flex items-center justify-center font-heading-tech font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5 transition-colors"
                >
                  +
                </button>
              </div>
              <div className="flex-1">
                <Button variant="primary" size="lg" className="w-full" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-[var(--color-brand-primary)]/10 pt-8">
              <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-[var(--color-foreground)]/80">
                    <span className="text-[var(--color-brand-highlight)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="border-t border-[var(--color-brand-primary)]/10 pt-8">
              <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-4">
                Specifications
              </h3>
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-sans text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                      {key}
                    </dt>
                    <dd className="font-sans text-sm text-[var(--color-foreground)] mt-1">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading-tech text-3xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onQuickAdd={handleQuickAdd} />
              ))}
            </div>
          </div>
        </section>
      )}


    </div>
  );
}
