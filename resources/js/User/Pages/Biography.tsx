import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type OfficialsProps = {
    id: number;
    name: string;
    position: string;
    customPosition: string;
    term: string;
    biography: string;
    achievements: string;
    education: Education[];
    facebook: string;
    contact: string;
    email: string;
    image: File | null;
};

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type Education = {
    name: string;
    desc: string;
};
type PageProps = {
    banner: PageBannerProps;
    item: OfficialsProps;
};

export default function SingleOfficial() {
    const { banner, item } = usePage<PageProps>().props;
    const paragraphs = (item.biography || '').split('\n').filter((p) => p.trim() !== '');
    const achievements = (item.achievements || '').split('\n').filter((p) => p.trim() !== '');
    const educationArray = Array.isArray(item.education) ? item.education : [];

    const title = 'Pakil Tourism | Officials';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            <Banner
                title={banner?.title}
                subtitle={banner?.subtitle}
                desc={banner?.desc}
                imageSrc={banner?.image ? `${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            <section className="py-4 md:py-8">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="mb-4 md:mb-6">
                        <a href="/about/officials" className="inline-flex items-center text-sm text-primary hover:text-primary/80 md:text-base">
                            <i className="fas fa-arrow-left mr-2"></i> Back to Officials
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="relative w-full">
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    src={item.image ? `${item.image}` : '/images/user/User.png'}
                                    alt="Hon. Juan Dela Cruz"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end">
                                    <div className="mb-2 sm:mb-0">
                                        <h1 className="text-xl font-bold text-white md:text-2xl">Hon. {item.name}</h1>
                                        <p className="text-sm text-white/90 md:text-base">{item.position} of Pakil</p>
                                    </div>
                                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white md:text-sm">
                                        <i className="far fa-calendar-alt mr-1"></i> Term: {item.term}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:p-6">
                            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-lg bg-primary/5 p-4">
                                    <h3 className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase md:text-sm">
                                        <i className="fas fa-user-tie mr-2"></i> Position
                                    </h3>
                                    <p className="text-sm text-gray-700 md:text-base">{item.position}</p>
                                </div>
                                <div className="rounded-lg bg-primary/5 p-4">
                                    <h3 className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase md:text-sm">
                                        <i className="fas fa-clock mr-2"></i> Term Duration
                                    </h3>
                                    <p className="text-sm text-gray-700 md:text-base">{item.term}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                    <i className="fas fa-book-open mr-2 text-sm md:text-base"></i>
                                    Biography
                                </h2>
                                <div className="space-y-3 text-sm text-gray-700 md:text-base">
                                    {paragraphs.map((paragraph, index) => (
                                        <p key={index} className="mb-4 text-gray-800">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {achievements.length > 0 && (
                                <div className="mb-6">
                                    <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                        <i className="fas fa-trophy mr-2 text-sm md:text-base"></i> Notable Achievements
                                    </h2>
                                    <ul className="space-y-2 text-sm md:space-y-3 md:text-base">
                                        {achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {educationArray.length > 0 && (
                                <div className="mb-6">
                                    <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                        <i className="fas fa-graduation-cap mr-2 text-sm md:text-base"></i>
                                        Educational Background
                                    </h2>
                                    <div className="rounded-lg">
                                        {educationArray.map((educ, index) => (
                                            <div key={index} className="mb-3 flex items-start md:mb-4">
                                                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:mr-4">
                                                    <i className="fas fa-university text-lg text-primary md:text-xl"></i>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-semibold md:text-base">{educ.name}</h3>
                                                    <p className="text-xs text-gray-600 md:text-sm">{educ.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {(item.facebook || item.contact || item.email) && (
                                <div className="contact-section">
                                    <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                        <i className="fas fa-envelope mr-2 text-sm md:text-base"></i>
                                        Contact Information
                                    </h2>
                                    <div className="flex space-x-4">
                                        {item.facebook && (
                                            <a
                                                href={item.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                                aria-label="Facebook"
                                            >
                                                <i className="fab fa-facebook-f text-sm md:text-base"></i>
                                            </a>
                                        )}
                                        {item.contact && (
                                            <a
                                                href={`tel:${item.contact}`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                                aria-label="Phone"
                                            >
                                                <i className="fas fa-phone text-sm md:text-base"></i>
                                            </a>
                                        )}
                                        {item.email && (
                                            <a
                                                href={`mailto:${item.email}`}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                                aria-label="Email"
                                            >
                                                <i className="fas fa-envelope text-sm md:text-base"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
