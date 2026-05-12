import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-white/5 bg-bg-surface">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tighter text-text-main">
            M.<span className="text-primary">A</span>
          </span>
        </div>

        <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">
          © {year ?? ''} Diseñado y Programado por Matias Atuan.
        </p>

        <div className="flex gap-6 text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
          <a
            href="https://github.com/FixZzT"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/matias-nicolas-atuan-mutis-7165b930b/"
            className="hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:matiasatuan.2018@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Watermark — absoluto para no afectar la altura del footer */}
      <div className="absolute inset-0 flex items-center justify-center select-none opacity-[0.02] pointer-events-none overflow-hidden">
        <h1 className="text-[8vw] font-display font-semibold text-text-main leading-none tracking-tighter whitespace-nowrap">
          MATIAS ATUAN
        </h1>
      </div>
    </footer>
  );
}
