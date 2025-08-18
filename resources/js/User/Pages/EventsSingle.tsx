import { Head, usePage } from '@inertiajs/react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export const Events = () => {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | About';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <section className="py-8 sm:py-12">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 mb-6 overflow-hidden rounded-xl shadow-lg sm:mx-0">
                        <img
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                            alt="Turumba Festival"
                            className="h-[50vh] w-full object-cover sm:h-72 md:h-[50vh]"
                        />
                    </div>

                    <div className="mb-6">
                        <div className="mb-2 flex items-center text-base text-gray-500 sm:text-lg">
                            <i className="far fa-calendar-alt mr-2 text-primary"></i>
                            <span>June 15 - July 30, 2023</span>
                        </div>
                        <h1 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">Turumba Festival 2023</h1>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
                                <i className="fas fa-church mr-1"></i> Religious
                            </span>
                            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary sm:text-sm">
                                <i className="fas fa-users mr-1"></i> Public
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-6 md:flex-row">
                        <div className="w-full md:w-2/3">
                            <div className="prose mb-8 max-w-none">
                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                    <p className="mb-4 text-base text-gray-700 sm:text-lg">
                                        Join us for the longest religious festival in the Philippines celebrating Our Lady of Turumba. This
                                        seven-month celebration features novenas, processions, and cultural performances.
                                    </p>

                                    <p className="text-gray-700">
                                        The Turumba Festival commemorates the finding of the Nuestra Señora de los Dolores de Turumba painting by
                                        fishermen on September 15, 1788 after a storm.
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="mb-4 text-xl font-bold text-primary sm:text-2xl">Event Schedule</h3>
                                    <div className="space-y-3">
                                        <details className="group rounded-lg bg-gray-50 p-4" open>
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-primary"></i>
                                                    </div>
                                                    <h4 className="text-dark font-bold">Opening Procession</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-gray-400 transition group-open:rotate-180"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-gray-600">June 15, 2023 | 3:00 PM</p>
                                                <p className="mt-1 text-gray-700">Starting from Pakil Town Plaza to San Pedro de Alcantara Church</p>
                                            </div>
                                        </details>

                                        <details className="group rounded-lg bg-gray-50 p-4">
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-primary"></i>
                                                    </div>
                                                    <h4 className="text-dark font-bold">Opening Procession</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-gray-400 transition group-open:rotate-180"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-gray-600">June 15, 2023 | 3:00 PM</p>
                                                <p className="mt-1 text-gray-700">Starting from Pakil Town Plaza to San Pedro de Alcantara Church</p>
                                            </div>
                                        </details>
                                        <details className="group rounded-lg bg-gray-50 p-4">
                                            <summary className="flex cursor-pointer items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                        <i className="fas fa-calendar-day text-primary"></i>
                                                    </div>
                                                    <h4 className="text-dark font-bold">Opening Procession</h4>
                                                </div>
                                                <i className="fas fa-chevron-down transform text-gray-400 transition group-open:rotate-180"></i>
                                            </summary>
                                            <div className="mt-3 pl-11">
                                                <p className="text-gray-600">June 15, 2023 | 3:00 PM</p>
                                                <p className="mt-1 text-gray-700">Starting from Pakil Town Plaza to San Pedro de Alcantara Church</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-md sm:p-6">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-primary sm:text-xl">
                                    <i className="fas fa-info-circle mr-2"></i> Quick Info
                                </h3>

                                <div className="space-y-5">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-ticket-alt mr-2 text-primary"></i>
                                            <h4 className="text-dark font-semibold">ADMISSION</h4>
                                        </div>
                                        <p className="rounded-lg bg-green-50 p-3 text-sm text-gray-700 sm:text-base">Free for all events</p>
                                    </div>

                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-tshirt mr-2 text-primary"></i>
                                            <h4 className="text-dark font-semibold">ATTIRE</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2"></i>
                                                <span>Comfortable for processions</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2"></i>
                                                <span>Modest dress for church events</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                            <h4 className="text-dark font-semibold">CONTACT</h4>
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-700 sm:text-base">
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2"></i>
                                                <span>(049) XXX-XXXX</span>
                                            </li>
                                            <li className="flex items-center">
                                                <i className="fa-solid fa-circle-dot text-dark mr-2"></i>
                                                <span>parish@pakilchurch.com</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <a
                                            href="#"
                                            className="block w-full rounded-full border border-primary px-4 py-2.5 text-center font-medium text-primary transition hover:bg-primary hover:text-white sm:py-3"
                                        >
                                            <i className="fas fa-map-marker-alt mr-2"></i> View on Map
                                        </a>
                                        <a
                                            href="#"
                                            className="block w-full rounded-full bg-primary px-4 py-2.5 text-center font-medium text-white transition hover:bg-primary/90 sm:py-3"
                                        >
                                            <i className="fas fa-calendar-plus mr-2"></i> Add to Calendar
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
export default Events;
