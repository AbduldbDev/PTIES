import { ChangeEvent, useEffect, useState } from 'react';

type ColorInputFieldProps = {
    label: string;
    name: string;
    value: string; // controlled by parent
    required?: boolean;
    errorMessage?: string;
    error?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    resetSignal?: number;
};

const ColorInputField = ({
    label,
    name,
    value,
    required = false,
    errorMessage = '',
    className = '',
    error: externalError,
    onChange,
    resetSignal = 0,
}: ColorInputFieldProps) => {
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validateInput = (inputValue: string): string => {
        if (required && !inputValue) {
            return errorMessage || `${label} is required`;
        }

        // Basic color validation (hex, rgb, rgba, etc.)
        if (inputValue && !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputValue)) {
            return errorMessage || 'Please enter a valid color hex code';
        }

        return '';
    };

    useEffect(() => {
        setIsTouched(false);
        setError('');
    }, [resetSignal]);

    useEffect(() => {
        if (isTouched) {
            setError(validateInput(value));
        } else {
            setError('');
        }
    }, [value, isTouched]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isTouched) setIsTouched(true);
        if (onChange) onChange(e);
    };

    const handleBlur = () => {
        setIsTouched(true);
        setError(validateInput(value));
    };

    const getBorderClasses = () => {
        if (error || externalError) {
            return 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800';
        }
        if (isTouched && !error && value) {
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
            <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                    <input
                        id={name}
                        type="color"
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`h-full w-full cursor-pointer rounded-lg border transition-all duration-150 ease-in-out ${getBorderClasses()} appearance-none bg-transparent focus:ring-3 focus:outline-none`}
                        aria-invalid={!!error || !!externalError}
                        aria-describedby={error || externalError ? `${name}-error` : undefined}
                    />
                </div>
                <div className="flex-1">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="#FFFFFF"
                        className={`w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs transition-all duration-150 ease-in-out placeholder:text-gray-400 focus:ring-3 focus:outline-none dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${getBorderClasses()}`}
                        aria-invalid={!!error || !!externalError}
                    />
                </div>
            </div>
            {(error || externalError) && (
                <p id={`${name}-error`} className="absolute z-10 mt-1 w-full text-theme-xs text-error-500">
                    {externalError || error}
                </p>
            )}
        </div>
    );
};

export default ColorInputField;
