const AboutMe = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-black text-white py-20 px-6 sm:px-12 flex items-center"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Left: Image or illustration */}
                <div className="flex justify-center">
                    <img
                        src="/your-image.jpg"
                        alt="Amayas Tamarat Portrait"
                        className="rounded-2xl w-72 h-72 object-cover shadow-lg"
                    />
                </div>

                {/* Right: Content */}
                <div>
                    <h2 className="text-4xl font-bold font-playfair mb-4">About Me</h2>
                    <p className="text-lg text-gray-300 font-manrope leading-relaxed">
                        I'm a passionate FullStack Developer with a knack for building elegant,
                        performant web applications. With experience across both frontend and backend
                        stacks, I enjoy turning complex problems into intuitive user experiences.
                    </p>

                    <p className="mt-4 text-gray-400">
                        My interests include web animation, UI/UX design, and building scalable backend
                        APIs. When I'm not coding, you'll find me exploring tech blogs or sketching ideas.
                    </p>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2 text-purple-400">Tech Stack</h3>
                        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                            <li className="bg-gray-800 px-3 py-1 rounded-full">React</li>
                            <li className="bg-gray-800 px-3 py-1 rounded-full">Node.js</li>
                            <li className="bg-gray-800 px-3 py-1 rounded-full">TailwindCSS</li>
                            <li className="bg-gray-800 px-3 py-1 rounded-full">MongoDB</li>
                            <li className="bg-gray-800 px-3 py-1 rounded-full">Express</li>
                            <li className="bg-gray-800 px-3 py-1 rounded-full">GSAP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
