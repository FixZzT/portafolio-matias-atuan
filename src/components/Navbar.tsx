import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { NAV_LINKS } from '../lib/data';
import { cn } from '../lib/utils';

export function Navbar() {
  const scrollY = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 rounded-2xl",
          isScrolled ? "glass-panel px-6 py-3 shadow-2xl" : "px-2"
        )}>
          {/* Logo */}
          <a href="#inicio" onClick={handleLinkClick} className="flex items-center gap-3 group">
            <span className="font-display font-bold text-2xl tracking-tighter text-text-main group-hover:text-primary transition-colors">
              M.<span className="text-secondary">A</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] font-mono text-text-muted hover:text-text-main transition-colors uppercase tracking-widest font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-main"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl overflow-hidden p-6 md:hidden flex flex-col gap-6 shadow-2xl border border-primary/20"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-heading font-bold text-text-main hover:text-primary transition-colors border-b border-primary/20 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
