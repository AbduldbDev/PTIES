import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import PersonalityCard from '@UserUtils/components/Cards/LocalPersonalities';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type Personality = {
    category: string;
    name: string;
    description: string;
    highlights_title: string;
    highlights_content: string;
    born?: string;
    died?: string;
    image: string;
    legacy: string;
};

export default function LocalProducts() {
    const { banner, personalities } = usePage<{
        banner: PageBannerProps;
        personalities: Personality[];
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
                    <PageTitle
                        title="Cultural Treasures"
                        subtitle="Pakil’s Iconic Personalities"
                        desc="Celebrating the artists, heroes and visionaries who shaped our town"
                    ></PageTitle>
                    <div className="relative">
                        <div className="absolute top-0 left-16 -z-10 hidden h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:block"></div>

                        {personalities.map((p, index) => (
                            <PersonalityCard key={p.name} personality={p} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
