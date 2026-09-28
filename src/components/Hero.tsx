import { Phone, MessageCircle, ArrowRight, ShieldCheck, Truck, Layers, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import heroImage from '../assets/images/real/samrudhi-stereo-hero.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-stone-800">
      {/* Subtle Industrial Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Call to Action, Contact */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-400 font-medium tracking-wide">
              <span className="text-amber-400 font-semibold">Engraved Rubber Stereos for Bag Printing</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Krishnagiri & Bangalore</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Pan-India Fast Dispatch</span>
            </div>

            {/* Exact Required Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold font-display tracking-tight text-white leading-tight">
              <span className="text-amber-400">Kwality Stereo</span> — Rubber Stereo Manufacturer for Packaging Bags
            </h1>

            {/* Clear, accurate description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              We hand-cut and engrave designs into vulcanized rubber blocks — creating high-relief rubber stereos engineered for rotogravure and flexographic presses. 
              We build precision stereos for <strong>cattle feed bags, poultry feed sacks, flour mill (atta) bags, fertilizer packaging</strong>, and all PP/HDPE woven sack bags.
            </p>

            {/* Prominent Contact Block with Mohan */}
            <div className="bg-stone-800/90 border border-stone-700/80 rounded-xl p-4 sm:p-5 shadow-lg max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    Direct Contact · Manufacturing & Dispatch
                  </div>
                  <div className="text-stone-200 text-sm mt-0.5">
                    Speak with <span className="text-white font-bold">{BUSINESS_INFO.founder}</span>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-display font-black text-white hover:text-amber-400 transition-colors mt-1"
                  >
                    <Phone className="w-6 h-6 text-amber-500 fill-amber-500/20" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all shadow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-md"
              >
                <span>Calculate Stereo Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm sm:text-base border border-stone-700 transition-all"
              >
                <span>View Sample Brands & Stereos</span>
              </a>
            </div>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800/80 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>2.8mm – 7mm Deep Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Multi-Language Engraving</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Pan-India Express Logistics</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Resolution Industrial Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-700/80 shadow-2xl bg-stone-950 group">
              <img
                src={heroImage}
                alt="Real engraved rubber stereo hand-carved by Kwality Stereo, mounted on a printing cylinder for packaging bags"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Overlay specification highlight on image */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left bg-stone-950/85 backdrop-blur-xs border-t border-stone-800">
                <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                  <span>Vulcanized Rubber Printing Stereo</span>
                  <span>Press Grade</span>
                </div>
                <h3 className="text-white font-display font-bold text-sm sm:text-base">
                  Deep-Relief Engraving for Woven PP Sack Looms
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Sharply defined relief borders (corn, wheat, cattle) and anti-ink-spread letters formulated for rough bag surfaces.
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-800">
                  <span>Works: Krishnagiri & Bangalore</span>
                  <span className="text-amber-300 font-semibold">Delivery All Over India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
