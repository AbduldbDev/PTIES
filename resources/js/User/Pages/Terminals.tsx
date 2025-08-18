import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function Terminals() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Terminals';
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

            <section className="px-4 py-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">GUIDE</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Tricycle</span> Terminals
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Find tricycle routes around Pakil</p>
                    </div>

                    <div className="mb-10 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                        <div className="relative flex h-70 items-center justify-center bg-gray-100 md:h-96">
                            {/* <div className="p-4 text-center">
                                <i className="fas fa-map-marked-alt mb-3 text-4xl text-primary"></i>
                                <h3 className="text-lg font-medium text-gray-700">Pakil Tricycle Routes Map</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Terminals marked with
                                    <i className="fas fa-bicycle text-primary"></i> icons
                                </p>
                            </div> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2827.636651379964!2d121.47841022545609!3d14.381759500100308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1755305446211!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                loading="lazy"
                            ></iframe>
                            <button className="absolute right-4 bottom-4 flex items-center rounded-full bg-white px-4 py-2 text-sm shadow-md">
                                <i className="fas fa-expand mr-2"></i> View Full Map
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="p-5">
                                <h3 className="text-dark mb-4 text-xl font-bold">Pakil Town Plaza Terminal</h3>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To San Pedro Church & Turumba Shrine</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Ping-as Falls (via Brgy. Rizal)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Municipal Hall Complex</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To neighboring towns (Paete, Pangil)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-clock mr-2 text-secondary"></i> Operating Hours:
                                    </h4>
                                    <div className="text-sm text-gray-600">
                                        <p>Daily: 5:00 AM - 10:00 PM</p>
                                        <p className="mt-1 text-xs text-gray-500">Extended hours during festivals</p>
                                    </div>
                                </div>

                                <div className="flex justify-end border-t border-gray-100 pt-3">
                                    <a href="#" className="flex items-center font-medium text-primary hover:text-primary/90">
                                        View Directions <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="p-5">
                                <h3 className="text-dark mb-4 text-xl font-bold">Rizal Barangay Terminal</h3>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Ping-as Falls and hiking trails</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Brgy. Tavera and farmlands</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Town Plaza (via scenic route)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-clock mr-2 text-secondary"></i> Operating Hours:
                                    </h4>
                                    <div className="text-sm text-gray-600">
                                        <p>Daily: 6:00 AM - 8:00 PM</p>
                                        <p className="mt-1 text-xs text-gray-500">Limited service during rainy season</p>
                                    </div>
                                </div>

                                <div className="flex justify-end border-t border-gray-100 pt-3">
                                    <a href="#" className="flex items-center font-medium text-primary hover:text-primary/90">
                                        View Directions <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="p-5">
                                <h3 className="text-dark mb-4 text-xl font-bold">Marketplace Terminal</h3>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Pakil Public Market</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To neighboring barangays</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To bus terminals (for Manila/Rizal trips)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-clock mr-2 text-secondary"></i> Operating Hours:
                                    </h4>
                                    <div className="text-sm text-gray-600">
                                        <p>Monday-Saturday: 4:30 AM - 9:00 PM</p>
                                        <p>Sunday: 5:00 AM - 8:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex justify-end border-t border-gray-100 pt-3">
                                    <a href="#" className="flex items-center font-medium text-primary hover:text-primary/90">
                                        View Directions <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="p-5">
                                <h3 className="text-dark mb-4 text-xl font-bold">Lakeview Terminal</h3>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-road mr-2 text-secondary"></i> Covered Routes:
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To Laguna Lake view decks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To fishing villages</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-circle text-xxs mt-1.5 mr-2 text-primary"></i>
                                            <span>To lakeside resorts</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="mb-2 flex items-center font-medium text-gray-700">
                                        <i className="fas fa-clock mr-2 text-secondary"></i> Operating Hours:
                                    </h4>
                                    <div className="text-sm text-gray-600">
                                        <p>Daily: 5:30 AM - 9:00 PM</p>
                                        <p className="mt-1 text-xs text-gray-500">Weather permitting</p>
                                    </div>
                                </div>

                                <div className="flex justify-end border-t border-gray-100 pt-3">
                                    <a href="#" className="flex items-center font-medium text-primary hover:text-primary/90">
                                        View Directions <i className="fas fa-arrow-right ml-2"></i>
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
