"use client";

import { useState } from "react";
import Button from "@/app/components/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[var(--color-brand-highlight)]"></span>
              <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">Get in Touch</span>
            </div>
            
            <h1 className="font-heading-tech text-5xl md:text-6xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight mb-8">
              We&apos;re Listening
            </h1>
            
            <p className="font-sans text-lg text-[var(--color-foreground)]/80 leading-relaxed mb-12">
              Questions about gear? Feedback on our sustainability efforts? Or just want to share a story from the trail? We’d love to hear from you.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">HQ</h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)]">
                  1234 Boulder Creek Path<br />
                  Boulder, CO 80302<br />
                  USA
                </p>
              </div>
              
              <div>
                <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">Email</h3>
                <a href="mailto:hello@ecogear.com" className="font-sans text-sm text-[var(--color-brand-primary)] hover:text-[var(--color-brand-highlight)] transition-colors">
                  hello@ecogear.com
                </a>
              </div>

              <div>
                <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">Support Hours</h3>
                <p className="font-sans text-sm text-[var(--color-text-secondary)]">
                  Mon-Fri: 9am - 5pm MST<br />
                  Sat-Sun: Closed (We&apos;re outside)
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 md:p-12 border border-[var(--color-brand-primary)]/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">📨</div>
                  <h3 className="font-heading-tech text-2xl font-bold text-[var(--color-brand-primary)] mb-4">Message Sent</h3>
                  <p className="font-sans text-[var(--color-text-secondary)]">
                    Thanks for reaching out! We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => setSubmitted(false)}
                    showArrow={false}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm font-bold text-[var(--color-brand-primary)] mb-2">Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-brand-primary)]/10 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block font-sans text-sm font-bold text-[var(--color-brand-primary)] mb-2">Email</label>
                      <input type="email" required className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-brand-primary)]/10 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors" placeholder="jane@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-sans text-sm font-bold text-[var(--color-brand-primary)] mb-2">Subject</label>
                    <select className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-brand-primary)]/10 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors">
                      <option>Product Question</option>
                      <option>Order Support</option>
                      <option>Warranty Claim</option>
                      <option>Press Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-bold text-[var(--color-brand-primary)] mb-2">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-brand-primary)]/10 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors" placeholder="How can we help?"></textarea>
                  </div>

                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
