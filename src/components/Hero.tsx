import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import heroImage from '../assets/images/real/samrudhi-stereo-hero.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative bg-ink text-paper overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#333333]">
      {/* Subtle Industrial Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C8102E 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headlines, Call to Action, Contact */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] font-semibold font-display tracking-wide text-white leading-tight">
              Rubber Stereo Manufacturer for Packaging Bags
            </h1>

            {/* Clear, concise description */}
            <p className="text-base sm:text-lg text-[#D0CCC2] max-w-2xl leading-relaxed">
              We hand-cut and engrave rubber stereos for cattle feed, poultry feed, flour mill, and fertilizer packaging bags.
            </p>

            {/* Prominent Contact Block with Mohan */}
            <div className="bg-ink-soft border border-[#333333] rounded-md p-4 sm:p-5 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-print-red font-bold">
                    Direct Contact · Manufacturing & Dispatch
                  </div>
                  <div className="text-[#D0CCC2] text-sm mt-0.5">
                    Speak with <span className="text-white font-bold">{BUSINESS_INFO.founder}</span>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-mono font-medium text-white hover:text-print-red transition-colors mt-1 tracking-tight"
                  >
                    <Phone className="w-6 h-6 text-print-red fill-print-red/20" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm transition-all"
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-sm sm:text-base transition-all"
              >
                <span>Calculate Stereo Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink-soft hover:bg-[#333333] text-paper font-semibold text-sm sm:text-base border border-[#333333] transition-all"
              >
                <span>View Sample Brands & Stereos</span>
              </a>
            </div>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#333333] text-xs sm:text-sm text-[#D0CCC2]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-print-red shrink-0" />
                <span><span className="font-mono font-medium">2.8mm – 7mm</span> Deep Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-print-red shrink-0" />
                <span>Multi-Language Engraving</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-print-red shrink-0" />
                <span>Pan-India Express Logistics</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Resolution Industrial Hero Image */}
          <div className="lg:col-span-5">
            <div className="rounded-md overflow-hidden border border-[#333333] bg-ink-soft">
              <div className="bg-ink flex items-center justify-center p-3 sm:p-4">
                <img
                  src={heroImage}
                  alt="Real engraved rubber stereo hand-carved by Kwality Stereo, mounted on a printing cylinder for packaging bags"
                  className="w-full h-auto max-h-[460px] object-contain rounded-sm"
                />
              </div>

              {/* Specification highlight below image */}
              <div className="p-4 sm:p-5 text-left bg-ink-soft border-t border-[#333333]">
                <div className="flex items-center justify-between text-xs text-print-red font-bold uppercase tracking-wider mb-1">
                  <span>Vulcanized Rubber Printing Stereo</span>
                  <span className="text-copper">Press Grade</span>
                </div>
                <h3 className="text-white font-display font-semibold text-xs sm:text-sm">
                  Deep-Relief Engraving for Woven PP Sack Looms
                </h3>
                <p className="text-xs text-[#D0CCC2] mt-1">
                  Sharply defined relief borders (corn, wheat, cattle) and anti-ink-spread letters formulated for rough bag surfaces.
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#9E9B93] pt-2 border-t border-[#333333]">
                  <span>Works: Krishnagiri & Bangalore</span>
                  <span className="text-print-red font-semibold">Delivery All Over India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
