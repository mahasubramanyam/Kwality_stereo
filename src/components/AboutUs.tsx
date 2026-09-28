import { CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import sackShowcaseImage from '../assets/images/real/suvarna-printed-sack.jpg';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-paper text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-copper mb-2">
            About Mohan & Kwality Stereo
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
            Built for the Demands of Woven Sack Packaging
          </h2>
          <p className="text-base sm:text-lg text-muted mt-3 leading-relaxed">
            Led by <strong>Mohan</strong>, Kwality Stereo hand-engraves deep-relief rubber printing plates engineered specifically for coarse PP and HDPE woven fabric.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story, Credentials, Mohan's Promise */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-md border border-paper-dark space-y-5">
              <h3 className="text-lg sm:text-xl font-semibold font-display text-ink">
                Crafting Stereos that Run 300,000+ Sacks Without Distortion
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Unlike thin photopolymer plates that crack on rough sack weave, our vulcanized rubber stereos cushion each impression to press ink deep into woven tapes with razor-sharp edge definition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-print-red pl-3">
                  <div className="font-display font-semibold text-base sm:text-lg text-ink">Krishnagiri Works</div>
                  <div className="text-xs text-muted mt-0.5">
                    Heavy-duty vulcanizing, mold engraving, and standard L30x10 pack manufacturing in Tamil Nadu.
                  </div>
                </div>

                <div className="border-l-2 border-print-red pl-3">
                  <div className="font-display font-semibold text-base sm:text-lg text-ink">Bangalore Dispatch Hub</div>
                  <div className="text-xs text-muted mt-0.5">
                    Client sampling, cylinder repeat dimension verification, and express interstate dispatch.
                  </div>
                </div>
              </div>

              {/* Direct commitment from Mohan */}
              <div className="bg-paper p-4 rounded-md border border-paper-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-print-red text-white flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm">Direct Commitment by Mohan</div>
                    <div className="text-xs text-muted">Managing Proprietor · <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-ink hover:bg-ink-soft text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-print-red" />
                    <span>Call Mohan</span>
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-paper-dark hover:bg-[#D8D0C2] text-ink text-xs font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Why Mills Across India Choose Kwality Stereo */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-xs text-ink uppercase tracking-wider">
                Our Manufacturing Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Zero Shrinkage Vulcanization:</strong> Stereos maintain pitch dimensions over hundreds of thousands of bag impressions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Solvent & Water Ink Resilient:</strong> Compatible with all common bag printing ink chemistry without swelling.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Native Script Typesetting:</strong> High-legibility Tamil, Punjabi, Hindi, Bengali, Telugu, and English.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Pan-India Doorstep Delivery:</strong> Packed in shockproof industrial crates and dispatched within 24–48 hours.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual of a real printed sack from a Kwality Stereo rubber stereo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-md overflow-hidden border border-paper-dark bg-white">
              <div className="bg-paper flex items-center justify-center p-3 sm:p-4">
                <img
                  src={sackShowcaseImage}
                  alt="Real cattle feed woven PP sack printed using a Kwality Stereo hand-engraved rubber stereo"
                  className="w-full h-auto max-h-[460px] object-contain rounded-sm"
                />
              </div>
              <div className="p-5 bg-white border-t border-paper-dark text-left">
                <div className="flex items-center justify-between text-xs text-copper font-bold uppercase tracking-wider mb-1">
                  <span>Industrial Proofing</span>
                  <span>PP Woven Sacks</span>
                </div>
                <h4 className="font-display font-semibold text-sm sm:text-base text-ink">
                  Flour Mill Atta & Cattle Feed Sacks in Production
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Notice the sharp contrast of the brand headers, cattle figures, and detailed crop borders printed cleanly on textured woven tapes without halos or missing ink dots.
                </p>
                <div className="mt-4 pt-3 border-t border-paper-dark flex items-center justify-between text-xs text-muted">
                  <span>Stereo Durability: <span className="font-mono font-medium">250k - 400k</span> sacks</span>
                  <a href="#gallery" className="text-print-red font-bold hover:underline inline-flex items-center gap-1">
                    Explore Samples <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3.5 rounded-md border border-paper-dark">
                <div className="font-mono text-xl sm:text-2xl font-medium text-print-red">100%</div>
                <div className="text-[11px] text-muted font-medium">India Delivery</div>
              </div>
              <div className="bg-white p-3.5 rounded-md border border-paper-dark">
                <div className="font-mono text-xl sm:text-2xl font-medium text-print-red">24-48h</div>
                <div className="text-[11px] text-muted font-medium">Standard Dispatch</div>
              </div>
              <div className="bg-white p-3.5 rounded-md border border-paper-dark">
                <div className="font-mono text-xl sm:text-2xl font-medium text-print-red">6+</div>
                <div className="text-[11px] text-muted font-medium">Indian Scripts</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
