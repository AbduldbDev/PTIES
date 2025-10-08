import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';
import Details from './AttractionDetails';

type AttractionProps = {
    attraction_id: string;
};

type FormData = {
    attraction_id: string;
    latitude?: number;
    longitude?: number;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    item: AttractionProps;
};

export default function GamificationDetails() {
    const { item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const [countdown, setCountdown] = useState(15);
    const [isDisabled, setIsDisabled] = useState(true);
    const [coords, setCoords] = useState<{ lat?: number; lon?: number }>({});

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else {
            setIsDisabled(false);
        }
    }, [countdown]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoords({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                },
            );
        } else {
            console.error('Geolocation not supported by this browser.');
        }
    }, []);

    const form = useForm<FormData>({
        attraction_id: item.attraction_id,
        latitude: undefined,
        longitude: undefined,
    });

    useEffect(() => {
        if (coords.lat && coords.lon) {
            form.setData({
                ...form.data,
                latitude: coords.lat,
                longitude: coords.lon,
            });
        }
    }, [coords]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!coords.lat || !coords.lon) {
            alert(
                '⚠️ Location permission is disabled.\n\nTo enable it again:\n' +
                    '1️. Open your browser’s settings or site permissions.\n' +
                    '2. Look for "Location" and set it to "Allow" for this website.\n' +
                    '3. Reload or reopen this page after granting permission.',
            );
            return; 
        }

        form.post('/gamification/redeem', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <>
            <Details />

            <section className="mt-5 mb-10 flex justify-center">
                <div className="container text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        className={`w-75 rounded-full border px-7 py-2 font-medium lg:w-100 ${
                            isDisabled
                                ? 'cursor-not-allowed border-gray-400 bg-gray-400 text-gray-200'
                                : 'border-primary bg-primary text-white hover:border-primary hover:bg-transparent hover:text-primary'
                        }`}
                    >
                        {isDisabled ? `Please wait ${countdown}s...` : 'Claim Pakil Points'}
                    </button>
                </div>
            </section>
        </>
    );
}
