import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn, Info, Sparkles } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div id="gallery-view-container" className="bg-slate-50/50 pb-24 overflow-hidden">
      {/* Immersive Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-slate-950 flex items-center justify-center text-center overflow-hidden mb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center filter brightness-75" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80')" }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 rounded bg-blue-500/15 px-3 py-1 border border-blue-500/30 text-blue-400 text-xs font-display font-bold tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Visual Evidence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Portfolio & Construction Progress
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Witness the craftsmanship. Browse our actual on-site photography showcasing structural concrete layouts, pristine completed facades, and heartfelt handover ceremonies.
          </p>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filters Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <span className="font-display text-xs font-bold uppercase tracking-wider text-blue-600 block">Filter Media</span>
          <p className="text-sm text-slate-500">
            Select a project lifecycle category below to filter our high-resolution construction logs and ready apartment interiors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4" id="gallery-filters">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all focus:outline-none cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-sm font-extrabold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                id={`gallery-filter-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" 
          id="gallery-grid"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              id={`gallery-card-${item.id}`}
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-50">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Hover overlay details */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-block self-start rounded bg-blue-600 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white mb-2">
                  {item.category.replace('_', ' ')}
                </span>
                <p className="text-xs font-bold text-white leading-relaxed line-clamp-2">{item.caption}</p>
                <div className="mt-3 flex items-center text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  <ZoomIn className="mr-1.5 h-3.5 w-3.5" />
                  <span>Launch Lightbox</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/98 p-4 text-white"
            id="gallery-lightbox"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 focus:outline-none transition-all cursor-pointer"
              id="lightbox-close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none transition-all cursor-pointer md:left-8"
              id="lightbox-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main active image */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="max-w-4xl max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].caption}
                className="max-w-full max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Caption bar */}
            <div className="mt-6 max-w-2xl text-center px-4" onClick={(e) => e.stopPropagation()}>
              <span className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Category: {filteredItems[lightboxIndex].category.toUpperCase()}
              </span>
              <p className="mt-3 font-sans text-sm md:text-base text-slate-300 font-bold leading-relaxed">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="mt-2 text-xs text-slate-500 font-mono">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none transition-all cursor-pointer md:right-8"
              id="lightbox-next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
