/**
 * CONFIGURAÇÃO GERAL DA MARCA E CONTATOS DE ALTA CONVERSÃO
 * Andréa Salgueiro - Numerologia Terapêutica & Terapias Energéticas
 */

// ============================================================================
// 1. CONFIGURE AQUI: NÚMERO DO WHATSAPP E MENSAGENS PADRÃO
// Número oficial de Andréa Salgueiro: (11) 94462-8445
// ============================================================================
export const WHATSAPP_CONFIG = {
  phoneNumber: "5511944628445", // Número de WhatsApp oficial: (11) 94462-8445
  displayPhone: "(11) 94462-8445",
  defaultMessage: "Olá Andréa, gostaria de agendar uma consulta de Numerologia Terapêutica.",
  servicesMessage: (serviceName: string) => 
    `Olá Andréa! Conheci seu trabalho pelo site e gostaria de saber mais detalhes e agendar: *${serviceName}*. Como podemos prosseguir?`,
};

// Gera o link direto formatado para a API do WhatsApp
export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${message}`;
};

// ============================================================================
// 2. CONFIGURE AQUI: FOTOS, AVATAR E IMAGENS INSTITUCIONAIS
// Substitua as URLs abaixo pelas fotos profissionais de Andréa Salgueiro.
// ============================================================================
export const BRAND_ASSETS = {
  // Foto oficial da Andréa Salgueiro no Hero (otimizada WebP/JPG - caminhos relativos para GitHub Pages)
  andreaPhoto: "./assets/andrea-hero.webp",
  andreaPhotoFallback: "./assets/andrea-hero.jpg",
  // Foto artística / transcendental de Andréa Salgueiro na seção Sobre (WebP/JPG)
  andreaAboutPhoto: "./assets/andrea-about.webp",
  andreaAboutPhotoFallback: "./assets/andrea-about.jpg",
  // Foto ambiente / espaço terapêutico em SP
  consultoryPhoto: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop",
  // Textura sagrada sutil
  sacredGeometry: "https://images.unsplash.com/photo-1507499739999-097706ad8914?q=80&w=1000&auto=format&fit=crop",
};

// ============================================================================
// 3. DADOS DE SERVIÇOS (6 CARDS SOLICITADOS)
// ============================================================================
export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  benefits: string[];
  duration: string;
  format: string;
  iconName: string;
  popular?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mapa-pessoal",
    title: "Mapa Numerológico Pessoal",
    subtitle: "O manual profundo da sua alma e propósito",
    badge: "Mais Procurado",
    popular: true,
    description:
      "Uma leitura completa e individualizada que analisa seus números de Destino, Missão, Alma, Personalidade e Ano Pessoal. Revela seus dons natos, desafios cármicos e ciclos de vida para tomar decisões com segurança.",
    benefits: [
      "Identificação do seu propósito e missão de vida",
      "Compreensão de bloqueios recorrentes e ciclos repetitivos",
      "Previsões e tendências para os seus próximos anos pessoais",
      "Consulta ao vivo (online ou SP) + gravação em áudio + PDF completo",
    ],
    duration: "1h40 a 2h de imersão",
    format: "Presencial em SP ou Online via Zoom / Meet",
    iconName: "Compass",
  },
  {
    id: "sinastria-casal",
    title: "Sinastria de Casal & Harmonização",
    subtitle: "Alinhamento vibracional a dois e clareza nos relacionamentos",
    badge: "Relacionamentos",
    description:
      "O cruzamento dos mapas do casal para compreender afinidades, potenciais desafios de convivência, linguagens de amor e acordos cármicos. Promove empatia mútua sem julgamentos.",
    benefits: [
      "Mapeamento da dinâmica e desafios ocultos da relação",
      "Entendimento das necessidades emocionais de cada parceiro",
      "Orientações práticas para períodos de crise ou transição",
      "Harmonização energética para fortalecer o vínculo",
    ],
    duration: "2 horas de sessão",
    format: "Individual ou com o casal (Presencial ou Online)",
    iconName: "Heart",
  },
  {
    id: "numerologia-empresarial",
    title: "Numerologia Empresarial & Marcas",
    subtitle: "Prosperidade estratégica para sócios, empresas e lançamentos",
    badge: "Negócios & Carreira",
    description:
      "Análise vibracional do nome fantasia, razão social, data de fundação e compatibilidade entre sócios. Encontre o momento astrológico/numerológico perfeito para aberturas e novos projetos.",
    benefits: [
      "Ajuste da vibração do nome da marca para atrair o público ideal",
      "Harmonia societária e identificação de pontos de atrito",
      "Escolha de datas favoráveis para lançamentos e contratos",
      "Diagnóstico das energias do ano comercial da empresa",
    ],
    duration: "2 sessões estratégicas + Dossiê",
    format: "Online ou Presencial corporativo em SP",
    iconName: "Briefcase",
  },
  {
    id: "nome-bebe",
    title: "Estudo Numerológico de Nome para Bebê",
    subtitle: "O primeiro e maior presente energético para a vida do seu filho",
    badge: "Família & Gestantes",
    description:
      "Estudo detalhado das opções de nomes e sobrenomes para harmonizar a vibração que o bebê carregará por toda a vida, minimizando dívidas cármicas e potencializando talentos.",
    benefits: [
      "Combinação harmônica com os sobrenomes da família",
      "Análise de ausência de números desafiadores no nome",
      "Equilíbrio entre a expressão social e o desejo íntimo da alma",
      "Relatório com as melhores combinações e significados",
    ],
    duration: "Estudo prévio + Reunião de 1h com os pais",
    format: "Online ou Presencial em SP",
    iconName: "Baby",
  },
  {
    id: "mentoria-calma",
    title: "Mentoria & Método C.A.L.M.A.",
    subtitle: "Clareza, Acolhimento, Liberação, Movimento e Alinhamento",
    badge: "Desenvolvimento Contínuo",
    description:
      "Programa terapêutico autoral de Andréa Salgueiro para quem busca transição de carreira, superação de crises emocionais e reencontro consigo mesmo com acompanhamento próximo.",
    benefits: [
      "Aplicação sequencial do método estruturado de autoconhecimento",
      "Encontros quinzenais individualizados com exercícios práticos",
      "Suporte direto no WhatsApp para tirar dúvidas entre as sessões",
      "Integração entre espiritualidade prática e metas reais do cotidiano",
    ],
    duration: "Programa de 4 a 8 sessões",
    format: "Sessões semanais ou quinzenais",
    iconName: "Sparkles",
  },
  {
    id: "mesa-radionica",
    title: "Mesa Radiónica / Quântica & SVH",
    subtitle: "Limpeza energética profunda, desbloqueio e harmonização dos chacras",
    badge: "Terapia Vibracional",
    description:
      "Instrumento de cura vibracional que atua no campo quântico para despolarizar crenças limitantes, harmonizar frequências e transmutar energias densas que travam a prosperidade e a saúde emocional.",
    benefits: [
      "Desbloqueio de nós energéticos em relacionamentos e finanças",
      "Alinhamento dos corpos sutis e dos 7 centros de força (chacras)",
      "Corte de cordões energéticos nocivos e ressonâncias pesadas",
      "Relatório com as frequências tratadas e orientações pós-mesa",
    ],
    duration: "Envio de relatório + Áudio explicativo",
    format: "Atendimento à distância com ancoramento em tempo real",
    iconName: "ShieldCheck",
  },
];

// ============================================================================
// 4. COMPARATIVO (DIFERENCIAL COMPETITIVO)
// ============================================================================
export const COMPARISON_POINTS = [
  {
    feature: "Profundidade & Empatia",
    andrea: "Atendimento 100% humanizado, escuta terapêutica acolhedora e sensibilidade espiritual desenvolvida há mais de uma década.",
    robots: "Textos frios gerados por algoritmos genéricos, cópias rasas sem nenhuma conexão com sua dor real.",
  },
  {
    feature: "Interpretação do Histórico",
    andrea: "Conecta os números com suas vivências reais, infância, desafios familiares e momentos de virada pessoal.",
    robots: "Listas de adjetivos genéricos ('você é criativo mas às vezes teimoso') que cabem em qualquer pessoa.",
  },
  {
    feature: "Plano de Ação Prático",
    andrea: "Orientações claras para agir no seu ano pessoal: quando mudar de emprego, quando desacelerar, como lidar com crises.",
    robots: "Nenhum direcionamento de vida; apenas descrições teóricas que deixam você com as mesmas dúvidas.",
  },
  {
    feature: "Tira-Dúvidas e Suporte",
    andrea: "Espaço aberto para fazer perguntas durante a sessão ao vivo e suporte pós-consulta no WhatsApp.",
    robots: "Nenhum canal de suporte; o arquivo em PDF chega por e-mail e não há com quem conversar.",
  },
  {
    feature: "Visão Holística Integrada",
    andrea: "Une Numerologia Cabalística com vivência no Espiritismo, Reiki, Radiônica e o exclusivo Método C.A.L.M.A.",
    robots: "Sistemas fechados sem nenhuma base terapêutica ou energética verdadeira.",
  },
];

// ============================================================================
// 5. DEPOIMENTOS / PROVA SOCIAL
// ============================================================================
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Mariana Albuquerque",
    role: "Arquiteta e Empreendedora",
    location: "São Paulo - SP (Atendimento Presencial)",
    quote:
      "A consulta com a Andréa foi um divisor de águas absoluto na minha vida. Eu estava em uma encruzilhada profissional angustiante. Ela explicou com exatidão meu momento de Ano Pessoal 9 e me deu a coragem que faltava para encerrar um ciclo e fundar meu próprio escritório. A energia acolhedora do espaço dela em SP é inesquecível!",
    stars: 5,
    highlight: "Mudança de Carreira & Clareza",
  },
  {
    id: 2,
    name: "Carlos Eduardo & Beatriz",
    role: "Casados há 8 anos",
    location: "Campinas - SP (Online via Zoom)",
    quote:
      "Fizemos a Sinastria de Casal e parecia que a Andréa nos conhecia há 20 anos. Entendemos por que certos atritos se repetiam e aprendemos a respeitar o tempo de cada um. Salvou nosso casamento de um desgaste desnecessário. Vale cada minuto!",
    stars: 5,
    highlight: "Harmonização de Casal",
  },
  {
    id: 3,
    name: "Dra. Renata Vasconcellos",
    role: "Médica Psiquiatra",
    location: "Belo Horizonte - MG (Online)",
    quote:
      "Como profissional da saúde, sou naturalmente criteriosa. A seriedade, a precisão e a elegância da Andréa Salgueiro me impressionaram. Não é misticismo vazio; é autoconhecimento rigoroso e terapêutico de verdade.",
    stars: 5,
    highlight: "Precisão & Seriedade",
  },
  {
    id: 4,
    name: "Felipe Siqueira",
    role: "Diretor Comercial",
    location: "São Paulo - SP (Presencial)",
    quote:
      "Fiz a Numerologia Empresarial antes de assinar o novo contrato social e alterar o nome da nossa startup. O alinhamento dos sócios fez a empresa decolar no primeiro semestre. A Andréa tem uma bagagem de comunicação e negócios que faz toda a diferença.",
    stars: 5,
    highlight: "Numerologia Empresarial",
  },
];

// ============================================================================
// 6. PERGUNTAS FREQUENTES (FAQ)
// ============================================================================
export const FAQ_DATA = [
  {
    question: "Quanto tempo dura a consulta e como ela é conduzida?",
    answer:
      "A consulta do Mapa Numerológico Pessoal tem duração média de 1h40 a 2 horas. É um encontro individual, exclusivo e sem pressa. Durante a sessão, Andréa analisa detalhadamente todas as vibrações do seu mapa, responde a todas as suas dúvidas e traça um plano de ação para os seus próximos ciclos.",
  },
  {
    question: "Qual a diferença entre o atendimento Online e o Presencial em São Paulo?",
    answer:
      "O conteúdo, a profundidade e a precisão dos cálculos são rigorosamente idênticos. No atendimento presencial (em consultório harmonizado em São Paulo/SP), você desfruta de um ambiente sensorial preparado especialmente para acolhimento e conexão. No atendimento online (via Zoom ou Google Meet com gravação inclusa), você participa no conforto da sua casa de qualquer lugar do Brasil ou exterior.",
  },
  {
    question: "Quais informações são necessárias para o cálculo do Mapa?",
    answer:
      "Precisamos apenas do seu nome de registro de nascimento completo (exatamente como consta na certidão original de nascimento, incluindo sobrenomes anteriores a casamentos) e da sua data de nascimento. Caso tenha alterado o nome por casamento ou adote um nome social/artístico, também analisamos essa assinatura.",
  },
  {
    question: "Como funciona a entrega do material após a consulta?",
    answer:
      "Você recebe a gravação completa da sessão em áudio de alta qualidade (para ouvir e revisitar sempre que quiser ao longo dos anos) além de um dossiê/mapa em PDF exclusivo e personalizado com todos os seus números, arquétipos e ciclos de vida documentados.",
  },
  {
    question: "Quais são as formas de agendamento e pagamento?",
    answer:
      "O agendamento é feito de forma personalizada diretamente pelo WhatsApp para alinharmos a melhor data na agenda. O pagamento pode ser realizado via PIX ou cartão de crédito parcelado, com confirmação prévia para reserva de horário.",
  },
  {
    question: "A Numerologia Terapêutica tem ligação com alguma religião específica?",
    answer:
      "Não. A Numerologia é uma ciência milenar e vibracional de autoconhecimento fundamentada em leis arquetípicas e energéticas. Pessoas de todas as fés, crenças ou até mesmo sem religião realizam o mapa para compreenderem suas dinâmicas psicológicas e seus ciclos de vida.",
  },
];
