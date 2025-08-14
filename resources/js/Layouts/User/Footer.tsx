import Svg from '@UserUtils/components/Footer/Svg';

export const Footer = () => {
    return (
        <>
            <div className="footer"></div>
            <section className="z-50">
                <Svg />
                {/* <footer className="bg-gradient-to-r from-[#052675] to-[#083ec1] px-4 pt-12 pb-6 text-white sm:px-6 lg:px-8"> */}
                <footer className="bg-primary px-4 pt-12 pb-6 text-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                            <div className="flex flex-col items-center space-y-4 md:col-span-1 md:items-start">
                                <div className="flex space-x-4">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-lg p-2">
                                        <img src="/User/Layout/Seal.png" alt="" />
                                    </div>
                                    <div className="flex h-24 w-24 items-center justify-center rounded-lg p-2">
                                        <img src="/User/Layout/Logo.png" alt="" />
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold">Municipality of Pakil</h2>
                                <p className="text-sm opacity-80">Laguna, Philippines</p>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-4 border-b border-white/20 pb-2 text-lg font-semibold">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="transition hover:text-blue-200">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:text-blue-200">
                                            About Pakil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:text-blue-200">
                                            Explore Pakil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:text-blue-200">
                                            Market
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:text-blue-200">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-4 border-b border-white/20 pb-2 text-lg font-semibold">Contact Us</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                                        <span>Pakil Tourism Office No. 1 Tavera St. Pakil, Laguna 4017 </span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-envelope mt-1 mr-3"></i>
                                        <span>pakiltourism@gmail.com</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt mt-1 mr-3"></i>
                                        <span>(049) 557 – 1884</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt mt-1 mr-3"></i>
                                        <span>(049) 557 – 1766</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-4 border-b border-white/20 pb-2 text-lg font-semibold">Follow Us</h3>
                                <div className="mb-4 flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                                <p className="text-sm opacity-80">Subscribe to our newsletter</p>
                                <div className="mt-2 flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="text-white-800 w-full border-b-1 px-3 py-2 focus:outline-none"
                                    />
                                    <button className="rounded-r px-4 py-2 transition hover:bg-blue-600">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm opacity-80">
                            <p className="pb-5">&copy; {new Date().getFullYear()} Municipality of Pakil, Laguna. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
};
