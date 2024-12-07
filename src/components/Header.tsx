import React, { useState } from 'react';
import { Search, Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="bg-emerald-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <h1 className="text-xl md:text-2xl font-bold">
              {language === 'bn' ? 'বাজার দর' : 'Market Prices'}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActivePath('/') 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-emerald-100 hover:text-white hover:border-b-2 hover:border-emerald-200 pb-1'
                }`}
              >
                {language === 'bn' ? 'হোম' : 'Home'}
              </Link>
              
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActivePath('/about') 
                    ? 'text-white border-b-2 border-white pb-1' 
                    : 'text-emerald-100 hover:text-white hover:border-b-2 hover:border-emerald-200 pb-1'
                }`}
              >
                {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'পণ্য খুঁজুন...' : 'Search items...'}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-64 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>

              <button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg transition-colors"
              >
                <Languages className="h-5 w-5" />
                {language === 'bn' ? 'English' : 'বাংলা'}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="p-2 hover:bg-emerald-600 rounded-lg transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="h-5 w-5" />
              </button>
              
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'খুঁজুন' : 'Search'}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-24 pl-8 pr-3 py-1.5 rounded-lg text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-emerald-600 rounded-lg transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="space-y-2 mt-4">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActivePath('/') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              {language === 'bn' ? 'হোম' : 'Home'}
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActivePath('/about') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}