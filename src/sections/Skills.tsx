import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const SkillCard = ({ name, category, index }: { name: string; category: string; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        onMouseEnter={() => setHoveredSkill(name)}
        onMouseLeave={() => setHoveredSkill(null)}
        className="group relative"
      >
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-data-cyan/50 transition-all cursor-pointer hover:scale-105 hover:bg-white/10">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">{name}</span>
            {hoveredSkill === name && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 rounded-full bg-data-cyan animate-pulse"
              />
            )}
          </div>
          <span className="text-sm text-gray-400 mt-2 block">{category}</span>

          {/* Mini visualization on hover */}
          {hoveredSkill === name && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 flex gap-1 items-end h-12"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-1 bg-data-cyan/30 rounded-t"
                  style={{ height: `${Math.random() * 60 + 40}%` }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="text-data-cyan">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg">Interactive skill map — hover to explore</p>
        </motion.div>

        {/* Data Analytics */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-data-blue" />
            Data Analytics
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillsData.dataAnalytics.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>

        {/* Data Science / ML */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-data-cyan" />
            Data Science / Machine Learning
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillsData.dataScience.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-data-purple" />
            Tools
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillsData.tools.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
