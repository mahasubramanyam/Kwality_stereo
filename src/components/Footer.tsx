import { ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-[#D0CCC2] border-t border-[#333333] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#333333]">
          
          {/* Column 1: Brand & Purpose */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-print-red flex items-center justify-center text-white font-display font-semibold text-lg">
                KS
              </div>
              <span className="font-display text-lg font-semibold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9E9B93] leading-relaxed">
              Manufacturer of custom hand-engraved vulcanized rubber stereos (rubber printing blocks) for flexographic and rotogravure sack printing. 
              Serving cattle feed brands, poultry feed mills, flour (atta) mills, and fertilizer packaging manufacturers with pan-India dispatches.
            </p>

            <div className="pt-2 text-xs text-print-red font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Daily Express Shipments Across All Indian States</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-print-red">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A09D96]">
              <li><a href="#about" className="hover:text-white transition-colors">About Mohan & Works</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products & Capabilities</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries Served</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Sample Work & Brands</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Stereo Specification Tool</a></li>
              <li><a href="#locations" className="hover:text-white transition-colors">Locations & Dispatch</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Column 3: Industries & Bag Types */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-print-red">
              Sack Applications
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A09D96]">
              <li>Cattle Feed Bags (Samrudhi, Chunni, Hariom)</li>
              <li>Flour Mill & Atta Bags (Star, Kohinoor)</li>
              <li>Poultry Feed & Mash Sacks</li>
              <li>Fertilizer, Urea & DAP Woven Bags</li>
              <li>Multi-Language Stereos (Tamil, Punjabi, Hindi, Bengali)</li>
              <li>Corn, Wheat, Sugarcane & Cattle Borders</li>
              <li>Standard Sizing (L30 x 10 Packs & Copper Stereos)</li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-print-red">
              Contact & Facilities
            </div>
            <div className="space-y-2 text-xs text-[#9E9B93]">
              <div>
                <strong className="text-white block">Contact Person:</strong>
                {BUSINESS_INFO.founder}
              </div>
              <div>
                <strong className="text-white block">Phone:</strong>
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-print-red hover:underline font-mono font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div>
                <strong className="text-white block">Email:</strong>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D0CCC2] hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-1">
                <strong className="text-white block">Tamil Nadu:</strong>
                Puliyanthoppu, Uthangarai Upparatti VTC, Krishnagiri - 635207
              </div>
              <div className="pt-1">
                <strong className="text-white block">Bangalore Hub:</strong>
                109, 2nd Cross, 1st Main, Kanaka Nagar, Munikrishnappa Layout, Sangolli Rayanna Main Road, Bangalore - 560072
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A756D]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Precision hand-engraved rubber stereos for woven sack packaging.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#9E9B93]">Delivery All Over India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-ink-soft hover:bg-[#333333] text-[#D0CCC2] hover:text-white transition-colors border border-[#333333]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
