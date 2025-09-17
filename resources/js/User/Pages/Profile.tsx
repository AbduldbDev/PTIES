import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import InformationCard from '@UserUtils/components/Sections/Profile/Information';
import SocialPost from '@UserUtils/components/Sections/Profile/SocialPost';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type User = {
    email: string;
    avatar?: string;
    pakil_points: number;
    created_at: string;
};

type UserProfile = {
    first_name: string;
    middle_name?: string;
    last_name: string;
    phone?: string;
    address?: string;
    user: User;
};

type PageProps = {
    banner: PageBannerProps;
    item: UserProfile;
    [key: string]: unknown;
};

export default function Profile() {
    const { banner } = usePage<PageProps>().props;

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

            <InformationCard />

            <section className="">
                <div className="container mx-auto px-4">
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
                </div>
            </section>

            <SocialPost />
        </>
    );
}
