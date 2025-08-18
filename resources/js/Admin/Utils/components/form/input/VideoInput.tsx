import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

interface VideoInputProps {
    label?: string;
    name?: string;
    required?: boolean;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, file: File | null) => void;
    accept?: string;
    validation?: (file: File | null) => boolean;
    errorMessage?: string;
    error?: string;
    value?: File | null;
    multiple?: boolean;
    resetSignal?: number; // NEW: triggers reset when changed
}

const FileInput: FC<VideoInputProps> = ({
    label,
    name = 'fileInput',
    required = false,
    className = '',
    onChange,
    accept = 'video/mp4, video/quicktime, video/x-msvideo, video/x-ms-wmv, video/x-matroska, video/webm',
    validation,
    errorMessage = 'Please select a valid image file (mp4, webm, or wmv)',
    multiple = false,
    resetSignal,
}) => {
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [fileName, setFileName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const validateFile = (file: File | null): string => {
        if (required && !file) {
            return errorMessage || 'File is required';
        }

        if (file) {
            const validTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-ms-wmv', 'video/x-matroska', 'video/webm'];
            if (!validTypes.includes(file.type)) {
                return 'Only mp4, webm, or wmv files are allowed';
            }

            if (validation && !validation(file)) {
                return errorMessage || 'Invalid file';
            }
        }

        return '';
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const file = files?.[0] || null;
        const validationError = validateFile(file);

        setError(validationError);
        setFileName(file?.name || '');
        setIsTouched(true);

        // Clear selection if invalid
        if (validationError && e.target) {
            e.target.value = '';
        }
        if (onChange) {
            onChange(e, file);
        }
    };

    // Reset when resetSignal changes
    useEffect(() => {
        if (resetSignal !== undefined) {
            setError('');
            setIsTouched(false);
            setFileName('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }, [resetSignal]);

    const getBorderClasses = () => {
        if (error) {
            return 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800';
        }
        if (isTouched && !error && fileName) {
            return 'border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800';
        }
        return 'border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800';
    };

    return (
        <div className={`relative mb-4 ${className}`}>
            {label && (
                <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    {label}
                    {required && <span className="text-error-500"> *</span>}
                </label>
            )}
            <div className="relative">
                <input
                    ref={inputRef} // so we can reset it
                    id={name}
                    name={name}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleChange}
                    className={`focus:border-ring-brand-300 shadow-theme-xs focus:file:ring-brand-300 h-11 w-full overflow-hidden rounded-lg border bg-transparent text-sm text-gray-500 transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pr-3 file:pl-3.5 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${getBorderClasses()}`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                />
                {/* error & success icons */}
                {error && (
                    <span className="absolute top-1/2 right-3.5 -translate-y-1/2">
                        {/* error icon */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.58325 7.99967C2.58325 5.00813 5.00838 2.58301 7.99992 2.58301C10.9915 2.58301 13.4166 5.00813 13.4166 7.99967C13.4166 10.9912 10.9915 13.4163 7.99992 13.4163C5.00838 13.4163 2.58325 10.9912 2.58325 7.99967Z"
                                fill="#F04438"
                            />
                        </svg>
                    </span>
                )}
                {isTouched && !error && fileName && (
                    <span className="absolute top-1/2 right-3.5 -translate-y-1/2">
                        {/* success icon */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

export default FileInput;
