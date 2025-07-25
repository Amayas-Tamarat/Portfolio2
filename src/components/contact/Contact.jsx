import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-start bg-gradient-to-b from-purple-950 via-zinc-900 to-black text-white px-6 sm:px-12 py-24 relative"
        >
            <h2 className="text-5xl sm:text-6xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Me Contacter
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-400 text-center max-w-xl">
                Prêt à donner vie à vos idées ? Créons quelque chose d’exceptionnel ensemble.
            </p>

            <div className="mt-16 bg-[#1a1a1a]/70 backdrop-blur-sm border border-purple-700 rounded-2xl p-10 max-w-xl w-full space-y-10 transition duration-300 transform hover:scale-[1.015] hover:shadow-[0_0_20px_#a855f7]">
                {[
                    {
                        icon: <FiMail className="text-purple-400 w-7 h-7 flex-shrink-0" />,
                        title: 'Email',
                        link: 'mailto:amayas.tamarat@gmail.com',
                        label: 'amayas.tamarat@gmail.com',
                    },
                    {
                        icon: <FiLinkedin className="text-purple-400 w-7 h-7 flex-shrink-0" />,
                        title: 'LinkedIn',
                        link: 'https://www.linkedin.com/in/amayas-tamarat',
                        label: 'amayas-tamarat',
                    },
                    {
                        icon: <FiGithub className="text-purple-400 w-7 h-7 flex-shrink-0" />,
                        title: 'GitHub',
                        link: 'https://github.com/Amayas-Tamarat',
                        label: 'Amayas Tamarat',
                    },
                ].map(({ icon, title, link, label }) => (
                    <a
                        key={title}
                        href={link}
                        target={link.startsWith('http') ? '_blank' : undefined}
                        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 transition-transform duration-300 hover:scale-[1.02] group"
                    >
                        {icon}
                        <div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-1 group-hover:underline">
                                {title}
                            </h3>
                            <p className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300 break-all">
                                {label}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
