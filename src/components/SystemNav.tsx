import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function SystemNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--color-noir-bg)]/80 backdrop-blur-md border-b border-[var(--color-noir-green)]/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* System Status Line */}
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[var(--color-noir-green)]">JIANG_SYSTEMS</span>
            <span className="text-[var(--color-noir-muted)]">//</span>
            <span className="text-[var(--color-noir-blue)]">V2.6</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-[var(--color-noir-green)] rounded-full ml-2"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 font-mono text-sm">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[var(--color-noir-text)] hover:text-[var(--color-noir-green)] transition-colors duration-200"
            >
              [HOME]
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[var(--color-noir-text)] hover:text-[var(--color-noir-green)] transition-colors duration-200"
            >
              [PROFILE]
            </button>
            <button 
              onClick={() => scrollToSection('discovery')}
              className="text-[var(--color-noir-text)] hover:text-[var(--color-noir-green)] transition-colors duration-200"
            >
              [CASES]
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
