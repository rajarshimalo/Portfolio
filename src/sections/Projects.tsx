import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-data-cyan">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Case studies & data analysis work</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-data-cyan/50 transition-all p-8 h-full">
                {/* Status badge for upcoming projects */}
                {project.status === 'upcoming' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full">
                      COMING SOON
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-data-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-data-cyan/10 text-data-cyan border border-data-cyan/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Problem & Approach */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Problem</h4>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Approach</h4>
                    <p className="text-gray-300">{project.approach}</p>
                  </div>
                </div>

                {/* Visual Pipeline Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {['Dataset', 'Processing', 'Analysis', 'Visualization'].map((step, i) => (
                    <div key={step} className="flex items-center">
                      <div className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">
                        {step}
                      </div>
                      {i < 3 && (
                        <svg className="w-4 h-4 mx-1" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M7 10H13M13 10L10 7M13 10L10 13"
                            stroke="rgba(6, 182, 212, 0.5)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                {/* Links (disabled for upcoming projects) */}
                {project.status !== 'upcoming' && (
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-data-cyan/50 rounded-lg transition-all">
                      <Github size={18} />
                      <span>View Code</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-data-cyan/10 hover:bg-data-cyan/20 border border-data-cyan/30 rounded-lg transition-all text-data-cyan">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Add more project cards placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 border-dashed p-8 flex items-center justify-center min-h-[400px]"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-data-cyan/10 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">More Projects Coming</h3>
              <p className="text-gray-400">Working on exciting data analysis projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
