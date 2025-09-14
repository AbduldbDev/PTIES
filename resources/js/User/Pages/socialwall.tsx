import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import FeaturedPost from '@UserUtils/components/Cards/FeaturedPost';
import SocialWallCard from '@UserUtils/components/Cards/SocialWallPost';
import PageTitle from '../Utils/components/Banner/PageTitle';
type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
interface User {
    id: number;
    name: string;
    email: string;
    image?: string;
}
interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: boolean;
    user: User;
    has_liked?: boolean;
    created_at: string;
    updated_at: string;
}

interface PageProps {
    banner: PageBannerProps;
    items: SocialWallPost[];
    topPost: SocialWallPost;
    [key: string]: unknown;
}

export default function SocialWall() {
    const { banner, items, topPost } = usePage<PageProps>().props;

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

            <section className="py-8 md:py-10 lg:py-12">
                <div className="container mx-auto px-4">
                    <PageTitle title="Community" subtitle="Pakil Social Wall" desc="See what visitors are sharing about Pakil"></PageTitle>

                    <div className="mx-auto mb-8 max-w-4xl">
                        {topPost && <FeaturedPost post={topPost} />}

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => (window.location.href = '/socialwall/new')}
                                className="mx-auto flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition duration-300 hover:bg-primary/90"
                            >
                                <i className="fas fa-plus mr-2"></i> Share Your Experience
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {items && items.map((items: SocialWallPost) => <SocialWallCard key={items.id} post={items} />)}
                    </div>

                    {/* <div className="mt-8 text-center">
                        <button className="inline-flex items-center rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition duration-300 hover:bg-primary hover:text-white">
                            <i className="fas fa-arrow-down mr-2"></i> Load More
                        </button>
                    </div> */}
                </div>
            </section>
        </>
    );
}
