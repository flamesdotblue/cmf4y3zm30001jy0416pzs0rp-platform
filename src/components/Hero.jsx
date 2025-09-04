import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur">AlgoUniversity Presents</span>
        <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          AlgoUniversity Hiring Tournament
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-white/80">Learn. Code. Get Hired.</p>
        <p className="mt-2 text-sm sm:text-base text-white/70">21st September · Online · Limited seats</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#tickets" className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition shadow-lg shadow-violet-700/30">Buy Ticket</a>
          <a href="#steps" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition">How it works</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
            <p className="text-2xl font-bold">1 Day</p>
            <p className="text-xs text-white/70">Intensive sprint</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
            <p className="text-2xl font-bold">4 Steps</p>
            <p className="text-xs text-white/70">End-to-end funnel</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
            <p className="text-2xl font-bold">20+ Cos</p>
            <p className="text-xs text-white/70">Hiring partners</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur">
            <p className="text-2xl font-bold">Mentors</p>
            <p className="text-xs text-white/70">Top industry vets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
