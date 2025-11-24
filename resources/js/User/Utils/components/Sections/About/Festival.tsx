export default function Festival() {
    return (
        <>
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
                                    In 1788, the miraculous painting of Nuestra Señora de los Dolores de Turumba, depicting an image of the Sorrowful
                                    Mother Mary, and measuring at 9 inches by 11 inches, was found at Pakil's shore. The people believed that the
                                    painting was accidentally thrown overboard from a missionary's boat that was caught in a typhoon at Laguna Lake.
                                </p>

                                <p>
                                    Legend has it that the painting was found resting on a big stone by some local women. When they tried to lift the
                                    painting to bring it to the church, they found it too heavy. Father Miguel Soriano, parish priest of the Saint
                                    Peter of Alcantara Parish Church at that time, instructed the townsfolk to gather and chant the Litany of Saints.
                                    As the priest was about to lift the painting, the people broke into trance-like singing and dancing. Miraculously,
                                    the painting became easy to carry and was finally brought to the church. This manner of ecstatic dancing later on
                                    was called Turumba.
                                </p>

                                <p>
                                    To commemorate this event, the townsfolk hold annually the Turumba Festival. This celebration is the longest
                                    running festival in the Philippines which starts on a Friday before Palm Sunday and ending on Pentecost Sunday.
                                    Aside from the town's fiesta on 19 October, there are nine annual fiestas or lupi wherein the image is carried by
                                    the dancing devotees in a procession.
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
                                    The festival attracts thousands of devotees coming from Batangas, Quezon, and Rizal provinces. In some cases, the
                                    festival participants claim that the Nuestra Señora visited them in their dreams and instructed them to make a
                                    pilgrimage to her home in Pakil.
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
                                    believed to cure the body and soul. Guests are allowed to bring containers so that they can take home the healing
                                    waters. Every year, the number of devotees to the Turumba continues to increase.
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
                                    src="/User/Images/church.jpg"
                                    alt="Turumba Festival"
                                    className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="h-32 overflow-hidden rounded-lg">
                                <img
                                    src="/User/Images/church.jpg"
                                    alt="Turumba Festival"
                                    className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="h-32 overflow-hidden rounded-lg">
                                <img
                                    src="/User/Images/church.jpg"
                                    alt="Turumba Festival"
                                    className="h-full w-full object-cover transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="h-32 overflow-hidden rounded-lg">
                                <img
                                    src="/User/Images/church.jpg"
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
                            <p className="text-sm text-gray-700">Opening procession with the first lupi (novena) and traditional Turumba dancing</p>
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
        </>
    );
}
