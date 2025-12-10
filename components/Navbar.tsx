import React, { useState } from 'react';
import { Menu, X, Infinity } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Início', id: SectionId.HOME },
    { label: 'Serviços', id: SectionId.SERVICES },
    { label: 'Sobre', id: SectionId.ABOUT },
    { label: 'Contato', id: SectionId.CONTACT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className="text-cyan-400 mr-2">
              <Infinity size={32} strokeWidth={2.5} />
            </div>
            <span className="brand-font text-xl font-bold text-white tracking-wider">
              INFINITY <span className="text-cyan-400">TECH</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]"
              >
                Orçamento
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
