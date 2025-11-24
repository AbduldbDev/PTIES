import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type EventProps = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    schedules: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: string;
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
};

type PageProps = {
    event: EventProps;
};

export const EventsSingle = () => {
    const { event } = usePage<PageProps>().props;
    const scheduleArray = Array.isArray(event.schedules) ? event.schedules : [];

    const descriptions = (event.description || '').split('\n').filter((p) => p.trim() !== '');
    const admission = (event.admission || '').split('\n').filter((p) => p.trim() !== '');
    const attire = (event.attire || '').split('\n').filter((p) => p.trim() !== '');
    const contacts = (event.contacts || '').split('\n').filter((p) => p.trim() !== '');

    const parseImages = (imageString: string): string[] => {
        try {
            const cleanedString = imageString.replace(/\\\//g, '/');
            const images = JSON.parse(cleanedString);

            if (Array.isArray(images)) {
                return images.map((img) => `${img}`);
            }
            return [];
        } catch (error) {
            console.error('Error parsing images:', error);
            return [];
        }
    };

    const eventImages = parseImages(event.image);
    const [selectedImage, setSelectedImage] = useState(eventImages[0] || '/placeholder-image.jpg');
    const title = `Pakil Tourism | ${event.title}`;
    const description =
        descriptions[0] ||
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {selectedImage && <meta property="og:image" content={selectedImage} />}
            </Head>
            <div className="h-[12vh]"></div>

            <section className="py-6 sm:py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="mb-2 text-sm lg:mb-6" data-aos="fade-down" data-aos-delay="100">
                        <ol className="flex flex-wrap items-center">
                            <li className="inline-flex items-center">
                                <a href="/" className="text-gray-500 hover:text-primary">
                                    Home
                                </a>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="/events" className="text-gray-500 hover:text-primary">
                                    Events
                                </a>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <span className="text-gray-700">{event.title}</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Image Gallery */}
                    <div className="mb-6">
                        <div className="-mx-4 mb-4 overflow-hidden rounded-xl shadow-lg sm:mx-0" data-aos="zoom-in" data-aos-duration="800">
                            <img
                                src={selectedImage}
                                alt={event.title}
                                className="aspect-video w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30';
                                }}
                            />
                        </div>

                        {eventImages.length > 1 && (
                            <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6" data-aos="fade-up" data-aos-delay="200">
                                {eventImages.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`overflow-hidden rounded-lg border-2 transition-all hover:border-primary ${
                                            selectedImage === image ? 'border-primary' : 'border-gray-200'
                                        }`}
                                        onClick={() => setSelectedImage(image)}
                                        data-aos="zoom-in"
                                        data-aos-delay={300 + index * 50}
                                    >
                                        <div className="aspect-video w-full">
                                            <img
                                                src={image}
                                                alt={`${event.title} ${index + 1}`}
                                                className="h-full w-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30';
                                                }}
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Event Header */}
                    <div className="mb-6">
                        <div
                            className="mb-2 flex items-center text-sm text-gray-500 sm:text-base md:text-lg"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            <i className="far fa-calendar-alt mr-2 text-primary"></i>
                            <span>
                                {(() => {
                                    const start = new Date(event.start_date);
                                    const end = new Date(event.end_date);

                                    const optionsMonthDay: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
                                    const optionsFull: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

                                    if (start.getFullYear() === end.getFullYear()) {
                                        return `${start.toLocaleDateString('en-US', optionsMonthDay)} - ${end.toLocaleDateString('en-US', optionsMonthDay)}, ${start.getFullYear()}`;
                                    } else {
                                        return `${start.toLocaleDateString('en-US', optionsFull)} - ${end.toLocaleDateString('en-US', optionsFull)}`;
                                    }
                                })()}
                            </span>
                        </div>
                        <h1 className="mb-3 text-xl font-bold sm:text-2xl md:text-3xl" data-aos="fade-up" data-aos-delay="500">
                            {event.title}
                        </h1>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col-reverse gap-6 md:flex-row">
                        {/* Left Column - Content */}
                        <div className="w-full md:w-2/3">
                            {/* Description */}
                            <div className="prose mb-8 max-w-none" data-aos="fade-right" data-aos-delay="600">
                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-3 text-gray-700 md:p-4">
                                    {descriptions.length > 0 ? (
                                        descriptions.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="mb-3 text-sm text-gray-700 sm:text-base md:text-lg"
                                                data-aos="fade-up"
                                                data-aos-delay={700 + index * 50}
                                            >
                                                {paragraph}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">No description available.</p>
                                    )}
                                </div>

                                {/* Schedule */}
                                {scheduleArray.length > 0 && (
                                    <div className="mb-8" data-aos="fade-right" data-aos-delay="800">
                                        <h3 className="mb-4 text-lg font-bold text-primary sm:text-xl md:text-2xl">Event Schedule</h3>
                                        <div className="space-y-3">
                                            {scheduleArray.map((item, index) => {
                                                const date = new Date(item.date_time);

                                                const formattedDate = date.toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                });

                                                const formattedTime = date.toLocaleTimeString('en-US', {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true,
                                                });

                                                return (
                                                    <details
                                                        key={index}
                                                        className="group rounded-lg bg-gray-50 p-3 md:p-4"
                                                        data-aos="zoom-in"
                                                        data-aos-delay={900 + index * 100}
                                                    >
                                                        <summary className="flex cursor-pointer items-center justify-between">
                                                            <div className="flex items-center">
                                                                <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                                                    <i className="fas fa-calendar-day text-sm text-primary md:text-base"></i>
                                                                </div>
                                                                <h4 className="text-dark text-sm font-bold sm:text-base">{item.title}</h4>
                                                            </div>
                                                            <i className="fas fa-chevron-down transform text-sm text-gray-400 transition group-open:rotate-180 md:text-base"></i>
                                                        </summary>
                                                        <div className="mt-3 pl-11">
                                                            <p className="text-xs text-gray-600 sm:text-sm">
                                                                {formattedDate} | {formattedTime}
                                                            </p>
                                                            <p className="mt-1 text-xs text-gray-700 sm:text-sm">{item.desc}</p>
                                                        </div>
                                                    </details>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="w-full md:w-1/3">
                            <div
                                className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-md sm:p-5 md:p-6"
                                data-aos="fade-left"
                                data-aos-delay="600"
                            >
                                <h3 className="mb-4 flex items-center text-base font-bold text-primary sm:text-lg md:text-xl">
                                    <i className="fas fa-info-circle mr-2 text-sm md:text-base"></i> Quick Info
                                </h3>

                                <div className="space-y-4 md:space-y-5">
                                    {/* Admission */}
                                    {admission.length > 0 && (
                                        <div data-aos="fade-up" data-aos-delay="700">
                                            <div className="mb-2 flex items-center">
                                                <i className="fas fa-ticket-alt mr-2 text-sm text-primary md:text-base"></i>
                                                <h4 className="text-dark text-sm font-semibold sm:text-base">ADMISSION</h4>
                                            </div>
                                            <ul className="space-y-2 text-xs text-gray-700 sm:text-sm md:text-base">
                                                {admission.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                        data-aos="fade-right"
                                                        data-aos-delay={800 + index * 50}
                                                    >
                                                        <i className="fa-solid fa-circle-dot text-dark mt-1 mr-2 text-xs md:text-sm"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Attire */}
                                    {attire.length > 0 && (
                                        <div data-aos="fade-up" data-aos-delay="800">
                                            <div className="mb-2 flex items-center">
                                                <i className="fas fa-tshirt mr-2 text-sm text-primary md:text-base"></i>
                                                <h4 className="text-dark text-sm font-semibold sm:text-base">ATTIRE</h4>
                                            </div>
                                            <ul className="space-y-2 text-xs text-gray-700 sm:text-sm md:text-base">
                                                {attire.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                        data-aos="fade-right"
                                                        data-aos-delay={900 + index * 50}
                                                    >
                                                        <i className="fa-solid fa-circle-dot text-dark mt-1 mr-2 text-xs md:text-sm"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Contact */}
                                    {contacts.length > 0 && (
                                        <div data-aos="fade-up" data-aos-delay="900">
                                            <div className="mb-2 flex items-center">
                                                <i className="fas fa-phone-alt mr-2 text-sm text-primary md:text-base"></i>
                                                <h4 className="text-dark text-sm font-semibold sm:text-base">CONTACT</h4>
                                            </div>
                                            <ul className="space-y-2 text-xs text-gray-700 sm:text-sm md:text-base">
                                                {contacts.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                        data-aos="fade-right"
                                                        data-aos-delay={1000 + index * 50}
                                                    >
                                                        <i className="fa-solid fa-circle-dot text-dark mt-1 mr-2 text-xs md:text-sm"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="space-y-3 pt-2" data-aos="zoom-in" data-aos-delay="1100">
                                        <a
                                            href={`https://www.google.com/maps?q=${event.lat},${event.long}&z=15&t=m`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full rounded-full border border-primary px-3 py-2 text-center text-xs font-medium text-primary transition hover:bg-primary hover:text-white sm:py-2.5 sm:text-sm md:px-4 md:py-2.5 md:text-base"
                                        >
                                            <i className="fas fa-map-marker-alt mr-2 text-xs md:text-sm"></i> View on Map
                                        </a>
                                        <a
                                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${new Date(event.start_date).toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date(event.end_date).toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(`${'Pakil, Laguna'}` || `${event.lat},${event.long}`)}`}
                                            target="_blank"
                                            className="block w-full rounded-full bg-primary px-3 py-2 text-center text-xs font-medium text-white transition hover:bg-primary/90 sm:py-2.5 sm:text-sm md:px-4 md:py-2.5 md:text-base"
                                        >
                                            <i className="fas fa-calendar-plus mr-2 text-xs md:text-sm"></i> Add to Calendar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventsSingle;
