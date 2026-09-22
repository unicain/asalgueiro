import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* BALÃO / TOOLTIP AMIGÁVEL DE CRO */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1E1613] text-stone-100 border border-[#C5A059]/50 px-3.5 py-2 rounded-2xl shadow-2xl animate-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <div className="text-left">
            <p className="text-xs font-bold text-[#C5A059]">Fale com Andréa</p>
            <p className="text-[11px] text-stone-300">Tire dúvidas no WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-200 p-1 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* BOTÃO PRINCIPAL COM PULSO DE ANIMAÇÃO */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl shadow-green-950/60 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Conversar no WhatsApp com Andréa Salgueiro"
      >
        {/* Halo de pulso sutil */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white transition-transform group-hover:rotate-12" />
        
        {/* Badge notificadora discreta */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-[#C5A059] border-2 border-[#121212] rounded-full" />
      </a>
    </div>
  );
};
