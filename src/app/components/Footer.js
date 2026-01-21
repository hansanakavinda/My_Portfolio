import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-lg text-white py-6">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Brand & Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Hansana Kavinda
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Data Science Undergraduate bridging the gap between Web Development and AI.
          </p>
          <div className="space-y-2 text-gray-400 text-sm">
            <a href="mailto:hansanakavinda7@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
              hansanakavinda7@gmail.com
            </a>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-400" />
              +94 77 49 49 345
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials & Copyright */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/hansanakavinda" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition hover:scale-110">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/hansanakavinda/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] text-2xl transition hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:hansanakavinda7@gmail.com"
              className="text-gray-400 hover:text-red-400 text-2xl transition hover:scale-110">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Hansana Kavinda. <br />All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}