import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  MessageCircle, 
  Mail, 
  Instagram, 
  ShieldCheck, 
  Heart,
  ArrowUp
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#121212] text-stone-400 border-t border-stone-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID PRINCIPAL DO RODAPÉ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* COLUNA 1: MARCA E MISSÃO */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold tracking-wider text-stone-100">
                  ANDRÉA SALGUEIRO
                </span>
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#C5A059] font-medium mt-0.5">
                Numerologia Terapêutica &amp; Terapias Energéticas
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Conectando sabedoria milenar, sensibilidade humana e direcionamento prático para iluminar suas escolhas e revelar o verdadeiro mapa da sua alma.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E1613] border border-stone-800 hover:border-[#C5A059] flex items-center justify-center text-stone-300 hover:text-[#C5A059] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <a
                href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E1613] border border-stone-800 hover:border-[#25D366] flex items-center justify-center text-stone-300 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:contato@andreasalgueiro.com.br"
                className="w-9 h-9 rounded-lg bg-[#1E1613] border border-stone-800 hover:border-[#C5A059] flex items-center justify-center text-stone-300 hover:text-[#C5A059] transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-stone-200 text-sm tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#sobre" className="hover:text-[#C5A059] transition-colors">
                  Sobre Andréa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Serviços &amp; Mapas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#C5A059] transition-colors">
                  Diferencial Humano
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#C5A059] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C5A059] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: SERVIÇOS EM DESTAQUE */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-200 text-sm tracking-wide uppercase">
              Atendimentos
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Mapa Numerológico Pessoal
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Sinastria de Casal &amp; Harmonização
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Numerologia Empresarial
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Estudo de Nome para Bebê
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Mentoria Método C.A.L.M.A.
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors">
                  Mesa Radiónica / Quântica &amp; SVH
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: ATENDIMENTO & LOCALIZAÇÃO */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-200 text-sm tracking-wide uppercase">
              Consultório &amp; Contato
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">São Paulo / SP:</strong>
                  <span>Atendimento Presencial em consultório harmonizado (com agendamento prévio).</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">WhatsApp de Atendimento:</strong>
                  <a 
                    href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-semibold"
                  >
                    {WHATSAPP_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">Online para o Mundo:</strong>
                  <span>Sessões ao vivo por Zoom / Meet com gravação de áudio inclusa.</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[11px] text-stone-400">Sigilo ético e terapêutico 100% preservado.</span>
              </div>
            </div>
          </div>

        </div>

        {/* PARTE INFERIOR: COPYRIGHT & VOLTAR AO TOPO */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Andréa Salgueiro — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 transition-colors">
              Privacidade &amp; Ética Terapêutica
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#C5A059] inline-flex items-center gap-1 transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ASSINATURA DE DESENVOLVIMENTO */}
        <div className="mt-6 pt-4 border-t border-stone-800/60 text-center text-xs text-stone-500 flex flex-wrap items-center justify-center gap-1.5">
          <span>By:</span>
          <strong className="text-stone-300 font-semibold">Jacson Marcelo</strong>
          <span className="text-[#C5A059]">•</span>
          <span>Desenvolvido com inteligência e IA</span>
          <span className="text-stone-600">|</span>
          <a
            href="https://unicain.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:text-[#ECC880] hover:underline font-medium transition-colors"
          >
            unicain.com.br
          </a>
        </div>

      </div>
    </footer>
  );
};
