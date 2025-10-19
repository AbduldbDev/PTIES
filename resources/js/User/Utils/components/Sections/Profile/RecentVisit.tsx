import { usePage } from '@inertiajs/react';

interface RecentVisitProps {
    id: number;
    points: number;
    created_at: string;
    attraction: AttractionProps;
}

type AttractionProps = {
    name: string;
};

type PageProps = {
    visit: RecentVisitProps[];
};

export default function RecentVisit() {
    const { visit } = usePage<PageProps>().props;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <section className="py-1 lg:py-4">
            <div className="container mx-auto px-4">
                <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 p-4">
                        <h2 className="flex items-center text-lg font-bold text-primary sm:text-lg">
                            <i className="fas fa-map-marked-alt mr-2 text-base sm:text-lg"></i>
                            <span className="text-sm sm:text-base"> Recent Visits</span>
                        </h2>
                    </div>

                    <div className="p-4">
                        {visit.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                                <div className="mb-3 rounded-full bg-gray-100 p-4 sm:mb-4 sm:p-6">
                                    <i className="fas fa-map-marked-alt text-2xl text-gray-400 sm:text-3xl"></i>
                                </div>
                                <h3 className="mb-2 text-base font-semibold text-gray-700 sm:text-lg">No recent visits</h3>
                                <p className="mb-4 text-sm text-gray-500 sm:text-base">
                                    our visits will appear here once you start exploring attractions.
                                </p>
                                <a
                                    href="/explore/attractions"
                                    className="rounded-full border border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-primary sm:text-base"
                                >
                                    Explore Now!
                                </a>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {visit.map((item, index) => (
                                    <div key={item.id || index} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                        <div>
                                            <p className="font-medium">{item.attraction.name}</p>
                                            <p className="text-xs text-gray-500">{formatDate(item.created_at)}</p>
                                        </div>
                                        <div className="flex items-center text-secondary">
                                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="Points" />
                                            <span className="text-sm sm:text-sm">{item.points} pts</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
