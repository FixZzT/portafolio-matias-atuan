import { motion } from 'motion/react';
import { Code2, Cpu, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-[10px] font-mono text-secondary uppercase font-bold tracking-widest mb-4">Sobre Mí</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main leading-[1.1] mb-8">
                Construyendo el futuro digital.
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Como estudiante de Ingeniería Informática, me apasiona resolver problemas complejos y traducirlos en soluciones tecnológicas limpias, elegantes y altamente eficientes. 
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Me enorgullece ser un profesional <strong className="text-text-main font-medium">proactivo, adaptable y analítico</strong>. Mi enfoque combina una base teórica sólida con curiosidad práctica, garantizando sistemas que no solo funcionan, sino que escalan y destacan.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            {[
              { icon: Cpu, title: 'Resolución de Problemas', desc: 'Descompongo sistemas complejos en arquitecturas escalables, comprensibles y fáciles de mantener.' },
              { icon: Code2, title: 'Desarrollo Full Stack', desc: 'Desarrollo de extremo a extremo: desde bases de datos optimizadas hasta interfaces de usuario reactivas.' },
              { icon: Rocket, title: 'Proactividad', desc: 'No me limito a escribir código; aporto valor estratégico, ideas frescas e innovación continua.' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel bg-secondary/10 p-8 md:p-10 rounded-[2rem] group hover:bg-secondary/20 border border-secondary/20 transition-colors"
                >
                  <div className="size-14 rounded-2xl bg-bg-elevated/50 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-text-main mb-3">{item.title}</h4>
                  <p className="text-[#94A3B8] leading-relaxed text-sm md:text-base">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
