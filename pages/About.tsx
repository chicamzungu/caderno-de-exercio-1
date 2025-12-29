
import React from 'react';
import { SCHOOL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Header Estilo Elite */}
      <div className="bg-blue-950 py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Nossa Identidade</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display">Elite no Centro da Zambézia</h1>
          <p className="text-blue-200 text-xl leading-relaxed font-light">Fundada em Morrumbala para elevar o potencial de Moçambique ao nível global.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-50 rounded-full -z-10 animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-10 leading-tight">Da Vila de Morrumbala <br/>para o Mundo</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              A {SCHOOL_INFO.name} é mais do que uma instituição de ensino; é um farol de esperança e inovação na região do Baixo Zambeze. Localizada estrategicamente para servir o povo resiliente de Morrumbala, nossa escola combina a tranquilidade das nossas paisagens com a agilidade da educação moderna.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Acreditamos que a próxima geração de cientistas, artistas e líderes moçambicanos está aqui, nas rotas que ligam Morrumbala ao Malawi e ao Oceano Índico.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-600 rounded-[4rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-3xl">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" alt="Campus Visão Elite" className="w-full h-full object-cover aspect-square" />
            </div>
          </div>
        </div>

        {/* Missão e Valores Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-blue-50 rounded-[4rem] p-16 md:p-20 border border-blue-100 shadow-inner relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <h2 className="text-3xl font-bold text-blue-950 mb-10 relative">Nossa Missão</h2>
            <p className="text-blue-950/80 text-2xl font-display italic leading-relaxed relative">
              "{SCHOOL_INFO.mission}"
            </p>
          </div>
          <div className="bg-blue-950 rounded-[4rem] p-16 md:p-20 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-10 relative">Valores Kukula</h2>
            <ul className="space-y-6 relative">
              {SCHOOL_INFO.values.map((value, idx) => (
                <li key={idx} className="flex items-center text-blue-100 text-lg">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-6 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
