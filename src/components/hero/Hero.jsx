import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 🔥 Inline Noise component
const Noise = ({
                   patternSize = 250,
                   patternScaleX = 1,
                   patternScaleY = 1,
                   patternRefreshInterval = 2,
                   patternAlpha = 15,
               }) => {
    const grainRef = useRef(null);
    useEffect(() => {
        const canvas = grainRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let frame = 0;
        let animationId;
        const canvasSize = 1024;

        const resize = () => {
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
        };

        const drawGrain = () => {
            const imageData = ctx.createImageData(canvasSize, canvasSize);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = patternAlpha;
            }

            ctx.putImageData(imageData, 0, 0);
        };

        const loop = () => {
            if (frame % patternRefreshInterval === 0) {
                drawGrain();
            }
            frame++;
            animationId = window.requestAnimationFrame(loop);
        };

        window.addEventListener('resize', resize);
        resize();
        loop();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationId);
        };
    }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

    return (
        <canvas
            className="pointer-events-none absolute inset-0 w-full h-full"
            ref={grainRef}
            style={{ imageRendering: 'pixelated' }}
        />
    );
};

const Hero = () => {
    const containerRef = useRef();
    const frontLayerRef = useRef();
    const [showNoise, setShowNoise] = useState(true);

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
            <div className="absolute inset-0 bg-white z-0" />
            <div
                ref={frontLayerRef}
                className="absolute inset-0 bg-black z-10 flex flex-col items-center justify-center overflow-hidden"
            >
                {showNoise && <Noise />}
                <h1 className="text-white text-8xl font-bold mb-4 z-10">SOLID TEXT</h1>
                <button
                    onClick={() => setShowNoise(!showNoise)}
                    className="px-4 py-2 mt-4 bg-white text-black rounded z-10"
                >
                    Toggle Noise
                </button>
            </div>
        </section>
    );
};

export default Hero;
