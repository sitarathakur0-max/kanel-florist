import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  Star,
  Flower2,
  Compass,
  Layers,
  Heart,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import {
  BUSINESS_DETAILS,
  IMAGES,
  FLORAL_DISCIPLINES,
  EVERYDAY_OCCASIONS,
} from '../data/floristData';
import { RatingSection } from '../components/RatingSection';
import { VisitSection } from '../components/VisitSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] text-[#220E24]">
      {/* =========================================================================
          SECTION 1: STRIKING EDITORIAL HERO
          ========================================================================= */}
      <section
        id="hero-section"
        className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#EFE8DD]"
        aria-labelledby="hero-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Contextual eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8DFD4] text-[#220E24] text-xs font-semibold tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#D9654E]" />
                <span>Strehlgasse 2 · 8001 Zürich</span>
                <span className="text-[#220E24]/30">|</span>
                <span className="flex items-center gap-1 text-[#D9654E]">
                  <Star className="w-3 h-3 fill-[#D9654E]" />
                  4.7 / 5 (62 reviews)
                </span>
              </div>

              {/* Main Headline with high-contrast serif */}
              <h1
                id="hero-title"
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#220E24] leading-[0.95]"
              >
                Kanel Florist <br />
                <span className="italic font-serif font-light text-[#D9654E]">
                  in Zürich.
                </span>
              </h1>

              {/* Subheadline and descriptive copy */}
              <p className="text-lg sm:text-xl text-[#220E24]/80 font-sans max-w-xl leading-relaxed">
                A local flower shop dedicated to bouquets and sculptural floral arrangements,
                bringing contemporary botanical elegance to the historic cobblestones of Strehlgasse.
              </p>

              {/* Action CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="hero-cta-visit"
                  onClick={() => onNavigate('visit')}
                  className="bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-sm hover:shadow"
                >
                  <span>Visit Kanel Florist</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8DFD4]" />
                </button>

                <button
                  id="hero-cta-arrangements"
                  onClick={() => onNavigate('bouquets')}
                  className="bg-[#F8DFD4] hover:bg-[#f3cfc2] text-[#220E24] px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-all border border-[#EFE8DD]"
                >
                  <span>Explore Floral Arrangements</span>
                </button>

                <button
                  id="hero-cta-about"
                  onClick={() => onNavigate('about')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#220E24] hover:text-[#D9654E] px-4 py-3 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Discover the Shop</span>
                  <span>→</span>
                </button>
              </div>

              {/* Factual bullet notes */}
              <div className="pt-6 border-t border-[#EFE8DD] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#220E24]/75">
                <div>
                  <span className="font-semibold text-[#220E24] block">Category</span>
                  <span>{BUSINESS_DETAILS.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#220E24] block">Rating</span>
                  <span>{BUSINESS_DETAILS.rating} / 5 (62 reviews)</span>
                </div>
                <div>
                  <span className="font-semibold text-[#220E24] block">Location</span>
                  <span>Zürich Old Town (8001)</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Asymmetrical background accent shape */}
                <div className="absolute -inset-4 bg-[#F8DFD4]/60 rounded-3xl transform rotate-2 pointer-events-none" />
                
                <div className="relative rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-lg bg-[#FAF7F2]">
                  <img
                    src={IMAGES.hero}
                    alt="Contemporary sculptural floral arrangement by Kanel Florist featuring midnight plum dahlias, soft coral ranunculus, and pale peach blooms"
                    className="w-full h-[460px] sm:h-[540px] object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating editorial caption card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md rounded-xl p-4 border border-[#EFE8DD] text-left">
                    <p className="text-[11px] uppercase tracking-widest text-[#D9654E] font-semibold">
                      Sculptural Curation
                    </p>
                    <p className="font-serif text-base text-[#220E24] mt-0.5">
                      Midnight plum, soft coral, and pale peach botanical harmonies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DETAILED INTRODUCTION TO THE FLOWER SHOP & ZÜRICH LOCATION
          ========================================================================= */}
      <section
        id="location-introduction-section"
        className="py-20 lg:py-28 border-b border-[#EFE8DD] bg-[#FAF7F2]"
        aria-labelledby="location-intro-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 text-left">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold block mb-3">
                Strehlgasse 2 · Zürich Altstadt
              </span>
              <h2
                id="location-intro-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#220E24] leading-tight"
              >
                A dedicated floral boutique in the heart of Zürich.
              </h2>
            </div>

            <div className="lg:col-span-8 text-left space-y-6">
              <p className="text-base sm:text-lg text-[#220E24]/85 font-sans leading-relaxed">
                Tucked into the atmospheric lanes of Zürich’s Old Town at Strehlgasse 2, Kanel Florist
                serves as a local sanctuary for floral design. Situated just moments from the historic
                Lindenhof elevation and the clear waters of the Limmat, our location provides a tranquil
                space for exploring living botanical craft.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-sm text-[#220E24]/80">
                <div className="p-5 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD]">
                  <h3 className="font-serif text-xl text-[#220E24] mb-2">Pedestrian Atmosphere</h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Strehlgasse is a historic pedestrian path, allowing visitors to browse floral
                    compositions at an unhurried, thoughtful pace away from vehicular traffic.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD]">
                  <h3 className="font-serif text-xl text-[#220E24] mb-2">Central 8001 Convenience</h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Centrally located within Zürich’s 8001 district, easily accessible from Bahnhofstrasse,
                    Rennweg, and Zürich Hauptbahnhof within a brief walk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SUBSTANTIAL ABOUT KANEL FLORIST
          ========================================================================= */}
      <section
        id="about-kanel-florist-section"
        className="py-20 lg:py-28 bg-[#FDF3EE] border-b border-[#EFE8DD]"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              About Kanel Florist
            </span>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
              Honoring botanical form through considered floral artistry.
            </h2>
            <p className="text-base sm:text-lg text-[#220E24]/80 font-sans leading-relaxed">
              Kanel Florist operates under the official category of Florist, providing bouquets and
              floral arrangements to Zürich residents, professionals, and visitors. Rather than treating
              flowers as uniform commodities, our approach emphasizes the distinct character of each stem,
              celebrating natural curves, textures, and nuanced color transitions.
            </p>
          </div>

          {/* Three editorial columns detailing core factual identity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Flower2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Bouquets & Arrangements</h3>
              <p className="text-sm text-[#220E24]/80 leading-relaxed">
                Providing fresh bouquets and floral arrangements curated with seasonal harmony and
                refined visual weight, designed to complement residential and professional spaces.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Historic Old Town Setting</h3>
              <p className="text-sm text-[#220E24]/80 leading-relaxed">
                Rooted at Strehlgasse 2 in Zürich (8001), offering an intimate neighborhood shopping
                experience with direct personal attention from knowledgeable florist staff.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Verified Quality Score</h3>
              <p className="text-sm text-[#220E24]/80 leading-relaxed">
                Proudly rated 4.7 / 5 across 62 verified customer reviews, reflecting consistent
                satisfaction with our fresh flowers, arrangements, and shop hospitality.
              </p>
            </div>
          </div>

          <div className="mt-12 text-left">
            <button
              id="about-cta-link"
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#220E24] hover:text-[#D9654E] border-b-2 border-[#220E24] hover:border-[#D9654E] pb-1 transition-colors"
            >
              <span>Read More About Kanel Florist</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DETAILED BOUQUETS & FLORAL ARRANGEMENTS SECTION
          ========================================================================= */}
      <section
        id="bouquets-arrangements-section"
        className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE8DD]"
        aria-labelledby="bouquets-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-md group">
                <img
                  src={IMAGES.arrangements}
                  alt="Art-directed contemporary floral bouquet wrapped in textured linen paper by Kanel Florist"
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#220E24]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-left text-[#FAF7F2]">
                    <span className="text-xs uppercase tracking-widest text-[#F8DFD4] font-medium">
                      Bouquets & Arrangements
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-1">
                      Textural Depth & Color Harmony
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right text & disciplines */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
                Floral Offerings
              </span>
              <h2 id="bouquets-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
                Expressive bouquets and sculptural floral arrangements.
              </h2>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                At Kanel Florist, bouquets and floral arrangements are shaped around the natural architecture
                of botanicals. By pairing contrasting textures—from velvety plum petals and fragile coral
                blooms to sculptural seedpods and branch foliage—every composition tells a cohesive visual story.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {FLORAL_DISCIPLINES.map((discipline, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FDF3EE] border border-[#EFE8DD] space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#D9654E] font-semibold">
                      {discipline.subtitle}
                    </span>
                    <h4 className="font-serif text-xl text-[#220E24]">{discipline.title}</h4>
                    <p className="text-xs text-[#220E24]/75 leading-relaxed">{discipline.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  id="bouquets-cta-btn"
                  onClick={() => onNavigate('bouquets')}
                  className="inline-flex items-center gap-2 bg-[#220E24] hover:bg-[#341838] text-[#FAF7F2] px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore Floral Arrangements</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F8DFD4]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE ROLE OF FLOWERS IN EVERYDAY MOMENTS AND OCCASIONS
          ========================================================================= */}
      <section
        id="everyday-moments-section"
        className="py-20 lg:py-28 bg-[#FDF3EE] border-b border-[#EFE8DD]"
        aria-labelledby="moments-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Botanical Presence
            </span>
            <h2 id="moments-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
              The role of flowers in everyday moments and occasions.
            </h2>
            <p className="text-base sm:text-lg text-[#220E24]/80 font-sans leading-relaxed">
              Living botanicals bring a calming organic cadence to human environments. Whether marking
              meaningful milestones or simply adding warmth to personal daily routines, fresh floral
              elements transform physical spaces and emotional atmospheres.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {EVERYDAY_OCCASIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#EFE8DD] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#D9654E]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center text-xs font-semibold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-[#220E24]">{item.moment}</h3>
                  <p className="text-xs sm:text-sm text-[#220E24]/75 leading-relaxed">
                    {item.reflection}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EFE8DD]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D9654E] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Quiet Elegance</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FLORAL DESIGN & CRAFTSMANSHIP (VISUAL STORYTELLING)
          ========================================================================= */}
      <section
        id="craftsmanship-section"
        className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE8DD]"
        aria-labelledby="craftsmanship-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
                Studio & Craft
              </span>
              <h2 id="craftsmanship-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
                Precision, care, and the florist’s workbench.
              </h2>
              <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
                True floral craftsmanship requires deep respect for botanical physics and natural decay.
                At Kanel Florist, stems are treated with meticulous care—clearing excess foliage, making
                precise angled cuts to promote water uptake, and arranging flowers with balanced support
                so each petal can unfurl gracefully.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D9654E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#220E24]">Clean Conditioning</h4>
                    <p className="text-xs text-[#220E24]/75">
                      Fresh cold water and trimmed stems ensure maximum hydration and longevity for all arrangements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D9654E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#220E24]">Sculptural Vessel Curation</h4>
                    <p className="text-xs text-[#220E24]/75">
                      Pairing botanicals with ceramic and glass forms that complement floral proportions and textures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D9654E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#220E24]">Seasonal Palette Harmony</h4>
                    <p className="text-xs text-[#220E24]/75">
                      Drawing from the richness of midnight plum, warm terracotta, soft peach, and ivory tones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual storytelling image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#EFE8DD] shadow-md group">
                <img
                  src={IMAGES.craft}
                  alt="Florist hands carefully conditioning fresh flower stems on a limestone workbench at Kanel Florist"
                  className="w-full h-[460px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 left-4 bg-[#220E24]/90 backdrop-blur-md rounded-xl p-4 text-left border border-white/10">
                  <p className="text-[11px] uppercase tracking-widest text-[#F8DFD4] font-medium">
                    Atelier Detail
                  </p>
                  <p className="font-serif text-sm sm:text-base text-white">
                    Handling each stem with patience to highlight its inherent posture and form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT VISITORS CAN EXPECT AT A LOCAL FLOWER SHOP
          ========================================================================= */}
      <section
        id="visitor-expectations-section"
        className="py-20 lg:py-28 bg-[#FDF3EE] border-b border-[#EFE8DD]"
        aria-labelledby="expectations-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              The Boutique Experience
            </span>
            <h2 id="expectations-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
              What visitors can expect when exploring Kanel Florist.
            </h2>
            <p className="text-base sm:text-lg text-[#220E24]/80 font-sans leading-relaxed">
              Stepping inside a local flower shop offers a tactile, sensory experience that cannot be
              replicated through digital screens. At Strehlgasse 2, visitors encounter an intimate
              environment centered on floral variety, fragrance, and considered visual design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#D9654E]">
                01 · Direct Sensory Contact
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Fragrance & Freshness</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Take in the refreshing aroma of chilled greenery, damp earth, and blooming flower petals
                as you examine freshly conditioned stems in the boutique space.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#D9654E]">
                02 · Thoughtful Guidance
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">In-Person Consultation</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Discuss flower selection, vessel proportions, and color palettes directly with florist
                staff who can tailor arrangements to your specific interior aesthetic or gathering.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wider text-[#D9654E]">
                03 · Seasonal Surprises
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Curated Varieties</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Discover uncommon stem varieties, delicate seasonal branches, and artistic compositions
                that evolve from week to week with botanical availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: DEDICATED 4.7 / 5 RATING & REVIEWS SECTION
          ========================================================================= */}
      <RatingSection onVisitClick={() => onNavigate('visit')} />

      {/* =========================================================================
          SECTION 9: PRACTICAL VISIT US SECTION & ZÜRICH OLD TOWN CONTEXT
          ========================================================================= */}
      <VisitSection embedded={true} />

      {/* =========================================================================
          SECTION 10: CLOSING INVITATION & NATURAL CTAS
          ========================================================================= */}
      <section
        id="closing-invitation-section"
        className="py-20 lg:py-28 bg-[#220E24] text-[#FAF7F2] relative overflow-hidden"
        aria-labelledby="closing-heading"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D9654E_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
          <span className="text-xs uppercase tracking-widest text-[#F8DFD4] font-medium inline-block">
            Strehlgasse 2 · 8001 Zürich
          </span>

          <h2 id="closing-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Discover Kanel Florist in person.
          </h2>

          <p className="text-base sm:text-lg text-[#F8DFD4]/80 max-w-2xl mx-auto leading-relaxed">
            We invite you to step into our flower shop on Strehlgasse to explore seasonal bouquets,
            sculptural arrangements, and contemporary floral craft in the historic heart of Zürich.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="closing-cta-visit"
              onClick={() => onNavigate('visit')}
              className="bg-[#D9654E] hover:bg-[#e27660] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <span>Visit Kanel Florist</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="closing-cta-bouquets"
              onClick={() => onNavigate('bouquets')}
              className="bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/20 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Explore Floral Arrangements</span>
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#F8DFD4]/70">
            <span>Address: Strehlgasse 2, 8001 Zürich</span>
            <span>·</span>
            <span>Rating: 4.7 / 5 from 62 reviews</span>
            <span>·</span>
            <span>Florist Category</span>
          </div>
        </div>
      </section>
    </div>
  );
};
