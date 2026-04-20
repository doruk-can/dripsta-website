import React, { useState } from 'react';

interface HeaderProps {
  currentRoute: string;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Privacy', href: '#/privacy' },
    { name: 'Terms', href: '#/terms' },
    { name: 'Support', href: '#/support' },
  ];

  const isActive = (href: string) => currentRoute === href;

  return (
    <nav className="fixed w-full z-50 bg-drip-bg/80 backdrop-blur-md border-b border-drip-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#/" className="flex items-center gap-3">
              <img
                src="./dripsta-logo.png"
                alt="Dripsta"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="font-extrabold text-2xl tracking-tight text-drip-text">
                Dripsta
              </span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-drip-primary font-bold'
                    : 'text-drip-textSecondary hover:text-drip-text'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-drip-text focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-drip-surface border-b border-drip-border/30 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-drip-primary bg-drip-elevated'
                    : 'text-drip-textSecondary hover:text-drip-text hover:bg-drip-elevated/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
