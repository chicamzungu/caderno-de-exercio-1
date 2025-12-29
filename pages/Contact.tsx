
import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Matrícula',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="bg-blue-600 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto e Inscrições</h1>
        <p className="text-blue-100 max-w-xl mx-auto px-4">Estamos prontos para responder às suas dúvidas e agendar sua visita.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Informações de Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Localização</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{SCHOOL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{SCHOOL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Oficial</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{SCHOOL_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-inner bg-gray-200 aspect-video flex items-center justify-center border-4 border-white">
              <span className="text-gray-500 font-medium">Mapa Interativo (Maputo)</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Envie-nos uma Mensagem</h2>
            
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-100 text-center animate-in zoom-in duration-300">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p>Obrigado pelo seu interesse. Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="+258 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                  >
                    <option value="Matrícula">Fazer Matrícula</option>
                    <option value="Informações">Pedir Informações</option>
                    <option value="Biblioteca">Acesso à Biblioteca Virtual</option>
                    <option value="Outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  Enviar Solicitação
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
