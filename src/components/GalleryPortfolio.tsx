import { useState } from 'react';
import samrudhiImg from '../assets/images/real/samrudhi-stereo-hero.jpg';
import starImg from '../assets/images/real/star-flourmill-stereo.jpg';
import kohinoorImg from '../assets/images/real/kohinoor-flourmill-stereo.jpg';
import copperImg from '../assets/images/real/copper-rubber-stereo-sheets.jpg';
import bordersImg from '../assets/images/real/samrudhi-growmore-border-stereo.jpg';
import tamilImg from '../assets/images/real/tamil-script-stereo.jpg';
import punjabiImg from '../assets/images/real/punjabi-script-stereo.jpg';
import suvarnaImg from '../assets/images/real/suvarna-printed-sack.jpg';

const ITEM_PHOTOS: Record<string, { src: string; alt: string }> = {
  'samrudhi-milk-gain': { src: samrudhiImg, alt: 'Real hand-engraved rubber stereo for Samrudhi Milk Gain cattle feed bag' },
  'chunni-cattle-feed': { src: punjabiImg, alt: 'Real hand-engraved rubber stereo with Punjabi script and cattle artwork' },
  'shri-hariom-gold': { src: suvarnaImg, alt: 'Real cattle feed woven sack printed from a Kwality Stereo rubber stereo' },
  'star-flour-mill': { src: starImg, alt: 'Real engraved rubber stereo for Star Flour Mill cattle feed atta bag' },
  'kohinoor-flour-mill': { src: kohinoorImg, alt: 'Real engraved rubber stereo for Kohinoor Flour Mill wheat bran bag' },
  'multi-lang-tamil-punjabi-bengali': { src: tamilImg, alt: 'Real hand-engraved rubber stereo with Tamil script' },
  'decorative-borders-collection': { src: bordersImg, alt: 'Real engraved rubber stereo with palm, banana and neem border artwork' },
  'copper-rubber-standard-packs': { src: copperImg, alt: 'Real copper-tone engraved rubber stereo sheets, L30 x 10 packs' },
};
import { PORTFOLIO_ITEMS, PortfolioItem, BUSINESS_INFO } from '../data/businessData';
import { CheckCircle2, MessageCircle, Phone, X, Eye } from 'lucide-react';

interface GalleryPortfolioProps {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  onOpenQuoteWithItem: (item: PortfolioItem) => void;
}

