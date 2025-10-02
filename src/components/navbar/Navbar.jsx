import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MENU_ITEMS = [
    { id: '#hero', label: 'Accueil' },
    { id: '#about', label: 'À propos' },
    { id: '#projects', label: 'Projets' },
    { id: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleClickOutside = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (!navRef.current) return;

        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                if (self.direction === 1) {
                    // Scrolling down → hide nav
                    gsap.to(navRef.current, {
                        y: -100,
                        duration: 0.4,
                        ease: "power1.out"
                    });
                } else {
                    // Scrolling up → show nav
                    gsap.to(navRef.current, {
                        y: 0,
                        duration: 0.4,
                        ease: "power1.out"
                    });
                }
            }
        });
    }, []);

    const scrollToSection = (id) => (e) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const renderLinks = (isMobile = false) =>
        MENU_ITEMS.map(({ id, label }) => (
            <a
                key={id}
                href={id}
                onClick={scrollToSection(id)}
                className={
                    isMobile
                        ? 'uppercase text-sm tracking-wide text-purple-300 hover:text-white transition-colors duration-200'
                        : 'hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 ' +
                        'after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left ' +
                        'hover:after:scale-x-100 after:transition-transform'
                }
            >
                {label}
            </a>
        ));

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-transparent"
        >
            <div className="flex items-center">
                <img src="/assets/Fichier_3.png" alt="Logo" className="h-12 sm:h-16 object-contain" />
            </div>

            <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-outline">
                {renderLinks(false)}
            </div>

            <div className="md:hidden" ref={buttonRef}>
                <button
                    aria-label="Ouvrir le menu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                    className="relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                >
                    <span
                        className={`block absolute h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
                            isMenuOpen ? 'rotate-45 top-3' : 'top-2'
                        }`}
                    />
                    <span
                        className={`block absolute h-0.5 w-6 bg-white transition duration-300 ease-in-out top-4 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`block absolute h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
                            isMenuOpen ? '-rotate-45 top-3' : 'top-6'
                        }`}
                    />
                </button>
            </div>

            <div
                ref={menuRef}
                className={`absolute top-full right-0 w-1/2 rounded-l-3xl mr-4 bg-gradient-to-b
                            from-black via-zinc-900 to-purple-950 backdrop-blur-md flex flex-col items-center
                             space-y-6 py-6 px-4 shadow-xl border-2 border-solid border-fuchsia-600 md:hidden
                             transition-all duration-500 ease-out transform
                    ${
                    isMenuOpen
                        ? 'opacity-100 translate-x-0 pointer-events-auto'
                        : 'opacity-0 translate-x-full pointer-events-none'
                }
                          `}
            >
                {renderLinks(true)}
            </div>
        </nav>
    );
};

export default Navbar;
