import { useCallback, useState } from 'react';

export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

interface UseTableSortProps {
    initialSort?: SortConfig;
}

export const useTableSort = ({ initialSort }: UseTableSortProps = {}) => {
    const [sortConfig, setSortConfig] = useState<SortConfig>(initialSort || { key: 'created_at', direction: 'desc' });

    const handleSort = useCallback((key: string) => {
        setSortConfig((prevConfig) => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
        }));
    }, []);

    return {
        sortConfig,
        handleSort,
        setSortConfig,
    };
};
