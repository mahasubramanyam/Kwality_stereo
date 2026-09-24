import { Info, CheckCircle2, XCircle } from 'lucide-react';

export default function ClarificationNotice() {
  return (
    <section className="bg-amber-500/10 border-y border-amber-500/25 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-amber-500/20 text-amber-800 shrink-0 mt-0.5 md:mt-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-stone-900 text-sm sm:text-base">
                Packaging Industry Clarification:
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-800">
                Printing Machinery Stereos
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 mt-0.5 leading-relaxed">
              <strong className="text-stone-900">Kwality Stereo</strong> specializes exclusively in custom-engraved, vulcanized 
              rubber printing plates (known as <em>rubber stereos</em> or flexo stereo blocks) used on rotogravure and flexographic printing machines 
              to print logos, borders, and specifications directly onto <strong className="text-stone-900">woven PP/HDPE sacks and packaging bags</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-700 bg-white/70 backdrop-blur-xs p-2.5 rounded-lg border border-amber-500/20 shrink-0">
          <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Woven Bag Printing Plates</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <XCircle className="w-4 h-4 text-stone-400" />
            <span className="line-through text-stone-400">No Tires / Gaskets</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <XCircle className="w-4 h-4 text-stone-400" />
            <span className="line-through text-stone-400">No Audio Stereos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
