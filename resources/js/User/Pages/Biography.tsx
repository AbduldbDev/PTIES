import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function SingleOfficial() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

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
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            <section className="py-4 md:py-8">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="mb-4 md:mb-6">
                        <a href="#" className="inline-flex items-center text-sm text-primary hover:text-primary/80 md:text-base">
                            <i className="fas fa-arrow-left mr-2"></i> Back to Officials
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="relative w-full">
                            <div className="aspect-w-1 aspect-h-1">
                                <img src="/User/Images/ace.png" alt="Hon. Juan Dela Cruz" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                                <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end">
                                    <div className="mb-2 sm:mb-0">
                                        <h1 className="text-xl font-bold text-white md:text-2xl">Hon. Juan Dela Cruz</h1>
                                        <p className="text-sm text-white/90 md:text-base">Municipal Mayor of Pakil</p>
                                    </div>
                                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white md:text-sm">
                                        <i className="far fa-calendar-alt mr-1"></i> Term: 2022 - 2025
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
                                    <p className="text-sm text-gray-700 md:text-base">Municipal Mayor</p>
                                </div>
                                <div className="rounded-lg bg-primary/5 p-4">
                                    <h3 className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase md:text-sm">
                                        <i className="fas fa-clock mr-2"></i> Term Duration
                                    </h3>
                                    <p className="text-sm text-gray-700 md:text-base">June 30, 2022 - June 30, 2025</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                    <i className="fas fa-book-open mr-2 text-sm md:text-base"></i>
                                    Biography
                                </h2>
                                <div className="space-y-3 text-sm text-gray-700 md:text-base">
                                    <p>
                                        Hon. Juan Dela Cruz is the current Municipal Mayor of Pakil, having served since 2022. With a background in
                                        public service spanning over 15 years, Mayor Dela Cruz has dedicated his career to improving the lives of
                                        Pakil residents through sustainable development and community engagement.
                                    </p>
                                    <p>
                                        Prior to his mayoralty, he served as a municipal councilor for three terms, where he championed education
                                        reforms and environmental protection initiatives. His leadership during the pandemic was widely praised for
                                        its effectiveness and compassion.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                    <i className="fas fa-trophy mr-2 text-sm md:text-base"></i> Notable Achievements
                                </h2>
                                <ul className="space-y-2 text-sm md:space-y-3 md:text-base">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                        <span>Spearheaded the restoration of historical sites in Pakil</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                        <span>Implemented the "Clean Pakil" waste management program</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                        <span>Established the Pakil Tourism Office to promote local attractions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                        <span>Improved road infrastructure connecting barangays</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-secondary md:mt-1 md:text-sm"></i>
                                        <span>Launched scholarship programs for deserving students</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                    <i className="fas fa-graduation-cap mr-2 text-sm md:text-base"></i>
                                    Educational Background
                                </h2>
                                <div className="rounded-lg">
                                    <div className="mb-3 flex items-start md:mb-4">
                                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:mr-4">
                                            <i className="fas fa-university text-lg text-primary md:text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold md:text-base">University of the Philippines</h3>
                                            <p className="text-xs text-gray-600 md:text-sm">Bachelor of Public Administration, 1995-1999</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:mr-4">
                                            <i className="fas fa-certificate text-lg text-primary md:text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold md:text-base">Pakil National High School</h3>
                                            <p className="text-xs text-gray-600 md:text-sm">Graduated with honors, 1991-1995</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-section">
                                <h2 className="mb-3 flex items-center text-lg font-bold text-primary md:text-xl">
                                    <i className="fas fa-envelope mr-2 text-sm md:text-base"></i>
                                    Contact Information
                                </h2>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                        aria-label="Facebook"
                                    >
                                        <i className="fab fa-facebook-f text-sm md:text-base"></i>
                                    </a>
                                    <a
                                        href="tel:+63281234567"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                        aria-label="Phone"
                                    >
                                        <i className="fas fa-phone text-sm md:text-base"></i>
                                    </a>
                                    <a
                                        href="mailto:mayor.juan@pakil.gov.ph"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                                        aria-label="Email"
                                    >
                                        <i className="fas fa-envelope text-sm md:text-base"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
