import { UserCheck, Truck, Award, CheckCircle2, Factory, Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import sackShowcaseImage from '../assets/images/real/suvarna-printed-sack.jpg';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-amber-800 mb-2">
            About Mohan & Kwality Stereo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-stone-900">
            Dedicated Exclusively to High-Precision Engraved Rubber Stereos for Sack Packaging
          </h2>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            Founded and directed by <strong>Mohan</strong>, Kwality Stereo was established with a singular focus: 
            to solve the tough printing challenges of the woven sack packaging industry. 
            Printing on coarse polypropylene (PP) and HDPE woven fabric requires stereos with deep relief floors, 
            zero edge fraying, and extreme ink transfer resiliency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story, Credentials, Mohan's Promise */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-sm space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">
                Crafting Stereos that Run 300,000+ Sacks Without Ink Filling
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Standard flexographic photopolymer plates often crack or distort when printing on the rough, uneven weave of heavy-duty agricultural sacks. 
                At <strong>Kwality Stereo</strong>, Mohan and the technical team hand-carve and engrave heavy-gauge vulcanized natural and synthetic rubber blocks into precision stereos. 
                Our stereos deliver the necessary cushion to press ink deep into woven tapes while maintaining crisp, razor-sharp edge definition for logos, Hindi/Tamil/Punjabi typography, and statutory tables.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-amber-600 pl-3">
                  <div className="font-display font-bold text-lg text-stone-900">Krishnagiri Works</div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Heavy-duty vulcanizing, mold engraving, and standard L30x10 pack manufacturing in Tamil Nadu.
                  </div>
                </div>

                <div className="border-l-2 border-amber-600 pl-3">
                  <div className="font-display font-bold text-lg text-stone-900">Bangalore Dispatch Hub</div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Client sampling, cylinder repeat dimension verification, and express interstate dispatch.
                  </div>
                </div>
              </div>

              {/* Direct commitment from Mohan */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Direct Commitment by Mohan</div>
                    <div className="text-xs text-stone-600">Managing Proprietor · {BUSINESS_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Mohan</span>
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Why Mills Across India Choose Kwality Stereo */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-base text-stone-900 uppercase tracking-wider text-xs">
                Our Manufacturing Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Zero Shrinkage Vulcanization:</strong> Stereos maintain pitch dimensions over hundreds of thousands of bag impressions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Solvent & Water Ink Resilient:</strong> Compatible with all common bag printing ink chemistry without swelling.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Native Script Typesetting:</strong> High-legibility Tamil, Punjabi, Hindi, Bengali, Telugu, and English.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Pan-India Doorstep Delivery:</strong> Packed in shockproof industrial crates and dispatched within 24–48 hours.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual of a real printed sack from a Kwality Stereo rubber stereo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-white">
              <img
                src={sackShowcaseImage}
                alt="Real cattle feed woven PP sack printed using a Kwality Stereo hand-engraved rubber stereo"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-5 bg-white border-t border-stone-200 text-left">
                <div className="flex items-center justify-between text-xs text-amber-800 font-bold uppercase tracking-wider mb-1">
                  <span>Industrial Proofing</span>
                  <span>PP Woven Sacks</span>
                </div>
                <h4 className="font-display font-bold text-base text-stone-900">
                  Flour Mill Atta & Cattle Feed Sacks in Production
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Notice the sharp contrast of the brand headers, cattle figures, and detailed crop borders printed cleanly on textured woven tapes without halos or missing ink dots.
                </p>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Stereo Durability: 250k - 400k sacks</span>
                  <a href="#gallery" className="text-amber-700 font-bold hover:underline inline-flex items-center gap-1">
                    Explore Samples <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                <div className="font-display text-2xl font-bold text-amber-700">100%</div>
                <div className="text-[11px] text-stone-600 font-medium">India Delivery</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                <div className="font-display text-2xl font-bold text-amber-700">24-48h</div>
                <div className="text-[11px] text-stone-600 font-medium">Standard Dispatch</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                <div className="font-display text-2xl font-bold text-amber-700">6+</div>
                <div className="text-[11px] text-stone-600 font-medium">Indian Scripts</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
