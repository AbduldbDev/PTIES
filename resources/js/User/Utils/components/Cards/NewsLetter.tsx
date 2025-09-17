export default function NewsLetter() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-5 md:px-6">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md md:rounded-xl md:shadow-lg">
                    <div className="md:flex">
                        <div className="flex items-center justify-center bg-primary p-6 md:w-2/5 md:p-8">
                            <div className="text-center">
                                <i className="fas fa-envelope-open-text mb-4 text-4xl text-white md:mb-5 md:text-5xl"></i>
                                <h3 className="mb-2 text-xl font-bold text-white md:mb-3 md:text-2xl">Stay Updated</h3>
                                <p className="text-sm text-white/90 md:text-base">Get the latest Pakil news straight to your inbox</p>
                            </div>
                        </div>

                        <div className="p-6 md:w-3/5 md:p-8 lg:p-10">
                            <div className="mb-2">
                                <div className="mb-2 h-1 w-6 rounded-full bg-secondary md:mb-3 md:w-8"></div>
                                <h2 className="text-xs font-semibold tracking-wide text-primary uppercase md:text-sm">Connect With Us</h2>
                            </div>
                            <h3 className="text-dark mb-4 text-xl font-bold md:mb-5 md:text-2xl lg:text-3xl">
                                Subscribe to our <span className="text-primary">Newsletter</span>
                            </h3>

                            <form className="space-y-4 md:space-y-5">
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <i className="fas fa-user text-xs text-gray-400 md:text-sm"></i>
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            className="block w-full rounded-md border border-gray-300 py-2.5 pr-3 pl-9 text-sm focus:border-primary focus:ring-2 focus:ring-primary md:rounded-lg md:py-3 md:pl-10 md:text-base"
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-700 md:text-sm">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <i className="fas fa-envelope text-xs text-gray-400 md:text-sm"></i>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            className="block w-full rounded-md border border-gray-300 py-2.5 pr-3 pl-9 text-sm focus:border-primary focus:ring-2 focus:ring-primary md:rounded-lg md:py-3 md:pl-10 md:text-base"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-xs text-gray-700 md:text-sm">
                                        I agree to receive emails about Pakil news and events
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:px-6 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-paper-plane mr-1.5 text-xs md:mr-2 md:text-sm"></i> Subscribe Now
                                </button>
                            </form>

                            <p className="mt-3 text-[10px] text-gray-500 md:mt-4 md:text-xs">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
