import { ItemsPerPageSelector } from '@AdminUtils/components/ui/table/ItemsPerPageSelector';
import { SearchInput } from '@AdminUtils/components/ui/table/SearchInput';
import React from 'react';

interface TableControlsProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    itemsPerPage: string;
    onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    searchPlaceholder?: string;
    itemsPerPageOptions?: Array<{ value: string; label: string }>;
    className?: string;
}

export const TableControls: React.FC<TableControlsProps> = ({
    searchTerm,
    onSearchChange,
    itemsPerPage,
    onItemsPerPageChange,
    searchPlaceholder = 'Search...',
    itemsPerPageOptions,
    className = '',
}) => {
    return (
        <div className={`mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${className}`}>
            <SearchInput value={searchTerm} onChange={onSearchChange} placeholder={searchPlaceholder} />

            <ItemsPerPageSelector value={itemsPerPage} onChange={onItemsPerPageChange} options={itemsPerPageOptions} />
        </div>
    );
};
