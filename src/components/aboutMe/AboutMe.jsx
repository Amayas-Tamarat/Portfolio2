import React, { useRef, useLayoutEffect } from 'react';
import GlassIcons from '../glassIcon/GlassIcon.jsx';
import {
    frontendTech,
    backendTech,
    devOpsTech,
} from '../../constants/TechList.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../assets/71AEO5.png';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.from(textRef.current, {
                opacity: 0,
                x: 70,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen  text-white py-20 px-6 sm:px-12 flex items-center bg-gradient-to-t from-purple-950 via-zinc-900 to-black overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                {/* Left: Image */}
                <div ref={imageRef} className="flex justify-center">
                    <div className="relative group w-full max-w-md">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                        <img
                            src={img}
                            alt="Amayas Tamarat"
                            className="relative rounded-2xl w-full object-contain shadow-2xl border-[3px] border-transparent group-hover:border-purple-500 transition duration-500"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div ref={textRef}>
                    <h2 className="text-5xl sm:text-6xl font-bold font-playfair mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        About Me
                    </h2>

                    <p className="text-lg text-gray-300 font-manrope leading-relaxed">
                        I’m a passionate <span className="text-purple-400">FullStack Developer</span> with a knack for crafting elegant and performant web applications. Whether it’s on the frontend or backend, I love turning complex challenges into smooth, intuitive experiences.
                    </p>

                    <p className="mt-4 text-gray-400 font-manrope">
                        I’m obsessed with animation, design systems, and efficient backend logic. When I’m not coding, I’m exploring tech, sketching UI ideas, or learning something new in the world of dev.
                    </p>

                    {/* Tech Stack Section */}
                    <div className="mt-14 w-full flex flex-col items-center space-y-8">
                        {/* Top: Frontend */}
                        <div className="w-full max-w-xl bg-[#1a1a1a] border border-purple-500 rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-purple-400">
                                Frontend Development
                            </h3>
                            <GlassIcons items={frontendTech} />
                        </div>

                        {/* Bottom: Backend & DevOps */}
                        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center">
                            {/* Backend */}
                            <div className="flex-1 bg-[#1a1a1a] border border-green-500 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-green-400">
                                    Backend Development
                                </h3>
                                <GlassIcons items={backendTech} />
                            </div>

                            {/* DevOps */}
                            <div className="flex-1 bg-[#1a1a1a] border border-blue-500 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">
                                    DevOps & Tools
                                </h3>
                                <GlassIcons items={devOpsTech} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
