import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const ContactPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Knotless Braids',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('400 East Wintergreen Road, DeSoto, TX 75115')}`;

  return (
    <div className="py-12 sm:py-20 bg-[#FCFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
            Studio Location & Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            Location, Hours & Inquiries
          </h1>
          <p className="text-sm text-zinc-600 mt-2">
            Located in DeSoto, Texas with appointments available 7 days a week starting at 6:00 AM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Studio Details & Hours (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 border border-zinc-200 rounded-xs">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Studio Address</span>
                <p className="text-xs font-bold text-zinc-900">{STUDIO_INFO.address}</p>
                <p className="text-xs text-zinc-600">{STUDIO_INFO.cityStateZip}</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C05874] hover:underline mt-2"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-white p-5 border border-zinc-200 rounded-xs">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Call / Text</span>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-xs font-bold text-zinc-900 hover:text-[#C05874] block"
                >
                  {STUDIO_INFO.phone}
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Direct inquiries & SMS</p>
              </div>

              <div className="bg-white p-5 border border-zinc-200 rounded-xs">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Email</span>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-xs font-bold text-zinc-900 hover:text-[#C05874] block break-all"
                >
                  {STUDIO_INFO.email}
                </a>
                <p className="text-[11px] text-zinc-500 mt-1">Direct salon contact</p>
              </div>
            </div>

            {/* Hours Table */}
            <div className="bg-white border border-zinc-200 rounded-xs p-6">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3">
                <h3 className="font-serif font-bold text-zinc-900 text-lg">Studio Working Hours</h3>
                <span className="text-[11px] font-bold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-xs">
                  Early Bird 6:00 AM Daily
                </span>
              </div>

              <div className="divide-y divide-zinc-100 text-xs">
                {STUDIO_INFO.hours.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between items-center">
                    <span className="font-medium text-zinc-800">{item.day}</span>
                    <span className="text-zinc-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Reminder Banner */}
            <div className="bg-zinc-900 text-white p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-base text-white">Book Online in Seconds</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Choose your date and time on our official booking page.</p>
              </div>
              <a
                href={STUDIO_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-semibold px-6 py-2.5 rounded-xs transition-colors whitespace-nowrap"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-xs p-6 sm:p-8">
            <h3 className="text-xl font-serif font-bold text-zinc-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-600 mb-6">
              Have questions about your hair length, custom styling, or mobile travel rates? Send Liyah a note below.
            </p>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-zinc-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Jenkins"
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    className="w-full p-2.5 border border-zinc-300 rounded-xs text-xs focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-zinc-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 903-380-8900"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    className="w-full p-2.5 border border-zinc-300 rounded-xs text-xs focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-zinc-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    className="w-full p-2.5 border border-zinc-300 rounded-xs text-xs focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-zinc-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    value={inquiry.serviceInterest}
                    onChange={(e) => setInquiry({ ...inquiry, serviceInterest: e.target.value })}
                    className="w-full p-2.5 border border-zinc-300 rounded-xs text-xs focus:outline-none focus:border-zinc-900 bg-white"
                  >
                    <option>Knotless Braids</option>
                    <option>Boho Knotless Braids</option>
                    <option>Knotless Bobs</option>
                    <option>Boho Bobs</option>
                    <option>Scalp / Stitch Braids</option>
                    <option>Kids Braiding Styles</option>
                    <option>Mobile DFW Travel Visit</option>
                    <option>Other Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-zinc-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your questions or hair length..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full p-2.5 border border-zinc-300 rounded-xs text-xs focus:outline-none focus:border-zinc-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-zinc-900 hover:bg-[#C05874] text-white font-semibold text-xs rounded-xs transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xs text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-zinc-900 mx-auto" />
                <h4 className="font-serif font-bold text-zinc-900 text-base">Message Sent</h4>
                <p className="text-xs text-zinc-600">
                  Thank you, {inquiry.name}. We'll respond to your inquiry at {inquiry.phone} or {inquiry.email} shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs font-semibold text-[#C05874] underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
