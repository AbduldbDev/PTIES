import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

interface FileInputProps {
    label?: string;
    name?: string;
    required?: boolean;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, isValid: boolean) => void;
    accept?: string;
    validation?: (file: File | null) => boolean;
    errorMessage?: string;
    error?: string; // External error from parent
    multiple?: boolean;
    resetSignal?: number;
}

const PdfFileInput: FC<FileInputProps> = ({
    label,
    name = 'pdfInput',
    required = false,
    className = '',
    onChange,
    accept = '.pdf', // Default to PDF only
    validation,
    errorMessage = 'Please select a valid PDF file',
    error: externalError, // External error from parent
    multiple = false,
    resetSignal,
}) => {
    const [internalError, setInternalError] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [fileName, setFileName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Combine internal and external errors
    const error = externalError || internalError;

    const validateFile = (file: File | null): string => {
        if (required && !file) {
            return errorMessage || 'File is required';
        }

        if (file) {
            // Validate PDF file type
            if (file.type !== 'application/pdf') {
                return 'Only PDF files are allowed';
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

        setInternalError(validationError);
        setFileName(file?.name || '');
        setIsTouched(true);

        // Clear selection if invalid
        if (validationError && e.target) {
            e.target.value = '';
        }

        if (onChange) {
            onChange(e, !validationError);
        }
    };

    // Reset when resetSignal changes
    useEffect(() => {
        if (resetSignal !== undefined) {
            setInternalError('');
            setIsTouched(false);
            setFileName('');
            if (inputRef.current) {
                inputRef.current.value = ''; // clear file selection
            }
        }
    }, [resetSignal]);

    // Sync external errors
    useEffect(() => {
        if (externalError) {
            setInternalError(externalError);
            setIsTouched(true);
        } else {
            // Clear internal error when external error is cleared
            setInternalError('');
        }
    }, [externalError]);

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
                    ref={inputRef}
                    id={name}
                    name={name}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    onChange={handleChange}
                    className={`focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border bg-transparent text-sm text-gray-500 shadow-theme-xs transition-all  duration-150 ease-in-out file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pr-3 file:pl-3.5 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:ring-3 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${getBorderClasses()}`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                />

                {error && (
                    <span className="absolute top-1/2 right-3 -translate-y-1/2">
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
                {isTouched && !error && fileName && (
                    <span className="absolute top-1/2 right-3 -translate-y-1/2">
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
            </div>
            {error && (
                <p id={`${name}-error`} className="mt-1.5 text-theme-xs text-error-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default PdfFileInput;
