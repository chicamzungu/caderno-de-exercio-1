
import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../constants';
import { AppRoute } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-900/30 rounded-tl-full -mr-24 -mb-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-8">
              <span className="text-2xl font-bold tracking-tight leading-none uppercase">KUKULA KWA</span>
              <span className="text-xs text-emerald-400 font-bold tracking-[0.3em] uppercase">MORRUMBALA</span>
            </Link>
            <p className="text-blue-200/60 text-sm leading-relaxed mb-8">
              Referência em educação privada na Zambézia. Construindo o futuro dos jovens de Morrumbala com excelência e ética.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-emerald-400">Navegação</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><Link to={AppRoute.ABOUT} className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to={AppRoute.PROGRAMS} className="hover:text-white transition-colors">Programas</Link></li>
              <li><Link to={AppRoute.LIBRARY} className="hover:text-white transition-colors">Biblioteca Virtual</Link></li>
              <li><Link to={AppRoute.CONTACT} className="hover:text-white transition-colors">Matrículas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-emerald-400">Escritório</h4>
            <ul className="space-y-6 text-sm text-blue-100/70">
              <li className="flex items-start gap-4">
                <span className="opacity-50">📍</span>
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="opacity-50">📞</span>
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="opacity-50">✉️</span>
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Map placeholder */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-10 text-emerald-400">Morrumbala Online</h4>
            <p className="text-xs text-blue-200/60 mb-6 leading-relaxed italic">"O topo do saber começa nas montanhas do esforço."</p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-blue-300 font-bold uppercase mb-2">Prazos de Inscrição</div>
                <div className="text-xs font-medium">Abertas até 28 de Fevereiro de 2025</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-blue-200/40 uppercase tracking-[0.2em] font-bold">
          <p>© 2025 {SCHOOL_INFO.name} • Morrumbala, Zambézia</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to={AppRoute.PRIVACY} className="hover:text-white transition-colors">Termos</Link>
            <Link to={AppRoute.PRIVACY} className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
