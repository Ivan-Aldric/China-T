import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const EducationPrograms = () => {
  const { isFrench } = useLanguage();

  const programs = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: isFrench ? 'Licence' : 'Bachelor\'s Degree',
      description: isFrench ? 'Programmes de premier cycle' : 'Undergraduate programs'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: isFrench ? 'Licence Professionnelle' : 'Associate Degree',
      description: isFrench ? 'Formation professionnelle spécialisée' : 'Specialized professional training'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: isFrench ? 'Master' : 'Master\'s Degree',
      description: isFrench ? 'Études supérieures avancées' : 'Advanced graduate studies'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: isFrench ? 'Doctorat' : 'PhD',
      description: isFrench ? 'Recherche doctorale' : 'Doctoral research'
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isFrench ? 'PROGRAMMES D\'ÉTUDES' : 'EDUCATION PROGRAMS'}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-china-red mx-auto rounded-full mb-4 sm:mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* French Text */}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {isFrench ? 'ÉTUDIEZ DES PROGRAMMES SPÉCIALISÉS' : 'STUDY SPECIALIZED PROGRAMS'}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {isFrench 
                  ? 'COUVRANT LES CYCLES LICENCE, LICENCE PROFESSIONNELLE, MASTER, DOCTORAT DANS LES MEILLEURES UNIVERSITÉS CHINOISES.'
                  : 'COVERING BACHELOR\'S, PROFESSIONAL BACHELOR\'S, MASTER\'S, DOCTORATE DEGREES IN THE BEST CHINESE UNIVERSITIES.'
                }
              </p>
            </div>

            {/* English Text Box */}
            <div className="bg-china-blue p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <p className="text-base sm:text-lg text-white leading-relaxed font-medium">
                {isFrench 
                  ? 'STUDY SPECIALIZED PROGRAMS COVERING UNDERGRADUATE, ASSOCIATE DEGREE, MASTER\'S AND PHD PROGRAMS AT TOP CHINESE UNIVERSITY.'
                  : 'STUDY SPECIALIZED PROGRAMS COVERING UNDERGRADUATE, ASSOCIATE DEGREE, MASTER\'S AND PHD PROGRAMS AT TOP CHINESE UNIVERSITY.'
                }
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="/image3.png" 
                alt={isFrench ? 'Étudiants dans une université chinoise' : 'Students in Chinese university'}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Image caption */}
            <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {isFrench ? 'Image: Étudiants dans une université chinoise' : 'Image: Students in Chinese university'}
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <div key={index} className="card p-4 sm:p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-china-red rounded-full flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 group-hover:bg-red-700 transition-colors duration-300">
                {program.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {program.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            {isFrench ? 'Découvrir nos programmes' : 'Discover our programs'}
          </button>
        </div>

        {/* Decorative Elements - Hidden on mobile for better performance */}
        <div className="hidden sm:block absolute top-10 left-10 text-4xl opacity-10 animate-float">
          📚
        </div>
        <div className="hidden sm:block absolute bottom-10 right-10 text-5xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          🏫
        </div>
      </div>
    </section>
  );
};

export default EducationPrograms;
