import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import experiences from '../../constants/experienceList.jsx';

gsap.registerPlugin(ScrollTrigger);

const ProfessionalExp = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
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
            className="min-h-screen text-white py-20 px-6 sm:px-12 bg-gradient-to-b from-purple-950 via-red-950 to-black"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Professional Experience
                </h2>

                <div className="relative border-l-4 border-purple-600 pl-12 flex flex-col gap-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="exp-card bg-[#1a1a1a] border border-purple-600 p-6 rounded-xl shadow-lg relative"
                        >
                            {/* Timeline Dot */}
                            <span
                                className="absolute -left-10 top-1/2 w-5 h-5 bg-purple-400 rounded-full border-2 border-purple-600 transform -translate-y-1/2"
                                aria-hidden="true"
                            ></span>

                            <h3 className="text-2xl font-semibold text-purple-400 font-manrope">
                                {exp.role}
                            </h3>
                            <p className="text-gray-400 text-sm mb-1">
                                {exp.company} — {exp.period}
                            </p>
                            <p className="text-gray-400 text-xs mb-4 italic">{exp.location}</p>

                            <ul className="list-disc list-inside text-gray-300 font-manrope space-y-1">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalExp;
