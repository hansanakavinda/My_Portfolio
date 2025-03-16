import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-black/60 backdrop-blur-lg text-white py-6">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Contact Details */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Hansana Kavinda</h3>
          <p className="text-gray-400 text-sm mt-1">
            Data Science Undergraduate | Software Engineer
          </p>
          <div className="mt-3 space-y-2 text-gray-400 text-sm">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
              hansanakavinda7@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-400" />
              +94 77 49 49 345
            </p>
          </div>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-purple-400 text-3xl transition transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-purple-400 text-3xl transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:hansanakavinda7@gmail.com"
             className="text-gray-400 hover:text-purple-400 text-3xl transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Kavinda. All rights reserved.</p>
        </div>
      </div>
    </footer> 
    );
}