import React from 'react';
import { MapPin, Navigation, Star, Footprints, Train, Building2, Sparkles } from 'lucide-react';
import { BUSINESS_DETAILS, IMAGES } from '../data/floristData';
import { VisitSection } from '../components/VisitSection';

interface VisitPageProps {
  onNavigate?: (page: 'home' | 'about' | 'bouquets' | 'visit') => void;
}

export const VisitPage: React.FC<VisitPageProps> = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#220E24]">
      {/* Header */}
      <section className="pt-16 pb-20 border-b border-[#EFE8DD] bg-[#FDF3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EFE8DD] text-xs font-semibold text-[#220E24] mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#D9654E]" />
            <span>Strehlgasse 2 · 8001 Zürich</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#220E24] leading-[0.98] max-w-4xl">
            Visit Kanel Florist on Strehlgasse.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#220E24]/80 font-sans max-w-2xl leading-relaxed">
            Discover our boutique flower shop nestled within the historic cobblestone pedestrian alleys
            of Zürich Old Town, steps from Lindenhof and the Limmat River.
          </p>
        </div>
      </section>

      {/* Main interactive visit & inquiry section */}
      <VisitSection embedded={false} />

      {/* Additional Pedestrian & Neighborhood Guide */}
      <section className="py-20 lg:py-28 bg-[#FDF3EE] border-t border-[#EFE8DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D9654E] font-semibold">
              Zürich Altstadt Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#220E24]">
              Finding your way to Strehlgasse 2.
            </h2>
            <p className="text-base text-[#220E24]/80 font-sans leading-relaxed">
              Zürich’s historic center is ideal for exploring on foot. Here is how to navigate from major
              transit hubs to Kanel Florist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Footprints className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">From Zürich HB (8 min walk)</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Walk south along the Bahnhofstrasse or stroll across the Bahnhofbrücke along the Limmat
                riverbank. Turn inward at Rennweg or Strehlgasse into the cobblestone core.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">From Lindenhof (2 min walk)</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Take the historic stone steps descending from the Lindenhof viewing terrace. Strehlgasse 2
                is immediately reachable on the pedestrian pathway below.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DD] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F8DFD4] text-[#D9654E] flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#220E24]">Tram Connections</h3>
              <p className="text-xs sm:text-sm text-[#220E24]/80 leading-relaxed">
                Nearby tram stops include <strong>Rennweg</strong>, <strong>Rathaus</strong>, and{' '}
                <strong>Helmhaus</strong>, all within a 2-4 minute scenic stroll across the river or through
                the old town quarters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
