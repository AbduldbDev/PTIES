import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import OfficialsCard from '../Utils/components/Cards/Officials';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type Official = {
    id: number;
    name: string;
    position: string;
    term: string;
    image: string | null;
    biography?: string;
};

type OfficialsData = {
    banner: PageBannerProps;
    officials: {
        [key: string]: Official[];
    };
};

export default function Officials() {
    const { banner, officials } = usePage<OfficialsData>().props;

    const title = 'Pakil Tourism | Officials';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

    const mayor = officials['Municipal Mayor']?.[0];
    const viceMayor = officials['Municipal Vice Mayor']?.[0];
    const councilMembers = officials['SB Member'] || [];
    const departmentHeads = Object.entries(officials)
        .filter(([position]) => !['Municipal Mayor', 'Municipal Vice Mayor', 'SB Member'].includes(position))
        .flatMap(([_, officials]) => officials);

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
                />
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <PageTitle
                        title="Leadership"
                        subtitle="Municipal Key Officials"
                        desc="Dedicated public servants working for the community of Pakil."
                    ></PageTitle>

                    <div className="mx-auto max-w-7xl">
                        {mayor && (
                            <div className="mb-10 flex justify-center">
                                <div className="official-card flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-lg">
                                    <div className="relative aspect-square bg-gray-200">
                                        <img
                                            src={mayor.image ? `${mayor.image}` : '/images/user/User.png'}
                                            alt={mayor.name}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                                            <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">{mayor.position}</span>
                                        </div>
                                        <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                                            <i className="fas fa-crown"></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow flex-col p-6 text-center">
                                        <div className="flex-grow">
                                            <h4 className="text-dark mb-1 text-xl font-bold">{mayor.name}</h4>
                                            <p className="mb-3 text-sm text-gray-500">{mayor.position}</p>
                                            <div className="mb-4 flex items-center justify-center text-xs text-gray-500">
                                                <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                                <span>Term: {mayor.term}</span>
                                            </div>
                                        </div>
                                        <button
                                            className={`view-bio-btn mt-auto w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                                                mayor.biography
                                                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                                            } `}
                                            onClick={() => {
                                                if (mayor.biography) {
                                                    window.location.href = `/about/biography/${mayor.id}`;
                                                }
                                            }}
                                            disabled={!mayor.biography}
                                        >
                                            {mayor.biography ? 'View Full Bio' : 'No Biography Available'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {viceMayor && (
                            <div className="mb-12 flex justify-center">
                                <div className="official-card flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
                                    <div className="relative aspect-square bg-gray-200">
                                        <img
                                            src={viceMayor.image ? `${viceMayor.image}` : '/images/user/User.png'}
                                            alt={viceMayor.name}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-primary/70 to-transparent p-4">
                                            <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">{viceMayor.position}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-grow flex-col p-5 text-center">
                                        <div className="flex-grow">
                                            <h4 className="text-dark mb-1 text-lg font-bold">{viceMayor.name}</h4>
                                            <p className="mb-3 text-sm text-gray-500">{viceMayor.position}</p>
                                            <div className="mb-4 flex items-center justify-center text-xs text-gray-500">
                                                <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                                <span>Term: {viceMayor.term}</span>
                                            </div>
                                        </div>
                                        <button
                                            className={`view-bio-btn mt-auto w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                                                viceMayor.biography
                                                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                                                    : 'cursor-not-allowed bg-gray-200 text-gray-400'
                                            } `}
                                            onClick={() => {
                                                if (viceMayor.biography) {
                                                    window.location.href = `/about/biography/${viceMayor.id}`;
                                                }
                                            }}
                                            disabled={!viceMayor.biography}
                                        >
                                            {viceMayor.biography ? 'View Full Bio' : 'No Biography Available'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {councilMembers.length > 0 && (
                            <div className="mb-10">
                                <div className="mb-6 text-center">
                                    <h3 className="flex items-center justify-center text-2xl font-bold text-primary">Sangguniang Bayan Members</h3>
                                    <p className="text-gray-600">Elected council members of Pakil</p>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {councilMembers.map((official) => (
                                        <OfficialsCard key={official.id} official={official} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {departmentHeads.length > 0 && (
                            <div>
                                <div className="mb-6 text-center">
                                    <h3 className="flex items-center justify-center text-2xl font-bold text-primary">Department Heads</h3>
                                    <p className="text-gray-600">Administrative leaders of Pakil</p>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {departmentHeads.map((official) => (
                                        <OfficialsCard key={official.id} official={official} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
