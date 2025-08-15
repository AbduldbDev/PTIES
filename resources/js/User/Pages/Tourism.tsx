import { Head } from '@inertiajs/react';
import Banner from "@UserUtils/components/Banner/Banner"
export default function TourismAbout() {
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

            <Banner
                title="About Pakil"
                subtitle="Discover Pakil, Laguna"
                desc="Explore Pakil's attractions and redeem exciting prizes"
                imageSrc="/User/Images/church.jpg"
            ></Banner>

            <section className="relative py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[url('/User/Images/church.jpg')] bg-cover bg-center opacity-5"></div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Local Government</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Tourism Department</span> of Pakil, Laguna
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Preserving heritage, promoting sustainable tourism, and enhancing visitor experiences
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="group relative">
                                <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-md transition duration-300 group-hover:blur-lg"></div>
                                <img
                                    src="/User/Images/church.jpg"
                                    alt="Pakil Tourism Office"
                                    className="relative h-auto w-full rounded-xl border-4 border-white shadow-xl"
                                />
                                <div className="absolute -right-5 -bottom-5 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:block">
                                    <div className="flex items-center">
                                        <div className="mr-3 rounded-lg bg-primary/10 p-3">
                                            <i className="fas fa-map-marked-alt text-xl text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Visit Us</p>
                                            <p className="text-dark text-sm font-semibold">Municipal Hall Complex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="prose prose-lg mb-8 text-gray-600">
                                <p className="mb-4">
                                    The
                                    <span className="font-semibold text-primary">Tourism Department of Pakil, Laguna</span>
                                    serves as the primary arm of the local government responsible for the planning, promotion, and sustainable
                                    management of the municipality's tourism sector. With Pakil being a town rich in history, culture, and natural
                                    beauty, we aim to position the municipality as a premier cultural and eco-tourism destination in Laguna and the
                                    Philippines.
                                </p>
                                <p className="mb-4">
                                    Our mission is to stimulate local economic growth, create livelihood opportunities, and foster pride in the town's
                                    heritage while ensuring that development is inclusive and environmentally responsible.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-bullseye mr-3 text-secondary"></i> Our Goals
                                </h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>
                                            Promote Pakil as a premier tourist destination showcasing cultural festivals, heritage sites, and natural
                                            attractions
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>Preserve and protect our heritage and environment for future generations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>Foster community involvement in tourism development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>Enhance visitor experience through quality services and infrastructure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-1 mr-2 text-secondary"></i>
                                        <span>Promote sustainable tourism practices that respect local culture and environment</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-tasks mr-3 text-secondary"></i> Key Responsibilities
                                </h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-start">
                                            <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                <i className="fas fa-bullhorn text-primary"></i>
                                            </div>
                                            <h5 className="text-dark font-semibold">Tourism Promotion</h5>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Develop marketing campaigns, produce promotional materials, and build partnerships to increase visitor
                                            reach.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-start">
                                            <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                <i className="fas fa-landmark text-primary"></i>
                                            </div>
                                            <h5 className="text-dark font-semibold">Heritage Preservation</h5>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Organize cultural events, maintain historical sites, and document local traditions.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-start">
                                            <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                <i className="fas fa-map-signs text-primary"></i>
                                            </div>
                                            <h5 className="text-dark font-semibold">Tourism Development</h5>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Develop tourism sites, improve infrastructure, and identify new opportunities.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-start">
                                            <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                <i className="fas fa-hands-helping text-primary"></i>
                                            </div>
                                            <h5 className="text-dark font-semibold">Visitor Assistance</h5>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Operate information centers, provide trained guides, and address tourist concerns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            href="#"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                        >
                            <i className="fas fa-envelope mr-2"></i> Contact Tourism Office
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="mb-16">
                        <div className="mb-12 text-center">
                            <div className="mb-4 inline-flex items-center">
                                <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                                <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Governance</h2>
                                <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                            </div>
                            <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                                <span className="text-primary">Mission</span> & Vision
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <h4 className="text-dark text-2xl font-bold">Mission</h4>
                                </div>
                                <div className="prose text-gray-700">
                                    <p>
                                        To provide effective and efficient public service through transparent governance, sustainable development, and
                                        preservation of Pakil's cultural heritage while promoting tourism and improving the quality of life for all
                                        Pakileños.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <h4 className="text-dark text-2xl font-bold">Vision</h4>
                                </div>
                                <div className="prose text-gray-700">
                                    <p>
                                        A progressive, culturally-rich, and spiritually-nourished municipality where empowered citizens enjoy
                                        sustainable development, quality public services, and a thriving tourism industry anchored on Pakil's unique
                                        heritage and natural beauty.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="mb-12 text-center">
                            <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                                <span className="text-primary">Department</span> Structure
                            </h3>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">Organizational framework of Pakil's municipal government</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="text-lg font-bold text-primary">Mayor's Office</h4>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4 flex items-center">
                                        <div className="mr-3 rounded-full bg-primary/10 p-2">
                                            <i className="fas fa-user-tie text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">Hon. Vince Soriano</p>
                                            <p className="text-sm text-gray-600">Municipal Mayor</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="fas fa-phone-alt mr-2 text-primary"></i>
                                        <span>049-XXX-XXXX</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-gray-700">
                                        <i className="fas fa-envelope mr-2 text-primary"></i>
                                        <span>mayor@pakil.gov.ph</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-12 text-center">
                            <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                                <span className="text-primary">Citizen's</span> Charter
                            </h3>
                            <p className="mx-auto max-w-3xl text-lg text-gray-600">Our commitment to transparent and efficient public service</p>
                        </div>

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
                                                    Or
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
            </section>
        </>
    );
}