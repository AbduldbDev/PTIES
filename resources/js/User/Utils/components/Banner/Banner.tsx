interface BannerProps {
    title: string;
    subtitle: string;
    className?: string;
    imageSrc: string;
    desc?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, className = '', desc = '', imageSrc }) => {
    const words = subtitle.split(' ');

    return (
        <div className="relative h-64 overflow-hidden md:h-96">
            <img src={imageSrc} alt="City Skyline" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex items-end pb-8 md:pb-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-left">
                        <div className="mb-2 inline-flex items-center">
                            <div className="mr-2 h-1 w-4 rounded-full bg-secondary md:w-6"></div>
                            <h2 className="text-xs font-semibold tracking-wider text-white uppercase">{title}</h2>
                            <div className="ml-2 h-1 w-4 rounded-full bg-secondary md:w-6"></div>
                        </div>
                        <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                            {words.length > 1 ? (
                                <>
                                    {words[0]} <span className="text-secondary">{words[1]}</span> {words.slice(2).join(' ')}
                                </>
                            ) : (
                                subtitle
                            )}
                        </h3>
                        <p className="max-w-lg text-sm text-white/90 md:text-base">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
