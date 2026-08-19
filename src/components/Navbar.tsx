import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'flash-sale', label: 'Flash Sale' },
    { id: 'gallery', label: 'Lookbook' },
    { id: 'prep-guide', label: 'Hair Care & Prep' },
    { id: 'policies', label: 'Policies' },
    { id: 'contact', label: 'Location & Hours' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-xs' : 'bg-[#FCFBFA] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo: Clean Typography with the name as requested */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group transition-opacity hover:opacity-85"
        >
          <span className="text-lg sm:text-xl font-serif font-bold text-zinc-900 tracking-tight block">
            Hair by Liyah's Extension
          </span>
          <span className="text-[11px] text-zinc-500 font-medium tracking-wide block -mt-0.5">
            DeSoto, TX Studio & Mobile
          </span>
        </button>

        {/* Minimal Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-xs ${
                  isActive
                    ? 'text-zinc-900 font-semibold border-b-2 border-[#C05874]'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Phone + Single Primary CTA Link */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-500" />
            <span>(903) 380-8900</span>
          </a>

          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-5 py-2.5 rounded-xs transition-colors shadow-xs"
          >
            <span>Book Online</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3.5 py-2 text-xs font-semibold bg-zinc-900 text-white rounded-xs"
          >
            Book
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-900 rounded-xs"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Clean Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-zinc-200 overflow-hidden shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-xs transition-colors ${
                      isActive
                        ? 'bg-zinc-100 text-zinc-900 font-semibold'
                        : 'text-zinc-700 hover:bg-zinc-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-zinc-100 space-y-2">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 border border-zinc-200 text-zinc-800 text-xs font-semibold rounded-xs"
                >
                  <Phone className="w-4 h-4 text-zinc-600" />
                  <span>Call / Text (903) 380-8900</span>
                </a>
                <a
                  href={STUDIO_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-3 bg-zinc-900 text-white text-xs font-semibold rounded-xs"
                >
                  <span>Book Appointment on liyahsextension.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
