import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isFrench, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white border-2 border-china-red rounded-full flex items-center justify-center">
              <div className="text-china-light-blue font-bold text-lg">iB</div>
            </div>
            <div className="text-china-light-blue font-semibold text-lg">Bet</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isFrench ? 'Accueil' : 'Home'}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isFrench ? 'Services' : 'Services'}
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isFrench ? 'Études' : 'Education'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isFrench ? 'Contact' : 'Contact'}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              <Globe className="w-5 h-5" />
              <span className="font-semibold">{isFrench ? 'FR' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
              >
                {isFrench ? 'Accueil' : 'Home'}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
              >
                {isFrench ? 'Services' : 'Services'}
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
              >
                {isFrench ? 'Études' : 'Education'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-china-red transition-colors duration-300"
              >
                {isFrench ? 'Contact' : 'Contact'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
