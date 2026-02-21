import { motion } from 'motion/react';

const stack = [
  { phase: "Ingestion", tools: "Python (Polars), SQL, Real-time API Streams" },
  { phase: "Analysis", tools: "Predictive Modeling, Bayesian Inference, R" },
  { phase: "Visualization", tools: "Tableau, D3.js, Deck.gl (Spatial Data)" },
  { phase: "AI Integration", tools: "LLM-driven Automated Reporting, Vector DBs" },
];

export default function Methodology() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-[#1a1a1a]">
      <div className="max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl mb-16 font-sans-black text-white"
        >
          Chapter II: <br />
          <span className="text-[var(--color-noir-blue)]">The Methodology</span>
        </motion.h2>

        <div className="overflow-hidden border border-[var(--color-noir-muted)] rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-noir-muted)] bg-[var(--color-noir-bg)]">
                <th className="p-6 text-[var(--color-noir-blue)] font-bold uppercase tracking-wider w-1/3">Phase</th>
                <th className="p-6 text-[var(--color-noir-blue)] font-bold uppercase tracking-wider">Tools & Tech</th>
              </tr>
            </thead>
            <tbody>
              {stack.map((item, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-[var(--color-noir-muted)] hover:bg-white/5 transition-colors"
                >
                  <td className="p-6 font-bold text-white border-r border-[var(--color-noir-muted)]">{item.phase}</td>
                  <td className="p-6 text-gray-400 font-mono text-sm md:text-base">{item.tools}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-right text-[var(--color-noir-muted)] text-sm">
          // My Toolkit for the 2026 Landscape
        </div>
      </div>
    </section>
  );
}
