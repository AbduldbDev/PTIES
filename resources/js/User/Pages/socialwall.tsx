import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
export default function SocialWall() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | SocialWall';
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
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-8 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Community</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-2 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Pakil</span> Social Wall
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">See what visitors are sharing about Pakil</p>
                    </div>

                    <div className="mx-auto mb-8 max-w-4xl">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Featured Pakil Image" className="h-80 w-full object-cover md:h-96" />
                                <div className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow">
                                    <i className="fas fa-crown text-xl text-secondary"></i>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-lg text-gray-700 italic">
                                    "The stunning San Pedro de Alcantara Church in golden hour. The centuries-old architecture never fails to take my
                                    breath away!"
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-3 h-10 w-10 rounded-full" />
                                        <div>
                                            <p className="text-dark font-medium">Juan Dela Cruz</p>
                                            <p className="text-xs text-gray-500">Posted on May 15, 2023</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center text-red-500 hover:text-red-600">
                                        <i className="fas fa-heart mr-1"></i>
                                        <span className="font-medium">248</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="mx-auto flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition duration-300 hover:bg-primary/90">
                                <i className="fas fa-plus mr-2"></i> Share Your Experience
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
                            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
                            <div className="p-4">
                                <p className="mb-3 line-clamp-2 text-xs text-gray-700">
                                    "Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                    <div className="flex items-center">
                                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                                        <span className="text-xs font-medium">@traveler</span>
                                    </div>
                                    <button className="text-xs text-gray-400 hover:text-red-500">
                                        <i className="far fa-heart"></i> 64
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition duration-300 hover:bg-primary hover:text-white">
                            <i className="fas fa-arrow-down mr-2"></i> Load More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
