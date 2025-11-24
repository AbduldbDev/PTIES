interface TerminalProps {
    id: number;
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Routes[] | string;
}

type Routes = {
    name: string;
};

interface Props {
    terminal: TerminalProps;
    index: number;
}

export default function Terminal({ terminal, index }: Props) {
    const routesArray = Array.isArray(terminal.routes) ? terminal.routes : [];

    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={500 + index * 50}
        >
            <div className="absolute -inset-1 rounded-xl bg-primary/10 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
            <div className="relative flex-1 p-5">
                <h3 className="text-dark mb-4 text-xl font-bold" data-aos="fade-down" data-aos-delay="100">
                    {terminal.name}
                </h3>

                {routesArray.length > 0 ? (
                    <div className="mb-4" data-aos="fade-right" data-aos-delay="200">
                        <h4 className="mb-2 flex items-center font-medium text-gray-700">
                            <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                            {routesArray.map((route, index) => (
                                <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={300 + index * 50}>
                                    <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                    <span>{route.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="mb-4" data-aos="fade-right" data-aos-delay="200">
                        <h4 className="mb-2 flex items-center font-medium text-gray-700">
                            <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                        </h4>
                        <p className="text-sm text-gray-500 italic">No route information available</p>
                    </div>
                )}
            </div>

            <div className="relative mt-auto px-5 pb-5">
                <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                        <i className="fas fa-clock mr-2 text-secondary"></i> Operating Hours:
                    </h4>
                    <div className="text-sm text-gray-600">
                        <p>{terminal.sched}</p>
                        <p className="mt-1 text-xs text-gray-500">{terminal.sched_desc}</p>
                    </div>
                </div>

                <div className="flex justify-end border-t border-gray-100 pt-3" data-aos="fade-left" data-aos-delay="500">
                    <a
                        href={`https://www.google.com/maps?q=${terminal.lat},${terminal.long}&z=15&t=m`}
                        className="z-50 flex items-center font-medium text-primary hover:text-primary/90"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        View Directions <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
