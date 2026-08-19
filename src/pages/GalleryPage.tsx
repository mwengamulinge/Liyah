import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { GALLERY_LOOKBOOK, STUDIO_INFO } from '../data/studioData';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [likes, setLikes] = useState<Record<string, number>>({
    'g1': 48, 'g2': 62, 'g3': 39, 'g4': 77, 'g5': 33, 'g6': 51, 'g7': 44, 'g8': 29,
  });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Styles' },
    { id: 'knotless', label: 'Knotless Braids' },
    { id: 'boho', label: 'Boho Goddess' },
    { id: 'bobs', label: 'Bobs & Lobs' },
    { id: 'stitch', label: 'Stitch & Parts' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_LOOKBOOK
    : GALLERY_LOOKBOOK.filter((item) => item.category === activeFilter);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (userLiked[id]) {
      setLikes((prev) => ({ ...prev, [id]: (prev[id] || 1) - 1 }));
      setUserLiked((prev) => ({ ...prev, [id]: false }));
    } else {
      setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      setUserLiked((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FCFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C05874] block mb-1">
              Lookbook & Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
              Client Styles & Artistry
            </h1>
            <p className="text-sm text-zinc-600 mt-2 max-w-xl">
              Explore real client results from our DeSoto studio. Click any photo to view in high definition.
            </p>
          </div>

          <a
            href={STUDIO_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold px-6 py-3 rounded-xs transition-colors shadow-xs self-start md:self-auto"
          >
            <span>Book Your Style Online</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-zinc-100">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all rounded-xs ${
                  isActive
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedImage(item.image)}
                className="group relative bg-white border border-zinc-200 rounded-xs overflow-hidden cursor-pointer hover:border-zinc-400 transition-colors shadow-xs"
              >
                <div className="aspect-[4/5] bg-[#FAF8F5] overflow-hidden relative flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('raw.githubusercontent.com')) {
                        if (item.category === 'knotless') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/knotless.png';
                        else if (item.category === 'boho') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/boho.png';
                        else if (item.id === 'g4') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/knotless-bob.png';
                        else if (item.id === 'g5' || item.category === 'bobs') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/boho-bob.png';
                        else if (item.category === 'stitch') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/scalp.png';
                        else if (item.category === 'kids') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/kids.png';
                        else if (item.id === 'g7' || item.category === 'addons') target.src = 'https://raw.githubusercontent.com/mwengamulinge/Liyah/main/custom.png';
                        else target.src = 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80';
                      } else {
                        // Individual distinct backups
                        if (item.category === 'knotless') target.src = 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80';
                        else if (item.category === 'boho') target.src = 'https://images.unsplash.com/photo-1584297091622-af8e5fd184c8?auto=format&fit=crop&w=800&q=80';
                        else if (item.id === 'g4') target.src = 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80';
                        else if (item.category === 'bobs') target.src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80';
                        else if (item.category === 'stitch') target.src = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80';
                        else if (item.category === 'kids') target.src = 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80';
                        else target.src = 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity pointer-events-none" />

                  {/* Like Counter */}
                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-xs bg-black/40 backdrop-blur-sm text-white text-xs font-semibold hover:bg-black/60 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${userLiked[item.id] ? 'fill-[#C05874] text-[#C05874]' : 'text-white'}`} />
                    <span>{likes[item.id] || 45}</span>
                  </button>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-zinc-300 block tracking-wider">
                      {item.tag}
                    </span>
                    <h3 className="font-serif font-bold text-base mt-0.5 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Zoom Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <div className="relative max-w-3xl max-h-[90vh] bg-white rounded-xs overflow-hidden p-2" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/70 text-white rounded-xs hover:bg-black"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedImage}
                  alt="High definition style preview"
                  className="w-full max-h-[80vh] object-contain rounded-xs"
                />
                <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-zinc-900">Hair by Liyah's Extension</h4>
                    <p className="text-xs text-zinc-500">400 East Wintergreen Road, DeSoto, TX</p>
                  </div>
                  <a
                    href={STUDIO_INFO.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-zinc-900 hover:bg-[#C05874] text-white text-xs font-semibold rounded-xs transition-colors"
                  >
                    Book This Style Online ↗
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
