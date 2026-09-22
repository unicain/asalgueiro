import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Compass, 
  CheckCircle2, 
  MessageCircle, 
  Award,
  BookOpen,
  Feather
} from 'lucide-react';
import { BRAND_ASSETS, getWhatsAppUrl, WHATSAPP_CONFIG } from '../data/config';

export const About: React.FC = () => {
  const pillars = [
    {
      letter: 'C',
      title: 'Clareza',
      description: 'Iluminar os números que regem seu destino para desmistificar dúvidas e angústias existenciais.',
    },
    {
      letter: 'A',
      title: 'Acolhimento',
      description: 'Uma escuta sincera, sem julgamentos, onde sua dor e sua história são honradas com amor.',
    },
    {
      letter: 'L',
      title: 'Liberação',
      description: 'Corte de padrões cármicos e crenças herdadas que impedem a sua prosperidade real.',
    },
    {
      letter: 'M',
      title: 'Movimento',
      description: 'Definição de passos práticos alinhados ao seu Ano Pessoal. Saber a hora certa de agir.',
    },
    {
      letter: 'A',
      title: 'Alinhamento',
      description: 'Harmonia entre o que sua alma deseja e o que suas atitudes diárias expressam no mundo.',
    },
  ];

  return (
    <section 
      id="sobre"
      className="py-20 lg:py-28 bg-[#1E1613] text-stone-100 relative overflow-hidden border-y border-[#C5A059]/20"
    >
      {/* Luz ambiente suave */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#121212]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>Trajetória &amp; Vocação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-stone-100">
            Conheça <span className="gold-gradient-text">Andréa Salgueiro</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Da intensidade do mercado corporativo e da publicidade à consagração como terapeuta holística,
            guiando pessoas a se reencontrarem com a verdade da sua alma.
          </p>
        </div>

        {/* DESIGN EM 2 COLUNAS NO DESKTOP COM BORDAS DOURADAS SUTIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* COLUNA ESQUERDA: FOTOS E ELEMENTOS INSTITUCIONAIS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl p-2 bg-[#121212] border border-[#C5A059]/40 shadow-2xl">
              
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-stone-900 group">
                <picture>
                  <source srcSet={BRAND_ASSETS.andreaAboutPhoto} type="image/webp" />
                  <img
                    src={BRAND_ASSETS.andreaAboutPhotoFallback}
                    alt="Andréa Salgueiro - Mentora e Numeróloga Terapêutica"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent opacity-90" />
                
                {/* Cartão de citação sobre a foto */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1E1613]/90 backdrop-blur-md border border-[#C5A059]/40">
                  <p className="font-serif italic text-sm text-stone-200 leading-relaxed">
                    &ldquo;Os números não determinam um destino imutável; eles revelam o mapa das suas potências para que você exerça seu livre-arbítrio com sabedoria.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                    — Andréa Salgueiro
                  </p>
                </div>
              </div>

              {/* Borda dourada de destaque no canto */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[#C5A059] rounded-br-2xl pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[#C5A059] rounded-tl-2xl pointer-events-none" />
            </div>

            {/* BOX DE FORMAÇÕES E PILARES */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#121212] border border-stone-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-200">Mestre em Reiki</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Linhagem Usui Tradicional</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121212] border border-stone-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#C5A059]/15 text-[#C5A059] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-200">Vivência Espírita</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">+10 anos de estudo doutrinário</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: HISTÓRIA, TRANSIÇÃO E O MÉTODO C.A.L.M.A. */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                Por muitos anos, construí minha carreira no dinâmico universo da <strong className="text-stone-100 font-semibold">Publicidade e Comunicação</strong>. Eu compreendia profundamente o comportamento humano, as narrativas e as aspirações sociais. No entanto, faltava a dimensão da alma — a resposta para o motivo pelo qual tantas pessoas bem-sucedidas continuavam sentindo um vazio interior e uma sensação constante de desalinhamento.
              </p>

              <p>
                A busca por respostas verdadeiras me conduziu à espiritualidade séria. Ao longo de mais de uma década dedicada ao <strong className="text-[#C5A059] font-medium">Espiritismo</strong>, às formações em <strong className="text-[#C5A059] font-medium">Reiki Usui</strong>, <strong className="text-[#C5A059] font-medium">SVH (Serenity Vibration Healing)</strong> e à profundidade da <strong className="text-[#C5A059] font-medium">Numerologia Cabalística e Vibracional</strong>, percebi que os números são a chave mestra que decodifica as leis cósmicas individuais.
              </p>

              <p>
                Hoje, atendo presencialmente em São Paulo e online consulentes espalhados pelo Brasil e pelo exterior. Minha missão não é adivinhar o futuro por curiosidade, mas proporcionar uma <strong className="text-stone-100 font-semibold">bússola terapêutica real</strong> para que você faça escolhas conscientes nos seus relacionamentos, negócios e vida pessoal.
              </p>
            </div>

            {/* DESTAQUE: O MÉTODO C.A.L.M.A. */}
            <div className="pt-4">
              <div className="rounded-2xl bg-[#121212] border border-[#C5A059]/30 p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#C5A059]" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100">
                    O Exclusivo Método <span className="gold-gradient-text tracking-wider">C.A.L.M.A.</span>
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-stone-400 mb-4">
                  Metodologia proprietária criada por Andréa Salgueiro para transformar a análise dos números em paz de espírito e atitude prática no cotidiano:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {pillars.map((pillar) => (
                    <div 
                      key={pillar.title} 
                      className="p-3 rounded-xl bg-[#1E1613] border border-stone-800 hover:border-[#C5A059]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#C5A059]/20 text-[#C5A059] font-serif font-bold text-sm flex items-center justify-center mb-2">
                        {pillar.letter}
                      </div>
                      <h4 className="text-xs font-bold text-stone-100">{pillar.title}</h4>
                      <p className="text-[11px] text-stone-400 mt-1 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA DIRETO SOBRE */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={getWhatsAppUrl("Olá Andréa, li sobre a sua trajetória e o Método C.A.L.M.A. e gostaria de conversar sobre meu momento de vida.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-green-950/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar Diretamente com Andréa</span>
              </a>

              <span className="text-xs text-stone-400">
                Atendimento humanizado • Agendamento com reserva prévia
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
