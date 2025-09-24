import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

interface Route {
    name: string;
    price?: number;
}

interface Terminal {
    id: number;
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Route[];
    address?: string;
}

const containerStyle = {
    width: "100%",
    height: "100%",
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
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
    });

    const [selectedTerminal, setSelectedTerminal] = React.useState<Terminal | null>(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    const onLoad = (mapInstance: google.maps.Map) => {
        setMap(mapInstance);
    };

    const onUnmount = () => {
        setMap(null);
    };

    React.useEffect(() => {
        if (map && terminals.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            terminals.forEach((terminal) => {
                bounds.extend(
                    new window.google.maps.LatLng(
                        parseFloat(terminal.lat),
                        parseFloat(terminal.long)
                    )
                );
            });
            map.fitBounds(bounds);
        }
    }, [map, terminals]);

    if (!isLoaded) {
        return <div>Loading map...</div>;
    }

    return (
        <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <div className="relative flex h-100 items-center justify-center bg-gray-100 md:h-[60vh]">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={5}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {terminals.map((terminal) => (
                        <Marker
                            key={terminal.id}
                            position={{
                                lat: parseFloat(terminal.lat),
                                lng: parseFloat(terminal.long),
                            }}
                            onClick={() => setSelectedTerminal(terminal)}
                            title={terminal.name}
                            icon={{
                                url: "/User/Images/pin.png",
                                scaledSize: new window.google.maps.Size(70, 70),
                                anchor: new window.google.maps.Point(20, 40),
                            }}
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
                                <h3 className="mb-2 text-lg font-bold">
                                    {selectedTerminal.name}
                                </h3>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </div>
    );
};

export default TerminalsMap;
