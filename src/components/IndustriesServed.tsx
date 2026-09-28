import { INDUSTRIES, BUSINESS_INFO } from '../data/businessData';
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

interface IndustriesServedProps {
  onOpenQuote: () => void;
  onSelectCategory: (cat: string) => void;
}

export default function IndustriesServed({ onOpenQuote, onSelectCategory }: IndustriesServedProps) {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-amber-800 mb-2">
            Target Sectors & Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-stone-900">
            Engineered for India's Heavy-Duty Woven Sack Printing Industries
          </h2>
          <p className="text-stone-700 text-base sm:text-lg mt-3">
            Whether printing 50kg cattle feed sacks in Tamil Nadu, flour bags in Punjab, or fertilizer bags in Gujarat, 
            Kwality Stereo builds plates tailored to your precise substrate and ink demands.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">
                    {ind.title}
                  </h3>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    HDPE / PP Sacks
                  </span>
                </div>

                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-2">
                  {ind.subtitle}
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {ind.description}
                </p>

                {/* Common bag sizes */}
                <div className="mt-5 space-y-2">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Standard Bag Formats:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.commonBagSizes.map((sz, i) => (
                      <span
                        key={i}
                        className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded border border-stone-200"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typical Artwork Elements */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Engraved Elements:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-stone-600">
                    {ind.typicalDesigns.map((elem, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenge Solved Box */}
                <div className="mt-5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950">
                  <span className="font-bold block mb-0.5">Substrate Solution:</span>
                  {ind.challengesSolved}
                </div>
              </div>

              {/* Action buttons on card */}
              <div className="mt-6 pt-5 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    onSelectCategory(ind.id);
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-stone-900 hover:text-amber-800 flex items-center gap-1.5"
                >
                  <span>View Sample Plates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md bg-stone-900 hover:bg-stone-800 text-white"
                >
                  Configure Spec
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-stone-900">
              Need a Custom Cylinder Repeat or Non-Standard Bag Size?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Mohan directly assists printing supervisors with cylinder repeat math, elongation allowance, and sample proofs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Mohan: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Mohan, I have a custom bag printing plate inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm"
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
