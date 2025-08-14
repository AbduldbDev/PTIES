import { Head } from '@inertiajs/react';

export default function Register() {
    const title = 'Pakil Tourism | Home';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            <section className="hero-clip-path relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-10 md:pt-0">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/User/Images/church.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="from-primary absolute inset-0 bg-gradient-to-r to-transparent opacity-30 md:opacity-90"></div>

                <div className="relative z-10 container mx-auto px-6 py-20">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="text-center lg:w-1/2 lg:text-left">
                            <div className="mb-6 flex justify-center lg:justify-start">
                                <div className="rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-sm">
                                    <p className="flex items-center text-white">
                                        <i className="fas fa-map-marker-alt text-accent mr-2"></i>
                                        Laguna, Philippines
                                    </p>
                                </div>
                            </div>

                            <h1 className="mb-4 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                                <span className="text-secondary">Pakil</span>
                            </h1>
                            <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl lg:text-4xl">The Pilgrimage Town of Laguna</h2>
                            <p className="mx-auto mb-8 max-w-lg text-lg text-white/90 italic md:text-xl lg:mx-0">
                                <i className="fas fa-quote-left text-secondary/50 mr-2"></i>
                                Pakil where fun starts with faith
                                <i className="fas fa-quote-right text-secondary/50 ml-2"></i>
                            </p>

                            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                                <a
                                    href="#"
                                    className="bg-secondary text-primary hover:bg-secondary/90 flex items-center justify-center rounded-full px-8 py-3 text-center font-bold transition duration-300"
                                >
                                    <i className="fas fa-compass mr-2"></i> Explore Now
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-center font-medium text-white transition duration-300 hover:bg-white/20"
                                >
                                    <i className="fas fa-info-circle mr-2"></i> Learn More
                                </a>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start">
                                <div className="flex items-center text-white">
                                    <i className="fas fa-church text-accent mr-2 text-xl"></i>
                                    <span>Religious Sites</span>
                                </div>
                                <div className="flex items-center text-white">
                                    <i className="fas fa-utensils text-accent mr-2 text-xl"></i>
                                    <span>Local Cuisine</span>
                                </div>
                                <div className="flex items-center text-white">
                                    <i className="fas fa-water text-accent mr-2 text-xl"></i>
                                    <span>Waterfalls</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:w-1/2">
                            <div className="floating relative w-full max-w-md">
                                <div className="overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 p-1 shadow-2xl backdrop-blur-md">
                                    <img src="/User/Images/church.jpg" alt="Pakil Landscape" className="h-auto w-full rounded-xl object-cover" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 shadow-xl md:block">
                                    <div className="flex items-center">
                                        <div className="bg-primary/10 mr-3 rounded-lg p-3">
                                            <i className="fas fa-church text-primary text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Must Visit</p>
                                            <p className="text-dark font-semibold">San Pedro de Alcantara Church</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-secondary absolute -top-6 -right-6 hidden rounded-full p-4 shadow-xl md:block">
                                    <i className="fas fa-star text-2xl text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
                    <a href="#explore" className="flex h-16 w-10 flex-col items-center justify-end">
                        <span className="mb-1 text-sm text-white">Scroll</span>
                        <div className="relative h-8 w-1 rounded-full bg-white/50">
                            <div className="animate-scroll absolute top-0 h-4 w-1 rounded-full bg-white"></div>
                        </div>
                    </a>
                </div>
            </section>

            <section id="explore" className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-primary mb-12 text-center text-3xl font-bold">
                        <i className="fas fa-map-marked-alt mr-3"></i>
                        Discover Pakil's Wonders
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="border-primary/20 hover:border-primary/20 rounded-xl border bg-gray-50 p-6 transition-all">
                            <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-lg">
                                <i className="fas fa-church text-primary text-2xl"></i>
                            </div>
                            <h3 className="text-primary mb-2 text-xl font-bold">Religious Heritage</h3>
                            <p className="text-gray-600">Explore the historic San Pedro de Alcantara Church and other spiritual landmarks.</p>
                        </div>

                        <div className="border-primary/20 hover:border-primary/20 rounded-xl border bg-gray-50 p-6 transition-all">
                            <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-lg">
                                <i className="fas fa-water text-primary text-2xl"></i>
                            </div>
                            <h3 className="text-primary mb-2 text-xl font-bold">Natural Wonders</h3>
                            <p className="text-gray-600">Discover beautiful waterfalls and scenic landscapes around Pakil.</p>
                        </div>

                        <div className="border-primary/20 hover:border-primary/20 rounded-xl border bg-gray-50 p-6 transition-all">
                            <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-lg">
                                <i className="fas fa-utensils text-primary text-2xl"></i>
                            </div>
                            <h3 className="text-primary mb-2 text-xl font-bold">Local Cuisine</h3>
                            <p className="text-gray-600">Taste authentic Filipino dishes and local specialties.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <div className="lg:w-1/2">
                            <div className="group relative">
                                <div className="bg-primary/20 absolute -inset-2 rounded-xl blur-md transition duration-300 group-hover:blur-lg"></div>
                                <img
                                    src="/User/Images/church.jpg"
                                    alt="Pakil Town View"
                                    className="relative h-auto w-full rounded-xl border-4 border-white shadow-xl"
                                />
                                <div className="absolute -right-5 -bottom-5 hidden rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:block">
                                    <div className="flex items-center">
                                        <div className="bg-primary/10 mr-3 rounded-lg p-3">
                                            <i className="fas fa-landmark text-primary text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Did you know?</p>
                                            <p className="text-dark text-sm font-semibold">Oldest musical academy in PH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="overflow-hidden rounded-lg border-2 border-white shadow">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Church"
                                        className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg border-2 border-white shadow">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Town Plaza"
                                        className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg border-2 border-white shadow">
                                    <img
                                        src="/User/Images/church.jpg"
                                        alt="Nature"
                                        className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="mb-4 flex items-center">
                                <div className="bg-secondary mr-3 h-1 w-8 rounded-full"></div>
                                <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">Discover</h2>
                            </div>
                            <h3 className="text-dark mb-6 text-3xl font-bold md:text-4xl">
                                <span className="text-primary">Introduction</span> to Pakil
                            </h3>

                            <div className="prose prose-lg mb-8 rounded-xl bg-gray-100 p-5">
                                <p className="mb-4">
                                    Pakil is a fascinating little town located at the foot of Sierra Madre and bordered by Laguna Lake. A visit to our
                                    town gives you a peek of the old-world; from the picturesque facade of the
                                    <span className="text-primary font-semibold">San Pedro Garavito de Alcantara Church</span>
                                    to the quaint Town Plaza that serves as the center of life of the Pakileños.
                                </p>
                                <p className="mb-4">
                                    The town is also known for its rich musical heritage. It is the birthplace of the icon of church music, the
                                    <span className="text-primary font-semibold">Palestrina of the Philippines - Marcelo Adonay</span>. It is also
                                    where the first musical academy in the country was initiated by a Guardian of the Franciscan Order, San Pedro
                                    Bautista in 1586.
                                </p>
                                <p className="mb-4">
                                    This pilgrimage town is also home to the
                                    <span className="text-primary font-semibold">"Patroness of the Laguna Lake"</span>, the Nuestra Señora de los
                                    Dolores de Turumba. The St. Peter de Alcantara Church enshrines the Our Lady of Turumba painting, a replica of the
                                    Nuestra Señora de las Antiguas which was found by fishermen on September 15, 1788 after a storm.
                                </p>
                            </div>

                            <div className="border-primary bg-primary/5 mb-8 rounded-r-lg border-l-4 p-4">
                                <h4 className="text-primary mb-3 flex items-center font-bold">
                                    <i className="fas fa-star text-secondary mr-2"></i> Cultural Highlights
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-music text-secondary mt-1 mr-2"></i>
                                        <span>Birthplace of Marcelo Adonay, the "Palestrina of the Philippines"</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-church text-secondary mt-1 mr-2"></i>
                                        <span>Home to Nuestra Señora de los Dolores de Turumba</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-calendar-alt text-secondary mt-1 mr-2"></i>
                                        <span>Hosts the longest religious festival in the country (7 months)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="from-primary/10 to-accent/10 rounded-lg border border-gray-200 bg-gradient-to-r p-5">
                                <div className="flex flex-col items-center md:flex-row">
                                    <div className="mb-4 md:mr-5 md:mb-0">
                                        <i className="fas fa-mountain text-primary text-4xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-dark mb-1 font-bold">Explore Nature's Beauty</h4>
                                        <p className="mb-3 text-sm text-gray-600">
                                            A hike to Mount Ping-as offers stunning views and spiritual renewal
                                        </p>
                                        <a href="#" className="text-primary hover:text-primary/80 flex items-center text-sm font-medium">
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

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="bg-secondary mr-3 h-1 w-8 rounded-full"></div>
                            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">Geography</h2>
                            <div className="bg-secondary ml-3 h-1 w-8 rounded-full"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Location</span> & Demographics
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Discover Pakil's strategic position in Laguna and key statistical information
                        </p>
                    </div>

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
                                        <i className="fas fa-border-all text-primary mr-2"></i> Political Boundaries
                                    </h5>
                                    <ul className="space-y-1 text-xs">
                                        <li className="flex items-start">
                                            <span className="bg-primary mt-1 mr-2 inline-block h-3 w-3 rounded-full"></span>
                                            North: Pangil, Laguna
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-secondary mt-1 mr-2 inline-block h-3 w-3 rounded-full"></span>
                                            East: Real, Quezon
                                        </li>
                                        <li className="flex items-start">
                                            <span className="bg-accent mt-1 mr-2 inline-block h-3 w-3 rounded-full"></span>
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
                                <h4 className="text-primary mb-6 flex items-center text-xl font-bold">
                                    <i className="fas fa-location-dot mr-3"></i> Geographical Information
                                </h4>

                                <div className="mb-8">
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-map-pin text-secondary mr-2"></i> Political Boundaries
                                    </h5>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex">
                                            <span className="text-primary w-16 font-medium">North</span>
                                            <span>Pangil, Laguna (along Mabato river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary w-16 font-medium">East</span>
                                            <span>Real, Quezon (along Tibag river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary w-16 font-medium">South</span>
                                            <span>Paete, Laguna (along Tuyong llog), Jalajala, Rizal (Inuod point and along Turnina river)</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary w-16 font-medium">West</span>
                                            <span>Mabitac, Laguna (Hinukay river)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-vector-square text-secondary mr-2"></i>
                                        Political Subdivisions
                                    </h5>
                                    <p className="mb-2 text-gray-700">
                                        <span className="text-primary font-medium">13 Barangays</span>
                                    </p>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border border-gray-200 bg-white p-4">
                                            <h6 className="text-primary mb-2 flex items-center font-medium">
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
                                            <h6 className="text-primary mb-2 flex items-center font-medium">
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

                                <div className="mb-8">
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-route text-secondary mr-2"></i> Distance From
                                    </h5>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Sta. Cruz, Laguna</p>
                                            <p className="text-primary font-bold">19km</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Manila via Laguna</p>
                                            <p className="text-primary font-bold">114km</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3">
                                            <p className="text-sm text-gray-600">Manila via Rizal</p>
                                            <p className="text-primary font-bold">80km</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="text-dark mb-3 flex items-center font-semibold">
                                        <i className="fas fa-chart-bar text-secondary mr-2"></i> Key Statistics
                                    </h5>
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Land Area</p>
                                            <p className="text-primary font-bold">4,649.78 ha</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Population (2016)</p>
                                            <p className="text-primary font-bold">22,386</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Population Growth</p>
                                            <p className="text-primary font-bold">1.46%</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Literacy Rate</p>
                                            <p className="text-primary font-bold">93%</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Employment Rate</p>
                                            <p className="text-primary font-bold">93%</p>
                                        </div>
                                        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                            <p className="text-sm text-gray-600">Languages</p>
                                            <p className="text-primary font-bold">Filipino, English</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20" id="featured_posts">
                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="bg-secondary mr-3 h-1 w-8 rounded-full"></div>
                            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">Social Wall</h2>
                            <div className="bg-secondary ml-3 h-1 w-8 rounded-full"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Featured</span> Post
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">A glimpse of Pakil through the eyes of our visitors</p>
                    </div>

                    <div className="mx-auto max-w-2xl">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1582139329536-e7284fece509"
                                    alt="Featured Pakil Image"
                                    className="h-80 w-full object-cover"
                                />
                                <div className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow">
                                    <i className="fas fa-bookmark text-primary text-xl"></i>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="mb-4 text-gray-700 italic">
                                    "The stunning San Pedro de Alcantara Church in golden hour. The centuries-old architecture never fails to take my
                                    breath away! #Pakil #Laguna #Heritage"
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex items-center">
                                        <div className="bg-primary/10 mr-3 flex h-10 w-10 items-center justify-center rounded-full">
                                            <i className="fas fa-user text-primary"></i>
                                        </div>
                                        <div>
                                            <p className="text-dark font-medium">@travelingjuan</p>
                                            <p className="text-xs text-gray-500">Posted on May 15, 2023</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center rounded-full bg-red-100 px-3 py-1 text-red-500">
                                            <i className="fas fa-heart mr-2"></i>
                                            <span className="font-medium">248</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="#"
                                className="border-primary bg-primary hover:text-primary inline-flex items-center rounded-full border px-6 py-3 font-medium text-white transition duration-300 hover:bg-white"
                            >
                                <i className="fas fa-images mr-2"></i> View More Social Posts
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="bg-secondary mr-3 h-1 w-8 rounded-full"></div>
                            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">Updates</h2>
                            <div className="bg-secondary ml-3 h-1 w-8 rounded-full"></div>
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            <span className="text-primary">Events</span> & News
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Stay updated with the latest happenings in Pakil</p>
                    </div>

                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Turumba Festival" className="h-48 w-full object-cover" />
                                <div className="bg-primary absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white">Event</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt text-primary mr-2"></i>
                                    <span>June 15 - July 30, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Turumba Festival 2023</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Join us for the longest religious festival in the Philippines celebrating Our Lady of Turumba. Seven months of
                                    novenas, processions, and cultural performances.
                                </p>
                                <a href="#" className="text-primary hover:text-primary/80 flex items-center font-medium">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Church Restoration" className="h-48 w-full object-cover" />
                                <div className="bg-accent absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white">News</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt text-primary mr-2"></i>
                                    <span>May 28, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">San Pedro Church Restoration Complete</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    The historic San Pedro de Alcantara Church has completed its 2-year restoration project, bringing back its
                                    original 18th century glory while reinforcing its structure.
                                </p>
                                <a href="#" className="text-primary hover:text-primary/80 flex items-center font-medium">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="relative">
                                <img src="/User/Images/church.jpg" alt="Music Workshop" className="h-48 w-full object-cover" />
                                <div className="bg-secondary absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white">Event</div>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <i className="far fa-calendar-alt text-primary mr-2"></i>
                                    <span>August 10-12, 2023</span>
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-bold">Pakil Music Heritage Workshop</h4>
                                <p className="mb-5 line-clamp-3 text-gray-600">
                                    Celebrating Pakil's musical legacy with workshops on traditional church music and performances honoring Marcelo
                                    Adonay, the Palestrina of the Philippines.
                                </p>
                                <a href="#" className="text-primary hover:text-primary/80 flex items-center font-medium">
                                    Read More <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="#"
                            className="border-primary text-primary hover:bg-primary inline-flex items-center rounded-full border px-6 py-3 font-medium transition duration-300 hover:text-white"
                        >
                            <i className="fas fa-newspaper mr-2"></i> View All Events & News
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                        <div className="md:flex">
                            <div className="bg-primary flex items-center justify-center p-8 md:w-2/5">
                                <div className="text-center">
                                    <i className="fas fa-envelope-open-text mb-6 text-5xl text-white"></i>
                                    <h3 className="mb-3 text-2xl font-bold text-white">Stay Updated</h3>
                                    <p className="text-white/90">Get the latest Pakil news straight to your inbox</p>
                                </div>
                            </div>

                            <div className="p-8 md:w-3/5 md:p-12">
                                <div className="mb-2">
                                    <div className="bg-secondary mb-3 h-1 w-8 rounded-full"></div>
                                    <h2 className="text-primary text-sm font-semibold tracking-wider uppercase">Connect With Us</h2>
                                </div>
                                <h3 className="text-dark mb-6 text-2xl font-bold md:text-3xl">
                                    Subscribe to our <span className="text-primary">Newsletter</span>
                                </h3>

                                <form className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-user text-gray-400"></i>
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:ring-2"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                className="focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:ring-2"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="terms"
                                            type="checkbox"
                                            className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                                            required
                                        />
                                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                            I agree to receive emails about Pakil news and events
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-primary hover:bg-primary/90 focus:ring-primary flex w-full items-center justify-center rounded-full border border-transparent px-6 py-3 text-white shadow-sm transition duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                    >
                                        <i className="fas fa-paper-plane mr-2"></i> Subscribe Now
                                    </button>
                                </form>

                                <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
