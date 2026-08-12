import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Ship,
  Compass,
  Wrench,
  ShieldAlert,
  DraftingCompass,
  Anchor,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/shipbuildingData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Construction', 'Engineering', 'Maintenance', 'Fabrication', 'Design', 'Offshore'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.tag.toLowerCase() === activeCategory.toLowerCase());

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship':
        return <Ship className="w-5 h-5 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-sky-400" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-5 h-5 text-sky-400" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-sky-400" />;
      default:
        return <Ship className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050B16] text-slate-100 relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Geometric Balance Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-sky-500" />
            <div className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Heavy Industrial Marine Expertise</span>
            </div>
            <div className="h-[2px] w-8 bg-sky-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            OUR CORE SHIPBUILDING & ENGINEERING SERVICES
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            From newbuild naval architecture to heavy steel block fabrication and emergency drydock repairs, we provide comprehensive maritime solutions.
          </p>
        </div>

        {/* Category Filters - Sharp Geometric Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 bg-[#0A192F] p-1.5 border border-white/10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white border border-sky-400/40'
                  : 'bg-transparent text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid - Geometric Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#0A192F] border border-white/10 hover:border-sky-500/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-[#050B16]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 p-2.5 bg-[#050B16] border border-white/10 shadow-lg">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-sky-950/90 border border-sky-500/30 text-sky-400 font-bold text-[9px] uppercase tracking-[0.3em]">
                    {service.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-white/10 mt-4">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 hover:text-sky-300 flex items-center space-x-1.5"
                >
                  <span>Technical Specs</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuoteModal}
                  className="p-2.5 bg-[#050B16] hover:bg-sky-600 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Request Service Quote"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner - Geometric Balance */}
        <div className="mt-16 p-8 bg-[#0A192F] border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-black text-white uppercase tracking-tight">
              Need Custom Ship Building or Emergency Dry Dock Repairs?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl font-light">
              Our engineering team is ready to evaluate your vessel blueprints, classification society requirements, and drydock repair schedules.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-[11px] uppercase tracking-[0.25em] border border-sky-400/30 shrink-0 transition-all"
          >
            Inquire For Project
          </button>
        </div>
      </div>
    </section>
  );
};
