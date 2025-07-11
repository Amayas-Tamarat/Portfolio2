import React, { useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';

const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 transition-transform duration-500 bg-white ${
                scrollDirection === 'down' && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <div className="text-xs uppercase tracking-widest">
                <span className="block md:hidden text-2xl font-serif uppercase">Loren</span>
                <span className="hidden md:block">test, Test</span>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-serif uppercase hidden md:block">
                Loren
            </div>

            <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest">
                <a href="#projects" className="hover:text-gray-600 transition">Projects</a>
                <a href="#about" className="hover:text-gray-600 transition">About</a>
                <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
            </div>

            <div className="md:hidden">
                <button
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                    className="relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                >
          <span
              className={`block absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-2'
              }`}
          ></span>
                    <span
                        className={`block absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out top-4 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>
                    <span
                        className={`block absolute h-0.5 w-6 bg-black transition duration-300 ease-in-out ${
                            isMenuOpen ? '-rotate-45 top-3' : 'top-6'
                        }`}
                    ></span>
                </button>
            </div>

            <div
                className={`absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden transition-all duration-300 transform origin-top ${
                    isMenuOpen
                        ? 'opacity-100 scale-y-100 pointer-events-auto'
                        : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
            >
                <a href="#projects" className="uppercase text-sm">Projects</a>
                <a href="#about" className="uppercase text-sm">About</a>
                <a href="#contact" className="uppercase text-sm">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
