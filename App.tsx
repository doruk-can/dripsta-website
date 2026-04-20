import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Support } from './pages/Support';
import { Invite } from './pages/Invite';
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

  // Strip leading "#" and split on "?" to separate path from query
  const [path, queryString] = route.replace(/^#/, '').split('?');
  const query = new URLSearchParams(queryString || '');
  const segments = path.split('/').filter(Boolean);

  let content: React.ReactNode;
  if (segments[0] === 'privacy') {
    content = <Privacy />;
  } else if (segments[0] === 'terms') {
    content = <Terms />;
  } else if (segments[0] === 'support') {
    content = <Support />;
  } else if (segments[0] === 'invite') {
    // Supports /#/invite/CODE and /#/invite?code=CODE
    const code = segments[1] || query.get('code') || null;
    content = <Invite code={code} />;
  } else {
    content = <Home />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-drip-bg text-drip-text font-sans">
      <Header currentRoute={route} />
      <main className="flex-grow pt-20">{content}</main>
      <Footer />
    </div>
  );
};

export default App;
