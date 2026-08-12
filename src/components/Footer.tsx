import React from 'react';
import { Ship, Anchor, Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/shipbuildingData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B16] text-slate-300 border-t border-white/10 relative z-20">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Company Logo & Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border-2 border-sky-500 bg-[#050B16] flex items-center justify-center">
                <div className="w-5 h-5 bg-sky-500 transform rotate-45 flex items-center justify-center">
                  <Ship className="w-3.5 h-3.5 text-[#050B16] transform -rotate-45" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter uppercase text-white font-sans">
                  OCEANIC <span className="text-sky-400">MARINE</span>
                </span>
                <span className="text-[9px] text-sky-500 font-bold uppercase tracking-[0.4em] mt-0.5">
                  ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              A premier global shipyard specializing in naval architecture, commercial vessel construction, heavy steel block fabrication, and round-the-clock emergency drydock repairs.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <div className="px-3 py-1 bg-[#0A192F] border border-white/10 text-[10px] font-mono text-sky-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>IACS Class Compliant</span>
              </div>
              <div className="px-3 py-1 bg-[#0A192F] border border-white/10 text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                ISO 9001 / 14001
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-sky-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="hover:text-sky-400 transition-colors flex items-center space-x-2 text-slate-300 uppercase tracking-widest font-bold"
                  >
                    <span className="text-sky-500">›</span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary & Quote CTA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] border-l-2 border-sky-500 pl-2">
              Shipyard Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-light">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-sky-400">{COMPANY_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-[0.25em] border border-sky-400/30 transition-colors"
              >
                Request Shipbuilding Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#050B16] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <p>© {new Date().getFullYear()} Oceanic Marine Shipbuilding & Engineering Co. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#0A192F] border border-white/10 hover:bg-sky-600 text-slate-300 hover:text-white transition-colors flex items-center space-x-1 text-[10px] font-black uppercase tracking-widest"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
