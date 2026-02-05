
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">Z</div>
              <span className="font-bold text-white text-sm tracking-widest">ZAHNER SOLUTIONS</span>
            </div>
            <p className="text-slate-500 text-xs max-w-xs">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
              <br />CNPJ: {COMPANY_INFO.cnpj}
            </p>
          </div>
          
          <div className="flex space-x-8 text-xs font-semibold text-slate-400">
            <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
            <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
            <a href="#" className="hover:text-white transition-colors">LGPD</a>
          </div>

          <div className="flex space-x-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold">IN</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
              <span className="text-[10px] font-bold">X</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
