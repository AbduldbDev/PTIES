type AttractionProps = {
    id: number;
    attraction_id: string;
    name: string;
    category: string;
    operating_hours: string;
    information: string;
    history: string;
    local_rules: string;
    fun_facts: string;
    fees: string;
    distance: string;
    points: number;
    long: string;
    lat: string;
    images: string;
    qr_path: string;
    contact: Contact[];
};

type Contact = {
    name: string;
    position: string;
    contact: string;
};

type Props = {
    item: AttractionProps;
};

export default function AttractionsCard({ item }: Props) {
    const images: string[] = Array.isArray(item.images)
        ? item.images
        : (() => {
              try {
                  return JSON.parse(item.images as unknown as string) || [];
              } catch {
                  return [];
              }
          })();

    const firstImage = images.length > 0 ? `${images[0]}` : '/User/Images/church.jpg';

    return (
        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
            <div className="relative">
                <div className="h-48 overflow-hidden">
                    <img
                        src={firstImage}
                        alt="San Pedro Church"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>
                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {item.distance}
                </span>
                <span className="absolute top-3 left-3 rounded-full bg-secondary px-2 py-1 text-xs text-white">
                    {item.category.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
                </span>
            </div>
            <div className="p-5">
                <h3 className="text-dark mb-2 text-xl font-bold">{item.name}</h3>
                <p className="mb-4 line-clamp-2 text-gray-600">
                    {item.information.length > 200 ? item.information.substring(0, 200) + '...' : item.information}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                        <i className="fas fa-clock mr-1"></i>
                        <span>{item.operating_hours}</span>
                    </div>
                    <a
                        href={`/explore/attraction-details/${item.attraction_id}`}
                        className="z-10 flex items-center font-medium text-primary hover:text-primary/90"
                    >
                        View Details <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
