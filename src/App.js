import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { cleanupLocalStorage } from './utils/localStorage';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import EducationPrograms from './components/EducationPrograms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Clean up any problematic localStorage entries on app startup
    cleanupLocalStorage();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Hero />
          <Services />
          <EducationPrograms />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
