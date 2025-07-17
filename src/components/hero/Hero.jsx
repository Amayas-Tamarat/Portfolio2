// components/Hero.jsx

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Silk from './Noise.jsx';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.jsx';
import DecryptedText from './DecryptedText';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef();
    const frontLayerRef = useRef();
    const [showSilk, setShowSilk] = useState(true);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setShowSilk(false);
        }
    }, []);

    useGSAP(() => {
        gsap.set(frontLayerRef.current, { xPercent: 0 });

        gsap.to(frontLayerRef.current, {
            xPercent: 100,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=100%',
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-white z-0" >
            </div>






            {/* Front Layer */}
            <div
                ref={frontLayerRef}
                className="absolute inset-0 bg-black z-10 grid grid-cols-2 items-center px-4 sm:px-12 overflow-hidden"
            >
                {/* Silk background behind everything */}
                {showSilk && (
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
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
                        <h1 className="text-white text-5xl sm:text-7xl font-bold mb-6 font-[Playfair_Display]">
                            Amayas TAMARAT
                        </h1>

                        <h2>
                            <DecryptedText
                                text="Web Developer FullStack"
                                speed={40}
                                sequential={true}
                                revealDirection="start"
                                className="text-white text-lg sm:text-2xl font-[Manrope]"
                                encryptedClassName="text-purple-500"
                                animateOn="view"
                            />
                        </h2>
                        <p className="text-white text-sm sm:text-base mt-4 font-[Manrope] max-w-xl">
                            Innovative FullStack Developer passionate about creating solutions.
                            Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.
                        </p>

                        <div className="mt-10 flex gap-6">
                            <button
                                type="button"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition"
                            >
                                Download CV
                            </button>
                            <button
                                type="button"
                                className="bg-transparent border border-white hover:bg-white hover:text-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition"
                            >
                                View Projects
                            </button>
                        </div>

                        <div className="mt-10">
                            <ToggleSwitch
                                enabled={showSilk}
                                onToggle={() => setShowSilk(!showSilk)}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
