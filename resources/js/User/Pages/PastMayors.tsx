import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
type Mayors = {
    name: string;
    position: string;
    term: string;
    image: string;
};

interface PageProps {
    banner: PageBannerProps;
    items: Mayors[];
    [key: string]: unknown;
}
export default function PastMayors() {
    const { banner, items } = usePage<PageProps>().props;

    const title = 'Pakil Tourism | Guide';
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
                    imageSrc={banner?.image ? `${banner.image}` : '/User//User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Leadership Through History"
                        subtitle="Past Mayors of Pakil"
                        desc="Honoring the leaders who have shaped Pakil's history and development since 1899"
                    ></PageTitle>

                    <div className="relative hidden lg:block">
                        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-primary via-secondary to-accent"></div>

                        {items.map((mayor, index) => (
                            <div key={index}>
                                {index % 2 === 0 ? (
                                    <div className="relative mb-8 flex items-center justify-between">
                                        <div className="flex w-5/12 justify-end">
                                            <div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white p-3 shadow-lg transition-all duration-300 hover:shadow-xl">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="relative mb-4">
                                                        <div className="creative-frame relative mx-auto h-56 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                                                            <div className="glow-effect absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-xl"></div>
                                                            <img
                                                                src={mayor.image}
                                                                alt="Bernardo M. Gonzales"
                                                                className="relative z-10 h-full w-full object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="mb-2 text-2xl font-bold text-primary">{mayor.name}</h4>
                                                    <p className="mb-2 text-gray-600">{mayor.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-primary px-5 py-2 shadow-lg">
                                            <span className="text-sm font-bold text-white"> {mayor.term}</span>
                                        </div>
                                        <div className="w-5/12"></div>
                                    </div>
                                ) : (
                                    <div className="relative mb-8 flex items-center justify-between">
                                        <div className="w-5/12"></div>
                                        <div className="absolute left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-white bg-primary px-5 py-2 shadow-lg">
                                            <span className="text-sm font-bold text-white"> {mayor.term}</span>
                                        </div>
                                        <div className="w-5/12">
                                            <div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white p-3 shadow-lg transition-all duration-300 hover:shadow-xl">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="relative mb-4">
                                                        <div className="creative-frame relative mx-auto h-56 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                                                            <div className="glow-effect absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl"></div>
                                                            <img
                                                                src={mayor.image}
                                                                alt="Bernardo M. Gonzales"
                                                                className="relative z-10 h-full w-full object-contain"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="mb-2 text-2xl font-bold text-primary">{mayor.name}</h4>
                                                    <p className="mb-2 text-gray-600"> {mayor.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {items.map((mayor, index) => (
                                <div
                                    key={index}
                                    className="gallery-card rounded-xl border border-gray-100 bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-4">
                                            <div className="mx-auto h-40 w-40 overflow-hidden rounded-lg border-4 border-white shadow-lg">
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                                                    <img src={mayor.image} alt={mayor.name} />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="mb-1 text-xl font-bold text-primary">{mayor.name}</h4>
                                        <p className="mb-2 text-sm text-gray-600">{mayor.position}</p>
                                        <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{mayor.term}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>
                            <i className="fas fa-info-circle mr-2"></i>Portrait images will be added as they become available from municipal archives
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
