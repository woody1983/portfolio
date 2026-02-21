import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const StatItem = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-sans-black text-white mb-2 tabular-nums">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CountUp to={value} />
            {suffix}
          </motion.span>
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-[var(--color-noir-green)] uppercase tracking-widest text-sm font-bold">{label}</div>
    </div>
  );
};

// Simple counter component
const CountUp = ({ to }: { to: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {to}
    </motion.span>
  );
}

export default function Impact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl mb-24 font-sans-black text-white text-center"
        >
          Chapter IV: <br />
          <span className="text-[var(--color-noir-blue)]">The Impact</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <StatItem value={98.5} suffix="%" label="Model Accuracy" />
          <StatItem value={400} suffix="+" label="Hours Automated" />
          <StatItem value={15} suffix="+" label="Successful Migrations" />
        </div>
      </div>
    </section>
  );
}
