
import { Cpu, Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Society Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-xl text-white">FoTDU Robotics</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The Robotics and Embedded Systems Society at Faculty of Technology, Delhi University. 
              Building the future through innovation, collaboration, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-cyan-400 transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-cyan-400 transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Join Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Robotics & Embedded Systems Society, Faculty of Technology, Delhi University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
