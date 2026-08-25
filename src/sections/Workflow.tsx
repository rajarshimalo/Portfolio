import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { workflowSteps } from '../data/portfolio';

const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I Work with <span className="text-data-cyan">Data</span>
          </h2>
          <p className="text-gray-400 text-lg">My systematic approach to data analysis</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-data-cyan/50 transition-all hover:scale-105">
                {/* Number */}
                <div className="text-6xl font-bold text-data-cyan/20 mb-4 group-hover:text-data-cyan/40 transition-colors">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Visual indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-data-cyan to-data-blue rounded-full mt-6"
                />
              </div>

              {/* Connection line to next step */}
              {index < workflowSteps.length - 1 && index % 3 !== 2 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-data-cyan/30 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 italic">Every dataset tells a story. I help uncover it.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
