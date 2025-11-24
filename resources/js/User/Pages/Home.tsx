import { Head, usePage } from '@inertiajs/react';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import EventsCard from '@UserUtils/components/Cards/EventsCard';
import FeaturedPost from '@UserUtils/components/Cards/FeaturedPost';
import NewsLetter from '@UserUtils/components/Cards/NewsLetter';
import Explore from '@UserUtils/components/Sections/Home/Explore';
import HeroSection from '@UserUtils/components/Sections/Home/Hero';
import Introduction from '@UserUtils/components/Sections/Home/Introduction';
import Map from '@UserUtils/components/Sections/Home/Map';
import PromotionalVideo from '@UserUtils/components/Sections/Home/Promotion';
import { CMSContent } from '@UserUtils/Types/cms';

type PromotionalVideoProps = {
    id: string;
    title: string;
    slogan: string;
    description: string;
    thumbnail: string;
    video: string;
    highlights: string[];
};
interface User {
    avatar?: string;
    first_name?: string;
}

interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: boolean;
    user: User;
    profile: User;
    has_liked?: boolean;
    created_at: string;
}
type EventProps = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    schedules: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: File[];
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
};

interface PageProps {
    content: CMSContent;
    topPost: SocialWallPost;
    events: EventProps[];
    [key: string]: unknown;
}

export default function Home() {
    const { content, props, topPost, events } = usePage<PageProps>().props;
    const { promvid } = usePage<{ promvid: PromotionalVideoProps }>().props;

    const title = 'Pakil Tourism | Home';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            {content.hero ? (
                <HeroSection
                    content={{
                        ...content.hero,
                        feature_img: content.hero.feature_img ? `/storage/${content.hero.feature_img}` : '/User/Images/church.jpg',
                    }}
                />
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <Explore />

            {promvid && (
                <PromotionalVideo
                    title={promvid.title}
                    slogan={promvid.slogan}
                    description={promvid.description}
                    highlights={promvid.highlights}
                    thumbnail={`/storage/${promvid.thumbnail}`}
                    videoUrl={`/storage/${promvid.video}`}
                />
            )}

            {content.introduction_section && (
                <Introduction
                    content={{
                        ...content.introduction_section,
                        image1: content.introduction_section.image1 ? `/storage/${content.introduction_section.image1}` : '/User/Images/church.jpg',
                        image2: content.introduction_section.image2 ? `/storage/${content.introduction_section.image2}` : '/User/Images/church.jpg',
                        image3: content.introduction_section.image3 ? `/storage/${content.introduction_section.image3}` : '/User/Images/church.jpg',
                    }}
                />
            )}

            <Map />

            {topPost && (
                <section className="py-10" id="featured_posts">
                    <div className="container mx-auto px-6">
                        <PageTitle
                            title="Social Wall"
                            subtitle="Featured Post"
                            desc="A glimpse of Pakil through the eyes of our visitors"
                        ></PageTitle>

                        <div className="mx-auto mb-8 max-w-4xl">
                            <FeaturedPost post={topPost} />

                            <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="400">
                                <button
                                    onClick={() => (window.location.href = '/socialwall/new')}
                                    className="mx-auto flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition duration-300 hover:bg-primary/90"
                                >
                                    <i className="fas fa-plus mr-2"></i> Share Your Experience
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {events.length > 0 && (
                <section className="bg-white py-10">
                    <div className="container mx-auto px-6">
                        <PageTitle title="Updates" subtitle="Events & News" desc="Stay updated with the latest happenings in Pakil"></PageTitle>

                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {events.map((event, index) => (
                                <EventsCard key={index} events={event} index={index} />
                            ))}
                        </div>

                        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                            <a
                                href="/events"
                                className="inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                            >
                                <i className="fas fa-newspaper mr-2"></i> View All Events & News
                            </a>
                        </div>
                    </div>
                </section>
            )}
            <NewsLetter />
        </>
    );
}
