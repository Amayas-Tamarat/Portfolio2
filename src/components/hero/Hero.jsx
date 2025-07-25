import React, {useEffect, useState, useRef} from 'react';
import Silk from './Noise.jsx';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.jsx';
import DecryptedText from './DecryptedText';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [showSilk, setShowSilk] = useState(true);
    const heroRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setShowSilk(window.innerWidth > 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        gsap.set(heroRef.current, {
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)',
            borderRadius: '0 0 40% 10%',
        });

        gsap.from(heroRef.current, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom center',
                scrub: true,
            },
        });
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-purple-950 via-zinc-900 to-black"
        >
            {showSilk && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Silk speed={5} scale={1} color="#380639" noiseIntensity={1.5} rotation={0}/>
                </div>
            )}

            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col items-center text-center max-w-2xl sm:max-w-3xl">
                    <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif">
                        Amayas TAMARAT
                    </h1>

                    <DecryptedText
                        text="Web Developer FullStack"
                        speed={40}
                        sequential
                        revealDirection="start"
                        className="text-white text-base sm:text-xl lg:text-2xl font-manrope"
                        encryptedClassName="text-purple-500"
                        animateOn="view"
                    />

                    <p className="text-white text-sm sm:text-base lg:text-lg mt-4 font-manrope max-w-xl">
                        Innovative FullStack Developer passionate about creating solutions.
                        Eager to leverage modern technologies to solve real-world problems and contribute to dynamic
                        team environments.
                    </p>

                    <div
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center">
                        <a
                            href="/assets/Amayas_Tamarat_DÉVELOPPEUR_WEB-.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-indigo-600
                             hover:bg-indigo-700 text-white font-semibold
                             py-2 sm:py-3 px-6 rounded-md transition transform
                             hover:scale-105 hover:shadow-lg"
                        >
                            Download CV
                        </a>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="w-full sm:w-auto border border-white text-white
                             hover:bg-white hover:text-indigo-600 font-semibold py-2 sm:py-3 px-6
                              rounded-md transition transform hover:scale-105 hover:shadow-lg"
                        >
                            View Projects
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 sm:mt-10 flex justify-center items-center gap-6">
                        <a
                            href="https://github.com/Amayas-Tamarat"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-purple-400 hover:text-white transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .297a12 12 0 00-3.79
                                 23.41c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18
                                 3.18 0 00-1.33-1.75c-1.09-.74.08-.73.08-.73a2.5 2.5 0 011.82 1.23
                                 2.53 2.53 0 003.45 1 2.53 2.53 0 01.75-1.58c-2.67-.3-5.48-1.33-5.48-5.93a4.64
                                 4.64 0 011.23-3.23 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016
                                 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.18 4.63 4.63 0 011.23
                                 3.23c0 4.61-2.81 5.62-5.49 5.92a2.82 2.82 0 01.81 2.19v3.25c0
                                 .32.21.7.82.58A12 12 0 0012 .297"/>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/amayas-tamarat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-purple-400 hover:text-white transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08
                                 2.85v5.5h-3.56V9h3.42v1.56h.05a3.74 3.74 0 013.36-1.85c3.6 0 4.26 2.37 4.26
                                 5.45v6.3zM5.34 7.43a2.07 2.07 0 11-.03-4.14 2.07 2.07 0 01.03
                                 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77A1.77 1.77 0
                                 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024
                                 22.23V1.77A1.77 1.77 0 0022.23 0z"/>
                            </svg>
                        </a>

                        <a
                            href="mailto:amayas.tamarat@gmail.com"
                            aria-label="Email"
                            className="text-purple-400 hover:text-white transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                                <polyline points="3 7 12 13 21 7"/>
                            </svg>
                        </a>
                    </div>

                    {/* Toggle Switch */}
                    <div className="mt-6 flex justify-center">
                        <ToggleSwitch enabled={showSilk} onToggle={() => setShowSilk(!showSilk)}/>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="absolute bottom-4 sm:bottom-6 flex justify-center w-full animate-bounce z-20">
                <button
                    onClick={() => scrollToSection('about')}
                    className="text-white font-manrope text-base hover:opacity-80 transition"
                >
                    ↓ Scroll Down
                </button>
            </div>
        </section>
    );
};

export default Hero;
