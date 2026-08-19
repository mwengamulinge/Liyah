import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FCFBFA] border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight">
            Loved By DeSoto & DFW Clients
          </h2>
          <p className="text-sm text-zinc-600 mt-2 max-w-2xl mx-auto">
            Read real feedback from clients who trust Liyah for gentle root tension, clean partings, and protective styling.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 border border-zinc-200 rounded-xs text-xs font-semibold text-zinc-800">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5.0 Star Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-zinc-200 rounded-xs p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-zinc-300" />
                </div>

                <p className="text-xs text-zinc-700 leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover border border-zinc-200"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-xs text-zinc-900">{t.name}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-3 h-3 text-[#C05874]" />
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-500">{t.location} • {t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
