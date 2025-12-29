
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';
import { SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: AppRoute.HOME },
    { label: 'Sobre Nós', path: AppRoute.ABOUT },
    { label: 'Programas', path: AppRoute.PROGRAMS },
    { label: 'Biblioteca', path: AppRoute.LIBRARY },
    { label: 'Contacto', path: AppRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col group">
              <span className="text-lg font-bold text-blue-950 tracking-tight leading-none uppercase group-hover:text-blue-700 transition-colors">KUKULA KWA</span>
              <span className="text-[10px] text-emerald-600 font-bold tracking-[0.25em] uppercase">MORRUMBALA</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${
                  isActive(item.path) 
                    ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                    : 'text-gray-500 hover:text-blue-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={AppRoute.CONTACT}
              className="bg-blue-900 text-white px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-blue-950/20 transform hover:-translate-y-0.5"
            >
              Matrículas 2025
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest ${
                  isActive(item.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={AppRoute.CONTACT}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-900 text-white px-4 py-4 mt-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Fazer Matrícula
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
