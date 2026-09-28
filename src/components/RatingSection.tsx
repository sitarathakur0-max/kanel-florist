import React from 'react';
import { Star, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/floristData';

interface RatingSectionProps {
  onVisitClick?: () => void;
}

export const RatingSection: React.FC<RatingSectionProps> = ({ onVisitClick }) => {
  // 4.7 rating out of 5 from 62 reviews
  const fullStars = 4;
  const hasPartialStar = true;

  return (
    <section
      id="rating-and-reviews-section"
      className="py-20 bg-[#FDF3EE] border-y border-[#EFE8DD] relative overflow-hidden"
      aria-labelledby="rating-heading"
    >
      {/* Subtle organic decorative elements */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#F8DFD4]/50 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-[#EFE8DD]/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Score Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EFE8DD] text-xs font-medium text-[#220E24]">
              <ShieldCheck className="w-4 h-4 text-[#D9654E]" />
              <span className="tracking-wide">Verified Customer Ratings</span>
            </div>

            <h2 id="rating-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24] leading-tight">
              Recognized with a{' '}
              <span className="italic font-serif text-[#D9654E]">4.7 rating</span> in Zürich.
            </h2>

            <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
              Kanel Florist holds a verified score of <strong>4.7 out of 5 stars</strong> across{' '}
              <strong>62 customer reviews</strong>, reflecting genuine local appreciation for our floral
              arrangements, seasonal bouquets, and warm boutique atmosphere on Strehlgasse.
            </p>

            {onVisitClick && (
              <div className="pt-2">
                <button
                  id="rating-cta-visit-btn"
                  onClick={onVisitClick}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#220E24] hover:text-[#D9654E] border-b-2 border-[#220E24] hover:border-[#D9654E] pb-1 transition-colors"
                >
                  <span>Experience Kanel Florist in Person</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* Rating Metrics Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border border-[#EFE8DD] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#EFE8DD] gap-6">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-6xl sm:text-7xl font-light text-[#220E24]">
                      {BUSINESS_DETAILS.rating}
                    </span>
                    <span className="text-xl text-[#220E24]/50 font-serif">/ {BUSINESS_DETAILS.maxRating}</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#220E24]/70 mt-1">
                    Overall Satisfaction Score
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1 mb-2">
                    {[...Array(fullStars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#D9654E] text-[#D9654E]"
                        aria-hidden="true"
                      />
                    ))}
                    {hasPartialStar && (
                      <div className="relative">
                        <Star className="w-6 h-6 text-[#D9654E]" aria-hidden="true" />
                        <div className="absolute inset-0 overflow-hidden w-[70%]">
                          <Star className="w-6 h-6 fill-[#D9654E] text-[#D9654E]" aria-hidden="true" />
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#220E24]">
                    Based on <strong>{BUSINESS_DETAILS.reviewCount} customer reviews</strong>
                  </p>
                  <p className="text-xs text-[#220E24]/60">Local flower shop in Zürich Old Town</p>
                </div>
              </div>

              {/* Factual Review Pillars based strictly on customer experience */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left">
                <div className="p-4 rounded-xl bg-[#FDF3EE]/60 border border-[#EFE8DD]">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#D9654E]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#220E24]">
                      Floral Artistry
                    </span>
                  </div>
                  <p className="text-xs text-[#220E24]/80 leading-relaxed">
                    Refined composition, fresh seasonal stems, and expressive floral arrangements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FDF3EE]/60 border border-[#EFE8DD]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#D9654E]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#220E24]">
                      Altstadt Location
                    </span>
                  </div>
                  <p className="text-xs text-[#220E24]/80 leading-relaxed">
                    Centrally situated at Strehlgasse 2, in the serene pedestrian core of 8001 Zürich.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FDF3EE]/60 border border-[#EFE8DD]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9654E]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#220E24]">
                      Florist Category
                    </span>
                  </div>
                  <p className="text-xs text-[#220E24]/80 leading-relaxed">
                    Dedicated local flower shop providing bouquets and arrangements with care.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EFE8DD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#220E24]/70 gap-3">
                <span>Authentic aggregate score without fabricated quotes or fictional reviews.</span>
                <span className="font-medium text-[#220E24]">Category: {BUSINESS_DETAILS.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
