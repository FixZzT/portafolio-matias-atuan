export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 w-full overflow-hidden mt-12 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-2">
           <span className="font-display font-bold text-xl tracking-tighter text-text-main">
            M.<span className="text-primary">A</span>
          </span>
        </div>

        <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Diseñado y Programado por Matias Atuan.
        </p>

        <div className="flex gap-6 text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
          <a href="https://github.com/matiasatuan" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
          <a href="mailto:matixxxd9@gmail.com" className="hover:text-primary transition-colors">Email</a>
        </div>

      </div>

      <div className="mt-12 flex justify-center w-full select-none opacity-[0.02] pointer-events-none">
        <h1 className="text-[12vw] font-display font-bold text-text-main leading-none tracking-tighter whitespace-nowrap">MATIAS ATUAN</h1>
      </div>
    </footer>
  );
}
