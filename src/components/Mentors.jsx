export default function Mentors() {
  const mentors = [
    {
      name: 'Manas Kumar Verma',
      title: 'Legendary Instructor · Systems & DSA',
      img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop',
      desc: 'Manas distills years of interview experience into crisp, pattern-first teaching. Known for turning complex topics into muscle memory.'
    },
    {
      name: 'Aisha Rahman',
      title: 'Staff Engineer · Distributed Systems',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      desc: 'Built large-scale infra at unicorns. Coaches candidates to narrate trade-offs with clarity and confidence.'
    },
    {
      name: 'Rohit Nair',
      title: 'Hiring Manager · FinTech',
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
      desc: 'Has led 300+ interviews. Shares rigorous rubrics and how to score high on them with precise communication.'
    },
    {
      name: 'Meera Iyer',
      title: 'Senior ML Engineer · Product AI',
      img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
      desc: 'Brings a product lens to technical interviews—how to align solutions with user and business value.'
    },
  ];

  return (
    <section className="relative container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full border border-white/15 bg-white/5">Mentor Line-up</span>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">World-class mentors, masterclass quality</h2>
        <p className="mt-3 text-white/80">You get premium guidance worthy of a masterclass—focused on getting you hired.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((m, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-500" loading="lazy" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-xs text-violet-300/90">{m.title}</p>
              <p className="mt-2 text-sm text-white/80">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
