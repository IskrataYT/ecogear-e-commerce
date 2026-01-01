export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-[var(--color-foreground)]">
        <h1 className="font-heading-nature text-4xl md:text-5xl text-[var(--color-brand-primary)]">Privacy Policy</h1>
        
        <section className="space-y-4 font-sans">
          <p className="text-sm text-[var(--color-text-secondary)]">Last Updated: January 1, 2026</p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">1. Information We Collect</h2>
          <p className="leading-relaxed opacity-80">
            We collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This may include your name, email address, shipping address, and payment information.
          </p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="leading-relaxed opacity-80">
            We use your information to process transactions, send you order updates, improvements to our website, and (with your consent) marketing communications about our eco-friendly initiatives.
          </p>

          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">3. Data Protection</h2>
          <p className="leading-relaxed opacity-80">
            We implement industry-standard security measures to protect your personal data. We do not sell your personal data to third parties.
          </p>
        </section>
      </div>
    </div>
  );
}
