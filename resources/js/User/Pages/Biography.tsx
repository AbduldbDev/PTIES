import { Head } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
export default function SingleOfficial() {
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

            <section className="py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="mb-8">
                        <a href="#" className="inline-flex items-center text-primary hover:text-primary/80">
                            <i className="fas fa-arrow-left mr-2"></i> Back to Officials
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="relative w-full">
                            <img src="Images/mayor.jpg" alt="Hon. Juan Dela Cruz" className="h-[70vh] w-full object-cover" />
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-white md:text-3xl">Hon. Juan Dela Cruz</h1>
                                        <p className="text-white/90">Municipal Mayor of Pakil</p>
                                    </div>
                                    <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                                        <i className="far fa-calendar-alt mr-1"></i> Term: 2022 - 2025
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                                <div className="rounded-lg bg-primary/5 p-5">
                                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                                        <i className="fas fa-user-tie mr-2"></i> Position
                                    </h3>
                                    <p className="text-gray-700">Municipal Mayor</p>
                                </div>
                                <div className="rounded-lg bg-primary/5 p-5">
                                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                                        <i className="fas fa-clock mr-2"></i> Term Duration
                                    </h3>
                                    <p className="text-gray-700">June 30, 2022 - June 30, 2025</p>
                                </div>
                                <div className="rounded-lg bg-primary/5 p-5">
                                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                                        <i className="fas fa-star mr-2"></i> Status
                                    </h3>
                                    <p className="text-gray-700">Currently Serving</p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-tasks mr-3"></i> Key Responsibilities
                                </h2>
                                <div className="prose prose-lg space-y-4 text-gray-700">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-book-open mr-3"></i> Biography
                                </h2>
                                <div className="prose prose-lg space-y-4 text-gray-700">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam impedit exercitationem,
                                        recusandae, sunt iusto minus suscipit doloribus praesentium repellendus facere totam quas quam quisquam modi
                                        itaque laborum architecto a!
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-trophy mr-3"></i> Notable Achievements
                                </h2>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-lg border border-primary/10 bg-primary/5 p-5">
                                        <h3 className="text-dark mb-2 font-semibold">Turumba Tourism Program</h3>
                                        <p className="text-sm text-gray-700">
                                            Increased festival visitors by 120% through enhanced programming and marketing
                                        </p>
                                    </div>
                                    <div className="rounded-lg border border-primary/10 bg-primary/5 p-5">
                                        <h3 className="text-dark mb-2 font-semibold">Heritage Conservation</h3>
                                        <p className="text-sm text-gray-700">Restored 5 historic structures including the San Pedro Church</p>
                                    </div>
                                    <div className="rounded-lg border border-primary/10 bg-primary/5 p-5">
                                        <h3 className="text-dark mb-2 font-semibold">Awards Received</h3>
                                        <p className="text-sm text-gray-700">2023 Most Tourism-Friendly Municipality (DOT)</p>
                                    </div>
                                    <div className="rounded-lg border border-primary/10 bg-primary/5 p-5">
                                        <h3 className="text-dark mb-2 font-semibold">Infrastructure</h3>
                                        <p className="text-sm text-gray-700">Completed 12km of farm-to-market roads in rural barangays</p>
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