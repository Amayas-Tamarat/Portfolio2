import React, { useEffect, useState, useRef } from 'react';
import Silk from './Noise.jsx';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.jsx';
import DecryptedText from './DecryptedText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [showSilk, setShowSilk] = useState(true);
    const heroRef = useRef(null);

    useEffect(() => {
        setShowSilk(window.innerWidth > 768);
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

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-purple-950 via-red-950 to-black"
        >
            {showSilk && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Silk
                        speed={5}
                        scale={1}
                        color="#380639"
                        noiseIntensity={1.5}
                        rotation={0}
                    />
                </div>
            )}

            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="flex flex-col items-center text-center max-w-3xl">
                    <h1 className="text-white text-5xl sm:text-7xl font-bold mb-6 font-playfair">
                        Amayas TAMARAT
                    </h1>

                    <DecryptedText
                        text="Web Developer FullStack"
                        speed={40}
                        sequential
                        revealDirection="start"
                        className="text-white text-lg sm:text-2xl font-manrope"
                        encryptedClassName="text-purple-500"
                        animateOn="view"
                    />

                    <p className="text-white text-sm sm:text-base mt-4 font-manrope max-w-xl">
                        Innovative FullStack Developer passionate about creating solutions.
                        Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.
                    </p>

                    <div className="mt-10 flex gap-6">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition">
                            Download CV
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-indigo-600 font-semibold py-3 px-6 rounded-md transition">
                            View Projects
                        </button>
                    </div>

                    <div className="mt-10">
                        <ToggleSwitch enabled={showSilk} onToggle={() => setShowSilk(!showSilk)} />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 flex justify-center w-full animate-bounce">
                <button
                    onClick={handleScrollToAbout}
                    className="text-white font-manrope text-sm sm:text-base hover:opacity-80 transition"
                >
                    ↓ Scroll Down
                </button>
            </div>
        </section>
    );
};

export default Hero;
