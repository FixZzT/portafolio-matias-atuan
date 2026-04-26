import { motion } from 'motion/react';
import { Mail, ArrowRight, Github, Linkedin, MessageSquareCode } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [status, setStatus] = useState('idle');
  const FORMSPREE_ID = "mwvazngj"; 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col gap-12 lg:gap-16">
        
        <div className="w-full">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <MessageSquareCode size={32} className="text-white" />
            </div>
            
            <h2 className="text-[10px] font-mono text-secondary uppercase font-bold tracking-widest mb-4">Siguiente Paso</h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-text-main mb-6 leading-[1.1]">
              Hagamos <br className="md:hidden" /> contacto.
            </h3>
            <p className="text-text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o grandes oportunidades.
            </p>
          </motion.div>
        </div>

        <div className="w-full">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            {/* Subtle inner glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32" />
             
            <form onSubmit={handleSubmit} className="relative z-10 grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Tu Nombre" 
                  required
                  className="w-full bg-[#0B1120]/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary focus:bg-[#0B1120] transition-colors font-mono text-sm shadow-inner"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Tu Email / Empresa" 
                  required
                  className="w-full bg-[#0B1120]/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary focus:bg-[#0B1120] transition-colors font-mono text-sm shadow-inner"
                />
              </div>
              <textarea 
                name="message"
                placeholder="Cuéntame sobre tu proyecto..." 
                required
                rows={5}
                className="w-full bg-[#0B1120]/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary focus:bg-[#0B1120] transition-colors resize-none font-mono text-sm shadow-inner"
              />
              <button 
                disabled={status !== 'idle' && status !== 'error'}
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-primary text-bg-base py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all disabled:opacity-50 mt-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-primary/50"
              >
                {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : status === 'error' ? 'Hubo un error' : 'Enviar Mensaje'}
                {status === 'idle' && <ArrowRight size={16} />}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
