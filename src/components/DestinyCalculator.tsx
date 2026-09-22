import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageCircle, RefreshCw } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface LifePathMeaning {
  title: string;
  archetype: string;
  description: string;
  challenge: string;
}

const LIFE_PATH_MEANINGS: Record<number, LifePathMeaning> = {
  1: {
    title: 'O Líder e Pioneiro',
    archetype: 'Independência, iniciativa e originalidade',
    description: 'Você veio para abrir caminhos, cultivar a autoconfiança e ser uma referência de coragem e inovação.',
    challenge: 'Aprender a lidar com a impaciência e não agir com autoritarismo.',
  },
  2: {
    title: 'O Pacificador e Diplomata',
    archetype: 'Cooperação, sensibilidade e empatia',
    description: 'Sua essência floresce na união, na conciliação e na capacidade de enxergar as necessidades do outro.',
    challenge: 'Não se anular para agradar e evitar a dependência emocional.',
  },
  3: {
    title: 'O Comunicador e Criativo',
    archetype: 'Expressão, entusiasmo e otimismo',
    description: 'Você carrega o dom da palavra, da arte e da inspiração para alegrar e motivar as pessoas ao seu redor.',
    challenge: 'Focar a energia para não dispersar em múltiplos projetos simultâneos.',
  },
  4: {
    title: 'O Construtor e Organizador',
    archetype: 'Estabilidade, método e perseverança',
    description: 'Sua força reside na disciplina, na construção de bases sólidas e na lealdade em tudo o que realiza.',
    challenge: 'Flexibilizar diante das mudanças imprevistas e evitar a rigidez mental.',
  },
  5: {
    title: 'O Explorador Livre',
    archetype: 'Mudança, adaptabilidade e versatilidade',
    description: 'Você vibra com o dinamismo, as viagens, o novo e a quebra de paradigmas engessados.',
    challenge: 'Cultivar o foco para não abandonar projetos antes da colheita.',
  },
  6: {
    title: 'O Harmonizador e Protetor',
    archetype: 'Amor familiar, responsabilidade e beleza',
    description: 'Sua alma busca a harmonia nos lares, nos grupos e o amparo amoroso a quem precisa de afeto.',
    challenge: 'Não carregar o fardo dos outros e aceitar as imperfeições humanas.',
  },
  7: {
    title: 'O Sábio e Filósofo',
    archetype: 'Profundidade, intuição e busca da verdade',
    description: 'Você é um investigador nato dos mistérios da vida, unindo razão refinada e percepção espiritual.',
    challenge: 'Evitar o isolamento excessivo e a autocrítica exacerbada.',
  },
  8: {
    title: 'O Realizador da Abundância',
    archetype: 'Prosperidade, justiça e poder pessoal',
    description: 'Sua missão envolve a maestria material, a visão executiva e a circulação justa da riqueza.',
    challenge: 'Equilibrar o material e o espiritual sem cair na frieza calculista.',
  },
  9: {
    title: 'O Humanitário Universal',
    archetype: 'Compaixão, sabedoria e desprendimento',
    description: 'Você carrega a sabedoria de todos os números e a vocação de servir a uma causa maior que si mesmo.',
    challenge: 'Aprender a encerrar ciclos dolorosos sem apego ao passado.',
  },
  11: {
    title: 'O Mestre Visionário (Número Mestre)',
    archetype: 'Inspiração espiritual, intuição aguçada e luz',
    description: 'Você é uma ponte entre o sutil e a matéria, com grande potencial para inspirar a evolução alheia.',
    challenge: 'Acalmar a sensibilidade nervosa e confiar na sua intuição superior.',
  },
  22: {
    title: 'O Grande Construtor (Número Mestre)',
    archetype: 'Materialização de grandes sonhos para a humanidade',
    description: 'Você combina o idealismo mais elevado com a capacidade pragmática de construir obras grandiosas.',
    challenge: 'Não se sobrecarregar com a imensidão das responsabilidades que atrai.',
  },
  33: {
    title: 'O Mestre do Amor Universal (Número Mestre)',
    archetype: 'Compaixão incondicional e cura altruísta',
    description: 'A vibração mais elevada do coração humano, dedicada à elevação coletiva e à regeneração.',
    challenge: 'Cuidar do próprio templo físico e emocional enquanto cuida do mundo.',
  },
};

