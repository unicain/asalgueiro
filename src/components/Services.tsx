import React from 'react';
import { 
  Compass, 
  Heart, 
  Briefcase, 
  Baby, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Clock, 
  MapPin, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem, getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const Services: React.FC = () => {
  // Mapeamento dinâmico de ícones Lucide
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C5A059]' };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Heart':
        return <Heart {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Baby':
        return <Baby {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section 
      id="servicos"
      className="py-20 lg:py-28 bg-[#121212] text-stone-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E1613] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultas &amp; Atendimentos Terapêuticos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-stone-100">
            Caminhos de Autoconhecimento &amp; <span className="gold-gradient-text">Direcionamento</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Seja para desbloquear sua carreira, harmonizar seu relacionamento ou encontrar o propósito da sua alma:
            escolha o atendimento ideal para o seu momento.
          </p>
        </div>

        {/* GRID DE SERVIÇOS - 6 CARDS SOLICITADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isPopular = service.popular;

            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 group ${
                  isPopular
                    ? 'bg-[#1E1613] border-2 border-[#C5A059] shadow-2xl shadow-[#C5A059]/10 lg:-translate-y-2'
                    : 'bg-[#1E1613]/80 border border-stone-800 hover:border-[#C5A059]/50 hover:bg-[#1E1613]'
                }`}
              >
                {/* BADGE POPULAR / DESTAQUE */}
                {isPopular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-[#C5A059] text-black text-[11px] font-bold uppercase tracking-wider shadow-md">
                    ★ {service.badge}
                  </div>
                )}

                <div>
                  {/* TOPO DO CARD: ÍCONE E CATEGORIA */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#121212] border border-[#C5A059]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {renderIcon(service.iconName)}
                    </div>
                    {!isPopular && (
                      <span className="text-[11px] font-semibold text-[#C5A059] bg-[#121212] px-2.5 py-1 rounded-md border border-stone-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* TÍTULO E SUBTÍTULO */}
                  <h3 className="text-xl font-serif font-bold text-stone-100 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#C5A059] font-medium mt-1 mb-3">
                    {service.subtitle}
                  </p>

                  {/* DESCRIÇÃO PRINCIPAL */}
                  <p className="text-sm text-stone-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* O QUE ESTÁ INCLUSO / BENEFÍCIOS */}
                  <div className="border-t border-stone-800/80 pt-4 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                      O que você recebe:
                    </p>
                    <ul className="space-y-2.5 text-xs text-stone-300">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RODAPÉ DO CARD: DURAÇÃO, FORMATO E BOTÃO DE WHATSAPP */}
                <div className="border-t border-stone-800/80 pt-4 mt-auto space-y-4">
                  <div className="flex flex-col gap-1.5 text-[11px] text-stone-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{service.format}</span>
                    </div>
                  </div>

                  {/* BOTÃO INDIVIDUAL DE CONVERSÃO PARA ESTE SERVIÇO */}
                  <a
                    href={getWhatsAppUrl(WHATSAPP_CONFIG.servicesMessage(service.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isPopular
                        ? 'bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg shadow-green-950/30'
                        : 'bg-[#121212] hover:bg-[#25D366] text-stone-200 hover:text-white border border-stone-700 hover:border-transparent'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Agendar {service.title.split(' ')[0]}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* NOTA DE CONFIANÇA INFERIOR */}
        <div className="mt-14 text-center max-w-2xl mx-auto p-4 rounded-xl bg-[#1E1613] border border-stone-800 text-xs sm:text-sm text-stone-300 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="font-semibold text-[#C5A059]">Dúvida sobre qual atendimento escolher?</span>
          <a
            href={getWhatsAppUrl("Olá Andréa, estou com dúvida sobre qual atendimento de numerologia é o mais indicado para mim.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-100 hover:text-[#C5A059] underline underline-offset-4 font-medium inline-flex items-center gap-1"
          >
            <span>Fale com a Andréa para receber uma orientação prévia</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
