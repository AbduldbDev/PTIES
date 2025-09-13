import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import Establishment from '@UserUtils/components/Cards/Establishment';
type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type EstablishmentProps = {
    id: number;
    type: string;
    name: string;
    location: string;
    contact: string;
    facebook: string;
    long: string;
    lat: string;
    image: string;
};

interface PageProps {
    banner: PageBannerProps;
    food: EstablishmentProps[];
    accommodation: EstablishmentProps[];
    [key: string]: unknown;
}
export default function Guide() {
    const { banner, food, accommodation } = usePage<PageProps>().props;

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
            {banner ? (
                <Banner
                    title={banner?.title}
                    subtitle={banner?.subtitle}
                    desc={banner?.desc}
                    imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section className="py-5 md:py-10 lg:py-12">
                <div className="container mx-auto max-w-5xl px-4 sm:px-5 md:px-6">
                    <div>
                        <PageTitle
                            title="Essentials"
                            subtitle="Your Travel Basics"
                            desc="Everything you need to know before exploring Pakil—key facts, the best time to visit, what to pack, how to stay connected, and ways to get around town."
                        />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-calendar-day mr-2 text-sm md:mr-3 md:text-base"></i> When to Visit
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
                                    <p>Year-round; peak season from April to September.</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-tshirt mr-2 text-sm md:mr-3 md:text-base"></i> What to Wear
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
                                    <ul className="list-disc space-y-1 pl-4 md:pl-5">
                                        <li>Light, comfortable clothing (Dec-May)</li>
                                        <li>Boots/windbreakers for hiking</li>
                                        <li>Rain gear (June-Oct)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-phone-alt mr-2 text-sm md:mr-3 md:text-base"></i> Communication
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
                                    <p>
                                        International Direct Dial (IDD) and National Direct Dial (NDD) services available. PLDT direct dial code: 049.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-map-marked-alt mr-2 text-sm md:mr-3 md:text-base"></i> Getting Around
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
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

            <section className="py-5 md:py-10 lg:py-12">
                <div className="container mx-auto max-w-5xl px-4 sm:px-5 md:px-6">
                    <div>
                        <PageTitle
                            title="Essentials"
                            subtitle="How to Get There"
                            desc="Discover the different ways to reach Pakil—whether by bus, jeepney, tricycle, or private vehicle. Find the most convenient routes and travel tips for a smooth journey."
                        />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
                            {/* By Private Transport */}
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-car mr-2 text-sm md:mr-3 md:text-base"></i> By Private Transport
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
                                    <ul className="list-disc space-y-1.5 pl-4 md:pl-5">
                                        <li>
                                            <strong className="text-gray-800">Via South Luzon Expressway (SLEX):</strong> Take the Calamba exit
                                        </li>
                                        <li>
                                            <strong className="text-gray-800">Via Manila East Road:</strong> Travel through Antipolo and Tanay, Rizal
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* By Bus */}
                            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:rounded-xl md:p-5 lg:p-6">
                                <h4 className="mb-3 flex items-center text-lg font-bold text-primary md:mb-4 md:text-xl">
                                    <i className="fas fa-bus mr-2 text-sm md:mr-3 md:text-base"></i> By Bus
                                </h4>
                                <div className="text-sm text-gray-700 md:text-base">
                                    <h5 className="text-dark mb-1.5 text-sm font-bold md:mb-2 md:text-base">Option 1:</h5>
                                    <ul className="mb-3 list-disc space-y-1 pl-4 md:mb-4 md:pl-5">
                                        <li>Take a bus going to Sta. Cruz, Laguna</li>
                                        <li>From Sta. Cruz take a jeepney to Siniloan</li>
                                        <li>Request driver to drop you at Pakil</li>
                                    </ul>
                                    <p className="mb-1 text-xs font-medium md:text-sm">Bus lines (SLEX route):</p>
                                    <p className="mb-3 text-xs text-gray-700 md:mb-4 md:text-sm">
                                        Green Star Express, HM Transport / Worthy Transport, DLTB Co.
                                    </p>

                                    <h5 className="text-dark mt-3 mb-1.5 text-sm font-bold md:mt-4 md:mb-2 md:text-base">Option 2:</h5>
                                    <ul className="list-disc space-y-1 pl-4 md:pl-5">
                                        <li>Take a bus to Infanta, Quezon</li>
                                        <li>Alight at Mabitac junction</li>
                                        <li>Take jeepney to Siniloan then to Pakil</li>
                                    </ul>
                                    <p className="mt-2 mb-1 text-xs font-medium md:text-sm">Bus lines (Infanta route):</p>
                                    <p className="text-xs text-gray-700 md:text-sm">Raymund Bus Co. & UV Express Van</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {accommodation?.length > 0 && (
                <section>
                    <div className="container mx-auto max-w-7xl px-6">
                        <div>
                            <PageTitle
                                title="Essentials"
                                subtitle="Where to Stay"
                                desc="Find comfortable accommodations in Pakil, from homestays and guesthouses to nearby hotels—perfect for every traveler’s budget and style."
                            />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {accommodation.map((item) => (
                                    <Establishment key={item.id} details={item} />
                                ))}
                            </div>
                            <div className="mt-10 text-center">
                                <a
                                    href="/establishments"
                                    className="inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                                >
                                    <i className="fas fa-newspaper mr-2"></i> View More Establishments
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {food?.length > 0 && (
                <section className="py-6 md:py-10">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
                        <div>
                            <PageTitle
                                title="Essentials"
                                subtitle="Where to Eat"
                                desc="Savor Pakil’s authentic flavors at local eateries, carinderias, and restaurants that showcase the town’s culinary heritage."
                            />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {food.map((item) => (
                                    <Establishment key={item.id} details={item} />
                                ))}
                            </div>
                            <div className="mt-10 text-center">
                                <a
                                    href="/establishments"
                                    className="inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                                >
                                    <i className="fas fa-newspaper mr-2"></i> View More Establishments
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
