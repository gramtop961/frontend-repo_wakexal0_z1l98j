import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SKILLS = [
  { name: 'Frontend (React, Vite, Tailwind)', level: 92 },
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'Backend (Node / FastAPI)', level: 82 },
  { name: 'UI/UX & Motion', level: 86 },
];

export default function Skills() {
  const ref = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [controls]);

  return (
    <section id="skills" ref={ref} className="relative py-24 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_50%_at_80%_10%,rgba(0,255,255,0.06),transparent),radial-gradient(40%_50%_at_20%_90%,rgba(255,0,128,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-zinc-300">Animated progress bars fill when this section enters the viewport.</p>

        <div className="mt-10 grid gap-5">
          {SKILLS.map(({ name, level }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-200">{name}</span>
                <span className="text-cyan-300">{inView ? level : 0}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{ visible: { width: `${level}%` } }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
