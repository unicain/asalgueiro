import React from 'react';
import { 
  Volume2, 
  FileText, 
  Clock, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const ConsultationInclusions: React.FC = () => {
  const inclusions = [
    {
      icon: Volume2,
      title: 'Gravação em Áudio Inclusa',
      subtitle: 'Ouça quando quiser',
      description: 'Grave ou receba o áudio integral da sua consulta para revisitar as orientações e insights sempre que precisar.'
    },
    {
      icon: FileText,
      title: 'Dossiê em PDF Completo',
      subtitle: 'Material vitalício',
      description: 'Documento estruturado com todos os seus cálculos numerológicos, ciclos de vida e interpretações para consulta permanente.'
    },
    {
      icon: Clock,
      title: 'Até 2h de Consulta Individual',
      subtitle: 'Sem pressa, com escuta atenta',
      description: 'Tempo exclusivo e dedicado à sua história, permitindo aprofundar suas dúvidas e anseios com calma e respeito.'
    },
    {
      icon: Compass,
      title: 'Análise de Ano Pessoal & Ciclos',
      subtitle: 'Direcionamento no tempo certo',
      description: 'Compreensão clara das energias que regem o seu momento atual para apoiar decisões profissionais, afetivas e pessoais.'
    }
  ];

  return (
    <section 
      id="inclusoes-consulta"
      className="py-16 sm:py-20 bg-[#2B2622] text-stone-100 relative overflow-hidden border-t border-[#3A332C]"
    >
      {/* Luz ambiente suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#332D28] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrutura do Atendimento</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-100">
            Tudo o Que Está Incluído na Sua <span className="gold-gradient-text">Consulta</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Cada atendimento com Andréa Salgueiro é preparado individualmente, garantindo profundidade, 
            materiais de apoio permanente e total acolhimento.
          </p>
        </div>

        {/* GRID DE CARDS COM AS INCLUSÕES DO ATENDIMENTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl p-6 bg-[#332D28] border border-[#C5A059]/25 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2B2622] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-100 group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#C5A059] font-medium mt-1 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#3A332C] flex items-center gap-1.5 text-xs text-stone-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Incluso no atendimento</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESTAQUE DE GARANTIA HUMANA & MODALIDADES */}
        <div className="rounded-2xl bg-gradient-to-r from-[#332D28] via-[#3A332C] to-[#332D28] border border-[#C5A059]/40 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Ícone e Texto de Garantia */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#2B2622] border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 shadow-inner">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#C5A059]">
                    Garantia Ética
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                    Atendimento 100% Humano e Individualizado
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                  Sua história não é lida por computadores. Cada mapa é estudado meticulosamente por 
                  Andréa Salgueiro antes e durante seu encontro. Não utilizamos inteligência artificial 
                  ou relatórios pré-moldados.
                </p>
              </div>
            </div>

            {/* Modalidades Presencial e Online + CTA discreto */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-3 lg:border-l lg:border-[#C5A059]/20 lg:pl-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Presencial em <strong>São Paulo/SP</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Online para <strong>todo o Brasil e Exterior</strong></span>
              </div>
              <a
                href={getWhatsAppUrl(WHATSAPP_CONFIG.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Andréa no WhatsApp &rarr;</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
