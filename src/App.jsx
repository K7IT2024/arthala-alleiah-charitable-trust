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

const resetScrollPosition = () => {
  if (typeof window === 'undefined') return;
  window.history.scrollRestoration = 'manual';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

export default function App(){
  const [page, setPage] = useState(getPageFromUrl);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallHelp, setShowInstallHelp] = useState(false);

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
    resetScrollPosition();
  };

  useEffect(() => {
    const onUrlChange = () => {
      const nextPage = getPageFromUrl();
      setPage(nextPage);
      resetScrollPosition();
    };

    window.history.scrollRestoration = 'manual';
    window.addEventListener('popstate', onUrlChange);
    resetScrollPosition();

    return () => window.removeEventListener('popstate', onUrlChange);
  }, []);

  useEffect(() => {
    resetScrollPosition();
  }, [page]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const installApp = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
      return;
    }
    setShowInstallHelp(true);
  };

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
      <button type="button" className="install-app-button" onClick={installApp}>
        Add to Home Screen
      </button>
      {showInstallHelp ? (
        <div className="install-help" role="dialog" aria-label="Add this website to your home screen">
          <strong>Install AACT</strong>
          <p>
            Android: use your browser menu and choose <b>Install app</b> or <b>Add to Home screen</b>.
            iPhone/iPad: tap <b>Share</b>, then choose <b>Add to Home Screen</b>.
          </p>
          <button type="button" onClick={() => setShowInstallHelp(false)}>Close</button>
        </div>
      ) : null}
      <Navbar currentPage={page} onNavigate={navigateToPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}
