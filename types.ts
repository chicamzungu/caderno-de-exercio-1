import React from 'react';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  level: string;
  imageUrl: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export enum AppRoute {
  HOME = '/',
  ABOUT = '/sobre',
  PROGRAMS = '/programas',
  LIBRARY = '/biblioteca',
  CONTACT = '/contacto',
  PRIVACY = '/privacidade'
}