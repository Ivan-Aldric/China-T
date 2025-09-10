import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, Mail, Facebook, Instagram, Linkedin, Plane } from 'lucide-react';

const Footer = () => {
  const { isFrench } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = isFrench 
      ? 'Bonjour! Je suis intéressé(e) par vos services pour la Chine.'
      : 'Hello! I am interested in your services for China.';
    const url = `https://wa.me/237653923913?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openEmail = () => {
    const subject = isFrench 
      ? 'Demande d\'information - Services Chine'
      : 'Information Request - China Services';
    const body = isFrench 
      ? 'Bonjour,\n\nJe souhaiterais obtenir plus d\'informations sur vos services.\n\nCordialement,'
      : 'Hello,\n\nI would like to get more information about your services.\n\nBest regards,';
    const url = `mailto:welcometochina888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-china-red rounded-full flex items-center justify-center">
                <div className="text-china-light-blue font-bold text-base sm:text-lg">iB</div>
              </div>
              <div className="text-china-light-blue font-semibold text-lg sm:text-xl">Bet</div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              {isFrench 
                ? 'Votre partenaire de confiance pour toutes vos opportunités en Chine. Tourisme, Business, Études - nous vous accompagnons dans votre aventure.'
                : 'Your trusted partner for all your opportunities in China. Tourism, Business, Education - we accompany you in your adventure.'
              }
            </p>
            
            {/* Tagline */}
            <div className="bg-china-red p-3 sm:p-4 rounded-lg">
              <p className="font-bold text-base sm:text-lg">
                {isFrench ? 'La Chine vous attend... Prêt à embarquer ?' : 'China awaits you... Ready to embark?'}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {isFrench ? 'Liens rapides' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('hero');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-china-red transition-colors duration-300 text-sm sm:text-base"
                >
                  {isFrench ? 'Accueil' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-china-red transition-colors duration-300 text-sm sm:text-base"
                >
                  {isFrench ? 'Services' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('education');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-china-red transition-colors duration-300 text-sm sm:text-base"
                >
                  {isFrench ? 'Études' : 'Education'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-china-red transition-colors duration-300 text-sm sm:text-base"
                >
                  {isFrench ? 'Contact' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {isFrench ? 'Contact' : 'Contact'}
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+237 653 92 39 13</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-china-red flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">welcometochina888@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                {isFrench ? 'Suivez-nous' : 'Follow us'}
              </h4>
              <div className="flex space-x-2 sm:space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <button
                  onClick={openWhatsApp}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 IBet LIA. {isFrench ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-china-red transition-colors duration-300"
            >
              <Plane className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">
                {isFrench ? 'Retour en haut' : 'Back to top'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
