import React from 'react';
import { MapPin, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/floristData';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: 'home' | 'about' | 'bouquets' | 'visit') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#220E24] text-[#FAF7F2] border-t border-[#341838] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D9654E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF7F2]/10">
          {/* Brand & Editorial Presence */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
              Kanel Florist
            </h2>
            <p className="text-sm sm:text-base text-[#F8DFD4]/80 font-sans max-w-md leading-relaxed">
              {BUSINESS_DETAILS.description}. Rooted on Strehlgasse in the historic center of Zürich,
              exploring contemporary botanical form, seasonal harmony, and sculpted floral compositions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/15 text-xs text-[#FAF7F2]">
                <Star className="w-3.5 h-3.5 fill-[#D9654E] text-[#D9654E]" />
                <span>
                  <strong className="text-white">{BUSINESS_DETAILS.rating} / 5</strong> rating from{' '}
                  {BUSINESS_DETAILS.reviewCount} customer reviews
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/15 text-xs text-[#FAF7F2]">
                <MapPin className="w-3.5 h-3.5 text-[#D9654E]" />
                <span>8001 Zürich, Switzerland</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleLinkClick('home')}
                  className="text-[#FAF7F2]/80 hover:text-[#F8DFD4] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleLinkClick('about')}
                  className="text-[#FAF7F2]/80 hover:text-[#F8DFD4] transition-colors"
                >
                  About Kanel Florist
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-bouquets"
                  onClick={() => handleLinkClick('bouquets')}
                  className="text-[#FAF7F2]/80 hover:text-[#F8DFD4] transition-colors"
                >
                  Bouquets & Floral Arrangements
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-visit"
                  onClick={() => handleLinkClick('visit')}
                  className="text-[#FAF7F2]/80 hover:text-[#F8DFD4] transition-colors"
                >
                  Visit the Zürich Shop
                </button>
              </li>
            </ul>
          </div>

          {/* Business Details & Address */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Location & Details
            </h3>
            <div className="text-sm text-[#FAF7F2]/80 space-y-2 leading-relaxed">
              <p className="font-semibold text-white">{BUSINESS_DETAILS.name}</p>
              <p>{BUSINESS_DETAILS.address}</p>
              <p className="text-xs text-[#F8DFD4]/70 pt-1">
                Category: <span className="text-white">{BUSINESS_DETAILS.category}</span>
              </p>
              <p className="text-xs text-[#F8DFD4]/70">
                Phone: <span className="italic">Not provided · Direct shop visits welcome</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                id="footer-maps-link"
                href={BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F8DFD4] hover:text-[#D9654E] transition-colors"
              >
                <span>Find Us on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/60 gap-4">
          <p>
            © {new Date().getFullYear()} Kanel Florist. All rights reserved. Flower shop in Zürich, Switzerland.
          </p>
          <div className="flex items-center gap-6">
            <span>English</span>
            <span className="text-[#FAF7F2]/20">|</span>
            <span>Strehlgasse 2, 8001 Zürich</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
