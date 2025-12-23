import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import CulturalPropertyCard from '@UserUtils/components/Cards/CulturalPropertyCard';
import EmptyState from '@UserUtils/components/Ui/EmptyState';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type Property = {
    category: string;
    name: string;
    description: string;
    culture_type: string | string[];
    highlights_title: string;
    highlights_content: string;
    image: string;
    legacy: string;
};

export default function LocalProducts() {
    const { banner, culturalProperties } = usePage<{
        banner: PageBannerProps;
        culturalProperties: Property[];
    }>().props;

    const title = 'Pakil Tourism | Personalities';
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

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    {culturalProperties.length > 0 ? (
                        <PageTitle
                            title="Cultural Treasures"
                            subtitle="Pakil’s Cultural Properties"
                            desc="Discover Pakil’s historic sites, sacred objects, and living traditions."
                        />
                    ) : (
                        <PageTitle
                            title="NO CULTURAL PROPERTIES AVAILABLE"
                            subtitle="Currently No Cultural Properties to Explore"
                            desc="Please check back later for updates."
                        />
                    )}

                    {culturalProperties.length === 0 ? (
                        <EmptyState
                            title="No Cultural Properties Available"
                            message="We're currently updating our cultural heritage catalog. Please check back soon."
                            actionText="Return Home"
                            onAction={() => window.location.assign('/')}
                        />
                    ) : (
                        <div className="relative">
                            <div className="absolute top-0 left-16 -z-10 hidden h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:block"></div>

                            {culturalProperties.map((property, index) => (
                                <CulturalPropertyCard key={index} Property={property} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
