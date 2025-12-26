import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { WhyUs } from './pages/WhyUs';
import { Contact } from './pages/Contact';
import { AppRoute } from './types';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-site text-body font-sans selection:bg-gold-500 selection:text-site">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.SERVICES} element={<Services />} />
            <Route path={AppRoute.WORK} element={<Work />} />
            <Route path={AppRoute.WHY_US} element={<WhyUs />} />
            <Route path={AppRoute.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;