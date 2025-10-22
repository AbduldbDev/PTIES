import { useEffect, useRef, useState } from 'react';

interface MapComponentProps {
    initialLat: number;
    initialLng: number;
    onMarkerMove?: (lat: number, lng: number) => void;
    mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
}

declare global {
    interface Window {
        google: any;
    }
}

const MapComponent = ({ initialLat, initialLng, onMarkerMove }: MapComponentProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<google.maps.Map | null>(null);
    const marker = useRef<google.maps.Marker | null>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const isInitialized = useRef(false);
    const previousPosition = useRef({ lat: initialLat, lng: initialLng });
    const clickListener = useRef<google.maps.MapsEventListener | null>(null);

    useEffect(() => {
        const loadGoogleMaps = () => {
            if (window.google && window.google.maps) {
                setIsScriptLoaded(true);
                return;
            }

            if (document.querySelector('script[src*="maps.googleapis.com"]')) {
                const checkScript = () => {
                    if (window.google && window.google.maps) {
                        setIsScriptLoaded(true);
                    } else {
                        setTimeout(checkScript, 100);
                    }
                };
                checkScript();
                return;
            }

            const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
            console.log('Google Maps Key:', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

            if (!apiKey) {
                console.error('Google Maps API key is not defined');
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => setIsScriptLoaded(true);
            script.onerror = () => {
                console.error('Failed to load Google Maps script');
            };
            document.head.appendChild(script);
        };

        loadGoogleMaps();
    }, []);

    useEffect(() => {
        if (!isScriptLoaded || !mapRef.current || isInitialized.current) return;

        const initMap = () => {
            const mapOptions: google.maps.MapOptions = {
                center: { lat: initialLat, lng: initialLng },
                zoom: 16,
            };

            map.current = new google.maps.Map(mapRef.current!, mapOptions);

            marker.current = new google.maps.Marker({
                position: { lat: initialLat, lng: initialLng },
                map: map.current,
                draggable: true,
                title: 'Drag me!',
            });

            marker.current.addListener('dragend', () => {
                const position = marker.current!.getPosition();
                if (!position) return;

                const lat = position.lat();
                const lng = position.lng();
                previousPosition.current = { lat, lng };

                if (onMarkerMove) {
                    onMarkerMove(lat, lng);
                }
            });

            // Map click event to place marker - add only once
            if (clickListener.current) {
                google.maps.event.removeListener(clickListener.current);
            }

            clickListener.current = map.current.addListener('click', (event: google.maps.MapMouseEvent) => {
                if (!event.latLng) return;

                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                marker.current!.setPosition({ lat, lng });
                previousPosition.current = { lat, lng };

                if (onMarkerMove) {
                    onMarkerMove(lat, lng);
                }
            });

            isInitialized.current = true;
        };

        initMap();

        return () => {
            if (marker.current) {
                google.maps.event.clearInstanceListeners(marker.current);
            }
            if (clickListener.current) {
                google.maps.event.removeListener(clickListener.current);
            }
        };
    }, [isScriptLoaded]); // Removed onMarkerMove from dependencies

    // Update marker position without re-centering the map
    useEffect(() => {
        if (!marker.current || !isInitialized.current) return;

        // Only update if the position has actually changed
        const hasPositionChanged = initialLat !== previousPosition.current.lat || initialLng !== previousPosition.current.lng;

        if (hasPositionChanged) {
            marker.current.setPosition({ lat: initialLat, lng: initialLng });
            previousPosition.current = { lat: initialLat, lng: initialLng };
        }
    }, [initialLat, initialLng]);

    return <div ref={mapRef} style={{ height: '260px', width: '100%' }} className="rounded-lg border border-gray-300" />;
};

export default MapComponent;
