import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Calendar, 
  Star, 
  CheckCircle2, 
  Volume2, 
  FileText, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG, BRAND_ASSETS } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#121212] flex items-center"
    >
      {/* Luzes de fundo atmosféricas (sem gradiente slop, apenas iluminação sutil de ambiente) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#1E1613] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA DE CONTEÚDO (CRO & HEADLINE) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* BADGE DOURADO SUPERIOR SOLICITADO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E1613] border border-[#C5A059]/40 text-[#C5A059] text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Atendimento Presencial em SP &amp; Online para o Brasil</span>
            </div>

            {/* HEADLINE H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-serif text-stone-100 font-bold leading-[1.18] tracking-tight">
              Descubra o mapa da sua essência com a{' '}
              <span className="gold-gradient-text">Numerologia Terapêutica</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-base sm:text-lg md:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
              Uma consulta individual e profunda para alinhar seus ciclos, clarear suas escolhas e destravar seus caminhos —{' '}
              <strong className="text-stone-100 font-semibold">100% humanizada e sem relatórios genéricos por IA.</strong>
            </p>

            {/* BENEFÍCIOS RÁPIDOS EM DESTAQUE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Análise de Ano Pessoal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Gravação em áudio inclusa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Dossiê em PDF completo</span>
              </div>
            </div>

            {/* ÁREA DE CONVERSÃO / CTAS */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-whatsapp-main-cta"
                href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-green-950/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-6 h-6 fill-white transition-transform group-hover:scale-110" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-stone-700 hover:border-[#C5A059] bg-[#1E1613]/80 hover:bg-[#1E1613] text-stone-200 hover:text-[#C5A059] font-medium text-base transition-all duration-300"
              >
                <span>Conhecer Serviços</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* CARD / SELO DE GARANTIA HUMANA SOLICITADO */}
            <div className="pt-4">
              <div className="p-4 rounded-xl bg-[#1E1613]/90 border border-[#C5A059]/30 flex items-center gap-4 max-w-xl">
                <div className="w-12 h-12 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-100 flex items-center gap-2">
                    <span>Atendimento 100% Humano e Individualizado</span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#C5A059] font-bold">
                      Garantia
                    </span>
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                    Sua história não é lida por computadores. Cada mapa é estudado meticulosamente por Andréa Salgueiro antes e durante seu encontro.
                  </p>
                </div>
              </div>
            </div>

            {/* PROVA SOCIAL / STATS RÁPIDOS */}
            <div className="flex items-center gap-6 pt-2 border-t border-stone-800/80">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>
                <span className="text-xs text-stone-300 font-medium ml-1">5.0 de avaliação</span>
              </div>
              <span className="text-stone-700">•</span>
              <span className="text-xs text-stone-400">+1.500 mapas entregues com acolhimento</span>
            </div>

          </div>

          {/* COLUNA VISUAL: FOTO DE ANDRÉA & ELEMENTOS DE VALOR */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* MOLDURA ELEGÂNTE DOURADA */}
            <div className="relative w-full max-w-[420px]">
              
              {/* Moldura decorativa externa com borda sutil */}
              <div className="absolute -inset-3 rounded-2xl border border-[#C5A059]/30 -z-10 translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#1E1613] border-2 border-[#C5A059]/60 shadow-2xl group">
                {/* Imagem de Andréa Salgueiro */}
                <img
                  src={BRAND_ASSETS.andreaPhoto}
                  alt="Andréa Salgueiro - Numeróloga Terapêutica"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                />

                {/* Gradiente sutil inferior para garantir legibilidade dos selos de autoridade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-[#121212]/30 to-transparent pointer-events-none" />

                {/* Badge sobre a imagem */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1E1613]/95 backdrop-blur-md border border-[#C5A059]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                        Terapeuta &amp; Mentora
                      </p>
                      <h3 className="font-serif text-lg font-bold text-stone-100">
                        Andréa Salgueiro
                      </h3>
                      <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#C5A059]" />
                        <span>Presencial em SP &amp; Online Brasil</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="px-2.5 py-1 rounded bg-[#C5A059]/20 text-[#C5A059] text-xs font-bold inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>12+ Anos</span>
                      </div>
                      <p className="text-[10px] text-stone-400 mt-1">Dedicação Holística</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE: GRAVAÇÃO + PDF */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#1E1613] border border-[#C5A059]/50 rounded-xl p-3 shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-semibold text-stone-100">Áudio Completo</p>
                  <p className="text-[10px] text-stone-400">Grave e escute quando quiser</p>
                </div>
              </div>

              {/* FLOATING BADGE: SESSÃO AO VIVO */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#1E1613] border border-[#C5A059]/50 rounded-xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-9 h-9 rounded-lg bg-green-950/60 border border-green-500/40 flex items-center justify-center text-green-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-semibold text-stone-100">Até 2h de Consulta</p>
                  <p className="text-[10px] text-stone-400">Sem pressa, com acolhimento</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
