import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function GamificationGuide() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Guide';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

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
                    imageSrc={banner?.image ? `${banner.image}` : '/User//User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <PageTitle
                        title="Tourism Trail"
                        subtitle="Pakil Rewards Journey"
                        desc="Embark on an adventure across Pakil! Unlock points, collect rewards, and complete challenges as you explore attractions and discover the town's culture in a fun, rewarding way."
                    ></PageTitle>

                    <div className="relative mx-auto max-w-5xl">
                        {/* Timeline Line */}
                        <div
                            className="absolute top-0 left-16 -z-10 hidden h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:block"
                            data-aos="fade-down"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        ></div>

                        {/* Step 1 */}
                        <div className="mb-12 flex flex-col items-center gap-6 md:flex-row" data-aos="fade-up" data-aos-delay="300">
                            <div className="md:order-2 md:w-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <img
                                        src="/User/Gamification/step1.png"
                                        alt="Tourist exploring church"
                                        className="relative h-auto w-full rounded-xl border-4 border-white shadow-lg"
                                    />
                                    <div
                                        className="absolute -right-4 -bottom-4 rounded-lg border border-gray-100 bg-white p-3 shadow-md"
                                        data-aos="zoom-in"
                                        data-aos-delay="500"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 rounded-lg bg-primary/10 p-2">
                                                <i className="fas fa-map-signs text-primary"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Step 1/5</p>
                                                <p className="text-sm font-semibold">Discover Spots</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-1 md:w-1/2">
                                <div
                                    className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                                    data-aos="fade-right"
                                    data-aos-delay="400"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-primary">Explore Pakil's Treasures</h3>
                                    <p className="mb-4 text-gray-600">
                                        Visit our cultural landmarks, natural wonders, and historical sites. Look for official QR code signage at each
                                        location.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-center text-xs text-primary">San Pedro Church</span>
                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-center text-xs text-primary">Turumba Shrine</span>
                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-center text-xs text-primary">Ping-as Falls</span>
                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-center text-xs text-primary">Heritage Houses</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-12 flex flex-col items-center gap-6 md:flex-row" data-aos="fade-up" data-aos-delay="400">
                            <div className="md:w-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-2 rounded-xl bg-secondary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <img
                                        src="/User/Gamification/step2.png"
                                        alt="Phone scanning QR code"
                                        className="relative h-auto w-full rounded-xl border-4 border-white shadow-lg"
                                    />
                                    <div
                                        className="absolute -bottom-4 -left-4 rounded-lg border border-gray-100 bg-white p-3 shadow-md"
                                        data-aos="zoom-in"
                                        data-aos-delay="600"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 rounded-lg bg-secondary/10 p-2">
                                                <i className="fas fa-camera text-secondary"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Step 2/5</p>
                                                <p className="text-sm font-semibold">Scan Codes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div
                                    className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                                    data-aos="fade-left"
                                    data-aos-delay="500"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-primary">Capture Your Visit</h3>
                                    <p className="mb-4 text-gray-600">
                                        Use your phone's camera through our website to scan location QR codes. Must be logged in with internet
                                        connection.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start">
                                            <i className="fas fa-user-check mt-1 mr-2 text-primary"></i>
                                            <span className="text-sm">Account login required</span>
                                        </div>
                                        <div className="flex items-start">
                                            <i className="fas fa-wifi mt-1 mr-2 text-primary"></i>
                                            <span className="text-sm">Active internet needed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-12 flex flex-col items-center gap-6 md:flex-row" data-aos="fade-up" data-aos-delay="500">
                            <div className="md:order-2 md:w-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-2 rounded-xl bg-accent/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <img
                                        src="/User/Gamification/step3.png"
                                        alt="Phone showing points earned"
                                        className="relative h-auto w-full rounded-xl border-4 border-white shadow-lg"
                                    />
                                    <div
                                        className="absolute -right-4 -bottom-4 rounded-lg border border-gray-100 bg-white p-3 shadow-md"
                                        data-aos="zoom-in"
                                        data-aos-delay="700"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 rounded-lg bg-accent/10 p-2">
                                                <i className="fas fa-coins text-accent"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Step 3/5</p>
                                                <p className="text-sm font-semibold">Collect Points</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-1 md:w-1/2">
                                <div
                                    className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                                    data-aos="fade-right"
                                    data-aos-delay="600"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-primary">Instant Rewards</h3>
                                    <p className="mb-4 text-gray-600">
                                        Points are automatically added to your account after verification. Each location can only be claimed once
                                        daily.
                                    </p>
                                    <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                                        <div className="flex items-center">
                                            <i className="fas fa-bolt mr-3 text-xl text-yellow-500"></i>
                                            <div>
                                                <h4 className="text-dark font-medium">Daily Bonus</h4>
                                                <p className="text-xs text-gray-600">Visit 3+ locations in one day for extra points</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-12 flex flex-col items-center gap-6 md:flex-row" data-aos="fade-up" data-aos-delay="600">
                            <div className="md:w-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-2 rounded-xl bg-purple-100 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <img
                                        src="/User/Gamification/step4.png"
                                        alt="Browsing rewards on phone"
                                        className="relative h-auto w-full rounded-xl border-4 border-white shadow-lg"
                                    />
                                    <div
                                        className="absolute -bottom-4 -left-4 rounded-lg border border-gray-100 bg-white p-3 shadow-md"
                                        data-aos="zoom-in"
                                        data-aos-delay="800"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 rounded-lg bg-purple-100 p-2">
                                                <i className="fas fa-gift text-purple-600"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Step 4/5</p>
                                                <p className="text-sm font-semibold">Browse Rewards</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div
                                    className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                                    data-aos="fade-left"
                                    data-aos-delay="700"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-primary">Exclusive Souvenirs</h3>
                                    <p className="mb-4 text-gray-600">Choose from authentic Pakil keepsakes in our rewards catalog:</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center">
                                            <i className="fas fa-tshirt mr-2 text-secondary"></i>
                                            <span className="text-sm">Local Crafts</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-tag mr-2 text-secondary"></i>
                                            <span className="text-sm">Store Discounts</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-ticket-alt mr-2 text-secondary"></i>
                                            <span className="text-sm">Event Passes</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-cross mr-2 text-secondary"></i>
                                            <span className="text-sm">Religious Items</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col items-center gap-6 md:flex-row" data-aos="fade-up" data-aos-delay="700">
                            <div className="md:order-2 md:w-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-2 rounded-xl bg-yellow-100 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <img
                                        src="/User/Gamification/step5.png"
                                        alt="Tourist receiving reward"
                                        className="relative h-auto w-full rounded-xl border-4 border-white shadow-lg"
                                    />
                                    <div
                                        className="absolute -right-4 -bottom-4 rounded-lg border border-gray-100 bg-white p-3 shadow-md"
                                        data-aos="zoom-in"
                                        data-aos-delay="900"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-2 rounded-lg bg-yellow-100 p-2">
                                                <i className="fas fa-trophy text-yellow-600"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">Step 5/5</p>
                                                <p className="text-sm font-semibold">Claim Prize</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:order-1 md:w-1/2">
                                <div
                                    className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                                    data-aos="fade-right"
                                    data-aos-delay="800"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-primary">Final Reward</h3>
                                    <p className="mb-4 text-gray-600">
                                        Visit the Tourism Office to collect your chosen reward. Present your redemption code from the website.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start">
                                            <i className="fas fa-clock mt-1 mr-2 text-primary"></i>
                                            <span>Open Mon-Sat, 8AM-5PM</span>
                                        </div>
                                        <div className="flex items-start">
                                            <i className="fas fa-map-marker-alt mt-1 mr-2 text-primary"></i>
                                            <span>Municipal Hall Complex, Pakil Plaza</span>
                                        </div>
                                        <div className="flex items-start">
                                            <i className="fas fa-phone-alt mt-1 mr-2 text-primary"></i>
                                            <span>(049) 123-4567</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="1000">
                            <div className="mt-16 flex flex-col text-center">
                                <div className="mb-6 inline-flex flex-row items-center" data-aos="fade-up" data-aos-delay="1100">
                                    <div className="h-1 w-8 rounded-full bg-primary"></div>
                                    <span className="mx-3 text-sm font-medium text-primary">Complete the Journey</span>
                                    <div className="h-1 w-8 rounded-full bg-primary"></div>
                                </div>
                                <a
                                    href="/explore/attractions"
                                    className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:shadow-xl"
                                    data-aos="bounce-in"
                                    data-aos-delay="1200"
                                >
                                    <i className="fas fa-map-marker-alt mr-2"></i> Start Exploring Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
