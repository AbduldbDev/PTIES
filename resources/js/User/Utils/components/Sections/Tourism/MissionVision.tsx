interface MissionVisionProps {
    mission?: string;
    vision?: string;
}
interface Props {
    content: MissionVisionProps;
}

export default function MissionVision({ content }: Props) {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
                {content.mission && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 transition-all hover:shadow-lg md:p-8">
                        <div className="mb-4 flex items-center md:mb-6">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-white md:mr-4 md:h-12 md:w-12 md:text-xl">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h4 className="text-dark text-xl font-bold md:text-2xl">Mission</h4>
                        </div>
                        <div className="prose text-gray-700">
                            <p className="text-sm md:text-base">{content.mission}</p>
                        </div>
                    </div>
                )}

                {content.vision && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 transition-all hover:shadow-lg md:p-8">
                        <div className="mb-4 flex items-center md:mb-6">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-white md:mr-4 md:h-12 md:w-12 md:text-xl">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h4 className="text-dark text-xl font-bold md:text-2xl">Vision</h4>
                        </div>
                        <div className="prose text-gray-700">
                            <p className="text-sm md:text-base">{content.vision}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
