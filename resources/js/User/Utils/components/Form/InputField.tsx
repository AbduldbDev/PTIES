import React from 'react';

interface FormInputProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    error?: string;
    touched?: boolean;
    type?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    className?: string;
    Icon?: string;
}

export default function FormInput({
    label,
    id,
    value,
    onChange,
    onBlur,
    error,
    touched,
    type = 'text',
    placeholder,
    required = false,
    readOnly = false,
    disabled = false,
    className = '',
    Icon = '',
}: FormInputProps) {
    const inputClass = `${className}  pl-10 ${
        required && error && touched ? 'border-red-500 focus:ring-red-500 focus:ring-primary' : 'focus:ring-primary'
    } ${readOnly ? 'bg-gray-100 border-gray-200 border-primary' : ''} ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`;

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
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={inputClass}
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                />
            </div>
            {required && error && touched && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
