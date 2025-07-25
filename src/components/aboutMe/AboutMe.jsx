import React, { useRef, useLayoutEffect } from 'react';
import GlassIcons from '../glassIcon/GlassIcon.jsx';
import { frontendTech, backendTech, devOpsTech } from '../../constants/TechList.jsx';
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
                y: 60,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.from(textRef.current, {
                opacity: 0,
                x: 80,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 75%',
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
            className="min-h-screen py-20 px-6 sm:px-12 bg-gradient-to-t from-purple-950 via-zinc-900 to-black text-white flex items-center overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                <div ref={imageRef} className="flex flex-col items-center space-y-10">
                    <div className="relative group w-full max-w-md hover:scale-105 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 blur-xl opacity-30 group-hover:opacity-50 transition" />
                        <img
                            src={img}
                            alt="Amayas Tamarat"
                            className="relative rounded-2xl w-full object-contain shadow-2xl border-[3px] border-transparent group-hover:border-purple-500 transition"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Amayas-Tamarat&layout=compact&theme=radical"
                            alt="Langages les plus utilisés sur GitHub"
                            className="rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transition duration-300 w-[340px] sm:w-[400px] md:w-[480px] xl:w-[540px] h-auto"
                        />
                    </div>
                </div>
                <div ref={textRef}>
                    <h2 className="text-5xl sm:text-6xl font-bold font-playfair mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        À propos de moi
                    </h2>
                    <p className="text-lg text-gray-300 font-manrope leading-relaxed">
                        Je suis un <span className="text-purple-400">développeur FullStack</span> passionné, spécialisé dans la création d'applications web élégantes, performantes et intuitives. J'adore transformer des idées complexes en expériences simples et fonctionnelles.
                    </p>
                    <p className="mt-4 text-gray-400 font-manrope leading-relaxed">
                        Je m'intéresse particulièrement à l'animation, aux interfaces interactives et à la logique backend optimisée. En dehors du développement, j’aime explorer les nouvelles technologies, concevoir des interfaces, ou approfondir mes connaissances en architecture logicielle.
                    </p>
                    <div className="mt-14 w-full flex flex-col items-center space-y-10">
                        <div className="w-full max-w-xl bg-[#1a1a1a] border border-purple-500 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-purple-400">
                            <h3 className="text-xl font-bold mb-4 text-purple-400">
                                Développement Frontend
                            </h3>
                            <GlassIcons items={frontendTech} />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center">
                            <div className="flex-1 bg-[#1a1a1a] border border-green-500 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-green-400">
                                <h3 className="text-xl font-bold mb-4 text-green-400">
                                    Développement Backend
                                </h3>
                                <GlassIcons items={backendTech} />
                            </div>
                            <div className="flex-1 bg-[#1a1a1a] border border-blue-500 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-blue-400">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">
                                    DevOps & Outils
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
