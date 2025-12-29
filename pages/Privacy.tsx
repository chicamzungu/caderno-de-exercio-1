
import React from 'react';
import { SCHOOL_INFO } from '../constants';

const Privacy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-emerald-900 mb-8">Política de Privacidade</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">1. Introdução</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A nossa prioridade na {SCHOOL_INFO.name} é proteger os dados dos nossos alunos e visitantes. Esta política explica como tratamos suas informações pessoais e garantimos a segurança digital em nossas plataformas.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">2. Coleta de Dados</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Coletamos informações necessárias para o processo de matrícula, comunicação pedagógica e acesso à Biblioteca Virtual, tais como nome, contacto e histórico escolar, respeitando a legislação moçambicana de proteção de dados.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">3. Uso da Biblioteca Virtual</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Os materiais disponíveis na Biblioteca Virtual são para fins estritamente educativos dos alunos devidamente inscritos em Morrumbala. O uso indevido ou redistribuição não autorizada de materiais protegidos por direitos autorais é expressamente proibido.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">4. Segurança</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Implementamos medidas de segurança técnicas e organizacionais de ponta para proteger seus dados contra acesso não autorizado, alteração ou perda.
          </p>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 flex justify-between items-center">
          <span>Última atualização: Janeiro de 2025</span>
          <span className="font-bold text-emerald-600">Morrumbala, Moçambique</span>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
