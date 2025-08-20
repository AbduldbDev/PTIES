import { useState } from 'react';

interface TourismAboutProps {
    description?: string;
    facts?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    responsibilities?: Responsibilities[];
    goals?: Goals[];
}

type Responsibilities = {
    icon: string;
    title: string;
    desc: string;
};

type Goals = {
    title: string;
};

interface Props {
    content: TourismAboutProps;
}

export default function TourismAbout({ content }: Props) {
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
        <>
            <div className="flex flex-col items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2">
                    <div className="group relative">
                        <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-md transition duration-300 group-hover:blur-lg"></div>
                        <img src={mainImage} alt="Pakil Town View" className="relative h-auto w-full rounded-xl border-4 border-white shadow-xl" />
                        <div className="absolute -right-5 -bottom-5 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:block">
                            <div className="flex items-center">
                                <div className="mr-3 rounded-lg bg-primary/10 p-3">
                                    <i className="fas fa-landmark text-xl text-primary"></i>
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

                <div className="lg:w-1/2">
                    <div className="prose prose-lg mb-8 text-gray-600">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4 text-gray-700">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {content.goals && content.goals.length > 0 && (
                        <div className="mb-8">
                            <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-bullseye mr-3 text-secondary"></i> Our Goals
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                {content.goals.map((goal, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>{goal.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {content.responsibilities && content.responsibilities.length > 0 && (
                        <div>
                            <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-tasks mr-3 text-secondary"></i> Key Responsibilities
                            </h4>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {content.responsibilities.map((responsibility, index) => (
                                    <div key={index} className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-start">
                                            <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                {responsibility.icon ? (
                                                    <>
                                                        <i className={`fas ${responsibility.icon} text-primary`} />
                                                    </>
                                                ) : (
                                                    <span className="mt-1 mr-2 text-primary">•</span>
                                                )}
                                            </div>
                                            <h5 className="text-dark font-semibold">{responsibility.title}</h5>
                                        </div>
                                        <p className="text-sm text-gray-600">{responsibility.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
