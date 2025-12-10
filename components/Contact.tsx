import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 relative bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos <span className="text-purple-400">Conectar</span>?
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Tem um projeto em mente ou seu computador precisa de um upgrade? 
              Entre em contato conosco para um orçamento sem compromisso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Telefone / WhatsApp</h3>
                  <p className="text-slate-400">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-slate-400">contato@infinitytech.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Localização</h3>
                  <p className="text-slate-400">São Paulo, SP - Atendimento Remoto e Presencial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Serviço de Interesse</label>
                <select 
                  id="service"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option>Desenvolvimento Web</option>
                  <option>Montagem de PC</option>
                  <option>Manutenção / Reparo</option>
                  <option>Backup / Nuvem</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                <textarea 
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center shadow-lg disabled:opacity-70"
              >
                {formStatus === 'idle' && (
                  <>Enviar Mensagem <Send className="ml-2 w-5 h-5" /></>
                )}
                {formStatus === 'sending' && 'Enviando...'}
                {formStatus === 'sent' && 'Mensagem Enviada!'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
