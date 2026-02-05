
import React from 'react';
import { COMPANY_INFO, ICONS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="glass-card rounded-[3rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 md:p-16 bg-gradient-to-br from-blue-600 to-indigo-700">
          <h2 className="text-4xl font-bold mb-6 text-white">Vamos conversar?</h2>
          <p className="text-blue-100 mb-12 max-w-md text-lg">
            Seja para uma parceria, orçamento ou dúvida, estamos prontos para atender você com a máxima agilidade.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-white"><ICONS.Mail /></div>
              <div>
                <div className="text-xs text-blue-200 font-bold uppercase tracking-wider">E-mail Corporativo</div>
                <div className="text-white font-medium">{COMPANY_INFO.email}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-white"><ICONS.Phone /></div>
              <div>
                <div className="text-xs text-blue-200 font-bold uppercase tracking-wider">Atendimento Direto</div>
                <div className="text-white font-medium">{COMPANY_INFO.phone}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-white"><ICONS.Shield /></div>
              <div>
                <div className="text-xs text-blue-200 font-bold uppercase tracking-wider">CNPJ Registrado</div>
                <div className="text-white font-medium">{COMPANY_INFO.cnpj}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-slate-900/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Nome</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Empresa</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none transition-all" placeholder="Nome da empresa" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Mensagem</label>
              <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-blue-100 transition-colors shadow-xl">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
