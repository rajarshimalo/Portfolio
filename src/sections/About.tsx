import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Filter, BarChart3, LineChart, PieChart, FileText } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pipelineSteps = [
    { icon: Database, label: 'Raw Data', color: 'text-red-400' },
    { icon: Filter, label: 'Cleaning', color: 'text-orange-400' },
    { icon: BarChart3, label: 'Exploration', color: 'text-yellow-400' },
    { icon: LineChart, label: 'Visualization', color: 'text-green-400' },
    { icon: PieChart, label: 'Analysis', color: 'text-blue-400' },
    { icon: FileText, label: 'Insight', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Large Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Curious about data.
              <br />
              <span className="text-data-cyan">Obsessed</span> with understanding it.
            </h2>
          </motion.div>

          {/* Right: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Rajarshi Malo</span>, a Computer Science student exploring the intersection of programming, data analytics, and machine learning.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy taking messy datasets, finding patterns, visualizing them, and turning those patterns into useful insights.
            </p>
          </motion.div>
        </div>

        {/* Data Pipeline Animation */}
        <motion.div
          ref={ref}
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Data Journey</h3>

          <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-4">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className={`p-6 rounded-xl bg-white/5 border border-white/10 hover:border-${step.color.split('-')[1]}-400/50 transition-all hover:scale-110 group`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-sm text-gray-400">{step.label}</span>
                  </motion.div>
                </motion.div>

                {/* Arrow */}
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                    className="hidden md:block mx-2"
                  >
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path
                        d="M0 10H35M35 10L28 3M35 10L28 17"
                        stroke="rgba(6, 182, 212, 0.5)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
