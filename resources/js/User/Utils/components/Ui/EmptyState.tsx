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
        <div className={`py-12 text-center ${className}`}>
            <i className="fas fa-search mb-4 text-4xl text-gray-300"></i>
            <h3 className="mb-2 text-xl font-semibold text-gray-600">{title}</h3>
            <p className="mb-4 text-gray-500">{message}</p>
            {onAction && (
                <button onClick={onAction} className="hover:bg-primary-dark rounded-full bg-primary px-6 py-2 text-white transition-colors">
                    {actionText}
                </button>
            )}
        </div>
    );
}
