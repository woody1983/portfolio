import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Chapter Label */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-8 left-4 md:left-8 font-mono text-xs text-[var(--color-noir-muted)]"
      >
        CHAPTER_00: THE_OPERATOR
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Personnel File Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-[var(--color-noir-muted)]/30 bg-[var(--color-noir-bg)]/50 p-6 font-mono"
        >
          {/* Card Header */}
          <div className="border-b border-[var(--color-noir-muted)]/30 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-[var(--color-noir-green)] text-sm">PERSONNEL_FILE</span>
              <span className="text-[var(--color-noir-muted)] text-xs">ID: JX-1983-DA</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="aspect-square bg-[var(--color-noir-muted)]/10 border border-[var(--color-noir-muted)]/30 flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-[var(--color-noir-muted)] text-4xl mb-2">[IMG_NOT_FOUND]</div>
              <div className="text-[var(--color-noir-muted)] text-xs">CLASS: SR_ANALYST</div>
            </div>
          </div>

          {/* Status Info */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[var(--color-noir-muted)]">STATUS:</span>
              <span className="text-[var(--color-noir-green)]">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-noir-muted)]">CLEARANCE:</span>
              <span className="text-[var(--color-noir-text)]">LEVEL_3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-noir-muted)]">SPECIALIZATION:</span>
              <span className="text-[var(--color-noir-text)]">DATA_STRATEGY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-noir-muted)]">LOCATION:</span>
              <span className="text-[var(--color-noir-text)]">REMOTE</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-4 pt-4 border-t border-[var(--color-noir-muted)]/30">
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-1 w-3 bg-[var(--color-noir-green)]/30"
                  style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Narrative Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-sans-black text-white">
            From Builder to Strategist
          </h2>

          <div className="space-y-4 text-[var(--color-noir-text)] leading-relaxed">
            <p>
              Every data analyst has an origin story. Mine began in the trenches of 
              <span className="text-[var(--color-noir-green)]">Database Administration</span> — 
              the unglamorous but essential work of keeping the digital infrastructure alive.
            </p>

            <p>
              For years, I was the Builder: optimizing queries, designing schemas, ensuring 
              zero-downtime migrations. I learned how data flows, where it breaks, and how 
              to fix it before anyone notices. But I began to see a pattern — 
              <span className="text-[var(--color-noir-blue)]">technical excellence alone doesn't drive decisions</span>.
            </p>

            <p>
              The real power lies in 
              <span className="text-[var(--color-noir-green)]">translation</span>: 
              converting raw metrics into narratives that executives understand, 
              finding the signal in the noise that changes strategy. I evolved from 
              maintaining systems to 
              <span className="text-[var(--color-noir-blue)]">interpreting them</span>.
            </p>

            <p className="text-[var(--color-noir-muted)] italic border-l-2 border-[var(--color-noir-green)] pl-4">
              "The best analysts don't just answer questions. They reveal the questions 
              that should have been asked all along."
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-noir-muted)]/30">
            <div>
              <div className="text-2xl font-sans-black text-[var(--color-noir-green)]">10+</div>
              <div className="text-xs text-[var(--color-noir-muted)] font-mono">YEARS_EXP</div>
            </div>
            <div>
              <div className="text-2xl font-sans-black text-[var(--color-noir-green)]">50+</div>
              <div className="text-xs text-[var(--color-noir-muted)] font-mono">PROJECTS</div>
            </div>
            <div>
              <div className="text-2xl font-sans-black text-[var(--color-noir-green)]">∞</div>
              <div className="text-xs text-[var(--color-noir-muted)] font-mono">INSIGHTS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
