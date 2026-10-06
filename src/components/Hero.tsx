import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG, BRAND_ASSETS } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[85vh] lg:min-h-[88vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#2B2622] flex items-center"
    >
      {/* Luzes de fundo atmosféricas e acolhedoras em tons quentes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#3A332C]/35 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUNA DE CONTEÚDO PRINCIPAL (À esquerda em telas grandes; topo em telas pequenas) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 text-left">
            
            {/* 1. TÍTULO PRINCIPAL CURTO E IMPACTANTE (Máximo 9 palavras) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-serif text-stone-100 font-bold leading-[1.18] tracking-tight">
              Descubra o seu caminho com a{' '}
              <span className="gold-gradient-text">Numerologia Terapêutica</span>
            </h1>

            {/* 2. SUBTÍTULO CURTO E ACOLHEDOR */}
            <p className="text-base sm:text-lg md:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
              Consultas individuais com Andréa Salgueiro: um atendimento humano, acolhedor e personalizado para alinhar seus ciclos, clarear suas decisões e destravar caminhos.
            </p>

            {/* 3. ÚNICO BOTÃO PRINCIPAL DE AÇÃO (WhatsApp) */}
            <div className="pt-1">
              <a
                id="hero-whatsapp-main-cta"
                href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg shadow-black/25 hover:shadow-green-900/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-6 h-6 fill-white shrink-0" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>

            {/* 4. PROVA SOCIAL COMPACTA */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-300 pt-2 border-t border-stone-700/60 max-w-xl">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>
                <span className="font-semibold text-stone-100 ml-1">Nota 5.0</span>
              </div>
              <span className="text-[#C5A059]/60">•</span>
              <span>+1.500 mapas entregues</span>
              <span className="text-[#C5A059]/60">•</span>
              <span>12+ anos</span>
            </div>

          </div>

          {/* 5. FOTO PRINCIPAL DA ANDRÉA (À direita em telas grandes; abaixo dos textos/botão em mobile) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px]">
              
              {/* Moldura elegante, cantos arredondados e sombra suave */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl shadow-black/50 bg-[#332D28] aspect-[4/5]">
                <picture>
                  <source srcSet={BRAND_ASSETS.andreaPhoto} type="image/webp" />
                  <img
                    src={BRAND_ASSETS.andreaPhotoFallback}
                    alt="Andréa Salgueiro - Numeróloga Terapêutica"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />
                </picture>

                {/* Vinheta suave inferior para integração com o fundo quente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2622]/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
