const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-5">
            <div className="absolute inset-0">
                <div
                    className="absolute top-0 -left-4 h-72 w-72 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    className="absolute top-0 -right-4 hidden h-96 w-96 rounded-full sm:block"
                    style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    className="absolute -bottom-8 left-[-40%] h-96 w-96 rounded-full md:left-20"
                    style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>

                <div
                    className="absolute right-20 -bottom-10 hidden h-96 w-96 rounded-full sm:block"
                    style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2, mixBlendMode: 'multiply', filter: 'blur(128px)' }}
                ></div>
            </div>
        </div>
    );
};

export default AnimatedBackground;
