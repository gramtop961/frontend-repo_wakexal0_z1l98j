import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
      <div id="scroll-progress" className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500" style={{ width: '0%' }} />
    </div>
  );
}

function Cursor() {
  return <div id="cursor" className="pointer-events-none fixed left-0 top-0 z-[70] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 bg-cyan-400/10 backdrop-blur-md" />;
}

function App() {
  const uiEnhancementsScript = `
    (function(){
      var cursor = document.getElementById('cursor');
      var prog = document.getElementById('scroll-progress');
      window.addEventListener('mousemove', function(e){
        if (cursor) {
          cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        }
      });
      function upd(){
        if (prog) {
          var sTop = document.documentElement.scrollTop || document.body.scrollTop;
          var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var p = h > 0 ? (sTop / h) * 100 : 0;
          prog.style.width = p + '%';
        }
        requestAnimationFrame(upd);
      }
      requestAnimationFrame(upd);
      Array.prototype.slice.call(document.querySelectorAll('a, button')).forEach(function(el){
        el.addEventListener('mouseenter', function(){ if (cursor) { cursor.style.transform += ' scale(1.4)'; } });
        el.addEventListener('mouseleave', function(){ if (cursor) { cursor.style.transform = cursor.style.transform.replace(' scale(1.4)', ''); } });
      });
    })();
  `;

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0a0b0f] py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Your Name — Built with React, Tailwind, and Framer Motion
      </footer>

      <script dangerouslySetInnerHTML={{ __html: uiEnhancementsScript }} />
    </div>
  );
}

export default App;
