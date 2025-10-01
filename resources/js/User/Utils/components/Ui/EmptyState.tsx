interface EmptyStateProps {
    title?: string;
    message?: string;
    actionText?: string;
    onAction?: () => void;
    className?: string;
}

export default function EmptyState({
    title = 'No items found',
    message = 'Try adjusting your search terms or filters.',
    actionText = 'Clear All Filters',
    onAction,
    className = '',
}: EmptyStateProps) {
    return (
        <div className={`py-2 text-center lg:py-12 ${className}`}>
            <i className="fas fa-search mb-4 text-4xl text-gray-300"></i>
            <h3 className="mb-2 text-sm font-semibold text-gray-600 lg:text-xl">{title}</h3>
            <p className="mb-4 text-xs text-gray-500 lg:text-base">{message}</p>
            {onAction && (
                <button
                    onClick={onAction}
                    className="hover:bg-primary-dark rounded-full bg-primary px-6 py-2 text-xs text-white transition-colors lg:text-base"
                >
                    {actionText}
                </button>
            )}
        </div>
    );
}
