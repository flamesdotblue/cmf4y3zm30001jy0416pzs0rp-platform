import { Ticket, Trophy, Star, Users } from 'lucide-react';

export default function StatsCTA() {
  return (
    <section id="tickets" className="relative container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold">Proven outcomes, compressed into a day</h2>
          <p className="mt-4 text-white/80">When great teaching meets a clean hiring pipeline, results follow. Join a curated cohort that wants offers, not just certificates.</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Stat value="92%" label="Improved DS/Algo clarity" icon={<Star className="text-yellow-400" />} />
            <Stat value="40+" label="Avg. interview invites/week" icon={<Users className="text-sky-400" />} />
            <Stat value="20+" label="Hiring partners" icon={<Trophy className="text-emerald-400" />} />
            <Stat value="1-day" label="From learning to shortlist" icon={<Ticket className="text-violet-400" />} />
          </div>
        </div>

        <div className="flex justify-center">
          <TicketMock />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, icon }) {
  return (
    <div className="rounded-2xl p-5 bg-white/5 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">{icon}</div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-white/70">{label}</p>
        </div>
      </div>
    </div>
  );
}

function TicketMock() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600/40 via-fuchsia-500/30 to-cyan-400/30 rounded-[28px] blur-xl" />
      <div className="relative rounded-[28px] overflow-hidden bg-[#0c0c11] border border-white/10 shadow-2xl">
        <div className="grid grid-cols-[1fr_auto]">
          <div className="p-6">
            <div className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 inline-flex">Event Ticket</div>
            <h3 className="mt-3 text-2xl font-bold">AlgoUniversity Hiring Tournament</h3>
            <p className="mt-1 text-white/80">Learn. Code. Get Hired.</p>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                <p className="text-xs text-white/60">Date</p>
                <p className="font-semibold">21st September</p>
              </div>
              <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                <p className="text-xs text-white/60">Mode</p>
                <p className="font-semibold">Online</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="#buy" className="flex-1 text-center px-5 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 transition shadow-lg shadow-violet-700/30">Buy Ticket</a>
              <div className="text-right">
                <p className="text-xs text-white/60">Early Bird</p>
                <p className="text-xl font-bold">₹499</p>
              </div>
            </div>
          </div>

          <div className="relative w-28 bg-white/5 border-l border-white/10 flex flex-col items-center justify-between py-6">
            <div className="w-6 h-6 bg-black rounded-full -ml-3 border border-white/10" />
            <div className="w-20 h-20 bg-white rounded-md p-1">
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#000_20%,transparent_21%),radial-gradient(circle_at_70%_30%,#000_20%,transparent_21%),radial-gradient(circle_at_30%_70%,#000_20%,transparent_21%),radial-gradient(circle_at_70%_70%,#000_20%,transparent_21%)]" />
            </div>
            <div className="w-6 h-6 bg-black rounded-full -ml-3 border border-white/10" />
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="mt-4 border-t border-dashed border-white/15 pt-4 flex items-center justify-between text-xs text-white/70">
            <p>Order #AHT-21-EB</p>
            <p>Non-refundable • Transferable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
