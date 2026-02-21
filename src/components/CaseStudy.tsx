import { motion } from 'motion/react';

const projects = [
  {
    title: "The Predictive Pulse",
    category: "Customer Retention",
    conflict: "Retail giant losing 12% of customer base annually due to 'invisible' churn.",
    intervention: "Developed a Bayesian churn prediction model identifying at-risk users 30 days out.",
    resolution: "Recovered $2.4M in ARR with automated retention campaigns.",
    tech: "Python, Scikit-learn, Tableau"
  },
  {
    title: "Supply Chain Synapse",
    category: "Inventory Forecasting",
    conflict: "Global logistics firm facing 18% overstock costs due to erratic demand.",
    intervention: "Implemented a time-series forecasting model (ARIMA + Prophet) incorporating seasonality.",
    resolution: "Reduced warehousing costs by 22% and stockouts by 15%.",
    tech: "R, Prophet, SQL"
  },
  {
    title: "The Fraud Firewall",
    category: "FinTech Security",
    conflict: "Neobank experiencing a spike in sophisticated transaction fraud.",
    intervention: "Built an anomaly detection engine using Isolation Forests and real-time transaction scoring.",
    resolution: "Blocked 99.2% of fraudulent attempts with <0.1% false positives.",
    tech: "Python, TensorFlow, Kafka"
  },
  {
    title: "Marketing Mix Matrix",
    category: "ROI Attribution",
    conflict: "E-commerce brand unable to attribute sales across 12+ ad channels.",
    intervention: "Created a multi-touch attribution model using Markov Chains to assign credit accurately.",
    resolution: "Optimized ad spend efficiency by 30% in Q4.",
    tech: "Python, Pandas, PowerBI"
  }
];

export default function CaseStudy() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden bg-[#151515]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-noir-green)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-noir-blue)]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl w-full relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl mb-16 font-sans-black text-white text-center"
        >
          Chapter III: <br />
          <span className="text-[var(--color-noir-green)]">The Case Studies</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[var(--color-noir-muted)] p-8 rounded-xl bg-[var(--color-noir-bg)] hover:border-[var(--color-noir-green)] transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-noir-green)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--color-noir-blue)] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <div className="text-right text-[var(--color-noir-muted)] text-xs font-mono">
                  0{index + 1}
                </div>
              </div>
              
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <span className="text-[var(--color-noir-muted)] font-mono uppercase text-xs block mb-1">Conflict</span>
                  <p className="text-gray-400">{project.conflict}</p>
                </div>

                <div>
                  <span className="text-[var(--color-noir-muted)] font-mono uppercase text-xs block mb-1">Intervention</span>
                  <p className="text-gray-300">{project.intervention}</p>
                </div>

                <div>
                  <span className="text-[var(--color-noir-muted)] font-mono uppercase text-xs block mb-1">Resolution</span>
                  <p className="text-white font-bold border-l-2 border-[var(--color-noir-green)] pl-3">
                    {project.resolution}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--color-noir-muted)]/30 flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[var(--color-noir-muted)] bg-white/5 px-2 py-1 rounded">
                    {tech}
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
