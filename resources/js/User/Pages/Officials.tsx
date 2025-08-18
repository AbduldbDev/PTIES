import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function Officials() {
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

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Key Officials</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Municpal</span> Mayor
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600"></p>
                    </div>

                    <div className="mx-auto mb-16 max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border-primary bg-[#eceef5] to-white shadow-xl">
                            <div className="flex-column md:flex">
                                <div className="relative md:w-1/3">
                                    <img src="/User/Images/ace.png" alt="Mayor" className="h-100 w-full object-cover md:h-full" />
                                </div>

                                <div className="p-8 md:w-2/3">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h4 className="text-dark text-2xl font-bold">Hon. Ethan Young</h4>
                                        <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                                            <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                        </span>
                                    </div>

                                    <p className="mb-4 text-gray-500">Municipal Mayor</p>

                                    <p className="mb-6 line-clamp-3 text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat illo, nulla reprehenderit officia ut
                                        esse suscipit culpa eum quo cum possimus alias adipisci nam sequi eos doloribus nihil repellendus!
                                    </p>

                                    <a href="/biography" className="inline-flex items-center font-medium text-primary hover:text-primary/80">
                                        Read Full Bio <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mb-16 max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border-primary bg-[#eceef5] to-white shadow-xl">
                            <div className="flex-column md:flex">
                                <div className="relative md:w-1/3">
                                    <img src="/User/Images/ace.png" alt="Mayor" className="h-100 w-full object-cover md:h-full" />
                                </div>

                                <div className="p-8 md:w-2/3">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h4 className="text-dark text-2xl font-bold">Hon. Ethan Young</h4>
                                        <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                                            <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                        </span>
                                    </div>

                                    <p className="mb-4 text-gray-500">Vice Mayor</p>

                                    <p className="mb-6 line-clamp-3 text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat illo, nulla reprehenderit officia ut
                                        esse suscipit culpa eum quo cum possimus alias adipisci nam sequi eos doloribus nihil repellendus!
                                    </p>

                                    <a href="/biography" className="inline-flex items-center font-medium text-primary hover:text-primary/80">
                                        Read Full Bio <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Key Officials</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Department </span>Of Tourism
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600"></p>
                    </div>
                    <div className="mx-auto mb-16 max-w-4xl">
                        <div className="overflow-hidden rounded-2xl border-primary bg-[#eceef5] to-white shadow-xl">
                            <div className="flex-column md:flex">
                                <div className="relative md:w-1/3">
                                    <img src="/User/Images/ace.png" alt="Mayor" className="h-100 w-full object-cover md:h-full" />
                                </div>

                                <div className="p-8 md:w-2/3">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h4 className="text-dark text-2xl font-bold">Hon. Ethan Young</h4>
                                        <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                                            <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                        </span>
                                    </div>

                                    <p className="mb-4 text-gray-500">Vice Mayor</p>

                                    <p className="mb-6 line-clamp-3 text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat illo, nulla reprehenderit officia ut
                                        esse suscipit culpa eum quo cum possimus alias adipisci nam sequi eos doloribus nihil repellendus!
                                    </p>

                                    <a href="/biography" className="inline-flex items-center font-medium text-primary hover:text-primary/80">
                                        Read Full Bio <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-[30vh] overflow-hidden">
                                <img src="/User/Images/ace.png" alt="Vice Mayor" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-2">
                                    <h4 className="text-dark text-xl font-bold">Hon. Ethan Young</h4>
                                    <span className="text-sm text-gray-600">
                                        <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Tourism</p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-[30vh] overflow-hidden">
                                <img src="/User/Images/ace.png" alt="Vice Mayor" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-2">
                                    <h4 className="text-dark text-xl font-bold">Hon. Ethan Young</h4>
                                    <span className="text-sm text-gray-600">
                                        <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Tourism</p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-[30vh] overflow-hidden">
                                <img src="/User/Images/ace.png" alt="Vice Mayor" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-2">
                                    <h4 className="text-dark text-xl font-bold">Hon. Ethan Young</h4>
                                    <span className="text-sm text-gray-600">
                                        <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Tourism</p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-[30vh] overflow-hidden">
                                <img src="/User/Images/ace.png" alt="Vice Mayor" className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-2">
                                    <h4 className="text-dark text-xl font-bold">Hon. Ethan Young</h4>
                                    <span className="text-sm text-gray-600">
                                        <i className="far fa-calendar-alt mr-1"></i> 2022-2025
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">Tourism</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
