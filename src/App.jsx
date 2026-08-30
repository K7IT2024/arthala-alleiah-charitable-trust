import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';

const getPageFromHash = () => {
  const page = window.location.hash.replace('#', '').trim();
  return page || 'home';
};

export default function App(){
  const [page, setPage] = useState(getPageFromHash);

  const navigateToPage = (nextPage) => {
    const target = nextPage || 'home';
    setPage(target);
    const hash = target === 'home' ? '' : `#${target}`;
    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.pushState(null, '', nextUrl);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const onHashChange = () => {
      const nextPage = getPageFromHash();
      setPage(nextPage);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'events': return <Events />;
      case 'gallery': return <Gallery />;
      case 'donate': return <Donate />;
      case 'volunteer': return <Volunteer />;
      case 'contact': return <Contact />;
      case 'home':
      default: return <Home onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="app-root">
      <Navbar currentPage={page} onNavigate={navigateToPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
