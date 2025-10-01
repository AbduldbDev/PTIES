import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import Terminal from '@UserUtils/components/Cards/Terminal';
import TerminalsMap from '@UserUtils/components/Cards/TerminalMaps';
import EmptyState from '@UserUtils/components/Ui/EmptyState';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

interface TerminalProps {
    id: number;
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Routes[];
}

type Routes = {
    name: string;
};

interface PageProps {
    banner: PageBannerProps;
    terminals: TerminalProps[];
    [key: string]: unknown;
}

export default function Terminals() {
    const { terminals, banner } = usePage<PageProps>().props;

    const title = 'Pakil Tourism | Terminals';
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

            <section className="px-4 py-16">
                <div className="container mx-auto max-w-7xl">
                    {terminals.length > 0 ? (
                        <>
                            <PageTitle
                                title="TRICYCLE GUIDE"
                                subtitle="Tricycle Terminals in Pakil"
                                desc="Explore routes and terminals to easily navigate around the town."
                            />

                            <TerminalsMap terminals={terminals} apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} />
                        </>
                    ) : (
                        <PageTitle
                            title="NO TERMINALS AVAILABLE"
                            subtitle="Currently No Terminals To Explore"
                            desc="Please check back later for updates"
                        />
                    )}

                    <div className="products-section">
                        {terminals.length === 0 ? (
                            <EmptyState
                                title="No Terminals Available"
                                message="We're working on adding new terminals. Please check back soon."
                                actionText="Return Home"
                                onAction={() => (window.location.href = '/')}
                            />
                        ) : (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {terminals && terminals.map((terminal: TerminalProps) => <Terminal key={terminal.id} terminal={terminal} />)}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2"></div>
                </div>
            </section>
        </>
    );
}
