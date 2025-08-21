interface IntroductionContent {
    description?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    highlights?: Highlight[];
}

type Highlight = {
    icon: string;
    title: string;
    desc: string;
};

interface Props {
    content: IntroductionContent;
}

export default function Introduction({ content }: Props) {
    const paragraphs = (content.description || '').split('\n').filter((p) => p.trim() !== '');
    const imageGallery = [
        {
            src: content.image1 || '/User/Images/church.jpg',
            alt: 'Imgae 1',
        },
        {
            src: content.image2 || '/User/Images/church.jpg',
            alt: 'Imgae 2',
        },
        {
            src: content.image3 || '/User/Images/church.jpg',
            alt: 'Imgae 3',
        },
        {
            src: content.image4 || '/User/Images/church.jpg',
            alt: 'Imgae 4',
        },
    ];
    return (
        <>
            <div className="prose prose-lg max-w-none text-gray-700">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-800">
                        {paragraph}
                    </p>
                ))}
                {content.highlights && content.highlights.length > 0 && (
                    <div className="space-y-6">
                        {content.highlights.map((highlight, index) => (
                            <div key={index} className="flex flex-col sm:flex-row">
                                <div className="mb-3 sm:mr-4 sm:mb-0 sm:flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        {highlight.icon ? (
                                            <i className={`fas ${highlight.icon} text-primary`} />
                                        ) : (
                                            <span className="mt-1 mr-2 text-primary">•</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg font-bold text-gray-900">{highlight.title}</h4>
                                    <p>{highlight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {imageGallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border-2 border-white shadow-md">
                        <img src={image.src} alt={image.alt} className="h-32 w-full object-cover transition duration-300 hover:scale-110 md:h-40" />
                    </div>
                ))}
            </div>
        </>
    );
}
