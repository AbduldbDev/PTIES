
import { useCallback, useState } from 'react';

interface UseTableSearchProps {
    initialSearchTerm?: string;
}

export const useTableSearch = ({ initialSearchTerm = '' }: UseTableSearchProps = {}) => {
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const clearSearch = useCallback(() => {
        setSearchTerm('');
    }, []);

    return {
        searchTerm,
        handleSearch,
        clearSearch,
        setSearchTerm,
    };
};
