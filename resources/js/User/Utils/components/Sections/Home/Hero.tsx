interface HeroContent {
    title?: string;
    subtitle?: string;
    image?: string;
    slogan?: string;
    feature_title?: string;
    feature_img?: string;
    cta_text?: string;
}

interface Props {
    content: HeroContent;
}

export default function HeroSection({ content }: Props) {
    return (
        <>
            <section className="hero-clip-path relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16 md:pt-0">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}')`,
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-40 md:opacity-90"></div>

                <div className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                        <div className="text-center lg:w-1/2 lg:text-left">
                            <div className="mb-4 flex justify-center lg:justify-start">
                                <div className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 backdrop-blur-sm md:px-4 md:py-2">
                                    <p className="flex items-center text-sm text-white md:text-base">
                                        <i className="fas fa-map-marker-alt mr-2 text-xs text-accent md:text-sm"></i>
                                        Laguna, Philippines
                                    </p>
                                </div>
                            </div>

                            <h1 className="mb-3 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="text-secondary">{content.title}</span>
                            </h1>
                            <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl lg:text-3xl xl:text-4xl">{content.subtitle}</h2>
                            <p className="mx-auto mb-6 max-w-lg text-base text-white/90 italic md:text-lg lg:mx-0">
                                <i className="fas fa-quote-left mr-1 text-xs text-secondary/50 md:text-sm"></i>
                                {content.slogan}
                                <i className="fas fa-quote-right ml-1 text-xs text-secondary/50 md:text-sm"></i>
                            </p>

                            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 text-center text-sm font-bold text-primary transition duration-300 hover:bg-secondary/90 md:px-8 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-compass mr-2 text-xs md:text-sm"></i> Explore Now
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-center text-sm font-medium text-white transition duration-300 hover:bg-white/20 md:px-8 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-info-circle mr-2 text-xs md:text-sm"></i> Learn More
                                </a>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 lg:justify-start">
                                <div className="flex items-center text-sm text-white md:text-base">
                                    <i className="fas fa-church mr-1.5 text-lg text-accent md:text-xl"></i>
                                    <span>Religious Sites</span>
                                </div>
                                <div className="flex items-center text-sm text-white md:text-base">
                                    <i className="fas fa-utensils mr-1.5 text-lg text-accent md:text-xl"></i>
                                    <span>Local Cuisine</span>
                                </div>
                                <div className="flex items-center text-sm text-white md:text-base">
                                    <i className="fas fa-water mr-1.5 text-lg text-accent md:text-xl"></i>
                                    <span>Waterfalls</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-6 flex justify-center lg:mt-0 lg:w-1/2">
                            <div className="floating relative w-full max-w-xs md:max-w-md">
                                <div className="overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-md">
                                    <img
                                        src={typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}
                                        alt="Hero section feature"
                                        className="h-auto w-full rounded-xl object-cover"
                                        loading="eager"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-xl md:-bottom-6 md:-left-6 md:p-4">
                                    <div className="flex items-center">
                                        <div className="mr-2 rounded-lg bg-primary/10 p-2 md:mr-3 md:p-3">
                                            <i className="fas fa-church text-lg text-primary md:text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 md:text-sm">Must Visit</p>
                                            <p className="text-dark text-sm font-semibold md:text-base">{content.feature_title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 rounded-full bg-secondary p-3 shadow-xl md:-top-6 md:-right-6 md:p-4">
                                    <i className="fas fa-star text-lg text-white md:text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce">
                    <a href="#explore" className="flex h-12 w-8 flex-col items-center justify-end md:h-16 md:w-10">
                        <span className="mb-0.5 text-xs text-white md:mb-1 md:text-sm">Scroll</span>
                        <div className="relative h-6 w-0.5 rounded-full bg-white/50 md:h-8 md:w-1">
                            <div className="animate-scroll absolute top-0 h-3 w-0.5 rounded-full bg-white md:h-4 md:w-1"></div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}
