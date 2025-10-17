import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import InformationCard from '@UserUtils/components/Sections/Profile/Information';
import RecentVisit from '@UserUtils/components/Sections/Profile/RecentVisit';
import RewardRedeemLogs from '@UserUtils/components/Sections/Profile/RedeemLogs';
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
                    imageSrc={banner?.image ? `${banner.image}` : '/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <InformationCard />
            <RewardRedeemLogs />
            <RecentVisit />

            <SocialPost />
        </>
    );
}
