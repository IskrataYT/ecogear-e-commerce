"use client";

import { useState, useMemo } from "react";

import ProductCard from "@/app/components/ProductCard";
import { products, getCategories, Product } from "@/app/lib/products";
import { useCart } from "@/app/context/CartContext";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const { addToCart } = useCart();
  
  const categories = ["All", ...getCategories()];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        // Featured items first, then by id
        result.sort((a, b) => {
          if (a.tag && !b.tag) return -1;
          if (!a.tag && b.tag) return 1;
          return 0;
        });
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

      
      {/* Header */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-[var(--color-brand-highlight)]"></span>
            <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">Shop</span>
          </div>
          <h1 className="font-heading-tech text-5xl md:text-6xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight">
            All Gear
          </h1>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-[var(--color-brand-primary)]/10">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 font-heading-tech text-xs tracking-widest uppercase transition-colors ${
                    selectedCategory === category
                      ? "bg-[var(--color-brand-primary)] text-white"
                      : "bg-transparent text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="font-sans text-sm text-[var(--color-text-secondary)]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="font-heading-tech text-sm bg-transparent border border-[var(--color-brand-primary)]/20 px-4 py-2 text-[var(--color-brand-primary)] focus:outline-none focus:border-[var(--color-brand-primary)]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="font-sans text-sm text-[var(--color-text-secondary)]">
              Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-sans text-lg text-[var(--color-text-secondary)]">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
