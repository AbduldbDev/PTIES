import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
export default function RewardShop() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Rewards';
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
                    imageSrc={banner?.image ? `${banner.image}` : '/User/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section className="bg-gradient-to-b py-6 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <h1 className="mb-2 text-2xl font-bold text-primary md:text-3xl">Rewards Shop</h1>
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
                            <img src="/User/Layout/Pakilpoints.png" className="h-[50px] w-[50px]" alt="" />
                            <span className="font-medium">
                                Your Points: <span className="text-secondary">1,250</span>
                            </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <div className="relative max-w-md flex-1">
                                <input
                                    type="text"
                                    placeholder="Search rewards..."
                                    className="w-full rounded-full border border-gray-300 bg-white py-2 pr-4 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                />
                                <i className="fas fa-search absolute top-2.5 left-3 text-gray-400"></i>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                                <button className="rounded-full bg-primary px-3 py-1 text-sm whitespace-nowrap text-white">All</button>
                                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm whitespace-nowrap hover:bg-gray-200">Souvenirs</button>
                                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm whitespace-nowrap hover:bg-gray-200">Vouchers</button>
                                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm whitespace-nowrap hover:bg-gray-200">
                                    Experiences
                                </button>
                                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm whitespace-nowrap hover:bg-gray-200">Religious</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        <div className="group relative h-full">
                            <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
                                <div className="relative pt-[100%]">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Wooden handicrafts"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs text-primary">Souvenir</span>
                                </div>
                                <div className="flex flex-1 flex-col p-3">
                                    <h3 className="text-dark mb-1 line-clamp-1 font-semibold">Pakil Wood Carving</h3>
                                    <div className="flex-1">
                                        <h1 className="text-sm text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vero aut quam.
                                        </h1>
                                        <span className="mt-2 flex items-center text-sm text-gray-600">
                                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                            <span>150 pts</span>
                                        </span>
                                    </div>
                                    <div>
                                        <button className="mt-2 rounded-full bg-primary px-3 py-1 text-xs text-white transition hover:bg-primary/90">
                                            Redeem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative h-full">
                            <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
                                <div className="relative pt-[100%]">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Local delicacies"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs text-primary">Voucher</span>
                                </div>
                                <div className="flex flex-1 flex-col p-3">
                                    <h3 className="text-dark mb-1 line-clamp-1 font-semibold">Food Voucher</h3>
                                    <div className="flex-1"></div>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center text-sm text-gray-600">
                                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                            <span>75 pts</span>
                                        </span>
                                        <button className="rounded-full bg-primary px-3 py-1 text-xs text-white transition hover:bg-primary/90">
                                            Redeem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative h-full">
                            <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                                <div className="relative pt-[100%]">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Festival access"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs text-primary">Experience</span>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-red-700/50 px-2 py-1 text-xs font-medium text-white">
                                            Out of Stock
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-3">
                                    <h3 className="text-dark mb-1 line-clamp-1 font-semibold">Turumba Festival Pass</h3>
                                    <div className="flex-1"></div>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center text-sm text-gray-600">
                                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                            <span>200 pts</span>
                                        </span>
                                        <button className="cursor-not-allowed rounded-full bg-gray-300 px-3 py-1 text-xs text-gray-500" disabled>
                                            Unavailable
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative h-full">
                            <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
                                <div className="relative pt-[100%]">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Religious items"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs text-primary">Religious</span>
                                </div>
                                <div className="flex flex-1 flex-col p-3">
                                    <h3 className="text-dark mb-1 line-clamp-1 font-semibold">Turumba Rosary</h3>
                                    <div className="flex-1"></div>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center text-sm text-gray-600">
                                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                            <span>120 pts</span>
                                        </span>
                                        <button className="rounded-full bg-primary px-3 py-1 text-xs text-white transition hover:bg-primary/90">
                                            Redeem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-left text-xs"></i>
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                2
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                3
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-right text-xs"></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
