import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-zinc-900 to-black text-gray-400 py-6 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm font-manrope">
                <p className="mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} Amayas Tamarat. Tous droits réservés.
                </p>
                <div className="flex space-x-6 text-gray-400">
                    <a
                        href="https://github.com/Amayas-Tamarat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1"
                        aria-label="GitHub"
                    >
                        <FiGithub className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/amayas-tamarat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="mailto:amayas.tamarat@gmail.com"
                        className="hover:text-purple-400 transition-colors duration-300 flex items-center space-x-1"
                        aria-label="Contact Email"
                    >
                        <FiMail className="w-5 h-5" />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
