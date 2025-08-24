import { router } from '@inertiajs/react';
import { useCallback, useState } from 'react';

interface UseTablePaginationProps {
    initialPerPage?: string;
    meta?: {
        per_page?: number;
    };
}

export const useTablePagination = ({ initialPerPage, meta }: UseTablePaginationProps = {}) => {
    const getCurrentPerPage = useCallback(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const perPageParam = urlParams.get('per_page');

        if (perPageParam === 'all') return 'all';
        if (perPageParam) return perPageParam;
        return meta?.per_page?.toString() || initialPerPage || '20';
    }, [meta?.per_page, initialPerPage]);

    const [currentPerPage, setCurrentPerPage] = useState(getCurrentPerPage());

    const handleItemsPerPageChange = useCallback((value: string) => {
        setCurrentPerPage(value);

        const params = new URLSearchParams(window.location.search);
        const currentPage = params.get('page') || '1';

        if (value === 'all') {
            params.set('per_page', 'all');
        } else {
            params.set('per_page', value);
        }

        if (currentPage && currentPage !== '1') {
            params.set('page', currentPage);
        } else {
            params.delete('page');
        }

        router.get(
            `${window.location.pathname}?${params.toString()}`,
            {},
            {
                preserveState: true,
                onSuccess: () => {
                    setCurrentPerPage(value);
                },
            },
        );
    }, []);

    return {
        currentPerPage,
        handleItemsPerPageChange,
        setCurrentPerPage,
    };
};
