import React, { useState, useEffect } from 'react';
import { Ship, Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-[#0A192F]/80 backdrop-blur-md py-4'
      }`}
    >
      {/* Top emergency hotline bar - visible on desktop when not deeply scrolled */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-3">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-mono tracking-wider uppercase text-slate-300">
            <div className="flex items-center space-x-6">
              <span className="flex items-center text-sky-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-sky-500" />
                IACS & Classed Shipbuilding Standards
              </span>
              <span className="text-white/20">|</span>
              <span>Port District 4082, Heavy Industrial Drydock</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:18005557447"
                className="flex items-center text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
                24/7 Drydock Hotline: +1 (800) 911-DOCK
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Geometric Balance design */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 border-2 border-sky-500 flex items-center justify-center bg-[#050B16] group-hover:bg-sky-500/10 transition-colors">
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
          </button>

          {/* Desktop Navigation Links - STRICTLY ONLY: Home, About, Services, Contact */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.25em]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors py-1 border-b-2 ${
                    isActive
                      ? 'text-sky-400 border-sky-500 font-black'
                      : 'text-slate-400 hover:text-white border-transparent'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button - Geometric Balance sharp button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-sky-600 hover:bg-sky-500 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.25em] text-white transition-all flex items-center gap-2 border border-sky-400/30"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white bg-sky-600 border border-sky-400/40"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B192C] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-3 rounded-lg text-left text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-600 text-white font-bold'
                      : 'text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg text-center font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Request Shipbuilding Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-400 mt-3">
              24/7 Drydock Emergency: +1 (800) 911-DOCK
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
