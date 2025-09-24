import { ChangeEvent, useEffect, useState } from 'react';

type InputFieldProps = {
    type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'date' | 'datetime-local';
    label: string;
    name: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    validation?: RegExp | ((value: string) => boolean) | null;
    errorMessage?: string;
    error?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    resetSignal?: number;
};

const EyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.99992 3.33301C4.66659 3.33301 1.81992 5.55301 0.666588 8.66634C1.81992 11.7797 4.66659 13.9997 7.99992 13.9997C11.3333 13.9997 14.1799 11.7797 15.3333 8.66634C14.1799 5.55301 11.3333 3.33301 7.99992 3.33301ZM7.99992 11.9997C6.15992 11.9997 4.66659 10.5063 4.66659 8.66634C4.66659 6.82634 6.15992 5.33301 7.99992 5.33301C9.83992 5.33301 11.3333 6.82634 11.3333 8.66634C11.3333 10.5063 9.83992 11.9997 7.99992 11.9997ZM7.99992 6.66634C6.89325 6.66634 5.99992 7.55967 5.99992 8.66634C5.99992 9.77301 6.89325 10.6663 7.99992 10.6663C9.10659 10.6663 9.99992 9.77301 9.99992 8.66634C9.99992 7.55967 9.10659 6.66634 7.99992 6.66634Z"
            fill="currentColor"
        />
    </svg>
);

const EyeCloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.3533 2.64634L11.9393 4.06034C10.8586 3.37434 9.47925 2.99967 7.99992 2.99967C4.66659 2.99967 1.81992 5.21967 0.666588 8.33301C1.27259 9.93301 2.26659 11.2863 3.52525 12.253L1.99992 13.7797L2.70659 14.4863L14.0599 3.13301L13.3533 2.64634ZM7.99992 5.33301C9.10659 5.33301 10.0666 5.82634 10.7266 6.56634L9.41325 7.87967C9.15992 7.43301 8.61325 6.99967 7.99992 6.99967C7.44659 6.99967 6.97325 7.32634 6.72659 7.79301L5.39325 6.45967C6.05325 5.71967 6.99992 5.33301 7.99992 5.33301ZM3.35325 5.64634L4.81325 7.10634C4.75325 7.36634 4.66659 7.61301 4.66659 7.99967C4.66659 9.83967 6.15992 11.333 7.99992 11.333C8.38659 11.333 8.63325 11.2463 8.89325 11.1863L10.3399 12.633C9.29325 13.2063 8.11325 13.6663 7.99992 13.6663C4.66659 13.6663 1.81992 11.4463 0.666588 8.33301C1.21992 6.89967 2.13325 5.71967 3.35325 5.64634Z"
            fill="currentColor"
        />
    </svg>
);

const InputField = ({
    type = 'text',
    label,
    name,
    value,
    placeholder = '',
    required = false,
    readonly = false,
    validation = null,
    errorMessage = '',
    className = '',
    error: externalError,
    onChange,
    resetSignal = 0,
}: InputFieldProps) => {
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

        if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
            return errorMessage || 'Please enter a valid email address';
        }

        // if (type === 'password' && inputValue.length < 8) {
        //     return errorMessage || 'Password must be at least 8 characters';
        // }

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
            <div className="relative">
                <input
                    id={name}
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className={`dark:bg-dark-900 w-full rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${getBorderClasses()}`}
                    aria-invalid={!!error || !!externalError}
                    aria-describedby={error || externalError ? `${name}-error` : undefined}
                    readOnly={readonly}
                />
                {type != 'password' && (error || externalError) && (
                    <span className="absolute top-1/2 right-3.5 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.58325 7.99967C2.58325 5.00813 5.00838 2.58301 7.99992 2.58301C10.9915 2.58301 13.4166 5.00813 13.4166 7.99967C13.4166 10.9912 10.9915 13.4163 7.99992 13.4163C5.00838 13.4163 2.58325 10.9912 2.58325 7.99967ZM7.99992 1.08301C4.17995 1.08301 1.08325 4.17971 1.08325 7.99967C1.08325 11.8196 4.17995 14.9163 7.99992 14.9163C11.8199 14.9163 14.9166 11.8196 14.9166 7.99967C14.9166 4.17971 11.8199 1.08301 7.99992 1.08301ZM7.09932 5.01639C7.09932 5.51345 7.50227 5.91639 7.99932 5.91639H7.99999C8.49705 5.91639 8.89999 5.51345 8.89999 5.01639C8.89999 4.51933 8.49705 4.11639 7.99999 4.11639H7.99932C7.50227 4.11639 7.09932 4.51933 7.09932 5.01639ZM7.99998 11.8306C7.58576 11.8306 7.24998 11.4948 7.24998 11.0806V7.29627C7.24998 6.88206 7.58576 6.54627 7.99998 6.54627C8.41419 6.54627 8.74998 6.88206 8.74998 7.29627V11.0806C8.74998 11.4948 8.41419 11.8306 7.99998 11.8306Z"
                                fill="#F04438"
                            />
                        </svg>
                    </span>
                )}

                {type != 'password' && isTouched && !error && !externalError && value && (
                    <span className="absolute top-1/2 right-3.5 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.61792 8.00034C2.61792 5.02784 5.0276 2.61816 8.00009 2.61816C10.9726 2.61816 13.3823 5.02784 13.3823 8.00034C13.3823 10.9728 10.9726 13.3825 8.00009 13.3825C5.0276 13.3825 2.61792 10.9728 2.61792 8.00034ZM8.00009 1.11816C4.19917 1.11816 1.11792 4.19942 1.11792 8.00034C1.11792 11.8013 4.19917 14.8825 8.00009 14.8825C11.801 14.8825 14.8823 11.8013 14.8823 8.00034C14.8823 4.19942 11.801 1.11816 8.00009 1.11816ZM10.5192 7.266C10.8121 6.97311 10.8121 6.49823 10.5192 6.20534C10.2264 5.91245 9.75148 5.91245 9.45858 6.20534L7.45958 8.20434L6.54162 7.28638C6.24873 6.99349 5.77385 6.99349 5.48096 7.28638C5.18807 7.57927 5.18807 8.05415 5.48096 8.34704L6.92925 9.79533C7.0699 9.93599 7.26067 10.015 7.45958 10.015C7.6585 10.015 7.84926 9.93599 7.98991 9.79533L10.5192 7.266Z"
                                fill="#12B76A"
                            />
                        </svg>
                    </span>
                )}

                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-3.5 -translate-y-1/2 text-gray-500 focus:outline-none dark:text-gray-400"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
                    </button>
                )}
            </div>
            {(error || externalError) && (
                <p id={`${name}-error`} className="absolute z-10 mt-1 w-full text-theme-xs text-error-500">
                    {externalError || error}
                </p>
            )}
        </div>
    );
};

export default InputField;
