interface PageTitleProps {
    title?: string;
    subtitle: string;
    desc?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title = '', subtitle, desc = '' }) => {
    const words = subtitle.split(' ');
    const middleIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, middleIndex).join(' ');
    const secondHalf = words.slice(middleIndex).join(' ');

    return (
        <>
            <div className="mb-16 text-center">
                {title && (
                    <div className="mb-4 inline-flex items-center">
                        <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">{title}</h2>
                        <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                    </div>
                )}

                <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                    <span className="text-primary">{firstHalf}</span> {secondHalf}
                </h3>
                {desc && <p className="mx-auto max-w-3xl text-lg text-gray-600">{desc}</p>}
            </div>
        </>
    );
};

export default PageTitle;
