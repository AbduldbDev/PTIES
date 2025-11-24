import { Head, usePage } from '@inertiajs/react';
import { JSX, useState } from 'react';

type AttractionProps = {
    id: number;
    attraction_id: string;
    name: string;
    category: string;
    operating_hours: string;
    information: string;
    history: string;
    local_rules: string;
    fun_facts: string;
    fees: string;
    distance: string;
    points: number;
    long: string;
    lat: string;
    images: string;
    qr_path: string;
    contact: Contact[];
};

type Contact = {
    name: string;
    position: string;
    contact: string;
};

type PageProps = {
    item: AttractionProps;
};

export default function AttractionDetails() {
    const { item } = usePage<PageProps>().props;
    const title = 'Pakil Tourism | Attractions';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";
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

    const attractionImages = parseImages(item.images);
    const [selectedImage, setSelectedImage] = useState(attractionImages[0] || '/placeholder-image.jpg');

    const ContactArray = Array.isArray(item.contact) ? item.contact : [];
    const OperatingHours = (item.operating_hours || '').split('\n').filter((p) => p.trim() !== '');
    const information = (item.information || '').split('\n').filter((p) => p.trim() !== '');
    const history = (item.history || '').split('\n').filter((p) => p.trim() !== '');
    const rules = (item.local_rules || '').split('\n').filter((p) => p.trim() !== '');
    const fun_facts = (item.fun_facts || '').split('\n').filter((p) => p.trim() !== '');
    const fees = (item.fees || '').split('\n').filter((p) => p.trim() !== '');

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <div className="h-[12vh]"></div>
            <section className="py-6 sm:py-10">
                <div className="mx-auto max-w-7xl px-4">
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
                                <a href="/explore/attractions" className="text-gray-500 hover:text-primary">
                                    Attractions
                                </a>
                                <span className="mx-2 text-gray-400">/</span>
                            </li>
                            <li className="inline-flex items-center">
                                <span className="text-primary">{item.name}</span>
                            </li>
                        </ol>
                    </nav>

                    {/* Main Image */}
                    <div className="-mx-1 mb-4 overflow-hidden rounded-xl shadow-lg sm:mx-0" data-aos="zoom-in" data-aos-duration="800">
                        <a href={selectedImage} target="_blank" rel="noopener noreferrer">
                            <img
                                src={selectedImage}
                                alt={item.name}
                                className="aspect-video w-full cursor-pointer object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30';
                                }}
                            />
                        </a>
                    </div>

                    {/* Image Thumbnails */}
                    {attractionImages.length > 1 && (
                        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6" data-aos="fade-up" data-aos-delay="200">
                            {attractionImages.map((image, index) => (
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
                                            alt={`${item.name} ${index + 1}`}
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

                    {/* Header Section */}
                    <div className="mb-6">
                        <div
                            className="my-2 flex flex-col items-start justify-between space-y-2 sm:flex-row lg:my-5"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h1 className="text-2xl font-bold sm:text-3xl">{item.name}</h1>
                        </div>
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-2" data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-gradient-to-r from-secondary to-primary px-3 py-1 text-xs font-medium text-white shadow-sm">
                                    {item.category.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
                                </span>

                                <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    <i className="fas fa-map-marker-alt mr-1.5 text-xs"></i>
                                    {item.distance}
                                </span>
                            </div>

                            <div className="flex items-center rounded-full bg-secondary/10 px-3 py-1">
                                <img src="/User/Layout/Pakilpoints.png" className="mr-1 h-[20px] w-[20px]" alt="Pakil Points" />
                                <span className="text-dark font-medium">{item.points} pts</span>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        {OperatingHours.length > 0 && (
                            <div className="mt-3 mb-6 rounded-lg border border-primary/10 bg-[#f2f4f8] p-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="flex">
                                    <i className="fas fa-clock mt-1 mr-3 text-xl text-primary"></i>
                                    <div>
                                        <h3 className="text-dark mb-1 font-bold">Operating Hours</h3>
                                        {OperatingHours.map((hours, index) => {
                                            const timePattern = /\b\d{1,2}(?::\d{2})?\s?(?:AM|PM)\b/gi;
                                            const parts: (string | JSX.Element)[] = [];
                                            let lastIndex = 0;

                                            for (const match of hours.matchAll(timePattern)) {
                                                if (match.index! > lastIndex) {
                                                    parts.push(hours.slice(lastIndex, match.index));
                                                }
                                                parts.push(
                                                    <span key={match.index} className="font-medium text-primary">
                                                        {match[0]}
                                                    </span>,
                                                );

                                                lastIndex = match.index! + match[0].length;
                                            }
                                            if (lastIndex < hours.length) {
                                                parts.push(hours.slice(lastIndex));
                                            }

                                            return (
                                                <p key={index} className="text-gray-700">
                                                    {parts}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Left Column - Content Sections */}
                        <div className="w-full lg:w-2/3">
                            {information.length > 0 && (
                                <div className="mb-8" data-aos="fade-right" data-aos-delay="600">
                                    <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                        <i className="fas fa-info-circle mr-2"></i> Information
                                    </h2>
                                    <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                        {information.map((item, index) => (
                                            <p key={index} className="mb-4" data-aos="fade-up" data-aos-delay={700 + index * 50}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {history.length > 0 && (
                                <div className="mb-8" data-aos="fade-right" data-aos-delay="700">
                                    <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                        <i className="fas fa-landmark mr-2"></i> History
                                    </h2>
                                    <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                        {history.map((item, index) => (
                                            <p key={index} className="mb-4" data-aos="fade-up" data-aos-delay={800 + index * 50}>
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {rules.length > 0 && (
                                <div className="mb-8" data-aos="fade-right" data-aos-delay="800">
                                    <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                        <i className="fas fa-clipboard-list mr-2"></i> Local Rules & Regulations
                                    </h2>
                                    <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                        <ul className="space-y-3 text-gray-700">
                                            {rules.map((item, index) => (
                                                <li key={index} className="flex items-start" data-aos="fade-right" data-aos-delay={900 + index * 50}>
                                                    <i className="fas fa-ban mt-1 mr-2 text-red-500"></i>
                                                    <span> {item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {fun_facts.length > 0 && (
                                <div data-aos="fade-right" data-aos-delay="900">
                                    <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                        <i className="fas fa-lightbulb mr-2"></i> Fun Facts
                                    </h2>
                                    <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#fefaf3] p-4 text-gray-700">
                                        {fun_facts.map((fact, index) => (
                                            <div key={index} className="mb-3 flex items-start" data-aos="fade-up" data-aos-delay={1000 + index * 50}>
                                                <i className="fas fa-star mt-1 mr-3 text-lg text-yellow-500"></i>
                                                <p className="text-gray-700">{fact}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="-mt-5 w-full lg:mt-11 lg:w-1/3">
                            {fees.length > 0 && (
                                <div
                                    className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
                                    data-aos="fade-left"
                                    data-aos-delay="600"
                                >
                                    <h3 className="mb-4 flex items-center text-lg font-bold text-primary">
                                        <i className="fas fa-tag mr-2"></i> Fees & Pricing
                                    </h3>
                                    <ul className="space-y-3">
                                        {fees.map((fee, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start justify-between pl-2"
                                                data-aos="fade-up"
                                                data-aos-delay={700 + index * 50}
                                            >
                                                <div className="flex items-start">
                                                    <i className="fas fa-receipt mt-1 mr-2 text-primary/90"></i>
                                                    <span>{fee}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {ContactArray.length > 0 && (
                                <div
                                    className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
                                    data-aos="fade-left"
                                    data-aos-delay="700"
                                >
                                    <h3 className="mb-4 flex items-center text-lg font-bold text-primary/90">
                                        <i className="fas fa-address-book mr-2"></i> Contact Persons
                                    </h3>
                                    <ul className="space-y-3">
                                        {ContactArray.map((item, index) => (
                                            <li key={index} className="flex items-start pl-1" data-aos="fade-up" data-aos-delay={800 + index * 50}>
                                                <i className="fas fa-user-tie mt-1 mr-2 text-primary"></i>
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-sm text-gray-600">{item.position}</p>
                                                    <p className="text-sm">{item.contact}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm" data-aos="fade-left" data-aos-delay="800">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-primary">
                                    <i className="fas fa-map-marker-alt mr-2"></i> Pin Location
                                </h3>
                                <div className="h-48 overflow-hidden rounded-lg" data-aos="zoom-in" data-aos-delay="900">
                                    <iframe
                                        src={`https://www.google.com/maps?q=${item.lat},${item.long}&hl=es;z=14&output=embed`}
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.long}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 block w-full rounded-full border border-primary px-4 py-2 text-center font-medium text-primary transition hover:bg-primary hover:text-white"
                                    data-aos="zoom-in"
                                    data-aos-delay="1000"
                                >
                                    <i className="fas fa-directions mr-2"></i> Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