export default function GalleryPortfolio({
  selectedCategory,
  onCategoryChange,
}: GalleryPortfolioProps) {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Sample Work' },
    { id: 'cattle-feed', label: 'Cattle Feed Stereos' },
    { id: 'flour-mill', label: 'Flour Mill / Atta Stereos' },
    { id: 'multi-language', label: 'Multi-Language Stereos' },
    { id: 'borders-motifs', label: 'Decorative Borders' },
    { id: 'bulk-copper', label: 'Bulk Packs (L30x10)' }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
            Proven Sample Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
            Sample Rubber Stereos We've Engraved for Bag Printing
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Review real rubber stereos, hand-cut and engraved, for cattle feed brands, flour mills, and regional grain packaging across India.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-paper-dark mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                selectedCategory === cat.id
                  ? 'bg-print-red text-white shadow-sm'
                  : 'bg-paper text-ink hover:bg-paper-dark hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-paper rounded-md border border-paper-dark overflow-hidden hover:border-print-red transition-all flex flex-col justify-between group"
            >
              <div className="p-5 sm:p-6">
                
                {/* Real photo of the engraved rubber stereo */}
                {ITEM_PHOTOS[item.id] && (
                  <div className="w-full h-64 bg-ink flex items-center justify-center rounded-md border border-[#333333] p-2 mb-4 overflow-hidden">
                    <img
                      src={ITEM_PHOTOS[item.id].src}
                      alt={ITEM_PHOTOS[item.id].alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                {!ITEM_PHOTOS[item.id] && (
                  <div className="relative w-full h-64 rounded-md bg-ink-soft p-4 text-paper border border-[#333333] mb-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#D0CCC2] border-b border-[#333333] pb-1.5 mb-2">
                      <span>KS-ENGRAVED RELIEF</span>
                      <span>{item.sampleDetails.reliefDepth}</span>
                    </div>
                    
                    {/* Fallback mirrored stamp */}
                    <div className="text-center py-3">
                      <div className="text-[11px] font-mono text-copper tracking-wider uppercase scale-x-[-1] inline-block opacity-80">
                        ENGRAVED RUBBER STEREO
                      </div>
                      <div className="text-base sm:text-lg font-display font-semibold text-white tracking-tight uppercase scale-x-[-1] mt-0.5">
                        {item.clientBrand}
                      </div>
                      <div className="text-[10px] font-mono text-[#D0CCC2] scale-x-[-1] mt-1">
                        {item.bagType}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-copper pt-1.5 border-t border-[#333333]">
                      <span>{item.dimensions}</span>
                      <span className="scale-x-[-1] inline-block">REPEAT CONFIRMED</span>
                    </div>
                  </div>
                )}

                {/* Unboxed clean metadata */}
                <div className="flex items-center gap-2 text-xs text-copper font-semibold mb-1">
                  <span>{item.bagType}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-medium">{item.dimensions}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold font-display text-ink group-hover:text-print-red transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Border Elements / Motifs */}
                {item.borderElements && item.borderElements.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-paper-dark">
                    <span className="text-[11px] font-bold text-ink uppercase tracking-wider block mb-1.5">
                      Decorative Motifs & Borders:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.borderElements.map((border, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[11px] bg-copper/10 text-copper px-2 py-0.5 rounded-sm border border-copper/20"
                        >
                          {border}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Supported Languages */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                  <span className="font-semibold text-ink">Languages:</span>
                  <span>{item.languages.join(', ')}</span>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-white border-t border-paper-dark flex items-center justify-between">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-print-red"
                >
                  <Eye className="w-4 h-4 text-print-red" />
                  <span>Inspect Stereo Details</span>
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Mohan, I am interested in the ${item.title} rubber stereo design.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Detailed Stereo Inspection */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-paper-dark p-6 sm:p-8 space-y-6 text-left">
              
              <div className="flex items-start justify-between border-b border-paper-dark pb-4">
                <div>
                  <div className="text-xs uppercase font-bold text-print-red">
                    Sample Stereo Inspection
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-ink mt-1">
                    {activeModalItem.title}
                  </h3>
                  <div className="text-xs text-muted mt-0.5">
                    Brand: <strong className="text-ink">{activeModalItem.clientBrand}</strong> · {activeModalItem.bagType}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-md text-muted hover:text-ink hover:bg-paper"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-paper p-4 rounded-md border border-paper-dark text-xs">
                <div>
                  <span className="text-muted block">Floor Relief Depth:</span>
                  <strong className="text-ink font-mono font-medium">{activeModalItem.sampleDetails.reliefDepth}</strong>
                </div>
                <div>
                  <span className="text-muted block">Recommended Press:</span>
                  <strong className="text-ink">{activeModalItem.sampleDetails.pressType}</strong>
                </div>
                <div>
                  <span className="text-muted block">Sack Fabric Compatibility:</span>
                  <strong className="text-ink">{activeModalItem.sampleDetails.wovenMeshCompatible}</strong>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  Engineering Overview & Application
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              {activeModalItem.borderElements && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-xs text-ink uppercase tracking-wider">
                    Engraved Border Motifs & Imagery
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.borderElements.map((b, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-copper/10 text-copper font-medium px-2.5 py-1 rounded-sm border border-copper/20"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-semibold text-xs text-ink uppercase tracking-wider">
                  Performance Highlights
                </h4>
                <ul className="space-y-1.5 text-sm text-muted">
                  {activeModalItem.stereoFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-print-red shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal CTA Actions */}
              <div className="pt-4 border-t border-paper-dark flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-muted">
                  Ready to produce this design or customize for your mill?
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-ink hover:bg-ink-soft text-white font-bold text-xs"
                  >
                    <Phone className="w-4 h-4 text-print-red" />
                    <span>Call Mohan</span>
                  </a>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Mohan, I want to manufacture stereos like "${activeModalItem.title}". Please send quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Specs</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
