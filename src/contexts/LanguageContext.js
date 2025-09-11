import React, { createContext, useContext, useState, useEffect } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [isFrench, setIsFrench] = useState(() => {
    const saved = getLocalStorageItem('language', true);
    if (typeof saved === 'boolean') return saved;
    if (saved === 'french' || saved === 'fr') return true;
    if (saved === 'english' || saved === 'en') return false;
    return true; // Default to French
  });

  useEffect(() => {
    setLocalStorageItem('language', isFrench);
  }, [isFrench]);

  const toggleLanguage = () => {
    setIsFrench(!isFrench);
  };

  return (
    <LanguageContext.Provider value={{ isFrench, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
