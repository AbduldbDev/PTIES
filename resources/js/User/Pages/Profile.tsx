import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function Profile() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Profile';
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
            <section className="min-h-screen py-4 md:py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-8 hidden items-start gap-6 md:flex">
                        <div className="group relative flex-shrink-0">
                            <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                                <img src="/User/Images/ace.png" alt="Profile photo" className="h-full w-full object-cover" />
                                <button className="absolute right-0 bottom-0 rounded-full bg-primary p-2 text-white">
                                    <i className="fas fa-camera text-sm"></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="text-dark mb-2 text-3xl font-bold">
                                <span className="text-primary">Jose </span> Kezuke
                            </h1>
                            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-5 py-2 text-primary">
                                <img src="/User/Layout/Pakilpoints.png" className="h-[40px] w-[40px]" alt="" />
                                <span className="font-medium">1,850 Pakil Points</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-1 text-xs text-gray-500">Member Since</p>
                                    <p className="font-medium">June 15, 1900</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs text-gray-500">Email</p>
                                    <p className="truncate font-medium">jose.kzk@example.com</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs text-gray-500">Phone</p>
                                    <p className="font-medium">+63 912 345 6789</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs text-gray-500">Location</p>
                                    <p className="font-medium">Pakil, Laguna</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 flex flex-col items-center md:hidden">
                        <div className="group relative mb-4">
                            <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                                    alt="Profile photo"
                                    className="h-full w-full object-cover"
                                />
                                <button className="absolute right-0 bottom-0 rounded-full bg-primary p-1.5 text-white">
                                    <i className="fas fa-camera text-xs"></i>
                                </button>
                            </div>
                        </div>

                        <div className="text-center">
                            <h1 className="text-dark text-2xl font-bold">
                                <span className="text-primary">Jose </span> Kezuke
                            </h1>
                            <div className="mt-2 flex items-center justify-center">
                                <div className="flex items-center rounded-full bg-primary/10 px-4 py-1 text-primary">
                                    <img src="/User/Layout/Pakilpoints.png" className="h-[50px] w-[50px]" alt="" />
                                    <span className="font-medium">1,850 Points</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-100 p-4">
                            <h2 className="flex items-center text-lg font-bold text-primary">
                                <i className="fas fa-info-circle mr-2"></i> Complete Profile
                            </h2>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-xs text-gray-500">First Name</label>
                                    <div className="rounded-lg bg-gray-50 px-3 py-2">Maria</div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs text-gray-500">Last Name</label>
                                    <div className="rounded-lg bg-gray-50 px-3 py-2">Santos</div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs text-gray-500">Email</label>
                                    <div className="rounded-lg bg-gray-50 px-3 py-2">maria.santos@example.com</div>
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs text-gray-500">Phone</label>
                                    <div className="rounded-lg bg-gray-50 px-3 py-2">+63 912 345 6789</div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="mb-1 block text-xs text-gray-500">Address</label>
                                    <div className="rounded-lg bg-gray-50 px-3 py-2">123 Rizal Street, Pakil, Laguna</div>
                                </div>
                            </div>

                            <button className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90 md:w-auto">
                                <i className="fas fa-edit mr-2"></i> Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-100 p-4">
                            <h2 className="flex items-center text-lg font-bold text-primary">
                                <i className="fas fa-map-marked-alt mr-2"></i> Recent Visits
                            </h2>
                            <a href="#" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="p-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                    <div>
                                        <p className="font-medium">San Pedro de Alcantara Church</p>
                                        <p className="text-xs text-gray-500">June 10, 2023</p>
                                    </div>
                                    <div className="flex items-center text-secondary">
                                        <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                        <span className="text-sm sm:text-sm">50 pts</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                    <div>
                                        <p className="font-medium">Ping-as Falls</p>
                                        <p className="text-xs text-gray-500">May 28, 2023</p>
                                    </div>
                                    <div className="flex items-center text-secondary">
                                        <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                        <span className="text-sm sm:text-sm">50 pts</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                    <div>
                                        <p className="font-medium">Pakil Town Plaza</p>
                                        <p className="text-xs text-gray-500">May 15, 2023</p>
                                    </div>
                                    <div className="flex items-center text-secondary">
                                        <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                                        <span className="text-sm sm:text-sm">50 pts</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-100 p-4">
                            <h2 className="flex items-center text-lg font-bold text-primary">
                                <i className="fas fa-share-alt mr-2"></i> My Social Posts
                            </h2>
                            <a href="#" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                                <div className="group relative">
                                    <div className="absolute -inset-1 rounded-lg bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                                        <img src="/User/Images/church.jpg" alt="Church" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                                            <i className="fas fa-heart text-xl text-white"></i>
                                        </div>
                                        <div className="absolute right-0 bottom-0 left-0 p-2 text-center">
                                            <p className="text-sm text-white drop-shadow-lg">24 likes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 rounded-lg bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                                        <img src="/User/Images/church.jpg" alt="Food" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                                            <i className="fas fa-heart text-xl text-white"></i>
                                        </div>
                                        <div className="absolute right-0 bottom-0 left-0 p-2 text-center">
                                            <p className="text-sm text-white drop-shadow-lg">18 likes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 rounded-lg bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                                        <img src="/User/Images/church.jpg" alt="Town" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                                            <i className="fas fa-heart text-xl text-white"></i>
                                        </div>
                                        <div className="absolute right-0 bottom-0 left-0 p-2 text-center">
                                            <p className="text-sm text-white drop-shadow-lg">12 likes</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 rounded-lg bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-50">
                                        <img src="/User/Images/church.jpg" alt="Nature" className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                                            <i className="fas fa-heart text-xl text-white"></i>
                                        </div>
                                        <div className="absolute right-0 bottom-0 left-0 p-2 text-center">
                                            <p className="text-sm text-white drop-shadow-lg">32 likes</p>
                                        </div>
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
