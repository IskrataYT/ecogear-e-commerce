export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading-tech text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight mb-12">
          Shipping & Returns
        </h1>

        <div className="space-y-16">
          
          {/* Shipping */}
          <section>
            <h2 className="font-heading-nature text-3xl text-[var(--color-brand-primary)] mb-6">Shipping Policy</h2>
            <div className="bg-white p-8 border border-[var(--color-brand-primary)]/10 space-y-6">
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">Free Shipping</h3>
                <p className="font-sans text-[var(--color-text-secondary)]">We offer free standard shipping (EcoPost) on all orders over $100 within the continental US.</p>
              </div>
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">Carbon Neutral</h3>
                <p className="font-sans text-[var(--color-text-secondary)]">All shipments are 100% carbon offset. We partner with Pachama to fund reforestation projects that capture the same amount of CO2 emitted by your delivery.</p>
              </div>
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">Processing Time</h3>
                <p className="font-sans text-[var(--color-text-secondary)]">Orders are processed within 1-2 business days. Orders placed before 12pm MST usually ship same-day.</p>
              </div>
            </div>
          </section>

          {/* Returns */}
          <section>
            <h2 className="font-heading-nature text-3xl text-[var(--color-brand-primary)] mb-6">Returns & Exchanges</h2>
            <div className="bg-white p-8 border border-[var(--color-brand-primary)]/10 space-y-6">
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">30-Day "Ironclad" Guarantee</h3>
                <p className="font-sans text-[var(--color-text-secondary)]">If you&apos;re not fully stoked on your gear, return it within 30 days for a full refund. No questions asked. (Okay, maybe one question: "How can we do better?")</p>
              </div>
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">How to Return</h3>
                <ol className="list-decimal list-inside font-sans text-[var(--color-text-secondary)] space-y-2 mt-2">
                  <li>Visit our <a href="#" className="underline text-[var(--color-brand-primary)]">Returns Portal</a>.</li>
                  <li>Enter your order number and email.</li>
                  <li>Print the prepaid shipping label (printed on recycled paper, please!).</li>
                  <li>Drop off at any UPS location.</li>
                </ol>
              </div>
              <div>
                <h3 className="font-heading-tech text-lg font-bold mb-2">LifeCycle™ Take-Back</h3>
                <p className="font-sans text-[var(--color-text-secondary)]">Beyond 30 days? Use our <a href="/lifecycle-program" className="underline text-[var(--color-brand-primary)]">LifeCycle Program</a> to recycle old gear for store credit.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
