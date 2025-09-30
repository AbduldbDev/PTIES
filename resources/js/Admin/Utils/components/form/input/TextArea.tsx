import { ChangeEvent, useEffect, useState } from 'react';

type TextAreaProps = {
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    validation?: RegExp | ((value: string) => boolean) | null;
    errorMessage?: string;
    error?: string; // <-- Added external error prop to match InputField
    className?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    matchValue?: string;
    resetSignal?: number; // <-- Added resetSignal to match InputField
};

const TextArea = ({
    label,
    name,
    value,
    placeholder = '',
    required = false,
    validation = null,
    errorMessage = '',
    className = '',
    error: externalError, // <-- Added external error
    onChange,
    rows = 3,
    disabled = false,
    readonly = false,
    matchValue,
    resetSignal = 0, // <-- Added resetSignal
}: TextAreaProps) => {
    const [error, setError] = useState<string>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const validateInput = (inputValue: string): string => {
        if (required && !inputValue.trim()) {
            return errorMessage || `${label} is required`;
        }

        if (validation) {
            if (typeof validation === 'function' && !validation(inputValue)) {
                return errorMessage || `Invalid ${label.toLowerCase()}`;
            }
            if (validation instanceof RegExp && !validation.test(inputValue)) {
                return errorMessage || `Invalid ${label.toLowerCase()} format`;
            }
        }

        if (matchValue !== undefined && inputValue !== matchValue) {
            return errorMessage || `${label} does not match`;
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
    }, [value, isTouched, matchValue]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (!isTouched) setIsTouched(true);
        onChange?.(e);
    };

    const handleBlur = () => {
        setIsTouched(true);
        setError(validateInput(value));
    };

    const getBorderClasses = () => {
        if (error || externalError) {
            // <-- Now considers externalError too
            return 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800';
        }
        if (isTouched && !error && !externalError && value) {
            // <-- Added externalError check
            return 'border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800';
        }
        return 'border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800';
    };

    const textareaClasses = `transition-all duration-150 ease-in-out shadow-theme-xs w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
        disabled
            ? 'bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
            : readonly
              ? 'bg-gray-50 text-gray-700 border-gray-300 cursor-default dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
              : getBorderClasses()
    } ${className}`;

    return (
        <div className={`relative mb-7 ${className}`}>
            {' '}
            {/* <-- Changed to relative and mb-7 to match InputField */}
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {label}
                {required && <span className="text-error-500"> *</span>}
            </label>
            <div className="relative">
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readonly}
                    className={textareaClasses}
                    aria-invalid={!!error || !!externalError} // <-- Added externalError
                    aria-describedby={error || externalError ? `${name}-error` : undefined} // <-- Added externalError
                />
            </div>
            {(error || externalError) && ( // <-- Now shows externalError too
                <p id={`${name}-error`} className="text-theme-xs text-error-500 absolute z-10 mt-1 w-full">
                    {' '}
                    {/* <-- Changed to absolute positioning */}
                    {externalError || error}
                </p>
            )}
        </div>
    );
};

export default TextArea;
