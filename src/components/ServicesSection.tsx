import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowUpRight, ShieldCheck, Flame } from 'lucide-react';
import { SERVICES_DATA, STUDIO_INFO } from '../data/studioData';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'knotless', label: 'Knotless Braids' },
    { id: 'boho', label: 'Boho Styles' },
    { id: 'bobs', label: 'Bobs & Lobs' },
    { id: 'stitch', label: 'Stitch & Scalp' },
    { id: 'kids', label: 'Kids Braids' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
              Pricing & Styles Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight">
              Services & Pricing
            </h2>
            <p className="text-sm text-zinc-600 mt-2 max-w-xl">
              Braiding hair is included on all qualifying styles. To secure your appointment, a non-refundable deposit is required which goes directly toward your total.
            </p>
          </div>

          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-6 py-3 rounded-xs transition-colors shadow-xs self-start md:self-auto"
          >
            <span>Book on liyahsextension.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-zinc-100">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all rounded-xs ${
                  isActive
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-zinc-200 rounded-xs flex flex-col justify-between hover:border-zinc-400 transition-colors"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-zinc-900 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-xs">
                        {service.badge}
                      </div>
                    )}
                    {service.hairIncluded && (
                      <div className="absolute bottom-3 left-3 bg-white/95 text-zinc-900 text-[10px] font-semibold px-2.5 py-0.5 rounded-xs border border-zinc-200 shadow-xs">
                        Hair Included
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif font-bold text-xl text-zinc-900">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Size Pricing Breakdown Table */}
                    {service.sizes && service.sizes.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-zinc-100 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                          Pricing by Size (Hair Included)
                        </span>
                        <div className="space-y-1.5">
                          {service.sizes.map((size) => (
                            <div
                              key={size.size}
                              className="flex items-center justify-between text-xs py-1 border-b border-zinc-50"
                            >
                              <span className="font-medium text-zinc-800">{size.size}</span>
                              <div className="flex items-center gap-2">
                                {size.salePrice ? (
                                  <>
                                    <span className="text-zinc-400 line-through text-[11px]">${size.regularPrice}</span>
                                    <span className="font-bold text-[#C05874]">${size.salePrice}</span>
                                  </>
                                ) : (
                                  <span className="font-semibold text-zinc-900">${size.regularPrice}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.priceNote && (
                      <div className="mt-3 text-xs font-semibold text-zinc-800 bg-zinc-50 p-2.5 rounded-xs border border-zinc-100">
                        {service.priceNote}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="p-6 pt-0">
                  <a
                    href={STUDIO_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold py-3 px-4 rounded-xs transition-colors"
                  >
                    <span>Book on liyahsextension.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Deposit Policy Notice Banner */}
        <div className="mt-12 p-4 bg-zinc-50 border border-zinc-200 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-zinc-800 shrink-0" />
            <span>
              <strong>Deposit Policy:</strong> Deposits are strictly non-refundable and go directly toward your total on appointment day.
            </span>
          </div>
          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 font-semibold underline underline-offset-4 whitespace-nowrap hover:text-[#C05874]"
          >
            Check Available Dates
          </a>
        </div>

      </div>
    </section>
  );
};
