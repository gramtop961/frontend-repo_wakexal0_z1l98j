import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.message) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0b0f]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-2 text-zinc-300">Send a message and I’ll get back to you soon.</p>
            <div className="mt-6 flex items-center gap-3 text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for freelance & full-time roles
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            {sent ? (
              <div className="text-center text-cyan-300 font-medium">Thanks! Your message has been sent.</div>
            ) : (
              <>
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full rounded-lg bg-zinc-900/60 px-4 py-3 text-white outline-none ring-1 transition ${errors.name ? 'ring-rose-400 animate-[shake_0.3s]' : 'ring-white/10 focus:ring-cyan-400/50'}`}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full rounded-lg bg-zinc-900/60 px-4 py-3 text-white outline-none ring-1 transition ${errors.email ? 'ring-rose-400 animate-[shake_0.3s]' : 'ring-white/10 focus:ring-cyan-400/50'}`}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full rounded-lg bg-zinc-900/60 px-4 py-3 text-white outline-none ring-1 transition ${errors.message ? 'ring-rose-400 animate-[shake_0.3s]' : 'ring-white/10 focus:ring-cyan-400/50'}`}
                    placeholder="Tell me about your project..."
                  />
                </Field>
                <motion.button whileTap={{ scale: 0.98 }} type="submit" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg">
                  <Send className="h-4 w-4" /> Send Message
                </motion.button>
              </>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm text-zinc-300">{label}</label>
      {children}
      {error && <div className="mt-1 text-xs text-rose-300">{error}</div>}
    </div>
  );
}
