import { useState } from 'react';

export const Introduction = () => {
    const [mainImage, setMainImage] = useState('/User/Images/church.jpg');

    const images = [
        { src: '/User/Images/church.jpg', alt: 'Church' },
        { src: '/User/Images/kayas.jpg', alt: 'Town Plaza' },
        { src: '/User/Images/ibuli.jpg', alt: 'Nature' },
    ];

    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="group relative">
                                <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-md transition duration-300 group-hover:blur-lg"></div>
                                <img
                                    src={mainImage}
                                    alt="Pakil Town View"
                                    className="relative h-auto w-full rounded-xl border-4 border-white shadow-xl"
                                />
                                <div className="absolute -right-5 -bottom-5 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:block">
                                    <div className="flex items-center">
                                        <div className="mr-3 rounded-lg bg-primary/10 p-3">
                                            <i className="fas fa-landmark text-xl text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Did you know?</p>
                                            <p className="text-dark text-sm font-semibold">Oldest musical academy in PH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer overflow-hidden rounded-lg border-1 border-white shadow transition duration-300 hover:border-primary"
                                        onClick={() => setMainImage(image.src)}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="prose prose-lg mb-8 rounded-xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
                                <div className="mb-4 flex items-center">
                                    <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                                    <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Discover</h2>
                                </div>
                                <h3 className="text-dark mb-6 text-3xl font-bold md:text-4xl">
                                    <span className="text-primary">Introduction</span> to Pakil
                                </h3>

                                <p className="mb-4">
                                    Pakil is a fascinating little town located at the foot of Sierra Madre and bordered by Laguna Lake. A visit to our
                                    town gives you a peek of the old-world; from the picturesque facade of the
                                    <span className="font-semibold text-primary">San Pedro Garavito de Alcantara Church</span>
                                    to the quaint Town Plaza that serves as the center of life of the Pakileños.
                                </p>
                                <p className="mb-4">
                                    The town is also known for its rich musical heritage. It is the birthplace of the icon of church music, the
                                    <span className="font-semibold text-primary">Palestrina of the Philippines - Marcelo Adonay</span>. It is also
                                    where the first musical academy in the country was initiated by a Guardian of the Franciscan Order, San Pedro
                                    Bautista in 1586.
                                </p>
                                <p className="mb-4">
                                    This pilgrimage town is also home to the
                                    <span className="font-semibold text-primary">"Patroness of the Laguna Lake"</span>, the Nuestra Señora de los
                                    Dolores de Turumba. The St. Peter de Alcantara Church enshrines the Our Lady of Turumba painting, a replica of the
                                    Nuestra Señora de las Antiguas which was found by fishermen on September 15, 1788 after a storm.
                                </p>
                            </div>

                            <div className="mb-8 rounded-r-lg border-l-4 border-primary bg-primary/5 p-4">
                                <h4 className="mb-3 flex items-center font-bold text-primary">
                                    <i className="fas fa-star mr-2 text-secondary"></i> Cultural Highlights
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-music mt-1 mr-2 text-secondary"></i>
                                        <span>Birthplace of Marcelo Adonay, the "Palestrina of the Philippines"</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-church mt-1 mr-2 text-secondary"></i>
                                        <span>Home to Nuestra Señora de los Dolores de Turumba</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-calendar-alt mt-1 mr-2 text-secondary"></i>
                                        <span>Hosts the longest religious festival in the country (7 months)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-5">
                                <div className="flex flex-col items-center md:flex-row">
                                    <div className="mb-4 md:mr-5 md:mb-0">
                                        <i className="fas fa-mountain text-4xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-dark mb-1 font-bold">Explore Nature's Beauty</h4>
                                        <p className="mb-3 text-sm text-gray-600">
                                            A hike to Mount Ping-as offers stunning views and spiritual renewal
                                        </p>
                                        <a href="#" className="flex items-center text-sm font-medium text-primary hover:text-primary/80">
                                            Discover hiking trails
                                            <i className="fas fa-arrow-right ml-2"></i>
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

export default Introduction;
