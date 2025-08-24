import { useMemo } from 'react';
import { useTablePagination } from './useTablePagination';
import { useTableSearch } from './useTableSearch';
import { useTableSort } from './useTableSort';

interface UseTableManagementProps<T> {
    data: T[];
    initialSort?: { key: string; direction: 'asc' | 'desc' };
    initialPerPage?: string;
    meta?: { per_page?: number };
    searchFields?: (keyof T)[];
    customSearchFilter?: (item: T, searchTerm: string) => boolean;
}

export const useTableManagement = <T extends Record<string, any>>({
    data,
    initialSort,
    initialPerPage,
    meta,
    searchFields,
    customSearchFilter,
}: UseTableManagementProps<T>) => {
    const { currentPerPage, handleItemsPerPageChange } = useTablePagination({
        initialPerPage,
        meta,
    });

    const { sortConfig, handleSort } = useTableSort({ initialSort });
    const { searchTerm, handleSearch } = useTableSearch();
    const filteredItems = useMemo(() => {
        if (!searchTerm) return data;

        return data.filter((item) => {
            if (customSearchFilter) {
                return customSearchFilter(item, searchTerm);
            }

            if (searchFields) {
                return searchFields.some((field) => {
                    const value = item[field];
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(searchTerm.toLowerCase());
                    }
                    return false;
                });
            }
            return Object.values(item).some((value) => {
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchTerm.toLowerCase());
                }
                return false;
            });
        });
    }, [data, searchTerm, searchFields, customSearchFilter]);
    const sortedItems = useMemo(() => {
        const sortableItems = [...filteredItems];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                }

                return 0;
            });
        }
        return sortableItems;
    }, [filteredItems, sortConfig]);

    return {
        currentPerPage,
        handleItemsPerPageChange,
        sortConfig,
        handleSort,
        searchTerm,
        handleSearch,
        filteredItems: sortedItems,
    };
};
