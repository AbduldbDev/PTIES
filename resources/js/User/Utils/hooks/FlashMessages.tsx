import React, { useEffect } from 'react';
import Alert from './Alert';

interface FlashMessagesProps {
    flash: {
        success?: string;
        error?: string;
    };
    onClose?: () => void;
}

const FlashMessages: React.FC<FlashMessagesProps> = ({ flash, onClose }) => {
    // Auto-close flash messages after 5 seconds
    useEffect(() => {
        if (flash?.success || flash?.error) {
            const timer = setTimeout(() => {
                if (onClose) onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [flash, onClose]);

    return (
        <>
            {flash?.success && <Alert type="success" message={flash.success} duration={5000} onClose={onClose} />}
            {flash?.error && <Alert type="error" message={flash.error} duration={5000} onClose={onClose} />}
        </>
    );
};

export default FlashMessages;
