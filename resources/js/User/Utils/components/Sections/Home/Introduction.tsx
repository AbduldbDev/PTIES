import { useState } from 'react';

interface IntroductionContent {
    title?: string;
    description?: string;
    facts?: string;
    image1: string;
    image2: string;
    image3: string;
    highlights?: Highlight[];
}

type Highlight = {
    text: string;
    icon: string;
};

interface Props {
    content: IntroductionContent;
}

export default function IntroductionSection({ content }: Props) {
    const paragraphs = (content?.description || '').split('\n').filter((p) => p.trim() !== '');

    const imageGallery = [
        {
            src: content.image1 || '/User/Images/church.jpg',
            alt: 'San Pedro de Alcantara Church',
        },
        {
            src: content.image2 || '/User/Images/kayas.jpg',
            alt: 'Kayas Festival',
        },
        {
            src: content.image3 || '/User/Images/ibuli.jpg',
            alt: 'Ibuli Shrine',
        },
    ];

    const [mainImage, setMainImage] = useState(imageGallery[0].src);

    const handleImageClick = (src: string) => {
        setMainImage(src);
    };

    return (
        <section className="py-8 md:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-5 md:px-6">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-12">
                    {/* Image Gallery Section */}
                    <div className="lg:w-1/2">
                        <div className="group relative">
                            <div
                                className="absolute -inset-1 rounded-lg bg-primary/20 blur-md transition duration-300 group-hover:blur-lg md:-inset-2 md:rounded-xl"
                                data-aos="fade-in"
                            />
                            <img
                                src={mainImage}
                                alt="Pakil Town View"
                                className="relative aspect-16/9 h-auto w-full rounded-lg border-4 border-white object-cover shadow-lg md:rounded-xl md:shadow-xl"
                                loading="lazy"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            />
                            <div
                                className="absolute -right-3 -bottom-3 hidden rounded-lg border border-gray-100 bg-white p-3 shadow-md md:-right-4 md:-bottom-4 md:block md:rounded-xl md:p-4 lg:-right-5 lg:-bottom-5"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="flex items-center">
                                    <div className="mr-2 rounded-md bg-primary/10 p-2 md:mr-3 md:rounded-lg md:p-3">
                                        <i className="fas fa-landmark text-lg text-primary md:text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 md:text-xs">Did you know?</p>
                                        <p className="text-dark text-xs font-semibold md:text-sm">{content.facts}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-3 md:mt-6 md:gap-4">
                            {imageGallery.map((image, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="cursor-pointer overflow-hidden rounded-md border border-white shadow transition duration-300 hover:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none md:rounded-lg"
                                    onClick={() => handleImageClick(image.src)}
                                    aria-label={`View ${image.alt}`}
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 100}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-16 w-full object-cover transition duration-300 hover:scale-110 md:h-20 lg:h-24"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <div
                            className="prose prose-sm md:prose-lg mb-6 rounded-lg bg-white/80 p-5 shadow-md backdrop-blur-sm md:mb-8 md:rounded-xl md:p-6 lg:p-8"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <div className="mb-3 flex items-center md:mb-4" data-aos="fade-right" data-aos-delay="200">
                                <div className="mr-2 h-1 w-6 rounded-full bg-secondary md:mr-3 md:w-8" />
                                <h2 className="text-xs font-semibold tracking-wide text-primary uppercase md:text-sm">Discover</h2>
                            </div>
                            <h3
                                className="text-dark mb-4 text-xl font-bold md:mb-6 md:text-2xl lg:text-3xl xl:text-4xl"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <span className="text-primary">{content.title}</span>
                            </h3>

                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="mb-3 text-sm text-gray-700 md:mb-4 md:text-base"
                                    data-aos="fade-right"
                                    data-aos-delay={400 + index * 100}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {content.highlights && content.highlights.length > 0 && (
                            <div
                                className="mb-6 rounded-r-md border-l-4 border-primary bg-primary/5 p-3 md:mb-8 md:rounded-r-lg md:p-4"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <h4
                                    className="mb-2 flex items-center text-sm font-bold text-primary md:mb-3 md:text-base"
                                    data-aos="fade-right"
                                    data-aos-delay="600"
                                >
                                    <i className="fas fa-star mr-1.5 text-xs text-secondary md:mr-2 md:text-sm" /> Cultural Highlights
                                </h4>
                                <ul className="space-y-1.5 text-sm text-gray-700 md:space-y-2 md:text-base">
                                    {content.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start" data-aos="fade-right" data-aos-delay={700 + index * 100}>
                                            {highlight.icon ? (
                                                <>
                                                    <i
                                                        className={`fas ${highlight.icon} mt-0.5 mr-1.5 text-xs text-secondary md:mt-1 md:mr-2 md:text-sm`}
                                                    />
                                                </>
                                            ) : (
                                                <span className="mt-0.5 mr-1.5 text-xs text-secondary md:mt-1 md:mr-2 md:text-sm">•</span>
                                            )}
                                            <span className="text-xs md:text-sm">{highlight.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div
                            className="rounded-md border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-4 md:rounded-lg md:p-5"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="mb-3 md:mr-4 md:mb-0" data-aos="zoom-in" data-aos-delay="900">
                                    <i className="fas fa-mountain text-2xl text-primary md:text-3xl lg:text-4xl" />
                                </div>
                                <div>
                                    <h4 className="text-dark mb-1 text-sm font-bold md:text-base" data-aos="fade-right" data-aos-delay="1000">
                                        Explore Nature's Beauty
                                    </h4>
                                    <p className="mb-2 text-xs text-gray-600 md:mb-3 md:text-sm" data-aos="fade-right" data-aos-delay="1100">
                                        A hike to Mount Ping-as offers stunning views and spiritual renewal
                                    </p>
                                    <a
                                        href="#"
                                        className="flex items-center text-xs font-medium text-primary hover:text-primary/80 md:text-sm"
                                        data-aos="fade-right"
                                        data-aos-delay="1200"
                                    >
                                        Discover hiking trails
                                        <i className="fas fa-arrow-right ml-1.5 text-xs md:ml-2 md:text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
