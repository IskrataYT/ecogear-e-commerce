export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto space-y-8 text-[var(--color-foreground)]">
        <h1 className="font-heading-nature text-4xl md:text-5xl text-[var(--color-brand-primary)]">Terms of Service</h1>
        
        <section className="space-y-4 font-sans">
          <p className="text-sm text-[var(--color-text-secondary)]">Last Updated: January 1, 2026</p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="leading-relaxed opacity-80">
            By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
          </p>
          
          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">2. Use of Services</h2>
          <p className="leading-relaxed opacity-80">
            You agree to use our website only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h2 className="text-2xl font-bold font-heading-tech mt-8 mb-4">3. Product Information</h2>
          <p className="leading-relaxed opacity-80">
            We strive to display our products as accurately as possible. However, we cannot guarantee that your monitor's display of any color will be accurate.
          </p>
        </section>
      </div>
    </div>
  );
}
