
import React, { useState, useRef, useEffect } from 'react';
import { getSchoolAssistantResponse } from '../services/geminiService';
import { SCHOOL_INFO } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Olá! Sou o assistente inteligente da ${SCHOOL_INFO.name}. Como posso ajudar você hoje em Morrumbala?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getSchoolAssistantResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response || 'Desculpe, não consegui processar isso.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Erro de conexão. Tente novamente mais tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-18 h-18 bg-blue-950 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-emerald-600 transition-all hover:scale-105 active:scale-90 border-4 border-white/10"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] sm:w-[420px] bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="bg-blue-950 p-8 text-white relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-20 -mt-20"></div>
            <h3 className="font-bold text-2xl tracking-tight mb-1 font-display">KUKULA ASSIST</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-emerald-400 uppercase tracking-[0.3em] font-bold">Online em Morrumbala</p>
            </div>
          </div>
          
          <div className="flex-1 h-[450px] overflow-y-auto p-8 space-y-8 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-950 text-white rounded-br-none shadow-blue-900/10' 
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-100 shadow-gray-200/50'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-6 py-4 rounded-[1.5rem] rounded-bl-none flex space-x-2 shadow-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-8 border-t border-gray-100 bg-white flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-blue-950 text-white p-4 rounded-2xl hover:bg-emerald-600 disabled:opacity-50 transition-all shadow-xl active:scale-90"
            >
              <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
