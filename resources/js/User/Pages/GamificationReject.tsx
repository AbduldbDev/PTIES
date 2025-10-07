import { usePage } from '@inertiajs/react';

export default function ContactConfirmation() {
    const { flash } = usePage<{ flash?: { error?: string; success?: string } }>().props;

    return (
        <>
            <section className="mt-20 py-16">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                        <div className="p-8 text-center">
                            <div className="relative mb-6">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                                    <svg
                                        className="crossmark animate-draw"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 52 52"
                                        width="80"
                                        height="80"
                                    >
                                        <circle
                                            className="crossmark-circle animate-circle"
                                            cx="26"
                                            cy="26"
                                            r="24"
                                            fill="none"
                                            stroke="#ef4444"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="crossmark-line animate-check"
                                            fill="none"
                                            stroke="#ef4444"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            d="M16 16 L36 36"
                                        />
                                        <path
                                            className="crossmark-line animate-check"
                                            fill="none"
                                            stroke="#ef4444"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            d="M36 16 L16 36"
                                        />
                                    </svg>
                                </div>

                                <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 transform">
                                    <div className="animate-float-1 absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-primary/30"></div>
                                    <div className="animate-float-2 absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-secondary/40"></div>
                                    <div className="animate-float-3 absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-accent/30"></div>
                                </div>
                            </div>

                            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Failed to Claim Pakil Points</h2>

                            {flash?.error && <p className="mb-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{flash.error}</p>}

                            <p className="mb-6 text-sm text-gray-600 lg:text-base">
                                Your attempt to claim Pakil Points was unsuccessful. Please make sure you meet the requirements below before trying
                                again.
                            </p>

                            <div className="mb-6 rounded-lg bg-primary/5 p-4 text-left">
                                <p className="mb-2 flex items-center text-sm font-medium text-primary">
                                    <i className="fas fa-info-circle mr-2"></i> Why did this happen?
                                </p>
                                <ul className="space-y-1 text-xs text-gray-600">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                        <span>
                                            You must be within <strong>500 meters</strong> of the actual location
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle mt-0.5 mr-2 text-secondary"></i>
                                        <span>You cannot claim points that you have already claimed before</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/"
                                    className="flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white transition duration-300 hover:bg-primary/90 lg:text-base"
                                >
                                    <i className="fas fa-home mr-2"></i> Back to Home
                                </a>
                                <a
                                    onClick={() => window.history.back()}
                                    className="flex flex-1 items-center justify-center rounded-full border border-primary bg-white px-4 py-3 text-center text-sm font-medium text-primary transition duration-300 hover:bg-primary/10 lg:text-base"
                                >
                                    <i className="fas fa-arrow-left mr-2"></i> Go Back
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
