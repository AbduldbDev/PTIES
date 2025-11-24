import PageTitle from '@UserUtils/components/Banner/PageTitle';
import 'aos/dist/aos.css';

export default function Explore() {
    return (
        <section id="explore" className="py-8 md:py-10 lg:py-12">
            <div className="container mx-auto px-4 sm:px-5 md:px-6">
                <PageTitle
                    title="Discover"
                    subtitle="Welcome to Pakil"
                    desc="A charming Laguna town where faith, heritage, and nature come together to create unforgettable experiences."
                    data-aos="fade-up"
                ></PageTitle>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
                    <div
                        className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                            <i className="fas fa-church text-xl text-primary sm:text-2xl"></i>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Religious Heritage</h3>
                        <p className="text-sm text-gray-600 sm:text-base">
                            Explore the historic San Pedro de Alcantara Church and other spiritual landmarks.
                        </p>
                    </div>

                    <div
                        className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                            <i className="fas fa-water text-xl text-primary sm:text-2xl"></i>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Natural Wonders</h3>
                        <p className="text-sm text-gray-600 sm:text-base">Discover beautiful waterfalls and scenic landscapes around Pakil.</p>
                    </div>

                    <div
                        className="rounded-lg border border-primary/20 bg-gray-50 p-4 transition-all hover:border-secondary/50 sm:rounded-xl sm:p-5 md:p-6"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-lg">
                            <i className="fas fa-utensils text-xl text-primary sm:text-2xl"></i>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">Local Cuisine</h3>
                        <p className="text-sm text-gray-600 sm:text-base">Taste authentic Filipino dishes and local specialties.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
