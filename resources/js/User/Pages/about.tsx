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
                    <PageTitle title="Geography" subtitle="Municipal Map & Barangays" desc="Discover the political subdivisions of Pakil"></PageTitle>

                    <div className="mb-12 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                            <div className="mx-auto w-full max-w-4xl">
                                <img src="/User/SVG/pakil.svg" alt="Pakil Municipal Map" className="h-auto w-full" />

                                <div className="svg-fallback flex h-64 items-center justify-center rounded-lg bg-gray-100">
                                    <div className="p-6 text-center">
                                        <i className="fas fa-map mb-3 text-4xl text-primary"></i>
                                        <p className="text-gray-600">Interactive Pakil Map</p>
                                        <p className="mt-2 text-sm text-gray-500">SVG map will appear here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-sun mr-3"></i> Silangan (East)
                                </h4>
                            </div>
                            <div className="p-6">
                                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            1
                                        </span>
                                        <span className="text-gray-700">Baño</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            2
                                        </span>
                                        <span className="text-gray-700">Burgos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            3
                                        </span>
                                        <span className="text-gray-700">Gonzales</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            4
                                        </span>
                                        <span className="text-gray-700">Rizal</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            5
                                        </span>
                                        <span className="text-gray-700">Taft</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            6
                                        </span>
                                        <span className="text-gray-700">Tavera</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            7
                                        </span>
                                        <span className="text-gray-700">Saray</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-moon mr-3"></i> Kanularan (West)
                                </h4>
                            </div>
                            <div className="p-6">
                                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            8
                                        </span>
                                        <span className="text-gray-700">Banilan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            9
                                        </span>
                                        <span className="text-gray-700">Casa Real</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            10
                                        </span>
                                        <span className="text-gray-700">Casinsin</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            11
                                        </span>
                                        <span className="text-gray-700">Dorado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            12
                                        </span>
                                        <span className="text-gray-700">Kabulusan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-0.5 mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                            13
                                        </span>
                                        <span className="text-gray-700">Matikiw</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="border-b border-primary/20 bg-primary/10 p-5">
                            <h4 className="flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-info-circle mr-3"></i> Barangay Highlights
                            </h4>
                        </div>
                        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h5 className="text-dark mb-2 font-bold">Baño</h5>
                                <p className="text-sm text-gray-700">Known for its scenic views of Laguna Lake and traditional fishing industry.</p>
                            </div>
                            <div>
                                <h5 className="text-dark mb-2 font-bold">Burgos</h5>
                                <p className="text-sm text-gray-700">Home to several heritage homes and the municipal health center.</p>
                            </div>
                            <div>
                                <h5 className="text-dark mb-2 font-bold">Banilan</h5>
                                <p className="text-sm text-gray-700">Gateway to Mount Ping-as with thriving agricultural activities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
