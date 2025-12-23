type FestivalProps = {
    name?: string;
    founded?: string;
    duration?: string;
    venue?: string;
    description?: string;
    highlights?: Highlight[];
};

type Highlight = {
    icon: string;
    title: string;
    desc: string;
};

interface Props {
    content: FestivalProps;
}

export default function Festival({ content }: Props) {
    const paragraphs = (content?.description || '').split('\n').filter((p) => p.trim() !== '');
    return (
        <>
            <div className="space-y-8">
                {/* Festival header with facts */}
                <div className="flex flex-col gap-6 lg:flex-row">
                    {/* Festival title and description */}
                    <div className="flex-1">
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                            {/* Perfect circle icon container */}
                            <div className="flex justify-center sm:justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white sm:h-16 sm:w-16 md:h-15 md:w-15">
                                    <i className="fa-solid fa-calendar-days text-lg sm:text-xl md:text-2xl"></i>
                                </div>
                            </div>

                            <div className="text-center sm:text-left">
                                <h1 className="text-dark text-xl leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl">"{content?.name}"</h1>
                                <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-gray-600 sm:justify-start sm:gap-3 sm:text-sm">
                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5">
                                        <i className="fas fa-history mr-1.5 text-[10px] sm:text-xs"></i>
                                        <span className="font-medium">Founded:</span>
                                        <span className="ml-1">{content?.founded}</span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5">
                                        <i className="fas fa-calendar-alt mr-1.5 text-[10px] sm:text-xs"></i>
                                        <span className="font-medium">Duration:</span>
                                        <span className="ml-1">{content?.duration}</span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5">
                                        <i className="fas fa-church mr-1.5 text-[10px] sm:text-xs"></i>
                                        <span className="font-medium">Venue:</span>
                                        <span className="ml-1">{content?.venue}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {paragraphs.length > 0 && (
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="p-6 md:p-8">
                            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {content.highlights && content.highlights.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {content.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md"
                            >
                                <div className="mb-4 flex items-center">
                                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <i className={`fas ${highlight.icon} text-lg`}></i>
                                    </div>
                                    <h5 className="text-lg font-bold text-gray-800">{highlight.title}</h5>
                                </div>
                                <p className="text-sm text-gray-600">{highlight.desc}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
                            <i className="fas fa-images mr-3 text-primary"></i> Festival Gallery
                        </h2>
                        <button className="text-sm font-medium text-primary hover:text-primary/80">
                            View All <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-100">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt={`Turumba Festival ${index + 1}`}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                                    <div className="absolute right-2 bottom-2 left-2 text-white">
                                        <p className="truncate text-xs font-medium">Turumba Moment {index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </>
    );
}
