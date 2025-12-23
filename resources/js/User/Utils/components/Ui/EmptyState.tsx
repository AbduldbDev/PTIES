interface EmptyStateProps {
    title?: string;
    message?: string;
    actionText?: string;
    onAction?: () => void;
    className?: string;
    aosAnimation?: string;
    aosDuration?: number;
    aosDelay?: number;
    aosOnce?: boolean;
}

export default function EmptyState({
    title = 'No items found',
    message = 'Try adjusting your search terms or filters.',
    actionText = 'Clear All Filters',
    onAction,
    className = '',
    aosAnimation = 'fade-up',
    aosDuration = 600,
    aosDelay = 100,
    aosOnce = true,
}: EmptyStateProps) {
    return (
        <div
            className={`py-2 text-center lg:py-12 ${className}`}
            // AOS animation attributes
            data-aos={aosAnimation}
            data-aos-duration={aosDuration}
            data-aos-delay={aosDelay}
            data-aos-once={aosOnce}
        >
            <i className="fas fa-search mb-4 text-4xl text-gray-300" data-aos="zoom-in" data-aos-delay={aosDelay + 100} data-aos-duration={500}></i>
            <h3 className="mb-2 text-sm font-semibold text-gray-600 lg:text-xl" data-aos="fade-up" data-aos-delay={aosDelay + 150}>
                {title}
            </h3>
            <p className="mb-4 text-xs text-gray-500 lg:text-base" data-aos="fade-up" data-aos-delay={aosDelay + 200}>
                {message}
            </p>
            {onAction && (
                <button
                    onClick={onAction}
                    className="hover:bg-primary-dark rounded-full bg-primary px-6 py-2 text-xs text-white transition-colors lg:text-base"
                    data-aos="zoom-in"
                    data-aos-delay={aosDelay + 250}
                    data-aos-duration={500}
                >
                    {actionText}
                </button>
            )}
        </div>
    );
}
