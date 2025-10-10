export default function ProductDetails() {
    return (
        <>
            <section className="px-4 py-8 pt-32">
                <div className="container mx-auto max-w-7xl">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="grid grid-cols-1 gap-8 p-4 md:p-6">
                            <div>
                                <div className="mb-4 overflow-hidden rounded-xl">
                                    <img
                                        src="/default/banner/banner.jpg"
                                        alt="Traditional Wood Carving"
                                        className="h-64 w-full object-cover transition duration-300 hover:scale-105 md:h-80"
                                        id="mainImage"
                                    />
                                </div>

                                <div className="grid grid-cols-4 gap-2 md:gap-3">
                                    <div className="cursor-pointer overflow-hidden rounded-lg border-2 border-primary">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Traditional Wood Carving - Front View"
                                            className="h-16 w-full object-cover md:h-20"
                                        />
                                    </div>
                                    <div className="cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-primary">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Traditional Wood Carving - Side View"
                                            className="h-16 w-full object-cover md:h-20"
                                        />
                                    </div>
                                    <div className="cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-primary">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Traditional Wood Carving - Detail View"
                                            className="h-16 w-full object-cover md:h-20"
                                        />
                                    </div>
                                    <div className="cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-primary">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Traditional Wood Carving - Back View"
                                            className="h-16 w-full object-cover md:h-20"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-white">
                                        <i className="fas fa-tag mr-1" />
                                        Handicraft
                                    </span>
                                </div>

                                <h1 className="text-dark mb-4 text-xl font-bold md:text-3xl">Traditional Wood Carving</h1>

                                <div className="mb-6">
                                    <span className="text-lg font-bold text-primary md:text-2xl">Starting from ₱350</span>
                                    <span className="mt-1 block text-xs text-gray-600 md:text-sm">Prices vary by size and complexity</span>
                                </div>

                                <div>
                                    <h3 className="text-dark mb-2 text-base font-semibold md:text-lg">Description</h3>
                                    <p className="text-sm text-gray-600 md:text-base">
                                        This exquisite hand-carved wooden sculpture depicts traditional cultural motifs from Pakil. Crafted by skilled
                                        local artisans using sustainably sourced narra wood, each piece is unique and tells a story of our rich
                                        heritage.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-dark mb-4 text-base font-semibold md:text-lg">Available Sizes</h3>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:border-primary">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 md:h-20 md:w-20">
                                                    <img
                                                        src="/default/banner/banner.jpg"
                                                        alt="Small Wood Carving"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-start justify-between">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-dark truncate text-sm font-semibold md:text-base">Small (8 inches)</h4>
                                                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-sm">
                                                            Perfect for desk decoration
                                                        </p>
                                                    </div>
                                                    <span className="ml-2 flex-shrink-0 text-sm font-bold text-primary md:text-base">₱350</span>
                                                </div>
                                                <div className="mt-2 flex items-center text-xs text-gray-500 md:text-sm">
                                                    <i className="fa-regular fa-clock mr-1" />
                                                    <span>Available In Shop</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:border-primary">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 md:h-20 md:w-20">
                                                    <img
                                                        src="/default/banner/banner.jpg"
                                                        alt="Medium Wood Carving"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-start justify-between">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-dark truncate text-sm font-semibold md:text-base">Medium (12 inches)</h4>
                                                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-sm">Ideal for shelf display</p>
                                                    </div>
                                                    <span className="ml-2 flex-shrink-0 text-sm font-bold text-primary md:text-base">₱450</span>
                                                </div>
                                                <div className="mt-2 flex items-center text-xs text-gray-500 md:text-sm">
                                                    <i className="fa-regular fa-clock mr-1" />
                                                    <span>4-5 days crafting time</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-primary bg-primary/5 p-4 transition-colors duration-200">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="h-16 w-16 overflow-hidden rounded-lg border border-primary md:h-20 md:w-20">
                                                    <img
                                                        src="/default/banner/banner.jpg"
                                                        alt="Large Wood Carving"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-start justify-between">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-dark truncate text-sm font-semibold md:text-base">Large (16 inches)</h4>
                                                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-sm">
                                                            Statement piece for living areas
                                                        </p>
                                                    </div>
                                                    <div className="ml-2 flex-shrink-0 text-right">
                                                        <span className="text-sm font-bold text-primary md:text-base">₱550</span>
                                                        <span className="block text-xs text-gray-500 line-through">₱650</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex items-center text-xs text-gray-500 md:text-sm">
                                                    <i className="fa-regular fa-clock mr-1" />
                                                    <span>6-7 days crafting time</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-gray-200 p-4 transition-colors duration-200 hover:border-primary">
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100 md:h-20 md:w-20">
                                                    <i className="fas fa-palette text-xl text-gray-400" />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-start justify-between">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-dark truncate text-sm font-semibold md:text-base">Custom Size</h4>
                                                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-sm">
                                                            Tailored to your specific requirements
                                                        </p>
                                                    </div>
                                                    <span className="ml-2 flex-shrink-0 text-sm font-bold text-primary md:text-base">₱800+</span>
                                                </div>
                                                <div className="mt-2 flex items-center text-xs text-gray-500 md:text-sm">
                                                    <i className="fa-regular fa-clock mr-1" />
                                                    <span>Contact for timeline</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md md:p-6">
                            <h2 className="text-dark mb-4 flex items-center text-lg font-bold md:text-xl">
                                <i className="fas fa-store mr-2 text-primary" />
                                Shop Details
                            </h2>
                            <div className="flex items-start">
                                <div className="mr-4 flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-primary/10 md:h-16 md:w-16">
                                        <i className="fas fa-store text-lg text-primary md:text-2xl" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-dark text-base font-semibold md:text-lg">Artisan's Corner</h3>

                                    <p className="mt-2 text-sm text-gray-600 md:text-base">
                                        Family-owned shop specializing in traditional wood carvings and handicrafts. We've been serving the Pakil
                                        community for over 20 years, preserving our cultural heritage through craftsmanship.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 border-t border-gray-200 pt-4">
                                <button className="flex w-full items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-200 md:text-base">
                                    <i className="fas fa-store mr-2" />
                                    Visit Shop
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md md:p-6">
                            <h2 className="text-dark mb-4 flex items-center text-lg font-bold md:text-xl">
                                <i className="fas fa-map-marker-alt mr-2 text-sm text-primary md:text-base" />
                                Contact &amp; Location
                            </h2>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                <div>
                                    <h3 className="text-dark mb-3 text-base font-semibold md:mb-4 md:text-lg">Contact Information</h3>

                                    <div className="mb-4">
                                        <h4 className="mb-2 text-xs font-semibold text-gray-500 md:text-sm">Contact Person</h4>
                                        <div className="flex items-center">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                <i className="fas fa-user text-sm text-primary md:text-base" />
                                            </div>
                                            <div>
                                                <p className="text-dark text-sm font-medium md:text-base">Juan Dela Cruz</p>
                                                <p className="text-xs text-gray-600 md:text-sm">Shop Owner</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-2 text-xs font-semibold text-gray-500 md:text-sm">Contact Methods</h4>
                                        <div className="space-y-2 md:space-y-3">
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                    <i className="fas fa-phone text-sm text-primary md:text-base" />
                                                </div>
                                                <div>
                                                    <p className="text-dark text-sm font-medium md:text-base">Phone</p>
                                                    <p className="text-xs text-gray-600 md:text-sm">+63 912 345 6789</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                    <i className="fas fa-envelope text-sm text-primary md:text-base" />
                                                </div>
                                                <div>
                                                    <p className="text-dark text-sm font-medium md:text-base">Email</p>
                                                    <p className="text-xs text-gray-600 md:text-sm">artisans.corner@example.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                    <i className="fab fa-facebook text-sm text-primary md:text-base" />
                                                </div>
                                                <div>
                                                    <p className="text-dark text-sm font-medium md:text-base">Facebook</p>
                                                    <p className="text-xs text-gray-600 md:text-sm">Artisan's Corner Pakil</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-dark mb-3 text-base font-semibold md:mb-4 md:text-lg">Location</h3>

                                    <div className="mb-4 md:mb-6">
                                        <h4 className="mb-2 text-xs font-semibold text-gray-500 md:text-sm">Address</h4>
                                        <div className="flex">
                                            <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-sm text-primary md:mt-1 md:mr-3 md:text-base" />
                                            <p className="text-sm text-gray-600 md:text-base">
                                                123 Artisan Street, Barangay San Antonio
                                                <br />
                                                Pakil, Laguna 4016
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-32 items-center justify-center rounded-lg bg-gray-100 md:h-48">
                                        <div className="text-center text-gray-500">
                                            <i className="fas fa-map mb-1 text-xl md:mb-2 md:text-3xl" />
                                            <p className="text-xs md:text-sm">Interactive Map</p>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex gap-2 md:mt-4 md:gap-3">
                                        <button className="flex flex-1 items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-primary/90 md:px-4 md:py-2 md:text-sm">
                                            <i className="fas fa-phone mr-1 md:mr-2" />
                                            Call Now
                                        </button>
                                        <button className="flex flex-1 items-center justify-center rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-accent/90 md:px-4 md:py-2 md:text-sm">
                                            <i className="fas fa-directions mr-1 md:mr-2" />
                                            Get Directions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-dark text-2xl font-bold">Related Products</h2>
                            <a href="#" className="flex items-center font-medium text-primary hover:text-primary/80">
                                View All <i className="fas fa-arrow-right ml-1" />
                            </a>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Bamboo Basket"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white">Handicraft</span>
                                </div>
                                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                                    <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">Bamboo Weaving Basket</h3>
                                    <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">
                                        Handwoven bamboo basket for storage and decoration
                                    </p>
                                    <div className="mt-auto">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex max-w-[60%] items-center text-sm text-gray-500">
                                                <i className="fas fa-store mr-1 flex-shrink-0" />
                                                <span className="truncate">Bamboo Crafts</span>
                                            </div>
                                            <div className="text-lg font-bold text-primary">₱320</div>
                                        </div>
                                        <button className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90">
                                            View Product <i className="fas fa-arrow-right ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                                <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="/default/banner/banner.jpg"
                                            alt="Pottery Vase"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white">Handicraft</span>
                                </div>
                                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                                    <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">Traditional Pottery Vase</h3>
                                    <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">
                                        Handcrafted clay vase with traditional patterns
                                    </p>
                                    <div className="mt-auto">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex max-w-[60%] items-center text-sm text-gray-500">
                                                <i className="fas fa-store mr-1 flex-shrink-0" />
                                                <span className="truncate">Clay Creations</span>
                                            </div>
                                            <div className="text-lg font-bold text-primary">₱580</div>
                                        </div>
                                        <button className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90">
                                            View Product <i className="fas fa-arrow-right ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
