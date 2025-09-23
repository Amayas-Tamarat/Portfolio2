import React, { useState, useRef, useEffect } from 'react';
import projects from '../../constants/projectList.jsx';

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    // Close modal when clicking outside + disable background scroll
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            document.addEventListener('mousedown', handleClickOutside);
            // Disable body scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-zinc-900 to-purple-950 text-white"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    Projets
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer bg-[#1a1a1a] border border-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-purple-700/40 transition-shadow"
                        >
                            {/* Image wrapper with overflow-hidden for zoom effect */}
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-40 object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-purple-400 mb-2 font-manrope">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-3 font-manrope line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-purple-800/30 text-purple-200 text-sm px-3 py-1 rounded-full font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                        <div
                            ref={modalRef}
                            className="bg-[#1a1a1a] border border-purple-600 rounded-2xl p-8 max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
                            >
                                ×
                            </button>

                            <h3 className="text-3xl font-bold text-purple-400 mb-4 font-manrope">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-300 mb-6 font-manrope leading-relaxed">
                                {selectedProject.longDescription || selectedProject.description}
                            </p>

                            {/* Image Gallery */}
                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {selectedProject.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${selectedProject.title} screenshot ${i + 1}`}
                                            className="rounded-lg w-full object-cover"
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-purple-800/30 text-purple-200 text-sm px-3 py-1 rounded-full font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {selectedProject.repo && (
                                    <a
                                        href={selectedProject.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:underline"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Project;
