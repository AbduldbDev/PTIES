type HotlineProps = {
    id: number;
    name: string;
    category: string;
    icon: string;
    hotline: string;
    contact: string;
    location: string;
    long: string;
    lat: string;
};

interface Props {
    hotlines: HotlineProps;
}

export default function Hotlines({ hotlines }: Props) {
    // Function to handle click-to-call
    const handleCall = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <>
            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-start">
                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                        <i className={`${hotlines.icon} text-primary`}></i>
                    </div>
                    <div>
                        <h3 className="text-dark font-bold">{hotlines.name}</h3>
                        <p className="text-sm text-gray-600">{hotlines.category}</p>
                    </div>
                </div>
                <div className="space-y-2 pl-12">
                    <div className="group flex cursor-pointer items-center text-sm" onClick={() => handleCall(hotlines.hotline)}>
                        <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <i className="fas fa-phone-alt text-xs text-primary"></i>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium">{hotlines.hotline}</span>
                            <span className="text-xs font-semibold text-primary group-hover:underline">Click to call</span>
                        </div>
                    </div>
                    <div className="group flex cursor-pointer items-center text-sm" onClick={() => handleCall(hotlines.contact)}>
                        <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <i className="fas fa-mobile-alt text-xs text-primary"></i>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium">{hotlines.contact}</span>
                            <span className="text-xs font-semibold text-primary group-hover:underline">Click to call</span>
                        </div>
                    </div>
                    <div className="flex items-start text-sm">
                        <div className="mt-0.5 mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                            <i className="fas fa-map-marker-alt text-xs text-primary"></i>
                        </div>
                        <span>{hotlines.location}</span>
                    </div>
                </div>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${hotlines.lat},${hotlines.long}`}
                    className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                    target="_blank"
                >
                    <i className="fas fa-directions mr-1"></i> View Directions
                </a>
            </div>
        </>
    );
}
