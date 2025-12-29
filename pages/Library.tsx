
import React, { useState } from 'react';
import { BOOKS_DATA, SCHOOL_INFO } from '../constants';

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(BOOKS_DATA.map(book => book.category))];

  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <div className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">Biblioteca Virtual</h1>
          <p className="text-blue-200 max-w-xl mx-auto">Recursos educativos exclusivos da {SCHOOL_INFO.name} para estudo e pesquisa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 bg-gray-50 p-6 rounded-3xl border border-gray-100">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Pesquisar por título ou autor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-1 leading-tight line-clamp-2 min-h-[3rem] group-hover:text-blue-600">
                  {book.title}
                </h3>
                <p className="text-xs text-blue-600 font-medium mb-3">{book.author}</p>
                <p className="text-gray-500 text-xs line-clamp-3 mb-6 leading-relaxed">
                  {book.description}
                </p>
                <button className="w-full bg-gray-50 text-gray-900 py-3 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                  Baixar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
