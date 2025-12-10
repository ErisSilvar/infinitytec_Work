import React from 'react';
import { Monitor, Server, Wrench, Code, Database, Shield } from 'lucide-react';
import { SectionId, ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Desenvolvimento Web',
      description: 'Sites institucionais, e-commerce e aplicações web modernas e responsivas utilizando React e tecnologias de ponta.',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
    },
    {
      id: '2',
      title: 'Montagem e Hardware',
      description: 'Consultoria para setup, montagem de computadores gamer e workstation profissionais com cable management impecável.',
      icon: <Monitor className="w-8 h-8 text-purple-400" />,
    },
    {
      id: '3',
      title: 'Manutenção',
      description: 'Limpeza, troca de pasta térmica, upgrades e reparos em desktops e notebooks para garantir performance máxima.',
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
    },
    {
      id: '4',
      title: 'Backup e Nuvem',
      description: 'Soluções robustas de backup local e em nuvem para proteger seus dados críticos contra perdas.',
      icon: <Database className="w-8 h-8 text-blue-400" />,
    },
    {
      id: '5',
      title: 'Infraestrutura de Rede',
      description: 'Configuração de redes domésticas e empresariais, roteadores e servidores para conexão estável.',
      icon: <Server className="w-8 h-8 text-emerald-400" />,
    },
    {
      id: '6',
      title: 'Segurança Digital',
      description: 'Remoção de vírus, configuração de firewalls e consultoria em segurança da informação.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
    },
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-cyan-400">Serviços</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Cobertura completa para todas as suas necessidades tecnológicas. 
            Do software ao hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
