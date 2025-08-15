import { Head } from '@inertiajs/react';
export default function AttractionDetails() {
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

            <section className="py-6 sm:py-10">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 mb-6 overflow-hidden rounded-xl shadow-lg sm:mx-0">
                        <img
                            src="/User/Images/church.jpg"
                            alt="San Pedro de Alcantara Church"
                            className="h-[50vh] w-full object-cover sm:h-72 md:h-[50vh]"
                        />
                    </div>

                    <nav className="mb-3 flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#052675]">
                                    <svg
                                        className="mr-2.5 h-3 w-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>

                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg
                                        className="mx-1 h-3 w-3 text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-[#052675] md:ml-2">Tourist Attractions</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="mb-6">
                        <div className="flex flex-col items-start justify-between space-y-2 sm:flex-row">
                            <h1 className="text-2xl font-bold sm:text-3xl">San Pedro de Alcantara Church</h1>
                            <div className="flex items-center rounded-full bg-secondary/10 px-3 py-1">
                                <img src="/User/Layout/Pakilpoints.png" className="mr-1 h-[20px] w-[20px]" alt="" />
                                <span className="text-dark font-medium">15 pts</span>
                            </div>
                        </div>

                        <div className="mt-3 mb-6 rounded-lg border border-primary/10 bg-[#f2f4f8] p-4">
                            <div className="flex items-center">
                                <i className="fas fa-clock mr-3 text-xl text-primary"></i>
                                <div>
                                    <h3 className="text-dark mb-1 font-bold">Operating Hours</h3>
                                    <p className="text-gray-700">
                                        Daily:
                                        <span className="font-medium text-primary">6:00 AM - 7:00 PM</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="w-full lg:w-2/3">
                            <div className="mb-8">
                                <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                    <i className="fas fa-info-circle mr-2"></i> Information
                                </h2>

                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                    <p className="mb-4">
                                        The San Pedro de Alcantara Church is the spiritual heart of Pakil, Laguna. This magnificent Baroque-style
                                        church was built in 1732 and has withstood earthquakes and typhoons throughout its nearly 300-year history.
                                        The church enshrines the revered image of Nuestra Señora de los Dolores de Turumba, making it an important
                                        pilgrimage site.
                                    </p>
                                    <p>
                                        Visitors can admire the intricate facade featuring carved volcanic stone, the ornate retablo (altar piece),
                                        and the beautifully preserved interior with its original wooden beams. The church complex also includes a
                                        small museum showcasing religious artifacts and the history of the Turumba devotion.
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                    <i className="fas fa-landmark mr-2"></i> History
                                </h2>
                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                    <p className="mb-4">
                                        The church's history dates back to 1586 when Franciscan missionaries established the first mission in Pakil.
                                        The current stone structure was constructed between 1676-1732 under the supervision of Franciscan friars using
                                        forced labor from the local population. The church was dedicated to Saint Peter of Alcántara, a Spanish
                                        Franciscan mystic.
                                    </p>
                                    <p>
                                        In 1788, fishermen discovered a painting of the sorrowful Virgin Mary floating on Laguna de Bay after a storm.
                                        This image, now known as Our Lady of Turumba, became the focus of the longest religious festival in the
                                        Philippines. The church was declared an Important Cultural Property by the National Museum in 2013.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                    <i className="fas fa-clipboard-list mr-2"></i> Local Rules & Regulations
                                </h2>
                                <div className="prose mt-3 mb-6 max-w-none rounded-lg border border-primary/10 bg-[#f2f4f8] p-4 text-gray-700">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <i className="fas fa-ban mt-1 mr-2 text-red-500"></i>
                                            <span>No smoking within church premises</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-ban mt-1 mr-2 text-red-500"></i>
                                            <span>Silence must be observed during services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-ban mt-1 mr-2 text-red-500"></i>
                                            <span>Flash photography prohibited</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-ban mt-1 mr-2 text-red-500"></i>
                                            <span>Modest attire required (no shorts/sleeveless)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-8 rounded-xl border border-secondary/10 bg-[#fefaf3] p-6 md:p-8">
                                <h2 className="mb-3 flex items-center text-xl font-bold text-primary sm:text-2xl">
                                    <i className="fas fa-lightbulb mr-2"></i> Fun Facts
                                </h2>
                                <div className="prose max-w-none text-gray-700">
                                    <p>
                                        The church's bell tower leans slightly due to earthquake damage in the 19th century, earning it the nickname
                                        "The Leaning Tower of Pakil." The seven-month Turumba Festival celebrated here holds the record as the longest
                                        religious festival in the Philippines, with devotees performing a joyful dance called the "turumba" during
                                        processions.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="mb-3 text-xl font-bold text-primary sm:text-2xl">More Images</h2>
                                <div className="-mx-4 flex overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <img
                                        src="/User/Images/church.jpg"
                                        className="mr-3 h-32 w-48 rounded-lg object-cover sm:mr-0 sm:h-40 sm:w-full"
                                        alt="Church interior"
                                    />
                                    <img
                                        src="/User/Images/church.jpg"
                                        className="mr-3 h-32 w-48 rounded-lg object-cover sm:mr-0 sm:h-40 sm:w-full"
                                        alt="Church facade"
                                    />
                                    <img
                                        src="/User/Images/church.jpg"
                                        className="h-32 w-48 rounded-lg object-cover sm:h-40 sm:w-full"
                                        alt="Church courtyard"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-primary">
                                    <i className="fas fa-tag mr-2"></i> Fees
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>Entrance Fee</span>
                                        <span className="font-medium">FREE</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Guided Tour (English)</span>
                                        <span className="font-medium">₱200</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Guided Tour (Filipino)</span>
                                        <span className="font-medium">₱150</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Museum Entrance</span>
                                        <span className="font-medium">₱50</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-primary">
                                    <i className="fas fa-address-book mr-2"></i> Contact
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-user-tie mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <p className="font-medium">Fr. Juan Dela Cruz</p>
                                            <p className="text-sm text-gray-600">Parish Priest</p>
                                            <p className="text-sm">(049) 123-4567</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-user mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <p className="font-medium">Ms. Maria Santos</p>
                                            <p className="text-sm text-gray-600">Tour Coordinator</p>
                                            <p className="text-sm">0917 123 4567</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-envelope mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-sm">info@pakilchurch.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-primary">
                                    <i className="fas fa-map-marker-alt mr-2"></i> Location
                                </h3>
                                <p className="mb-3 text-gray-700">P. Burgos Street, Pakil, Laguna 4017 Philippines</p>
                                <div className="h-48 overflow-hidden rounded-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.234512020209!2d121.4787223152636!3d14.38116498994245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d207f2d0a6a5%3A0x6a8949a3e804ae1a!2sSan%20Pedro%20de%20Alcantara%20Church!5e0!3m2!1sen!2sph!4v1623821488393!5m2!1sen!2sph"
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <a
                                    href="#"
                                    className="mt-3 block w-full rounded-full border border-primary px-4 py-2 text-center font-medium text-primary transition hover:bg-primary hover:text-white"
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
