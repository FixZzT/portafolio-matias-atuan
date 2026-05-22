import { motion } from 'motion/react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { PROJECTS, Project, ProjectStatus } from '../lib/data';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

const statusStyles: Record<ProjectStatus, { badge: string; card?: string }> = {
  Activo: {
    badge: 'text-primary border-primary/20 bg-primary/5',
  },
  'En Desarrollo': {
    badge: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
  },
  Privado: {
    badge: 'text-gray-400 border-gray-400/20 bg-gray-400/5',
    card: 'opacity-75',
  },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 lg:flex justify-between items-end"
        >
          <div>
            <h2 className="text-[10px] font-mono text-secondary uppercase font-bold tracking-widest mb-4">Portafolio</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-text-main leading-tight">Proyectos</h3>
          </div>
          <p className="text-text-muted max-w-md mt-6 lg:mt-0 text-base md:text-lg">
            Proyectos reales que demuestran mi capacidad para arquitectar, desarrollar y entregar soluciones completas de alto valor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => {
            const style = statusStyles[project.status];

            return (
              <motion.div
                key={project.id}
                data-project-card
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group/card glass-panel rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col ${style.card ?? ''}`}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-bg-base border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest border shadow-xl ${style.badge}`}>
                      {project.status === 'Privado' ? (
                        <span className="flex items-center gap-1">
                          <Lock size={10} /> Privado
                        </span>
                      ) : (
                        project.status
                      )}
                    </span>
                    {project.status === 'En Desarrollo' && (
                      <span className="relative flex size-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex rounded-full size-2 bg-amber-500" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[9px] font-mono text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[9px] font-mono text-text-muted border border-white/5 bg-white/[0.02] px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-display font-semibold text-text-main mb-2 group-hover/card:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2.5 bg-secondary text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-primary hover:text-bg-base transition-all shadow-lg hover:shadow-secondary/30"
                    >
                      Información <ExternalLink size={13} />
                    </button>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-1.5 px-3 py-2.5 bg-bg-elevated/80 text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-bg-elevated hover:text-primary transition-all border border-white/5"
                      >
                        Demo <ExternalLink size={12} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-1.5 px-3 py-2.5 bg-bg-elevated/80 text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-bg-elevated hover:text-primary transition-all border border-white/5"
                      >
                        <Github size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
