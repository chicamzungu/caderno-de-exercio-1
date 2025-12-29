
import React from 'react';
import { PROGRAMS_DATA } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen animate-in fade-in duration-700">
      <div className="bg-blue-600 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cursos e Programas</h1>
        <p className="text-blue-100 max-w-xl mx-auto px-4">Oferecemos uma jornada educativa completa do pré-escolar ao secundário.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS_DATA.map((program, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <button className="text-blue-600 font-bold text-sm flex items-center hover:gap-2 transition-all">
                Saber Mais
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Feature block */}
        <div className="mt-24 bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="flex-1 p-12 md:p-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Diferenciais Pedagógicos</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Turmas Reduzidas</h4>
                  <p className="text-gray-600 text-sm">Garantimos atenção individualizada para cada aluno, permitindo um acompanhamento mais próximo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Laboratórios Equipados</h4>
                  <p className="text-gray-600 text-sm">Espaços dedicados para experiências práticas em ciências e informática.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Educação para a Cidadania</h4>
                  <p className="text-gray-600 text-sm">Promovemos valores éticos e responsabilidade social em todo o currículo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 min-h-[400px]">
            <img src="https://picsum.photos/seed/pedagogy/800/800" alt="Educação" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
