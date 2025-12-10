import React from 'react';
import { Infinity, Instagram, Linkedin, Facebook } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Infinity className="text-cyan-400 mr-2" size={24} />
              <span className="brand-font text-xl font-bold text-white">
                INFINITY <span className="text-cyan-400">TECH</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Transformando ideias em realidade digital e garantindo que seu hardware nunca pare. 
              Sua parceira tecnológica definitiva.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Montagem de PC</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Backup em Nuvem</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Suporte TI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-900 p-2 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-900 p-2 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-900 p-2 rounded-full text-slate-400 hover:text-white hover:bg-blue-500 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Infinity Tech. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Feito com <span className="text-red-500 mx-1">❤</span> e React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
