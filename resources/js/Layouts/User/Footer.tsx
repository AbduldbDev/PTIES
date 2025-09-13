import Svg from '@UserUtils/components/Footer/Svg';

export const Footer = () => {
    return (
        <>
            <div className="footer"></div>
            <section className="z-50">
                <Svg />
                <footer className="bg-primary px-3 pt-8 pb-4 text-white sm:px-4 sm:pt-10 sm:pb-5 lg:px-8 lg:pt-12 lg:pb-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4">
                            <div className="flex flex-col items-center space-y-3 sm:space-y-4 md:col-span-1 md:items-start">
                                <div className="flex space-x-3 sm:space-x-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg p-1 sm:h-20 sm:w-20 sm:p-2 md:h-24 md:w-24">
                                        <img src="/User/Layout/Seal.png" alt="Municipal Seal" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg p-1 sm:h-20 sm:w-20 sm:p-2 md:h-24 md:w-24">
                                        <img src="/User/Layout/Logo.png" alt="Municipality Logo" className="h-full w-full object-contain" />
                                    </div>
                                </div>
                                <h2 className="text-base font-bold sm:text-lg md:text-xl">Municipality of Pakil</h2>
                                <p className="text-xs opacity-80 sm:text-sm">Laguna, Philippines</p>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-3 border-b border-white/20 pb-1.5 text-sm font-semibold sm:mb-4 sm:pb-2 sm:text-base md:text-lg">
                                    Quick Links
                                </h3>
                                <ul className="space-y-1.5 sm:space-y-2">
                                    {['Home', 'About Pakil', 'Explore Pakil', 'Market', 'Contact'].map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-xs transition hover:text-blue-200 sm:text-sm">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-3 border-b border-white/20 pb-1.5 text-sm font-semibold sm:mb-4 sm:pb-2 sm:text-base md:text-lg">
                                    Contact Us
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li className="flex items-start">
                                        <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-xs sm:text-sm"></i>
                                        <span className="text-xs sm:text-sm">Pakil Tourism Office No. 1 Tavera St. Pakil, Laguna 4017</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-envelope mt-0.5 mr-2 text-xs sm:text-sm"></i>
                                        <span className="text-xs sm:text-sm">pakiltourism@gmail.com</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt mt-0.5 mr-2 text-xs sm:text-sm"></i>
                                        <span className="text-xs sm:text-sm">(049) 557 – 1884</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt mt-0.5 mr-2 text-xs sm:text-sm"></i>
                                        <span className="text-xs sm:text-sm">(049) 557 – 1766</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="mb-3 border-b border-white/20 pb-1.5 text-sm font-semibold sm:mb-4 sm:pb-2 sm:text-base md:text-lg">
                                    Follow Us
                                </h3>
                                <div className="mb-3 flex space-x-2 sm:mb-4 sm:space-x-3 md:space-x-4">
                                    {['facebook-f', 'instagram', 'youtube'].map((platform) => (
                                        <a
                                            key={platform}
                                            href="#"
                                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30 sm:h-9 sm:w-9 md:h-10 md:w-10"
                                        >
                                            <i className={`fab fa-${platform} text-xs sm:text-sm`}></i>
                                        </a>
                                    ))}
                                </div>
                                <p className="mb-2 text-xs opacity-80 sm:text-sm">Subscribe to our newsletter</p>
                                <div className="mt-1 flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full rounded-l border border-white/20 bg-white/10 px-2 py-1.5 text-xs placeholder-white/70 focus:ring-1 focus:ring-white/50 focus:outline-none sm:px-3 sm:py-2 sm:text-sm"
                                    />
                                    <button className="rounded-r bg-white/20 px-2 py-1.5 text-xs transition hover:bg-white/30 sm:px-3 sm:py-2 sm:text-sm">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-white/20 pt-4 text-center text-xs opacity-80 sm:mt-8 sm:pt-5 sm:text-sm">
                            <p className="pb-3 sm:pb-4 md:pb-5">
                                &copy; {new Date().getFullYear()} Municipality of Pakil, Laguna. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    );
};
