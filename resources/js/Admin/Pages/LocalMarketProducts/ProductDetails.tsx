import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

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
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    product: ProductProps;
};

export default function ProductDisplay() {
    const { flash, errors, product } = usePage<PageProps>().props;
    const form = useForm();

    const parseJsonSafely = (jsonString: string, fallback: any[] = []) => {
        try {
            if (!jsonString) return fallback;
            const parsed = JSON.parse(jsonString);
            return Array.isArray(parsed) ? parsed : fallback;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return fallback;
        }
    };

    const productImages = parseJsonSafely(product.images);
    const productVariants = parseJsonSafely(product.variants);

    // Calculate min and max price from variants
    const calculatePriceRange = () => {
        if (productVariants.length === 0) {
            return { minPrice: 0, maxPrice: 0 };
        }

        const prices = productVariants.map((variant) => parseFloat(variant.price || 0)).filter((price) => !isNaN(price));

        if (prices.length === 0) {
            return { minPrice: 0, maxPrice: 0 };
        }

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        return { minPrice, maxPrice };
    };

    const { minPrice, maxPrice } = calculatePriceRange();

    const formatPrice = (price: string | number) => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(typeof price === 'string' ? parseFloat(price) : price);
    };

    const getStatusBadge = (status: number) => {
        switch (status) {
            case 0:
                return <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Inactive</span>;
            case 1:
                return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Active</span>;
            case 2:
                return <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Archived</span>;
            default:
                return <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">Unknown</span>;
        }
    };

    const getApprovalBadge = (is_approved: number) => {
        switch (is_approved) {
            case 0:
                return <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Pending Approval</span>;
            case 1:
                return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Approved</span>;
            case 2:
                return <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Rejected</span>;
            default:
                return <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">Unknown</span>;
        }
    };

    const handleApprove = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/market/products/approve/${product.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to approve product');
            },
        });
    };

    const handleReject = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/market/products/reject/${product.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to reject product');
            },
        });
    };

    const handleDelete = (e: FormEvent) => {
        e.preventDefault();
        form.delete(`/Admin/products/delete/${product.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to delete product');
            },
        });
    };

    return (
        <>
            <Head title={`PTIES | ${product.product_name}`} />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Product Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                    {/* Product Basic Information */}
                    <ComponentCard title="Product Information">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                {productImages.length > 0 && (
                                    <div className="flex-shrink-0">
                                        <img
                                            src={productImages[0]}
                                            alt={`${product.product_name} main image`}
                                            className="h-30 w-30 rounded-lg border object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {product.product_name} ({product.product_id})
                                        </h2>
                                    </div>
                                    <div className="mb-2 flex flex-wrap gap-2">
                                        {getStatusBadge(product.status)}
                                        {getApprovalBadge(product.is_approved)}
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-white/70">
                                        <i className="fas fa-calendar mr-1"></i> Created on: {new Date(product.created_at).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-white/70">
                                        <i className="fas fa-store mr-1"></i> Shop Name: {product.shop_id}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <InputField type="text" label="Product Category" name="category" value={product.category} readonly={true} />

                                <Textarea label="Product Description" name="description" value={product.description} readonly={true} rows={5} />

                                {/* Price Range Display */}
                                {productVariants.length > 0 && minPrice !== maxPrice ? (
                                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                                        <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80">Price Range</h3>
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <span className="text-sm text-gray-500 dark:text-white/70">From:</span>
                                                <span className="ml-2 text-lg font-bold text-green-600 dark:text-green-400">
                                                    {formatPrice(minPrice)}
                                                </span>
                                            </div>
                                            <div className="text-gray-400">-</div>
                                            <div>
                                                <span className="text-sm text-gray-500 dark:text-white/70">To:</span>
                                                <span className="ml-2 text-lg font-bold text-green-600 dark:text-green-400">
                                                    {formatPrice(maxPrice)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ) : productVariants.length > 0 && minPrice === maxPrice ? (
                                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                                        <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80">Price</h3>
                                        <div className="text-lg font-bold text-green-600 dark:text-green-400">{formatPrice(minPrice)}</div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </ComponentCard>

                    {/* Product Images */}
                    {productImages.length > 0 && (
                        <ComponentCard title="Product Images">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                {productImages.map(
                                    (image, index) =>
                                        image && (
                                            <div key={index} className="group relative">
                                                <img
                                                    src={image}
                                                    alt={`${product.product_name} ${index + 1}`}
                                                    className="aspect-square w-full rounded-lg border object-cover transition-shadow hover:shadow-lg"
                                                />
                                                <div className="bg-opacity-50 absolute bottom-2 left-2 rounded bg-black px-2 py-1 text-xs text-white">
                                                    Image {index + 1}
                                                </div>
                                            </div>
                                        ),
                                )}
                            </div>
                        </ComponentCard>
                    )}

                    {productVariants.length > 0 && (
                        <ComponentCard title="Product Variants" className="xl:col-span-2">
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                {productVariants.map((variant, index) => (
                                    <div
                                        key={index}
                                        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-600 dark:bg-gray-800"
                                    >
                                        <div className="mb-4 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{variant.name}</h3>
                                                <div className="mt-1 flex items-center space-x-2">
                                                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                        {formatPrice(variant.price)}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                Variant {index + 1}
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            {variant.image && (
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-medium text-gray-700 dark:text-white/80">Image</span>
                                                        <a
                                                            href={variant.image}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                                        >
                                                            View Full Size
                                                        </a>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <img
                                                            src={variant.image}
                                                            alt={variant.name}
                                                            className="h-40 w-40 rounded-lg border object-cover transition-transform hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Variant Description */}
                                            {variant.description && (
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">
                                                        Description
                                                    </label>
                                                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                                        <p className="text-sm text-gray-600 dark:text-white/70">{variant.description}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Variant Specifications */}
                                            {(variant.size || variant.color || variant.material) && (
                                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                                    <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80">Specifications</h4>
                                                    <div className="space-y-1 text-sm">
                                                        {variant.size && (
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600 dark:text-white/70">Size:</span>
                                                                <span className="font-medium text-gray-900 dark:text-white">{variant.size}</span>
                                                            </div>
                                                        )}
                                                        {variant.color && (
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600 dark:text-white/70">Color:</span>
                                                                <span className="font-medium text-gray-900 dark:text-white">{variant.color}</span>
                                                            </div>
                                                        )}
                                                        {variant.material && (
                                                            <div className="flex justify-between">
                                                                <span className="text-gray-600 dark:text-white/70">Material:</span>
                                                                <span className="font-medium text-gray-900 dark:text-white">{variant.material}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Variants Summary */}
                            <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-cubes text-blue-600 dark:text-blue-400"></i>
                                        <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                                            Total Variants: {productVariants.length}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span className="text-gray-600 dark:text-white/70">
                                            Price Range: {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ComponentCard>
                    )}

                    <div className="xl:col-span-2">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {product.status === 0 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={handleApprove}
                                        disabled={form.processing}
                                        className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                        }`}
                                    >
                                        {form.processing ? 'Processing...' : 'Approve Product'}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleReject}
                                        disabled={form.processing}
                                        className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                            form.processing ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                        }`}
                                    >
                                        {form.processing ? 'Processing...' : 'Reject Product'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </AppWrapper>
        </>
    );
}
