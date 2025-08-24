import React from 'react';

interface ItemsPerPageSelectorProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: Array<{ value: string; label: string }>;
    label?: string;
    className?: string;
}

export const ItemsPerPageSelector: React.FC<ItemsPerPageSelectorProps> = ({
    value,
    onChange,
    options = [
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '50', label: '50' },
        { value: '100', label: '100' },
        { value: 'all', label: 'All' },
    ],
    label = 'Show',
    className = '',
}) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <span className="text-gray-500 dark:text-gray-400">{label}</span>
            <div className="relative z-20 bg-transparent">
                <select
                    id="items-per-page"
                    value={value}
                    onChange={onChange}
                    className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-9 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none py-2 pr-8 pl-3 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <label htmlFor="items-per-page">
                    <span className="absolute top-1/2 right-2 z-30 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                        <svg className="stroke-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                                stroke=""
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </span>
                </label>
            </div>
            <span className="text-gray-500 dark:text-gray-400">entries</span>
        </div>
    );
};
