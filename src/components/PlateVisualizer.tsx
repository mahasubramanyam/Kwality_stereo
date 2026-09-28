import { useState } from 'react';
import { Eye, Layers, RefreshCw } from 'lucide-react';

export default function PlateVisualizer() {
  const [viewMode, setViewMode] = useState<'stereo' | 'printed'>('stereo');
  const [activeSample, setActiveSample] = useState<'cattle' | 'flour'>('cattle');

  return (
    <section className="py-16 sm:py-20 bg-ink text-paper border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
            Interactive Technical Inspection
          </div>
          <h2 className="text-xl sm:text-3xl font-semibold font-display text-white">
            See How an Engraved Rubber Stereo Transfers Onto a Woven Sack
          </h2>
          <p className="text-[#D0CCC2] text-sm sm:text-base mt-2">
            Switch between the <span className="text-print-red font-semibold">High-Relief Engraved Rubber Stereo</span> (mirror engraved) and the <span className="text-emerald-400 font-semibold">Finished Printed Woven Bag</span>.
          </p>

          {/* Interactive Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 bg-ink-soft rounded-md border border-[#333333]">
              <button
                onClick={() => setViewMode('stereo')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md transition-all flex items-center gap-2 ${
                  viewMode === 'stereo'
                    ? 'bg-print-red text-white'
                    : 'text-[#9E9B93] hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>1. Engraved Rubber Stereo (Stereo View)</span>
              </button>
              <button
                onClick={() => setViewMode('printed')}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md transition-all flex items-center gap-2 ${
                  viewMode === 'printed'
                    ? 'bg-emerald-700 text-white'
                    : 'text-[#9E9B93] hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>2. Finished Printed Sack (Bag View)</span>
              </button>
            </div>

            {/* Design Selector */}
            <div className="inline-flex p-1 bg-ink-soft rounded-md border border-[#333333] text-xs sm:text-sm">
              <button
                onClick={() => setActiveSample('cattle')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                  activeSample === 'cattle'
                    ? 'bg-[#333333] text-print-red font-bold'
                    : 'text-[#9E9B93] hover:text-white'
                }`}
              >
                Samrudhi Cattle Feed 50kg
              </button>
              <button
                onClick={() => setActiveSample('flour')}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                  activeSample === 'flour'
                    ? 'bg-[#333333] text-print-red font-bold'
                    : 'text-[#9E9B93] hover:text-white'
                }`}
              >
                Star Flour Mill Atta 50kg
              </button>
            </div>
          </div>
        </div>

        {/* The Visualizer Canvas */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-md overflow-hidden border border-[#333333] bg-ink p-4 sm:p-8">
            
            {/* Top Status Indicators */}
            <div className="flex items-center justify-between border-b border-[#333333] pb-3 mb-6 text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${viewMode === 'stereo' ? 'bg-print-red animate-pulse' : 'bg-emerald-500'}`} />
                <span className="font-mono text-[#D0CCC2]">
                  {viewMode === 'stereo'
                    ? 'VULCANIZED RUBBER STEREO (MIRROR ENGRAVED FOR FLEXO)'
                    : 'FINISHED PP WOVEN SACK (RIGHT-READING PRINT ON WOVEN TAPE)'}
                </span>
              </div>
              <span className="font-mono text-[#7A756D] hidden sm:inline">
                REPEAT: 960mm · GAUGE: 6.35mm · RELIEF: 3.2mm
              </span>
            </div>

            {/* Simulated Stereo / Bag Frame */}
            <div
              className={`relative mx-auto rounded-md p-6 sm:p-10 border transition-all duration-500 min-h-[460px] flex flex-col justify-between ${
                viewMode === 'stereo'
                  ? 'bg-gradient-to-b from-[#8d3221] via-[#aa3d29] to-[#7c2b1c] border-[#d8583c]/50 text-[#ffd5cc]'
                  : 'bg-paper border-paper-dark text-ink'
              }`}
              style={{
                backgroundImage:
                  viewMode === 'printed'
                    ? 'repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 4px)'
                    : undefined
              }}
            >
              {/* Stereo Specific Registration Marks and Mounting Grids */}
              {viewMode === 'stereo' && (
                <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-red-300/20 m-2 rounded-md flex items-center justify-between px-3 text-[10px] font-mono text-red-300/40">
                  <div className="flex flex-col justify-between h-full py-4">
                    <span>+ PITCH REG-L</span>
                    <span>+ CYLINDER MOUNT PIN</span>
                    <span>+ FLOOR DEPTH: 3.2mm</span>
                  </div>
                  <div className="flex flex-col justify-between h-full py-4 text-right">
                    <span>REG-R +</span>
                    <span>DUPLEX MARGIN +</span>
                    <span>KWALITY STEREO +</span>
                  </div>
                </div>
              )}

              {/* Top Sack Elements / Border */}
              <div className="relative z-10">
                <div
                  className={`border-b-4 pb-3 flex items-center justify-between ${
                    viewMode === 'stereo'
                      ? 'border-[#ff9b85]/40 text-[#ffe5df]'
                      : 'border-print-red text-print-red'
                  }`}
                >
                  <div className="text-xs font-mono font-bold tracking-widest uppercase">
                    {activeSample === 'cattle' ? '🌽 WHEAT & SUGARCANE BORDER 🌽' : '🌾 GOLDEN GRAIN BORDER 🌾'}
                  </div>
                  <div className="text-xs font-bold font-mono">
                    {viewMode === 'stereo' ? '⅁ʞ 0ϛ :.⊥M ⊥ƎN' : 'NET WT.: 50 KG'}
                  </div>
                </div>
              </div>

              {/* Main Center Logo & Graphic */}
              <div className="relative z-10 text-center my-6">
                {activeSample === 'cattle' ? (
                  <div className="space-y-2">
                    {/* Hindi Main Name */}
                    <div
                      className={`text-xl sm:text-2xl font-semibold font-display ${
                        viewMode === 'stereo'
                          ? 'scale-x-[-1] inline-block text-white'
                          : 'text-print-red'
                      }`}
                    >
                      समृद्धि मिल्क गेन
                    </div>

                    {/* Brand Name in English */}
                    <div
                      className={`text-2xl sm:text-3xl lg:text-4xl font-semibold font-display tracking-tight uppercase ${
                        viewMode === 'stereo'
                          ? 'scale-x-[-1] inline-block text-[#ffe5df]'
                          : 'text-print-red-dark'
                      }`}
                    >
                      SAMRUDHI MILK GAIN
                    </div>

                    <div
                      className={`text-xs sm:text-sm font-semibold tracking-wider ${
                        viewMode === 'stereo' ? 'scale-x-[-1] inline-block text-[#ffd5cc]' : 'text-muted'
                      }`}
                    >
                      HIGH YIELD CATTLE FEED & DAIRY SPECIAL
                    </div>

                    {/* Symbolic Cow Icon / Illustration graphic */}
                    <div className="py-2 flex items-center justify-center gap-3">
                      <div className={`p-2 rounded-md ${viewMode === 'stereo' ? 'bg-black/30 border border-white/10' : 'bg-print-red/10 border border-print-red/20'}`}>
                        <span className="text-2xl" role="img" aria-label="Cow">🐄</span>
                      </div>
                      <div className="text-left text-xs font-mono">
                        <div className="font-bold">{viewMode === 'stereo' ? 'NOI⊥Iᴚ⊥∩N ⅄ᴚI∀ᗡ ᗡƎON∀Λᗡ∀' : 'ADVANCED DAIRY NUTRITION'}</div>
                        <div className="opacity-80">BYPASS PROTEIN: 22% MIN | FAT: 4.5% MIN</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div
                      className={`text-xl sm:text-2xl font-semibold font-display ${
                        viewMode === 'stereo'
                          ? 'scale-x-[-1] inline-block text-white'
                          : 'text-print-red'
                      }`}
                    >
                      स्टार फ्लोर मिल · चक्की आटा
                    </div>

                    <div
                      className={`text-2xl sm:text-3xl lg:text-4xl font-semibold font-display tracking-tight uppercase ${
                        viewMode === 'stereo'
                          ? 'scale-x-[-1] inline-block text-[#ffe5df]'
                          : 'text-print-red-dark'
                      }`}
                    >
                      STAR FLOUR MILL
                    </div>

                    <div
                      className={`text-xs sm:text-sm font-semibold tracking-wider ${
                        viewMode === 'stereo' ? 'scale-x-[-1] inline-block text-[#ffd5cc]' : 'text-muted'
                      }`}
                    >
                      100% PURE CHAKKI FRESH WHEAT ATTA
                    </div>

                    <div className="py-2 flex items-center justify-center gap-3">
                      <div className={`p-2 rounded-md ${viewMode === 'stereo' ? 'bg-black/30 border border-white/10' : 'bg-print-red/10 border border-print-red/20'}`}>
                        <span className="text-2xl" role="img" aria-label="Wheat">🌾</span>
                      </div>
                      <div className="text-left text-xs font-mono">
                        <div className="font-bold">{viewMode === 'stereo' ? '∀⊥⊥∀ ⊥∀ƎHM ƎNIO' : 'FINE WHEAT ATTA'}</div>
                        <div className="opacity-80">FSSAI LIC NO. 12421000000000 | 100% VEG</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Nutritional & Batch Field Bar */}
              <div className="relative z-10 border-t-2 pt-3 border-dashed border-[#555555]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                  <div className="p-1.5 rounded-sm bg-black/10">
                    <div className="opacity-70">{viewMode === 'stereo' ? "˙ON HƆ⊥∀q" : "BATCH NO."}</div>
                    <div className="font-bold">[ INTERCHANGEABLE ]</div>
                  </div>
                  <div className="p-1.5 rounded-sm bg-black/10">
                    <div className="opacity-70">{viewMode === 'stereo' ? "˙Ԁ˙ᴚ˙W" : "M.R.P. ₹"}</div>
                    <div className="font-bold">[ MRP SOCKET SLOT ]</div>
                  </div>
                  <div className="p-1.5 rounded-sm bg-black/10">
                    <div className="opacity-70">{viewMode === 'stereo' ? "Ǝ⊥∀ᗡ ˙ƃℲW" : "MFG. DATE"}</div>
                    <div className="font-bold">OCT 2026</div>
                  </div>
                  <div className="p-1.5 rounded-sm bg-black/10">
                    <div className="opacity-70">{viewMode === 'stereo' ? "Ǝᗡ∀ᴚפ OƎXƎ˥Ⅎ" : "BAG PRINT"}</div>
                    <div className="font-bold text-copper">KWALITY STEREO</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Explanation card below canvas */}
            <div className="mt-6 p-4 rounded-md bg-ink-soft border border-[#333333] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-print-red font-bold block mb-1">
                  {viewMode === 'stereo' ? 'Why is the stereo text mirrored?' : 'Woven PP Laydown Science:'}
                </span>
                <p className="text-[#D0CCC2] leading-relaxed">
                  {viewMode === 'stereo'
                    ? 'Rubber stereos are cut and engraved in reverse (mirror-image) relief. When clamped onto the rotating machine cylinder and inked, they press directly into the sack to produce sharp, right-reading graphics.'
                    : 'The vulcanized rubber absorbs the mechanical shock of uneven woven polypropylene tapes, pushing ink smoothly into the fabric without clogging fine text.'}
                </p>
              </div>

              <button
                onClick={() => setViewMode(viewMode === 'stereo' ? 'printed' : 'stereo')}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-ink hover:bg-[#333333] text-[#D0CCC2] font-semibold border border-[#333333]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Switch to {viewMode === 'stereo' ? 'Bag View' : 'Stereo View'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
