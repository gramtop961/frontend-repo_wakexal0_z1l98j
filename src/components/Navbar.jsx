import { useEffect, useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled
    ? 'backdrop-blur-md bg-zinc-900/70 border border-white/10 shadow-xl'
    : 'bg-transparent';

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-zinc-200/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${navClass}`}>
      <nav className="mx-auto max-w-6xl px-4">        
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 ring-1 ring-cyan-500/40">
              <Rocket className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="font-semibold tracking-wide">MyPortfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <LinkItem href="#work" label="Work" />
            <LinkItem href="#about" label="About" />
            <LinkItem href="#contact" label="Contact" />
            <div className="mx-3 h-6 w-px bg-white/10" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20">
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <LinkItem href="#work" label="Work" />
            <LinkItem href="#about" label="About" />
            <LinkItem href="#contact" label="Contact" />
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-zinc-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
