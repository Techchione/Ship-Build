import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Headphones,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/shipbuildingData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Shipbuilding & Construction',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: 'Shipbuilding & Construction',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A192F] text-slate-100 relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading - Geometric Balance Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-sky-500" />
            <div className="flex items-center gap-2 text-sky-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Direct Commercial Inquiries</span>
            </div>
            <div className="h-[2px] w-8 bg-sky-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            CONNECT WITH OUR NAVAL ENGINEERING TEAM
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Have a shipbuilding project, drydock overhaul requirement, or technical specification inquiry? Submit your request directly to our shipyard commercial office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form - Sharp Geometric Container */}
          <div className="lg:col-span-7 bg-[#050B16] border border-white/10 p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <span className="text-sky-400 font-bold">{formData.name}</span>. A senior naval engineer from Oceanic Marine will review your message regarding <span className="text-white font-semibold">{formData.serviceType}</span> and contact you within 24 business hours.
                </p>

                <div className="p-4 bg-[#0A192F] border border-white/10 max-w-md mx-auto text-xs text-slate-300 text-left space-y-1 font-mono">
                  <p><span className="text-slate-500">Reference:</span> OMB-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</p>
                  <p><span className="text-slate-500">Company:</span> {formData.company || 'Private Client'}</p>
                  <p><span className="text-slate-500">Email:</span> {formData.email}</p>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400/30 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-sky-400" />
                    <span>Project & Service Request Form</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Captain James Vance"
                      className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vance@maritime-logistics.com"
                      className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Freight Lines Inc."
                      className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                    Primary Service Required
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#050B16] text-white">
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Commercial Inquiry" className="bg-[#050B16] text-white">
                      General Commercial Inquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                    Project Overview / Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding vessel specs, DWT capacity, classification standards, required completion dates..."
                    className="w-full px-4 py-3 bg-[#0A192F] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-black text-[11px] uppercase tracking-[0.25em] border border-sky-400/30 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Company Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Details Card */}
            <div className="bg-[#050B16] border border-white/10 p-8 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-wider pb-3 border-b border-white/10 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-sky-400" />
                <span>Headquarters & Drydock Contacts</span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A192F] text-sky-400 shrink-0 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Primary Shipyard Address
                    </h5>
                    <p className="text-xs font-semibold text-white mt-1">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A192F] text-sky-400 shrink-0 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Commercial & General Inquiries
                    </h5>
                    <p className="text-xs font-semibold text-white mt-1">
                      {COMPANY_INFO.phone}
                    </p>
                    <p className="text-[11px] text-emerald-400 font-bold mt-1">
                      24/7 Drydock: {COMPANY_INFO.emergencyPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A192F] text-sky-400 shrink-0 border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Official Inquiry Email
                    </h5>
                    <p className="text-xs font-semibold text-sky-400 mt-1">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A192F] text-sky-400 shrink-0 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Shipyard Operating Hours
                    </h5>
                    <p className="text-xs font-semibold text-white mt-1">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Shipyard Locations List */}
            <div className="bg-[#050B16] border border-white/10 p-6 space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center justify-between">
                <span>International Yards</span>
                <ShieldCheck className="w-4 h-4 text-sky-400" />
              </h4>

              <div className="space-y-3">
                {COMPANY_INFO.locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#0A192F] border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">{loc.city}</h5>
                      <p className="text-[10px] text-slate-400 font-light">{loc.desc}</p>
                    </div>
                    <span className="w-2 h-2 bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
