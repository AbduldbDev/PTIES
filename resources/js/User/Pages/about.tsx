import { Head } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
export default function About() {
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

            <section className="bg-white py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <PageTitle
                        title="Discover"
                        subtitle="Introduction to Pakil"
                        desc="Where faith, heritage, and natural beauty converge"
                    ></PageTitle>

                    <div className="flex flex-col items-start gap-12 lg:flex-row">
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="text-dark mb-6">
                                    Pakil is a fascinating little town located at the foot of Sierra Madre and bordered by Laguna Lake. A visit to our
                                    town gives you a peek of the old-world; from the picturesque facade of the San Pedro Garavito de Alcantara Church
                                    to the quaint Town Plaza that serves as the center of life of the Pakileños.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex">
                                        <div className="mt-1 mr-4 flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fa-solid fa-paintbrush text-primary"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2 text-lg font-bold">Musical Heritage</h4>
                                            <p>
                                                The town is known for its rich musical heritage. It is the birthplace of the icon of church music, the
                                                Palestrina of the Philippines - Marcelo Adonay. It is also where the first musical academy in the
                                                country was initiated by a Guardian of the Franciscan Order, San Pedro Bautista in 1586. He trained
                                                children choirs called "tiple".
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mt-1 mr-4 flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-church"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2 text-lg font-bold">Spiritual Heart</h4>
                                            <p>
                                                This pilgrimage town is home to the "Patroness of the Laguna Lake", the Nuestra Señora de los Dolores
                                                de Turumba. The St. Peter de Alcantara Church enshrines the Our Lady of Turumba painting, a replica of
                                                the Nuestra Señora de las Antiguas which was found by fishermen on September 15, 1788 after a storm.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mt-1 mr-4 flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fa-solid fa-paintbrush text-primary"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2 text-lg font-bold">Turumba Festival</h4>
                                            <p>
                                                The festival in honor of Our Lady of Turumba is the longest religious festival in the country. It
                                                consists of seven novenas or "lupi" that last for seven months commemorating the seven sorrows of the
                                                Virgin Mary.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mt-1 mr-4 flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-mountain"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-dark mb-2 text-lg font-bold">Natural Beauty</h4>
                                            <p>
                                                If you are looking for a more pristine paradise, a hike to Mount Ping-as would definitely give you a
                                                view that is stunningly different. Apart from the luscious foliages, you would see a single large
                                                cross, revive spirituality and discover century-old traditions. A destination for the weary and for
                                                those who want to escape stress completely!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="rounded-xl border border-primary/10 bg-primary/5 p-6">
                                <h4 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-star mr-3"></i> Pakil Highlights
                                </h4>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <i className="fas fa-landmark mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <h5 className="text-dark font-bold">San Pedro de Alcantara Church</h5>
                                            <p className="text-sm text-gray-700">18th century Baroque church with remarkable facade</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <i className="fas fa-mountain mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <h5 className="text-dark font-bold">Laguna Lake</h5>
                                            <p className="text-sm text-gray-700">Bordered by the largest lake in the Philippines</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <i className="fas fa-mountain mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <h5 className="text-dark font-bold">Mount Ping-as</h5>
                                            <p className="text-sm text-gray-700">Scenic hiking destination with spiritual significance</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <i className="fa-solid fa-paintbrush mt-1 mr-2 text-primary"></i>
                                        <div>
                                            <h5 className="text-dark font-bold">Marcelo Adonay</h5>
                                            <p className="text-sm text-gray-700">The "Palestrina of the Philippines"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="overflow-hidden rounded-xl border-2 border-white shadow-md">
                            <img
                                src="/User/Images/church.jpg"
                                alt="Church"
                                className="h-40 w-full object-cover transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl border-2 border-white shadow-md">
                            <img
                                src="/User/Images/church.jpg"
                                alt="Town Plaza"
                                className="h-40 w-full object-cover transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl border-2 border-white shadow-md">
                            <img
                                src="/User/Images/church.jpg"
                                alt="Music"
                                className="h-40 w-full object-cover transition duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl border-2 border-white shadow-md">
                            <img
                                src="/User/Images/church.jpg"
                                alt="Nature"
                                className="h-40 w-full object-cover transition duration-300 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <PageTitle
                        title="The Past"
                        subtitle="Rich History the  of Pakil"
                        desc="Discover the fascinating journey of our pilgrimage town"
                    ></PageTitle>

                    <div className="flex flex-col md:flex-row">
                        <div className="flex justify-center md:w-1/6">
                            <div className="relative hidden md:block">
                                <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-primary/20"></div>
                                <div className="absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-primary shadow-md"></div>
                                <div className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-primary shadow-md"></div>
                            </div>
                        </div>

                        <div className="md:w-5/6">
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="md:flex">
                                    <div className="bg-primary/5 p-6 md:w-1/3">
                                        <h4 className="mb-2 text-xl font-bold text-primary">1588</h4>
                                        <p className="font-medium text-gray-700">Franciscan Foundation</p>
                                        <img src="/User/Images/church.jpg" alt="Old Church" className="mt-4 rounded-lg shadow-sm" />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <div className="prose prose-lg text-gray-700">
                                            <p>
                                                Pakil was established as a visita (mission station) of Paete by Franciscan missionaries in 1588. The
                                                town's original name was "Paquil," derived from the phrase "Pa-kin," meaning "to cut" in Tagalog,
                                                referring to how early settlers cleared the land.
                                            </p>
                                            <p className="mt-4">
                                                The Franciscans built the first chapel dedicated to San Pedro de Alcantara, which would later become
                                                the center of religious life in the community. This period saw the conversion of local populations to
                                                Christianity and the establishment of basic governance structures under Spanish rule.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="flex-row-reverse md:flex">
                                    <div className="bg-primary/5 p-6 md:w-1/3">
                                        <h4 className="mb-2 text-xl font-bold text-primary">1676</h4>
                                        <p className="font-medium text-gray-700">Independent Municipality</p>
                                        <img src="/User/Images/church.jpg" alt="Town Plaza" className="mt-4 rounded-lg shadow-sm" />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <div className="prose prose-lg text-gray-700">
                                            <p>
                                                After nearly a century as a visita, Pakil was officially established as an independent municipality in
                                                1676. This marked the beginning of Pakil's distinct political and cultural identity separate from
                                                Paete.
                                            </p>
                                            <p className="mt-4">
                                                The 18th century saw the construction of more permanent structures, including the current San Pedro de
                                                Alcantara Church (completed in 1767). The town's economy flourished through agriculture (particularly
                                                rice and coconut cultivation) and the emerging woodcarving industry that would later become
                                                world-renowned.
                                            </p>
                                            <p className="mt-4">
                                                The famous Turumba devotion began in 1788 when fishermen discovered the image of Nuestra Señora de los
                                                Dolores along the shores of Laguna de Bay after a storm, marking the start of Pakil's enduring Marian
                                                tradition.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="md:flex">
                                    <div className="bg-primary/5 p-6 md:w-1/3">
                                        <h4 className="mb-2 text-xl font-bold text-primary">1900s</h4>
                                        <p className="font-medium text-gray-700">Modern Development</p>
                                        <img src="/User/Images/church.jpg" alt="Modern Pakil" className="mt-4 rounded-lg shadow-sm" />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <div className="prose prose-lg text-gray-700">
                                            <p>
                                                The American colonial period brought new infrastructure to Pakil, including roads and schools. The
                                                20th century saw the town preserve its cultural heritage while adapting to modernization.
                                            </p>
                                            <p className="mt-4">
                                                In 1952, Pakil was officially recognized as a pilgrimage site by the Catholic Church due to the
                                                growing devotion to Our Lady of Turumba. The Turumba Festival was institutionalized as the longest
                                                religious festival in the Philippines, spanning seven months to commemorate the Seven Sorrows of Mary.
                                            </p>
                                            <p className="mt-4">
                                                Recent decades have focused on cultural preservation and tourism development. The municipal government
                                                has restored historic structures, established heritage zones, and promoted Pakil's unique musical
                                                tradition rooted in the works of Marcelo Adonay, the "Palestrina of the Philippines."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Celebrations"
                        subtitle="Turumba sa Birhen Festival"
                        desc="The longest religious festival in the Philippines"
                    ></PageTitle>

                    <div className="flex flex-col items-start gap-12 lg:flex-row">
                        <div className="lg:w-2/3">
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white">
                                            <i className="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <h4 className="text-dark text-2xl font-bold">"The Feast of Nuestra Señora de los Dolores de Turumba"</h4>
                                    </div>
                                    <div className="prose prose-lg space-y-6 text-gray-700">
                                        <p>
                                            In 1788, the miraculous painting of Nuestra Señora de los Dolores de Turumba, depicting an image of the
                                            Sorrowful Mother Mary, and measuring at 9 inches by 11 inches, was found at Pakil's shore. The people
                                            believed that the painting was accidentally thrown overboard from a missionary's boat that was caught in a
                                            typhoon at Laguna Lake.
                                        </p>

                                        <p>
                                            Legend has it that the painting was found resting on a big stone by some local women. When they tried to
                                            lift the painting to bring it to the church, they found it too heavy. Father Miguel Soriano, parish priest
                                            of the Saint Peter of Alcantara Parish Church at that time, instructed the townsfolk to gather and chant
                                            the Litany of Saints. As the priest was about to lift the painting, the people broke into trance-like
                                            singing and dancing. Miraculously, the painting became easy to carry and was finally brought to the
                                            church. This manner of ecstatic dancing later on was called Turumba.
                                        </p>

                                        <p>
                                            To commemorate this event, the townsfolk hold annually the Turumba Festival. This celebration is the
                                            longest running festival in the Philippines which starts on a Friday before Palm Sunday and ending on
                                            Pentecost Sunday. Aside from the town's fiesta on 19 October, there are nine annual fiestas or lupi
                                            wherein the image is carried by the dancing devotees in a procession.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                    <h5 className="mb-4 flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-users mr-3"></i> Devotees & Pilgrims
                                    </h5>
                                    <div className="prose text-gray-700">
                                        <p>
                                            The festival attracts thousands of devotees coming from Batangas, Quezon, and Rizal provinces. In some
                                            cases, the festival participants claim that the Nuestra Señora visited them in their dreams and instructed
                                            them to make a pilgrimage to her home in Pakil.
                                        </p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                    <h5 className="mb-4 flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-water mr-3"></i> Healing Waters
                                    </h5>
                                    <div className="prose text-gray-700">
                                        <p>
                                            The pilgrims complete their vows by bathing two to seven times at the miraculous Panghulo spring, which is
                                            believed to cure the body and soul. Guests are allowed to bring containers so that they can take home the
                                            healing waters. Every year, the number of devotees to the Turumba continues to increase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-info-circle mr-3"></i> Festival Facts
                                    </h4>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-history"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Founded</h5>
                                                <p className="text-sm text-gray-700">1788</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-calendar-alt"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Duration</h5>
                                                <p className="text-sm text-gray-700">March to June (7 months)</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-church"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Main Venue</h5>
                                                <p className="text-sm text-gray-700">St. Peter of Alcantara Parish Church</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <i className="fas fa-user-plus"></i>
                                            </div>
                                            <div>
                                                <h5 className="text-dark font-bold">Participants</h5>
                                                <p className="text-sm text-gray-700">Thousands from across Southern Luzon</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                                <div className="border-b border-primary/20 bg-primary/10 p-5">
                                    <h4 className="flex items-center text-xl font-bold text-primary">
                                        <i className="fas fa-images mr-3"></i> Festival Moments
                                    </h4>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-4">
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="//User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="//User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="//User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-lg">
                                        <img
                                            src="//User/Images/church.jpg"
                                            alt="Turumba Festival"
                                            className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="border-b border-primary/20 bg-primary/10 p-5">
                            <h4 className="flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-calendar-day mr-3"></i> Festival Schedule Highlights
                            </h4>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                <div className="border-l-4 border-primary pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Palm Sunday Weekend</h5>
                                    <p className="text-sm text-gray-700">
                                        Opening procession with the first lupi (novena) and traditional Turumba dancing
                                    </p>
                                </div>
                                <div className="border-l-4 border-secondary pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Holy Week</h5>
                                    <p className="text-sm text-gray-700">Special ceremonies commemorating the Sorrows of Mary</p>
                                </div>
                                <div className="border-l-4 border-accent pl-4">
                                    <h5 className="text-dark mb-2 font-bold">Pentecost Sunday</h5>
                                    <p className="text-sm text-gray-700">Grand finale procession and mass celebration</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                        >
                            <i className="fas fa-calendar-check mr-2"></i> View Full Festival Calendar
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Geography"
                        subtitle="Municipal Map & Barangays"
                        desc="Discover the political subdivisions of Pakil and their leaders"
                    ></PageTitle>

                    <div className="mb-12 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <div className="w-full">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg bg-gray-50">
                                <img src="/User/SVG/pakil.svg" alt="Pakil Municipal Map" className="h-auto w-full object-contain p-4" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="h-full rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm md:p-6">
                                <h4 className="mb-6 flex items-center text-xl font-bold">
                                    <i className="fas fa-info-circle mr-3 text-primary"></i>
                                    <span className="mr-1 text-primary">Municipal </span> Facts
                                </h4>
                                <div className="grid grid-cols-1 gap-6 p-0 md:p-6 lg:grid-cols-2">
                                    <div className="mb-8">
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

                                    <div>
                                        <h5 className="text-dark mb-3 flex items-center font-semibold">
                                            <i className="fas fa-chart-bar mr-2 text-secondary"></i> Key Statistics
                                        </h5>
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Land Area</p>
                                                <p className="font-bold text-primary">4,649.78 ha</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Population (2016)</p>
                                                <p className="font-bold text-primary">22,386</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Population Growth</p>
                                                <p className="font-bold text-primary">1.46%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Literacy Rate</p>
                                                <p className="font-bold text-primary">93%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Employment Rate</p>
                                                <p className="font-bold text-primary">93%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Languages</p>
                                                <p className="font-bold text-primary">Filipino, English</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Element */}
                                <div className="mt-6 border-t border-gray-100 pt-4 text-center">
                                    <span className="inline-flex items-center text-xs text-gray-400">
                                        <i className="fas fa-info-circle mr-1 text-primary/70"></i>
                                        Last updated: August 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* East Side Barangays */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-sun mr-3"></i> Silangan (East) Barangays
                                </h4>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    Barangay
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    Captain
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">1</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Baño</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Juan Dela Cruz</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">2</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Burgos</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Maria Santos</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">3</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Gonzales</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Pedro Reyes</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">4</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Rizal</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Ana Martinez</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">5</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Taft</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Carlos Aquino</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">6</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Tavera</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Lourdes Fernandez</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">7</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Saray</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Ricardo Gutierrez</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* West Side Barangays */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-moon mr-3"></i> Kanularan (West) Barangays
                                </h4>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    Barangay
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                                >
                                                    Captain
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">8</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Banilan</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Elena Torres</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">9</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Casa Real</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Antonio Cruz</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">10</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Casinsin</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Roberto Santiago</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">11</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Dorado</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Sofia Ramirez</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">12</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Kabulusan</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Felipe Mendoza</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">13</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Matikiw</td>
                                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">Teresa Reyes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="border-b border-primary/20 bg-primary/10 p-5">
                            <h4 className="flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-star mr-3"></i> Barangay Highlights
                            </h4>
                        </div>
                        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Baño</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Juan Dela Cruz</p>
                                <p className="text-sm text-gray-700">Known for its scenic views of Laguna Lake and traditional fishing industry.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Burgos</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Maria Santos</p>
                                <p className="text-sm text-gray-700">Home to several heritage homes and the municipal health center.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Banilan</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Elena Torres</p>
                                <p className="text-sm text-gray-700">Gateway to Mount Ping-as with thriving agricultural activities.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Casa Real</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Antonio Cruz</p>
                                <p className="text-sm text-gray-700">Location of the historic municipal hall and town plaza.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Dorado</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Sofia Ramirez</p>
                                <p className="text-sm text-gray-700">Famous for its goldsmiths and traditional jewelry making.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <h5 className="text-dark mb-2 font-bold">Kabulusan</h5>
                                <p className="mb-1 text-sm text-gray-700">Captain: Felipe Mendoza</p>
                                <p className="text-sm text-gray-700">Agricultural center with vast rice fields and fruit plantations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                        >
                            <i className="fas fa-file-alt mr-2"></i> Download Complete Barangay Profiles
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
