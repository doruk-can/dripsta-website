import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto w-full text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at 50% 0%, rgba(249,115,22,0.25), transparent 60%)',
          }}
        />

        <div className="mb-10 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden glow-ember transform hover:scale-105 transition-transform duration-300">
            <img
              src="./dripsta-logo.png"
              alt="Dripsta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[0.95] uppercase">
          Rate Your Fit <br />
          <span className="gradient-text">Own The Feed</span>
        </h1>
        <p className="text-lg md:text-xl text-drip-textSecondary max-w-2xl mx-auto mb-4 leading-relaxed">
          Get rated. Get styled. Get seen.
        </p>
        <p className="text-base md:text-lg text-drip-textTertiary max-w-2xl mx-auto mb-12 leading-relaxed">
          Drop your fit. AI scores it out of 100 and tells you where the drip lands and where it
          tanks. Ride the weekly leaderboard. Get seen. The stylist friend who won't sugarcoat — in
          your pocket.
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="transform hover:scale-105 transition-transform duration-200 pointer-events-none opacity-80"
            >
              <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40 shadow-lg">
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
              <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40 shadow-lg">
                <img src="./google-icon.png" alt="Google Play" className="w-7 h-7 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </div>
            </a>
          </div>
          <p className="text-sm text-drip-textTertiary font-medium italic">
            Coming soon on iOS and Android.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-drip-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-drip-textSecondary text-lg">Three taps. Zero fluff.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              number="01"
              title="Upload Your Fit"
              description="Snap it or grab it from your gallery. Pick the vibe — casual, work, date night, streetwear, plus 8 more."
            />
            <StepCard
              number="02"
              title="Get Your Score"
              description="AI reads your fit across four lanes — Style Composition, Occasion Fit, Color Harmony, Trend Relevance. Score out of 100 and the specifics on what to level up."
            />
            <StepCard
              number="03"
              title="Compete & Get Discovered"
              description="Go public. You're on the weekly leaderboard. Stack likes, climb the ranks, drop your score card on Instagram and let them see the drip."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            A fashion-trained eye. <br className="hidden md:block" />
            <span className="gradient-text">Here to sharpen your drip</span>
          </h2>
          <p className="text-drip-textSecondary text-lg mb-10">Download Dripsta.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="pointer-events-none opacity-80">
              <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40">
                <img src="./apple-icon.png" alt="Apple" className="w-8 h-8 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </div>
            </a>
            <a href="#" className="pointer-events-none opacity-80">
              <div className="bg-black text-white rounded-xl px-4 py-2 flex items-center gap-3 w-52 h-14 border border-drip-border/40">
                <img src="./google-icon.png" alt="Google Play" className="w-7 h-7 object-contain" />
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({
  number,
  title,
  description,
}) => (
  <div className="bg-drip-elevated p-8 rounded-2xl border border-drip-border/30 hover:border-drip-primary/50 transition-colors">
    <div className="text-6xl font-black gradient-text mb-4 leading-none">{number}</div>
    <h3 className="text-xl font-bold mb-3 text-drip-text">{title}</h3>
    <p className="text-drip-textSecondary leading-relaxed">{description}</p>
  </div>
);

