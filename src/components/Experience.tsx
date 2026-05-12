import { motion } from 'motion/react';
import { EXPERIENCE } from '../lib/data';

export function Experience() {
  return (
    <section id="experiencia" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-[10px] font-mono text-secondary uppercase font-bold tracking-widest mb-4">Trayectoria</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main">Mi Experiencia</h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 border-dashed">
          {EXPERIENCE.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="mb-16 pl-8 md:pl-12 relative group"
            >
              {/* Point */}
              <div className="absolute size-4 bg-bg-base border-2 border-primary rounded-full -left-[8px] top-2 group-hover:scale-150 transition-transform duration-300 group-hover:bg-primary shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              
               <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-text-main">{item.title}</h4>
                <span className="text-xs font-mono text-primary uppercase font-bold tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{item.period}</span>
              </div>
              
              <h5 className="text-lg text-text-muted mb-6 font-mono">{item.organization}</h5>
              <div className="glass-panel p-6 rounded-2xl border-white/5 border group-hover:border-primary/20 transition-colors">
                <p className="text-text-muted leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
