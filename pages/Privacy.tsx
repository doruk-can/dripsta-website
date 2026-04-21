import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="display text-4xl md:text-5xl mb-2">Privacy Policy</h1>
      <p className="text-sm text-drip-textTertiary mb-12">Last Updated: April 20, 2026</p>

      <div className="space-y-10 text-drip-textSecondary leading-relaxed">
        <p>
          Ryon Labs LLC ("we", "us", "our") operates the Dripsta mobile application ("App"). This
          Privacy Policy explains how we collect, use, and protect your information when you use
          Dripsta or visit{' '}
          <a href="https://dripstaapp.com" className="text-drip-primary font-medium underline">
            dripstaapp.com
          </a>
          .
        </p>

        <p>
          Contact:{' '}
          <a href="mailto:info@ryonlabs.com" className="text-drip-primary font-medium underline">
            info@ryonlabs.com
          </a>
        </p>

        <Section title="Information We Collect">
          <h3 className="text-drip-text font-semibold mt-4 mb-2">Account Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address (via Apple Sign In, Google Sign In, or email registration)</li>
            <li>Username (chosen by user)</li>
            <li>Age range (selected during optional profile setup)</li>
            <li>Gender preference (selected during optional profile setup)</li>
          </ul>

          <h3 className="text-drip-text font-semibold mt-6 mb-2">User Content</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Photos uploaded for outfit analysis</li>
            <li>Occasion selections</li>
            <li>Profile information (bio, location if provided, social media links)</li>
          </ul>

          <h3 className="text-drip-text font-semibold mt-6 mb-2">Usage Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>App interactions (features used, screens visited)</li>
            <li>Analysis history (scores, AI feedback)</li>
            <li>Leaderboard participation and likes given/received</li>
            <li>Device information (device type, OS version)</li>
            <li>Crash logs and performance data</li>
          </ul>

          <h3 className="text-drip-text font-semibold mt-6 mb-2">Purchase Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription status and plan type</li>
            <li>
              Transaction history (processed by Apple/Google, we do not store payment details)
            </li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide AI outfit analysis and scoring</li>
            <li>To display your profile and shared outfits on the leaderboard and Discover feed</li>
            <li>To process referral credits</li>
            <li>To send notifications (if permitted)</li>
            <li>To improve our AI scoring accuracy and app experience</li>
            <li>To process subscriptions and credits</li>
          </ul>
        </Section>

        <Section title="Photo Handling">
          <ul className="list-disc pl-6 space-y-2">
            <li>Photos are uploaded to our servers for AI analysis</li>
            <li>Photos are processed by third-party AI providers (OpenAI) for analysis</li>
            <li>
              Photos you make "public" are visible to other users in the Discover feed and
              leaderboard
            </li>
            <li>Photos you keep "private" are only visible to you</li>
            <li>You can delete any photo from your profile at any time</li>
            <li>
              <strong className="text-drip-text">We do not use your photos for AI training purposes</strong>
            </li>
            <li>Voice data is not collected — Dripsta is a photo-only analysis tool</li>
          </ul>
        </Section>

        <Section title="Third-Party Services">
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong className="text-drip-text">Supabase</strong> — Database and authentication</li>
            <li><strong className="text-drip-text">OpenAI</strong> — AI outfit analysis</li>
            <li><strong className="text-drip-text">RevenueCat</strong> — Subscription management</li>
            <li><strong className="text-drip-text">Apple/Google</strong> — Authentication and in-app purchases</li>
            <li><strong className="text-drip-text">Analytics provider</strong> — App usage analytics</li>
          </ul>
          <p className="mt-4">
            These services have their own privacy policies. We recommend reviewing them.
          </p>
        </Section>

        <Section title="Data Retention">
          <ul className="list-disc pl-6 space-y-2">
            <li>Account data is retained while your account is active</li>
            <li>Deleted photos are removed from our servers within 30 days</li>
            <li>If you delete your account, all associated data is removed within 30 days</li>
            <li>AI analysis results are retained for your history until you delete them</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <p>You may:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access your personal data</li>
            <li>Delete your photos and analysis history</li>
            <li>Delete your account entirely</li>
            <li>Opt out of notifications</li>
            <li>Request a copy of your data</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact{' '}
            <a href="mailto:info@ryonlabs.com" className="text-drip-primary underline">
              info@ryonlabs.com
            </a>
            .
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Dripsta is intended for users aged 16 and older. We do not knowingly collect
            information from children under 16. If we learn we have collected data from a child
            under 16, we will delete it promptly.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We implement industry-standard security measures to protect your data. However, no
            method of electronic transmission or storage is 100% secure.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant
            changes through the App. Continued use of the App after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="Contact">
          <p>For privacy-related inquiries:</p>
          <ul className="list-none space-y-1 mt-4">
            <li>
              Email:{' '}
              <a href="mailto:info@ryonlabs.com" className="text-drip-primary underline">
                info@ryonlabs.com
              </a>
            </li>
            <li>Company: Ryon Labs LLC</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section>
    <h2 className="display text-xl md:text-2xl text-drip-text mb-4">{title}</h2>
    {children}
  </section>
);
