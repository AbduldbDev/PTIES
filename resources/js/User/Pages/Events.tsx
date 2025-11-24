import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import EventsCard from '@UserUtils/components/Cards/EventsCard';
import Calendar from '@UserUtils/components/Sections/Events/EventCarlendar';
import EmptyState from '@UserUtils/components/Ui/EmptyState';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

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
    banner: PageBannerProps;
    items: EventProps[];
    [key: string]: unknown;
}

export const Events = () => {
    const { banner, items } = usePage<PageProps>().props;

    const title = 'Pakil Tourism | Events';
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

            {items.length > 0 ? (
                <Calendar events={items} />
            ) : (
                <div className="py-16">
                    <PageTitle
                        title="NO EVENTS AVAILABLE"
                        subtitle="Currently No Events To Explore"
                        desc="Please check back later for upcoming events and activities."
                    />
                    <EmptyState
                        title="No Events Yet"
                        message="There are currently no events scheduled. Be the first to share or suggest an event!"
                        actionText="Return Home"
                        onAction={() => window.location.assign('/')}
                    />
                </div>
            )}

            {items.length > 0 && (
                <section className="py-10">
                    <div className="container mx-auto px-6">
                        <PageTitle title="Events" subtitle="Upcoming Happenings" desc="Stay updated with the latest events in Pakil" />

                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((event, index) => (
                                <EventsCard key={index} events={event} index={index} />
                            ))}
                        </div>

                        {/* <div className="mt-8 text-center">
                        <button className="inline-flex items-center rounded-full border border-primary px-5 py-2 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white">
                            <i className="fas fa-arrow-down mr-2"></i> Load More
                        </button>
                    </div> */}
                    </div>
                </section>
            )}
        </>
    );
};
export default Events;
