import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="max-w-4xl z-10 pt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl uppercase tracking-tighter mb-4 text-white font-sans-black"
        >
          JIANG
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-lg md:text-xl text-[var(--color-noir-green)]"
        >
          <span>Data Analyst</span>
          <span className="text-[var(--color-noir-muted)]">//</span>
          <span>Turning Chaos into Clarity</span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-6 bg-[var(--color-noir-green)] inline-block ml-1"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-[var(--color-noir-muted)] max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          “In a world of 2.5 quintillion bytes of daily noise, I find the signal that drives growth.”
        </motion.p>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </section>
  );
}
