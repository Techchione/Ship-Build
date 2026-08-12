import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Users,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ABOUT_IMAGE, COMPANY_STATS, CERTIFICATIONS } from '../data/shipbuildingData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'safety' | 'tech'>('overview');

  return (
    <section id="about" className="py-24 bg-[#0A192F] text-slate-100 relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Geometric Balance Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-sky-500" />
            <div className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Pioneering Naval Architecture</span>
            </div>
            <div className="h-[2px] w-8 bg-sky-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            WORLD-CLASS SHIPBUILDING & ENGINEERING
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            For nearly four decades, Oceanic Marine has set international benchmarks in commercial vessel construction, heavy steel block fabrication, and deepwater repairs.
          </p>
        </div>

        {/* Main Content Grid: Image + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Geometric Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-2 border-white/10 bg-[#050B16] p-2 group">
              <img
                src={ABOUT_IMAGE}
                alt="State-of-the-art Drydock Shipyard Facility"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent opacity-80" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0A192F]/95 backdrop-blur-md border border-sky-500/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 border-2 border-sky-500 bg-sky-600 text-white flex items-center justify-center font-black text-xl shrink-0">
                    38+
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white uppercase tracking-wider">
                      Years of Maritime Leadership
                    </h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5">
                      Delivering high-performance vessels compliant with leading international classification societies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Overview */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tab Navigation - Sharp Geometric Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-[#050B16] border border-white/10">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'mission', label: 'Mission' },
                { id: 'safety', label: 'Safety' },
                { id: 'tech', label: 'Tech' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 px-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all text-center ${
                    activeTab === tab.id
                      ? 'bg-sky-600 text-white border border-sky-400/40'
                      : 'text-slate-400 hover:text-white bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Box - Sharp Frame */}
            <div className="p-6 sm:p-8 bg-[#050B16] border border-white/10 min-h-[320px] flex flex-col justify-between">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    Trusted Partner for Heavy Marine Construction
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    Oceanic Marine operates a fully integrated 45-hectare shipyard facility equipped with graving drydocks, automated steel block assembly lines, and high-capacity gantry cranes.
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    We serve global commercial shipowners, offshore energy contractors, and government defense agencies. Our multidisciplinary team manages projects end-to-end—from initial CAD modeling to final sea trials.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center space-x-2 text-xs text-sky-400 font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>280m Max Vessel LOA</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-sky-400 font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Robotic Sub-Arc Welding</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-sky-400 font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>180,000T Steel Capacity</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-sky-400 font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Dual-Fuel Propulsion</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    Our Mission & Vision
                  </h3>
                  <div className="border-l-2 border-sky-500 pl-4 py-1 bg-[#0A192F]/60">
                    <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest">OUR MISSION</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 font-light">
                      To design, build, and maintain sea-worthy vessels that maximize efficiency, withstand extreme maritime environments, and drive sustainable oceanic transportation.
                    </p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4 py-1 bg-[#0A192F]/60">
                    <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest">OUR VISION</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 font-light">
                      To lead the global transition toward zero-emission hybrid vessels, combining cutting-edge naval engineering with eco-friendly hydrodynamics.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'safety' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-sky-400" />
                    <span>Uncompromising Safety & Quality</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    Safety is at the heart of our shipyard culture. We maintain ISO 45001 safety certification and enforce a zero-harm policy across all drydocks, scaffolding systems, and confined space welding operations.
                  </p>
                  <div className="bg-[#0A192F] p-4 border border-white/10 space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-slate-200">ISO 9001 Quality Compliance</span>
                      <span className="text-sky-400">100% Pass Rate</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-slate-200">Hull Non-Destructive Testing (NDT)</span>
                      <span className="text-sky-400">Ultrasonic & X-Ray</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'tech' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-sky-400" />
                    <span>Modern Infrastructure & Tech</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    We employ 3D laser scanning for hull alignment, 5-axis CNC plasma plate cutting, and AVEVA Marine parametric software to accelerate construction timelines by up to 25%.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-[#0A192F] border border-white/10 text-xs">
                      <span className="text-sky-400 font-black block uppercase tracking-wider">900T Gantry Crane</span>
                      <span className="text-slate-400 font-light">Heavy Block Lifting</span>
                    </div>
                    <div className="p-3 bg-[#0A192F] border border-white/10 text-xs">
                      <span className="text-sky-400 font-black block uppercase tracking-wider">3D Digital Twin</span>
                      <span className="text-slate-400 font-light">Hull Simulation</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Bottom Action inside tab */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 hover:text-sky-300 flex items-center space-x-1"
                >
                  <span>Speak with our naval engineering team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-sky-400/30 transition-colors"
                >
                  Get Shipyard Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats Counter Grid - Geometric Balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-[#050B16] border border-white/10 hover:border-sky-500/50 transition-colors group"
            >
              <span className="block text-4xl sm:text-5xl font-black text-sky-400 font-sans group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </span>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mt-3">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* International Classification & Standards Banner */}
        <div className="mt-20 p-8 bg-[#050B16] border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-black uppercase text-white tracking-widest flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-sky-400" />
              <span>International Classification Society Compliance</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Every vessel designed and constructed at Oceanic Marine meets strict international class societies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0A192F] border border-white/10 flex items-start space-x-3"
              >
                <div className="p-2 bg-sky-950/80 border border-sky-500/30 text-sky-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase text-white tracking-wider">{cert.name}</h5>
                  <span className="inline-block px-1.5 py-0.5 bg-[#050B16] text-[9px] text-sky-400 font-mono border border-sky-500/20 mt-1">
                    {cert.code}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight font-light">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
