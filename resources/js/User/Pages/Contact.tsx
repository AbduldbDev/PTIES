import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
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

interface PageProps {
    banner: PageBannerProps;
    guide: PakilGuideProps[];
    [key: string]: unknown;
}

export default function Contact() {
    const { banner, guide } = usePage<PageProps>().props;

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

            <section id="hotlines" className="py-8">
                <div className="container mx-auto px-4">
                    <PageTitle
                        title="Safety First"
                        subtitle="Emergency Hotlines & Locations"
                        desc="Important contacts and locations for your safety in Pakil"
                    ></PageTitle>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">Pakil Police Station</h3>
                                    <p className="text-sm text-gray-600">Emergency response</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>(049) 123-4567</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                                    <span>0917 123 4567</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                                    <span>Municipal Compound, Pakil</span>
                                </div>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary">
                                <i className="fas fa-directions mr-1"></i> View Directions
                            </a>
                        </div>

                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">Pakil Rural Health Unit</h3>
                                    <p className="text-sm text-gray-600">Medical emergencies</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>(049) 234-5678</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                                    <span>0918 765 4321</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                                    <span>Near Municipal Hall, Pakil</span>
                                </div>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary">
                                <i className="fas fa-directions mr-1"></i> View Directions
                            </a>
                        </div>

                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">Pakil Fire Station</h3>
                                    <p className="text-sm text-gray-600">Fire emergencies</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>(049) 345-6789</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                                    <span>0927 654 3210</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                                    <span>Brgy. Banilan, Pakil</span>
                                </div>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary">
                                <i className="fas fa-directions mr-1"></i> View Directions
                            </a>
                        </div>

                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">Tourism Office</h3>
                                    <p className="text-sm text-gray-600">Visitor assistance</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>(049) 456-7890</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                                    <span>0919 876 5432</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                                    <span>Municipal Hall, Pakil</span>
                                </div>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary">
                                <i className="fas fa-directions mr-1"></i> View Directions
                            </a>
                        </div>

                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">National Emergency</h3>
                                    <p className="text-sm text-gray-600">All emergencies</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>911 (Philippine Emergency)</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>117 (PNP Emergency)</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>166 (Red Cross)</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                            <div className="mb-3 flex items-start">
                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                    <i className="fa-solid fa-building-columns text-primary"></i>
                                </div>
                                <div>
                                    <h3 className="text-dark font-bold">Coast Guard</h3>
                                    <p className="text-sm text-gray-600">Lake emergencies</p>
                                </div>
                            </div>
                            <div className="space-y-2 pl-12">
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                    <span>(02) 8527-8481</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <i className="fas fa-mobile-alt mr-2 text-primary"></i>
                                    <span>0917 724 3682</span>
                                </div>
                                <div className="flex items-start text-sm">
                                    <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                                    <span>Sta. Cruz, Laguna</span>
                                </div>
                            </div>
                            <a href="#" className="mt-3 inline-block text-sm font-medium text-primary">
                                <i className="fas fa-directions mr-1"></i> View Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="tourguides" className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <PageTitle
                        title="Local Experts"
                        subtitle="Certified Tour Guides"
                        desc="Explore Pakil with our knowledgeable local guides"
                    ></PageTitle>
                    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {guide && guide.map((guideItem: PakilGuideProps) => <TourGuide key={guideItem.id} guide={guideItem} />)}
                    </div>
                </div>
            </section>
        </>
    );
}
