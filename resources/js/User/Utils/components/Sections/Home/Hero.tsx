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
            <section className="hero-clip-path relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-white pt-20 md:min-h-screen md:pt-0">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}')`,
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent opacity-50 md:opacity-90"></div>

                <div className="relative z-10 container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-20">
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10 xl:gap-12">
                        <div className="text-center lg:w-1/2 lg:text-left">
                            <div className="mb-3 flex justify-center md:mb-4 lg:justify-start">
                                <div className="rounded-full border border-white/30 bg-white/20 px-2.5 py-1 backdrop-blur-sm md:px-3 md:py-1.5 lg:px-4 lg:py-2">
                                    <p className="flex items-center text-xs text-white md:text-sm lg:text-base">
                                        <i className="fas fa-map-marker-alt mr-1.5 text-[10px] text-accent md:text-xs lg:text-sm"></i>
                                        Laguna, Philippines
                                    </p>
                                </div>
                            </div>

                            <h1 className="mb-2 text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="text-secondary">{content.title}</span>
                            </h1>
                            <h2 className="mb-3 text-2xl font-semibold text-white md:text-2xl lg:text-3xl xl:text-4xl">{content.subtitle}</h2>
                            <p className="mx-auto mb-4 max-w-xl font-custom text-lg text-white/90 italic md:text-base lg:mx-0 lg:mb-6 lg:text-3xl">
                                <i className="fas fa-quote-left mr-1 text-[10px] text-secondary/90 md:text-2xl"></i>
                                {content.slogan}
                                <i className="fas fa-quote-right ml-1 text-[10px] text-secondary/90 md:text-2xl"></i>
                            </p>

                            <div className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-3 lg:justify-start">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-center text-xs font-bold text-primary transition duration-300 hover:bg-secondary/90 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-compass mr-1.5 text-[10px] sm:text-xs md:text-sm"></i> Explore Now
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-center text-xs font-medium text-white transition duration-300 hover:bg-white/20 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-info-circle mr-1.5 text-[10px] sm:text-xs md:text-sm"></i> Learn More
                                </a>
                            </div>

                            <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3 lg:justify-start">
                                <div className="flex items-center text-xs text-white sm:text-sm md:text-base">
                                    <i className="fas fa-church mr-1 text-sm text-accent md:text-base lg:text-lg"></i>
                                    <span>Religious Sites</span>
                                </div>
                                <div className="flex items-center text-xs text-white sm:text-sm md:text-base">
                                    <i className="fas fa-utensils mr-1 text-sm text-accent md:text-base lg:text-lg"></i>
                                    <span>Local Cuisine</span>
                                </div>
                                <div className="flex items-center text-xs text-white sm:text-sm md:text-base">
                                    <i className="fas fa-water mr-1 text-sm text-accent md:text-base lg:text-lg"></i>
                                    <span>Waterfalls</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-4 flex justify-center lg:mt-0 lg:w-1/2">
                            <div className="floating relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                                <div className="overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 p-1 shadow-xl backdrop-blur-md sm:rounded-2xl md:p-1.5">
                                    <img
                                        src={typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}
                                        alt="Hero section feature"
                                        className="aspect-video h-auto w-full rounded-lg object-cover sm:rounded-xl"
                                        loading="eager"
                                    />
                                </div>
                                <div className="absolute -bottom-3 -left-3 rounded-lg bg-white p-2 shadow-lg sm:-bottom-4 sm:-left-4 sm:rounded-xl sm:p-3 md:-bottom-5 md:-left-5 md:p-4">
                                    <div className="flex items-center">
                                        <div className="mr-1.5 rounded-md bg-primary/10 p-1.5 sm:mr-2 sm:rounded-lg sm:p-2 md:p-2.5">
                                            <i className="fas fa-church text-sm text-primary sm:text-base md:text-lg"></i>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 sm:text-xs md:text-sm">Must Visit</p>
                                            <p className="text-dark text-xs font-semibold sm:text-sm md:text-base">{content.feature_title}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-3 -right-3 rounded-full bg-secondary p-2 shadow-lg sm:-top-4 sm:-right-4 sm:p-2.5 md:-top-5 md:-right-5 md:p-3">
                                    <i className="fas fa-star text-sm text-white sm:text-base md:text-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform animate-bounce sm:bottom-10">
                    <a href="#explore" className="flex h-10 w-6 flex-col items-center justify-end sm:h-12 sm:w-7 md:h-14 md:w-8">
                        <span className="mb-0.5 text-[10px] text-white sm:text-xs md:mb-1 md:text-sm">Scroll</span>
                        <div className="relative h-4 w-0.5 rounded-full bg-white/50 sm:h-5 sm:w-0.5 md:h-6 md:w-1">
                            <div className="animate-scroll absolute top-0 h-2 w-0.5 rounded-full bg-white sm:h-2.5 md:h-3"></div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}
