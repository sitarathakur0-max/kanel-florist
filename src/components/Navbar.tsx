import React, { useState } from 'react';
import { Menu, X, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/floristData';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'bouquets' | 'visit';
  onNavigate: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'about' | 'bouquets' | 'visit'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'bouquets', label: 'Bouquets & Arrangements' },
    { id: 'visit', label: 'Visit Us' },
  ];

  const handleNavClick = (page: 'home' | 'about' | 'bouquets' | 'visit') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DD] transition-all duration-300">
      {/* Top micro-bar with factual details */}
      <div className="bg-[#220E24] text-[#FAF7F2] text-xs px-4 py-2 flex items-center justify-between font-sans">
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <span className="flex items-center gap-1 text-[#F8DFD4]">
            <MapPin className="w-3.5 h-3.5 text-[#D9654E]" />
            <span>Strehlgasse 2, 8001 Zürich, Switzerland</span>
          </span>
          <span className="hidden md:inline text-[#EFE8DD]/40">|</span>
          <span className="hidden md:flex items-center gap-1 text-[#FAF7F2]/90">
            <Star className="w-3.5 h-3.5 fill-[#D9654E] text-[#D9654E]" />
            <strong className="font-semibold text-white">4.7 / 5</strong> from 62 reviews
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-[#F8DFD4]/80 text-[11px] uppercase tracking-wider">
            Boutique Florist in Zürich Old Town
          </span>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none"
            aria-label="Kanel Florist Home"
          >
            <span className="block font-serif text-2xl sm:text-3xl text-[#220E24] tracking-tight group-hover:text-[#D9654E] transition-colors">
              Kanel Florist
            </span>
            <span className="block text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#220E24]/60 -mt-1">
              Zürich · Strehlgasse 2
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                  currentPage === item.id
                    ? 'text-[#220E24] font-semibold'
                    : 'text-[#220E24]/70 hover:text-[#D9654E]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D9654E] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="header-visit-cta"
              onClick={() => handleNavClick('visit')}
              className="inline-flex items-center gap-2 bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Visit Kanel Florist</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F8DFD4]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#220E24] hover:text-[#D9654E] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EFE8DD] px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#F8DFD4] text-[#220E24] font-semibold'
                    : 'text-[#220E24]/80 hover:bg-[#EFE8DD]/50'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#D9654E]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EFE8DD] space-y-2">
            <div className="px-4 text-xs text-[#220E24]/70">
              <p className="font-semibold text-[#220E24]">{BUSINESS_DETAILS.name}</p>
              <p>{BUSINESS_DETAILS.address}</p>
              <p className="mt-1 flex items-center gap-1 text-[#D9654E] font-medium">
                <Star className="w-3 h-3 fill-[#D9654E]" />
                {BUSINESS_DETAILS.rating} / {BUSINESS_DETAILS.maxRating} from {BUSINESS_DETAILS.reviewCount} reviews
              </p>
            </div>
            <div className="px-4 pt-2">
              <button
                id="mobile-drawer-visit-cta"
                onClick={() => handleNavClick('visit')}
                className="w-full text-center bg-[#220E24] text-[#FAF7F2] py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Visit Kanel Florist</span>
                <ArrowUpRight className="w-4 h-4 text-[#F8DFD4]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
