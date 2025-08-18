import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import ContactUs from '@UserUtils/components/Sections/Contact/contactform';
import { useEffect } from 'react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
export default function Contact() {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

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
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            <ContactUs />

            <section id="hotlines" className="border py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Safety First</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Emergency</span> Hotlines & Locations
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Important contacts and locations for your safety in Pakil</p>
                    </div>
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

            <section id="tourguides" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Local Experts</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Certified</span> Tour Guides
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Explore Pakil with our knowledgeable local guides</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-xl">
                            <div className="relative h-48">
                                <img src="/Images/church.jpg" alt="Tour Guide" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="text-xl font-bold text-white">Juan Dela Cruz</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">
                                    Specializes in historical and cultural tours of Pakil's heritage sites. Fluent in English, Filipino, and local
                                    dialect.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Contact:</p>
                                        <p className="font-medium">0917 123 4567</p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90"
                                    >
                                        <i className="fa-brands fa-facebook-f mr-2"></i> View Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-xl">
                            <div className="relative h-48">
                                <img src="/Images/church.jpg" alt="Tour Guide" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="text-xl font-bold text-white">Maria Santos</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">
                                    Expert in nature and adventure tours. Knows all the hidden gems of Pakil's natural attractions and hiking trails.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Contact:</p>
                                        <p className="font-medium">0922 987 6543</p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90"
                                    >
                                        <i className="fa-brands fa-facebook-f mr-2"></i> View Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:shadow-xl">
                            <div className="relative h-48">
                                <img src="/Images/church.jpg" alt="Tour Guide" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="text-xl font-bold text-white">Pedro Reyes</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">
                                    Specializes in culinary and arts tours. Perfect for visitors interested in Pakil's local cuisine and traditional
                                    crafts.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Contact:</p>
                                        <p className="font-medium">0933 456 7890</p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90"
                                    >
                                        <i className="fa-brands fa-facebook-f mr-2"></i> View Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
