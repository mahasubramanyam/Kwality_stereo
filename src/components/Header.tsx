import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-[#333333]">
      {/* Top Bar for Dispatch & Direct Call */}
      <div className="bg-print-red text-white font-medium text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Pan-India Delivery from Krishnagiri & Bangalore Works</span>
            <span className="hidden md:inline text-white/60">|</span>
            <span className="hidden md:inline text-white/90">Delivery to all Indian states</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center gap-1.5 font-bold hover:underline"
              title="Call Mohan directly"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Mohan: <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-print-red flex items-center justify-center text-white font-display font-semibold text-lg tracking-tight">
              KS
            </div>
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-print-red transition-colors">
              {BUSINESS_INFO.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D0CCC2]">
            <a href="#about" className="hover:text-print-red transition-colors">
              About Us
            </a>
            <a href="#products" className="hover:text-print-red transition-colors">
              Products & Stereos
            </a>
            <a href="#industries" className="hover:text-print-red transition-colors">
              Industries Served
            </a>
            <a href="#gallery" className="hover:text-print-red transition-colors">
              Sample Work & Gallery
            </a>
            <a href="#locations" className="hover:text-print-red transition-colors">
              Locations
            </a>
            <a href="#contact" className="hover:text-print-red transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-print-red hover:bg-print-red-dark text-white text-xs sm:text-sm font-bold transition-all"
            >
              <span>Stereo Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="p-2 rounded-md bg-print-red text-white sm:hidden"
              title="Call Mohan"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#D0CCC2] hover:text-white hover:bg-ink-soft transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#333333] bg-ink px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-paper">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              About Us & Mohan
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              Products & Services
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              Industries Served (Cattle, Flour, Agro)
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              Sample Work & Gallery
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              Locations (Krishnagiri & Bangalore)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-ink-soft"
            >
              Contact Mohan
            </a>
          </nav>

          <div className="pt-3 border-t border-[#333333] flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-ink-soft border border-[#333333] text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-print-red" />
              <span>Call: <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-emerald-700 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-sm"
            >
              Calculate Stereo Specification
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
