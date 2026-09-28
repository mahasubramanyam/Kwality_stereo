import { useState } from 'react';
import { CORE_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { Layers, Languages, PackageCheck, ShieldAlert, Cpu, Settings, Check, Phone, ArrowRight } from 'lucide-react';

interface ProductsServicesProps {
  onOpenQuote: () => void;
}

export default function ProductsServices({ onOpenQuote }: ProductsServicesProps) {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const icons = [Layers, Languages, PackageCheck, ShieldAlert, Cpu, Settings];

  return (
    <section id="products" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest font-bold text-amber-700 mb-2">
              Engineering & Manufacturing Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-stone-900">
              Rubber Stereos Built Specifically for Flexo & Rotogravure Bag Presses
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3">
              Every plate is custom-vulcanized with deep reliefs and formulated specifically for the abrasive weave of PP & HDPE sack packaging.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-sm transition-colors"
            >
              <span>Request Custom Spec</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Technical Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.title}
                className="bg-stone-50 border border-stone-200 hover:border-amber-500/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-stone-900 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 pt-4 border-t border-stone-200/80">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-xs font-bold text-stone-700 hover:text-amber-700 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Inquire with Mohan</span>
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
                  >
                    Configure <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Stereo Plate Specification Table */}
        <div className="mt-14 bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Technical Specifications
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              Standard Plate Gauges, Hardness & Mountings
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Standardized manufacturing parameters calibrated for Indian sack printing machinery.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-stone-800 text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">Standard Cattle & Agri Feed</th>
                  <th className="py-3 px-4">Flour Mill (Atta) High-Def</th>
                  <th className="py-3 px-4">Copper / Bulk (L30x10)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Overall Plate Thickness</td>
                  <td className="py-3 px-4">6.35mm / 7.0mm (heavy gauge)</td>
                  <td className="py-3 px-4">4.7mm / 5.5mm (precision)</td>
                  <td className="py-3 px-4">L30 standard copper/rubber base</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Floor Relief Depth</td>
                  <td className="py-3 px-4">3.0mm – 3.8mm (deep non-bleed)</td>
                  <td className="py-3 px-4">2.5mm – 3.2mm (fine glyphs)</td>
                  <td className="py-3 px-4">Calibrated ±0.03mm uniform</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Rubber Durometer (Shore A)</td>
                  <td className="py-3 px-4">50° – 55° Shore A (cushion laydown)</td>
                  <td className="py-3 px-4">55° – 60° Shore A (anti-dot gain)</td>
                  <td className="py-3 px-4">60° Shore A with copper backing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Supported Languages</td>
                  <td className="py-3 px-4">Hindi, Punjabi, Tamil, English</td>
                  <td className="py-3 px-4">Hindi, Bengali, English, Gujarati</td>
                  <td className="py-3 px-4">Any regional script / custom logo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Turnaround / Pan-India Transit</td>
                  <td className="py-3 px-4">24-48 hrs dispatch from Krishnagiri</td>
                  <td className="py-3 px-4">24-48 hrs dispatch from Bangalore</td>
                  <td className="py-3 px-4">Express daily courier & road transport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
