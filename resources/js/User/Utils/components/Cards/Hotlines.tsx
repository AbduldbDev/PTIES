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
                    <div className="flex items-center text-sm">
                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                        <span>{hotlines.hotline}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                        <span>{hotlines.contact}</span>
                    </div>
                    <div className="flex items-start text-sm">
                        <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                        <span>{hotlines.location}</span>
                    </div>
                </div>
                <a
                    href={`https://www.google.com/maps?q=${hotlines.lat},${hotlines.long}&z=15&t=m`}
                    className="mt-3 inline-block text-sm font-medium text-primary"
                    target="_blank"
                >
                    <i className="fas fa-directions mr-1"></i> View Directions
                </a>
            </div>
        </>
    );
}
