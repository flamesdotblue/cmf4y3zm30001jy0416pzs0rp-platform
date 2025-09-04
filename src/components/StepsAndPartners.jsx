import { Rocket, CheckCircle2, Users, Briefcase } from 'lucide-react';

function StepCard({ step, title, description, tag, color, mockup }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 overflow-hidden">
      <div className="absolute inset-x-0 -top-40 h-64 blur-3xl opacity-30" style={{ background: `radial-gradient(500px 200px at 50% 50%, ${color}, transparent)` }} />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-white/70">Step {step}</span>
          <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10">{tag}</span>
        </div>
        <h3 className="mt-3 text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{description}</p>
        <div className="mt-6">
          {mockup}
        </div>
      </div>
    </div>
  );
}

function ScreenMock({ title, points, accent = '#8b5cf6' }) {
  return (
    <div className="rounded-2xl bg-black/60 border border-white/10 shadow-inner overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <p className="ml-3 text-xs text-white/70">{title}</p>
      </div>
      <div className="p-4 grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: accent }} />
              <span className="text-white/85">{p}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-4">
          <div className="h-28 sm:h-32 rounded-lg bg-[conic-gradient(at_30%_30%,theme(colors.violet.500),transparent_40%)]" />
          <p className="mt-3 text-xs text-white/60">Visual preview</p>
        </div>
      </div>
    </div>
  );
}

export default function StepsAndPartners() {
  return (
    <section id="steps" className="relative container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5">4-Step Funnel</span>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">Your path to getting hired</h2>
        <p className="mt-3 text-white/80">Starting 21st September - we compress learning, assessment, and hiring into one powerful day.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <StepCard
          step={1}
          tag="Live Class"
          title="Secret Topic Masterclass by Manas Kumar Verma"
          description="Begin with a high-voltage live session on a carefully chosen topic that top interviews love. Learn key patterns, intuition, and the exact way to communicate solutions."
          color="rgba(139,92,246,0.6)"
          mockup={
            <ScreenMock
              title="Legendary Live Class"
              points={[
                'Topic revealed live — stay sharp',
                'Pattern-first clarity + code walkthrough',
                'Interview framing and trade-offs',
              ]}
              accent="#8b5cf6"
            />
          }
        />

        <StepCard
          step={2}
          tag="Online Assessment"
          title="Hands-on assessment on the same topic"
          description="Apply the learning immediately. Timed, focused challenges designed to measure depth, not trivia."
          color="rgba(16,185,129,0.55)"
          mockup={
            <ScreenMock
              title="Assessment Arena"
              points={['Realistic time-boxed rounds', 'Auto-scored + human-reviewed', 'Scorecards you can share']}
              accent="#10b981"
            />
          }
        />

        <StepCard
          step={3}
          tag="Mentor/HR Pairing"
          title="Get paired with mentors and HRs from hiring partners"
          description="Your performance routes you to the right people. Receive feedback, guidance, and shortlisting for roles that fit."
          color="rgba(59,130,246,0.55)"
          mockup={
            <ScreenMock
              title="Shortlist Engine"
              points={['1:1 mentor nudge to polish', 'HR alignment on role fit', 'Fast-track to interview loops']}
              accent="#3b82f6"
            />
          }
        />

        <StepCard
          step={4}
          tag="Interviews"
          title="Interview. Convert. Get the offer."
          description="Tight loops, real interviewers, and accelerated hiring windows. Show up with momentum—leave with an offer."
          color="rgba(244,63,94,0.6)"
          mockup={
            <div className="rounded-2xl bg-black/60 border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="text-rose-400" />
                <p className="text-sm text-white/80">Final loops with partner companies</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl h-24 bg-[radial-gradient(circle_at_30%_20%,#f43f5e,transparent_60%)] border border-white/10" />
                <div className="rounded-xl h-24 bg-[radial-gradient(circle_at_70%_80%,#fb7185,transparent_60%)] border border-white/10" />
              </div>
              <p className="mt-3 text-xs text-white/60">Offer-ready in days, not months</p>
            </div>
          }
        />
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5">
          <Users className="w-4 h-4" />
          Hiring Partners
        </div>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">Companies joining the tournament</h3>
      </div>

      <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <Marquee />
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#tickets" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition shadow-lg shadow-violet-700/30">
          <Rocket className="w-4 h-4" />
          Secure your spot
        </a>
      </div>
    </section>
  );
}

function Marquee() {
  const logos = [
    // A curated list of tech brand logos (public brandlogos.net files)
    'https://brandlogos.net/wp-content/uploads/2022/05/google-logo_brandlogos.net_il1im.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/amazon-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/microsoft-logo_brandlogos.net_yz5ch.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/netflix-n-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/uber-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/airbnb-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/dropbox-icon-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/stripe-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/twitch-logo-brandlogos.net_-512x512.png',
    'https://brandlogos.net/wp-content/uploads/2021/12/slack-logo-brandlogos.net_-512x512.png',
  ];

  const row = [...logos, ...logos, ...logos];

  return (
    <div className="relative">
      <style>{`
        @keyframes scrollMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <div className="flex items-center gap-10 py-6" style={{ width: '200%', animation: 'scrollMarquee 25s linear infinite' }}>
        {row.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Hiring partner logo"
            className="h-10 sm:h-12 object-contain opacity-80 hover:opacity-100 transition"
            loading="lazy"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
