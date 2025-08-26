import { useMemo, useState } from 'react';

interface UseSearchFilterOptions<T> {
    data: T[];
    searchFields: (keyof T)[];
    filterField?: keyof T;
    initialSearchTerm?: string;
    initialFilter?: string;
}

export function useSearchFilter<T>({ data, searchFields, filterField, initialSearchTerm = '', initialFilter = 'all' }: UseSearchFilterOptions<T>) {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [selectedFilter, setSelectedFilter] = useState(initialFilter);

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            // Apply search filter
            const searchMatch =
                searchTerm === '' ||
                searchFields.some((field) => {
                    const value = item[field];
                    return value && typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase());
                });

            // Apply type filter
            const filterMatch =
                !filterField || selectedFilter === 'all' || (item[filterField] as unknown as string)?.toLowerCase() === selectedFilter;

            return searchMatch && filterMatch;
        });
    }, [data, searchTerm, selectedFilter, searchFields, filterField]);

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedFilter('all');
    };

    return {
        searchTerm,
        setSearchTerm,
        selectedFilter,
        setSelectedFilter,
        filteredData,
        clearFilters,
        hasActiveFilters: searchTerm !== '' || selectedFilter !== 'all',
    };
}
