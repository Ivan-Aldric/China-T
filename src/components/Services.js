import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Building, GraduationCap, ArrowDown, ArrowUp } from 'lucide-react';

const Services = () => {
  const { isFrench } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8" />,
      title: isFrench ? 'Assistance Visa touristique' : 'Tourist Visa Assistance',
      description: isFrench 
        ? 'Aide à la constitution du dossier de demande de visa ; Accueil et visite des sites touristiques Conseils pour capitaliser sur son voyage'
        : 'Assistance with visa application file; Welcome and visit to tourist sites; Advice on how to make the most of your trip',
      image: 'image.png', // Great Wall of China
      arrow: 'down'
    },
    {
      id: 2,
      icon: <Building className="w-8 h-8" />,
      title: isFrench ? 'Assistance Visa Business' : 'Business Visa Assistance',
      description: isFrench 
        ? 'Aide à la constitution du dossier de demande de visa ; Accueil à l\'aéroport et visite des entreprises ; Invitation et participation à la Foire de Canton (Guangzhou) et autres foires'
        : 'Assistance with visa application file; Airport welcome and company visits; Invitation and participation in the Canton Fair (Guangzhou) and other fairs',
      image: 'image1.png', // Canton Fair
      arrow: 'down'
    },
    {
      id: 3,
      icon: <GraduationCap className="w-8 h-8" />,
      title: isFrench ? 'Assistance Visa étudiant' : 'Student Visa Assistance',
      description: isFrench 
        ? 'Planification et soutien complet pour les études en Chine ; Aide à la constitution du dossier de demande de visa ; Aide à l\'obtention des stages de recherche ; Aider les médecins à obtenir des invitations de formation formelle etc'
        : 'Complete planning and support for studies in China; Assistance with visa application file; Assistance in obtaining research internships; Helping doctors obtain formal training invitations etc',
      image: 'image2.jpg', // Graduation
      arrow: 'up'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isFrench ? 'NOS SERVICES' : 'OUR SERVICES'}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-china-red mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              {/* Service Card */}
              <div className="card p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-china-red rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-china-red">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                      <img 
                        src={`/${service.image}`} 
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    {/* Image caption */}
                    <div className="text-center mt-2 sm:mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {index === 0 && (isFrench ? 'Image: Grande Muraille de Chine' : 'Image: Great Wall of China')}
                      {index === 1 && (isFrench ? 'Image: Foire de Canton' : 'Image: Canton Fair')}
                      {index === 2 && (isFrench ? 'Image: Cérémonie de remise de diplômes' : 'Image: Graduation Ceremony')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < services.length - 1 && (
                <div className="flex justify-center mt-6 sm:mt-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-china-red rounded-full flex items-center justify-center text-white shadow-lg">
                    {service.arrow === 'down' ? (
                      <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative Elements - Hidden on mobile for better performance */}
        <div className="hidden sm:block absolute top-20 right-10 text-6xl opacity-5 animate-float">
          🏮
        </div>
        <div className="hidden sm:block absolute bottom-20 left-10 text-4xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>
          🏮
        </div>
      </div>
    </section>
  );
};

export default Services;
