import { router } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

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

type Variant = {
    name: string;
    price: string;
    description: string;
    image: string;
};

type ShopProps = {
    business_name: string;
};

interface Props {
    product: ProductProps;
    index: number;
}

export default function MarketProduct({ product, index }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // ✅ Parse images
    const images: string[] = (() => {
        try {
            if (Array.isArray(product.images)) return product.images;
            return JSON.parse(product.images as unknown as string) || [];
        } catch {
            return [];
        }
    })();

    // ✅ Parse variants safely
    const productVariants: Variant[] = (() => {
        try {
            const parsed = JSON.parse(product.variants.replace(/\\\//g, '/'));
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    })();

    // ✅ Get price range
    const getPriceRange = () => {
        const prices = productVariants.map((v) => parseFloat(String(v.price).replace(/[^\d.]/g, ''))).filter((p) => !isNaN(p));

        if (prices.length === 0) return null;

        const min = Math.min(...prices);
        const max = Math.max(...prices);

        return { min, max, hasRange: min !== max };
    };

    const priceRange = getPriceRange();
    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (isHovered && hasMultipleImages) {
            imageIntervalRef.current = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 3000);
        } else {
            if (imageIntervalRef.current) {
                clearInterval(imageIntervalRef.current);
            }
        }

        return () => {
            if (imageIntervalRef.current) {
                clearInterval(imageIntervalRef.current);
            }
        };
    }, [isHovered, hasMultipleImages, images.length]);

    const handleView = () => {
        router.get(`/localmarket/product/${product.product_id}`);
    };

    const currentImage = images.length > 0 ? images[currentImageIndex] : '/User/Images/church.jpg';

    return (
        <div
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0);
            }}
        >
            {/* Gradient overlay effect */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image section */}
            <div className="relative overflow-hidden">
                <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-50">
                    <img
                        src={currentImage}
                        alt={product.product_name}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                    />

                    {/* Image navigation dots */}
                    {hasMultipleImages && (
                        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-1.5">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex(idx);
                                    }}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                        idx === currentImageIndex ? 'w-6 bg-white shadow-lg' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                    aria-label={`View image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {hasMultipleImages && (
                        <div className="absolute top-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white backdrop-blur-sm">
                            <i className="fas fa-images mr-1" />
                            {images.length}
                        </div>
                    )}
                </div>

                <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-white capitalize shadow-lg">
                        {product.category}
                    </span>
                </div>
            </div>

            <div className="relative flex flex-1 flex-col p-5">
                <h3 className="text-dark mb-2 line-clamp-2 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {product.product_name}
                </h3>

                <div className="mb-3 flex items-center">
                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <i className="fas fa-store text-sm text-gray-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-700">{product.shop.business_name}</p>
                        <p className="text-xs text-gray-500">Verified Seller</p>
                    </div>
                </div>

                <div className="mb-4 flex-1">
                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">{product.description}</p>
                </div>

                {productVariants.length > 0 && (
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                        <i className="fas fa-layer-group mr-2" />
                        <span>
                            {productVariants.length} variant{productVariants.length > 1 ? 's' : ''}
                        </span>
                    </div>
                )}

                <div className="relative mt-auto border-t border-gray-100 pt-4">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex min-h-full flex-col">
                            {priceRange ? (
                                <div>
                                    <div className="flex items-baseline">
                                        <span className="text-2xl font-bold text-primary">₱{priceRange.min.toLocaleString()}</span>
                                        {priceRange.hasRange && (
                                            <>
                                                <span className="mx-2 text-gray-300">-</span>
                                                <span className="text-lg font-semibold text-gray-600">₱{priceRange.max.toLocaleString()}</span>
                                            </>
                                        )}
                                    </div>
                                    {priceRange?.hasRange && <p className="absolute text-xs text-gray-500">Price varies by variant</p>}
                                </div>
                            ) : (
                                <div className="flex h-full items-center">
                                    <span className="text-lg font-semibold text-gray-400">Price on request</span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <span className="text-xs font-medium text-green-600">In Stock</span>
                        </div>
                    </div>

                    <button
                        onClick={handleView}
                        className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow active:scale-95"
                        aria-label={`View ${product.product_name} details`}
                    >
                        <span className="flex items-center">
                            View Details
                            <i className="fas fa-arrow-right ml-2 text-xs transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Hover effect line */}
            <div className="absolute right-0 bottom-0 left-0 h-0.5 scale-x-0 transform bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
        </div>
    );
}
