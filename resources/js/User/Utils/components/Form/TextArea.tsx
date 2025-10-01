interface FormInputProps {
    label: string;
    id: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
    rows?: number;
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
    rows = 3,
}: FormInputProps) {
    const inputClass = `${className} border-primary/20 pl-10  ${
        required && error && touched ? 'border-red-500 focus:ring-red-500 focus:ring-primary' : 'focus:ring-primary'
    } ${readOnly ? 'bg-gray-100 border-gray-200 border-primary' : ''} ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`;

    return (
        <div className="relative">
            <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                {Icon && (
                    <div className="pointer-events-none absolute top-4 left-0 flex items-center pl-3">
                        <i className={`${Icon} text-gray-500`}></i>
                    </div>
                )}
                <textarea
                    rows={rows}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={inputClass}
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                ></textarea>
            </div>
            {required && error && touched && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
