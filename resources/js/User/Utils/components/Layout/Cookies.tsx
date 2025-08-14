// resources/js/Components/CookieConsentBanner.jsx
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function CookieConsentBanner() {
    const { cookieConsent } = usePage().props;
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if cookie consent is not set
        if (cookieConsent === undefined) {
            setShowBanner(true);
        }
    }, [cookieConsent]);

    const acceptCookies = () => {
        router.post(
            route('cookies.accept'),
            {},
            {
                onSuccess: () => setShowBanner(false),
            },
        );
    };

    const declineCookies = () => {
        router.post(
            route('cookies.decline'),
            {},
            {
                onSuccess: () => setShowBanner(false),
            },
        );
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed right-0 bottom-0 left-0 z-50 bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">
                        We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <button onClick={acceptCookies} className="rounded bg-green-600 px-4 py-2 text-sm hover:bg-green-700">
                        Accept
                    </button>
                    <button onClick={declineCookies} className="rounded bg-gray-600 px-4 py-2 text-sm hover:bg-gray-700">
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}
function route(arg0: string): any {
    throw new Error('Function not implemented.');
}
