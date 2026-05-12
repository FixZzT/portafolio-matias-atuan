import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, Project } from '../lib/data';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

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

        <div className="flex flex-col gap-12 md:gap-24">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group glass-panel rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-4 md:p-8 items-center">
                
                {/* Content */}
                <div className={`flex flex-col justify-center py-4 px-2 md:px-8 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] font-mono text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full uppercase font-bold tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-text-main mb-6 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex justify-center items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-bg-base transition-all shadow-lg hover:shadow-secondary/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    ) : (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 sm:flex-none flex justify-center items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-bg-base transition-all shadow-lg hover:shadow-secondary/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      >
                        Caso de Estudio <ExternalLink size={16} />
                      </button>
                    )}
                    
                    {project.githubUrl ? (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex justify-center items-center gap-3 px-8 py-4 bg-bg-elevated/80 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-bg-elevated hover:text-primary transition-all border border-white/5"
                      >
                         Código <Github size={16} />
                      </a>
                    ) : (
                       <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 sm:flex-none flex justify-center items-center gap-3 px-8 py-4 bg-bg-elevated/80 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-bg-elevated hover:text-primary transition-all border border-white/5"
                      >
                        Detalles <ExternalLink size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Image Container */}
                <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-bg-base border border-white/5 order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 shadow-xl">
                      {project.status}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
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
