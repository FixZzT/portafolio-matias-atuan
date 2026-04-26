import { motion } from 'motion/react';
import { SKILLS } from '../lib/data';

export function Skills() {
  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest mb-4">Habilidades Técnicas</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-text-main">Mi Arsenal Tecnológico</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] flex flex-col h-full border border-white/5 hover:border-primary/40 transition-colors"
            >
              <h4 className="text-lg font-heading font-bold text-text-main mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary block"></span>
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 bg-bg-base border border-white/5 rounded-xl text-xs font-mono tracking-wide text-text-muted hover:text-text-main hover:border-primary/20 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
