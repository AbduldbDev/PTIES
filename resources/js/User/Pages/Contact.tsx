import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import Hotlines from '@UserUtils/components/Cards/Hotlines';
import TourGuide from '@UserUtils/components/Cards/TourGuide';
import ContactUs from '@UserUtils/components/Sections/Contact/contactform';
import { useEffect } from 'react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
interface PakilGuideProps {
    id: number;
    name: string;
    description: string;
    gender: string;
    contact: string;
    image: string;
    facebook: string;
}
type HotlineProps = {
    id: number;
    name: string;
    category: string;
    icon: string;
    hotline: string;
    contact: string;
    location: string;
    long: string;
    lat: string;
};

interface PageProps {
    banner: PageBannerProps;
    hotlines: HotlineProps[];
    guide: PakilGuideProps[];
    [key: string]: unknown;
}

export default function Contact() {
    const { banner, guide, hotlines } = usePage<PageProps>().props;

    const title = 'Pakil Tourism | Contact Us';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';
    const { url } = usePage();

    useEffect(() => {
        if (url.includes('#')) {
            const hash = url.split('#')[1];
            const element = document.getElementById(hash);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [url]);

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
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/User/Images/ace.png'}
            ></Banner>

            <ContactUs />

            {hotlines && hotlines.length > 0 && (
                <section id="hotlines" className="py-8">
                    <div className="container mx-auto px-4">
                        <PageTitle
                            title="Safety First"
                            subtitle="Emergency Hotlines & Locations"
                            desc="Important contacts and locations for your safety in Pakil"
                        ></PageTitle>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {hotlines.map((holtinesItem: HotlineProps) => (
                                <Hotlines key={holtinesItem.id} hotlines={holtinesItem} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {guide && guide.length > 0 && (
                <section id="tourguides" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6">
                        <PageTitle
                            title="Local Experts"
                            subtitle="Certified Tour Guides"
                            desc="Explore Pakil with our knowledgeable local guides"
                        ></PageTitle>
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                            {guide.map((guideItem: PakilGuideProps) => (
                                <TourGuide key={guideItem.id} guide={guideItem} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
