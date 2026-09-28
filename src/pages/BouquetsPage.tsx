import React from 'react';
import { ArrowUpRight, Sparkles, Droplets, Scissors, Sun, ShieldCheck, Flower2 } from 'lucide-react';
import { BUSINESS_DETAILS, IMAGES, FLORAL_DISCIPLINES } from '../data/floristData';

interface BouquetsPageProps {
  onNavigate: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const BouquetsPage: React.FC<BouquetsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] text-[#220E24]">
      {/* Page Header */}
      <section className="pt-16 pb-20 border-b border-[#EFE8DD] bg-[#FDF3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EFE8DD] text-xs font-semibold text-[#220E24] mb-6">
            <span className="text-[#D9654E]">Floral Offerings</span>
            <span>·</span>
            <span>Kanel Florist Zürich</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#220E24] leading-[0.98] max-w-4xl">
            Bouquets & Floral Arrangements.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#220E24]/80 font-sans max-w-2xl leading-relaxed">
            Exploring the dynamic interplay of stem structure, tonal harmony, and sculptural form in
            every bouquet and vessel arrangement created at our Strehlgasse flower shop.
          </p>
        </div>
      </section>

      {/* Editorial Overview Section with Image */}
      <section className="py-20 lg:py-28 border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-md">
                <img
                  src={IMAGES.arrangements}
                  alt="Contemporary artisanal floral bouquet wrapped in natural linen paper by Kanel Florist"
                  className="w-full h-[540px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#220E24]/90 backdrop-blur-md rounded-xl p-4 text-left border border-white/10">
                  <p className="text-[11px] uppercase tracking-widest text-[#F8DFD4] font-medium">
                    Signature Palette
                  </p>
                  <p className="font-serif text-sm sm:text-base text-white mt-0.5">
                    Midnight plum dahlias, soft coral ranunculus, and warm ivory botanical textures.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
                Design Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#220E24] leading-tight">
                Architectural balance and living botanical rhythm.
              </h2>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                Floral design at Kanel Florist is shaped by careful spatial geometry. We consider how stems
                lean naturally, how negative space gives each blossom a distinct silhouette, and how colors
                transition seamlessly across the visual field.
              </p>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                Whether you are seeking an expressive hand-tied bouquet wrapped in textured paper or a
                sculptural floral arrangement seated in a curated vessel, our floral work is tailored to
                elevate living spaces and shared occasions.
              </p>

              <div className="pt-2">
                <button
                  id="bouquets-visit-cta"
                  onClick={() => onNavigate('visit')}
                  className="bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Visit the Shop on Strehlgasse</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8DFD4]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars of Our Arrangements */}
      <section className="py-20 lg:py-28 bg-[#FDF3EE] border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              The Floral Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24]">
              Bouquets & Arrangements detailed.
            </h2>
            <p className="text-base text-[#220E24]/80 font-sans">
              Every creation balances four essential aesthetic criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {FLORAL_DISCIPLINES.map((disc, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-7 border border-[#EFE8DD] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D9654E] font-semibold block mb-2">
                    {disc.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#220E24] mb-3">{disc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#220E24]/75 leading-relaxed">
                    {disc.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EFE8DD] flex items-center gap-2 text-xs text-[#220E24]/60">
                  <Flower2 className="w-3.5 h-3.5 text-[#D9654E]" />
                  <span>Kanel Florist Craft</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flower Care Guide for Zurich Homes */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Longevity & Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24]">
              Caring for fresh arrangements at home.
            </h2>
            <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
              Proper handling allows fresh stems to unfold completely, rewarding your home with enduring
              vitality and fragrance. Follow these fundamental floral care principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-[#FDF3EE] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#D9654E] flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Clean Angled Trim</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Trim stems at a 45-degree angle every two days with sharp florist shears. This expands
                the surface area for water absorption and prevents air locks from forming.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FDF3EE] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#D9654E] flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Fresh Cold Water</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Replace vase water frequently with cool, clear water. Ensure no foliage sits submerged
                below the waterline to prevent bacterial buildup and maintain water purity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FDF3EE] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#D9654E] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Diffused Light & Cool Air</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Position your bouquet away from direct, harsh sunlight, heating radiators, and drafty air
                currents. Keeping arrangements away from ripening fruit also slows petal decay.
              </p>
            </div>
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[#220E24] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h4 className="font-serif text-2xl text-white">Experience our seasonal varieties in person</h4>
              <p className="text-xs sm:text-sm text-[#F8DFD4]/80">
                Visit Strehlgasse 2 in 8001 Zürich to explore current seasonal stems and curated arrangements.
              </p>
            </div>
            <button
              id="care-visit-btn"
              onClick={() => onNavigate('visit')}
              className="bg-[#D9654E] hover:bg-[#e27660] text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors flex items-center gap-2"
            >
              <span>Visit Kanel Florist</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
