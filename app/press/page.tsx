import Link from "next/link";
import Image from "next/image";

const pressItems = [
  {
    outlet: "Outside Magazine",
    date: "Dec 12, 2025",
    title: "EcoGear is changing the way we think about recycled materials.",
    excerpt: "The Boulder-based startup proves that sustainable gear doesn't have to compromise on performance. Their new OceanWeave fabric is tougher than Cordura.",
    link: "#"
  },
  {
    outlet: "Gear Patrol",
    date: "Nov 28, 2025",
    title: "The Best Hiking Backpacks of 2026",
    excerpt: "The EcoGear Terra Pack 45L takes our top spot this year. Lightweight, bombproof, and made entirely from ghost nets pulled from the Pacific.",
    link: "#"
  },
  {
    outlet: "Forbes",
    date: "Oct 15, 2025",
    title: "Meet the Outdoor Brand Reclaiming the Wilderness",
    excerpt: "EcoGear's founder discusses the challenges of building a circular supply chain and why profitability and planet-positivity aren't mutually exclusive.",
    link: "#"
  },
  {
    outlet: "REI Co-op Journal",
    date: "Sep 05, 2025",
    title: "Field Test: The Thermocore Jacket",
    excerpt: "We took EcoGear's latest insulation piece into the Canadian Rockies. Here's how it held up against -20°C temps.",
    link: "#"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">In The News</span>
          <h1 className="font-heading-tech text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight mt-4">
            Press & Media
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {pressItems.map((item, i) => (
             <a href={item.link} key={i} className="group block bg-white border border-[var(--color-brand-primary)]/10 p-8 hover:border-[var(--color-brand-primary)] transition-colors">
               <div className="flex justify-between items-start mb-6">
                 <span className="font-heading-tech text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-wider">{item.outlet}</span>
                 <span className="font-sans text-xs text-[var(--color-text-secondary)]">{item.date}</span>
               </div>
               <h2 className="font-heading-nature text-2xl text-[var(--color-brand-primary)] mb-4 group-hover:text-[var(--color-brand-secondary)] transition-colors">
                 {item.title}
               </h2>
               <p className="font-sans text-[var(--color-foreground)]/70 leading-relaxed mb-6">
                 {item.excerpt}
               </p>
               <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand-primary)] uppercase tracking-widest group-hover:gap-3 transition-all">
                 Read Article <span>→</span>
               </div>
             </a>
           ))}
        </div>

        <div className="mt-20 text-center border-t border-[var(--color-brand-primary)]/10 pt-12">
           <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-4">Media Inquiries</h3>
           <p className="font-sans text-[var(--color-text-secondary)] mb-6">
             For press kits, high-res assets, and interview requests, please contact our media team.
           </p>
           <a href="mailto:press@ecogear.com" className="font-sans text-[var(--color-brand-primary)] hover:text-[var(--color-brand-highlight)] underline">
             press@ecogear.com
           </a>
        </div>
      </div>
    </div>
  );
}
