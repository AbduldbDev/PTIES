import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import Calendar from '@UserUtils/components/Sections/Events/EventCarlendar';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

export const Events = () => {
    const { banner } = usePage<{ banner: PageBannerProps }>().props;

    const title = 'Pakil Tourism | Events';
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

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <PageTitle
                        title="Upcoming Events"
                        subtitle="Pakil Events Calendar"
                        desc="Discover upcoming festivals, cultural activities, and community gatherings in Pakil"
                    />

                    <Calendar />
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto px-6">
                    <PageTitle title="Updates" subtitle="Events & News" desc="Stay updated with the latest happenings in Pakil" />

                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt mr-2 text-primary"></i>
                                    <span>June 15 - July 30, 2069</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Birthday Ni John Justine</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda tempore praesentium nesciunt numquam
                                    beatae alias reprehenderit, labore modi optio quasi fugit obcaecati culpa perspiciatis, maiores ipsum nemo
                                    perferendis maxime.
                                </p>
                                <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="inline-flex items-center rounded-full border border-primary px-5 py-2 font-medium text-primary transition duration-300 hover:bg-primary hover:text-white">
                            <i className="fas fa-arrow-down mr-2"></i> Load More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Events;
