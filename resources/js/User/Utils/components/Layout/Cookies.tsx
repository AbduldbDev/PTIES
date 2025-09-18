export default function Cookies() {
    return (
        <div className="lg:bg-opacity-95 fixed right-0 bottom-5 left-0 z-50 bg-white/70 p-4 backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <img src="/User/Layout/Logo.png" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-[55px] md:w-[55px]" />
                            <img src="/User/Layout/Seal.png" alt="Seal" className="h-9 w-9 sm:h-10 sm:w-10 md:h-[50px] md:w-[50px]" />
                        </a>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xs text-gray-700 sm:text-sm">
                            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                            <a href="#" className="ml-1 text-primary hover:underline">
                                Learn more
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-shrink-0 gap-2">
                        {/* <button className="rounded-full bg-gray-200 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-300 sm:text-sm">
                            Preferences
                        </button> */}
                        <button className="rounded-full border border-primary bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:text-sm">
                            Decline
                        </button>
                        <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/70 sm:text-sm">
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
