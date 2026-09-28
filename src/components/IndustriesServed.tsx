import { INDUSTRIES, BUSINESS_INFO } from '../data/businessData';
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

interface IndustriesServedProps {
  onOpenQuote: () => void;
  onSelectCategory: (cat: string) => void;
}

export default function IndustriesServed({ onOpenQuote, onSelectCategory }: IndustriesServedProps) {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-paper text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
            Target Sectors & Applications
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
            Engineered for India's Heavy-Duty Woven Sack Printing Industries
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Whether printing 50kg cattle feed sacks in Tamil Nadu, flour bags in Punjab, or fertilizer bags in Gujarat, 
            Kwality Stereo hand-engraves rubber stereos tailored to your precise substrate and ink demands.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-md border border-paper-dark p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-paper-dark mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-ink">
                    {ind.title}
                  </h3>
                  <span className="text-xs font-semibold text-copper bg-copper/10 px-2.5 py-1 rounded-sm border border-copper/20">
                    HDPE / PP Sacks
                  </span>
                </div>

                <div className="text-xs font-semibold text-print-red uppercase tracking-wide mb-2">
                  {ind.subtitle}
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {ind.description}
                </p>

                {/* Common bag sizes */}
                <div className="mt-5 space-y-2">
                  <div className="text-xs font-bold text-ink uppercase tracking-wider">
                    Standard Bag Formats:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.commonBagSizes.map((sz, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-medium bg-paper text-ink px-2.5 py-1 rounded-sm border border-paper-dark"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typical Artwork Elements */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-xs font-bold text-ink uppercase tracking-wider">
                    Engraved Elements:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-muted">
                    {ind.typicalDesigns.map((elem, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-print-red shrink-0" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge Solved Box */}
                <div className="mt-5 p-3.5 rounded-sm bg-copper/10 border border-copper/20 text-xs text-ink">
                  <span className="font-bold block mb-0.5 text-copper">Substrate Solution:</span>
                  {ind.challengesSolved}
                </div>
              </div>

              {/* Action buttons on card */}
              <div className="mt-6 pt-5 border-t border-paper-dark flex items-center justify-between">
                <button
                  onClick={() => {
                    onSelectCategory(ind.id);
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-ink hover:text-print-red flex items-center gap-1.5"
                >
                  <span>View Sample Stereos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md bg-ink hover:bg-ink-soft text-white"
                >
                  Configure Spec
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-12 bg-white rounded-md border border-paper-dark p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-display text-ink">
              Need a Custom Cylinder Repeat or Non-Standard Bag Size?
            </h4>
            <p className="text-xs sm:text-sm text-muted">
              Mohan directly assists printing supervisors with cylinder repeat math, elongation allowance, and sample proofs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Mohan: <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Mohan, I have a custom bag printing rubber stereo inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Specs</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
