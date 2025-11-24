import { useRef, useState } from 'react';

type PromotionalVideoProps = {
    title?: string;
    slogan?: string;
    videoUrl?: string;
    description?: string;
    highlights?: string[];
    thumbnail?: string;
};

export const PromotionalVideo = ({
    title = 'Explore Pakil Through Our Video',
    slogan = 'Experience the beauty of Pakil through our eyes',
    videoUrl = '/User/Video/Pakil.mp4',
    description = "Immerse yourself in the sights and sounds of Pakil with our exclusive promotional video showcasing the town's rich heritage, stunning landscapes, and vibrant culture.\n\nFrom the majestic San Pedro de Alcantara Church to the breathtaking waterfalls and local festivals, this video captures the essence of what makes Pakil a must-visit destination.",
    highlights = [],
    thumbnail = '/User/Images/church.jpg',
}: PromotionalVideoProps) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const paragraphs = description.split('\n').filter((para) => para.trim() !== '');

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.error('Error playing video:', error));
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="group relative overflow-hidden rounded-xl bg-white shadow-xl" data-aos="zoom-in" data-aos-delay="100">
                                <video ref={videoRef} className="aspect-16/9 h-full w-full object-cover" poster={thumbnail} controls>
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={togglePlay}
                                            type="button"
                                            className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition duration-300 group-hover:scale-110"
                                            data-aos="zoom-in"
                                            data-aos-delay="300"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary p-4 text-white">
                                                <i className="fas fa-play text-xl"></i>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <p className="mt-4 text-center text-lg text-gray-800 italic" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-quote-left mr-2 text-secondary"></i>
                                {slogan}
                                <i className="fas fa-quote-right ml-2 text-secondary"></i>
                            </p>
                        </div>

                        <div className="rounded-xl bg-white/80 p-8 shadow-lg backdrop-blur-sm lg:w-1/2" data-aos="fade-left" data-aos-delay="100">
                            <div className="mb-4 flex items-center" data-aos="fade-right" data-aos-delay="200">
                                <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Discover</h2>
                            </div>
                            <h3 className="text-dark mb-6 text-3xl font-bold md:text-4xl" data-aos="fade-right" data-aos-delay="300">
                                <span className="text-primary">{title}</span>
                            </h3>

                            <div className="prose prose-lg mb-8 text-gray-600">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} className="mb-4" data-aos="fade-right" data-aos-delay={400 + index * 100}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="600">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center justify-center rounded-full bg-primary px-6 py-2 text-center text-sm font-medium text-white transition duration-300 hover:bg-primary/90"
                                >
                                    <i className="fas fa-share-alt mr-2"></i>
                                    {copied ? 'Copied!' : 'Share This Video'}
                                </button>
                            </div>

                            <div className="mt-8" data-aos="fade-up" data-aos-delay="700">
                                <h4 className="text-dark mb-3 flex items-center font-bold" data-aos="fade-right" data-aos-delay="800">
                                    <i className="fas fa-star mr-2 text-secondary"></i> Video Highlights
                                </h4>
                                <ul className="grid grid-cols-2 gap-2 text-sm">
                                    {highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start" data-aos="fade-right" data-aos-delay={900 + index * 100}>
                                            <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PromotionalVideo;
