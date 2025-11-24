type EstablishmentProps = {
    id: number;
    type: string;
    name: string;
    location: string;
    contact: string;
    facebook: string;
    long: string;
    lat: string;
    image?: string;
};

interface Props {
    details: EstablishmentProps;
    index: number;
}

export default function Establishment({ details, index }: Props) {
    return (
        <div
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={500 + index * 100}
        >
            {/* Fixed height image container */}
            <div className="h-48 w-full overflow-hidden bg-gray-100">
                <img
                    src={details.image ? `/storage/${details.image}` : '/User/Images/church.jpg'}
                    alt={details.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content area that grows to fill remaining space */}
            <div className="flex flex-1 flex-col p-4">
                <h4 className="text-dark mb-3 line-clamp-2 text-lg leading-tight font-bold">{details.name}</h4>

                <div className="mb-3 flex items-start text-xs text-gray-600">
                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                    <div className="flex flex-1 flex-col">
                        <span className="line-clamp-2 font-medium hover:text-primary">{details.location}</span>
                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${details.lat},${details.long}`}
                            target="_blank"
                            className="mt-1 text-xs text-primary hover:underline"
                        >
                            Get directions
                        </a>
                    </div>
                </div>

                <div className="mb-3 flex items-start text-xs text-gray-600">
                    <i className="fas fa-phone-alt mt-0.5 mr-2 text-primary"></i>
                    <div className="flex flex-1 flex-col">
                        <span className="font-medium hover:text-primary">{details.contact}</span>
                        <a href={`tel:${details.contact}`} className="mt-1 text-xs text-primary group-hover:underline">
                            Click to call
                        </a>
                    </div>
                </div>

                {/* Facebook link pushed to bottom */}
                <div className="mt-auto pt-2">
                    <a target="_blank" href={`${details.facebook}`} className="inline-flex items-center text-xs text-primary hover:text-primary/80">
                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                    </a>
                </div>
            </div>
        </div>
    );
}
