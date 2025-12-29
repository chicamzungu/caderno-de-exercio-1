
import React from 'react';
import { SCHOOL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Elegant Header */}
      <div className="bg-blue-900 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nossa Identidade</h1>
          <p className="text-blue-200 text-lg leading-relaxed">Dedicados à excelência educativa no Distrito de Morrumbala, Província da Zambézia.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10 animate-pulse"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Raízes em Morrumbala, <br/>Visão no Mundo</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              A {SCHOOL_INFO.name} nasceu com uma missão clara: provar que a educação de padrão internacional é possível aqui em Morrumbala. Acreditamos que o talento local, quando bem lapidado, pode brilhar em qualquer lugar do globo.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Desde a nossa fundação, investimos em tecnologia, formação de professores e infraestrutura de ponta, tornando-nos um farol de conhecimento na Zambézia.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform rotate-3 group-hover:rotate-1 transition-transform"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Campus Visão" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-[3rem] p-12 md:p-16 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Nossa Missão</h2>
            <p className="text-blue-900/80 text-xl font-medium italic leading-relaxed">
              "{SCHOOL_INFO.mission}"
            </p>
          </div>
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-16 text-white">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-900/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">Nossos Valores</h2>
            <ul className="space-y-4">
              {SCHOOL_INFO.values.map((value, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></span>
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
