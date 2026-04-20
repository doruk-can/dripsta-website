import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">
        How can we <span className="gradient-text">help?</span>
      </h1>
      <p className="text-center text-drip-textSecondary mb-12 max-w-xl mx-auto text-lg">
        Have a question, issue, or feedback? We'd love to hear from you.
      </p>

      <div className="bg-drip-surface p-10 md:p-12 rounded-2xl border border-drip-border/30 text-center mb-12">
        <div className="w-16 h-16 ember-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Email Us</h3>
        <p className="text-drip-textSecondary mb-8">
          Our support team typically responds within 24 hours.
        </p>
        <a
          href="mailto:info@ryonlabs.com"
          className="inline-block ember-bg text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          info@ryonlabs.com
        </a>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Common Questions</h2>

      <div className="space-y-4">
        <FAQ
          q="How do I get more credits?"
          a="Invite friends using your unique link. You earn 3 credits for each friend who signs up. Or subscribe to Premium for unlimited analyses."
        />
        <FAQ
          q="How do I delete a photo?"
          a='Go to your Profile, tap the photo, and select "Delete." This removes it from your profile, the Discover feed, and the leaderboard.'
        />
        <FAQ
          q="How do I cancel my subscription?"
          a="Subscriptions are managed through the App Store (iOS) or Google Play Store (Android). Go to your device's subscription settings to cancel."
        />
        <FAQ
          q="Why was my photo rejected?"
          a="Photos may be rejected if the AI cannot clearly identify the outfit (too blurry, too dark, no clothing visible, or inappropriate content). Rejected photos do not consume credits."
        />
        <FAQ
          q="How is my score calculated?"
          a="Your outfit is scored across 4 categories: Style Composition, Occasion Fit, Color Harmony, and Trend Relevance. Weights adjust based on your selected occasion. Community likes contribute 15% to your final leaderboard score."
        />
        <FAQ
          q="How do I remove my outfit from the leaderboard?"
          a='Go to your Profile, find the photo, and select "Remove from public." This removes it from both Discover and the leaderboard.'
        />
        <FAQ
          q="How do I delete my account?"
          a="Go to Profile → Settings → Delete Account. All your data will be permanently removed within 30 days."
        />
        <FAQ
          q="How do I report someone?"
          a="Tap the report button on any public photo. Select your reason. Our team reviews all reports."
        />
      </div>
    </div>
  );
};

const FAQ: React.FC<{ q: string; a: string }> = ({ q, a }) => (
  <details className="group bg-drip-surface border border-drip-border/30 rounded-xl overflow-hidden hover:border-drip-border/60 transition-colors">
    <summary className="flex justify-between items-center cursor-pointer p-5 font-semibold text-drip-text">
      <span>{q}</span>
      <svg
        className="w-5 h-5 text-drip-textSecondary transition-transform group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div className="px-5 pb-5 text-drip-textSecondary leading-relaxed">{a}</div>
  </details>
);
