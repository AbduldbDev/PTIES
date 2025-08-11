import { useEffect, useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    errorMessage?: string;
    error?: string;
    validation?: (value: string) => boolean;
}

const Select: React.FC<SelectProps> = ({
    options,
    label,
    name,
    placeholder = 'Select an option',
    required = false,
    value = '',
    onChange,
    className = '',
    errorMessage = '',
    validation,
}) => {
    const [values, setValue] = useState<string>(value);
    const [error, setError] = useState<string>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    // 🔹 Sync local state with parent value
    useEffect(() => {
        setValue(value || '');
        if (!value) {
            setIsTouched(false);
            setError('');
        }
    }, [value]);

    const validateInput = (inputValue: string): string => {
        if (required && !inputValue) {
            return errorMessage || `${label} is required`;
        }
        if (validation && !validation(inputValue)) {
            return errorMessage || `Invalid ${label.toLowerCase()} selection`;
        }
        return '';
    };

    // Revalidate when value changes and touched
    useEffect(() => {
        if (isTouched) {
            setError(validateInput(values));
        }
    }, [values, isTouched]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        if (!isTouched) setIsTouched(true);
        if (onChange) onChange(e);
    };

    const handleBlur = () => {
        setIsTouched(true);
        setError(validateInput(values));
    };

    const getBorderClasses = () => {
        if (error) {
            return 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800';
        }
        if (isTouched && !error && values) {
            return 'border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800';
        }
        return 'border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800';
    };

    return (
        <div className={`relative mb-7 ${className}`}>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {label}
                {required && <span className="text-error-500"> *</span>}
            </label>
            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`shadow-theme-xs h-10.4 w-full appearance-none rounded-lg border bg-transparent px-4 py-2.5 pr-11 text-sm placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${getBorderClasses()} ${
                        values ? 'text-gray-800 dark:text-white/90' : 'text-gray-400 dark:text-gray-400'
                    }`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                >
                    <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="pointer-events-none absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                    <svg className="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
                            stroke=""
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                {isTouched && !error && values && (
                    <span className="absolute top-1/2 right-10 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.8047 3.52861C14.065 3.78896 14.065 4.21107 13.8047 4.47141L6.47139 11.8047C6.21105 12.0651 5.78894 12.0651 5.5286 11.8047L2.19526 8.47141C1.93491 8.21107 1.93491 7.78896 2.19526 7.52861C2.45561 7.26826 2.87772 7.26826 3.13807 7.52861L6 10.3905L12.8619 3.52861C13.1223 3.26826 13.5444 3.26826 13.8047 3.52861Z"
                                fill="#12B76A"
                            />
                        </svg>
                    </span>
                )}
            </div>
            {error && (
                <p id={`${name}-error`} className="text-theme-xs text-error-500 absolute z-10 mt-1 w-full">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Select;
