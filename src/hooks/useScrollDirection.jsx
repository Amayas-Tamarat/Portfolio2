import { useState, useEffect, useRef } from 'react';

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('none');
    const lastScrollY = useRef(0);
    const throttleTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (throttleTimeout.current === null) {
                throttleTimeout.current = setTimeout(() => {
                    const currentScrollY = window.scrollY;

                    setScrollDirection(prev => {
                        if (currentScrollY > lastScrollY.current && prev !== 'down') {
                            return 'down';
                        }
                        if (currentScrollY < lastScrollY.current && prev !== 'up') {
                            return 'up';
                        }
                        return prev;
                    });

                    lastScrollY.current = currentScrollY;
                    throttleTimeout.current = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
        };
    }, []);

    return scrollDirection;
}
