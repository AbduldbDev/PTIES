import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import HistoryCard from '@UserUtils/components/Cards/History';
import BrangayInfo from '@UserUtils/components/Sections/About/BrangayInfo';
import Introductions from '@UserUtils/components/Sections/About/Introduction';
import { CmsContent } from '@UserUtils/Types/cms';

interface PageProps {
    banner: PageBannerProps;
    content: CmsContent;
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

    const title = 'Pakil Tourism | About';
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
                    imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
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

                    <div className="flex flex-col items-start gap-12 lg:flex-row">
                        <div className="lg:w-2/3">
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <h4 className="text-dark text-2xl font-bold">"The Feast of Nuestra Señora de los Dolores de Turumba"</h4>
                                    </div>
                                    <div className="prose prose-lg space-y-6 text-gray-700">
                                        <p>
                                            In 1788, the miraculous painting of Nuestra Señora de los Dolores de Turumba, depicting an image of the
                                            Sorrowful Mother Mary, and measuring at 9 inches by 11 inches, was found at Pakil's shore. The people
                                            believed that the painting was accidentally thrown overboard from a missionary's boat that was caught in a
                                            typhoon at Laguna Lake.
                                        </p>

                                        <p>
                                            Legend has it that the painting was found resting on a big stone by some local women. When they tried to
                                            lift the painting to bring it to the church, they found it too heavy. Father Miguel Soriano, parish priest
                                            of the Saint Peter of Alcantara Parish Church at that time, instructed the townsfolk to gather and chant
                                            the Litany of Saints. As the priest was about to lift the painting, the people broke into trance-like
                                            singing and dancing. Miraculously, the painting became easy to carry and was finally brought to the
                                            church. This manner of ecstatic dancing later on was called Turumba.
                                        </p>

                                        <p>
                                            To commemorate this event, the townsfolk hold annually the Turumba Festival. This celebration is the
                                            longest running festival in the Philippines which starts on a Friday before Palm Sunday and ending on
                                            Pentecost Sunday. Aside from the town's fiesta on 19 October, there are nine annual fiestas or lupi
                                            wherein the image is carried by the dancing devotees in a procession.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                    <h5 className="mb-4 flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-users mr-3"></i> Devotees & Pilgrims
                                    </h5>
                                    <div className="prose text-gray-700">
                                        <p>
                                            The festival attracts thousands of devotees coming from Batangas, Quezon, and Rizal provinces. In some
                                            cases, the festival participants claim that the Nuestra Señora visited them in their dreams and instructed
                                            them to make a pilgrimage to her home in Pakil.
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                    <h5 className="mb-4 flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-water mr-3"></i> Healing Waters
                                    </h5>
                                    <div className="prose text-gray-700">
                                        <p>
                                            The pilgrims complete their vows by bathing two to seven times at the miraculous Panghulo spring, which is
                                            believed to cure the body and soul. Guests are allowed to bring containers so that they can take home the
                                            healing waters. Every year, the number of devotees to the Turumba continues to increase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-info-circle mr-3"></i> Festival Facts
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-history"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Founded</h5>
                                                <p className="text-sm text-gray-700">1788</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-calendar-alt"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Duration</h5>
                                                <p className="text-sm text-gray-700">March to June (7 months)</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-church"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Main Venue</h5>
                                                <p className="text-sm text-gray-700">St. Peter of Alcantara Parish Church</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-user-plus"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Participants</h5>
                                                <p className="text-sm text-gray-700">Thousands from across Southern Luzon</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-images mr-3"></i> Festival Moments
                                    </h4>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-4">
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="/User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="/User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="/User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="/User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="border-b border-primary/20 bg-primary/10 p-5">
                            <h4 className="flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-calendar-day mr-3"></i> Festival Schedule Highlights
                            </h4>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                <div className="border-l-4 border-primary pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Palm Sunday Weekend</h5>
                                    <p className="text-sm text-gray-700">
                                        Opening procession with the first lupi (novena) and traditional Turumba dancing
                                    </p>
                                </div>
                                <div className="border-l-4 border-secondary pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Holy Week</h5>
                                    <p className="text-sm text-gray-700">Special ceremonies commemorating the Sorrows of Mary</p>
                                </div>
                                <div className="border-l-4 border-accent pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Pentecost Sunday</h5>
                                    <p className="text-sm text-gray-700">Grand finale procession and mass celebration</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
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
