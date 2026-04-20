import React, { useState } from 'react';

interface InviteProps {
  code: string | null;
}

export const Invite: React.FC<InviteProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-drip-elevated border border-drip-primary/30 mb-6">
          <span className="text-sm font-semibold gradient-text">You've been invited</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          Your friend sent you <br />
          <span className="gradient-text">2 free credits</span>
        </h1>
        <p className="text-drip-textSecondary text-lg max-w-xl mx-auto">
          Your style verdict is one tap away.
        </p>
      </div>

      {code ? (
        <div className="bg-drip-surface border border-drip-border/40 rounded-3xl p-8 md:p-10 mb-10 glow-ember">
          <p className="text-drip-textTertiary text-sm font-medium uppercase tracking-wider text-center mb-4">
            Invite Code
          </p>
          <div className="flex items-center justify-center mb-6">
            <div className="font-mono text-3xl md:text-5xl font-extrabold tracking-wider gradient-text break-all text-center">
              {code}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${
              copied
                ? 'bg-drip-success text-black'
                : 'ember-bg text-white hover:opacity-90'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
                Copy Code
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="bg-drip-surface border border-drip-border/40 rounded-3xl p-10 mb-10 text-center">
          <p className="text-drip-textSecondary">
            No invite code found. Ask your friend to send you a proper invite link.
          </p>
        </div>
      )}

      <div className="text-center mb-8">
        <p className="text-drip-textSecondary text-sm mb-6">
          Download the app and paste your code at sign-up
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="transform hover:scale-105 transition-transform duration-200 pointer-events-none opacity-80"
          >
            <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40">
              <img src="./apple-icon.png" alt="Apple" className="w-8 h-8 object-contain" />
              <div className="text-left">
                <div className="text-[10px] leading-none">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="transform hover:scale-105 transition-transform duration-200 pointer-events-none opacity-80"
          >
            <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40">
              <img src="./google-icon.png" alt="Google Play" className="w-7 h-7 object-contain" />
              <div className="text-left">
                <div className="text-[10px] leading-none">GET IT ON</div>
                <div className="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
          </a>
        </div>
        <p className="text-xs text-drip-textTertiary italic mt-4">
          Coming soon on iOS and Android
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-16">
        <Perk emoji="🎁" title="2 Free Credits" description="Start scoring right away" />
        <Perk emoji="🔥" title="AI Style Score" description="4-category analysis" />
        <Perk emoji="🏆" title="Weekly Leaderboard" description="Compete globally" />
      </div>
    </div>
  );
};

const Perk: React.FC<{ emoji: string; title: string; description: string }> = ({
  emoji,
  title,
  description,
}) => (
  <div className="bg-drip-surface border border-drip-border/30 rounded-2xl p-4 md:p-6 text-center">
    <div className="text-3xl md:text-4xl mb-2">{emoji}</div>
    <div className="font-bold text-drip-text text-sm md:text-base mb-1">{title}</div>
    <div className="text-drip-textTertiary text-xs md:text-sm">{description}</div>
  </div>
);
