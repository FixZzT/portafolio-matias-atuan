import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white relative bg-bg-base">
      {/* Global Background Glow */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[-10%] left-[-10%] size-[50%] bg-primary/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] size-[50%] bg-secondary/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />
      <main className="flex flex-col gap-32 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
