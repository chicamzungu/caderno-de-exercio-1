
import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO, PROGRAMS_DATA } from '../constants';
import { AppRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Visor Principal (Hero) - Estilo Morrumbala Elite */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        {/* Imagem de Fundo Cinematográfica */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            alt="Monte Morrumbala Vibe" 
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-950/80 to-transparent"></div>
          {/* Textura sutil de ruído para um ar mais 'premium' */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-in slide-in-from-left duration-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Excelência no Coração de Morrumbala
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 animate-in slide-in-from-bottom-6 duration-700 delay-200">
              Onde o Saber <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-display">Encontra o Futuro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 leading-relaxed max-w-2xl font-light animate-in slide-in-from-bottom-8 duration-700 delay-300">
              Na <span className="text-white font-semibold">{SCHOOL_INFO.name}</span>, transformamos o potencial da nossa terra em liderança global. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-10 duration-700 delay-500">
              <Link 
                to={AppRoute.CONTACT} 
                className="group relative bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-center overflow-hidden transition-all shadow-2xl shadow-blue-900/50"
              >
                <span className="relative z-10">Matrículas Abertas 2025</span>
                <div className="absolute inset-0 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>
              <Link 
                to={AppRoute.ABOUT} 
                className="bg-white/10 backdrop-blur-lg text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Nossa Identidade
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Minimalista */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Valores em Destaque */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-sm group hover:bg-blue-600 transition-all duration-500">
                <span className="group-hover:scale-125 transition-transform duration-500">🏔️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Raízes Fortes</h3>
              <p className="text-gray-500 leading-relaxed">Fundamentados na resiliência e na tradição do povo de Morrumbala.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-sm group hover:bg-emerald-600 transition-all duration-500">
                <span className="group-hover:scale-125 transition-transform duration-500">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Kukula (Crescer)</h3>
              <p className="text-gray-500 leading-relaxed">Estimulamos o florescer de talentos através de inovação constante.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-sm group hover:bg-blue-600 transition-all duration-500">
                <span className="group-hover:scale-125 transition-transform duration-500">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Visão Global</h3>
              <p className="text-gray-500 leading-relaxed">Educação de padrão internacional sem perder a nossa essência local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Biblioteca em Estilo Cartão Premium */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/40 rounded-l-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">O Conhecimento ao <br/>Alcance de <span className="text-emerald-400">Todos</span></h2>
                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                    Nossa Biblioteca Virtual é um compromisso com o desenvolvimento de Morrumbala. Materiais exclusivos, acessíveis em qualquer lugar do distrito.
                </p>
                <Link 
                    to={AppRoute.LIBRARY} 
                    className="inline-flex items-center gap-4 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/40"
                >
                    Aceder à Biblioteca
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </Link>
            </div>
            <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-md p-4 rounded-[3rem] border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop" 
                        alt="Digital Study" 
                        className="rounded-[2.5rem] shadow-2xl"
                    />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
