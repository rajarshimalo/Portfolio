import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rajarshi Malo</h3>
            <p className="text-gray-400 text-sm">Built with curiosity, code & data.</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rajarshimalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-data-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajarshi-malo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-data-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rajarshimalo749@gmail.com"
              className="text-gray-400 hover:text-data-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© 2026 Rajarshi Malo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
