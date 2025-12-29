
import React from 'react';
import { Book, Program } from './types';

export const SCHOOL_INFO = {
  name: "Visão KUKULA KWA MORRUMBALA",
  address: "Rua OLA-Morrumbala, Provincia da Zambezia, Distrito de Morrumbala, Moçambique",
  phone: "+258 847490264 / +258 861660402",
  email: "info@escolanovavisao.mz",
  whatsapp: "+258 847490264",
  mission: "Formar cidadãos críticos, éticos e preparados para os desafios do século XXI através de educação de qualidade em Moçambique.",
  values: [
    "Ensino centrado no aluno",
    "Tecnologia educativa integrada",
    "Desenvolvimento de competências académicas e socioemocionais",
    "Parceria com famílias e comunidade"
  ]
};

export const PROGRAMS_DATA: Program[] = [
  {
    title: "Educação Pré-Escolar",
    description: "Um ambiente lúdico e seguro para os primeiros passos na aprendizagem social e cognitiva.",
    icon: <span className="text-3xl">🧸</span>
  },
  {
    title: "Ensino Básico (1.º ao 7.º ano)",
    description: "Foco no desenvolvimento de competências fundamentais em leitura, escrita e raciocínio lógico.",
    icon: <span className="text-3xl">✏️</span>
  },
  {
    title: "Ensino Secundário (8.º ao 12.º ano)",
    description: "Preparação rigorosa para o ensino superior e desafios profissionais do futuro.",
    icon: <span className="text-3xl">🎓</span>
  },
  {
    title: "Apoio ao Estudo e Tutoria",
    description: "Sessões personalizadas para reforçar o conhecimento e superar dificuldades individuais.",
    icon: <span className="text-3xl">📚</span>
  },
  {
    title: "Atividades Extracurriculares",
    description: "Desporto, artes e música para um desenvolvimento integral e harmonioso.",
    icon: <span className="text-3xl">🎨</span>
  }
];

export const BOOKS_DATA: Book[] = [
  {
    id: "1",
    title: "Matemática para o Ensino Básico",
    author: "Maria Ndlovu",
    description: "Manual completo de matemática com exercícios por capítulos, ideal para alunos do 1.º ao 7.º ano.",
    category: "Matemática",
    level: "Ensino Básico",
    imageUrl: "https://picsum.photos/seed/math/400/600"
  },
  {
    id: "2",
    title: "Ciências Naturais – Descobrir e Aprender",
    author: "Carlos M. Buque",
    description: "Livro interativo com experiências práticas, imagens e quizzes para facilitar o entendimento das ciências.",
    category: "Ciências",
    level: "Ensino Básico",
    imageUrl: "https://picsum.photos/seed/science/400/600"
  },
  {
    id: "3",
    title: "Língua Portuguesa – Gramática e Prática",
    author: "Ana Silva & João Matola",
    description: "Guia de gramática com explicações claras e exercícios corrigidos para reforço escolar.",
    category: "Português",
    level: "Geral",
    imageUrl: "https://picsum.photos/seed/portuguese/400/600"
  },
  {
    id: "4",
    title: "História de Moçambique – Passado e Presente",
    author: "Luís Mabote",
    description: "Livro que apresenta a história do país de forma acessível para alunos do ensino básico e secundário.",
    category: "História",
    level: "Geral",
    imageUrl: "https://picsum.photos/seed/history/400/600"
  }
];
