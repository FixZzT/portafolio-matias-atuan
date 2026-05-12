import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../lib/data';
import { useEffect } from 'react';
import { cn } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscape);
      requestAnimationFrame(() => {
        const closeBtn = document.querySelector('[data-modal-close]') as HTMLButtonElement;
        closeBtn?.focus();
      });
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEscape);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-base/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-bg-base rounded-[2rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header / Image Image */}
            <div className="relative h-48 md:h-64 shrink-0 bg-bg-surface">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base to-transparent opacity-90" />
              <button
                data-modal-close
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-text-muted hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-text-main mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-mono text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-bg-surface">
              <div className="space-y-10">
                
                <section>
                  <h4 className="flex items-center gap-3 text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-4">
                    <CheckCircle2 size={16} />
                    Descripción General
                  </h4>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  <section>
                    <h4 className="flex items-center gap-3 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-4">
                      <AlertCircle size={16} />
                      El Problema
                    </h4>
                    <p className="text-text-muted text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </section>
                  <section>
                    <h4 className="flex items-center gap-3 text-xs font-mono font-bold text-text-main uppercase tracking-widest mb-4">
                      <span className="size-1.5 rounded-full bg-secondary" />
                      Arquitectura
                    </h4>
                    <p className="text-text-muted text-base leading-relaxed">
                      {project.architecture}
                    </p>
                  </section>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <section>
                    <h4 className="text-xs font-mono font-bold text-text-main uppercase tracking-widest mb-4">Desafíos Resueltos</h4>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-text-muted text-sm leading-relaxed">{project.challenges}</p>
                    </div>
                  </section>
                  <section>
                    <h4 className="text-xs font-mono font-bold text-text-main uppercase tracking-widest mb-4">Aprendizajes</h4>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-text-muted text-sm leading-relaxed">{project.learnings}</p>
                    </div>
                  </section>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-8 py-4 bg-primary text-bg-base rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-bg-base transition-all shadow-lg hover:shadow-primary/20"
                  >
                    Ver Live <ExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-8 py-4 bg-bg-elevated/80 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-bg-elevated hover:text-primary transition-all border border-white/5"
                  >
                    Repositorio <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
