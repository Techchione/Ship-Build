import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building2, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050B16]/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="relative w-full max-w-3xl bg-[#050B16] border border-white/10 shadow-2xl overflow-hidden my-8 text-slate-100"
        >
          {/* Header Image Banner */}
          <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0A192F]">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-[#050B16]/60 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-[#0A192F] hover:bg-sky-600 text-slate-300 hover:text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 bg-sky-950 border border-sky-400/40 text-sky-300 font-bold text-[10px] uppercase tracking-[0.2em]">
                {service.tag} Technical Specification
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {service.fullDescription}
            </p>

            {/* Technical Specs Table */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                <span>Drydock & Operational Parameters</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#0A192F] p-4 border border-white/10">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities Bullet Points */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Core Engineering Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300 p-2.5 bg-[#0A192F] border border-white/10 font-light">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="p-6 bg-[#0A192F] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
              IACS Classed Standard Inspection Ready
            </span>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#050B16] hover:bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-sky-400/30 flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Request Detailed Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
