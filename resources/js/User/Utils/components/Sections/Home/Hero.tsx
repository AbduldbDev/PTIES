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
        <section className="hero-clip-path relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-10 md:pt-0">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}')`,
                    }}
                ></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-30 md:opacity-90"></div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                <p className="flex items-center text-white">
                                    <i className="fas fa-map-marker-alt mr-2 text-accent"></i>
                                    Laguna, Philippines
                                </p>
                            </div>
                        </div>

                        <h1 className="mb-4 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                            <span className="text-secondary">{content.title}</span>
                        </h1>
                        <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl lg:text-4xl">{content.subtitle}</h2>
                        <p className="mx-auto mb-8 max-w-lg text-lg text-white/90 italic md:text-xl lg:mx-0">
                            <i className="fas fa-quote-left mr-2 text-secondary/50"></i>
                            {content.slogan}
                            <i className="fas fa-quote-right ml-2 text-secondary/50"></i>
                        </p>

                        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-center font-bold text-primary transition duration-300 hover:bg-secondary/90"
                            >
                                <i className="fas fa-compass mr-2"></i> Explore Now
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-center font-medium text-white transition duration-300 hover:bg-white/20"
                            >
                                <i className="fas fa-info-circle mr-2"></i> Learn More
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start">
                            <div className="flex items-center text-white">
                                <i className="fas fa-church mr-2 text-xl text-accent"></i>
                                <span>Religious Sites</span>
                            </div>
                            <div className="flex items-center text-white">
                                <i className="fas fa-utensils mr-2 text-xl text-accent"></i>
                                <span>Local Cuisine</span>
                            </div>
                            <div className="flex items-center text-white">
                                <i className="fas fa-water mr-2 text-xl text-accent"></i>
                                <span>Waterfalls</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:w-1/2">
                        <div className="floating relative w-full max-w-md">
                            <div className="overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-md">
                                <img
                                    src={typeof content.feature_img === 'string' ? content.feature_img : '/User/Images/church.jpg'}
                                    alt="Hero section feature"
                                    className="h-auto w-full rounded-xl object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 shadow-xl md:block">
                                <div className="flex items-center">
                                    <div className="mr-3 rounded-lg bg-primary/10 p-3">
                                        <i className="fas fa-church text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Must Visit</p>
                                        <p className="text-dark font-semibold">{content.feature_title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 hidden rounded-full bg-secondary p-4 shadow-xl md:block">
                                <i className="fas fa-star text-2xl text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
                <a href="#explore" className="flex h-16 w-10 flex-col items-center justify-end">
                    <span className="mb-1 text-sm text-white">Scroll</span>
                    <div className="relative h-8 w-1 rounded-full bg-white/50">
                        <div className="animate-scroll absolute top-0 h-4 w-1 rounded-full bg-white"></div>
                    </div>
                </a>
            </div>
        </section>
    );
}
