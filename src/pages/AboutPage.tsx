import React from 'react';
import { MapPin, Star, ArrowUpRight, Compass, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_DETAILS, IMAGES } from '../data/floristData';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] text-[#220E24]">
      {/* Page Header */}
      <section className="pt-16 pb-20 border-b border-[#EFE8DD] bg-[#FDF3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EFE8DD] text-xs font-semibold text-[#220E24] mb-6">
            <span className="text-[#D9654E]">About the Florist</span>
            <span>·</span>
            <span>Strehlgasse 2, 8001 Zürich</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#220E24] leading-[0.98] max-w-4xl">
            Kanel Florist: Contemporary botanical design in Zürich Old Town.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#220E24]/80 font-sans max-w-2xl leading-relaxed">
            Operating as a dedicated local flower shop, Kanel Florist provides bouquets and floral
            arrangements crafted with architectural balance, sculptural gestures, and a distinctive
            seasonal palette.
          </p>
        </div>
      </section>

      {/* Main About Story & Image Split */}
      <section className="py-20 lg:py-28 border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
                Our Foundation
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#220E24] leading-tight">
                A focus on form, presence, and natural botanical posture.
              </h2>

              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                At Kanel Florist, floristry is approached as a living visual medium. Rather than mass-producing
                conventional round bunches, our arrangements celebrate the individual lines of each stem—the
                graceful arch of a branch, the textural intrigue of a seedpod, or the delicate layering of
                ranunculus and dahlia petals.
              </p>

              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                Located at Strehlgasse 2 in Zürich, the shop offers an intimate setting where locals and
                visitors can engage with fresh stems directly. By focusing specifically on bouquets and floral
                arrangements, every composition receives direct artisanal attention.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD]">
                  <span className="text-xs text-[#220E24]/60 uppercase tracking-wider block">Official Category</span>
                  <span className="font-serif text-xl text-[#220E24]">{BUSINESS_DETAILS.category}</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD]">
                  <span className="text-xs text-[#220E24]/60 uppercase tracking-wider block">Customer Trust</span>
                  <span className="font-serif text-xl text-[#D9654E]">4.7 / 5 (62 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-md">
                <img
                  src={IMAGES.craft}
                  alt="Florist hands conditioning fresh seasonal stems at Kanel Florist in Zürich"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md rounded-xl p-4 border border-[#EFE8DD] text-left">
                  <p className="text-[11px] uppercase tracking-widest text-[#D9654E] font-semibold">
                    Studio Philosophy
                  </p>
                  <p className="font-serif text-base text-[#220E24] mt-0.5">
                    Careful stem selection, conditioning, and sculptural vessel balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-20 lg:py-28 bg-[#FDF3EE] border-b border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Botanical Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24]">
              Guiding principles in every bouquet and arrangement.
            </h2>
            <p className="text-base text-[#220E24]/80 font-sans">
              Our floral perspective brings contemporary runway palettes into dialogue with classical Swiss
              urban sensibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center font-serif text-lg font-semibold">
                01
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Palette Sophistication</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Color combinations anchored in rich midnight plum, warm terracotta coral, gentle peach,
                and airy ivory hues that elevate any room.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center font-serif text-lg font-semibold">
                02
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Sculptural Negative Space</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Avoiding dense, suffocated bundles. We give each blossom breathing room so its natural
                silhouette can be admired from every angle.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center font-serif text-lg font-semibold">
                03
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Honest Flower Craft</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                No gimmicks or artificial embellishments. Pure floral materials, cleanly trimmed and
                hydrated with fresh cold water to maximize vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Zürich Strehlgasse Context */}
      <section className="py-20 lg:py-28 border-b border-[#EFE8DD] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-sm">
                <img
                  src={IMAGES.shop}
                  alt="Kanel Florist boutique environment on Strehlgasse in Zürich"
                  className="w-full h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
                Neighborhood Setting
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#220E24] leading-tight">
                Strehlgasse 2: A tranquil corner in historic Zürich.
              </h2>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                Strehlgasse winds gently through Zürich's pedestrian Old Town, connecting the elevated
                tranquility of Lindenhof with the vibrant life along the Limmat river. It is a neighborhood
                characterized by historic architecture, stone storefronts, and an appreciation for
                unhurried craftsmanship.
              </p>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                Visitors are encouraged to visit Kanel Florist in person to experience the day's fresh
                arrivals, consult on bespoke floral arrangements, and take in the serene ambiance of our shop.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  id="about-visit-btn"
                  onClick={() => onNavigate('visit')}
                  className="bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Visit Kanel Florist on Strehlgasse</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8DFD4]" />
                </button>
                <button
                  id="about-bouquets-btn"
                  onClick={() => onNavigate('bouquets')}
                  className="bg-[#F8DFD4] hover:bg-[#f3cfc2] text-[#220E24] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors border border-[#EFE8DD]"
                >
                  <span>Explore Floral Arrangements</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
