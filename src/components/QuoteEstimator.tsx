import { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { Calculator, MessageCircle, Phone, Copy, Check, Sparkles, HelpCircle } from 'lucide-react';

interface QuoteEstimatorProps {
  initialBagType?: string;
  onClose?: () => void;
}

export default function QuoteEstimator({ initialBagType, onClose }: QuoteEstimatorProps) {
  const [bagCategory, setBagCategory] = useState(initialBagType || 'cattle-feed-50');
  const [plateGauge, setPlateGauge] = useState('6.35mm-heavy');
  const [colorPasses, setColorPasses] = useState('2-color');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['Hindi', 'English']);
  const [borderElements, setBorderElements] = useState<string[]>(['Wheat Border', 'Cattle Silhouette']);
  const [batchSlot, setBatchSlot] = useState(true);
  const [orderVolume, setOrderVolume] = useState('standard-set');
  const [copied, setCopied] = useState(false);

  const bagOptions = [
    { id: 'cattle-feed-50', name: '50 Kg Cattle Feed Woven Sack', typicalRepeat: '960mm - 1000mm' },
    { id: 'atta-flour-50', name: '50 Kg Chakki Fresh Atta Sack', typicalRepeat: '900mm - 960mm' },
    { id: 'atta-flour-30', name: '30 Kg Flour Mill Atta Bag', typicalRepeat: '800mm - 850mm' },
    { id: 'poultry-feed-50', name: '50 Kg Poultry Mash / Pellet Bag', typicalRepeat: '960mm' },
    { id: 'fertilizer-50', name: '50 Kg Fertilizer (Urea / DAP) Sack', typicalRepeat: '980mm' },
    { id: 'custom-bag', name: 'Custom Repeat Bag / Sugar / Grain', typicalRepeat: 'Custom' }
  ];

  const gaugeOptions = [
    { id: '6.35mm-heavy', name: '6.35mm Deep-Relief Vulcanized Rubber', desc: 'Industry standard for coarse PP tape weave' },
    { id: '7.0mm-extra', name: '7.0mm Extra Heavy Cushion Rubber', desc: 'Maximum ink transfer on unlaminated sacks' },
    { id: '4.7mm-flexo', name: '4.7mm High-Definition Flexo Gauge', desc: 'Optimal for fine text and FSSAI tables' },
    { id: 'copper-l30', name: 'Copper / Rubber Composite (L30 Pack)', desc: 'Rigid copper back with resilient rubber face' }
  ];

  const languagesList = ['Hindi', 'Tamil', 'Punjabi', 'Bengali', 'Kannada', 'Telugu', 'Gujarati', 'English'];
  const bordersList = ['Wheat Sheaves', 'Corn Stalks', 'Sugarcane', 'Palm Trees', 'Cattle Silhouette', 'ISI/FSSAI Grid'];

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      if (selectedLanguages.length > 1) {
        setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
      }
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const toggleBorder = (border: string) => {
    if (borderElements.includes(border)) {
      setBorderElements(borderElements.filter((b) => b !== border));
    } else {
      setBorderElements([...borderElements, border]);
    }
  };

  const currentBag = bagOptions.find((b) => b.id === bagCategory);
  const currentGauge = gaugeOptions.find((g) => g.id === plateGauge);

  const generateSpecText = () => {
    return `*KWALITY STEREO - PLATE SPECIFICATION INQUIRY*
---------------------------------------
• Bag Application: ${currentBag?.name} (${currentBag?.typicalRepeat})
• Plate Compound/Gauge: ${currentGauge?.name}
• Color Registration: ${colorPasses.toUpperCase()}
• Required Languages: ${selectedLanguages.join(', ')}
• Border Motifs: ${borderElements.length ? borderElements.join(', ') : 'None'}
• Replaceable Batch/MRP Slot: ${batchSlot ? 'YES (Interchangeable)' : 'No'}
• Order Format: ${orderVolume === 'standard-pack-l30' ? 'L30 x 10 Packs Standard' : orderVolume === 'bulk-5-sets' ? '5+ Sets (Bulk Repeat)' : '1 Master Set'}
• Pan-India Dispatch to: [Please quote freight & dispatch timeline]
---------------------------------------
Inquiry for Mohan (90490 98150 / saimohan361991@gmail.com)`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSpecText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(generateSpecText())}`;

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">
            Instant Engineering Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Configure Your Rubber Stereo Plate Specifications
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Select your woven sack size, plate gauge, languages, and decorative borders. Send directly to Mohan for immediate turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
            
            {/* 1. Bag Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                1. Select Packaging Bag Type & Repeat
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bagOptions.map((bag) => (
                  <button
                    key={bag.id}
                    type="button"
                    onClick={() => setBagCategory(bag.id)}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      bagCategory === bag.id
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-sm'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm">{bag.name}</div>
                    <div className="text-[11px] text-stone-400 mt-0.5">{bag.typicalRepeat}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Plate Gauge & Material */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                2. Rubber Gauge & Backing Compound
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {gaugeOptions.map((gauge) => (
                  <button
                    key={gauge.id}
                    type="button"
                    onClick={() => setPlateGauge(gauge.id)}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      plateGauge === gauge.id
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-sm'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-xs">{gauge.name}</div>
                    <div className="text-[11px] text-stone-400 mt-0.5">{gauge.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Color Registration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                3. Print Colors / Stereo Registration Passes
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '1-color', label: 'Single Color (Mono)' },
                  { id: '2-color', label: '2-Color Registered' },
                  { id: '3-color', label: '3-Color Tri-pass' },
                  { id: '4-color', label: '4-Color Process' }
                ].map((col) => (
                  <button
                    key={col.id}
                    type="button"
                    onClick={() => setColorPasses(col.id)}
                    className={`p-2.5 text-center rounded-lg border text-xs font-semibold transition-all ${
                      colorPasses === col.id
                        ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Languages Required */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                4. Required Languages / Scripts (Select all needed)
              </label>
              <div className="flex flex-wrap gap-2">
                {languagesList.map((lang) => {
                  const isSelected = selectedLanguages.includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => toggleLanguage(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : ''}{lang}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Decorative Borders & Slots */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                5. Decorative Motifs & Border Strips
              </label>
              <div className="flex flex-wrap gap-2">
                {bordersList.map((border) => {
                  const isSelected = borderElements.includes(border);
                  return (
                    <button
                      key={border}
                      type="button"
                      onClick={() => toggleBorder(border)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-amber-500/30 border-amber-400 text-amber-300'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : ''}{border}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-stone-200 block">Replaceable Batch / MRP Socket:</span>
                  <span className="text-[11px] text-stone-400">Quick-change modular stamp for manufacturing lot numbers & MRP</span>
                </div>
                <button
                  type="button"
                  onClick={() => setBatchSlot(!batchSlot)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    batchSlot ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {batchSlot ? 'INCLUDED' : 'NOT NEEDED'}
                </button>
              </div>
            </div>

            {/* 6. Order Volume */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                6. Order Format / Packaging
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'standard-set', label: '1 Custom Master Set', sub: 'For single bag brand run' },
                  { id: 'standard-pack-l30', label: 'Standard L30 x 10 Pack', sub: 'Standard industrial repeat' },
                  { id: 'bulk-5-sets', label: '5+ Bulk Repeat Sets', sub: 'Volume pricing for bag mills' }
                ].map((vol) => (
                  <button
                    key={vol.id}
                    type="button"
                    onClick={() => setOrderVolume(vol.id)}
                    className={`p-2.5 text-left rounded-lg border text-xs transition-all ${
                      orderVolume === vol.id
                        ? 'bg-amber-500/20 border-amber-400 text-white font-semibold'
                        : 'bg-stone-900 border-stone-800 text-stone-300'
                    }`}
                  >
                    <div className="font-bold">{vol.label}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{vol.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Technical Brief Summary & 1-Click WhatsApp */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            
            <div className="bg-stone-950 p-6 rounded-2xl border-2 border-amber-500/60 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Live Engineering Brief
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-0.5">
                    Plate Specification Summary
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Specification Breakdown List */}
              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Bag Format:</span>
                  <span className="font-bold text-white text-right">{currentBag?.name}</span>
                </div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Compound / Gauge:</span>
                  <span className="font-bold text-amber-300 text-right">{currentGauge?.name}</span>
                </div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Color Passes:</span>
                  <span className="font-bold text-white">{colorPasses.toUpperCase()}</span>
                </div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Scripts:</span>
                  <span className="font-bold text-white text-right">{selectedLanguages.join(', ')}</span>
                </div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Border Motifs:</span>
                  <span className="font-bold text-white text-right">
                    {borderElements.length ? borderElements.join(', ') : 'Plain'}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-900">
                  <span className="text-stone-400">Batch Socket:</span>
                  <span className="font-bold text-emerald-400">{batchSlot ? 'YES (Modular)' : 'NO'}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-stone-400">Logistics / Dispatch:</span>
                  <span className="font-bold text-white text-right">Pan-India (Krishnagiri / Bangalore)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Specs to Mohan via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Mohan: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Specification Text Draft</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-stone-500 text-center leading-relaxed">
                Guaranteed response within 1-2 hours · Dispatch available to all Indian states
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
