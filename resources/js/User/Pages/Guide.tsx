import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function Guide() {
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

            <section className="py-10">
                <div className="container mx-auto max-w-5xl px-6">
                    <div>
                        <PageTitle title="Essentials" subtitle="Quick Facts" desc=""></PageTitle>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-calendar-day mr-3"></i> When to Visit
                                </h4>
                                <div className="prose text-gray-700">
                                    <p>Year-round; peak season from April to September.</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-tshirt mr-3"></i> What to Wear
                                </h4>
                                <div className="prose text-gray-700">
                                    <ul className="list-disc space-y-1 pl-5">
                                        <li>Light, comfortable clothing (Dec-May)</li>
                                        <li>Boots/windbreakers for hiking</li>
                                        <li>Rain gear (June-Oct)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-phone-alt mr-3"></i> Communication
                                </h4>
                                <div className="prose text-gray-700">
                                    <p>
                                        International Direct Dial (IDD) and National Direct Dial (NDD) services available. PLDT direct dial code: 049.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-map-marked-alt mr-3"></i> Getting Around
                                </h4>
                                <div className="prose text-gray-700">
                                    <p>
                                        Well-developed roads with jeepneys and tricycles between barangays. Personal/rented vehicles recommended for
                                        less commercialized areas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto max-w-5xl px-6">
                    <div>
                        <PageTitle title="Essentials" subtitle="How to Get There" desc=""></PageTitle>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-car mr-3"></i> By Private Transport
                                </h4>
                                <div className="prose text-gray-700">
                                    <ul className="list-disc space-y-2 pl-5">
                                        <li>
                                            <strong>Via South Luzon Expressway (SLEX):</strong> Take the Calamba exit
                                        </li>
                                        <li>
                                            <strong>Via Manila East Road:</strong> Travel through Antipolo and Tanay, Rizal
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-bus mr-3"></i> By Bus
                                </h4>
                                <div className="prose text-gray-700">
                                    <h5 className="text-dark mb-2 font-bold">Option 1:</h5>
                                    <ul className="mb-4 list-disc space-y-1 pl-5">
                                        <li>Take a bus going to Sta. Cruz, Laguna</li>
                                        <li>From Sta. Cruz take a jeepney to Siniloan</li>
                                        <li>Request driver to drop you at Pakil</li>
                                    </ul>
                                    <p className="mb-1 font-medium">Bus lines (SLEX route):</p>
                                    <p className="text-sm text-gray-700">Green Star Express, HM Transport / Worthy Transport, DLTB Co.</p>

                                    <h5 className="text-dark mt-4 mb-2 font-bold">Option 2:</h5>
                                    <ul className="list-disc space-y-1 pl-5">
                                        <li>Take a bus to Infanta, Quezon</li>
                                        <li>Alight at Mabitac junction</li>
                                        <li>Take jeepney to Siniloan then to Pakil</li>
                                    </ul>
                                    <p className="mt-2 mb-1 font-medium">Bus lines (Infanta route):</p>
                                    <p className="text-sm text-gray-700">Raymund Bus Co. & UV Express Van</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto max-w-7xl px-6">
                    <div>
                        <PageTitle title="Essentials" subtitle="Where to Stay" desc="Comfortable accommodations in Pakil"></PageTitle>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">Oliver Apartelle</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>123 Main Street, Poblacion, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-557-1534 / 0935-3086788</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">Leo 17 Inn</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>17 Rizal Street, Poblacion, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>0917-6507921</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">Villa Someros Resort</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>Lakeside Road, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-572-1558 / 0918-9048082</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto max-w-7xl px-6">
                    <div>
                        <PageTitle
                            title="Essentials"
                            subtitle="Where to Eat"
                            desc="Local dining establishments offering authentic flavors"
                        ></PageTitle>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">Vista's Art Space and Café</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>25 Tavera Street, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>0912-345-6789</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">The Beatles Place</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>12 Burgos Street, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>0917-123-4567</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
                                    </a>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="flex h-40 items-center justify-center bg-gray-100">
                                    <img src="/User/Images/church.jpg" alt="" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-dark mb-2 text-lg font-bold">Nida's Halo Halo</h4>
                                    <div className="mb-3 flex items-start text-sm text-gray-600">
                                        <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                        <span>Near Town Plaza, Pakil</span>
                                    </div>
                                    <div className="mb-4 flex items-center text-sm text-gray-600">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>0922-987-6543</span>
                                    </div>
                                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                                        <i className="fab fa-facebook mr-2"></i> Visit Facebook Page
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
