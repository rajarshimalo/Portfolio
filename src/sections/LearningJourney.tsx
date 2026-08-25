import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { learningJourneyData } from '../data/portfolio';

const LearningJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-data-cyan">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">My path through data science and analytics</p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-data-cyan via-data-blue to-data-purple origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {learningJourneyData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-data-cyan/50 transition-all"
                    >
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10"
                  >
                    <div className="relative">
                      {/* Outer Glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-full bg-data-cyan blur-md"
                      />
                      {/* Node */}
                      <div className="relative w-4 h-4 rounded-full bg-data-cyan border-4 border-black" />
                    </div>
                  </motion.div>

                  {/* Empty space for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* End Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: learningJourneyData.length * 0.2, duration: 0.6 }}
            className="relative mt-16 flex justify-start md:justify-center ml-8 md:ml-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-data-purple blur-lg"
              />
              <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-data-cyan to-data-purple border-4 border-black" />
            </div>
            <div className="ml-6 md:ml-8">
              <p className="text-lg font-semibold text-white">Present Day</p>
              <p className="text-gray-400">Building skills & creating impact</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
