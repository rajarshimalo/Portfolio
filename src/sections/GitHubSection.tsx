import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GitHubSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8">
            <Github size={40} className="text-data-cyan" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore My <span className="text-data-cyan">Code</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Check out my repositories, contributions, and open-source work
          </p>

          {/* Contribution-style Heatmap Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-xl bg-white/5 border border-white/10 mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {[...Array(52)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-2">
                  {[...Array(7)].map((_, dayIndex) => {
                    const activity = Math.random();
                    let bgColor = 'bg-white/5';
                    if (activity > 0.7) bgColor = 'bg-data-cyan';
                    else if (activity > 0.5) bgColor = 'bg-data-cyan/60';
                    else if (activity > 0.3) bgColor = 'bg-data-cyan/30';
                    else if (activity > 0.1) bgColor = 'bg-data-cyan/10';

                    return (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                        whileHover={{ scale: 1.5 }}
                        className={`w-3 h-3 rounded-sm ${bgColor} transition-all cursor-pointer`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Contribution activity visualization</p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://github.com/rajarshimalo"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-data-cyan/50 rounded-lg font-semibold transition-all"
          >
            <Github size={24} />
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
