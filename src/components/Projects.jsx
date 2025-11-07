import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Neon Commerce',
    type: 'Web App',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    demo: '#',
    source: '#',
  },
  {
    title: 'Orbit UI Kit',
    type: 'UI/UX',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
    demo: '#',
    source: '#',
  },
  {
    title: 'Mobile Tracker',
    type: 'Mobile',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
    demo: '#',
    source: '#',
  },
  {
    title: 'Realtime Dashboard',
    type: 'Web App',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8e6644?q=80&w=1600&auto=format&fit=crop',
    demo: '#',
    source: '#',
  },
];

const FILTERS = ['All', 'Web App', 'Mobile', 'UI/UX'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-24 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-zinc-400">Hover to reveal actions. Filter by category.</p>
          </div>
          <div className="flex items-center gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === f
                    ? 'border-cyan-400/50 bg-cyan-500/10 text-cyan-300'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="text-xs text-zinc-400">{p.type}</p>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center gap-3 pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href={p.demo} className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm text-white shadow-lg hover:bg-cyan-400">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a href={p.source} className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 px-4 py-2 text-sm text-white shadow-lg hover:bg-fuchsia-400">
                    <Code className="h-4 w-4" /> Source
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
