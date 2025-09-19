import { Head, usePage } from '@inertiajs/react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export const EventsSingle = () => {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Events';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <div className="h-[12vh]"></div>

            <section className="py-6 sm:py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="mb-2 text-sm lg:mb-6">
                        <ol className="flex flex-wrap items-center">
                            <li className="inline-flex items-center">
                                <a href="/" className="text-gray-500 hover:text-primary">
                                    Home
                                </a>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="/events" className="text-gray-500 hover:text-primary">
                                    Events
                                </a>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <span className="text-gray-700">Turumba Festival 2023</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="-mx-4 mb-6 overflow-hidden rounded-xl shadow-lg sm:mx-0">
                        <img
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                            alt="Turumba Festival"
                            className="aspect-video w-full object-cover"
                        />
                    </div>

                    <div className="mb-6">
                        <div className="mb-2 flex items-center text-sm text-gray-500 sm:text-base md:text-lg">
                            <i className="far fa-calendar-alt mr-2 text-primary"></i>
                            <span>June 15 - July 30, 2023</span>
                        </div>
                        <h1 className="mb-3 text-xl font-bold text-primary sm:text-2xl md:text-3xl">Turumba Festival 2023</h1>
                    </div>

                    <div className="flex flex-col-reverse gap-6 md:flex-row">
                        <div className="w-full md:w-2/3">
                            <div className="prose mb-8 max-w-none">
                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-3 text-gray-700 md:p-4">
                                    <p className="mb-3 text-sm text-gray-700 sm:text-base md:text-lg">
                                        Join us for the longest religious festival in the Philippines celebrating Our Lady of Turumba. This
                                        seven-month celebration features novenas, processions, and cultural performances.
                                    </p>

                                    <p className="text-sm text-gray-700 sm:text-base">
                                        The Turumba Festival commemorates the finding of the Nuestra Señora de los Dolores de Turumba painting by
                                        fishermen on September 15, 1788 after a storm.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="mb-4 text-lg font-bold text-primary sm:text-xl md:text-2xl">Event Schedule</h3>
                                    <div className="space-y-3">
                                        <details className="group rounded-lg bg-gray-50 p-3 md:p-4" open>
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-sm text-primary md:text-base"></i>
                                                    </div>
                                                    <h4 className="text-dark text-sm font-bold sm:text-base">Opening Procession</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-sm text-gray-400 transition group-open:rotate-180 md:text-base"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-xs text-gray-600 sm:text-sm">June 15, 2023 | 3:00 PM</p>
                                                <p className="mt-1 text-xs text-gray-700 sm:text-sm">
                                                    Starting from Pakil Town Plaza to San Pedro de Alcantara Church
                                                </p>
                                            </div>
                                        </details>

                                        <details className="group rounded-lg bg-gray-50 p-3 md:p-4">
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-sm text-primary md:text-base"></i>
                                                    </div>
                                                    <h4 className="text-dark text-sm font-bold sm:text-base">Cultural Performances</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-sm text-gray-400 transition group-open:rotate-180 md:text-base"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-xs text-gray-600 sm:text-sm">June 22, 2023 | 6:00 PM</p>
                                                <p className="mt-1 text-xs text-gray-700 sm:text-sm">Town Plaza featuring local dance troupes</p>
                                            </div>
                                        </details>
                                        <details className="group rounded-lg bg-gray-50 p-3 md:p-4">
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-sm text-primary md:text-base"></i>
                                                    </div>
                                                    <h4 className="text-dark text-sm font-bold sm:text-base">Closing Ceremony</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-sm text-gray-400 transition group-open:rotate-180 md:text-base"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-xs text-gray-600 sm:text-sm">July 30, 2023 | 4:00 PM</p>
                                                <p className="mt-1 text-xs text-gray-700 sm:text-sm">Final procession and fireworks display</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-md sm:p-5 md:p-6">
                                <h3 className="mb-4 flex items-center text-base font-bold text-primary sm:text-lg md:text-xl">
                                    <i className="fas fa-info-circle mr-2 text-sm md:text-base"></i> Quick Info
                                </h3>

                                <div className="space-y-4 md:space-y-5">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-ticket-alt mr-2 text-sm text-primary md:text-base"></i>
                                            <h4 className="text-dark text-sm font-semibold sm:text-base">ADMISSION</h4>
                                        </div>
                                        <p className="rounded-lg bg-green-50 p-2 text-xs text-gray-700 sm:text-sm md:p-3 md:text-base">
                                            Free for all events
                                        </p>
                                    </div>

                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-tshirt mr-2 text-sm text-primary md:text-base"></i>
                                            <h4 className="text-dark text-sm font-semibold sm:text-base">ATTIRE</h4>
                                        </div>
                                        <ul className="space-y-2 text-xs text-gray-700 sm:text-sm md:text-base">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-circle-dot text-dark mt-1 mr-2 text-xs md:text-sm"></i>
                                                <span>Comfortable for processions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-circle-dot text-dark mt-1 mr-2 text-xs md:text-sm"></i>
                                                <span>Modest dress for church events</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-phone-alt mr-2 text-sm text-primary md:text-base"></i>
                                            <h4 className="text-dark text-sm font-semibold sm:text-base">CONTACT</h4>
                                        </div>
                                        <ul className="space-y-2 text-xs text-gray-700 sm:text-sm md:text-base">
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2 text-xs md:text-sm"></i>
                                                <span>(049) XXX-XXXX</span>
                                            </li>
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2 text-xs md:text-sm"></i>
                                                <span>parish@pakilchurch.com</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <a
                                            href="#"
                                            className="block w-full rounded-full border border-primary px-3 py-2 text-center text-xs font-medium text-primary transition hover:bg-primary hover:text-white sm:py-2.5 sm:text-sm md:px-4 md:py-2.5 md:text-base"
                                        >
                                            <i className="fas fa-map-marker-alt mr-2 text-xs md:text-sm"></i> View on Map
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded-full bg-primary px-3 py-2 text-center text-xs font-medium text-white transition hover:bg-primary/90 sm:py-2.5 sm:text-sm md:px-4 md:py-2.5 md:text-base"
                                        >
                                            <i className="fas fa-calendar-plus mr-2 text-xs md:text-sm"></i> Add to Calendar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default EventsSingle;
