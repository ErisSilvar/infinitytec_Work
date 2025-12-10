import React from 'react';
import { ArrowRight, Cpu, Globe, ShieldCheck } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Soluções Tecnológicas <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse">
            Infinitas
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Da montagem do seu hardware ao desenvolvimento da sua presença digital. 
          A <strong>Infinity Tech</strong> conecta você ao futuro com serviços de backup, manutenção e desenvolvimento web.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={scrollToContact}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior: 'smooth'})}
            className="px-8 py-3 text-base font-medium text-slate-300 border border-slate-700 rounded-full hover:text-white hover:border-cyan-400 transition-all"
          >
            Nossos Serviços
          </button>
        </div>

        {/* Floating Icons Visualization */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-70">
          <div className="flex flex-col items-center animate-bounce duration-[3000ms]">
            <Globe className="w-12 h-12 text-purple-400 mb-2" />
            <span className="text-sm text-slate-500">Web</span>
          </div>
          <div className="flex flex-col items-center animate-bounce duration-[3000ms] delay-150">
            <Cpu className="w-12 h-12 text-cyan-400 mb-2" />
            <span className="text-sm text-slate-500">Hardware</span>
          </div>
          <div className="flex flex-col items-center animate-bounce duration-[3000ms] delay-300">
            <ShieldCheck className="w-12 h-12 text-emerald-400 mb-2" />
            <span className="text-sm text-slate-500">Segurança</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
