import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="display text-4xl md:text-5xl mb-4 text-center">
        How can we <span className="gradient-text">help?</span>
      </h1>
      <p className="text-center text-drip-textSecondary mb-12 max-w-xl mx-auto text-lg">
        Have a question, issue, or feedback? We'd love to hear from you.
      </p>

      <div className="bg-drip-surface p-10 md:p-12 rounded-2xl border border-drip-border/30 text-center">
        <div className="w-16 h-16 ember-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <h3 className="display text-2xl mb-4">Email Us</h3>
        <p className="text-drip-textSecondary mb-8">
          Our support team typically responds within 24 hours.
        </p>
        <a
          href="mailto:info@ryonlabs.com"
          className="inline-block ember-bg text-white font-semibold py-4 px-10 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          info@ryonlabs.com
        </a>
      </div>
    </div>
  );
};
