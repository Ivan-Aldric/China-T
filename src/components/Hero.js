import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Plane } from 'lucide-react';

const Hero = () => {
  const { isFrench } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/China.jpg)'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20 sm:pt-24">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-china-red rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-china-light-blue font-bold text-xl sm:text-2xl">iB</div>
            </div>
          </div>
          <div className="text-china-light-blue font-semibold text-xl sm:text-2xl mb-4 sm:mb-6">Bet</div>

          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            {isFrench ? (
              <>
                <span className="block">VOYAGEZ SANS STRESS,</span>
                <span className="block text-china-red">EXPLOREZ AVEC PASSION</span>
              </>
            ) : (
              <>
                <span className="block">TRAVEL WITHOUT STRESS,</span>
                <span className="block text-china-red">EXPLORE WITH PASSION</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              {isFrench ? 'Profitez des opportunités' : 'Enjoy the opportunities'}
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <span className="text-base sm:text-lg text-white">en</span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-china-light-blue rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">en</span>
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-china-red">Chine</span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto px-4">
              {isFrench 
                ? 'Tourisme, Business, Études' 
                : 'Tourism, Business, Education'
              }
            </p>
          </div>

          {/* Decorative Koi Fish */}
          <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">
            🐟
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button
              onClick={scrollToContact}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-2 w-full sm:w-auto"
            >
              <span>{isFrench ? 'Contactez-nous' : 'Contact Us'}</span>
              <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              {isFrench ? 'Nos Services' : 'Our Services'}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-1/4 left-10 text-4xl opacity-10 animate-float">
        🏮
      </div>
      <div className="hidden sm:block absolute bottom-1/4 right-20 text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        🏮
      </div>
    </section>
  );
};

export default Hero;
