import { Head, Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface GeneralErrorProps {
    status: number;
}

const GeneralError: InertiaPage<GeneralErrorProps> = ({ status }) => {
    const errorMessages = {
        500: 'Internal Server Error',
        503: 'Service Unavailable',
        403: 'Forbidden',
        401: 'Unauthorized',
    };

    const message = errorMessages[status as keyof typeof errorMessages] || 'Something went wrong';

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
            <Head title={message} />
            <div className="mb-8 max-w-2xl text-center">
                <h1 className="mb-4 text-9xl font-bold text-primary">{status}</h1>
                <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">{message}</h2>
                <p className="mb-6 text-xl text-gray-600">
                    {status === 500 && 'Whoops, something went wrong on our servers.'}
                    {status === 503 && 'Sorry, we are doing some maintenance. Please check back soon.'}
                    {status === 403 && 'Sorry, you are forbidden from accessing this page.'}
                    {status === 401 && 'Please log in to access this page.'}
                </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                    href="/"
                    className="flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-md transition duration-300 hover:bg-[#083ec1]"
                >
                    <i className="fas fa-home mr-2"></i> Return Home
                </Link>
                {status === 401 && (
                    <Link
                        href="/login"
                        className="flex items-center justify-center rounded-full border border-primary px-6 py-3 text-base font-medium text-primary transition duration-300 hover:bg-primary hover:text-white"
                    >
                        <i className="fas fa-sign-in-alt mr-2"></i> Login
                    </Link>
                )}
            </div>
        </div>
    );
};

// ✅ Add layout without TS error
GeneralError.layout = (page: ReactNode) => page;

export default GeneralError;
