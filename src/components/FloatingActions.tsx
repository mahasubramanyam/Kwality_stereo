import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur-md border-t border-[#333333] p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${BUSINESS_INFO.phoneTel}`}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-print-red text-white font-bold text-xs shadow transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span>Call Mohan: <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></span>
      </a>

      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-emerald-700 text-white font-bold text-xs shadow transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
