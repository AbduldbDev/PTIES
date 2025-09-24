type EventProps = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    schedules: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: File[];
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
};

interface Props {
    events: EventProps;
}

export default function EventsCard({ events }: Props) {
  
    const images: string[] = Array.isArray(events.image)
        ? events.image
        : (() => {
              try {
                  return JSON.parse(events.image as unknown as string) || [];
              } catch {
                  return [];
              }
          })();

    const firstImage = images.length > 0 ? `${images[0]}` : '/User/Images/church.jpg';

    
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
            <div className="relative">
                <div className="aspect-video overflow-hidden">
                    <img src={firstImage} alt={events.title} className="h-full w-full object-cover" />
                </div>
            </div>
            <div className="p-4 md:p-6">
                <div className="mb-2 flex items-center text-xs text-gray-500 md:mb-3 md:text-sm">
                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                    <span>
                        {(() => {
                            const start = new Date(events.start_date);
                            const end = new Date(events.end_date);

                            const optionsMonthDay: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
                            const optionsFull: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

                            if (start.getFullYear() === end.getFullYear()) {
                                return `${start.toLocaleDateString('en-US', optionsMonthDay)} - ${end.toLocaleDateString('en-US', optionsMonthDay)}, ${start.getFullYear()}`;
                            } else {
                                return `${start.toLocaleDateString('en-US', optionsFull)} - ${end.toLocaleDateString('en-US', optionsFull)}`;
                            }
                        })()}
                    </span>
                </div>
                <h4 className="text-dark mb-2 text-lg font-bold md:mb-3 md:text-xl">{events.title}</h4>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600 md:mb-5 md:text-base">{events.description}</p>
                <a
                    href={`/events/details/${events.id}`}
                    className="flex items-center text-sm font-medium text-primary hover:text-primary/80 md:text-base"
                >
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    );
}
