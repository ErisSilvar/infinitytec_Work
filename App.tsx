import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* About Section Placeholder - usually integrated into Hero or separate */}
        <section id="about" className="py-20 bg-slate-950 border-y border-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold text-white mb-6">Sobre a Infinity Tech</h2>
             <p className="text-slate-400 text-lg leading-relaxed">
               Nascemos da paixão por tecnologia e da necessidade de soluções integradas. 
               Acreditamos que a tecnologia deve ser infinita em possibilidades, mas simples em sua aplicação.
               Nossa missão é descomplicar o mundo digital para você e sua empresa.
             </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
