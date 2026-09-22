import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/config';

export const Testimonials: React.FC = () => {
  return (
    <section 
      id="depoimentos"
      className="py-20 lg:py-28 bg-[#1E1613] text-stone-100 relative overflow-hidden"
    >
      {/* Decoração de fundo sutil */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Depoimentos Reais &amp; Histórias de Transformação</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-stone-100">
            A Voz de Quem Já Encontrou <span className="gold-gradient-text">Clareza &amp; Paz</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Mais de 1.500 pessoas já alinharam seus caminhos com Andréa Salgueiro.
            Veja o impacto da Numerologia Terapêutica na vida de nossos consulentes.
          </p>
        </div>

        {/* GRID DE DEPOIMENTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#121212] border border-stone-800 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Ícone de aspas douradas no fundo */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C5A059]/10 group-hover:text-[#C5A059]/20 transition-colors pointer-events-none" />

              <div>
                {/* 5 ESTRELAS EM DOURADO SOLICITADAS */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-[#C5A059] bg-[#1E1613] px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                    {item.highlight}
                  </span>
                </div>

                {/* TEXTO DO DEPOIMENTO */}
                <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* AUTOR DO DEPOIMENTO */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-stone-100 text-sm sm:text-base flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {item.role}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#C5A059] font-medium block">
                    {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* TRUST BADGE SOCIAL */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-400 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Consultas individuais com sigilo terapêutico absoluto garantido.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
