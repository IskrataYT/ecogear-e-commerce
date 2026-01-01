import Image from "next/image";

import Link from "next/link";
import Button from "@/app/components/Button";



const milestones = [
  { year: "2019", title: "The Beginning", description: "Founded in a Boulder garage with one goal: prove that recycled materials can outperform virgin plastics." },
  { year: "2020", title: "OceanWeave™ Launch", description: "Introduced our proprietary fabric made from recovered fishing nets. First product: the Terra Pack." },
  { year: "2021", title: "B Corp Certified", description: "Became a certified B Corporation, meeting the highest standards of social and environmental performance." },
  { year: "2022", title: "100K lbs Milestone", description: "Intercepted and recycled our 100,000th pound of ocean plastic. Expanded to footwear category." },
  { year: "2023", title: "LifeCycle™ Program", description: "Launched our take-back program. Any EcoGear product can be returned for repair, recycling, or upcycling." },
  { year: "2024", title: "Carbon Neutral", description: "Achieved carbon neutrality across our entire supply chain, from raw material to your doorstep." },
  { year: "2025", title: "Gear Lab Recognition", description: "Won 'Best Eco Brand' and our Basecamp tent named 'Best 4-Season Tent' by Outdoor Gear Lab." },
  { year: "2026", title: "The Future", description: "Expanding to Europe and Asia. Goal: 1 million pounds of plastic recycled by end of year." },
];

const values = [
  { icon: "🌊", title: "Ocean First", description: "Every product starts with ocean-recovered plastic. We partner with fishing communities worldwide to intercept waste before it harms marine life." },
  { icon: "⚡", title: "Performance Uncompromised", description: "Sustainability means nothing if the gear fails. Our products are tested by professional guides in the most demanding conditions on Earth." },
  { icon: "♻️", title: "Circular by Design", description: "We design for disassembly. At end of life, every component can be separated and recycled into new products." },
  { icon: "🤝", title: "Fair Labor", description: "Every worker in our supply chain earns a living wage. We audit our factories annually and publish the results." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">

      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[var(--color-brand-primary)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[var(--color-brand-highlight)]"></span>
            <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-highlight)] uppercase">Our Story</span>
          </div>
          <h1 className="font-heading-tech text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
            Built Different.<br />
            <span className="text-[var(--color-brand-highlight)]">For a Reason.</span>
          </h1>
          <p className="font-sans text-xl text-white/80 max-w-2xl leading-relaxed">
            We founded EcoGear because we were tired of choosing between performance and planet. 
            So we decided to stop choosing.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square">
            <Image
              src="/products/backpack-lifestyle.png"
              alt="EcoGear in action"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading-nature text-4xl md:text-5xl text-[var(--color-brand-primary)] leading-tight mb-8">
              Every year, 640,000 tons of fishing nets are abandoned in our oceans.
            </h2>
            <p className="font-sans text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-6">
              These &quot;ghost nets&quot; continue fishing for decades, entangling whales, dolphins, and sea turtles. 
              They break down into microplastics that enter the food chain and end up on our plates.
            </p>
            <p className="font-sans text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-8">
              We intercept these nets before they sink to the ocean floor. We clean them, shred them, 
              and spin them into OceanWeave™—the most durable outdoor fabric on the market. 
              <strong className="text-[var(--color-brand-primary)]"> Problem solved. Gear created.</strong>
            </p>
            <div className="flex gap-8">
              <div>
                <div className="font-heading-tech text-4xl font-bold text-[var(--color-brand-highlight)]">847K</div>
                <div className="font-sans text-sm text-[var(--color-text-secondary)]">Lbs Recycled</div>
              </div>
              <div>
                <div className="font-heading-tech text-4xl font-bold text-[var(--color-brand-highlight)]">12</div>
                <div className="font-sans text-sm text-[var(--color-text-secondary)]">Year Avg Lifespan</div>
              </div>
              <div>
                <div className="font-heading-tech text-4xl font-bold text-[var(--color-brand-highlight)]">0</div>
                <div className="font-sans text-sm text-[var(--color-text-secondary)]">Landfill Waste</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading-tech text-4xl md:text-5xl text-[var(--color-brand-primary)] uppercase font-bold tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 border border-[var(--color-brand-primary)]/10 hover:border-[var(--color-brand-highlight)] transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-[var(--color-foreground)]/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="sustainability" className="py-24 px-6 md:px-12 bg-[var(--color-brand-primary)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading-tech text-4xl md:text-5xl uppercase font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="font-sans text-lg text-white/70">From garage startup to global impact</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                    <div className="font-heading-tech text-2xl font-bold text-[var(--color-brand-highlight)] mb-2">{milestone.year}</div>
                    <h3 className="font-heading-tech text-lg font-bold mb-2">{milestone.title}</h3>
                    <p className="font-sans text-sm text-white/70">{milestone.description}</p>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-[var(--color-brand-highlight)] rounded-full -translate-x-1/2"></div>
                  
                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading-nature text-4xl md:text-5xl text-[var(--color-brand-primary)] mb-6">
            Ready to Gear Up Responsibly?
          </h2>
          <p className="font-sans text-lg text-[var(--color-foreground)]/80 mb-10">
            Every purchase removes plastic from the ocean and supports fair labor practices worldwide.
          </p>
          <Link href="/shop">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>


    </div>
  );
}
