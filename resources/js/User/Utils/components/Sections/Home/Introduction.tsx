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
        <section className="py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Image Gallery Section */}
                    <div className="lg:w-1/2">
                        <div className="group relative">
                            <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-md transition duration-300 group-hover:blur-lg" />
                            <img
                                src={mainImage}
                                alt="Pakil Town View"
                                className="relative aspect-16/9 h-auto w-full rounded-xl border-4 border-white object-cover shadow-xl"
                                loading="lazy"
                            />
                            <div className="absolute -right-5 -bottom-5 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:block">
                                <div className="flex items-center">
                                    <div className="mr-3 rounded-lg bg-primary/10 p-3">
                                        <i className="fas fa-landmark text-xl text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Did you know?</p>
                                        <p className="text-dark text-sm font-semibold">{content.facts}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            {imageGallery.map((image, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="cursor-pointer overflow-hidden rounded-lg border border-white shadow transition duration-300 hover:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                    onClick={() => handleImageClick(image.src)}
                                    aria-label={`View ${image.alt}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <div className="prose prose-lg mb-8 rounded-xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
                            <div className="mb-4 flex items-center">
                                <div className="mr-3 h-1 w-8 rounded-full bg-secondary" />
                                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Discover</h2>
                            </div>
                            <h3 className="text-dark mb-6 text-3xl font-bold md:text-4xl">
                                <span className="text-primary">{content.title}</span>
                            </h3>

                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="mb-4 text-gray-700">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {content.highlights && content.highlights.length > 0 && (
                            <div className="mb-8 rounded-r-lg border-l-4 border-primary bg-primary/5 p-4">
                                <h4 className="mb-3 flex items-center font-bold text-primary">
                                    <i className="fas fa-star mr-2 text-secondary" /> Cultural Highlights
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    {content.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            {highlight.icon ? (
                                                <>
                                                    <i className={`fas ${highlight.icon} mt-1 mr-2 text-secondary`} />
                                                </>
                                            ) : (
                                                <span className="mt-1 mr-2 text-secondary">•</span>
                                            )}
                                            <span>{highlight.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-5">
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="mb-4 md:mr-5 md:mb-0">
                                    <i className="fas fa-mountain text-4xl text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-dark mb-1 font-bold">Explore Nature's Beauty</h4>
                                    <p className="mb-3 text-sm text-gray-600">A hike to Mount Ping-as offers stunning views and spiritual renewal</p>
                                    <a href="#" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                                        Discover hiking trails
                                        <i className="fas fa-arrow-right ml-2" />
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
