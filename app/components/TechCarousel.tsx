"use client";

import { useState } from "react";
import Image from "next/image";

interface Technology {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stats: { value: string; label: string }[];
}

const technologies: Technology[] = [
  {
    id: "oceanweave",
    name: "OceanWeave™",
    tagline: "Flagship Technology",
    description: "Our proprietary fabric woven from ocean-recovered fishing nets. Each backpack removes 12 lbs of plastic from marine ecosystems. Stronger than virgin nylon, softer to the touch, and completely waterproof.",
    image: "/tech-oceanweave.png",
    stats: [
      { value: "420D", label: "Denier Rating" },
      { value: "12 lbs", label: "Plastic Per Pack" },
      { value: "2x", label: "Abrasion Resistance" },
    ],
  },
  {
    id: "thermocore",
    name: "ThermoCore™",
    tagline: "Thermal System",
    description: "Recycled aluminum fibers create a heat-reflective matrix that keeps you warm without bulk. Tested in real alpine conditions by professional mountaineers down to -20°C.",
    image: "/tech-thermocore.png",
    stats: [
      { value: "-20°C", label: "Tested Rating" },
      { value: "40%", label: "Weight Saved" },
      { value: "85%", label: "Heat Retention" },
    ],
  },
  {
    id: "biogrip",
    name: "BioGrip™",
    tagline: "Traction System",
    description: "Natural rubber from sustainable plantations. Zero petroleum, maximum grip. Our compound outperforms synthetic alternatives on wet rock and loose scree while biodegrading at end of life.",
    image: "/tech-biogrip.png",
    stats: [
      { value: "100%", label: "Petroleum-Free" },
      { value: "3x", label: "Wet Grip" },
      { value: "10yr", label: "Sole Warranty" },
    ],
  },
  {
    id: "lifecycle",
    name: "LifeCycle™",
    tagline: "Circular Program",
    description: "Every product includes a prepaid return label. We repair, recycle, or upcycle worn gear into new products. Nothing we make ever sees a landfill—guaranteed.",
    image: "/tech-lifecycle.png",
    stats: [
      { value: "0", label: "Landfill Waste" },
      { value: "Free", label: "Returns Forever" },
      { value: "12yr", label: "Avg Lifespan" },
    ],
  },
];

export default function TechCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTech = technologies[activeIndex];

  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left: Image */}
      <div className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[#F0EDE6]">
        <Image
          src={activeTech.image}
          alt={activeTech.name}
          fill
          className="object-cover transition-opacity duration-500"
          key={activeTech.id}
        />
        
        {/* Navigation Dots - Mobile */}

      </div>

      {/* Right: Content */}
      <div>
        {/* Technology Tabs - Desktop */}
        <div className="hidden lg:flex gap-1 mb-10 border-b border-[var(--color-brand-primary)]/10">
          {technologies.map((tech, i) => (
            <button
              key={tech.id}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-4 font-heading-tech text-xs tracking-widest uppercase transition-all border-b-2 -mb-px ${
                i === activeIndex
                  ? "border-[var(--color-brand-highlight)] text-[var(--color-brand-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]"
              }`}
            >
              {tech.name.replace("™", "")}
            </button>
          ))}
        </div>

        {/* Active Technology Content */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[var(--color-brand-highlight)]"></span>
            <span className="font-heading-tech text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">
              {activeTech.tagline}
            </span>
          </div>
          
          <h3 className="font-heading-tech text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)]">
            {activeTech.name}
          </h3>
          
          <p className="font-sans text-base sm:text-lg text-[var(--color-foreground)]/70 leading-relaxed">
            {activeTech.description}
          </p>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-10 pt-2 sm:pt-4">
            {activeTech.stats.map((stat, i) => (
              <div key={i}>
                <div className="font-heading-tech text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-brand-highlight)]">
                  {stat.value}
                </div>
                <div className="font-sans text-[10px] sm:text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next Buttons - Mobile */}
          <div className="flex gap-4 pt-6 lg:hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === 0 ? technologies.length - 1 : activeIndex - 1)}
              className="w-12 h-12 border border-[var(--color-brand-primary)]/20 flex items-center justify-center hover:border-[var(--color-brand-highlight)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex === technologies.length - 1 ? 0 : activeIndex + 1)}
              className="w-12 h-12 border border-[var(--color-brand-primary)]/20 flex items-center justify-center hover:border-[var(--color-brand-highlight)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
