import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BouquetsPage } from './pages/BouquetsPage';
import { VisitPage } from './pages/VisitPage';

export type PageType = 'home' | 'about' | 'bouquets' | 'visit';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') setCurrentPage('about');
      else if (hash === 'bouquets' || hash === 'arrangements') setCurrentPage('bouquets');
      else if (hash === 'visit' || hash === 'contact') setCurrentPage('visit');
      else setCurrentPage('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#220E24]">
      {/* Persistent Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'bouquets' && <BouquetsPage onNavigate={handleNavigate} />}
        {currentPage === 'visit' && <VisitPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
