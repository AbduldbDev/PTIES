interface ActiveFilter {
    key: string;
    value: string;
    label: string;
    onRemove: () => void;
}

interface ActiveFiltersProps {
    filters: ActiveFilter[];
    resultsCount: number;
    totalCount: number;
    onClearAll: () => void;
    className?: string;
}

export default function ActiveFilters({ filters, resultsCount, totalCount, onClearAll, className = '' }: ActiveFiltersProps) {
    if (filters.length === 0) return null;

    return (
        <div className={`flex flex-wrap items-center justify-between gap-4 ${className}`}>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                    Showing {resultsCount} of {totalCount} items
                </span>
                {/* <button onClick={onClearAll} className="hover:text-primary-dark flex items-center gap-1 text-sm text-primary">
                    <i className="fas fa-times"></i>
                    Clear all filters
                </button> */}
            </div>

            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <span
                        key={`${filter.key}-${filter.value}`}
                        className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                    >
                        {filter.label}: {filter.value}
                        <button
                            onClick={filter.onRemove}
                            className="ml-1 text-blue-600 hover:text-blue-800"
                            aria-label={`Remove ${filter.label} filter`}
                        >
                            <i className="fas fa-times text-xs"></i>
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
}
