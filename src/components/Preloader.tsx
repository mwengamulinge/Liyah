import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 300);
          }, 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FCFAF8] text-zinc-900"
        >
          <div className="flex flex-col items-center max-w-sm px-6 text-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-1">
              DeSoto, Texas
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-zinc-900">
              Hair by Liyah's Extension
            </h1>
            <p className="text-xs text-zinc-500 font-medium tracking-wide mt-1">
              Securing Beauty, One Braid At A Time
            </p>

            {/* Minimal Progress Line */}
            <div className="w-48 mt-8">
              <div className="h-[2px] w-full bg-zinc-200 overflow-hidden rounded-xs">
                <motion.div
                  className="h-full bg-zinc-900"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400 font-medium mt-2">
                <span>Loading</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
