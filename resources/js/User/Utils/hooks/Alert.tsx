import React, { useEffect, useState } from 'react';

type AlertType = 'success' | 'error';

interface AlertProps {
    type: AlertType;
    message: string;
    duration?: number;
    onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, duration = 5000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            if (onClose) onClose();
        }, 300); // Match animation duration
    };

    const styles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: 'fas fa-check-circle',
            iconColor: 'text-green-500',
            progressColor: 'bg-green-500',
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: 'fas fa-times-circle',
            iconColor: 'text-red-500',
            progressColor: 'bg-red-500',
        },
    };

    const { bg, border, text, icon, iconColor, progressColor } = styles[type] || styles.success;

    if (!isVisible) return null;

    return (
        <div className={`animate-fadeInRight fixed top-20 right-4 z-50 w-full max-w-md`}>
            <div className={`${bg} ${border} rounded-lg border-l-4 p-4 shadow-lg ${text} relative overflow-hidden`}>
                <div className="flex items-start">
                    <div className="mr-3 flex-shrink-0">
                        <i className={`${icon} ${iconColor} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-medium">{message}</p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                        <button
                            onClick={handleClose}
                            className={`${text} transition duration-150 ease-in-out hover:text-gray-500 focus:text-gray-500 focus:outline-none`}
                            aria-label="Close alert"
                        >
                            <i className="fas fa-times h-4 w-4"></i>
                        </button>
                    </div>
                </div>
                {duration && <div className={`progress-bar ${progressColor}`} style={{ animationDuration: `${duration}ms` }} />}
            </div>
        </div>
    );
};

export default Alert;
