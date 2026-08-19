import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Moon, Sparkles, Scissors, ArrowUpRight, AlertCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const HairCareGuidePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'prep' | 'maintenance' | 'boho' | 'takedown'>('prep');

  return (
    <div className="py-12 sm:py-20 bg-[#FCFBFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
            Care & Preparation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            Hair Care & Pre-Appointment Prep
          </h1>
          <p className="text-sm text-zinc-600 mt-2">
            Follow our pre-appointment checklist and aftercare guide to protect your natural edges and get the longest wear out of your braids.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-zinc-200">
          {[
            { id: 'prep', label: '1. Pre-Appointment Prep', icon: CheckCircle2 },
            { id: 'maintenance', label: '2. Daily & Nightly Care', icon: Moon },
            { id: 'boho', label: '3. Boho Curls Refresh', icon: Sparkles },
            { id: 'takedown', label: '4. Safe Takedown Routine', icon: Scissors },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all rounded-xs ${
                  isActive
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-10 shadow-xs">
          
          {/* 1. Pre-Appointment Prep */}
          {activeSection === 'prep' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  How to Prep Your Hair Before You Arrive
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Arriving properly prepared ensures clean part lines, painless installation, and braids that last.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-2">
                  <div className="text-xs font-bold text-[#C05874]">Step 01</div>
                  <h4 className="font-bold text-zinc-900 text-sm">Thoroughly Wash & Clarify</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Wash your hair with a clarifying shampoo to remove product buildup and oils. Deep condition for moisture.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-2">
                  <div className="text-xs font-bold text-[#C05874]">Step 02</div>
                  <h4 className="font-bold text-zinc-900 text-sm">Detangle & Blow Out Straight</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Gently detangle from ends to roots, then blow out your hair straight from root to tip.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-2">
                  <div className="text-xs font-bold text-[#C05874]">Step 03</div>
                  <h4 className="font-bold text-zinc-900 text-sm">No Heavy Oils or Grease</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Please do not apply heavy oils or grease before arriving. We provide scalp treatments during your appointment.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-zinc-100 border border-zinc-200 rounded-xs text-xs text-zinc-800 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#C05874] shrink-0 mt-0.5" />
                <div>
                  <strong>Hair Length Requirement:</strong> Your natural hair should be at least 3.5 to 4 inches all around for secure, tension-free grip.
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Maintenance */}
          {activeSection === 'maintenance' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  Daily & Nightly Maintenance Routine
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Simple habits to keep your scalp hydrated and your braids neat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">Satin Bonnet or Scarf Every Night</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Always sleep in a satin/silk bonnet or wrap your edges with a silk scarf to prevent friction and flyaways.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">Light Scalp Hydration</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Apply lightweight scalp oil (such as jojoba or rosemary mint) 2 to 3 times a week directly to the part lines.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">Mousse Refresh</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Apply styling foam mousse over your braids and tie down with a wrap strip for 10 minutes to reset shine.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">Shower & Steam Protection</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Wear a high-coverage waterproof shower cap to prevent humidity from puffing your natural roots.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. Boho Curls */}
          {activeSection === 'boho' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  How to Maintain Boho Curls
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Keep loose boho tendrils bouncy, separated, and tangle-free.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">1. Finger Detangle Daily</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Never use a fine-tooth comb on boho curls. Gently separate the curls with your fingers using a water mist or serum.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">2. Apply Foaming Mousse</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Pump styling mousse through the curly ends twice a week to maintain definition and reduce frizz.
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 rounded-xs bg-zinc-50 space-y-1.5">
                  <h4 className="font-bold text-zinc-900 text-sm">3. Snip Micro-Knots</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    If small synthetic curl ends tangle after weeks of wear, simply snip the tiny knot with hair shears.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. Takedown Routine */}
          {activeSection === 'takedown' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900">
                  Safe Takedown & De-Shedding Routine
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Retain your new growth by taking down your braids gently.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 border border-zinc-200 rounded-xs bg-zinc-50 text-xs">
                  <strong className="text-zinc-900 block mb-0.5">1. Cut Well Below Your Natural Hair</strong>
                  <span className="text-zinc-600">Locate where your natural hair ends before trimming off the excess braid length.</span>
                </div>
                <div className="p-4 border border-zinc-200 rounded-xs bg-zinc-50 text-xs">
                  <strong className="text-zinc-900 block mb-0.5">2. Unravel with the Tail of a Comb</strong>
                  <span className="text-zinc-600">Gently slide the comb tail through the loops without tugging at the root.</span>
                </div>
                <div className="p-4 border border-zinc-200 rounded-xs bg-zinc-50 text-xs">
                  <strong className="text-zinc-900 block mb-0.5">3. Comb Out Shed Hair BEFORE Washing</strong>
                  <span className="text-zinc-600">Naturally shed hair gathers at the base over 6–8 weeks. Thoroughly finger-detangle and comb with oil or conditioner before wetting your hair to prevent matting.</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Link Bar */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-600">
              Questions? Call or text Liyah at <strong>(903) 380-8900</strong>.
            </span>
            <a
              href={STUDIO_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-6 py-2.5 rounded-xs transition-colors"
            >
              <span>Book Appointment Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
