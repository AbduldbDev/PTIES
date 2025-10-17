import MapComponent from '@AdminUtils/components/map/MapComponent';
import { usePage } from '@inertiajs/react';
import MarketProduct from '@UserUtils/components/Cards/MarketProduct';
import { useState } from 'react';

type ProductProps = {
    id: number;
    product_id: string;
    shop_id: string;
    product_name: string;
    category: string;
    description: string;
    images: string;
    variants: string;
    status: number;
    is_approved: number;
    created_at: string;
    updated_at: string;
    shop: ShopProps;
};

type ShopProps = {
    shop_id: string;
    business_name: string;
    barangay: string;
    location: string;
    bio: string;
    logo: string;
    owner_name: string;
    owner_contact: string;
    owner_address: string;
    email: string;
    category: string;
    product_description: string;
    product_images: string;
    availability: string;
    facebook_link: string;
    instagram_link: string;
    tiktok_link: string;
    website_link: string;
    other_links: string;
    long: number;
    lat: number;
};

type Variant = {
    name: string;
    price: string;
    description: string;
    image: string;
};

type PageProps = {
    product: ProductProps;
    related: ProductProps[];
};

export default function ProductDetails() {
    const { product, related } = usePage<PageProps>().props;
    const [lat] = useState<number>(Number(product.shop.lat));
    const [lng] = useState<number>(Number(product.shop.long));
    const productImages: string[] = JSON.parse(product.images.replace(/\\\//g, '/'));
    const productVariants: Variant[] = JSON.parse(product.variants.replace(/\\\//g, '/'));

    const prices = productVariants.map((v) => parseFloat(v.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const formattedMin = minPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 });
    const formattedMax = maxPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 });
    const defaultPrice = minPrice === maxPrice ? `₱${formattedMin}` : `₱${formattedMin} - ₱${formattedMax}`;
    const defaultName = product.product_name;

    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const [selectedImage, setSelectedImage] = useState(productVariants[0]?.image || productImages[0]);

    const handleVariantClick = (variant: Variant) => {
        setSelectedImage(variant.image);
        setSelectedVariant(variant);
    };

    return (
        <section className="px-4 py-8 pt-32">
            <div className="container mx-auto max-w-7xl">
                <nav className="mb-2 text-sm lg:mb-6">
                    <ol className="flex flex-wrap items-center">
                        <li className="inline-flex items-center">
                            <a href="/" className="text-gray-500 hover:text-primary">
                                Home
                            </a>
                            <span className="mx-2 text-gray-400">/</span>
                        </li>
                        <li className="inline-flex items-center">
                            <a href="/localmarket" className="text-gray-500 hover:text-primary">
                                Marketplace
                            </a>
                            <span className="mx-2 text-gray-400">/</span>
                        </li>
                        <li className="inline-flex items-center">
                            <span className="text-primary">{product.product_name}</span>
                        </li>
                    </ol>
                </nav>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                    <div className="grid grid-cols-1 gap-8 p-4 md:p-6">
                        <div>
                            <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                                <img
                                    src={selectedImage}
                                    alt={product.product_name}
                                    className="aspect-video w-full object-cover transition duration-300 hover:scale-105"
                                    id="mainImage"
                                />
                            </div>

                            <div className="grid grid-cols-4 gap-2 md:gap-3 lg:grid-cols-8">
                                {productVariants.map((variant, index) => (
                                    <div
                                        key={index}
                                        className={`aspect-square cursor-pointer overflow-hidden rounded-lg border-2 ${
                                            selectedImage === variant.image ? 'border-primary' : 'border-gray-200 hover:border-primary'
                                        }`}
                                        onClick={() => handleVariantClick(variant)}
                                    >
                                        <img src={variant.image} alt={variant.name} className="h-full w-full object-cover" />
                                    </div>
                                ))}

                                {productVariants.length < 4 &&
                                    productImages.slice(0, 4 - productVariants.length).map((image, index) => (
                                        <div
                                            key={`img-${index}`}
                                            className={`aspect-square cursor-pointer overflow-hidden rounded-lg border-2 ${
                                                selectedImage === image ? 'border-primary' : 'border-gray-200 hover:border-primary'
                                            }`}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.product_name} - View ${index + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="mb-4">
                                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-white capitalize">
                                    <i className="fas fa-tag mr-1" />
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-dark mb-4 text-xl font-bold md:text-3xl">
                                {selectedVariant ? `${selectedVariant.name}` : defaultName}
                            </h1>

                            <div className="mb-6">
                                <span className="text-lg font-bold text-primary md:text-2xl">
                                    {selectedVariant ? `₱${parseFloat(selectedVariant.price).toLocaleString('en-PH')}` : defaultPrice}
                                </span>
                                <span className="mt-1 block text-xs text-gray-600 md:text-sm">
                                    {selectedVariant ? selectedVariant.name : 'Prices vary by variants'}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-dark mb-2 text-base font-semibold md:text-lg">Description</h3>
                                <p className="text-sm text-gray-600 md:text-base">
                                    {selectedVariant ? selectedVariant.description : product.description}
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-dark mb-4 text-base font-semibold md:text-lg">Available Variants</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {productVariants.map((variant, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg border p-4 transition-colors duration-200 ${
                                            selectedImage === variant.image ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary'
                                        }`}
                                        onClick={() => handleVariantClick(variant)}
                                    >
                                        <div className="flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className={`h-16 w-16 overflow-hidden rounded-lg border md:h-20 md:w-20 ${
                                                        selectedImage === variant.image ? 'border-primary' : 'border-gray-200'
                                                    }`}
                                                >
                                                    <img src={variant.image} alt={variant.name} className="h-full w-full object-cover" />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-start justify-between">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-dark truncate text-sm font-semibold md:text-base">{variant.name}</h4>
                                                        <p className="mt-1 line-clamp-2 text-xs text-gray-600 md:text-sm">{variant.description}</p>
                                                    </div>
                                                    <span className="ml-2 flex-shrink-0 text-sm font-bold text-primary md:text-base">
                                                        ₱{parseFloat(variant.price).toLocaleString('en-PH')}
                                                    </span>
                                                </div>
                                                <div className="mt-2 flex items-center text-xs text-gray-500 md:text-sm">
                                                    <i className="fa-regular fa-clock mr-1" />
                                                    <span>Available In Shop</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-primary/10 md:h-20 md:w-20">
                                    <img src={product.shop.logo} alt={product.shop.business_name} />
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-dark text-base font-semibold md:text-lg">{product.shop.business_name}</h3>

                                <p className="mt-2 text-sm text-gray-600 md:text-base">{product.shop.bio}</p>
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
                                            <p className="text-dark text-sm font-medium md:text-base">{product.shop.owner_name}</p>
                                            <p className="text-xs text-gray-600 md:text-sm">Shop Owner</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="mb-2 text-xs font-semibold text-gray-500 md:text-sm">Contact Methods</h4>
                                    <div className="space-y-2 md:space-y-3">
                                        {/* Phone */}
                                        <div className="flex items-center">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                <i className="fas fa-phone text-sm text-primary md:text-base" />
                                            </div>
                                            <div>
                                                <p className="text-dark text-sm font-medium md:text-base">Phone</p>
                                                <p className="text-xs text-gray-600 md:text-sm">{product.shop.owner_contact}</p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 md:h-10 md:w-10">
                                                <i className="fas fa-envelope text-sm text-primary md:text-base" />
                                            </div>
                                            <div>
                                                <p className="text-dark text-sm font-medium md:text-base">Email</p>
                                                <p className="text-xs text-gray-600 md:text-sm">{product.shop.email}</p>
                                            </div>
                                        </div>

                                        {/* Facebook name */}
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

                                    {/* Social Links */}
                                    <h4 className="mt-4 mb-2 text-xs font-semibold text-gray-500 md:text-sm">Social Links</h4>
                                    <div className="flex items-center gap-3 md:gap-4">
                                        {product.shop.facebook_link && (
                                            <a
                                                href={product.shop.facebook_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white md:h-10 md:w-10"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        )}
                                        {product.shop.instagram_link && (
                                            <a
                                                href={product.shop.instagram_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white md:h-10 md:w-10"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        )}
                                        {product.shop.tiktok_link && (
                                            <a
                                                href={product.shop.tiktok_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white md:h-10 md:w-10"
                                            >
                                                <i className="fab fa-tiktok" />
                                            </a>
                                        )}
                                        {product.shop.website_link && (
                                            <a
                                                href={product.shop.website_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary hover:text-white md:h-10 md:w-10"
                                            >
                                                <i className="fas fa-globe" />
                                            </a>
                                        )}
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
                                            {product.shop.location}, {product.shop.barangay}, Pakil Laguna
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center rounded-l bg-gray-100">
                                    <MapComponent initialLat={lat} initialLng={lng} />
                                </div>

                                <div className="mt-3 flex gap-2 md:mt-4 md:gap-3">
                                    <a
                                        href={`tel:${product.shop.owner_contact}`}
                                        className="flex flex-1 items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-primary/90 md:px-4 md:py-2 md:text-sm"
                                    >
                                        <i className="fas fa-phone mr-1 md:mr-2" />
                                        Call Now
                                    </a>

                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center rounded-lg bg-accent px-3 py-2 text-xs font-medium text-white transition duration-300 hover:bg-accent/90 md:px-4 md:py-2 md:text-sm"
                                    >
                                        <i className="fas fa-directions mr-1 md:mr-2" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-dark text-2xl font-bold">Related Products</h2>
                        <a href="/localmarket" className="flex items-center font-medium text-primary hover:text-primary/80">
                            View All <i className="fas fa-arrow-right ml-1" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {related.map((item, index) => (
                            <MarketProduct key={index} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
