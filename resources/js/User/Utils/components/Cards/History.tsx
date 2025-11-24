type HistoryProps = {
    date: string;
    title: string;
    description: string;
    image: string;
};

interface Props {
    history: HistoryProps;
    className?: string;
}

export default function HistoryCard({ history, className }: Props) {
    const paragraphs = (history.description || '').split('\n').filter((p) => p.trim() !== '');
    return (
        <>
            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md" data-aos="fade-up" data-aos-duration="800">
                <div className={`${className} md:flex`}>
                    {/* Left Section - Date, Title, and Image */}
                    <div className="bg-primary/5 p-6 md:w-1/3">
                        <h4 className="mb-2 text-lg font-bold text-primary lg:text-xl" data-aos="fade-right" data-aos-delay="200">
                            {history.date}
                        </h4>
                        <p className="text-sm font-medium text-gray-700 lg:text-base" data-aos="fade-right" data-aos-delay="300">
                            {history.title}
                        </p>
                        <div data-aos="zoom-in" data-aos-delay="400">
                            <img
                                src={`/storage/${history.image}`}
                                alt="Old Church"
                                className="mt-4 aspect-16/9 rounded-lg object-cover shadow-sm lg:aspect-4/4"
                            />
                        </div>
                    </div>

                    {/* Right Section - Description */}
                    <div className="p-6 md:w-2/3">
                        <div className="prose prose-lg text-gray-700">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="my-2 text-sm lg:text-base" data-aos="fade-left" data-aos-delay={500 + index * 100}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
