import React from 'react';
import useScrollDirection from '../../hooks/useScrollDirection'
const Navbar = () => {
    const scrollDirection = useScrollDirection();

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 transition-transform duration-500 ${
                scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            {/* Left: Tagline */}
            <div className="text-xs uppercase tracking-widest ">
                test, Test
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-serif uppercase">
                Loren
            </div>

            {/* Right: Nav Links */}
            <div className="flex space-x-8 text-xs uppercase tracking-widest ">
                <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
                <a href="#about" className="hover:text-gray-300 transition">About</a>
                <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
