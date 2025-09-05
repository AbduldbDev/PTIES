type MunicipalStats = {
    area?: string;
    population?: string;
    growth?: string;
    literacy_rate?: string;
    employment_rate?: string;
    languages?: string;
    updated?: string;
};
interface Props {
    content: MunicipalStats;
    [key: string]: unknown;
}

export default function MunicipalStats({ content }: Props) {
    return (
        <>
            <div className="w-full">
                <div className="h-full rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm md:p-6">
                    <h4 className="mb-6 flex items-center text-xl font-bold">
                        <i className="fas fa-info-circle mr-3 text-primary"></i>
                        <span className="mr-1 text-primary">Municipal </span> Facts
                    </h4>
                    <div className="grid grid-cols-1 gap-6 p-0 md:p-6 lg:grid-cols-2">
                        <div className="mb-8">
                            <h5 className="text-dark mb-3 flex items-center font-semibold">
                                <i className="fas fa-route mr-2 text-secondary"></i> Distance From
                            </h5>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="rounded-lg border border-gray-200 bg-white p-3">
                                    <p className="text-sm text-gray-600">Sta. Cruz, Laguna</p>
                                    <p className="font-bold text-primary">19km</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3">
                                    <p className="text-sm text-gray-600">Manila via Laguna</p>
                                    <p className="font-bold text-primary">114km</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3">
                                    <p className="text-sm text-gray-600">Manila via Rizal</p>
                                    <p className="font-bold text-primary">80km</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-dark mb-3 flex items-center font-semibold">
                                <i className="fas fa-chart-bar mr-2 text-secondary"></i> Key Statistics
                            </h5>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Land Area</p>
                                    <p className="font-bold text-primary">{content.area ?? 0}</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Population (2016)</p>
                                    <p className="font-bold text-primary">{content.population ?? 0}</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Population Growth</p>
                                    <p className="font-bold text-primary">{content.growth ?? 0}</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Literacy Rate</p>
                                    <p className="font-bold text-primary">{content.literacy_rate ?? 0}</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Employment Rate</p>
                                    <p className="font-bold text-primary">{content.employment_rate ?? 0}</p>
                                </div>
                                <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                    <p className="text-sm text-gray-600">Languages</p>
                                    <p className="font-bold text-primary">{content.languages ?? 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4 text-center">
                        <span className="inline-flex items-center text-xs text-gray-400">
                            <i className="fas fa-info-circle mr-1 text-primary/70"></i>
                            Last updated: {content.updated || 'June 2025'}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
