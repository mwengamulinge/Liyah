/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { FlashSaleBanner } from './components/FlashSaleBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GalleryPage } from './pages/GalleryPage';
import { HairCareGuidePage } from './pages/HairCareGuidePage';
import { AboutPoliciesPage } from './pages/AboutPoliciesPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { STUDIO_INFO } from './data/studioData';
import { ArrowUpRight, Check, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBFA] text-zinc-900 flex flex-col font-sans selection:bg-zinc-200">
      
      {/* 1. Minimal Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* 2. Top Flash Sale Notification Bar */}
      <FlashSaleBanner />

      {/* 3. Minimal Clean Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* 4. Page Routing */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hero Section with clear, simple copy */}
              <Hero onExploreServices={() => handleTabChange('services')} />

              {/* Flash Sale Highlights Banner */}
              <section className="py-12 bg-zinc-950 text-white border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    
                    <div className="space-y-2 text-center lg:text-left">
                      <span className="text-[10px] uppercase tracking-widest text-[#C05874] font-bold">
                        Limited Time Promotion
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        August 72-Hour Flash Sale
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                        Save up to $90 on knotless braids, boho styles, and sleek bobs. Hair included on qualifying styles.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleTabChange('flash-sale')}
                        className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold px-5 py-3 rounded-xs transition-colors"
                      >
                        View Sale Menu
                      </button>

                      <a
                        href={STUDIO_INFO.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold px-6 py-3 rounded-xs transition-colors shadow-xs"
                      >
                        <span>Book Flash Deal</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                  {/* 4 Quick Price Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-zinc-800">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xs text-center">
                      <span className="text-[11px] text-zinc-400 block">Small Knotless</span>
                      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                        <span className="line-through text-zinc-500">$275</span>
                        <span className="font-bold text-white text-base font-serif">$185</span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xs text-center">
                      <span className="text-[11px] text-zinc-400 block">Small Boho Knotless</span>
                      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                        <span className="line-through text-zinc-500">$300</span>
                        <span className="font-bold text-white text-base font-serif">$210</span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xs text-center">
                      <span className="text-[11px] text-zinc-400 block">Knotless Bobs</span>
                      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                        <span className="line-through text-zinc-500">$175</span>
                        <span className="font-bold text-white text-base font-serif">$135</span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xs text-center">
                      <span className="text-[11px] text-zinc-400 block">Scalp / Stitch</span>
                      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                        <span className="font-bold text-white text-base font-serif">From $75+</span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Full Services Section */}
              <ServicesSection />

              {/* Standards & Features Grid */}
              <section className="py-16 bg-white border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
                      Why Choose Us
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-zinc-900">
                      Healthy Hair & Professional Styling
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h3 className="font-serif font-bold text-zinc-900 text-base">Tension-Free Edges</h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Gentle root attachment designed to protect natural edges and prevent headache-inducing tension.
                      </p>
                    </div>

                    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h3 className="font-serif font-bold text-zinc-900 text-base">Hair Included</h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Quality pre-stretched braiding hair is provided on all qualifying styles. Just bring clean, stretched hair.
                      </p>
                    </div>

                    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h3 className="font-serif font-bold text-zinc-900 text-base">6:00 AM Early Bird</h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Convenient early morning and evening hours 7 days a week to fit your everyday routine.
                      </p>
                    </div>

                    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h3 className="font-serif font-bold text-zinc-900 text-base">Studio & Mobile</h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Visit our private DeSoto studio or request mobile travel across the DFW metroplex for a fee.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reviews Section */}
              <TestimonialsSection />

              {/* Quick DeSoto Location Banner */}
              <section className="py-12 bg-[#FCFBFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#C05874] block">Studio Location</span>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-900">
                        {STUDIO_INFO.address}, {STUDIO_INFO.cityStateZip}
                      </h3>
                      <p className="text-xs text-zinc-600">
                        Open Daily from 6:00 AM • Direct Line: <strong>{STUDIO_INFO.phone}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleTabChange('contact')}
                        className="px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold rounded-xs transition-colors"
                      >
                        Location Details
                      </button>

                      <a
                        href={STUDIO_INFO.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-6 py-2.5 rounded-xs transition-colors shadow-xs"
                      >
                        <span>Book an Appointment</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* SERVICES & PRICING PAGE */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ServicesSection />
            </motion.div>
          )}

          {/* 72-HOUR FLASH SALE PAGE */}
          {activeTab === 'flash-sale' && (
            <motion.div
              key="flash-sale"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="py-12 sm:py-20 bg-[#FCFBFA]"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
                    Special Promotion
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
                    August 72-Hour Flash Sale
                  </h1>
                  <p className="text-sm text-zinc-600 mt-2">
                    Book your favorite knotless or boho style with promotional pricing. Hair included on qualifying styles.
                  </p>
                </div>

                {/* 2-Column Comparison Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  
                  {/* Knotless Table */}
                  <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-8">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase text-[#C05874]">Signature Style</span>
                        <h2 className="text-xl font-serif font-bold text-zinc-900">KNOTLESS BRAIDS</h2>
                      </div>
                      <span className="text-[11px] font-semibold bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-xs">
                        Hair Included
                      </span>
                    </div>

                    <div className="divide-y divide-zinc-100 text-xs">
                      {[
                        { size: 'Small', regular: 275, sale: 185 },
                        { size: 'Smedium', regular: 260, sale: 170 },
                        { size: 'Medium', regular: 145, sale: 115 },
                        { size: 'Large', regular: 130, sale: 95 },
                      ].map((row) => (
                        <div key={row.size} className="py-3 flex items-center justify-between">
                          <span className="font-semibold text-zinc-900">{row.size}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-zinc-400 line-through">${row.regular}</span>
                            <span className="font-bold text-[#C05874] text-base font-serif">${row.sale}</span>
                            <a
                              href={STUDIO_INFO.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-zinc-900 hover:bg-[#C05874] text-white font-semibold text-xs rounded-xs"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Boho Knotless Table */}
                  <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-8">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase text-[#C05874]">Goddess Curls</span>
                        <h2 className="text-xl font-serif font-bold text-zinc-900">BOHO KNOTLESS</h2>
                      </div>
                      <span className="text-[11px] font-semibold bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-xs">
                        Hair Included
                      </span>
                    </div>

                    <div className="divide-y divide-zinc-100 text-xs">
                      {[
                        { size: 'Small', regular: 300, sale: 210 },
                        { size: 'Smedium', regular: 295, sale: 195 },
                        { size: 'Medium', regular: 170, sale: 135 },
                        { size: 'Large', regular: 155, sale: 110 },
                      ].map((row) => (
                        <div key={row.size} className="py-3 flex items-center justify-between">
                          <span className="font-semibold text-zinc-900">{row.size}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-zinc-400 line-through">${row.regular}</span>
                            <span className="font-bold text-[#C05874] text-base font-serif">${row.sale}</span>
                            <a
                              href={STUDIO_INFO.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 bg-zinc-900 hover:bg-[#C05874] text-white font-semibold text-xs rounded-xs"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Additional Sale Styles */}
                <div className="bg-white border border-zinc-200 rounded-xs p-6 sm:p-8 mb-10">
                  <h3 className="font-serif font-bold text-xl text-zinc-900 mb-4">
                    Other Flash Sale Styles
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h4 className="font-bold text-zinc-900 text-sm">Knotless Bobs</h4>
                      <div className="space-y-1 text-zinc-600">
                        <div className="flex justify-between"><span>Small:</span> <strong className="text-zinc-900">$135</strong></div>
                        <div className="flex justify-between"><span>Smedium:</span> <strong className="text-zinc-900">$125</strong></div>
                        <div className="flex justify-between"><span>Medium:</span> <strong className="text-zinc-900">$120</strong></div>
                      </div>
                      <a
                        href={STUDIO_INFO.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-2 bg-zinc-900 text-white font-semibold rounded-xs mt-2"
                      >
                        Book Bob
                      </a>
                    </div>

                    <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h4 className="font-bold text-zinc-900 text-sm">Boho Bobs</h4>
                      <div className="space-y-1 text-zinc-600">
                        <div className="flex justify-between"><span>Small:</span> <strong className="text-zinc-900">$145</strong></div>
                        <div className="flex justify-between"><span>Smedium:</span> <strong className="text-zinc-900">$130</strong></div>
                        <div className="flex justify-between"><span>Medium:</span> <strong className="text-zinc-900">$115</strong></div>
                      </div>
                      <a
                        href={STUDIO_INFO.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-2 bg-zinc-900 text-white font-semibold rounded-xs mt-2"
                      >
                        Book Boho Bob
                      </a>
                    </div>

                    <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xs space-y-2">
                      <h4 className="font-bold text-zinc-900 text-sm">Stitch & Kids</h4>
                      <div className="space-y-1 text-zinc-600">
                        <div className="flex justify-between"><span>Stitch Braids:</span> <strong className="text-zinc-900">From $75+</strong></div>
                        <div className="flex justify-between"><span>Kids Styles:</span> <strong className="text-zinc-900">$85 – $100</strong></div>
                      </div>
                      <a
                        href={STUDIO_INFO.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-2 bg-zinc-900 text-white font-semibold rounded-xs mt-2"
                      >
                        Book Stitch / Kids
                      </a>
                    </div>
                  </div>
                </div>

                {/* Deposit Term Banner */}
                <div className="p-4 bg-zinc-100 border border-zinc-200 rounded-xs text-center text-xs text-zinc-700 max-w-xl mx-auto">
                  <strong>NO REFUNDS ON DEPOSITS. DEPOSITS GO TOWARD YOUR TOTAL.</strong> Limited slots available.
                </div>

              </div>
            </motion.div>
          )}

          {/* GALLERY LOOKBOOK PAGE */}
          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <GalleryPage />
            </motion.div>
          )}

          {/* HAIR CARE & PREP GUIDE PAGE */}
          {activeTab === 'prep-guide' && (
            <motion.div
              key="prep-guide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HairCareGuidePage />
            </motion.div>
          )}

          {/* POLICIES & FAQ PAGE */}
          {activeTab === 'policies' && (
            <motion.div
              key="policies"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AboutPoliciesPage />
            </motion.div>
          )}

          {/* CONTACT & LOCATION PAGE */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ContactPage />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 5. Minimal Footer */}
      <Footer setActiveTab={handleTabChange} />

    </div>
  );
}
