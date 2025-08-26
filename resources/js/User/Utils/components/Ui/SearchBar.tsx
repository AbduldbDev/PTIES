import { useState } from 'react';

interface SearchBarProps {
    placeholder?: string;
    onSearch: (term: string) => void;
    value?: string;
    className?: string;
}

export default function SearchBar({ placeholder = 'Search items...', onSearch, value = '', className = '' }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 bg-gray-100 py-3 pr-10 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <i className="fas fa-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
            {searchTerm && (
                <button
                    onClick={clearSearch}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                >
                    <i className="fas fa-times"></i>
                </button>
            )}
        </div>
    );
}
