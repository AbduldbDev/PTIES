import { Player } from '@lottiefiles/react-lottie-player';

const NotFoundPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 font-sans">
            {/* Animated Lottie component */}
            <div className="mb-8 w-full max-w-md md:max-w-lg">
                <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_ghfpce1h.json" style={{ height: '100%', width: '100%' }} />
            </div>

            {/* Error message */}
            <div className="mb-8 max-w-2xl text-center">
                <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">404 - Page Not Found</h1>
                <p className="mb-6 text-xl text-gray-600">
                    It seems you've wandered off the beaten path. The page you're looking for doesn't exist or has moved.
                </p>
                <p className="text-lg text-gray-500">Don't worry though - every journey has its detours! Let us help you find your way back.</p>
            </div>

            {/* Action buttons */}
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
                <button className="flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-md transition duration-300 hover:bg-[#083ec1] hover:shadow-lg">
                    <i className="fas fa-home mr-2"></i> Return Home
                </button>
                <button className="flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-base font-medium text-white shadow-md transition duration-300 hover:bg-[#e58c08] hover:shadow-lg">
                    <i className="fas fa-compass mr-2"></i> Explore Destinations
                </button>
                <button className="flex items-center justify-center rounded-full border border-primary px-6 py-3 text-base font-medium text-primary transition duration-300 hover:bg-primary hover:text-white">
                    <i className="fas fa-arrow-left mr-2"></i> Go Back
                </button>
            </div>

            {/* Additional tourism content */}
            <div className="mb-8 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-primary">Popular Destinations</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                        { name: 'Beach Getaways', icon: 'umbrella-beach' },
                        { name: 'Mountain Trekking', icon: 'mountain' },
                        { name: 'Cultural Tours', icon: 'landmark' },
                    ].map((destination, index) => (
                        <div key={index} className="cursor-pointer rounded-xl bg-blue-50 p-4 text-center transition duration-300 hover:bg-blue-100">
                            <i className={`fas fa-${destination.icon} mb-2 text-2xl text-secondary`}></i>
                            <p className="font-medium text-primary">{destination.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Search bar */}
            <div className="mb-12 w-full max-w-md">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for destinations, activities..."
                        className="w-full rounded-full border border-gray-300 px-6 py-4 pr-16 focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <button className="absolute top-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary p-2 text-white hover:bg-[#083ec1]">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
