import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, Mail, MapPin, Send, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const { isFrench } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = isFrench ? 'Le nom est requis' : 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = isFrench ? 'Le nom doit contenir au moins 2 caractères' : 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = isFrench ? 'L\'email est requis' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isFrench ? 'Veuillez entrer un email valide' : 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = isFrench ? 'Le message est requis' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = isFrench ? 'Le message doit contenir au moins 10 caractères' : 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      console.log('Form submitted:', formData);
      
      // You can integrate with services like:
      // - EmailJS
      // - Formspree
      // - Netlify Forms
      // - Your own backend API
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailSubmit = () => {
    const subject = isFrench 
      ? `Demande de contact - ${formData.name}`
      : `Contact Request - ${formData.name}`;
    const body = isFrench 
      ? `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      : `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const url = `mailto:welcometochina888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
  };

  const handleWhatsAppSubmit = () => {
    const message = isFrench 
      ? `Bonjour! Je m\'appelle ${formData.name} (${formData.email}).\n\n${formData.message}`
      : `Hello! My name is ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const url = `https://wa.me/237653923913?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isFrench ? 'CONTACTEZ-NOUS' : 'CONTACT US'}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-china-red mx-auto rounded-full mb-4 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            {isFrench 
              ? 'Prêt à commencer votre aventure en Chine ? Contactez-nous dès maintenant !'
              : 'Ready to start your adventure in China? Contact us now!'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {isFrench ? 'Informations de contact' : 'Contact Information'}
              </h3>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    +237 653 92 39 13
                  </p>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="btn-primary bg-green-500 hover:bg-green-600 px-4 sm:px-6 py-2 text-xs sm:text-sm w-full sm:w-auto"
              >
                {isFrench ? 'Ouvrir' : 'Open'}
              </button>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-china-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all">
                    welcometochina888@gmail.com
                  </p>
                </div>
              </div>
              <button
                onClick={openEmail}
                className="btn-primary px-4 sm:px-6 py-2 text-xs sm:text-sm w-full sm:w-auto"
              >
                {isFrench ? 'Envoyer' : 'Send'}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {isFrench ? 'Localisation' : 'Location'}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {isFrench ? 'Cameroun' : 'Cameroon'}
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  {isFrench ? 'Carte Google Maps' : 'Google Maps'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {isFrench ? 'Envoyez-nous un message' : 'Send us a message'}
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-green-800 dark:text-green-200 text-sm sm:text-base">
                  {isFrench ? 'Message envoyé avec succès! Nous vous répondrons bientôt.' : 'Message sent successfully! We\'ll get back to you soon.'}
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-800 dark:text-red-200 text-sm sm:text-base">
                  {isFrench ? 'Erreur lors de l\'envoi. Veuillez réessayer ou utiliser WhatsApp/Email.' : 'Error sending message. Please try again or use WhatsApp/Email.'}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isFrench ? 'Nom complet' : 'Full Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300 text-sm sm:text-base ${
                    errors.name 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={isFrench ? 'Votre nom complet' : 'Your full name'}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300 text-sm sm:text-base ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isFrench ? 'Message' : 'Message'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-china-red focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300 resize-none text-sm sm:text-base ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder={isFrench ? 'Décrivez votre projet ou vos questions...' : 'Describe your project or questions...'}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base py-2 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span>{isFrench ? 'Envoi en cours...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{isFrench ? 'Envoyer le message' : 'Send Message'}</span>
                    </>
                  )}
                </button>
                
                {/* Alternative submission methods */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="btn-secondary flex items-center justify-center space-x-2 text-xs sm:text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{isFrench ? 'Email' : 'Email'}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
