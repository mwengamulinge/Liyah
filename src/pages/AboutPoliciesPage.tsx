import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ChevronDown, ArrowUpRight, Check, MapPin, Clock } from 'lucide-react';
import { STUDIO_INFO, STUDIO_POLICIES } from '../data/studioData';

export const AboutPoliciesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the deposit work, and is it refundable?",
      a: "A deposit is required to secure your appointment slot. Deposits are strictly non-refundable under all circumstances, but 100% of your deposit goes directly toward your service total on the day of your appointment."
    },
    {
      q: "Is braiding hair included in my service price?",
      a: "Yes! High-grade pre-stretched braiding hair is included on all qualifying knotless, boho, and stitch styles in standard natural colors (1, 1B, 2, 4)."
    },
    {
      q: "Where is the studio located, and do you travel?",
      a: "Our private studio is located at 400 East Wintergreen Road, DeSoto, TX 75115. We also offer mobile house visits across DeSoto, Cedar Hill, Duncanville, Dallas, and surrounding DFW cities for an additional travel fee."
    },
    {
      q: "What are your business hours?",
      a: "We are open Monday through Thursday from 6:00 AM to 10:00 PM, Friday and Saturday from 6:00 AM to 11:00 PM, and Sunday from 6:00 AM to 6:00 PM. Early morning 6:00 AM slots are available every day."
    },
    {
      q: "How should I prep my hair before arriving?",
      a: "Please arrive with your hair freshly washed, completely detangled, and blown out straight from root to tip. Please do NOT apply heavy oils or grease beforehand."
    },
    {
      q: "What is your grace period for late arrivals?",
      a: "We offer a 15-minute grace period. If you are running more than 15 minutes late, a late fee may apply or your appointment may need to be rescheduled."
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FCFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
            Studio Standards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            About Liyah & Studio Policies
          </h1>
          <p className="text-sm text-zinc-600 mt-2">
            Securing beauty, one braid at a time. Read our booking policies, preparation requirements, and studio guidelines.
          </p>
        </div>

        {/* Meet Liyah Section */}
        <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 aspect-[4/5] bg-zinc-100 rounded-xs overflow-hidden border border-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Aaliyah (Liyah) Bealer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C05874]">
                Founder & Master Braider
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
                Aaliyah (Liyah) Bealer
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Welcome to <strong>Hair by Liyah's Extension</strong> in DeSoto, Texas. With years of experience specializing in protective styles, Liyah is known for tension-free knotless installations, neat geometric parting, and bouncy boho tendrils that prioritize your natural hair health.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xs">
                  <div className="text-xs font-bold text-zinc-900">5.0 Star Rated</div>
                  <div className="text-[11px] text-zinc-500">Satisfied Clients</div>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xs">
                  <div className="text-xs font-bold text-zinc-900">6:00 AM</div>
                  <div className="text-[11px] text-zinc-500">Early Morning Slots</div>
                </div>
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xs">
                  <div className="text-xs font-bold text-zinc-900">100% Gentle</div>
                  <div className="text-[11px] text-zinc-500">Tension-Free Edges</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-6 py-3 rounded-xs transition-colors shadow-xs"
                >
                  <span>Book with Liyah Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Policies Grid */}
        <div>
          <div className="mb-8">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
              Important Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
              Studio Guidelines & Deposit Terms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDIO_POLICIES.map((policy, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-xs p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C05874] block mb-1">
                    {policy.highlight}
                  </span>
                  <h3 className="font-serif font-bold text-zinc-900 text-lg mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {policy.text}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[11px] font-semibold text-zinc-800">
                  {policy.rule}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-10 shadow-xs">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-zinc-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-semibold text-zinc-900 text-sm hover:text-[#C05874] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-zinc-600 leading-relaxed pt-3 pr-6"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
