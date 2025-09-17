import { Head, usePage } from '@inertiajs/react';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import FeaturedPost from '@UserUtils/components/Cards/FeaturedPost';
import NewsLetter from '@UserUtils/components/Cards/NewsLetter';
import HeroSection from '@UserUtils/components/Sections/Home/Hero';
import Introduction from '@UserUtils/components/Sections/Home/Introduction';
import PromotionalVideo from '@UserUtils/components/Sections/Home/Promotion';
import { CMSContent } from '@UserUtils/Types/cms';

type PromotionalVideoProps = {
    id: string;
    title: string;
    slogan: string;
    description: string;
    thumbnail: string;
    video: string;
    highlights: string[];
};
interface User {
    avatar?: string;
    first_name?: string;
}

interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: boolean;
    user: User;
    profile: User;
    has_liked?: boolean;
    created_at: string;
}
interface PageProps {
    content: CMSContent;
    topPost: SocialWallPost;
    [key: string]: unknown;
}

export default function Home() {
    const { content, props, topPost } = usePage<PageProps>().props;
    const { promvid } = usePage<{ promvid: PromotionalVideoProps }>().props;

    const title = 'Pakil Tourism | Home';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            {content.hero ? (
                <HeroSection
                    content={{
                        ...content.hero,
                        feature_img: content.hero.feature_img ? `/storage/${content.hero.feature_img}` : '/User/Images/church.jpg',
                    }}
                />
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section id="explore" className="py-8 md:py-10 lg:py-12">
                <div className="container mx-auto px-4 sm:px-5 md:px-6">
                    <PageTitle
                        title="Discover"
                        subtitle="Welcome to Pakil"
                        desc="A charming Laguna town where faith, heritage, and nature come together to create unforgettable experiences."
                    ></PageTitle>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
                        <div className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                                <i className="fas fa-church text-xl text-primary sm:text-2xl"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Religious Heritage</h3>
                            <p className="text-sm text-gray-600 sm:text-base">
                                Explore the historic San Pedro de Alcantara Church and other spiritual landmarks.
                            </p>
                        </div>

                        <div className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                                <i className="fas fa-water text-xl text-primary sm:text-2xl"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Natural Wonders</h3>
                            <p className="text-sm text-gray-600 sm:text-base">Discover beautiful waterfalls and scenic landscapes around Pakil.</p>
                        </div>

                        <div className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6">
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                                <i className="fas fa-utensils text-xl text-primary sm:text-2xl"></i>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Local Cuisine</h3>
                            <p className="text-sm text-gray-600 sm:text-base">Taste authentic Filipino dishes and local specialties.</p>
                        </div>
                    </div>
                </div>
            </section>

            {promvid && (
                <PromotionalVideo
                    title={promvid.title}
                    slogan={promvid.slogan}
                    description={promvid.description}
                    highlights={promvid.highlights}
                    thumbnail={`/storage/${promvid.thumbnail}`}
                    videoUrl={`/storage/${promvid.video}`}
                />
            )}

            {/* <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Local Treasures</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            Pakil's <span className="text-primary">Local Products</span>
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Discover unique handicrafts and delicacies made by local artisans</p>
                    </div>

                    <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative h-70">
                                <img src="/User/Images/church.jpg" alt="Wood Carvings" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="font-bold text-white">Wood Carvings</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">
                                    Handcrafted wooden religious icons and decorative items made by skilled Pakil artisans.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">From ₱500</span>
                                    <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                                        View Market <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative h-70">
                                <img src="/User/Images/church.jpg" alt="Kakanin" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="font-bold text-white">Local Kakanin</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">Traditional Filipino rice cakes and sweets made with generations-old recipes.</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">From ₱50</span>
                                    <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                                        View Market <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative h-70">
                                <img src="/User/Images/church.jpg" alt="Religious Souvenirs" className="h-full w-full object-cover" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h4 className="font-bold text-white">Religious Souvenirs</h4>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-gray-600">Unique religious items and Our Lady of Turumba memorabilia for pilgrims.</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">From ₱200</span>
                                    <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                                        View Market <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {content.introduction_section && (
                <Introduction
                    content={{
                        ...content.introduction_section,
                        image1: content.introduction_section.image1 ? `/storage/${content.introduction_section.image1}` : '/User/Images/church.jpg',
                        image2: content.introduction_section.image2 ? `/storage/${content.introduction_section.image2}` : '/User/Images/church.jpg',
                        image3: content.introduction_section.image3 ? `/storage/${content.introduction_section.image3}` : '/User/Images/church.jpg',
                    }}
                />
            )}

            <section className="py-10">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Geography"
                        subtitle="Location & Demographics"
                        desc="Discover Pakil's strategic position in Laguna and key statistical information"
                    ></PageTitle>

                    <div className="flex flex-col gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl border-4 border-white shadow-xl">
                                <div className="flex h-full w-full items-center justify-center bg-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1755097572862!5m2!1sen!2sph!6m8!1m7!1sOg0pa6oRDwwSajvFUpDecA!2m2!1d14.38069181417978!2d121.4788246363631!3f36.29077528578861!4f6.762827195992841!5f0.7820865974627469"
                                        className="h-full w-full"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"
                                        allow="accelerometer; gyroscope; magnetometer"
                                    ></iframe>
                                </div>

                                <div className="absolute bottom-4 left-4 rounded-lg border border-gray-200 bg-white/90 p-3 shadow backdrop-blur-sm">
                                    <h5 className="text-dark mb-2 flex items-center text-sm font-semibold">
                                        <i className="fas fa-border-all mr-2 text-primary"></i> Political Boundaries
                                    </h5>
                                    <ul className="space-y-1 text-xs">
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 inline-block h-3 w-3 rounded-full bg-primary"></span>
                                            North: Pangil, Laguna
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 inline-block h-3 w-3 rounded-full bg-secondary"></span>
                                            East: Real, Quezon
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 inline-block h-3 w-3 rounded-full bg-accent"></span>
                                            South: Paete, Laguna & Jalajala, Rizal
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mt-1 mr-2 inline-block h-3 w-3 rounded-full bg-gray-600"></span>
                                            West: Mabitac, Laguna
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="h-full rounded-xl bg-[#f2f4f8] p-6">
                                <h4 className="mb-6 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-location-dot mr-3"></i> Geographical Information
                                </h4>

                                <div className="mb-8">
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-map-pin mr-2 text-secondary"></i> Political Boundaries
                                    </h5>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex">
                                            <span className="w-16 font-medium text-primary">North</span>
                                            <span>Pangil, Laguna (along Mabato river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="w-16 font-medium text-primary">East</span>
                                            <span>Real, Quezon (along Tibag river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="w-16 font-medium text-primary">South</span>
                                            <span>Paete, Laguna (along Tuyong llog), Jalajala, Rizal (Inuod point and along Turnina river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="w-16 font-medium text-primary">West</span>
                                            <span>Mabitac, Laguna (Hinukay river)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-project-diagram mr-2 text-secondary"></i>
                                        Political Subdivisions
                                    </h5>
                                    <p className="mb-2 text-gray-700">
                                        <span className="font-medium text-primary">13 Barangays</span>
                                    </p>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                                            <h6 className="mb-2 flex items-center font-medium text-primary">
                                                <i className="fas fa-arrow-right mr-2 text-xs"></i> Silangan (East)
                                            </h6>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>Baño</li>
                                                <li>Burgos</li>
                                                <li>Gonzales</li>
                                                <li>Rizal</li>
                                                <li>Taft</li>
                                                <li>Tavera</li>
                                                <li>Saray</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                                            <h6 className="mb-2 flex items-center font-medium text-primary">
                                                <i className="fas fa-arrow-right mr-2 text-xs"></i> Kanularan (West)
                                            </h6>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>Banilan</li>
                                                <li>Casa Real</li>
                                                <li>Casinsin</li>
                                                <li>Dorado</li>
                                                <li>Kabulusan</li>
                                                <li>Matikiw</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-route mr-2 text-secondary"></i> Distance From
                                    </h5>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Sta. Cruz, Laguna</p>
                                            <p className="font-bold text-primary">19km</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Manila via Laguna</p>
                                            <p className="font-bold text-primary">114km</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Manila via Rizal</p>
                                            <p className="font-bold text-primary">80km</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {topPost && (
                <section className="py-10" id="featured_posts">
                    <div className="container mx-auto px-6">
                        <PageTitle
                            title="Social Wall"
                            subtitle="Featured Post"
                            desc="A glimpse of Pakil through the eyes of our visitors"
                        ></PageTitle>

                        <div className="mx-auto mb-8 max-w-4xl">
                            <FeaturedPost post={topPost} />

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => (window.location.href = '/socialwall/new')}
                                    className="mx-auto flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition duration-300 hover:bg-primary/90"
                                >
                                    <i className="fas fa-plus mr-2"></i> Share Your Experience
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="bg-white py-10">
                <div className="container mx-auto px-6">
                    <PageTitle title="Updates" subtitle="Events & News" desc="Stay updated with the latest happenings in Pakil"></PageTitle>

                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                                <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">Event</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Turumba Festival 2023</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Join us for the longest religious festival in the Philippines celebrating Our Lady of Turumba. Seven months of
                                    novenas, processions, and cultural performances.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Church Restoration" className="h-48 w-full object-cover" />
                                <div className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">News</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>May 28, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">San Pedro Church Restoration Complete</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    The historic San Pedro de Alcantara Church has completed its 2-year restoration project, bringing back its
                                    original 18th century glory while reinforcing its structure.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Music Workshop" className="h-48 w-full object-cover" />
                                <div className="absolute top-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">Event</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>August 10-12, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Pakil Music Heritage Workshop</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Celebrating Pakil's musical legacy with workshops on traditional church music and performances honoring Marcelo
                                    Adonay, the Palestrina of the Philippines.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                        >
                            <i className="fas fa-newspaper mr-2"></i> View All Events & News
                        </a>
                    </div>
                </div>
            </section>

            <NewsLetter />
        </>
    );
}
