import { motion } from 'motion/react';

export default function Epilogue() {
  return (
    <footer className="py-24 px-6 border-t border-[var(--color-noir-muted)] bg-[var(--color-noir-bg)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-sans-black text-white mb-8"
        >
          Ready to see what your data is hiding?
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 text-[var(--color-noir-green)] font-mono">
          <a href="mailto:hi@jiang-data.io" className="hover:text-white transition-colors hover:underline decoration-2 underline-offset-4">
            hi@jiang-data.io
          </a>
          <span className="hidden md:inline text-[var(--color-noir-muted)]">//</span>
          <a href="https://linkedin.com/in/jiang-analyst" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:underline decoration-2 underline-offset-4">
            LinkedIn
          </a>
          <span className="hidden md:inline text-[var(--color-noir-muted)]">//</span>
          <a href="https://github.com/jiang-labs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:underline decoration-2 underline-offset-4">
            GitHub
          </a>
        </div>

        <div className="mt-24 text-[var(--color-noir-muted)] text-xs uppercase tracking-widest">
          © 2026 Jiang Labs. System Status: Online.
        </div>
      </div>
    </footer>
  );
}
