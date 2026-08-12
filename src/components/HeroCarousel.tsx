import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, Shield, Compass, Anchor, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/shipbuildingData';

interface HeroCarouselProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#0B192C] text-white overflow-hidden flex flex-col justify-between pt-20">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Dual Layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/80 to-[#0B192C]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-[#0B192C]/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent z-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 my-auto w-full">
        <div className="max-w-3xl">
          {/* Category Tag - Geometric Balance */}
          <motion.div
            key={`badge-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-sky-500" />
            <div className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <Anchor className="w-3.5 h-3.5 text-sky-400" />
              <span>{currentSlide.category}</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300 font-semibold">{currentSlide.location}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-6 font-sans"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Subtitle / Quote */}
          <motion.p
            key={`sub-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed border-l-2 border-sky-500 pl-4 bg-[#0A192F]/70 py-3 backdrop-blur-md max-w-2xl"
          >
            "{currentSlide.subtitle}"
          </motion.p>

          {/* Action Buttons - Geometric Balance Sharp Edges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => onNavigate('services')}
              className="bg-sky-600 hover:bg-sky-500 px-8 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-white transition-all flex items-center justify-center space-x-3 group border border-sky-400/30"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="border border-white/20 hover:border-white hover:bg-white/5 px-8 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-white transition-all flex items-center justify-center space-x-2 bg-[#0A192F]/60 backdrop-blur-sm"
            >
              <span>Contact Us</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="hidden lg:flex border border-sky-500/40 hover:border-sky-400 bg-sky-950/60 hover:bg-sky-900/60 px-6 py-4 text-[11px] font-black uppercase tracking-[0.25em] text-sky-300 transition-all items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-sky-400" />
              <span>Quote Calculator</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation & Indicators Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/80">
          {/* Slide Dots / Thumbnail Indicators */}
          <div className="flex items-center space-x-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group relative py-2 text-left focus:outline-none transition-all ${
                  idx === currentIndex ? 'w-24 sm:w-32' : 'w-10 sm:w-12'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-sky-400 shadow-lg shadow-sky-500/50'
                      : 'bg-slate-700 group-hover:bg-slate-500'
                  }`}
                />
                <span className="hidden sm:block text-[10px] font-mono text-slate-400 mt-1 truncate">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-slate-400 mr-2">
              <span className="text-white font-bold">0{currentIndex + 1}</span> / 0{HERO_SLIDES.length}
            </span>

            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-sky-600 border border-slate-700 text-white transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-sky-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-sky-600 border border-slate-700 text-white transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Trust Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-4">
          <div className="flex items-center space-x-3 bg-[#0A192F]/90 p-4 border border-white/10 backdrop-blur-md">
            <Compass className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wider">Naval Architecture</p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">Classed 3D CAD modeling</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#0A192F]/90 p-4 border border-white/10 backdrop-blur-md">
            <Shield className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wider">IACS Certified</p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">DNV, ABS & Lloyd's Register</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#0A192F]/90 p-4 border border-white/10 backdrop-blur-md">
            <Anchor className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wider">300m Dry Dock</p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">Heavy hull fabrication basin</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#0A192F]/90 p-4 border border-white/10 backdrop-blur-md">
            <div className="w-7 h-7 bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <span className="text-emerald-400 font-black text-xs font-mono">24/7</span>
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wider">Voyage Repair</p>
              <p className="text-[10px] font-mono text-slate-400 mt-0.5">Global emergency response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
