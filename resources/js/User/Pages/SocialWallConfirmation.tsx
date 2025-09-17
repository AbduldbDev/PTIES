import { Link } from '@inertiajs/react';

const SocialWallConfirmation = ({
    title = 'Post Submitted for Review!',
    message = 'Thank you for sharing your Pakil experience. Your submission will be reviewed before being published on our social wall.',
    showContactInfo = false,
}) => {
    return (
        <section className="mt-20 py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg md:rounded-2xl md:shadow-xl">
                    <div className="p-8 text-center">
                        <div className="relative mb-6">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center">
                                <svg className="checkmark animate-draw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="80" height="80">
                                    <circle
                                        className="checkmark-circle animate-circle"
                                        cx="26"
                                        cy="26"
                                        r="25"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className="checkmark-check animate-check"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="4"
                                        strokeLinecap="round"
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

                        <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">{title}</h2>

                        <p className="mb-6 text-gray-600">{message}</p>

                        <div className="mb-6 rounded-lg bg-primary/5 p-4 text-left">
                            <p className="mb-2 flex items-center text-sm font-medium text-primary">
                                <i className="fas fa-info-circle mr-2"></i> What happens next?
                            </p>
                            <ul className="space-y-1 text-xs text-gray-600">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                    <span>Your image and caption will be reviewed by our team</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                    <span>This process usually takes 24-48 hours</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                    <span>You'll receive a notification once your post is live</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/"
                                className="flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 text-center font-medium text-white transition duration-300 hover:bg-primary/90"
                            >
                                <i className="fas fa-home mr-2"></i> Back to Home
                            </Link>
                            <Link
                                href="/events/socialwall"
                                className="flex flex-1 items-center justify-center rounded-full border border-primary bg-white px-4 py-3 text-center font-medium text-primary transition duration-300 hover:bg-primary/10"
                            >
                                <i className="fas fa-images mr-2"></i> View Social Wall
                            </Link>
                        </div>

                        {showContactInfo && (
                            <p className="mt-6 text-xs text-gray-500">
                                Questions about your submission? Contact us at{' '}
                                <a href="mailto:info@pakiltourism.com" className="text-primary hover:underline">
                                    info@pakiltourism.com
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialWallConfirmation;
