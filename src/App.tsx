import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinyCalculator } from './components/DestinyCalculator';
import { About } from './components/About';
import { Services } from './components/Services';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-stone-100 font-sans selection:bg-[#C5A059] selection:text-black">
      {/* 1. Header com Logo, Navegação e CTA */}
      <Header />

      <main>
        {/* 2. Hero Section (Above the Fold) */}
        <Hero />

        {/* 3. Calculadora Interativa de Número de Destino (Lead Magnet CRO) */}
        <DestinyCalculator />

        {/* 4. Sobre Mim (Trajetória, Espiritismo, Reiki e Método C.A.L.M.A.) */}
        <About />

        {/* 5. Serviços (Grid de 6 Cards com WhatsApp individualizado) */}
        <Services />

        {/* 6. Comparativo / Diferencial Competitivo (Atendimento Humano vs. Robôs/IA) */}
        <Comparison />

        {/* 7. Depoimentos / Prova Social (5 Estrelas Douradas) */}
        <Testimonials />

        {/* 8. Perguntas Frequentes (FAQ interativo com acordeão) */}
        <FAQ />
      </main>

      {/* 9. Rodapé Institucional Completo */}
      <Footer />

      {/* 10. Botão Flutuante de WhatsApp com Pulso */}
      <FloatingWhatsApp />
    </div>
  );
}
