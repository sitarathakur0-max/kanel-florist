import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Send, Sparkles, Footprints, Train } from 'lucide-react';
import { BUSINESS_DETAILS, IMAGES } from '../data/floristData';

interface VisitSectionProps {
  embedded?: boolean;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ embedded = false }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Visiting the Shop',
    message: '',
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DETAILS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="visit-kanel-florist-section"
      className={`${embedded ? 'py-16' : 'py-24'} bg-[#FAF7F2] relative`}
      aria-labelledby="visit-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8DFD4] text-[#220E24] text-xs font-medium mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D9654E]" />
            <span>Strehlgasse 2, 8001 Zürich</span>
          </div>
          <h2 id="visit-section-heading" className="font-serif text-4xl sm:text-5xl text-[#220E24] tracking-tight">
            Visit Kanel Florist in Zürich.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#220E24]/75 font-sans leading-relaxed">
            Located on Strehlgasse in the historic heart of Zürich, Kanel Florist welcomes visitors
            seeking fresh bouquets and contemporary floral arrangements in an intimate Old Town setting.
          </p>
        </div>

        {/* Two-Column Grid: Location Details & Inquiry Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location & Arrival Context */}
          <div className="lg:col-span-6 space-y-8">
            {/* Architectural & Geographic Card */}
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#EFE8DD] p-8 shadow-xs relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#D9654E] font-semibold block">
                    Boutique Address
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#220E24] mt-1">
                    {BUSINESS_DETAILS.name}
                  </h3>
                  <p className="text-base text-[#220E24] font-medium mt-1">
                    {BUSINESS_DETAILS.address}
                  </p>
                </div>
                <button
                  id="copy-address-button"
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl border border-[#EFE8DD] bg-[#FAF7F2] hover:bg-[#F8DFD4] text-[#220E24] transition-colors flex items-center gap-1.5 text-xs font-medium shrink-0"
                  aria-label="Copy address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#D9654E]" />
                      <span className="text-[#D9654E]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#220E24]/70" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact details notice */}
              <div className="p-4 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD] space-y-2 text-xs text-[#220E24]/80">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#220E24]">Category:</span>
                  <span>{BUSINESS_DETAILS.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#220E24]">Customer Rating:</span>
                  <span className="text-[#D9654E] font-semibold">{BUSINESS_DETAILS.rating} / 5 (62 reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#220E24]">Telephone:</span>
                  <span className="text-[#220E24]/60 italic">Not provided · Walk-in visits welcome</span>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="mt-6 pt-6 border-t border-[#EFE8DD] flex flex-wrap items-center gap-4">
                <a
                  id="open-google-maps-link"
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#F8DFD4]" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Walking & Transit directions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#FDF3EE]/60 border border-[#EFE8DD]">
                <div className="flex items-center gap-2 text-[#D9654E] mb-3">
                  <Footprints className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#220E24]">
                    On Foot from Lindenhof
                  </h4>
                </div>
                <p className="text-xs text-[#220E24]/80 leading-relaxed">
                  Strehlgasse is a charming cobblestone pedestrian lane running gently below the Lindenhof
                  terrace toward the Limmat. Stroll through the historic alleys to number 2.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FDF3EE]/60 border border-[#EFE8DD]">
                <div className="flex items-center gap-2 text-[#D9654E] mb-3">
                  <Train className="w-5 h-5" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#220E24]">
                    Public Transit Access
                  </h4>
                </div>
                <p className="text-xs text-[#220E24]/80 leading-relaxed">
                  Conveniently reachable from tram stops at Rathaus, Helmhaus, or Rennweg, and only an
                  8-minute stroll from Zürich Hauptbahnhof (HB).
                </p>
              </div>
            </div>

            {/* Boutique Atmosphere preview image */}
            <div className="rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-sm relative group">
              <img
                src={IMAGES.shop}
                alt="Kanel Florist boutique interior in Zürich Old Town"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#220E24]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-[#FAF7F2]">
                  <p className="text-[11px] uppercase tracking-widest text-[#F8DFD4] font-medium">
                    Strehlgasse 2 · Zürich Altstadt
                  </p>
                  <p className="font-serif text-lg sm:text-xl text-white">
                    Step inside for fresh seasonal stems and artful floral design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiries & Visit Contact Interface */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#EFE8DD] p-8 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[#D9654E] font-semibold">
                  Get in Touch
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#220E24] mt-1">
                  Connect Regarding Floral Inquiries
                </h3>
                <p className="text-sm text-[#220E24]/75 mt-2 leading-relaxed">
                  Have a question before visiting Strehlgasse 2? Reach out directly below to inquire
                  about bouquets, floral arrangements, or planning an in-person visit.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#FDF3EE] border border-[#D9654E]/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#D9654E]/10 text-[#D9654E] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#220E24]">Thank you for your message</h4>
                  <p className="text-sm text-[#220E24]/80 max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.inquiryType}</strong> has been received.
                    We look forward to welcoming you to <strong>Kanel Florist at Strehlgasse 2, 8001 Zürich</strong>.
                  </p>
                  <button
                    id="reset-form-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', inquiryType: 'Visiting the Shop', message: '' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#220E24] hover:text-[#D9654E] transition-colors pt-2"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form id="visit-inquiry-form" onSubmit={handleFormSubmit} className="space-y-5 text-left">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-medium uppercase tracking-wider text-[#220E24]/80 mb-2">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Sophie Meier"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DD] text-sm text-[#220E24] placeholder-[#220E24]/40 focus:outline-none focus:border-[#D9654E] focus:ring-1 focus:ring-[#D9654E] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-medium uppercase tracking-wider text-[#220E24]/80 mb-2">
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="sophie@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DD] text-sm text-[#220E24] placeholder-[#220E24]/40 focus:outline-none focus:border-[#D9654E] focus:ring-1 focus:ring-[#D9654E] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-type" className="block text-xs font-medium uppercase tracking-wider text-[#220E24]/80 mb-2">
                      Topic of Interest
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DD] text-sm text-[#220E24] focus:outline-none focus:border-[#D9654E] focus:ring-1 focus:ring-[#D9654E] transition-colors"
                    >
                      <option value="Visiting the Shop">Visiting the Shop on Strehlgasse</option>
                      <option value="Bouquets & Fresh Stems">Bouquets & Fresh Stems</option>
                      <option value="Floral Arrangements">Floral Arrangements & Vessels</option>
                      <option value="General Question">General Floral Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-medium uppercase tracking-wider text-[#220E24]/80 mb-2">
                      Your Message or Note
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      required
                      placeholder="Share details about your floral questions or planned visit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DD] text-sm text-[#220E24] placeholder-[#220E24]/40 focus:outline-none focus:border-[#D9654E] focus:ring-1 focus:ring-[#D9654E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    className="w-full bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#F8DFD4]" />
                  </button>

                  <p className="text-[11px] text-[#220E24]/60 text-center">
                    Note: Phone contact is not provided. We invite you to visit our shop on Strehlgasse 2 in Zürich.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
