import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";

export default function LifeCyclePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[var(--color-brand-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
             {/* Pattern or texture could go here */}
             <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-[var(--color-brand-highlight)] rounded-full">
            <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-highlight)] uppercase">Circular Economy</span>
          </div>
          <h1 className="font-heading-tech text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
            Close The Loop
          </h1>
          <p className="font-sans text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            The end of the trail shouldn&apos;t be a landfill. <br/>
            Our LifeCycle™ Program ensures every piece of EcoGear has a second, third, or fourth life.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" showArrow={true}>
              Start a Return
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading-nature text-4xl text-[var(--color-brand-primary)] mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {/* Step 1 */}
            <div className="relative p-8 bg-white border border-[var(--color-brand-primary)]/10 group hover:border-[var(--color-brand-highlight)] transition-colors">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] font-heading-tech text-xl font-bold flex items-center justify-center rounded-full">1</div>
              <h3 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mt-6 mb-4">Send It Back</h3>
              <p className="font-sans text-[var(--color-text-secondary)]">
                Got old EcoGear that's seen better days? Or just ready for an upgrade? Pack it up and send it back to us. We cover the shipping.
              </p>
            </div>
            
             {/* Step 2 */}
             <div className="relative p-8 bg-white border border-[var(--color-brand-primary)]/10 group hover:border-[var(--color-brand-highlight)] transition-colors">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] font-heading-tech text-xl font-bold flex items-center justify-center rounded-full">2</div>
              <h3 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mt-6 mb-4">We Assess</h3>
              <p className="font-sans text-[var(--color-text-secondary)]">
                Our repair team inspects it. If it can be repaired, we fix it and resell it as "Re-Geared". If not, we shred it into raw OceanWeave™ material.
              </p>
            </div>
            
             {/* Step 3 */}
             <div className="relative p-8 bg-white border border-[var(--color-brand-primary)]/10 group hover:border-[var(--color-brand-highlight)] transition-colors">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[var(--color-brand-highlight)] text-[var(--color-brand-primary)] font-heading-tech text-xl font-bold flex items-center justify-center rounded-full">3</div>
              <h3 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mt-6 mb-4">You Get Credit</h3>
              <p className="font-sans text-[var(--color-text-secondary)]">
                You receive 20% of the original purchase price as store credit for your next adventure. The planet gets one less piece of waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 md:px-12 bg-[var(--color-brand-primary)] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <h2 className="font-heading-tech text-4xl md:text-5xl font-bold uppercase mb-6">Nothing Wasted. Everything Gained.</h2>
             <p className="font-sans text-lg text-white/70 leading-relaxed mb-8">
               Since launching LifeCycle™, we’ve diverted over 12,000 lbs of gear from landfills. Our goal is to become the first fully circular outdoor brand by 2030.
             </p>
             <Link href="/shop" className="text-[var(--color-brand-highlight)] font-heading-tech tracking-widest uppercase hover:underline">
                Shop Recycled Gear →
             </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <div className="aspect-square bg-white/10 p-8 flex flex-col justify-center items-center text-center">
                <span className="text-4xl md:text-5xl font-bold font-heading-tech text-[var(--color-brand-highlight)]">12K+</span>
                <span className="text-xs uppercase tracking-widest mt-2">Lbs Diverted</span>
             </div>
             <div className="aspect-square bg-white/10 p-8 flex flex-col justify-center items-center text-center">
                <span className="text-4xl md:text-5xl font-bold font-heading-tech text-[var(--color-brand-highlight)]">4.5K</span>
                <span className="text-xs uppercase tracking-widest mt-2">Items Repaired</span>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
