import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Bar for Dispatch & Direct Call */}
      <div className="bg-amber-600 text-stone-950 font-medium text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-stone-950 animate-pulse"></span>
            <span>Pan-India Delivery from Krishnagiri & Bangalore Works</span>
            <span className="hidden md:inline text-stone-900">|</span>
            <span className="hidden md:inline text-stone-900">Delivery to all Indian states</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center gap-1.5 font-bold hover:underline"
              title="Call Mohan directly"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Mohan: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-display font-black text-xl tracking-tight shadow-inner">
              KS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Rubber Stereo Works
                </span>
              </div>
              <p className="text-xs text-stone-400 font-medium hidden sm:block">
                Engraved Rubber Stereos for Woven Sacks & Bags
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About Us
            </a>
            <a href="#products" className="hover:text-amber-400 transition-colors">
              Products & Stereos
            </a>
            <a href="#industries" className="hover:text-amber-400 transition-colors">
              Industries Served
            </a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">
              Sample Work & Gallery
            </a>
            <a href="#locations" className="hover:text-amber-400 transition-colors">
              Locations
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-bold transition-all shadow-sm"
            >
              <span>Stereo Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="p-2 rounded-lg bg-amber-500 text-stone-950 sm:hidden"
              title="Call Mohan"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              About Us & Mohan
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              Products & Services
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              Industries Served (Cattle, Flour, Agro)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              Sample Work & Gallery
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              Locations (Krishnagiri & Bangalore)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-800"
            >
              Contact Mohan
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-stone-800 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-700 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm"
            >
              Calculate Stereo Specification
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
