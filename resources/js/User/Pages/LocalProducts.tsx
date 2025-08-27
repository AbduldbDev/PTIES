import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function LocalProducts() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Products';
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
            <section className="bg-gradient-to-b from-white to-gray-50 py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Cultural Treasures</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h1 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            Pakil's <span className="text-primary">Living Traditions</span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Celebrating the natural bounty and artistic heritage of our town</p>
                    </div>

                    <div className="mb-20 flex flex-col items-center gap-10 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="group relative">
                                <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-md transition duration-300 group-hover:blur-lg"></div>
                                <img
                                    src="/User/Images/ibuli.JPG"
                                    alt="Kayas woodcarving in Pakil"
                                    className="relative aspect-[3/4] h-auto w-full rounded-xl border-4 border-white object-cover shadow-xl"
                                />
                                <div className="absolute -right-4 -bottom-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                                    <div className="rounded-lg bg-primary/10 p-2">
                                        <i className="fas fa-leaf text-xl text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="mb-4 flex items-center">
                                <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Natural Bounty</h2>
                            </div>
                            <h3 className="text-dark mb-4 text-2xl font-bold md:text-3xl">Ibuli (Cubilia cubili)</h3>
                            <div className="prose prose-lg mb-6 text-gray-700">
                                <p>
                                    The <span className="font-semibold text-primary">ibuli</span> is a rare tropical fruit native to the lush
                                    hillsides of Pakil. Known for its smooth, greenish skin and sweet, subtly tangy flesh, it's cherished as both a
                                    fresh snack and ingredient for traditional desserts.
                                </p>
                                <p className="mt-4">
                                    Its short harvest season makes ibuli a special treat, often shared with visitors as a gesture of hospitality. More
                                    than just delicious, it symbolizes Pakil's rich agricultural heritage, thriving in the town's fertile soil and
                                    favorable climate.
                                </p>
                            </div>

                            <div className="mb-6 rounded-r-lg border-l-4 border-primary bg-primary/5 p-4">
                                <h4 className="mb-2 flex items-center font-bold text-primary">
                                    <i className="fas fa-tree mr-2"></i> Seasonal Delicacy
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-calendar-day mt-1 mr-2 text-primary"></i>
                                        <span>Harvested during peak season (April-June)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-seedling mt-1 mr-2 text-primary"></i>
                                        <span>Grows wild in Pakil's upland areas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-utensils mt-1 mr-2 text-primary"></i>
                                        <span>Used in jams, candies, and traditional desserts</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 rounded-lg bg-secondary/10 p-3">
                                    <i className="fas fa-map-marked-alt text-secondary"></i>
                                </div>
                                <div>
                                    <h4 className="text-dark mb-1 font-bold">Where to Experience Ibuli</h4>
                                    <p className="text-gray-600">Available at local markets during harvest season</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 lg:flex-row">
                        <div className="order-2 lg:order-1 lg:w-1/2">
                            <div className="mb-4 flex items-center">
                                <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Artistic Heritage</h2>
                            </div>
                            <h3 className="text-dark mb-4 text-2xl font-bold md:text-3xl">Kayas Woodcarving</h3>
                            <div className="prose prose-lg mb-6 text-gray-700">
                                <p>
                                    <span className="font-semibold text-primary">Kayas</span> is Pakil's delicate art of wood shaving and whittling,
                                    performed using three varieties of soft, pliable wood unique to Laguna. Master craftsmen transform these materials
                                    into graceful angels, swans, fans, and other intricate figures with remarkable precision.
                                </p>
                                <p className="mt-4">
                                    More than an art form, kayas is a living heritage passed through generations. Today's artisans actively mentor
                                    apprentices to preserve the techniques and cultural significance of this centuries-old craft.
                                </p>
                            </div>

                            <div className="mb-6 rounded-r-lg border-l-4 border-secondary bg-secondary/5 p-4">
                                <h4 className="mb-2 flex items-center font-bold text-secondary">
                                    <i className="fas fa-hammer mr-2"></i> Craftsmanship
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-tree mt-1 mr-2 text-secondary"></i>
                                        <span>Uses lagundi, santol, and laniti woods</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-tools mt-1 mr-2 text-secondary"></i>
                                        <span>Specialized knives for different shaving techniques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-user-graduate mt-1 mr-2 text-secondary"></i>
                                        <span>Apprenticeships last 3-5 years</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-start">
                                <div className="mr-4 rounded-lg bg-primary/10 p-3">
                                    <i className="fas fa-hands-helping text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="text-dark mb-1 font-bold">Experience the Craft</h4>
                                    <p className="text-gray-600">Visit woodcarving workshops near Pakil church</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 lg:w-1/2">
                            <div className="group relative">
                                <div className="absolute -inset-2 rounded-xl bg-secondary/20 blur-md transition duration-300 group-hover:blur-lg"></div>
                                <img
                                    src="/User/Images/kayas.jpg"
                                    alt="Kayas woodcarving in Pakil"
                                    className="relative aspect-[3/4] h-auto w-full rounded-xl border-4 border-white object-cover shadow-xl"
                                />
                                <div className="absolute -bottom-4 -left-4 rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
                                    <div className="rounded-lg bg-secondary/10 p-2">
                                        <i className="fas fa-monument text-xl text-secondary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
