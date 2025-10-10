export default function RegistrationForm() {
    return (
        <>
            <main className="pt-28 pb-12 sm:pt-32 sm:pb-16">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="mb-8 text-center sm:mb-12">
                        <div className="mb-3 inline-flex items-center sm:mb-4">
                            <div className="mr-2 h-1 w-6 rounded-full bg-secondary sm:mr-3 sm:w-8" />
                            <h2 className="text-xs font-semibold tracking-wider text-primary uppercase sm:text-sm">Join Our Marketplace</h2>
                            <div className="ml-2 h-1 w-6 rounded-full bg-secondary sm:ml-3 sm:w-8" />
                        </div>
                        <h1 className="text-dark mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                            Seller <span className="text-primary">Registration</span>
                        </h1>
                        <p className="mx-auto max-w-3xl px-2 text-sm text-gray-600 sm:text-lg">
                            Showcase your products to the community and grow your business with Pakil Marketplace
                        </p>
                    </div>

                    <div className="mx-auto mb-8 max-w-4xl px-2 sm:mb-12">
                        <div className="flex items-center justify-between">
                            <div className="step-indicator active flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base">
                                1
                            </div>
                            <div className="mx-2 h-1 flex-1 bg-gray-200 sm:mx-4" />
                            <div className="step-indicator flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600 sm:h-10 sm:w-10 sm:text-base">
                                2
                            </div>
                            <div className="mx-2 h-1 flex-1 bg-gray-200 sm:mx-4" />
                            <div className="step-indicator flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600 sm:h-10 sm:w-10 sm:text-base">
                                3
                            </div>
                            <div className="mx-2 h-1 flex-1 bg-gray-200 sm:mx-4" />
                            <div className="step-indicator flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600 sm:h-10 sm:w-10 sm:text-base">
                                4
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs sm:text-sm">
                            <div className="font-medium text-primary">Seller Info</div>
                            <div className="text-gray-500">Products</div>
                            <div className="text-gray-500">Contact</div>
                            <div className="text-gray-500">Permits</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-md">
                        <form id="seller-registration-form" className="p-4 sm:p-6 md:p-8">
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-store mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Seller Information
                                </h2>
                                <div className="mobile-grid-cols-1 mobile-gap-3 grid sm:gap-4 md:grid-cols-2 md:gap-6">
                                    <div className="md:col-span-2">
                                        <label htmlFor="business-name" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Business Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="business-name"
                                            name="business-name"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="barangay" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Barangay *
                                        </label>
                                        <select
                                            id="barangay"
                                            name="barangay"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        >
                                            <option value="">Select Barangay</option>
                                            <option value="Baño">Baño</option>
                                            <option value="Burgos">Burgos</option>
                                            <option value="Gonzales">Gonzales</option>
                                            <option value="Rizal">Rizal</option>
                                            <option value="Taft">Taft</option>
                                            <option value="Tavera">Tavera</option>
                                            <option value="Saray">Saray</option>
                                            <option value="Banilan">Banilan</option>
                                            <option value="Casa Real">Casa Real</option>
                                            <option value="Casinsin">Casinsin</option>
                                            <option value="Dorado">Dorado</option>
                                            <option value="Kabulusan">Kabulusan</option>
                                            <option value="Matikiw">Matikiw</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Specific Location *
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                            placeholder="Street, Purok, or Landmark"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="bio" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Short Bio / About the Seller *
                                        </label>
                                        <textarea
                                            id="bio"
                                            name="bio"
                                            rows={3}
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                            placeholder="Brief description of your business (1-2 sentences)"
                                            defaultValue={''}
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">Business Logo</label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="logo"
                                                className="mobile-rounded-lg flex h-24 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-cloud-upload-alt mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
                                                </div>
                                                <input id="logo" name="logo" type="file" className="hidden" accept="image/*" />
                                            </label>
                                        </div>
                                        <div id="logo-preview" className="mt-2 hidden">
                                            <p className="text-xs text-gray-600 sm:text-sm">Preview:</p>
                                            <img id="logo-preview-img" className="mt-1 h-16 w-16 rounded border object-contain sm:h-20 sm:w-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-user mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Contact Person
                                </h2>
                                <div className="mobile-grid-cols-1 mobile-gap-3 grid sm:gap-4 md:grid-cols-2 md:gap-6">
                                    <div>
                                        <label htmlFor="owner-name" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Owner Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="owner-name"
                                            name="owner-name"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="owner-contact" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Contact Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="owner-contact"
                                            name="owner-contact"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="owner-address" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Owner Address *
                                        </label>
                                        <input
                                            type="text"
                                            id="owner-address"
                                            name="owner-address"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="email" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-box mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Product Information
                                </h2>
                                <div className="mobile-grid-cols-1 mobile-gap-3 grid sm:gap-4 md:gap-6">
                                    <div>
                                        <label className="mobile-text-sm mb-2 block text-sm font-medium text-gray-700">Products Category *</label>
                                        <div className="mobile-gap-2 grid grid-cols-2 gap-1 sm:gap-3 md:grid-cols-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-crafts"
                                                    name="category"
                                                    defaultValue="Crafts"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-crafts" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Crafts
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-clothing"
                                                    name="category"
                                                    defaultValue="Clothing"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-clothing" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Clothing
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-food"
                                                    name="category"
                                                    defaultValue="Food"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-food" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Food
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-art"
                                                    name="category"
                                                    defaultValue="Art"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-art" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Art
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-home"
                                                    name="category"
                                                    defaultValue="Home Decor"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-home" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Home Decor
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-jewelry"
                                                    name="category"
                                                    defaultValue="Jewelry"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-jewelry" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Jewelry
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-beauty"
                                                    name="category"
                                                    defaultValue="Beauty"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-beauty" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Beauty
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="category-other"
                                                    name="category"
                                                    defaultValue="Other"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="category-other" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="product-description" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Product Description *
                                        </label>
                                        <textarea
                                            id="product-description"
                                            name="product-description"
                                            rows={4}
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                            placeholder="Describe your products, materials used, unique features, etc."
                                            defaultValue={''}
                                        />
                                    </div>

                                    <div>
                                        <label className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">Sample Product Images *</label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="product-images"
                                                className="mobile-rounded-lg flex h-24 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-images mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 10MB each)</p>
                                                </div>
                                                <input id="product-images" name="product-images" type="file" className="hidden" accept="image/*" />
                                            </label>
                                        </div>
                                        <div id="image-previews" className="mobile-gap-2 mt-4 grid grid-cols-2 sm:gap-4 md:grid-cols-4" />
                                    </div>

                                    <div>
                                        <label htmlFor="price-range" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Price Range (Optional)
                                        </label>
                                        <div className="flex space-x-2 sm:space-x-4">
                                            <div className="flex-1">
                                                <label htmlFor="min-price" className="mb-1 block text-xs text-gray-500">
                                                    Minimum Price (₱)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="min-price"
                                                    name="min-price"
                                                    className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label htmlFor="max-price" className="mb-1 block text-xs text-gray-500">
                                                    Maximum Price (₱)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="max-price"
                                                    name="max-price"
                                                    className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mobile-text-sm mb-2 block text-sm font-medium text-gray-700">Availability *</label>
                                        <div className="mobile-grid-cols-1 mobile-gap-2 grid gap-2 sm:gap-3 md:grid-cols-3">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="availability-display"
                                                    name="availability"
                                                    defaultValue="For Display"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="availability-display" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    For Display
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="availability-order"
                                                    name="availability"
                                                    defaultValue="Made to Order"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="availability-order" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Made to Order
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="availability-both"
                                                    name="availability"
                                                    defaultValue="Both"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="availability-both" className="ml-2 text-xs text-gray-700 sm:text-sm">
                                                    Both
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-link mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Contact &amp; Links
                                </h2>
                                <div className="mobile-grid-cols-1 mobile-gap-3 grid sm:gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="facebook-link" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Facebook Page/Profile Link
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                <i className="fab fa-facebook text-blue-600" />
                                            </span>
                                            <input
                                                type="url"
                                                id="facebook-link"
                                                name="facebook-link"
                                                className="mobile-px-3 mobile-py-2 mobile-text-sm block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://facebook.com/yourpage"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="instagram-link" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Instagram Link
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                <i className="fab fa-instagram text-pink-500" />
                                            </span>
                                            <input
                                                type="url"
                                                id="instagram-link"
                                                name="instagram-link"
                                                className="mobile-px-3 mobile-py-2 mobile-text-sm block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://instagram.com/yourprofile"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="tiktok-link" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            TikTok Link
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                <i className="fab fa-tiktok" />
                                            </span>
                                            <input
                                                type="url"
                                                id="tiktok-link"
                                                name="tiktok-link"
                                                className="mobile-px-3 mobile-py-2 mobile-text-sm block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://tiktok.com/@yourprofile"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="website-link" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Website (Optional)
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                <i className="fas fa-globe" />
                                            </span>
                                            <input
                                                type="url"
                                                id="website-link"
                                                name="website-link"
                                                className="mobile-px-3 mobile-py-2 mobile-text-sm block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="other-links" className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Other Links (Optional)
                                        </label>
                                        <textarea
                                            id="other-links"
                                            name="other-links"
                                            rows={2}
                                            className="mobile-px-3 mobile-py-2 mobile-rounded-lg mobile-text-sm w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                            placeholder="Add any other relevant links (one per line)"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-file-alt mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Business Permits &amp; Documents
                                </h2>
                                <div className="mobile-grid-cols-1 mobile-gap-3 grid sm:gap-4 md:gap-6">
                                    <div>
                                        <label className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">Business Permit *</label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="business-permit"
                                                className="mobile-rounded-lg flex h-24 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-file-pdf mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PDF, JPG, PNG (MAX. 10MB)</p>
                                                </div>
                                                <input
                                                    id="business-permit"
                                                    name="business-permit"
                                                    type="file"
                                                    className="hidden"
                                                    accept=".pdf,.jpg,.jpeg,.png"
                                                />
                                            </label>
                                        </div>
                                        <div id="permit-preview" className="mt-2 hidden">
                                            <p className="text-xs text-gray-600 sm:text-sm">Preview:</p>
                                            <div className="mt-1 flex items-center">
                                                <i className="fas fa-file-pdf mr-2 text-red-500" />
                                                <span id="permit-file-name" className="text-xs sm:text-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mobile-text-sm mb-1 block text-sm font-medium text-gray-700">
                                            Additional Documents (Optional)
                                        </label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="additional-docs"
                                                className="mobile-rounded-lg flex h-24 w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-file-archive mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PDF, JPG, PNG, ZIP (MAX. 20MB)</p>
                                                </div>
                                                <input
                                                    id="additional-docs"
                                                    name="additional-docs"
                                                    type="file"
                                                    className="hidden"
                                                    accept=".pdf,.jpg,.jpeg,.png,.zip"
                                                />
                                            </label>
                                        </div>
                                        <div id="additional-docs-list" className="mt-2" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-between sm:pt-6 md:flex-row">
                                <button
                                    type="button"
                                    className="mobile-px-4 mobile-py-2 mobile-rounded-lg mobile-text-sm mb-3 w-full border border-gray-300 font-medium text-gray-700 transition duration-300 hover:bg-gray-50 sm:rounded-lg sm:px-6 sm:py-3 md:mb-0 md:w-auto"
                                >
                                    <i className="fas fa-arrow-left mr-2" /> Back
                                </button>
                                <button
                                    type="submit"
                                    className="mobile-px-4 mobile-py-2 mobile-text-sm flex w-full items-center justify-center bg-primary text-sm font-medium text-white transition duration-300 hover:bg-primary/90 sm:rounded-full sm:px-8 sm:py-3 md:w-auto"
                                >
                                    Submit Application <i className="fas fa-paper-plane ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
