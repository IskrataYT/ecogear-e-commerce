// Product Types
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  tag?: string;
  material: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  inStock: boolean;
}

// Product Catalog
export const products: Product[] = [
  {
    id: "1",
    slug: "terra-pack-45l",
    name: "Terra Pack 45L",
    category: "Backpacks",
    price: 289,
    image: "/products/backpack-green.png",
    images: [
      "/products/backpack-green.png",
      "/products/backpack-open.png",
      "/products/backpack-straps.png",
      "/products/backpack-texture.png"
    ],
    tag: "Bestseller",
    material: "100% Recycled Ocean Plastic",
    description: "Our flagship expedition pack, built from recovered ocean fishing nets. The Terra Pack 45L combines rugged durability with a comfortable carry system, making it the perfect companion for multi-day adventures. Every pack removes 12 lbs of plastic from marine ecosystems.",
    features: [
      "OceanWeave™ fabric from recycled fishing nets",
      "Adjustable torso length (16-21 inches)",
      "Integrated rain cover",
      "Hydration reservoir compatible",
      "Multiple access points (top, front, bottom)",
      "Trekking pole attachments"
    ],
    specs: {
      "Volume": "45 Liters",
      "Weight": "1.4 kg (3.1 lbs)",
      "Dimensions": "65 x 32 x 28 cm",
      "Max Load": "18 kg (40 lbs)",
      "Back Length": "Adjustable 16-21 inches",
      "Material": "OceanWeave™ 420D Recycled Nylon"
    },
    inStock: true
  },
  {
    id: "2",
    slug: "summit-shell-jacket",
    name: "Summit Shell Jacket",
    category: "Outerwear",
    price: 349,
    image: "/products/jacket-olive.png",
    images: ["/products/jacket-olive.png"],
    tag: "New Arrival",
    material: "Recycled Polyester Blend",
    description: "A versatile 3-layer shell designed for alpine conditions. The Summit Shell uses our ThermoCore™ technology to regulate temperature while the recycled polyester outer layer provides exceptional water and wind resistance.",
    features: [
      "3-layer waterproof construction (20,000mm)",
      "ThermoCore™ temperature regulation",
      "Fully seam-sealed",
      "Helmet-compatible hood",
      "Pit zips for ventilation",
      "Recycled YKK AquaGuard® zippers"
    ],
    specs: {
      "Waterproofing": "20,000mm",
      "Breathability": "25,000g/m²/24hr",
      "Weight": "380g (Medium)",
      "Material": "100% Recycled Polyester",
      "Fit": "Regular athletic fit",
      "Care": "Machine wash cold"
    },
    inStock: true
  },
  {
    id: "3",
    slug: "basecamp-2p-tent",
    name: "Basecamp 2P Tent",
    category: "Shelter",
    price: 459,
    image: "/products/tent.png",
    images: ["/products/tent.png"],
    tag: "Award Winner",
    material: "Reclaimed Nylon Fabric",
    description: "A 4-season shelter built for serious conditions. The Basecamp 2P features a geodesic design for maximum wind resistance and uses reclaimed nylon from industrial parachutes for the fly. Winner of Outdoor Gear Lab's 'Best Eco Tent 2025'.",
    features: [
      "4-season geodesic design",
      "Reclaimed parachute nylon fly",
      "DAC Featherlite NSL poles",
      "2 doors, 2 vestibules",
      "Snow/sand anchors included",
      "Color-coded setup"
    ],
    specs: {
      "Capacity": "2 Person",
      "Floor Area": "32 sq ft",
      "Peak Height": "42 inches",
      "Packed Weight": "2.1 kg (4.6 lbs)",
      "Packed Size": "46 x 15 cm",
      "Seasons": "4-Season"
    },
    inStock: true
  },
  {
    id: "4",
    slug: "terra-pack-28l",
    name: "Terra Pack 28L",
    category: "Backpacks",
    price: 219,
    image: "/products/backpack-beige.png",
    images: [
      "/products/backpack-beige.png",
      "/products/backpack-lifestyle.png"
    ],
    material: "100% Recycled Ocean Plastic",
    description: "The perfect daypack for trail runs, day hikes, and urban adventures. Built with the same OceanWeave™ technology as our larger packs, the Terra 28L offers versatile organization in a lighter package.",
    features: [
      "OceanWeave™ fabric from recycled fishing nets",
      "Padded laptop sleeve (fits 15\")",
      "Quick-access side pockets",
      "Breathable mesh back panel",
      "Sternum strap with whistle",
      "Reflective accents"
    ],
    specs: {
      "Volume": "28 Liters",
      "Weight": "0.8 kg (1.8 lbs)",
      "Dimensions": "48 x 28 x 22 cm",
      "Max Load": "12 kg (26 lbs)",
      "Material": "OceanWeave™ 420D Recycled Nylon"
    },
    inStock: true
  },
  {
    id: "5",
    slug: "trail-runner-boots",
    name: "Trail Runner Boots",
    category: "Footwear",
    price: 179,
    image: "/products/hiking-boots.png",
    images: ["/products/hiking-boots.png"],
    material: "Recycled Rubber & Hemp",
    description: "Lightweight trail boots with our BioGrip™ soles made from natural rubber. The upper combines recycled polyester with organic hemp for breathability and durability on technical terrain.",
    features: [
      "BioGrip™ natural rubber outsole",
      "Recycled polyester & hemp upper",
      "Ortholite® recycled footbed",
      "Waterproof membrane",
      "Protective toe cap",
      "Gusseted tongue"
    ],
    specs: {
      "Drop": "8mm",
      "Weight": "340g (per shoe, size 9)",
      "Stack Height": "28mm heel / 20mm forefoot",
      "Upper": "50% Recycled Polyester, 50% Hemp",
      "Outsole": "BioGrip™ Natural Rubber",
      "Available Sizes": "US 6-14 (Men) / US 5-12 (Women)"
    },
    inStock: true
  },
  {
    id: "6",
    slug: "alpine-sleeping-bag",
    name: "Alpine Sleeping Bag",
    category: "Shelter",
    price: 329,
    originalPrice: 399,
    image: "/products/sleeping-bag.png",
    images: ["/products/sleeping-bag.png"],
    tag: "Sale",
    material: "Recycled Down & Nylon",
    description: "Our warmest sleeping bag, rated to -20°C. Features responsibly sourced recycled down (RDS certified) and a shell made from post-consumer recycled nylon. Mummy cut for maximum thermal efficiency.",
    features: [
      "Temperature rating: -20°C / -4°F",
      "RDS certified recycled down (800 fill)",
      "Recycled nylon shell",
      "Draft collar and tube",
      "Full-length zipper with anti-snag",
      "Compression stuff sack included"
    ],
    specs: {
      "Temperature Rating": "-20°C / -4°F",
      "Fill": "800 Fill Power Recycled Down",
      "Shell": "20D Recycled Nylon",
      "Weight": "1.2 kg (2.6 lbs)",
      "Packed Size": "20 x 38 cm",
      "Fits Up To": "6'2\" / 188 cm"
    },
    inStock: true
  },
  {
    id: "7",
    slug: "hydro-flask-32oz",
    name: "Hydro Flask 32oz",
    category: "Accessories",
    price: 45,
    image: "/products/water-bottle.png",
    images: ["/products/water-bottle.png"],
    material: "Recycled Stainless Steel",
    description: "Keep drinks cold for 24 hours or hot for 12 with our double-wall vacuum insulated bottle. Made from 90% recycled stainless steel with a powder coat finish from recycled materials.",
    features: [
      "90% recycled stainless steel",
      "Double-wall vacuum insulation",
      "Recycled powder coat finish",
      "Wide mouth for ice",
      "Fits most cup holders",
      "Lifetime warranty"
    ],
    specs: {
      "Capacity": "32 oz / 946 ml",
      "Weight": "450g",
      "Height": "24 cm",
      "Diameter": "7.6 cm",
      "Material": "18/8 Recycled Stainless Steel",
      "Cold Retention": "24 hours"
    },
    inStock: true
  },
  {
    id: "8",
    slug: "merino-beanie",
    name: "Merino Wool Beanie",
    category: "Accessories",
    price: 38,
    image: "/products/beanie-wool.png",
    images: ["/products/beanie-wool.png"],
    material: "100% Recycled Merino Wool",
    description: "A classic beanie made from recycled merino wool sourced from textile waste. Naturally temperature-regulating, moisture-wicking, and odor-resistant.",
    features: [
      "100% recycled merino wool",
      "Naturally temperature regulating",
      "Moisture-wicking",
      "Odor resistant",
      "One size fits most",
      "Machine washable"
    ],
    specs: {
      "Material": "100% Recycled Merino Wool",
      "Weight": "45g",
      "Size": "One Size (fits 21-24 inch head)",
      "Care": "Machine wash cold, lay flat to dry"
    },
    inStock: true
  }
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getCategories(): string[] {
  return [...new Set(products.map(p => p.category))];
}

export function getFeaturedProducts(count: number = 3): Product[] {
  return products.filter(p => p.tag).slice(0, count);
}
