// components/Hero.jsx

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Silk from './Noise.jsx'; // Adjust if needed
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.jsx'; // ✅ New import

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
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-white z-0" />

            {/* FRONT LAYER */}
            <div
                ref={frontLayerRef}
                className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center overflow-hidden"
            >
                {showSilk && (
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <Silk
                            speed={5}
                            scale={1}
                            color="#380639"
                            noiseIntensity={1.5}
                            rotation={0}
                        />
                    </div>
                )}
                <h1 className="text-white text-8xl font-bold mb-4 z-10"> TEXT</h1>
                <ToggleSwitch
                    enabled={showSilk}
                    onToggle={() => setShowSilk(!showSilk)}
                />
            </div>
        </section>
    );
};

export default Hero;
