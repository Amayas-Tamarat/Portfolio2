import { useState, useEffect } from 'react';

export default function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('none');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                if (scrollDirection !== 'down') {
                    console.log('down');
                    setScrollDirection('down');
                }
            } else if (currentScrollY < lastScrollY) {
                if (scrollDirection !== 'up') {
                    console.log('up');
                    setScrollDirection('up');
                }
            } else {
                setScrollDirection('none');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, scrollDirection]);

    return scrollDirection;
}
