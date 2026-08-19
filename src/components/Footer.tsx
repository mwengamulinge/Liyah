import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Banner */}
        <div className="border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 rounded-xs mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C05874] block mb-1">
              Online Scheduling
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ready to Book Your Next Appointment?
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Select your style, length, and time slot on our official portal.
            </p>
          </div>
          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold px-6 py-3 rounded-xs transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Book on liyahsextension.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <h4 className="text-base font-serif font-bold text-white tracking-tight">
              Hair by Liyah's Extension
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>
            <p className="text-zinc-500">
              DeSoto, TX Studio & Mobile DFW Travel Available for a Fee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Services & Pricing Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('flash-sale')} className="hover:text-white transition-colors">
                  Flash Sale Deals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">
                  Lookbook & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('prep-guide')} className="hover:text-white transition-colors">
                  Hair Care & Prep Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('policies')} className="hover:text-white transition-colors">
                  Studio Policies & Terms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h5 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-3">
              Studio Working Hours
            </h5>
            <ul className="space-y-1.5 text-zinc-400">
              <li className="flex justify-between">
                <span>Mon – Thu:</span>
                <span className="text-zinc-200">6:00 am – 10:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri – Sat:</span>
                <span className="text-zinc-200">6:00 am – 11:00 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-zinc-200">6:00 am – 6:00 pm</span>
              </li>
            </ul>
            <div className="mt-3 text-[11px] text-[#C05874]">
              Early Bird 6:00 AM slots available daily.
            </div>
          </div>

          {/* Studio Contact */}
          <div>
            <h5 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-3">
              Contact & Location
            </h5>
            <div className="space-y-2 text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}, {STUDIO_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white break-all">
                  {STUDIO_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                Deposit Policy: NO REFUNDS ON DEPOSITS. Deposits go toward your total balance.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Hair by Liyah's Extension. All rights reserved. • DeSoto, TX
          </div>
          <div className="flex items-center gap-4">
            <a
              href={STUDIO_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline underline-offset-4"
            >
              liyahsextension.com/s/appointments
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
