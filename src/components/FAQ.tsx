import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA, getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const FAQ: React.FC = () => {
  // Estado para controlar qual pergunta do acordeão está aberta (abre a primeira por padrão)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-20 lg:py-28 bg-[#121212] text-stone-100 relative border-t border-stone-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E1613] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-stone-100">
            Perguntas <span className="gold-gradient-text">Frequentes</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Tudo o que você precisa saber sobre o agendamento, o formato da consulta e o cálculo do seu Mapa.
          </p>
        </div>

        {/* ACORDEÃO INTERATIVO */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen
                    ? 'bg-[#1E1613] border-[#C5A059]/60 shadow-lg shadow-[#C5A059]/5'
                    : 'bg-[#1E1613]/50 border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-stone-100 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#C5A059] text-black rotate-180' : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-300 leading-relaxed border-t border-stone-800/40 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SUPORTE DIRETO NO WHATSAPP PARA OUTRAS DÚVIDAS */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1E1613] border border-[#C5A059]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif font-bold text-lg text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Ainda tem alguma pergunta específica?</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Fale diretamente no WhatsApp para tirar dúvidas sobre datas, valores e formatos.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá Andréa, tenho uma dúvida que não encontrei no FAQ do site e gostaria de conversar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-green-950/30 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
