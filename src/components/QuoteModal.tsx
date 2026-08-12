import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Ship, ShieldCheck, Calculator } from 'lucide-react';
import { SERVICES_DATA } from '../data/shipbuildingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [vesselType, setVesselType] = useState('Container Ship');
  const [deadweight, setDeadweight] = useState('20,000 DWT');
  const [serviceScope, setServiceScope] = useState('Newbuilding Construction');
  const [timeline, setTimeline] = useState('12-18 Months');

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050B16]/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="relative w-full max-w-2xl bg-[#050B16] border border-white/10 shadow-2xl overflow-hidden my-8 text-slate-100"
        >
          {/* Header */}
          <div className="p-6 bg-[#0A192F] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-[#050B16] text-sky-400 border border-white/10">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white uppercase tracking-wider">
                  Shipyard Project Estimate & Inquiry
                </h3>
                <p className="text-[10px] text-slate-400 font-light">
                  Select vessel specifications for a preliminary commercial assessment
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-[#050B16] text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight">
                  Shipyard Estimate Request Filed
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light">
                  Your project specs (<span className="text-sky-400 font-semibold">{vesselType} - {deadweight}</span>) have been logged. A senior commercial estimator will review and issue a preliminary proposal to <span className="text-white font-semibold">{contactEmail}</span>.
                </p>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400/30 mt-4 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleNext} className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0A192F] text-[10px] font-mono border border-white/10 uppercase tracking-wider">
                  <span className={step === 1 ? 'text-sky-400 font-black' : 'text-slate-500'}>
                    1. Vessel & Project Scope
                  </span>
                  <span className="text-slate-600">→</span>
                  <span className={step === 2 ? 'text-sky-400 font-black' : 'text-slate-500'}>
                    2. Client & Contact Details
                  </span>
                </div>

                {step === 1 ? (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                        Target Vessel Type
                      </label>
                      <select
                        value={vesselType}
                        onChange={(e) => setVesselType(e.target.value)}
                        className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                      >
                        <option value="Container / Cargo Vessel" className="bg-[#050B16]">Container / Cargo Vessel</option>
                        <option value="Chemical / Oil Tanker" className="bg-[#050B16]">Chemical / Oil Tanker</option>
                        <option value="LNG / LPG Gas Carrier" className="bg-[#050B16]">LNG / LPG Gas Carrier</option>
                        <option value="Harbor / Ocean Tugboat" className="bg-[#050B16]">Harbor / Ocean Tugboat</option>
                        <option value="Offshore Support Vessel (OSV)" className="bg-[#050B16]">Offshore Support Vessel (OSV)</option>
                        <option value="Naval / Defense Auxiliary" className="bg-[#050B16]">Naval / Defense Auxiliary</option>
                        <option value="Custom Research & Survey Vessel" className="bg-[#050B16]">Custom Research & Survey Vessel</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Deadweight Tonnage (DWT)
                        </label>
                        <select
                          value={deadweight}
                          onChange={(e) => setDeadweight(e.target.value)}
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        >
                          <option value="Under 5,000 DWT" className="bg-[#050B16]">Under 5,000 DWT</option>
                          <option value="5,000 - 20,000 DWT" className="bg-[#050B16]">5,000 - 20,000 DWT</option>
                          <option value="20,000 - 50,000 DWT" className="bg-[#050B16]">20,000 - 50,000 DWT</option>
                          <option value="50,000 - 120,000 DWT" className="bg-[#050B16]">50,000 - 120,000 DWT</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Desired Completion Window
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        >
                          <option value="Immediate Emergency Drydock" className="bg-[#050B16]">Immediate Emergency Drydock</option>
                          <option value="Within 3 - 6 Months" className="bg-[#050B16]">Within 3 - 6 Months</option>
                          <option value="12 - 18 Months (Standard Build)" className="bg-[#050B16]">12 - 18 Months (Standard Build)</option>
                          <option value="24+ Months (Multi-vessel Fleet)" className="bg-[#050B16]">24+ Months (Multi-vessel Fleet)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                        Primary Scope
                      </label>
                      <select
                        value={serviceScope}
                        onChange={(e) => setServiceScope(e.target.value)}
                        className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                      >
                        <option value="Turnkey Shipbuilding & Construction" className="bg-[#050B16]">Turnkey Shipbuilding & Construction</option>
                        <option value="Drydock Maintenance & Hull Painting" className="bg-[#050B16]">Drydock Maintenance & Hull Painting</option>
                        <option value="Dual-Fuel / Hybrid Engine Retrofit" className="bg-[#050B16]">Dual-Fuel / Hybrid Engine Retrofit</option>
                        <option value="Naval Design & Class Drawing Package" className="bg-[#050B16]">Naval Design & Class Drawing Package</option>
                        <option value="Offshore Structure Fabrication" className="bg-[#050B16]">Offshore Structure Fabrication</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400/30 mt-4 transition-colors"
                    >
                      Continue to Contact Details →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Captain / Engineer Name"
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                          Shipping Line / Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Oceanic Lines Corp"
                          className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                        Additional Technical Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Mention classification society (DNV, ABS, LR), speed requirements, specialized deck gear..."
                        className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500 resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3 bg-[#0A192F] hover:bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10"
                      >
                        ← Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400/30 flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <span>Submit Estimate Request</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
