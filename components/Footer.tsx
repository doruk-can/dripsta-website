import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-drip-surface text-drip-textSecondary py-12 mt-auto border-t border-drip-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./dripsta-logo.png"
                alt="Dripsta"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <h3 className="text-xl font-extrabold text-drip-text">Dripsta</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Trained on fashion. Rates your fit. Elevates your style. Lands you on the feed.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-drip-text">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/privacy" className="hover:text-drip-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#/terms" className="hover:text-drip-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-drip-text">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/support" className="hover:text-drip-primary transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ryonlabs.com"
                  className="hover:text-drip-primary transition-colors"
                >
                  info@ryonlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-drip-border/30 mt-12 pt-8 text-center text-sm text-drip-textTertiary">
          <p>&copy; {year} Ryon Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
