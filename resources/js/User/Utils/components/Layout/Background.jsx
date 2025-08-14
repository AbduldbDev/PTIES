import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const blobRefs = useRef([]);
    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ];

    useEffect(() => {
        let currentScroll = 0;
        let requestId;

        const handleScroll = () => {
            const newScroll = window.pageYOffset;
            const scrollDelta = newScroll - currentScroll;
            currentScroll = newScroll;

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index];

                const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
                const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;

                const x = initialPos.x + xOffset;
                const y = initialPos.y + yOffset;
                if (!blob) return;

                blob.style.transform = `translate(${x}px, ${y}px)`;
                blob.style.transition = 'transform 1.4s ease-out';
            });

            requestId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(requestId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-5">
            <div className="absolute inset-0">
                <div
                    ref={(ref) => (blobRefs.current[0] = ref)}
                    className="absolute top-0 -left-4 h-72 w-72 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    ref={(ref) => (blobRefs.current[1] = ref)}
                    className="absolute top-0 -right-4 hidden h-96 w-96 rounded-full sm:block"
                    style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    ref={(ref) => (blobRefs.current[2] = ref)}
                    className="absolute -bottom-8 left-[-40%] h-96 w-96 rounded-full md:left-20"
                    style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    ref={(ref) => (blobRefs.current[3] = ref)}
                    className="absolute right-20 -bottom-10 hidden h-96 w-96 rounded-full sm:block"
                    style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>
            </div>
        </div>
    );
};

export default AnimatedBackground;
