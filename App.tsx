
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Library from './pages/Library';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import { AppRoute } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={AppRoute.PROGRAMS} element={<Programs />} />
            <Route path={AppRoute.LIBRARY} element={<Library />} />
            <Route path={AppRoute.CONTACT} element={<Contact />} />
            <Route path={AppRoute.PRIVACY} element={<Privacy />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
