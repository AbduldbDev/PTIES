import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import CitizenCharter from '@UserUtils/components/Sections/Tourism/CitizenCharter';
import DeparmentStructure from '@UserUtils/components/Sections/Tourism/DepartmentStructure';
import MissionVision from '@UserUtils/components/Sections/Tourism/MissionVision';
import TourismAbout from '@UserUtils/components/Sections/Tourism/TourismAbout';
import { CmsContent } from '@UserUtils/Types/cms';

interface PageProps {
    content: CmsContent;
    [key: string]: unknown;
}

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export default function TourismAboutPage() {
    const { props } = usePage<PageProps>();
    const { banner } = usePage<{ banner: PageBannerProps }>().props;
    const { content } = props;

    const title = 'Pakil Tourism | Tourism';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

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
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            <section className="relative py-10">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[url('/User/Images/church.jpg')] bg-cover bg-center opacity-5"></div>
                </div>

                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Local Government"
                        subtitle="Tourism Department of Pakil, Laguna"
                        desc="Preserving heritage, promoting sustainable tourism, and enhancing visitor experiences"
                    ></PageTitle>

                    {content.about && (
                        <TourismAbout
                            content={{
                                ...content.about,
                                image1: content.about.about ? `/storage/${content.about.image1}` : '/User/Images/church.jpg',
                                image2: content.about.image2 ? `/storage/${content.about.image2}` : '/User/Images/church.jpg',
                                image3: content.about.image3 ? `/storage/${content.about.image3}` : '/User/Images/church.jpg',
                            }}
                        />
                    )}

                    <div className="mt-16 rounded-xl border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-8 backdrop-blur-sm">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="mb-6 md:mr-8 md:mb-0">
                                <i className="fas fa-leaf text-5xl text-primary"></i>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-dark mb-3 text-2xl font-bold">Commitment to Sustainable Tourism</h4>
                                <p className="mb-4 text-gray-700">
                                    The Tourism Department actively promotes eco-friendly practices including waste management, responsible trekking,
                                    and heritage conservation. We monitor tourism impacts and support initiatives that reduce environmental footprint
                                    while protecting Pakil's biodiversity.
                                </p>
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <i className="fas fa-recycle text-accent"></i>
                                        </div>
                                        <p className="text-sm font-medium">Eco-Tourism</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <i className="fas fa-hands text-accent"></i>
                                        </div>
                                        <p className="text-sm font-medium">Community Training</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <i className="fas fa-monument text-accent"></i>
                                        </div>
                                        <p className="text-sm font-medium">Heritage Protection</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <i className="fas fa-users text-accent"></i>
                                        </div>
                                        <p className="text-sm font-medium">Local Engagement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h4 className="text-dark mb-3 text-xl font-bold">Want to collaborate or learn more?</h4>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                            Contact the Pakil Tourism Department for partnerships, inquiries, or to share your ideas for sustainable tourism
                            development.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                        >
                            <i className="fas fa-envelope mr-2"></i> Contact Tourism Office
                        </a>
                    </div>
                </div>
            </section>

            <section id="mission&vision" className="py-0 md:py-16">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <PageTitle title="Governance" subtitle="Mission & Vision" desc="" />
                    <MissionVision content={content.mission_vision} />
                </div>
            </section>

            <DeparmentStructure />
            <CitizenCharter />

            {/* <section id="citizen_charter" className="py-10">
                <div className="max-w-8xl container mx-auto px-6">
                    <div>
                        <PageTitle
                            title="Governance"
                            subtitle="Citizen's Charter"
                            desc="Our commitment to transparent and efficient public service"
                        ></PageTitle>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="md:flex">
                                <div className="border-b border-gray-200 bg-primary/5 p-8 md:w-1/3 md:border-r md:border-b-0">
                                    <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-file-contract mr-3"></i> About the Charter
                                    </h4>
                                    <div className="prose text-gray-700">
                                        <p>
                                            The Citizen's Charter outlines our services, procedures, and response times to ensure accountability and
                                            transparency in local governance.
                                        </p>
                                        <p className="mt-4">
                                            This document serves as our social contract with the people of Pakil, detailing what services they can
                                            expect from their local government.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8 md:w-2/3">
                                    <div className="flex h-96 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                                        <div className="p-6 text-center">
                                            <i className="fas fa-file-pdf mb-4 text-5xl text-primary"></i>
                                            <h5 className="text-dark mb-2 text-lg font-bold">Pakil Citizen's Charter 2025</h5>
                                            <p className="mb-4 text-gray-600">PDF document | 2.4MB</p>
                                            <button className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none">
                                                <i className="fas fa-download mr-2"></i> Download Charter
                                            </button>
                                            <div className="mt-4 text-sm text-gray-500">
                                                <p>
                                                    Or <br />
                                                    <a href="#" className="text-primary hover:underline">
                                                        view online
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}
