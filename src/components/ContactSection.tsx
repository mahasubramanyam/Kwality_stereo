import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, MapPin, Building, User } from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '../data/businessData';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    company: '',
    bagType: 'Cattle Feed 50kg',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `*NEW INQUIRY VIA WEBSITE - KWALITY STEREO*
Name: ${formState.name || 'Packaging Buyer'}
Phone: ${formState.phone || 'Not provided'}
Mill / Company: ${formState.company || 'Not provided'}
Bag Type: ${formState.bagType}
Requirements: ${formState.message || 'Please share catalog and price list for rubber stereos.'}`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-ink border-b border-paper-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-print-red mb-2">
            Direct Manufacturer Connect
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold font-display text-ink">
            Contact Mohan for Rubber Stereo Quotes & Technical Drawings
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Whether you need a new master rubber stereo set for a cattle feed launch, custom Tamil/Punjabi language stereos, or standard L30x10 packs, call or message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Mohan Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mohan Direct Card */}
            <div className="bg-ink text-paper rounded-md p-6 sm:p-7 border border-[#333333] space-y-5">
              <div className="flex items-center gap-4 border-b border-[#333333] pb-5">
                <div className="w-12 h-12 rounded-full bg-print-red flex items-center justify-center text-white font-display font-semibold text-xl">
                  M
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-print-red">
                    Proprietor & Technical Lead
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-white mt-0.5">
                    {BUSINESS_INFO.founder}
                  </h3>
                  <p className="text-xs text-[#9E9B93]">
                    Managing Director · Kwality Stereo
                  </p>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="space-y-3">
                <div className="text-xs text-[#9E9B93] font-medium">Direct Telephone & WhatsApp:</div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="flex items-center gap-3 text-2xl sm:text-3xl font-mono font-medium text-white hover:text-print-red transition-colors tracking-tight"
                >
                  <div className="p-2 rounded-md bg-print-red/20 text-print-red">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                {/* Email Address */}
                <div className="pt-2">
                  <div className="text-xs text-[#9E9B93] font-medium mb-1">Direct Email:</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-2.5 text-[#D0CCC2] hover:text-print-red text-sm font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-print-red" />
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#333333]">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="pt-3 border-t border-[#333333] flex items-center gap-2 text-xs text-[#9E9B93]">
                <Clock className="w-4 h-4 text-print-red shrink-0" />
                <span>Working Hours: Mon – Sat (8:00 AM – 8:30 PM IST)</span>
              </div>
            </div>

            {/* Quick Addresses Recap */}
            <div className="bg-paper rounded-md border border-paper-dark p-5 space-y-4 text-xs text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-print-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block font-display text-sm">Tamil Nadu Works:</strong>
                  Puliyanthoppu, Uthangarai Upparatti VTC, Krishnagiri - 635207
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-paper-dark">
                <MapPin className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink block font-display text-sm">Bangalore Hub:</strong>
                  109, 2nd Cross, 1st Main, Kanaka Nagar, Munikrishnappa Layout, Sangolli Rayanna Main Road, Bangalore - 560072
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-paper rounded-md border border-paper-dark p-6 sm:p-8">
            
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-print-red">
                Fast Turnaround Inquiry
              </span>
              <h3 className="text-lg sm:text-xl font-semibold font-display text-ink mt-1">
                Send Your Bag Details or Request a Callback
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Fill out the form below to receive a customized quote. You can also send CorelDraw (.CDR) or PDF artwork directly to our WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-md p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base sm:text-lg text-emerald-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                    Thank you {formState.name || 'Sir'}. Mohan has been notified and will call you back at <strong className="font-mono font-medium">{formState.phone}</strong> shortly.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send on WhatsApp for Faster Reply</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-muted hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                      Your Name / Contact Person *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-md border border-paper-dark bg-white text-ink text-sm focus:ring-2 focus:ring-print-red focus:border-print-red outline-none"
                      />
                      <User className="w-4 h-4 text-[#9E9B93] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                      Mobile Number (Calling / WhatsApp) *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-md border border-paper-dark bg-white text-ink text-sm focus:ring-2 focus:ring-print-red focus:border-print-red outline-none"
                      />
                      <Phone className="w-4 h-4 text-[#9E9B93] absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                      Company / Mill / Brand Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Balaji Feeds / Kisan Agro"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-md border border-paper-dark bg-white text-ink text-sm focus:ring-2 focus:ring-print-red focus:border-print-red outline-none"
                      />
                      <Building className="w-4 h-4 text-[#9E9B93] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                      Packaging Bag Category
                    </label>
                    <select
                      value={formState.bagType}
                      onChange={(e) => setFormState({ ...formState, bagType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-md border border-paper-dark bg-white text-ink text-sm focus:ring-2 focus:ring-print-red focus:border-print-red outline-none"
                    >
                      <option value="Cattle Feed 50kg">Cattle Feed (50kg / 40kg / 25kg)</option>
                      <option value="Flour Mill Atta Bag">Flour Mill / Atta (50kg / 30kg / 10kg)</option>
                      <option value="Poultry Feed Bag">Poultry Feed (Broiler / Layer Sacks)</option>
                      <option value="Fertilizer / Agro Chemical">Fertilizer / Agri / Seeds (HDPE Sacks)</option>
                      <option value="Standard L30x10 Packs">Standard L30 x 10 Pack Orders</option>
                      <option value="Multi-Language Custom Stereo">Multi-Language Regional Script Stereos</option>
                      <option value="Other Packaging Sack">Other Woven Bag Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-1">
                    Dimensions, Cylinders & Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify cylinder repeat length, bag size (e.g. 22x38 inch), number of colors, language (Tamil/Hindi/Punjabi/etc.), or if you already have CorelDraw artwork ready."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-3 rounded-md border border-paper-dark bg-white text-ink text-sm focus:ring-2 focus:ring-print-red focus:border-print-red outline-none resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-print-red hover:bg-print-red-dark text-white font-bold text-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Mohan</span>
                  </button>

                  <a
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire Direct via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Packaging Industry FAQ Section */}
        <div className="mt-20 border-t border-paper-dark pt-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-print-red">
              Technical FAQ
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold font-display text-ink mt-1">
              Frequently Asked Questions on Bag Printing Rubber Stereos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-paper rounded-md p-5 border border-paper-dark">
                <h4 className="font-display font-semibold text-xs sm:text-sm text-ink">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
