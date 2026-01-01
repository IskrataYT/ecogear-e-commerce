export default function Accessibility() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-[var(--color-foreground)]">
        <h1 className="font-heading-nature text-4xl md:text-5xl text-[var(--color-brand-primary)]">Accessibility Statement</h1>
        
        <section className="space-y-4 font-sans">
          <p className="text-sm text-[var(--color-text-secondary)]">Last Updated: January 1, 2026</p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">Our Commitment</h2>
          <p className="leading-relaxed opacity-80">
            EcoGear is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">Conformance Status</h2>
          <p className="leading-relaxed opacity-80">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We are partially conformant with WCAG 2.1 level AA.
          </p>

          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">Feedback</h2>
          <p className="leading-relaxed opacity-80">
            We welcome your feedback on the accessibility of EcoGear. Please let us know if you encounter accessibility barriers on our site.
          </p>
        </section>
      </div>
    </div>
  );
}
