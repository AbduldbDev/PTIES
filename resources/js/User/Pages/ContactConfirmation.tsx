export default function ContactConfirmation() {
    return (
        <>
            <section className="mt-20 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                        <div className="p-8 text-center">
                            <div className="relative mb-6">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                                    <svg
                                        className="checkmark animate-draw"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                        width="80"
                                        height="80"
                                    >
                                        <circle
                                            className="checkmark-circle animate-circle"
                                            cx="26"
                                            cy="26"
                                            r="25"
                                            fill="none"
                                            stroke="#10b981"
                                            stroke-width="3"
                                        />
                                        <path
                                            className="checkmark-check animate-check"
                                            fill="none"
                                            stroke="#10b981"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                        />
                                    </svg>
                                </div>

                                <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 transform">
                                    <div className="animate-float-1 absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-primary/30"></div>
                                    <div className="animate-float-2 absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-secondary/40"></div>
                                    <div className="animate-float-3 absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-accent/30"></div>
                                </div>
                            </div>

                            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Message Sent Successfully!</h2>

                            <p className="mb-6 text-gray-600">
                                Thank you for contacting the Municipality of Pakil. We have received your message and will get back to you within
                                24-48 hours.
                            </p>

                            <div className="mb-6 rounded-lg bg-primary/5 p-4 text-left">
                                <p className="mb-2 flex items-center text-sm font-medium text-primary">
                                    <i className="fas fa-info-circle mr-2"></i> What happens next?
                                </p>
                                <ul className="space-y-1 text-xs text-gray-600">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                        <span>Your message is forwarded to the appropriate department</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                        <span>You'll receive a confirmation email shortly</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                        <span>Our team will respond to your inquiry</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/"
                                    className="flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 text-center font-medium text-white transition duration-300 hover:bg-primary/90"
                                >
                                    <i className="fas fa-home mr-2"></i> Back to Home
                                </a>
                                <a
                                    href="/contact"
                                    className="flex flex-1 items-center justify-center rounded-full border border-primary bg-white px-4 py-3 text-center font-medium text-primary transition duration-300 hover:bg-primary/10"
                                >
                                    <i className="fas fa-envelope mr-2"></i> Send Another
                                </a>
                            </div>

                            <p className="mt-6 text-xs text-gray-500">
                                Need immediate assistance? Call us at
                                <a href="tel:+63491234567" className="ml-1 text-primary hover:underline">
                                    (049) 557–1884
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
