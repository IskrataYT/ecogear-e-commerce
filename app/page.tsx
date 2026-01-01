"use client";


import Button from "./components/Button";
import TechCarousel from "./components/TechCarousel";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { getFeaturedProducts } from "@/app/lib/products";

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = getFeaturedProducts();

  const statsData = [
    { value: "847K", label: "Lbs of Plastic Recycled" },
    { value: "12", label: "Years Average Product Lifespan" },
    { value: "0", label: "Waste Sent to Landfill" },
    { value: "100%", label: "Carbon Neutral Shipping" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for joining the movement! (Development: Subscription simulated)");
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center relative w-full h-dvh bg-black">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Mountain landscape at golden hour"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 px-4">
            
            <h1 className="font-heading-tech text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#F4F1EA] drop-shadow-lg tracking-widest uppercase leading-none">
              Wilderness<br className="hidden sm:block" /> Reclaimed
            </h1>

            <p className="max-w-2xl text-[#F4F1EA]/90 font-sans text-base sm:text-lg md:text-xl tracking-wider leading-relaxed drop-shadow-md px-2">
              High-performance outdoor gear forged from recycled materials.<br className="hidden sm:block"/>
              Ready for the elements. Kind to the planet.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
               <Link href="/shop">
                 <Button variant="primary" size="lg">
                    Shop Collection
                 </Button>
               </Link>
               <Link href="/about">
                 <Button variant="ghost" size="lg" showArrow={false}>
                    Our Story
                 </Button>
               </Link>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-heading-tech tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/40 animate-pulse"></div>
        </div>

      </section>

      {/* SECTION: MISSION / MANIFESTO */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">
          {/* Big Section Title - LEFT aligned flush with screen edge */}
          <div className="pl-6 md:pl-10 mb-8 sm:mb-12" style={{ marginLeft: 'calc(-1 * (50vw - 50%))' }}>
            <span className="font-heading-tech text-xl sm:text-2xl md:text-3xl text-[var(--color-brand-primary)]/30 uppercase tracking-[0.3em]">Learn</span>
            <h2 className="font-heading-tech text-[10vw] md:text-[10vw] font-black text-[var(--color-brand-primary)]/10 uppercase tracking-tighter leading-none -mt-1 whitespace-nowrap -ml-1 md:-ml-2">
              About Us
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/products/backpack-lifestyle.png"
                alt="Hiker with EcoGear backpack in nature"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[var(--color-brand-highlight)]"></span>
              <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">Our Mission</span>
            </div>
            
            <h2 className="font-heading-nature text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-brand-primary)] leading-tight mb-6 sm:mb-8">
              Gear That Gives Back to the Wild
            </h2>
            
            <p className="font-sans text-base sm:text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-4 sm:mb-6">
              Every year, 8 million tons of plastic enter our oceans. We intercept it before it harms marine life—transforming discarded fishing nets, bottles, and industrial waste into the most durable outdoor equipment on the market.
            </p>
            
            <p className="font-sans text-base sm:text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-6 sm:mb-8">
              Our gear isn&apos;t just sustainable—it&apos;s <span className="font-bold text-[var(--color-brand-primary)]">built to outlast</span>. With a 12-year average product lifespan and our LifeCycle™ return program, nothing we make ever sees a landfill.
            </p>
            <Link href="/about">
              <Button variant="secondary" showArrow={true}>
                Read Our Full Story
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* SECTION: IMPACT STATS */}
      <section className="py-16 bg-[var(--color-brand-primary)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-4">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading-tech text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand-highlight)]">
                {stat.value}
              </div>
              <div className="font-sans text-xs sm:text-sm text-white/70 mt-1 sm:mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* SECTION: FEATURED PRODUCTS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Big Section Title - LEFT aligned flush with screen edge */}
          <div className="pl-6 md:pl-10 mb-8 sm:mb-12" style={{ marginLeft: 'calc(-1 * (50vw - 50%))' }}>
            <span className="font-heading-tech text-xl sm:text-2xl md:text-3xl text-[var(--color-brand-primary)]/30 uppercase tracking-[0.3em]">Featured</span>
            <h2 className="font-heading-tech text-[10vw] md:text-[10vw] font-black text-[var(--color-brand-primary)]/10 uppercase tracking-tighter leading-none -mt-1 whitespace-nowrap -ml-1 md:-ml-2">
              Products
            </h2>
          </div>
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-8 sm:w-12 bg-[var(--color-brand-highlight)]"></span>
                <span className="font-heading-tech text-base sm:text-lg tracking-[0.2em] text-[var(--color-brand-primary)] uppercase font-bold">Shop</span>
              </div>
            </div>
            <Link href="/shop">
              <Button variant="secondary" size="default">
                View All Products
              </Button>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-[#F5F5F5] relative overflow-hidden mb-4 sm:mb-6">
                  {/* Tag */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-[var(--color-brand-primary)] text-white text-[10px] font-heading-tech px-3 py-1.5 uppercase tracking-widest">
                      {product.tag}
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="w-full py-3 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] font-heading-tech text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <div className="font-sans text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)]">
                    {product.name}
                  </h3>
                  <div className="font-sans text-xs text-[var(--color-brand-secondary)]">
                    {product.material}
                  </div>
                  <div className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)]">
                    ${product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TECHNOLOGY / INNOVATION */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">
          {/* Big Section Title - LEFT aligned flush with screen edge */}
          <div className="pl-6 md:pl-10 mb-8 sm:mb-12" style={{ marginLeft: 'calc(-1 * (50vw - 50%))' }}>
            <span className="font-heading-tech text-xl sm:text-2xl md:text-3xl text-[var(--color-brand-primary)]/30 uppercase tracking-[0.3em]">Our</span>
            <h2 className="font-heading-tech text-[10vw] md:text-[10vw] font-black text-[var(--color-brand-primary)]/10 uppercase tracking-tighter leading-none -mt-1 whitespace-nowrap -ml-1 md:-ml-2">
              Technology
            </h2>
          </div>
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-sans text-base sm:text-lg text-[var(--color-foreground)]/70 max-w-2xl mx-auto px-2">
              Four breakthrough technologies developed in-house. Patented. Field-tested. Trusted by professional guides worldwide.
            </p>
          </div>

          {/* Carousel */}
          <TechCarousel />
        </div>
      </section>

      {/* SECTION: PRODUCT SHOWCASE */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Big Section Title - LEFT aligned flush with screen edge */}
          <div className="pl-6 md:pl-10 mb-8 sm:mb-12" style={{ marginLeft: 'calc(-1 * (50vw - 50%))' }}>
            <span className="font-heading-tech text-xl sm:text-2xl md:text-3xl text-[var(--color-brand-primary)]/30 uppercase tracking-[0.3em]">Shop by</span>
            <h2 className="font-heading-tech text-[10vw] md:text-[10vw] font-black text-[var(--color-brand-primary)]/10 uppercase tracking-tighter leading-none -mt-1 whitespace-nowrap -ml-1 md:-ml-2">
              Category
            </h2>
          </div>
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">

            <h2 className="font-heading-tech text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-primary)] uppercase font-bold tracking-tight">
              Gear For Every Adventure
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Backpacks", image: "/products/backpack-beige.png", count: 12 },
              { name: "Footwear", image: "/products/hiking-boots.png", count: 8 },
              { name: "Shelter", image: "/products/tent.png", count: 5 },
              { name: "Accessories", image: "/products/water-bottle.png", count: 24 }
            ].map((category, i) => (
              <Link href={`/shop?category=${category.name}`} key={i} className="group cursor-pointer relative overflow-hidden bg-[#F0EDE6]">
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4 sm:p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/80 to-transparent flex items-end p-4 sm:p-6 transition-opacity duration-300">
                  <div>
                    <h3 className="font-heading-tech text-base sm:text-xl font-bold text-white uppercase tracking-wider">
                      {category.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/70">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: NEWSLETTER */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading-nature text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-primary)] mb-4 sm:mb-6">
            Join the Movement
          </h3>
          <p className="font-sans text-base sm:text-lg text-[var(--color-foreground)]/80 mb-8 sm:mb-10 px-2">
            Get early access to new gear drops, exclusive member pricing, and stories from the trail. 
            Plus, we&apos;ll plant a tree for every signup.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto px-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/50 border border-[var(--color-text-secondary)]/20 text-[var(--color-foreground)] placeholder:text-[var(--color-text-secondary)]/50 font-sans text-sm sm:text-base focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
              required
            />
            <Button variant="primary" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          
          <p className="font-sans text-xs text-[var(--color-foreground)]/40 mt-4 sm:mt-6">
            No spam, ever. Unsubscribe anytime. Read our Privacy Policy.
          </p>
        </div>
      </section>



    </div>
  );
}
