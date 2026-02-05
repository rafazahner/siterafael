
import React from 'react';

interface HeroProps {
  name: string;
  mission: string;
  loading: boolean;
}

const Hero: React.FC<HeroProps> = ({ name, mission, loading }) => {
  return (
    <section className="flex flex-col items-center text-center max-w-4xl mx-auto pt-10">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold mb-8 uppercase tracking-widest animate-pulse">
        <span>Especialista em Automação</span>
        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
        <span>Eficiência Operacional</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight">
        Escalando sua empresa com <span className="gradient-text">Automação</span> <span className="text-white">Inteligente.</span>
      </h1>
      
      <div className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-slate-800 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4 mx-auto"></div>
          </div>
        ) : (
          mission
        )}
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 inline-block">
          Ver Automações
        </a>
        <a href="#contact" className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all border border-white/10 inline-block">
          Consultoria Grátis
        </a>
      </div>

      <div className="mt-20 flex items-center justify-center space-x-12 opacity-50 grayscale hover:grayscale-0 transition-all text-sm font-bold tracking-widest text-slate-500">
        <span>INOVAÇÃO</span>
        <span>AGILIDADE</span>
        <span>RESULTADOS</span>
      </div>
    </section>
  );
};

export default Hero;
