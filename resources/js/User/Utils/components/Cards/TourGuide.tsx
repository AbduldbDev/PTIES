interface PakilGuideProps {
    id: number;
    name: string;
    description: string;
    gender: string;
    contact: string;
    image: string;
    facebook: string;
}
interface Props {
    guide: PakilGuideProps;
    index: number;
}

export default function TourGuide({ guide, index }: Props) {
    return (
        <>
            <div
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md md:rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
            >
                <div className="relative aspect-4/4 h-40 flex-shrink-0 object-cover md:h-70">
                    <img src={`/storage/${guide.image}`} alt="Tour Guide" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 md:p-4">
                        <h4 className="text-sm font-bold text-white md:text-xl">{guide.name}</h4>
                    </div>
                </div>
                <div className="flex flex-grow flex-col p-3 md:p-5">
                    <div className="mb-2">
                        {guide.gender && (
                            <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                                    guide.gender.toLowerCase() === 'female'
                                        ? 'bg-pink-100 text-pink-800'
                                        : guide.gender.toLowerCase() === 'male'
                                          ? 'bg-blue-100 text-blue-800'
                                          : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                                {guide.gender}
                            </span>
                        )}
                    </div>
                    <p className="mb-3 flex-grow text-xs text-gray-600 md:mb-4 md:text-sm">{guide.description}</p>
                    <div className="mt-auto border-t border-gray-100 pt-3 md:pt-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs text-gray-500">Contact:</p>
                                <p className="text-xs font-medium text-gray-800 md:text-sm">{guide.contact}</p>
                            </div>
                            <a
                                target="_blank"
                                href={guide.facebook || '#'}
                                className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white transition duration-300 hover:bg-primary/90"
                            >
                                <i className="fa-brands fa-facebook-f mr-1.5 text-[10px] md:text-xs"></i>
                                <span className="xs:inline hidden lg:block">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
