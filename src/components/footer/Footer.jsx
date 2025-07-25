import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-zinc-900 to-black text-gray-400 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm font-manrope">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-purple-400 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
