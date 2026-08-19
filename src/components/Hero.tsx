import React, { useState } from 'react';
import { ArrowUpRight, Check, MapPin, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  // Try local /hero-image.png first, then GitHub raw URL, then fallback
  const [imageIndex, setImageIndex] = useState(0);

  const imageCandidates = [
    '/hero-image.png',
    'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/hero-image.png',
    'https://github.com/mwengamulinge/Liyah/raw/main/hero-image.png'
  ];

  const handleImageError = () => {
    setImageIndex((prev) => prev + 1);
  };

  const isExhausted = imageIndex >= imageCandidates.length;

  return (
    <section className="relative pt-4 pb-10 lg:pt-10 lg:pb-12 bg-[#FCFBFA] border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          
          {/* Mobile Order 2 / Desktop Order 1: Text & CTAs (6 cols on lg) */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-6 text-left pb-1 lg:pb-3">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-wider rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C05874]" />
              <span>DeSoto, TX Studio & DFW Mobile</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 leading-[1.12] tracking-tight">
              Clean, long-lasting braids in DeSoto, Texas.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              We specialize in tension-free knotless braids, boho curls, sleek bobs, and sharp stitch parts. Enjoy gentle edge care, hair included on qualifying styles, and appointments starting from 6:00 AM.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <Check className="w-4 h-4 text-[#C05874] shrink-0" />
                <span>Hair included on qualifying styles</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <Clock className="w-4 h-4 text-[#C05874] shrink-0" />
                <span>Open daily from 6:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <MapPin className="w-4 h-4 text-[#C05874] shrink-0" />
                <span>Studio & mobile visits</span>
              </div>
            </div>

            {/* Clean, Well-Padded CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={STUDIO_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-[#C05874] text-white text-sm font-semibold px-7 py-3.5 rounded-xs transition-colors shadow-xs"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 text-sm font-semibold px-6 py-3.5 rounded-xs transition-colors"
              >
                <span>View Services & Pricing</span>
              </button>
            </div>

            <p className="text-xs text-zinc-500 pt-1">
              Deposit required to secure your slot. Deposits go directly toward your total balance.
            </p>

          </div>

          {/* Mobile Order 1 / Desktop Order 2: Hero Visual (Centered on mobile, right-aligned & baseline anchored on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-center justify-center lg:items-end lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 flex justify-center items-center lg:justify-end lg:items-end text-center">
              
              {!isExhausted ? (
                <img
                  src={imageCandidates[imageIndex]}
                  alt="Hair by Liyah's Extension - Braids Showcase"
                  referrerPolicy="no-referrer"
                  className="mx-auto lg:mr-0 block w-auto max-w-full h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[620px] xl:max-h-[680px] object-contain object-center lg:object-bottom drop-shadow-none"
                  onError={handleImageError}
                />
              ) : (
                /* Fallback Cutout / Seamless Showcase */
                <div className="relative w-full aspect-[4/5] max-h-[560px] mx-auto flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                    alt="Hair by Liyah's Extension - Braiding Stylist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-xs"
                  />

                  {/* 4 Gold Insets overlay */}
                  <div className="absolute top-2 right-2 bottom-10 flex flex-col justify-between items-center z-10">
                    {[
                      { img: 'https://images.unsplash.com/photo-1584297091622-af8e5fd184c8?auto=format&fit=crop&w=300&q=80', label: 'Boho Roots' },
                      { img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=300&q=80', label: 'Knotless Bob' },
                      { img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=300&q=80', label: 'Boho Waves' },
                      { img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80', label: 'Stitch Scalp' },
                    ].map((item, idx) => (
                      <div key={idx} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-400 p-[1px] bg-amber-200/40 shadow-sm overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.label}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
