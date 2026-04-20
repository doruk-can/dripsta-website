import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Support } from './pages/Support';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [route, setRoute] = useState<string>(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setRoute(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let Component;
  switch (route) {
    case '#/privacy':
      Component = Privacy;
      break;
    case '#/terms':
      Component = Terms;
      break;
    case '#/support':
      Component = Support;
      break;
    case '#/':
    default:
      Component = Home;
      break;
  }

  return (
    <div className="flex flex-col min-h-screen bg-drip-bg text-drip-text font-sans">
      <Header currentRoute={route} />
      <main className="flex-grow pt-20">
        <Component />
      </main>
      <Footer />
    </div>
  );
};

export default App;