export const DestinyCalculator: React.FC = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [calculatedNumber, setCalculatedNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateLifePath = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (isNaN(d) || isNaN(m) || isNaN(y) || d < 1 || d > 31 || m < 1 || m > 12 || y < 1920 || y > 2026) {
      setError('Por favor, informe uma data válida (Dia entre 1 e 31, Mês entre 1 e 12, Ano de 4 dígitos).');
      return;
    }

    const reduceDigits = (num: number, allowMasters = false): number => {
      let sum = num;
      while (sum > 9) {
        if (allowMasters && (sum === 11 || sum === 22 || sum === 33)) {
          return sum;
        }
        sum = sum
          .toString()
          .split('')
          .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      }
      return sum;
    };

    const daySum = reduceDigits(d, true);
    const monthSum = reduceDigits(m, true);
    const yearSum = reduceDigits(y, true);

    let total = daySum + monthSum + yearSum;
    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
      total = total
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    setCalculatedNumber(total);
  };

  const handleReset = () => {
    setDay('');
    setMonth('');
    setYear('');
    setCalculatedNumber(null);
    setError(null);
  };

  const resultData = calculatedNumber ? LIFE_PATH_MEANINGS[calculatedNumber] || LIFE_PATH_MEANINGS[9] : null;

  return (
    <section className="py-16 bg-[#121212] text-stone-100 border-b border-stone-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-[#1E1613] to-[#121212] border border-[#C5A059]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* LUZ DE FUNDO */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiência Interativa Gratuita</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100">
              Descubra seu <span className="gold-gradient-text">Número de Destino</span>
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              Informe sua data de nascimento para calcular a vibração primordial do seu caminho de vida.
            </p>
          </div>

          {/* FORMULÁRIO DE CÁLCULO */}
          {!calculatedNumber ? (
            <form onSubmit={calculateLifePath} className="max-w-md mx-auto space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">Dia (DD)</label>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    placeholder="Ex: 15"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    required
                    className="w-full bg-[#121212] border border-stone-700 rounded-xl px-3 py-2.5 text-center text-stone-100 text-sm focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">Mês (MM)</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Ex: 08"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                    className="w-full bg-[#121212] border border-stone-700 rounded-xl px-3 py-2.5 text-center text-stone-100 text-sm focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-400 mb-1">Ano (AAAA)</label>
                  <input
                    type="number"
                    min="1920"
                    max="2026"
                    placeholder="Ex: 1988"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                    className="w-full bg-[#121212] border border-stone-700 rounded-xl px-3 py-2.5 text-center text-stone-100 text-sm focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-red-400 text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C5A059] hover:bg-[#ECC880] text-black font-bold text-sm transition-all duration-200 shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2"
              >
                <span>Calcular Minha Vibração Primordial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-stone-500 text-center mt-2">
                *Cálculo pitagórico-cabalístico baseado na data de nascimento.
              </p>
            </form>
          ) : (
            /* RESULTADO COM CRO INTELIGENTE */
            <div className="max-w-xl mx-auto text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="inline-flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-[#121212] border-2 border-[#C5A059] shadow-xl mx-auto">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C5A059]">
                  {calculatedNumber}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-stone-400">Destino</span>
              </div>

              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                  {resultData?.title}
                </h4>
                <p className="text-xs text-[#C5A059] font-medium mt-0.5">
                  {resultData?.archetype}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-stone-800 text-left space-y-2 text-xs sm:text-sm text-stone-300">
                <p><strong>Potência:</strong> {resultData?.description}</p>
                <p><strong>Desafio de Evolução:</strong> {resultData?.challenge}</p>
              </div>

              {/* CHAMADA CRO EXPLICANDO POR QUE O MAPA COMPLETO É IMPRESCINDÍVEL */}
              <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs text-stone-300 leading-relaxed text-left">
                <strong className="text-[#C5A059] block mb-1">
                  Atenção: O Número de Destino representa apenas 5% da sua matriz numerológica!
                </strong>
                No seu Mapa Completo com Andréa Salgueiro, calculamos sua <em>Missão</em>, seu <em>Desejo Íntimo de Alma</em>, sua <em>Expressão Pública</em>, suas <em>Dívidas Cármicas</em> e seu <em>Ano Pessoal Atual</em> com orientações práticas para sua tomada de decisão.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(`Olá Andréa! Calculei meu Número de Destino (${calculatedNumber}) no site e gostaria de agendar meu Mapa Numerológico Pessoal Completo para aprofundar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-green-900/30 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Aprofundar no Mapa Completo</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-[#C5A059] transition-colors py-2 px-3"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Calcular outra data</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
