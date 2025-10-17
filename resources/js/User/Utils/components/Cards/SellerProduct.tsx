import { router } from '@inertiajs/react';

type ProductProps = {
    id: number;
    product_id: string;
    product_name: string;
    category: string;
    description: string;
    images: string;
    variants: string;
    status?: number; // ✅ Added status field
};

type Variant = {
    name: string;
    price: string;
    description: string;
    image: string;
};

interface Props {
    product: ProductProps;
}

export default function MarketProduct({ product }: Props) {
    // ✅ Parse images
    const images: string[] = Array.isArray(product.images)
        ? product.images
        : (() => {
              try {
                  return JSON.parse(product.images as unknown as string) || [];
              } catch {
                  return [];
              }
          })();

    // ✅ Parse variants safely
    const productVariants: Variant[] = (() => {
        try {
            return JSON.parse(product.variants.replace(/\\\//g, '/')) || [];
        } catch {
            return [];
        }
    })();

    // ✅ Get lowest price
    const getLowestPrice = () => {
        const prices = productVariants.map((v) => parseFloat(String(v.price).replace(/[^\d.]/g, ''))).filter((p) => !isNaN(p));

        return prices.length > 0 ? Math.min(...prices) : null;
    };

    const lowestPrice = getLowestPrice();

    // ✅ Random image for card
    const randomImage = images.length > 0 ? images[Math.floor(Math.random() * images.length)] : '/User/Images/church.jpg';

    const handleView = () => {
        router.get(`/seller/product/edit/${product.product_id}`);
    };

    // ✅ Check if product is inactive (status = 0)
    const isInactive = product.status === 0;

    return (
        <div
            className={`group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-lg ${isInactive ? 'opacity-70' : ''}`}
        >
            {/* Inactive Overlay */}
            {isInactive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray-800/60">
                    <div className="flex flex-col items-center">
                        <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600/80">
                            <i className="fas fa-eye-slash text-2xl text-white" />
                        </div>
                        <span className="text-lg font-semibold text-white">Pending</span>
                    </div>
                </div>
            )}

            <div className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100" />

            {/* Image */}
            <div className="relative">
                <div className="h-48 overflow-hidden">
                    <img
                        src={randomImage}
                        alt={product.product_name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-1 text-xs text-white capitalize">{product.category}</span>
            </div>

            {/* Details */}
            <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                <h3 className="text-dark mb-2 line-clamp-2 text-lg font-bold">{product.product_name}</h3>
                <p className="mb-3 line-clamp-2 flex-grow text-sm text-gray-600">{product.description}</p>
                <div className="mt-auto">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="text-lg font-bold text-primary">{lowestPrice !== null ? `₱${lowestPrice.toLocaleString()}` : '—'}</div>
                    </div>

                    <button
                        aria-label="Edit product"
                        onClick={handleView}
                        className="flex w-full transform items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/90"
                    >
                        Edit Product <i className="fas fa-edit ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
