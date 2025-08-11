import { ChangeEvent, useEffect, useState } from 'react';

type TextAreaProps = {
    label: string;
    name: string;
    value: string; // <-- controlled value from parent
    placeholder?: string;
    required?: boolean;
    validation?: RegExp | ((value: string) => boolean) | null;
    errorMessage?: string;
    error?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    disabled?: boolean;
    readonly?: boolean;
    matchValue?: string; // For password confirmation
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
    onChange,
    rows = 3,
    disabled = false,
    readonly = false,
    matchValue,
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
        if (error) {
            return 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800';
        }
        if (isTouched && !error && value) {
            return 'border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800';
        }
        return 'border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800';
    };

    const textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden bg-white dark:text-white/90 text-gray-800 dark:bg-gray-900 ${
        disabled
            ? 'bg-gray-100 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 '
            : readonly
              ? 'bg-gray-50 text-gray-700 border-gray-300 cursor-default dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
              : getBorderClasses()
    } ${className}`;

    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                {label}
                {required && <span className="text-error-500"> *</span>}
            </label>
            <div className="relative">
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    value={value} // <-- now directly from parent
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readonly}
                    className={textareaClasses}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                />
            </div>
            {error && (
                <p id={`${name}-error`} className="text-theme-xs text-error-500 mt-1.5">
                    {error}
                </p>
            )}
        </div>
    );
};

export default TextArea;
