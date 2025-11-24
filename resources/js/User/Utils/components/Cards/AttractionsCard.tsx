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
    index: number;
};

export default function AttractionsCard({ item, index }: Props) {
    const images: string[] = Array.isArray(item.images)
        ? item.images
        : (() => {
              try {
                  return JSON.parse(item.images as unknown as string) || [];
              } catch {
                  return [];
              }
          })();

    const randomImage = images.length > 0 ? images[Math.floor(Math.random() * images.length)] : '/User/Images/church.jpg';
    const OperatingHours = (item.operating_hours || '').split('\n').filter((p) => p.trim() !== '');

    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={500 + index * 50}
        >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={randomImage}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>

                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                    <i className="fas fa-map-marker-alt mr-1.5 text-[10px] sm:text-xs"></i>
                    <span className="text-xs sm:text-sm">{item.distance}</span>
                </span>
                <span className="absolute top-3 left-3 rounded-full bg-gradient-to-l from-primary to-secondary px-2 py-1 text-xs font-medium text-white shadow-sm transition-all duration-300 group-hover:scale-105 sm:px-3">
                    <span className="text-xs sm:text-sm">{item.category.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                </span>
            </div>

            <div className="relative flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-dark mb-2 text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-primary sm:mb-3 sm:text-xl">
                    {item.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:mb-5 sm:text-sm">
                    {item.information.length > 200 ? item.information.substring(0, 200) + '...' : item.information}
                </p>

                <div className="mt-auto">
                    <div className="mb-3 flex items-start text-gray-500 sm:mb-4">
                        <i className="fas fa-clock mt-0.5 mr-2 text-xs text-primary/80 sm:mr-3 sm:text-sm"></i>
                        <div className="space-y-0.5 text-xs sm:text-sm">
                            {OperatingHours.map((hour, index) => (
                                <p key={index} className="transition-colors duration-300 group-hover:text-gray-700">
                                    {hour}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-gray-100 pt-3 sm:pt-4">
                        <a
                            href={`/explore/attraction-details/${item.attraction_id}`}
                            className="group/btn inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 hover:text-primary/80 sm:text-base"
                        >
                            View Details
                            <i className="fas fa-arrow-right ml-1 text-xs transition-transform duration-300 group-hover/btn:translate-x-1 sm:ml-2 sm:text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
