import { CORE_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { Layers, Languages, PackageCheck, ShieldAlert, Cpu, Settings, Check, Phone, ArrowRight } from 'lucide-react';

interface ProductsServicesProps {
  onOpenQuote: () => void;
}

export default function ProductsServices({ onOpenQuote }: ProductsServicesProps) {
  const icons = [Layers, Languages, PackageCheck, ShieldAlert, Cpu, Settings];

  return (
    <section id="products" className="py-16 sm:py-24 bg-white text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
              Engineering & Manufacturing Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
              Rubber Stereos Built Specifically for Flexo & Rotogravure Bag Presses
            </h2>
            <p className="text-muted text-base sm:text-lg mt-3">
              Every stereo is hand-carved from custom-vulcanized rubber with deep reliefs, formulated specifically for the abrasive weave of PP & HDPE sack packaging.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-ink hover:bg-ink-soft text-white font-bold text-sm transition-colors"
            >
              <span>Request Custom Spec</span>
              <ArrowRight className="w-4 h-4 text-print-red" />
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
                className="bg-paper border border-paper-dark hover:border-print-red/60 rounded-md p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-md bg-print-red/10 text-print-red group-hover:bg-print-red group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-copper">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold font-display text-ink group-hover:text-print-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 pt-4 border-t border-paper-dark">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ink">
                        <Check className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-paper-dark flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-xs font-bold text-ink hover:text-print-red flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-print-red" />
                    <span>Inquire with Mohan</span>
                  </a>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-print-red hover:text-print-red-dark inline-flex items-center gap-1"
                  >
                    Configure <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Stereo Specification Table */}
        <div className="mt-14 bg-ink text-paper rounded-md p-6 sm:p-8 border border-[#333333]">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-print-red">
              Technical Specifications
            </span>
            <h3 className="text-lg sm:text-xl font-semibold font-display text-white mt-1">
              Standard Stereo Gauges, Hardness & Mountings
            </h3>
            <p className="text-xs sm:text-sm text-[#9E9B93] mt-1">
              Standardized manufacturing parameters calibrated for Indian sack printing machinery.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#333333] text-print-red font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Parameter</th>
                  <th className="py-3 px-4">Standard Cattle & Agri Feed</th>
                  <th className="py-3 px-4">Flour Mill (Atta) High-Def</th>
                  <th className="py-3 px-4">Copper / Bulk (L30x10)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333333] text-[#D0CCC2]">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Overall Stereo Thickness</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">6.35mm / 7.0mm</span> (heavy gauge)</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">4.7mm / 5.5mm</span> (precision)</td>
                  <td className="py-3 px-4">L30 standard copper/rubber base</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Floor Relief Depth</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">3.0mm – 3.8mm</span> (deep non-bleed)</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">2.5mm – 3.2mm</span> (fine glyphs)</td>
                  <td className="py-3 px-4">Calibrated <span className="font-mono font-medium">±0.03mm</span> uniform</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Rubber Durometer (Shore A)</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">50° – 55°</span> Shore A (cushion laydown)</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">55° – 60°</span> Shore A (anti-dot gain)</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">60°</span> Shore A with copper backing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Supported Languages</td>
                  <td className="py-3 px-4">Hindi, Punjabi, Tamil, English</td>
                  <td className="py-3 px-4">Hindi, Bengali, English, Gujarati</td>
                  <td className="py-3 px-4">Any regional script / custom logo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Turnaround / Pan-India Transit</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">24-48 hrs</span> dispatch from Krishnagiri</td>
                  <td className="py-3 px-4"><span className="font-mono font-medium">24-48 hrs</span> dispatch from Bangalore</td>
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
