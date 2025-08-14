import { useEffect, useState } from 'react';

const messages = [
    "Exploring Pakil's scenic spots...",
    'Scanning QR codes for rewards...',
    'Learning about local heritage...',
    'Getting ready for a fun adventure...',
    'Discovering hidden gems in Laguna...',
];

interface LoaderProps {
    onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);

        document.body.style.overflow = 'hidden';

        const start = Date.now();
        const duration = 3000;
        const interval = 30;

        const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const percent = Math.min(Math.round((elapsed / duration) * 100), 100);
            setProgress(percent);

            if (percent >= 100) {
                clearInterval(timer);

                setIsVisible(false);

                setTimeout(() => {
                    document.body.style.overflow = '';
                    if (onComplete) onComplete();
                }, 500);
            }
        }, interval);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
            className="fixed inset-0 z-[99990] flex flex-col items-center justify-center bg-[#052675] backdrop-blur-lg"
        >
            <div className="relative mb-6 h-28 w-28">
                <div
                    className="absolute inset-0 animate-spin rounded-full border-4 border-transparent bg-gradient-to-r from-[#e09414] to-[#10b981]"
                    style={{
                        background: 'conic-gradient(from 0deg, var(--tw-gradient-from), var(--tw-gradient-to), transparent)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                ></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-white">{progress}%</span>
                </div>
            </div>

            <p className="text-md max-w-xs text-center font-medium text-white/90 transition-all duration-300">{message}</p>
        </div>
    );
}