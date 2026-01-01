import Button from "@/app/components/Button";

const jobs = [
  {
    title: "Product Designer (Gear)",
    department: "Design",
    location: "Boulder, CO",
    type: "Full-time"
  },
  {
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Boulder, CO",
    type: "Full-time"
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time"
  },
  {
    title: "Sustainability Analyst",
    department: "Impact",
    location: "Boulder, CO",
    type: "Full-time"
  },
  {
    title: "Customer Experience Associate",
    department: "Support",
    location: "Remote",
    type: "Part-time"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-heading-tech text-xs tracking-[0.2em] text-[var(--color-brand-secondary)] uppercase">Join The Team</span>
          <h1 className="font-heading-tech text-4xl md:text-6xl font-bold text-[var(--color-brand-primary)] uppercase tracking-tight mt-4 mb-8">
            Work For The Wild
          </h1>
          <p className="font-sans text-lg text-[var(--color-foreground)]/80 leading-relaxed">
            We’re a team of climbers, skiers, coders, and designers united by a single mission: to prove that business can be a force for good. We work hard, play outside, and leave the campsite better than we found it.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
           <div className="bg-white p-8 border border-[var(--color-brand-primary)]/10 text-center">
             <div className="text-4xl mb-4">🏔️</div>
             <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">Powder Days</h3>
             <p className="font-sans text-sm text-[var(--color-text-secondary)]">Flexible hours when the mountains are calling. Seasonal ski/park pass reimbursement.</p>
           </div>
           <div className="bg-white p-8 border border-[var(--color-brand-primary)]/10 text-center">
             <div className="text-4xl mb-4">⚕️</div>
             <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">Full Health</h3>
             <p className="font-sans text-sm text-[var(--color-text-secondary)]">100% premium coverage for you and your dependents. Medical, dental, and vision.</p>
           </div>
           <div className="bg-white p-8 border border-[var(--color-brand-primary)]/10 text-center">
             <div className="text-4xl mb-4">🛍️</div>
             <h3 className="font-heading-tech text-lg font-bold text-[var(--color-brand-primary)] mb-2">Gear Allowance</h3>
             <p className="font-sans text-sm text-[var(--color-text-secondary)]">$1000 annual credit for EcoGear products, plus pro-deals with industry partners.</p>
           </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="font-heading-nature text-3xl text-[var(--color-brand-primary)] mb-8">Open Positions</h2>
          
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-[var(--color-brand-primary)]/10 p-6 hover:border-[var(--color-brand-primary)] transition-colors cursor-pointer">
                 <div>
                   <h3 className="font-heading-tech text-xl font-bold text-[var(--color-brand-primary)] mb-1 group-hover:text-[var(--color-brand-secondary)] transition-colors">{job.title}</h3>
                   <div className="flex gap-4 font-sans text-sm text-[var(--color-text-secondary)]">
                     <span>{job.department}</span>
                     <span>•</span>
                     <span>{job.location}</span>
                     <span>•</span>
                     <span>{job.type}</span>
                   </div>
                 </div>
                 <div className="mt-4 md:mt-0">
                    <Button variant="outline" size="sm" showArrow={true}>Apply Now</Button>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
