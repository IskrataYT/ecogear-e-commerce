import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/lib/products";

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
  onQuickAdd?: (product: Product) => void;
}

export default function ProductCard({ product, showQuickAdd = true, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-[4/5] bg-[#F5F5F5] relative overflow-hidden mb-6">
          {/* Tag */}
          {product.tag && (
            <div className={`absolute top-4 left-4 z-10 text-white text-[10px] font-heading-tech px-3 py-1.5 uppercase tracking-widest ${
              product.tag === "Sale" ? "bg-red-600" : "bg-[var(--color-brand-primary)]"
            }`}>
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
          {showQuickAdd && onQuickAdd && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onQuickAdd(product);
                }}
                className="w-full py-3 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] font-heading-tech text-xs tracking-widest uppercase font-bold hover:bg-white transition-colors"
              >
                Quick Add
              </button>
            </div>
          )}
        </div>
      </Link>
      
      {/* Product Info */}
      <Link href={`/products/${product.slug}`}>
        <div className="space-y-2">
          <div className="font-sans text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
            {product.category}
          </div>
          <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-highlight)] transition-colors">
            {product.name}
          </h3>
          <div className="font-sans text-xs text-[var(--color-brand-secondary)]">
            {product.material}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-sm text-[var(--color-text-secondary)] line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
