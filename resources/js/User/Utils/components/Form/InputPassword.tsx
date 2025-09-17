import React, { useState } from 'react';

interface FormPasswordInputProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    error?: string;
    touched?: boolean;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    className?: string;
    Icon?: string;
}

export default function FormPasswordInput({
    label,
    id,
    value,
    onChange,
    onBlur,
    error,
    touched,
    placeholder,
    required = false,
    readOnly = false,
    disabled = false,
    className = '',
    Icon = '',
}: FormPasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const inputClass = `${className}border-primary/20 pl-10 ${
        required && error && touched ? 'border-red-500 focus:ring-red-500 focus:ring-primary' : 'focus:ring-primary'
    } ${readOnly ? 'bg-gray-100 border-gray-200' : ''} ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`;

    return (
        <div className="relative">
            <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className={`${Icon} text-gray-500`}></i>
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${inputClass} pr-10`} // space for icon
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-2 z-50 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                    tabIndex={-1} // so it doesn't grab focus when tabbing
                >
                    {showPassword ? (
                        // 👁 Eye Open
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    ) : (
                        // 👁 Eye Closed
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.944-9.543-7a9.957 9.957 0 012.042-3.368M9.878 9.878a3 3 0 104.243 4.243M6.1 6.1l11.8 11.8"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {required && error && touched && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
