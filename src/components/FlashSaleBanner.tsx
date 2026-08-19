import React, { useState, useEffect } from 'react';
import { Clock, ArrowUpRight, Flame } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const FlashSaleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 38,
    seconds: 14,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 71, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-zinc-950 text-white py-2.5 px-4 text-xs border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center">
          <span className="bg-[#C05874] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-xs">
            Flash Sale
          </span>
          <span className="text-zinc-200">
            August Sale: Knotless from <strong className="text-white font-semibold">$95</strong> & Boho from <strong className="text-white font-semibold">$110</strong>. Hair included on qualifying styles.
          </span>
        </div>

        {/* Right Countdown & Link */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>{formatNumber(timeLeft.hours)}h</span>:
            <span>{formatNumber(timeLeft.minutes)}m</span>:
            <span>{formatNumber(timeLeft.seconds)}s</span>
          </div>

          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-zinc-300 font-semibold underline underline-offset-4 transition-colors"
          >
            <span>Book Link</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
