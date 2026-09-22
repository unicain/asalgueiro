import React from 'react';
import { Check, X, Sparkles, UserCheck, Bot, MessageCircle } from 'lucide-react';
import { COMPARISON_POINTS, getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const Comparison: React.FC = () => {
  return (
    <section 
      id="diferenciais"
      className="py-20 lg:py-28 bg-[#FAF7F2] text-stone-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO (FUNDO CLARO DE ALTO CONTRASTE) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F0EB] border border-[#C5A059]/40 text-[#9F7E3B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Diferencial Competitivo &amp; Humanização</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-stone-900">
            A Diferença Entre um <span className="text-[#9F7E3B]">Encontro Terapêutico Real</span> e Textos de Computador
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            A internet está repleta de sites que geram PDFs em segundos com inteligência artificial.
            Descubra por que quem busca transformação de vida escolhe ser ouvido por um ser humano capacitado.
          </p>
        </div>

        {/* TABELA / GRID COMPARATIVO */}
        <div className="overflow-hidden rounded-2xl border border-stone-300 shadow-xl bg-white max-w-5xl mx-auto">
          
          {/* HEADER DA TABELA */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-stone-200">
            
            {/* Coluna 1: Critério */}
            <div className="hidden md:block md:col-span-4 p-5 bg-stone-100 font-semibold text-xs uppercase tracking-wider text-stone-600">
              Critério de Avaliação
            </div>

            {/* Coluna 2: Consulta com Andréa Salgueiro (Destaque Nobre) */}
            <div className="md:col-span-4 p-5 bg-[#1E1613] text-stone-100 flex items-center justify-between border-b md:border-b-0 border-[#C5A059]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#C5A059] flex items-center justify-center text-black">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="font-serif font-bold text-sm sm:text-base text-[#C5A059]">
                  Com Andréa Salgueiro
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-[#C5A059]/20 text-[#C5A059] px-2 py-0.5 rounded">
                Humanizado
              </span>
            </div>

            {/* Coluna 3: Geradores e Apps por IA */}
            <div className="md:col-span-4 p-5 bg-stone-200 text-stone-600 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-stone-400 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm text-stone-700">
                Sistemas Automáticos / IA
              </span>
            </div>

          </div>

          {/* LINHAS DO COMPARATIVO */}
          <div className="divide-y divide-stone-200">
            {COMPARISON_POINTS.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-stone-50"
              >
                {/* Nome do Critério */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-stone-800 text-xs sm:text-sm bg-stone-50 md:bg-transparent flex items-center">
                  <span>{item.feature}</span>
                </div>

                {/* Experiência com Andréa Salgueiro */}
                <div className="md:col-span-4 p-4 sm:p-5 bg-[#1E1613]/5 border-y md:border-y-0 md:border-x border-stone-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                    {item.andrea}
                  </p>
                </div>

                {/* Geradores Automáticos */}
                <div className="md:col-span-4 p-4 sm:p-5 text-stone-500 flex items-start gap-3 bg-stone-100/40">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.robots}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* RODAPÉ DO CARD COMPARATIVO COM CTA */}
          <div className="p-6 sm:p-8 bg-[#F5F0EB] text-center border-t border-stone-200">
            <h4 className="font-serif font-bold text-stone-900 text-lg sm:text-xl">
              Sua vida e seus sentimentos merecem uma atenção de verdade.
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl mx-auto">
              Reserve um horário para uma conversa comovente, reveladora e que fará sentido prático para o seu ano.
            </p>
            
            <div className="mt-5">
              <a
                href={getWhatsAppUrl("Olá Andréa, vi o comparativo no seu site e decidi que prefiro um atendimento 100% humanizado e personalizado.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-green-800/20 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Quero Minha Consulta Humanizada</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
