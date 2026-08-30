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

const validPages = ['home', 'about', 'services', 'events', 'gallery', 'donate', 'volunteer', 'contact'];

const getPageFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  return validPages.includes(page) ? page : 'home';
};

export default function App(){
  const [page, setPage] = useState(getPageFromUrl);

  const navigateToPage = (nextPage) => {
    const target = validPages.includes(nextPage) ? nextPage : 'home';
    setPage(target);

    const url = new URL(window.location.href);
    if (target === 'home') {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', target);
    }
    window.history.pushState({}, '', `${url.pathname}${url.search}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const onUrlChange = () => {
      const nextPage = getPageFromUrl();
      setPage(nextPage);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', onUrlChange);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    return () => window.removeEventListener('popstate', onUrlChange);
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
