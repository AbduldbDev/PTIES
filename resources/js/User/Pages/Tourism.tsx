import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import CitizenCharter from '@UserUtils/components/Sections/Tourism/CitizenCharter';
import DeparmentStructure from '@UserUtils/components/Sections/Tourism/DepartmentStructure';
import MissionVision from '@UserUtils/components/Sections/Tourism/MissionVision';
import TourismAbout from '@UserUtils/components/Sections/Tourism/TourismAbout';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import { CMSContent } from '@UserUtils/Types/cms';
import { useEffect } from 'react';

interface PageProps {
    content: CMSContent;
    [key: string]: unknown;
}

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
interface DepartmentMember {
    id: number;
    name: string;
    position: string;
    email?: string;
    is_leader: boolean;
    order_no: number;
}

interface Department {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    email?: string;
    order_no: number;
    type: string;
    parent_id?: number;
    members: DepartmentMember[];
    children?: Department[];
}

export default function TourismAboutPage() {
    const { props } = usePage<PageProps>();
    const { banner } = usePage<{ banner: PageBannerProps }>().props;
    const { departments } = usePage<{ departments: Department[] }>().props;
    const { content } = props;
    const { url } = usePage();

    const title = 'Pakil Tourism | Tourism';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';
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
            {!content.about && !content.mission_vision && departments.length <= 0 && !content.citizen_charter && (
                <div className="py-16">
                    <PageTitle
                        title="NO INFORMATION AVAILABLE"
                        subtitle="Currently No Information Provided"
                        desc="Please check back soon for the latest updates."
                    />
                    <EmptyState
                        title="No Tourism Information Available"
                        message="We are currently updating our tourism content. Please check back soon for our updated information."
                        actionText="Return Home"
                        onAction={() => (window.location.href = '/')}
                    />
                </div>
            )}

            {content.about && (
                <section className="relative py-8 md:py-10 lg:py-12">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-[url('/User/Images/church.jpg')] bg-cover bg-center opacity-5"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-5 md:px-6">
                        <PageTitle
                            title="Local Government"
                            subtitle="Pakil Tourism, History, Culture and Arts - Turumba Festival "
                            desc="Preserving heritage, promoting sustainable tourism, and enhancing visitor experiences"
                        ></PageTitle>

                        <TourismAbout
                            content={{
                                ...content.about,
                                image1: content.about.image1 ? `/storage/${content.about.image1}` : '/User/Images/church.jpg',
                                image2: content.about.image2 ? `/storage/${content.about.image2}` : '/User/Images/church.jpg',
                                image3: content.about.image3 ? `/storage/${content.about.image3}` : '/User/Images/church.jpg',
                            }}
                        />

                        <div className="mt-10 rounded-lg border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-5 backdrop-blur-sm md:mt-12 md:rounded-xl md:p-6 lg:mt-16 lg:p-8">
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="mb-4 md:mr-6 md:mb-0 lg:mr-8">
                                    <i className="fas fa-leaf text-3xl text-primary md:text-4xl lg:text-5xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-dark mb-2 text-lg font-bold md:mb-3 md:text-xl lg:text-2xl">
                                        Commitment to Sustainable Tourism
                                    </h4>
                                    <p className="mb-3 text-sm text-gray-700 md:mb-4 md:text-base">
                                        The Tourism Department actively promotes eco-friendly practices including waste management, responsible
                                        trekking, and heritage conservation. We monitor tourism impacts and support initiatives that reduce
                                        environmental footprint while protecting Pakil's biodiversity.
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                                        <div className="text-center">
                                            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white md:mb-2 md:h-12 md:w-12">
                                                <i className="fas fa-recycle text-xs text-accent md:text-sm"></i>
                                            </div>
                                            <p className="text-xs font-medium md:text-sm">Eco-Tourism</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white md:mb-2 md:h-12 md:w-12">
                                                <i className="fas fa-hands text-xs text-accent md:text-sm"></i>
                                            </div>
                                            <p className="text-xs font-medium md:text-sm">Community Training</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white md:mb-2 md:h-12 md:w-12">
                                                <i className="fas fa-monument text-xs text-accent md:text-sm"></i>
                                            </div>
                                            <p className="text-xs font-medium md:text-sm">Heritage Protection</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white md:mb-2 md:h-12 md:w-12">
                                                <i className="fas fa-users text-xs text-accent md:text-sm"></i>
                                            </div>
                                            <p className="text-xs font-medium md:text-sm">Local Engagement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center md:mt-10 lg:mt-12">
                            <h4 className="text-dark mb-2 text-lg font-bold md:mb-3 md:text-xl">Want to collaborate or learn more?</h4>
                            <p className="mx-auto mb-4 max-w-2xl text-xs text-gray-600 md:mb-5 md:text-sm">
                                Contact the Pakil Tourism Department for partnerships, inquiries, or to share your ideas for sustainable tourism
                                development.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center rounded-full border border-transparent bg-primary px-4 py-2 text-xs font-medium text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-base"
                            >
                                <i className="fas fa-envelope mr-1.5 text-xs md:mr-2 md:text-sm"></i> Contact Tourism Office
                            </a>
                        </div>
                    </div>
                </section>
            )}
            {content.mission_vision && (
                <section id="mission&vision" className="py-0 md:py-16">
                    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <PageTitle title="Governance" subtitle="Mission & Vision" desc="" />
                        <MissionVision content={content.mission_vision} />
                    </div>
                </section>
            )}
            {departments.length > 0 && (
                <section id="department_structure" className="py-12">
                    <PageTitle
                        title="Organization"
                        subtitle="Department of Tourism Structure"
                        desc="The organizational hierarchy and leadership of Pakil's Tourism Department"
                    />
                    <DeparmentStructure departments={departments} />
                </section>
            )}
            {content.citizen_charter && (
                <section id="citizen_charter" className="py-10">
                    <div className="max-w-8xl container mx-auto px-6">
                        <div>
                            <PageTitle
                                title="Governance"
                                subtitle="Citizen's Charter"
                                desc="Our commitment to transparent and efficient public service"
                            />
                            <CitizenCharter content={content.citizen_charter} />
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
