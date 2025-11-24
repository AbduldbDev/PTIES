import PageTitle from '@UserUtils/components/Banner/PageTitle';
import 'aos/dist/aos.css';

export default function Map() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-2 lg:px-6">
                <PageTitle
                    title="Geography"
                    subtitle="Location & Demographics"
                    desc="Discover Pakil's strategic position in Laguna and key statistical information"
                ></PageTitle>

                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Map */}
                    <div className="lg:w-1/2">
                        <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl" data-aos="zoom-in" data-aos-delay="100">
                            <div className="aspect-video w-full lg:aspect-3/4">
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
                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:w-1/2">
                        <div className="h-full rounded-xl bg-[#f2f4f8] p-6" data-aos="fade-left" data-aos-delay="100">
                            <h4
                                className="mb-6 flex items-center text-lg font-bold text-primary sm:text-xl"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <i className="fas fa-location-dot mr-3"></i> Geographical Information
                            </h4>
                            <div className="mb-6 overflow-x-auto" data-aos="fade-up" data-aos-delay="300">
                                <table className="w-full text-sm sm:text-base">
                                    <tbody>
                                        <tr data-aos="fade-right" data-aos-delay="400">
                                            <td className="w-20 px-2 py-1 font-medium text-primary sm:w-28">North</td>
                                            <td className="px-2 py-1 text-gray-700">Pangil, Laguna (along Mabato river)</td>
                                        </tr>
                                        <tr data-aos="fade-right" data-aos-delay="450">
                                            <td className="w-20 px-2 py-1 font-medium text-primary sm:w-28">East</td>
                                            <td className="px-2 py-1 text-gray-700">Real, Quezon (along Tibag river)</td>
                                        </tr>
                                        <tr data-aos="fade-right" data-aos-delay="500">
                                            <td className="w-20 px-2 py-1 font-medium text-primary sm:w-28">South</td>
                                            <td className="px-2 py-1 text-gray-700">
                                                Paete, Laguna (along Tuyong llog), Jalajala, Rizal (Inuod point and along Turnina river)
                                            </td>
                                        </tr>
                                        <tr data-aos="fade-right" data-aos-delay="550">
                                            <td className="w-20 px-2 py-1 font-medium text-primary sm:w-28">West</td>
                                            <td className="px-2 py-1 text-gray-700">Mabitac, Laguna (Hinukay river)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Political Subdivisions */}
                            <div className="mb-8" data-aos="fade-up" data-aos-delay="600">
                                <h5
                                    className="text-dark mb-3 flex items-center text-base font-semibold sm:text-lg"
                                    data-aos="fade-right"
                                    data-aos-delay="700"
                                >
                                    <i className="fas fa-project-diagram mr-2 text-secondary"></i> Political Subdivisions
                                </h5>
                                <p className="mb-2 px-2 text-sm text-gray-700 sm:text-base" data-aos="fade-right" data-aos-delay="750">
                                    <span className="font-medium text-primary">13 Barangays</span>
                                </p>
                                <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-2">
                                    <div className="rounded-lg border border-gray-200 bg-white p-4" data-aos="fade-up" data-aos-delay="800">
                                        <h6 className="mb-2 flex items-center text-sm font-medium text-primary sm:text-base">
                                            <i className="fas fa-arrow-right mr-2 text-xs"></i> Silangan (East)
                                        </h6>
                                        <ul className="space-y-1 text-sm text-gray-700 lg:text-base">
                                            <li data-aos="fade-right" data-aos-delay="850">
                                                Baño
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="900">
                                                Burgos
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="950">
                                                Gonzales
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1000">
                                                Rizal
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1050">
                                                Taft
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1100">
                                                Tavera
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1150">
                                                Saray
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-white p-4" data-aos="fade-up" data-aos-delay="850">
                                        <h6 className="mb-2 flex items-center text-sm font-medium text-primary sm:text-base">
                                            <i className="fas fa-arrow-right mr-2 text-xs"></i> Kanularan (West)
                                        </h6>
                                        <ul className="space-y-1 text-sm text-gray-700 lg:text-base">
                                            <li data-aos="fade-right" data-aos-delay="900">
                                                Banilan
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="950">
                                                Casa Real
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1000">
                                                Casinsin
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1050">
                                                Dorado
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1100">
                                                Kabulusan
                                            </li>
                                            <li data-aos="fade-right" data-aos-delay="1150">
                                                Matikiw
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Distance */}
                            <div data-aos="fade-up" data-aos-delay="1200">
                                <h5
                                    className="text-dark mb-3 flex items-center text-base font-semibold sm:text-lg"
                                    data-aos="fade-right"
                                    data-aos-delay="1250"
                                >
                                    <i className="fas fa-route mr-2 text-secondary"></i> Distance From
                                </h5>
                                <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-2">
                                    <div className="rounded-lg border border-gray-200 bg-white p-3" data-aos="zoom-in" data-aos-delay="1300">
                                        <p className="text-xs text-gray-600 sm:text-sm">Sta. Cruz, Laguna</p>
                                        <p className="text-base font-bold text-primary sm:text-lg">19km</p>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-white p-3" data-aos="zoom-in" data-aos-delay="1350">
                                        <p className="text-xs text-gray-600 sm:text-sm">Manila via Laguna</p>
                                        <p className="text-base font-bold text-primary sm:text-lg">114km</p>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-white p-3" data-aos="zoom-in" data-aos-delay="1400">
                                        <p className="text-xs text-gray-600 sm:text-sm">Manila via Rizal</p>
                                        <p className="text-base font-bold text-primary sm:text-lg">80km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
