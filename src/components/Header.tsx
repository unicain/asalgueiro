import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A059]/20'
          : 'bg-gradient-to-b from-[#121212] via-[#121212]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex flex-col group text-left">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-stone-100 group-hover:text-[#C5A059] transition-colors">
              ANDRÉA SALGUEIRO
            </span>
            <Sparkles className="w-4 h-4 text-[#C5A059] opacity-80 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#C5A059] font-medium">
            Numerologia Terapêutica
          </span>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* BOTÃO CTA HEADER & ATENDIMENTO SP */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-stone-400 border-r border-stone-800 pr-4">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>São Paulo / SP & Online</span>
          </div>

          <a
            id="header-whatsapp-cta"
            href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Agendar Consulta</span>
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2 bg-[#25D366] rounded-full text-white"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-[#C5A059] focus:outline-none transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE EXPANSÍVEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E1613] border-b border-[#C5A059]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-[#C5A059] transition-colors py-1.5 border-b border-stone-800/60"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Consultório em São Paulo / SP & Online para todo o Brasil</span>
            </div>

            <a
              id="mobile-menu-whatsapp-btn"
              href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-base px-6 py-3 rounded-xl shadow-lg shadow-green-900/30 transition-all text-center mt-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
