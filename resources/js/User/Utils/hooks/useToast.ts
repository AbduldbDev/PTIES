import { useCallback, useState } from 'react';

interface ToastData {
    success?: string;
    error?: string;
}

interface ToastProps {
    type: 'success' | 'error';
    message: string;
    onClose: () => void;
}

interface ToastContainerProps {
    flash?: ToastData;
    errors?: ToastData;
    onClose: (type: 'success' | 'error' | 'flashError') => void;
}
interface UseToastReturn {
    flash: ToastData | null;
    errors: ToastData | null;
    showToast: (type: 'success' | 'error', message: string, source?: 'flash' | 'errors') => void;
    clearToast: (type: 'success' | 'error' | 'flashError') => void;
    clearAllToasts: () => void;
}

export const useToast = (): UseToastReturn => {
    const [flash, setFlash] = useState<ToastData | null>(null);
    const [errors, setErrors] = useState<ToastData | null>(null);

    const showToast = useCallback((type: 'success' | 'error', message: string, source: 'flash' | 'errors' = 'flash') => {
        if (source === 'flash') {
            setFlash((prev) => ({ ...prev, [type]: message }));
        } else {
            setErrors((prev) => ({ ...prev, [type]: message }));
        }
    }, []);

    const clearToast = useCallback((type: 'success' | 'error' | 'flashError') => {
        if (type === 'success') {
            setFlash((prev) => (prev ? { ...prev, success: undefined } : null));
        } else if (type === 'error') {
            setErrors((prev) => (prev ? { ...prev, error: undefined } : null));
        } else if (type === 'flashError') {
            setFlash((prev) => (prev ? { ...prev, error: undefined } : null));
        }
    }, []);

    const clearAllToasts = useCallback(() => {
        setFlash(null);
        setErrors(null);
    }, []);

    return {
        flash,
        errors,
        showToast,
        clearToast,
        clearAllToasts,
    };
};
