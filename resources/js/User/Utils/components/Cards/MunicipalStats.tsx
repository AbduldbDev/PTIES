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
                <div className="h-full rounded-lg border border-primary/20 bg-primary/5 p-3 shadow-sm md:rounded-xl md:p-4 lg:p-6">
                    <h4 className="mb-4 flex items-center text-lg font-bold md:mb-5 md:text-xl">
                        <i className="fas fa-info-circle mr-2 text-sm text-primary md:mr-3 md:text-base"></i>
                        <span className="mr-1 text-primary">Municipal </span> Facts
                    </h4>
                    <div className="grid grid-cols-1 gap-4 p-0 md:gap-5 md:p-4 lg:grid-cols-2 lg:p-6">
                        <div className="mb-5 md:mb-6">
                            <h5 className="text-dark mb-2 flex items-center text-sm font-semibold md:mb-3 md:text-base">
                                <i className="fas fa-route mr-1.5 text-xs text-secondary md:mr-2 md:text-sm"></i> Distance From
                            </h5>
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4">
                                <div className="rounded-md border border-gray-200 bg-white p-2 md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Sta. Cruz, Laguna</p>
                                    <p className="text-sm font-bold text-primary md:text-base">19km</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Manila via Laguna</p>
                                    <p className="text-sm font-bold text-primary md:text-base">114km</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Manila via Rizal</p>
                                    <p className="text-sm font-bold text-primary md:text-base">80km</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-dark mb-2 flex items-center text-sm font-semibold md:mb-3 md:text-base">
                                <i className="fas fa-chart-bar mr-1.5 text-xs text-secondary md:mr-2 md:text-sm"></i> Key Statistics
                            </h5>
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Land Area</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.area ?? 0}</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Population</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.population ?? 0}</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Population Growth</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.growth ?? 0}</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Literacy Rate</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.literacy_rate ?? 0}</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Employment Rate</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.employment_rate ?? 0}</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-white p-2 text-center md:rounded-lg md:p-3">
                                    <p className="text-xs text-gray-600 md:text-sm">Languages</p>
                                    <p className="text-sm font-bold text-primary md:text-base">{content.languages ?? 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-gray-100 pt-3 text-center md:mt-5 md:pt-4">
                        <span className="inline-flex items-center text-[10px] text-gray-400 md:text-xs">
                            <i className="fas fa-info-circle mr-1 text-[10px] text-primary/70 md:text-xs"></i>
                            Last updated: {content.updated || 'June 2025'}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
