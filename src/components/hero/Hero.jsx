import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Split background */}
            <div className="absolute inset-0 grid grid-rows-2">
                <div className="bg-black"></div>
                <div className="bg-white"></div>
            </div>

            {/* Split color text */}
            <h1 className="relative text-7xl md:text-9xl font-bold text-transparent bg-clip-text"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, white 50%, black 50%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Loren's Portfolio
            </h1>
        </section>
    );
};

export default Hero;
