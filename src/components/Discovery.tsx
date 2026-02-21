import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const rawData = `id,timestamp,user_id,event_type,value
39201,1678882910,8821,click,null
39202,1678882911,4421,view,product_A
39203,1678882912,1102,error,500
39204,1678882915,9921,purchase,120.00
39205,1678882918,8821,click,null
39206,1678882920,3321,scroll,50%
39207,1678882922,1102,retry,null
39208,1678882925,5521,view,product_B
39209,1678882930,8821,cart_add,product_A
39210,1678882935,9921,checkout_start,120.00
...`;

export default function Discovery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const blurValue = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.8], [0.2, 0.1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <section ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden py-24">
      {/* Background Code */}
      <motion.div 
        style={{ filter: `blur(${blurValue})`, opacity: opacityValue }}
        className="absolute inset-0 p-8 font-mono text-xs text-[var(--color-noir-green)] leading-loose break-all whitespace-pre-wrap select-none"
      >
        {Array(20).fill(rawData).join('\n')}
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div style={{ opacity: textOpacity }}>
          <h2 className="text-4xl md:text-6xl mb-8 font-sans-black text-white">
            Chapter I: <br />
            <span className="text-[var(--color-noir-green)]">The Discovery</span>
          </h2>
          
          <div className="border-l-2 border-[var(--color-noir-green)] pl-6 space-y-6 text-lg md:text-xl text-gray-300">
            <p>
              The Problem isn't the <span className="text-white font-bold">Lack of Data</span>.
            </p>
            <p>
              It’s the <span className="text-white font-bold">abundance</span> of it. Most companies are "data-rich" but "insight-poor."
            </p>
            <p>
              I bridge this gap by treating every dataset as a mystery waiting to be solved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
