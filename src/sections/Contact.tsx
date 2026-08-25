import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's turn data into
            <br />
            <span className="text-data-cyan">something useful</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Open to opportunities, collaborations, and conversations about data
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <a
            href="mailto:rajarshimalo749@gmail.com"
            className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-data-cyan/50 hover:bg-white/10 transition-all"
          >
            <Mail className="mx-auto mb-4 text-data-cyan group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-400 break-all">rajarshimalo749@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rajarshimalo"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-data-cyan/50 hover:bg-white/10 transition-all"
          >
            <Github className="mx-auto mb-4 text-data-cyan group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-gray-400">@rajarshimalo</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rajarshi-malo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-data-cyan/50 hover:bg-white/10 transition-all"
          >
            <Linkedin className="mx-auto mb-4 text-data-cyan group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-400">rajarshi-malo</p>
          </a>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:rajarshimalo749@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-data-cyan text-black font-bold text-lg rounded-lg hover:bg-data-cyan/90 transition-all hover:scale-105"
          >
            <Mail size={24} />
            Email Me
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
