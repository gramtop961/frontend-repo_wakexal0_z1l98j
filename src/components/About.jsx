import { motion } from 'framer-motion';
import { Code2, Braces, Atom, Server, GitBranch, Layout } from 'lucide-react';

const tech = [
  { name: 'Semantic HTML', icon: Code2 },
  { name: 'CSS / Tailwind', icon: Layout },
  { name: 'JavaScript (ESNext)', icon: Braces },
  { name: 'React', icon: Atom },
  { name: 'APIs / Backend', icon: Server },
  { name: 'Git & Workflow', icon: GitBranch },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_50%_at_20%_10%,rgba(0,255,255,0.06),transparent),radial-gradient(40%_50%_at_80%_90%,rgba(255,0,128,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
                  alt="Me"
                  className="w-full h-full object-cover will-change-transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I’m a web developer passionate about crafting refined, performant interfaces. My work blends minimal design, strong typography, and delightful micro‑interactions.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tech.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center hover:border-cyan-400/30"
                >
                  <Icon className="mx-auto h-7 w-7 text-cyan-300 group-hover:scale-110 transition-transform" />
                  <div className="mt-2 text-sm text-zinc-200/90">{name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
