
import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO, PROGRAMS_DATA } from '../constants';
import { AppRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Visor Principal (Hero) - Elite Morrumbala Edition */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        {/* Background Cinematográfico */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" 
            alt="Monte Morrumbala Vibe" 
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-[15000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-950/70 to-transparent"></div>
          {/* Textura sutil de luxo */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-4xl p-8 md:p-12 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-[0.25em] mb-8 animate-in slide-in-from-left duration-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Excelência no Coração da Zambézia
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] mb-8 animate-in slide-in-from-bottom-6 duration-700 delay-200">
              Kukula Kwa <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-300 font-display italic">Morrumbala</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-100/90 mb-10 leading-relaxed max-w-2xl font-light animate-in slide-in-from-bottom-8 duration-700 delay-300">
              A força do nosso solo, a visão do nosso futuro. Educação de padrão global para os líderes de amanhã em Moçambique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-10 duration-700 delay-500">
              <Link 
                to={AppRoute.CONTACT} 
                className="group relative bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-center overflow-hidden transition-all shadow-2xl shadow-emerald-900/40"
              >
                <span className="relative z-10">Matrículas 2025</span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>
              <Link 
                to={AppRoute.LIBRARY} 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-3"
              >
                Biblioteca Virtual
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stat Badges */}
        <div className="absolute bottom-12 right-12 hidden xl:flex flex-col gap-4 animate-in slide-in-from-right duration-1000">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex items-center gap-5 shadow-2xl">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-2xl">🏔️</div>
                <div>
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Localização</div>
                    <div className="text-sm font-semibold">Distrito de Morrumbala</div>
                </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex items-center gap-5 shadow-2xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-2xl">🌟</div>
                <div>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Ensino</div>
                    <div className="text-sm font-semibold">Privado de Excelência</div>
                </div>
            </div>
        </div>
      </section>

      {/* Pilares Kukula (Crescimento) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">Os Pilares de Morrumbala</h2>
            <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-blue-950 hover:text-white transition-all duration-500 shadow-xl shadow-gray-200/50">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                🌿
              </div>
              <h3 className="text-2xl font-bold mb-4">Kukula</h3>
              <p className="opacity-70 leading-relaxed">Honramos a natureza e o crescimento orgânico dos talentos locais na Província da Zambézia.</p>
            </div>
            <div className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-blue-950 hover:text-white transition-all duration-500 shadow-xl shadow-gray-200/50">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                💎
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualidade</h3>
              <p className="opacity-70 leading-relaxed">Infraestrutura moderna e equipe pedagógica de elite para um aprendizado rigoroso.</p>
            </div>
            <div className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-blue-950 hover:text-white transition-all duration-500 shadow-xl shadow-gray-200/50">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                🌍
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="opacity-70 leading-relaxed">Conectamos Morrumbala ao mundo através de tecnologia e bilinguismo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Pride CTA */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 block">Compromisso Regional</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">O Orgulho de Educar na <span className="text-emerald-400 italic">Zambézia</span></h2>
                <p className="text-blue-100 text-xl mb-12 leading-relaxed opacity-80">
                    Estamos no centro de Morrumbala para provar que a educação de qualidade não tem fronteiras. Nossa Biblioteca Virtual é apenas o começo da revolução digital na nossa vila.
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link to={AppRoute.ABOUT} className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 hover:text-white transition-all">
                        Nossa História
                    </Link>
                </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
                <div className="relative rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white/5">
                    <img 
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                        alt="Zambezia Landscape vibe" 
                        className="w-full h-full object-cover aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
