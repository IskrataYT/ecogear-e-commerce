import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-brand-primary)] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="font-heading-tech text-xl sm:text-2xl font-bold tracking-widest mb-3 sm:mb-4">ECOGEAR</div>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
              High-performance outdoor equipment crafted from recycled materials. Based in Boulder, CO.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-heading-tech text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 text-[var(--color-brand-highlight)]">Shop</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=Backpacks" className="hover:text-white transition-colors">Backpacks</Link></li>
              <li><Link href="/shop?category=Outerwear" className="hover:text-white transition-colors">Outerwear</Link></li>
              <li><Link href="/shop?category=Footwear" className="hover:text-white transition-colors">Footwear</Link></li>
              <li><Link href="/shop?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
            <div>
            <h4 className="font-heading-tech text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 text-[var(--color-brand-highlight)]">Company</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading-tech text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 text-[var(--color-brand-highlight)]">Support</h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-xs sm:text-sm text-white/70">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/lifecycle-program" className="hover:text-white transition-colors">LifeCycle™ Program</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <div>© 2026 EcoGear Systems. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
