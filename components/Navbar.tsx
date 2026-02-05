
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 my-4 rounded-2xl border border-white/10 shadow-2xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
            Z
          </div>
          <span className="font-bold tracking-tight text-lg text-white">
            ZAHNER SOLUTIONS
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="#services" className="hover:text-white transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          <a 
            href={`https://wa.me/55${COMPANY_INFO.phone.replace(/\D/g, '')}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-all font-semibold"
          >
            Falar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
