import { MapPin, Truck, Phone, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function LocationsDelivery() {
  const deliveryZones = [
    {
      region: 'South India Hub',
      states: 'Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Kerala',
      transitTime: '24 – 36 Hours',
      carrier: 'Daily direct transport lines & express overnight parcel'
    },
    {
      region: 'Western Industrial Belt',
      states: 'Maharashtra, Gujarat, Goa, Madhya Pradesh',
      transitTime: '48 Hours',
      carrier: 'VRL Logistics, Navata, SafeXpress & Priority Cargo'
    },
    {
      region: 'Northern & Grain Mandi Hubs',
      states: 'Punjab, Haryana, Uttar Pradesh, Rajasthan, Delhi-NCR',
      transitTime: '48 – 72 Hours',
      carrier: 'Dedicated express road transit & Speed Post'
    },
    {
      region: 'Eastern & Central Mills',
      states: 'West Bengal, Odisha, Bihar, Chhattisgarh, Assam',
      transitTime: '48 – 72 Hours',
      carrier: 'Air Cargo option & Express Road Logistics'
    }
  ];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-paper text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
            Strategic Presence & Logistics
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
            Manufacturing in Krishnagiri & Bangalore — Delivering Across India
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            With our primary vulcanizing works located in Tamil Nadu and our rapid dispatch hub in Bangalore, 
            Kwality Stereo supplies woven sack bag manufacturers and flexo printing presses nationwide.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Krishnagiri Facility */}
          <div className="bg-white rounded-md border border-paper-dark p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-print-red text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-sm">
              Primary Works
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-md bg-print-red/10 text-print-red flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-print-red">
                  Tamil Nadu Production Unit
                </span>
                <h3 className="text-lg sm:text-xl font-semibold font-display text-ink mt-0.5">
                  Krishnagiri Facility
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted mt-4">
              <div className="p-3.5 rounded-sm bg-paper border border-paper-dark">
                <div className="text-xs font-bold text-ink mb-1">Full Postal Address:</div>
                <p className="font-medium text-ink leading-relaxed">
                  Puliyanthoppu, Uthangarai Upparatti VTC,<br />
                  Krishnagiri - 635207, Tamil Nadu, India
                </p>
                <div className="text-xs text-print-red font-bold mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Pan-India Delivery Dispatches from this Facility</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-muted space-y-1">
                <div><strong className="text-ink">Facilities:</strong> High-pressure vulcanizing presses, large-bed relief engravers, multi-language typesetting, L30 pack inventory.</div>
                <div><strong className="text-ink">Lead Time:</strong> Standard jobs ready in 24 hours.</div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-paper-dark flex items-center justify-between">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-print-red"
              >
                <Phone className="w-4 h-4 text-print-red" />
                <span>Call Mohan: <span className="font-mono font-medium">{BUSINESS_INFO.phone}</span></span>
              </a>
              <span className="text-xs font-semibold text-muted">
                Pin: <span className="font-mono font-medium text-ink">635207</span>
              </span>
            </div>
          </div>

          {/* Bangalore Hub */}
          <div className="bg-white rounded-md border border-paper-dark p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ink text-paper text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-sm">
              Express Dispatch Hub
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-md bg-paper-dark text-ink flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  Karnataka Coordination Center
                </span>
                <h3 className="text-lg sm:text-xl font-semibold font-display text-ink mt-0.5">
                  Bangalore Branch
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted mt-4">
              <div className="p-3.5 rounded-sm bg-paper border border-paper-dark">
                <div className="text-xs font-bold text-ink mb-1">Full Postal Address:</div>
                <p className="font-medium text-ink leading-relaxed">
                  109, 2nd Cross, 1st Main, Kanaka Nagar,<br />
                  Munikrishnappa Layout, Sangolli Rayanna Main Road,<br />
                  Bangalore, Karnataka - 560072, India
                </p>
                <div className="text-xs text-muted font-bold mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ink" />
                  <span>Client Meetings, Technical Sample Verifications & Dispatch</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-muted space-y-1">
                <div><strong className="text-ink">Specialties:</strong> Technical client support, proof approval, cylinder pitch matching, rapid interstate parcel forwarding.</div>
                <div><strong className="text-ink">Connectivity:</strong> Immediate access to national transport junctions.</div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-paper-dark flex items-center justify-between">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-print-red"
              >
                <Mail className="w-4 h-4 text-print-red" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <span className="text-xs font-semibold text-muted">
                Pin: <span className="font-mono font-medium text-ink">560072</span>
              </span>
            </div>
          </div>

        </div>

        {/* Pan-India Delivery Network Details */}
        <div className="bg-ink text-paper rounded-md p-6 sm:p-10 border border-[#333333]">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-print-red text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Pan-India Transit Logistics</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold font-display text-white mt-1">
              Guaranteed Safe Transit to Every District & Industrial Estate in India
            </h3>
            <p className="text-[#D0CCC2] text-xs sm:text-sm mt-2">
              Every rubber stereo is cleaned, coated with protective release talc, rolled with heavy protective backing, 
              and packed in weather-resistant corrugated containers or wooden batten crates to arrive in pristine condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryZones.map((zone, idx) => (
              <div
                key={idx}
                className="bg-ink-soft p-5 rounded-md border border-[#333333] flex flex-col justify-between"
              >
                <div>
                  <div className="text-print-red font-semibold text-sm font-display">{zone.region}</div>
                  <div className="text-[#D0CCC2] text-xs mt-1.5 leading-relaxed">{zone.states}</div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#333333]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9E9B93]">Transit Time:</span>
                    <span className="font-semibold text-emerald-400 font-mono">{zone.transitTime}</span>
                  </div>
                  <div className="text-[11px] text-[#9E9B93] mt-1">{zone.carrier}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Carrier List */}
          <div className="mt-8 pt-6 border-t border-[#333333] flex flex-wrap items-center justify-between gap-4 text-xs text-[#9E9B93]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-print-red" />
              <span>Transit Insurance Available on Bulk Stereo Shipments</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-semibold text-[#D0CCC2]">
              <span>Logistics Partners:</span>
              <span className="text-copper">VRL Logistics</span>
              <span>·</span>
              <span className="text-copper">Navata Road Transport</span>
              <span>·</span>
              <span className="text-copper">KPN Express</span>
              <span>·</span>
              <span className="text-copper">ABT Parcel</span>
              <span>·</span>
              <span className="text-copper">India Post Speed Post</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
