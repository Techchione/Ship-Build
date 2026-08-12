import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { QuoteModal } from './components/QuoteModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Intersection observer to track current active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* HERO Carousel Section */}
        <HeroCarousel
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* ABOUT Section */}
        <AboutSection
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* SERVICES Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* CONTACT Section */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Service Detail Technical Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Quick Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
