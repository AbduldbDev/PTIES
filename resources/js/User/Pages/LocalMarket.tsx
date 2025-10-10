export default function LocalMarket() {
    return (
        <>
            <section className="px-4 py-12 pt-32">
                <div className="container mx-auto">
                    {/* Page Header */}
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex items-center">
                            <div className="mr-3 h-1 w-8 rounded-full bg-secondary" />
                            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">LOCAL MARKET</h2>
                            <div className="ml-3 h-1 w-8 rounded-full bg-secondary" />
                        </div>
                        <h3 className="text-dark mb-4 text-3xl font-bold md:text-4xl">
                            Discover <span className="text-primary">Local Products</span>
                        </h3>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Support local artisans and businesses with authentic Pakil products and crafts
                        </p>
                    </div>
                    {/* Search and Filter */}
                    <div className="mb-8">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="relative max-w-2xl flex-1">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full rounded-full border border-gray-300 py-3 pr-4 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                />
                                <i className="fas fa-search absolute top-3.5 left-3 text-gray-400" />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 md:overflow-visible">
                                <button className="rounded-full bg-primary px-4 py-2 text-sm whitespace-nowrap text-white">All Products</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">
                                    Handicrafts
                                </button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Food Items</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Textiles</button>
                                <button className="rounded-full bg-gray-100 px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-200">Souvenirs</button>
                            </div>
                        </div>
                    </div>
                    {/* Price Range Filter */}
                    <div className="mb-8e rounded-xl p-6">
                        <h4 className="text-dark mb-4 flex items-center gap-2 text-lg font-semibold">
                            <i className="fas fa-filter text-sm text-primary" />
                            Price Range
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex transform items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                                <i className="fas fa-layer-group text-sm" />
                                All Prices
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                Under ₱100
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                ₱100 - ₱500
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                ₱500 - ₱1000
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                Over ₱1000
                            </button>
                        </div>
                    </div>
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            {/* Background Glow Effect */}
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                {/* Product Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/default/banner/banner.jpg"
                                        alt="Wood Carving"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Category Badge */}
                                <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white">Handicraft</span>
                            </div>
                            {/* Product Details */}
                            <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                                {/* Product Title */}
                                <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">Traditional Wood Carving</h3>
                                {/* Product Description */}
                                <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">
                                    Hand-carved wooden sculpture depicting local cultural motifs
                                </p>
                                {/* Bottom Section - Sticky to bottom */}
                                <div className="mt-auto">
                                    {/* Shop Name and Price */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex max-w-[60%] items-center text-sm text-gray-500">
                                            <i className="fas fa-store mr-1 flex-shrink-0" />
                                            <span className="truncate">Artisan's Corner Long Shop Name Example</span>
                                        </div>
                                        <div className="text-lg font-bold text-primary">₱450</div>
                                    </div>
                                    {/* CTA Button */}
                                    <button className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90">
                                        View Product <i className="fas fa-arrow-right ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            {/* Background Glow Effect */}
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                {/* Product Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/default/banner/banner.jpg"
                                        alt="Wood Carving"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Category Badge */}
                                <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white">Handicraft</span>
                            </div>
                            {/* Product Details */}
                            <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                                {/* Product Title */}
                                <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">Traditional Wood Carving</h3>
                                {/* Product Description */}
                                <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">
                                    Hand-carved wooden sculpture depicting local cultural motifs
                                </p>
                                {/* Bottom Section - Sticky to bottom */}
                                <div className="mt-auto">
                                    {/* Shop Name and Price */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex max-w-[60%] items-center text-sm text-gray-500">
                                            <i className="fas fa-store mr-1 flex-shrink-0" />
                                            <span className="truncate">Artisan's Corner Long Shop Name Example</span>
                                        </div>
                                        <div className="text-lg font-bold text-primary">₱450</div>
                                    </div>
                                    {/* CTA Button */}
                                    <button className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90">
                                        View Product <i className="fas fa-arrow-right ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
                            {/* Background Glow Effect */}
                            <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />
                            <div className="relative">
                                {/* Product Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="/default/banner/banner.jpg"
                                        alt="Wood Carving"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Category Badge */}
                                <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white">Handicraft</span>
                            </div>
                            {/* Product Details */}
                            <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                                {/* Product Title */}
                                <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">Traditional Wood Carving</h3>
                                {/* Product Description */}
                                <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">
                                    Hand-carved wooden sculpture depicting local cultural motifs asd asd asd as das das das das dasd asd asd
                                </p>
                                {/* Bottom Section - Sticky to bottom */}
                                <div className="mt-auto">
                                    {/* Shop Name and Price */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex max-w-[60%] items-center text-sm text-gray-500">
                                            <i className="fas fa-store mr-1 flex-shrink-0" />
                                            <span className="truncate">Artisan's Corner Long Shop Name Example</span>
                                        </div>
                                        <div className="text-lg font-bold text-primary">₱450</div>
                                    </div>
                                    {/* CTA Button */}
                                    <button className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90">
                                        View Product <i className="fas fa-arrow-right ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                <i className="fas fa-chevron-left" />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">1</button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                2
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                3
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                <i className="fas fa-chevron-right" />
                            </button>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}
