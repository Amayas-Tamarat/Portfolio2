import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import experiences from '../../constants/experienceList.jsx';

gsap.registerPlugin(ScrollTrigger);

const ProfessionalExp = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const timelineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation (from right)
            gsap.from(headingRef.current, {
                opacity: 0,
                x: 70,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            });

            // Timeline container (from right)
            gsap.from(timelineRef.current, {
                opacity: 0,
                x: 70,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
            });

            // Cards animation (fade up)
            gsap.from(".exp-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="min-h-screen text-white py-20 px-6 sm:px-12 bg-gradient-to-b from-purple-950 via-zinc-900 to-black overflow-x-hidden"
            aria-labelledby="exp-heading"
        >
            <div className="max-w-4xl mx-auto">
                <h2
                    id="exp-heading"
                    ref={headingRef}
                    className="text-4xl sm:text-5xl font-bold font-playfair mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                >
                    Expériences Professionnelles
                </h2>

                <div
                    ref={timelineRef}
                    className="relative border-l-4 border-purple-600 pl-12 flex flex-col gap-10"
                >
                    {experiences.map((exp, index) => (
                        <article
                            key={index}
                            className="exp-card bg-[#1a1a1a] border border-purple-600 p-6 rounded-xl shadow-lg relative overflow-hidden
                                     before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent
                                     before:via-white before:to-transparent before:opacity-0 before:pointer-events-none
                                     hover:before:opacity-20 before:transition-opacity before:duration-300"
                        >
                            <header>
                                <h3 className="text-2xl font-semibold text-purple-400 font-manrope">
                                    {exp.role}
                                </h3>
                                <p className="text-gray-400 text-sm mb-1">
                                    {exp.company} — <time dateTime={exp.period}>{exp.period}</time>
                                </p>
                                <p className="text-gray-400 text-xs mb-4 italic">{exp.location}</p>
                            </header>

                            <ul className="list-disc list-inside text-gray-300 font-manrope space-y-1">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalExp;
