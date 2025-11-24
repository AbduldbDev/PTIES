import 'aos/dist/aos.css';

interface PageTitleProps {
    title?: string;
    subtitle: string;
    desc?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title = '', subtitle, desc = '' }) => {
    const words = subtitle.split(' ');
    let splitIndex: number;

    if (words.length % 2 === 0) {
        splitIndex = words.length / 2;
    } else {
        splitIndex = Math.ceil(words.length / 3);
    }

    const firstHalf = words.slice(0, splitIndex).join(' ');
    const secondHalf = words.slice(splitIndex).join(' ');

    return (
        <>
            <div className="mb-10 text-center lg:mb-16">
                {title && (
                    <div className="lg:md-4 mb-3 inline-flex items-center" data-aos="fade-down" data-aos-delay="100">
                        <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                        <h2 className="text-xs font-semibold tracking-wider text-primary uppercase lg:text-sm">{title}</h2>
                        <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                    </div>
                )}

                <h3 className="text-dark mb-2 text-xl font-bold md:mb-4 md:text-4xl" data-aos="fade-up" data-aos-delay="200">
                    <span className="text-primary">{firstHalf}</span> {secondHalf}
                </h3>
                {desc && (
                    <p className="mx-auto max-w-3xl text-sm text-gray-600 lg:text-lg" data-aos="fade-up" data-aos-delay="300">
                        {desc}
                    </p>
                )}
            </div>
        </>
    );
};

export default PageTitle;
