import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Purpose */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-display font-black text-lg">
                KS
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Manufacturer of custom hand-engraved vulcanized rubber stereos (rubber printing blocks) for flexographic and rotogravure sack printing. 
              Serving cattle feed brands, poultry feed mills, flour (atta) mills, and fertilizer packaging manufacturers with pan-India dispatches.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Daily Express Shipments Across All Indian States</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
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
            <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Sack Applications
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
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
            <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Contact & Facilities
            </div>
            <div className="space-y-2 text-xs text-stone-400">
              <div>
                <strong className="text-white block">Contact Person:</strong>
                {BUSINESS_INFO.founder}
              </div>
              <div>
                <strong className="text-white block">Phone:</strong>
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-amber-400 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div>
                <strong className="text-white block">Email:</strong>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-stone-300 hover:underline">
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Precision hand-engraved rubber stereos for woven sack packaging.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-stone-400">Delivery All Over India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
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
