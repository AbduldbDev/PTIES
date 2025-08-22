import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

interface Route {
    name: string;
    price?: number; // Added price property based on usage in the component
}

interface Terminal {
    id: number;
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Route[];
    address?: string; // Added address property based on usage in the component
}

const containerStyle = {
    width: '100%',
    height: '100%',
};

interface TerminalsMapProps {
    terminals: Terminal[];
    apiKey: string;
}

const defaultCenter = {
    lat: 14.5995,
    lng: 120.9842,
};

const TerminalsMap: React.FC<TerminalsMapProps> = ({ terminals, apiKey }) => {
    const [selectedTerminal, setSelectedTerminal] = React.useState<Terminal | null>(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    const onLoad = (mapInstance: google.maps.Map) => {
        setMap(mapInstance);
    };

    const onUnmount = () => {
        setMap(null);
    };

    // Fit map bounds to show all markers
    React.useEffect(() => {
        if (map && terminals.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();

            terminals.forEach((terminal) => {
                bounds.extend(new window.google.maps.LatLng(parseFloat(terminal.lat), parseFloat(terminal.long)));
            });

            map.fitBounds(bounds);
            const padding = 50;
            map.panToBounds(bounds, padding);
        }
    }, [map, terminals]);

    return (
        <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <div className="relative flex h-100 items-center justify-center bg-gray-100 md:h-[60vh]">
                <LoadScript googleMapsApiKey={apiKey}>
                    <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={5} onLoad={onLoad} onUnmount={onUnmount}>
                        {terminals.map((terminal) => (
                            <Marker
                                key={terminal.id}
                                position={{
                                    lat: parseFloat(terminal.lat),
                                    lng: parseFloat(terminal.long),
                                }}
                                onClick={() => setSelectedTerminal(terminal)}
                                title={terminal.name}
                            />
                        ))}

                        {selectedTerminal && (
                            <InfoWindow
                                position={{
                                    lat: parseFloat(selectedTerminal.lat),
                                    lng: parseFloat(selectedTerminal.long),
                                }}
                                onCloseClick={() => setSelectedTerminal(null)}
                            >
                                <div className="p-2">
                                    <h3 className="mb-2 text-lg font-bold">{selectedTerminal.name}</h3>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default TerminalsMap;
