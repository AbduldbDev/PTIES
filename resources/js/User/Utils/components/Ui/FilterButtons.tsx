interface FilterButton {
    value: string;
    label: string;
}

interface FilterButtonsProps {
    filters: FilterButton[];
    selectedFilter: string;
    onFilterChange: (filter: string) => void;
    className?: string;
}

export default function FilterButtons({ filters, selectedFilter, onFilterChange, className = '' }: FilterButtonsProps) {
    return (
        <div className={`flex flex-wrap gap-2 pb-2 ${className}`}>
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        selectedFilter === filter.value ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}
