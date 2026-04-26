import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-4 py-2 rounded-full glass-panel border border-primary/20 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">Disponible para trabajar</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tighter leading-tight font-display font-extrabold text-text-main mb-6"
          >
            Matias<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">Atuan_</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-text-muted max-w-3xl leading-relaxed"
          >
            Ingeniero Informático y Desarrollador de Software especializado en crear experiencias web excepcionales y sistemas robustos.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 w-full sm:w-auto"
          >
            <a 
              href="#proyectos"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-bg-base rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-bg-base transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Ver Proyectos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a href="https://github.com/matiasatuan" target="_blank" rel="noreferrer" className="p-4 rounded-full glass-panel text-text-main hover:text-primary hover:border-primary/50 transition-all flex-[1] sm:flex-none flex justify-center">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="p-4 rounded-full glass-panel text-text-main hover:text-secondary hover:border-secondary/50 transition-all flex-[1] sm:flex-none flex justify-center">
                <Linkedin size={20} />
              </a>
              <a href="mailto:matixxxd9@gmail.com" className="p-4 rounded-full glass-panel text-text-main hover:text-primary hover:border-primary/50 transition-all flex-[1] sm:flex-none flex justify-center">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
