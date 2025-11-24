import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import HistoryCard from '@UserUtils/components/Cards/History';
import BrangayInfo from '@UserUtils/components/Sections/About/BrangayInfo';
import Festival from '@UserUtils/components/Sections/About/Festival';
import Introductions from '@UserUtils/components/Sections/About/Introduction';
import { CMSContent } from '@UserUtils/Types/cms';

interface PageProps {
    banner: PageBannerProps;
    content: CMSContent;
    history: HistoryProps[];
    barangays: BarangayProps[];
    barangayHighlights: BarangayProps[];
    [key: string]: unknown;
}
type BarangayProps = {
    id: number;
    barangay: string;
    captain: string;
    highlights: string;
    type: string;
    index: string;
};

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type HistoryProps = {
    date: string;
    title: string;
    description: string;
    image: string;
};

export default function About() {
    const { banner, content, history, barangays, barangayHighlights } = usePage<PageProps>().props;

    const title = 'Pakil Tourism | About Tourism';
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

            {content.introduction && (
                <section className="px-4 py-12 md:py-16 lg:py-20">
                    <div className="mx-auto max-w-5xl">
                        <PageTitle
                            title="Discover"
                            subtitle="Introduction to Pakil"
                            desc="Where faith, heritage, and natural beauty converge"
                        ></PageTitle>

                        <Introductions
                            content={{
                                ...content.introduction,
                                image1: content.introduction.image1 ? `/storage/${content.introduction.image1}` : '/User/Images/church.jpg',
                                image2: content.introduction.image2 ? `/storage/${content.introduction.image2}` : '/User/Images/church.jpg',
                                image3: content.introduction.image3 ? `/storage/${content.introduction.image3}` : '/User/Images/church.jpg',
                                image4: content.introduction.image4 ? `/storage/${content.introduction.image4}` : '/User/Images/church.jpg',
                            }}
                        />
                    </div>
                </section>
            )}

            {history?.length > 0 && (
                <section className="py-20">
                    <div className="container mx-auto max-w-5xl px-6">
                        <PageTitle title="The Past" subtitle="Rich History of Pakil" desc="Discover the fascinating journey of our pilgrimage town" />

                        <div className="flex flex-col md:flex-row">
                            <div className="flex justify-center md:w-1/6">
                                <div className="relative hidden md:block">
                                    <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-primary/20"></div>
                                    <div className="absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-primary shadow-md"></div>
                                    <div className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-primary shadow-md"></div>
                                </div>
                            </div>

                            <div className="md:w-5/6">
                                {history.map((item, index) => (
                                    <HistoryCard key={item.date} history={item} className={index % 2 === 1 ? 'flex-row-reverse' : ''} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Celebrations"
                        subtitle="Turumba sa Birhen Festival"
                        desc="The longest religious festival in the Philippines"
                    ></PageTitle>

                    <Festival />

                    <div className="mt-12 text-center">
                        <a
                            href="/events"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                        >
                            <i className="fas fa-calendar-check mr-2"></i> View Full Festival Calendar
                        </a>
                    </div>
                </div>
            </section>

            <BrangayInfo content={content.municipal_stats} barangays={barangays} barangayHighlights={barangayHighlights} />
        </>
    );
}
