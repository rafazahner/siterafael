
import React from 'react';
import { ICONS } from '../constants';

interface ServicesProps {
  services?: Array<{ title: string; description: string }>;
  loading: boolean;
}

const Services: React.FC<ServicesProps> = ({ services, loading }) => {
  const defaultServices = [
    { title: "Automação de CRM", description: "Integramos seu funil de vendas para que nenhum lead seja esquecido, automatizando follow-ups e registros." },
    { title: "Chatbots Inteligentes", description: "Atendimento 24/7 com IA que qualifica clientes e agenda reuniões automaticamente no seu calendário." },
    { title: "Fluxos de Trabalho", description: "Conectamos suas ferramentas favoritas (Sheets, Slack, Email) para eliminar tarefas manuais repetitivas." }
  ];

  const currentServices = services || defaultServices;

  return (
    <section id="services" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Soluções de <span className="text-blue-500">Automação</span></h2>
          <p className="text-slate-400">Transformamos processos manuais lentos em fluxos digitais de alta performance.</p>
        </div>
        <div className="hidden md:block">
          <div className="w-32 h-[1px] bg-slate-800"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="h-64 glass-card rounded-3xl animate-pulse"></div>
          ))
        ) : (
          currentServices.map((service, idx) => (
            <div key={idx} className="group glass-card p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {idx === 0 ? <ICONS.Zap /> : idx === 1 ? <ICONS.Layers /> : <ICONS.Globe />}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <button className="text-blue-500 font-bold text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Saiba mais</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Services;
