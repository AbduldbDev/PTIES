import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
export default function Attractions() {
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

            <Banner
                title={banner?.title}
                subtitle={banner?.subtitle}
                desc={banner?.desc}
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            <section className="px-4 py-6">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">EXPLORE</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Explore Pakil's</span> Attractions
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Discover the cultural and natural wonders of our beautiful town</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="relative max-w-2xl flex-1">
                                <input
                                    type="text"
                                    placeholder="Search attractions..."
                                    className="w-full rounded-full border border-gray-300 py-3 pr-4 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                />
                                <i className="fas fa-search absolute top-3.5 left-3 text-gray-400"></i>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 md:overflow-visible">
                                <button className="rounded-full bg-primary px-4 py-2 text-sm whitespace-nowrap text-white">All</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Cultural</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Nature</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Religious</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Historical</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="San Pedro Church"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    1.2 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-primary px-2 py-1 text-xs text-white">Cultural</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">San Pedro de Alcantara Church</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    18th century Baroque church housing the revered Our Lady of Turumba painting, a significant pilgrimage site.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>8AM-5PM Daily</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Ping-as Falls"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    5.8 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-green-500 px-2 py-1 text-xs text-white">Nature</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">Ping-as Falls</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    Beautiful three-tiered waterfall nestled in the Sierra Madre mountains, perfect for nature lovers and hikers.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>Daylight Hours</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Town Plaza"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    0.5 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-yellow-500 px-2 py-1 text-xs text-white">Historical</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">Pakil Town Plaza</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    The heart of Pakil featuring a charming gazebo, century-old trees, and views of the historic municipal hall.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>Open 24/7</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Turumba Shrine"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    1.5 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-purple-500 px-2 py-1 text-xs text-white">Religious</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">Turumba Shrine</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    Sacred site commemorating the discovery of the Our Lady of Turumba painting, central to Pakil's religious
                                    festivals.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>6AM-8PM Daily</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Heritage Houses"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    0.8 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-yellow-500 px-2 py-1 text-xs text-white">Historical</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">Heritage Houses</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    Well-preserved ancestral homes showcasing Spanish-era architecture and Pakil's rich cultural history.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>By Appointment</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Music Museum"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-3 right-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs text-primary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    1.0 km
                                </span>
                                <span className="absolute top-3 left-3 rounded-full bg-blue-500 px-2 py-1 text-xs text-white">Cultural</span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-dark mb-2 text-xl font-bold">Marcelo Adonay Museum</h3>
                                <p className="mb-4 line-clamp-2 text-gray-600">
                                    Dedicated to Pakil's musical heritage and the works of Marcelo Adonay, the "Palestrina of the Philippines".
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <i className="fas fa-clock mr-1"></i>
                                        <span>9AM-4PM Tue-Sun</span>
                                    </div>
                                    <a href="/attractiondetails" className="z-10 flex items-center font-medium text-primary hover:text-primary/90">
                                        View Details <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">1</button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                2
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                3
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
