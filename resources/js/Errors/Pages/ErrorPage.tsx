import { Head, Link } from '@inertiajs/react';
import { Player } from '@lottiefiles/react-lottie-player';

interface Props {
    status?: number;
    message?: string;
}

export default function ErrorPage({ status = 404, message }: Props) {
    const errorConfigs: Record<number, { title: string; description: string; animation: string }> = {
        403: {
            title: 'Access Forbidden',
            description: 'Sorry, you are not authorized to access this page.',
            animation: 'https://assets1.lottiefiles.com/packages/lf20_ghfpce1h.json',
        },
        404: {
            title: 'Lost in <span class="text-secondary">Pakil</span>?',
            description: 'Even the best explorers sometimes take wrong turns. This page seems to be on a different trail.',
            animation: 'https://assets1.lottiefiles.com/packages/lf20_kcsr6fcp.json',
        },
        500: {
            title: 'Server Error',
            description: 'Whoops, something went wrong on our servers.',
            animation: 'https://assets1.lottiefiles.com/packages/lf20_uyfggirg.json',
        },
    };

    const config = errorConfigs[status] || {
        title: `${status} - Error`,
        description: message || 'An error occurred.',
        animation: 'https://assets1.lottiefiles.com/packages/lf20_uyfggirg.json',
    };

    return (
        <div className="font-sans flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
            <Head title={config.title.replace(/<[^>]*>/g, '')} />

            <div className="mx-auto max-w-4xl text-center">
                <div className="mx-auto mb-8 max-w-xs md:max-w-sm">
                    <Player autoplay loop src={config.animation} className="h-full w-full" speed={1} />
                </div>

                <h1 className="mb-4 text-5xl font-bold text-primary md:text-6xl" dangerouslySetInnerHTML={{ __html: config.title }} />

                <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-2xl lg:text-lg">
                    <i className="fas fa-quote-left mr-2 text-secondary/50"></i>
                    {config.description}
                    <i className="fas fa-quote-right ml-2 text-secondary/50"></i>
                </p>

                <div className="mx-auto mb-8 max-w-md rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-center">
                        <div className="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Quick Navigation</h2>
                        <div className="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                    </div>

                    <p className="mb-4 text-gray-600">Don't worry! Let us guide you back to amazing destinations in Pakil.</p>
                </div>

                <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white transition duration-300 hover:bg-[#083ec1]"
                    >
                        <i className="fas fa-home mr-2"></i> Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center rounded-full border border-primary px-6 py-3 text-base font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Go Back
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <p className="mb-3 text-base text-gray-600">Can't find what you need?</p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center text-base font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                    >
                        Contact our support team
                        <svg
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
