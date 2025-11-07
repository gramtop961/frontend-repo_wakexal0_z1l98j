import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0b0f] via-[#0b0d14] to-[#0a0b0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_70%_20%,rgba(0,255,255,0.12),transparent),radial-gradient(35%_55%_at_30%_80%,rgba(255,0,128,0.12),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-36 pb-24 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400">Your Name</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto md:mx-0"
          >
            I build digital experiences — modern, fast, and expressive web apps blending art and engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <button onClick={scrollToWork} className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </button>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-zinc-200 hover:bg-white/10">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 max-w-xl md:max-w-none"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-400/10" />
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
    </section>
  );
}
