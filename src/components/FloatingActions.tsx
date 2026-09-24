import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${BUSINESS_INFO.phoneTel}`}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-amber-500 text-stone-950 font-bold text-xs shadow transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span>Call Mohan: {BUSINESS_INFO.phone}</span>
      </a>

      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
