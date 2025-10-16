import { useForm, usePage } from '@inertiajs/react';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import React, { useRef, useState } from 'react';
type FormData = {
    product_name: string;
    category: string;
    description: string;
    images: File[];
    variants: Variant[];
};

type Variant = {
    id: number;
    name: string;
    price: string;
    description: string;
    image: File | null;
    imagePreview?: string;
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
};

export default function AddProduct() {
    const { flash, errors } = usePage<PageProps>().props;

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [nextVariantId, setNextVariantId] = useState(1);

    const form = useForm<FormData>({
        product_name: '',
        category: '',
        description: '',
        images: [],
        variants: [
            {
                id: 1,
                name: '',
                price: '',
                description: '',
                image: null,
            },
        ],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let hasErrors = false;

        if (!form.data.product_name.trim()) {
            form.setError('product_name', 'Product name is required');
            hasErrors = true;
        }

        if (!form.data.category) {
            form.setError('category', 'Category is required');
            hasErrors = true;
        }

        if (!form.data.description.trim()) {
            form.setError('description', 'Description is required');
            hasErrors = true;
        }

        if (form.data.images.length === 0) {
            form.setError('images', 'At least one image is required');
            hasErrors = true;
        }

        if (hasErrors) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }

        form.post('/seller/products/create', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setImagePreviews([]);
                setNextVariantId(1);
            },
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newImages = Array.from(files);
        form.setData('images', [...form.data.images, ...newImages]);
        form.clearErrors('images');

        const newPreviews = newImages.map((file) => URL.createObjectURL(file));
        setImagePreviews([...imagePreviews, ...newPreviews]);
    };

    const handleVariantImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const updatedVariants = [...form.data.variants];
        updatedVariants[index] = {
            ...updatedVariants[index],
            image: file,
            imagePreview: URL.createObjectURL(file),
        };
        form.setData('variants', updatedVariants);
    };

    const handleVariantChange = (index: number, field: keyof Variant, value: string | File | null) => {
        const updatedVariants = [...form.data.variants];
        updatedVariants[index] = {
            ...updatedVariants[index],
            [field]: value,
        };
        form.setData('variants', updatedVariants);
    };

    const addVariant = () => {
        form.setData('variants', [
            ...form.data.variants,
            {
                id: nextVariantId + 1, // Fixed: increment properly
                name: '',
                price: '',
                description: '',
                image: null,
            },
        ]);
        setNextVariantId(nextVariantId + 1);
    };

    const removeVariant = (index: number) => {
        const variantToRemove = form.data.variants[index];

        // Clean up image preview URL
        if (variantToRemove.imagePreview) {
            URL.revokeObjectURL(variantToRemove.imagePreview);
        }

        const updatedVariants = form.data.variants.filter((_, i) => i !== index);
        form.setData('variants', updatedVariants);
    };

    const removeImage = (index: number) => {
        const updatedImages = form.data.images.filter((_, i) => i !== index);
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

        URL.revokeObjectURL(imagePreviews[index]);

        form.setData('images', updatedImages);
        setImagePreviews(updatedPreviews);

        if (updatedImages.length === 0) {
            form.setError('images', 'At least one image is required');
        }
    };

    const removeVariantImage = (index: number) => {
        const updatedVariants = [...form.data.variants];

        if (updatedVariants[index].imagePreview) {
            URL.revokeObjectURL(updatedVariants[index].imagePreview!);
        }

        updatedVariants[index] = {
            ...updatedVariants[index],
            image: null,
            imagePreview: undefined,
        };
        form.setData('variants', updatedVariants);
    };

    const getInputBorderClass = (fieldName: keyof FormData) => {
        return form.errors[fieldName]
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-primary focus:ring-primary';
    };

    React.useEffect(() => {
        return () => {
            imagePreviews.forEach((url) => URL.revokeObjectURL(url));
            form.data.variants.forEach((variant) => {
                if (variant.imagePreview) {
                    URL.revokeObjectURL(variant.imagePreview);
                }
            });
        };
    }, []);

    return (
        <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
            <div className="container mx-auto max-w-7xl">
                <PageTitle
                    title="ADD PRODUCTS"
                    subtitle="Showcase Your Items in the Marketplace"
                    desc="List your products with details, prices, and images to attract more buyers."
                />

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                    <form onSubmit={handleSubmit} className="p-4 md:p-6">
                        <div className="mb-8">
                            <h2 className="text-dark mb-4 flex items-center text-base font-bold md:text-xl">
                                <i className="fas fa-info-circle mr-2 text-primary"></i>
                                Basic Information
                            </h2>
                            {flash?.success && flash.success}
                            {errors?.error && errors.error}
                            {flash?.error && errors?.error !== flash.error && flash.error}
                            <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-white shadow-md"></div>

                            <div className="mb-4">
                                <label htmlFor="productName" className="mb-2 block text-sm font-medium text-gray-700">
                                    Product Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    value={form.data.product_name}
                                    onChange={(e) => form.setData('product_name', e.target.value)}
                                    className={`w-full rounded-lg border px-4 py-2 text-sm transition duration-300 md:text-base ${getInputBorderClass('product_name')}`}
                                    placeholder="Enter product name"
                                />
                                {form.errors.product_name && <p className="mt-1 text-xs text-red-600">{form.errors.product_name}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="category"
                                    value={form.data.category}
                                    onChange={(e) => form.setData('category', e.target.value)}
                                    className={`w-full rounded-lg border px-4 py-2 text-sm transition duration-300 md:text-base ${getInputBorderClass('category')}`}
                                >
                                    <option value="" disabled>
                                        Select a category
                                    </option>
                                    <option value="handicraft">Handicraft</option>
                                    <option value="food">Food Products</option>
                                    <option value="clothing">Clothing & Accessories</option>
                                    <option value="home">Home Decor</option>
                                    <option value="art">Art & Collectibles</option>
                                    <option value="other">Other</option>
                                </select>
                                {form.errors.category && <p className="mt-1 text-xs text-red-600">{form.errors.category}</p>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={form.data.description}
                                    onChange={(e) => form.setData('description', e.target.value)}
                                    className={`w-full rounded-lg border px-4 py-2 text-sm transition duration-300 md:text-base ${getInputBorderClass('description')}`}
                                    placeholder="Describe your product in detail"
                                />
                                {form.errors.description && <p className="mt-1 text-xs text-red-600">{form.errors.description}</p>}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-dark mb-4 flex items-center text-base font-bold md:text-xl">
                                <i className="fas fa-images mr-2 text-primary"></i>
                                Product Images
                            </h2>

                            <div className="mb-4">
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Upload Images <span className="text-red-500">*</span>
                                </label>
                                <div
                                    className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition duration-300 md:p-6 ${
                                        form.errors.images ? 'border-red-500' : 'border-gray-300 hover:border-primary'
                                    }`}
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <i className="fas fa-cloud-upload-alt mb-3 text-2xl text-gray-400 md:text-3xl"></i>
                                    <p className="mb-2 text-xs text-gray-600 md:text-sm">Drag & drop images here or click to browse</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 10MB each)</p>
                                </div>
                                <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                                {form.errors.images && <p className="mt-1 text-xs text-red-600">{form.errors.images}</p>}
                            </div>

                            {imagePreviews.length > 0 && (
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                                    {imagePreviews.map((preview, index) => (
                                        <div key={index} className="relative rounded-lg border border-gray-200 bg-gray-100">
                                            <img
                                                src={preview}
                                                alt={`Preview ${index + 1}`}
                                                className="aspect-square w-full rounded-lg object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white md:h-6 md:w-6"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h2 className="text-dark mb-4 flex items-center text-base font-bold md:text-xl">
                                <i className="fas fa-layer-group mr-2 text-primary"></i>
                                Product Variants
                            </h2>

                            <div className="space-y-4">
                                {form.data.variants.map((variant, index) => (
                                    <div key={variant.id} className="rounded-lg border border-gray-200 p-4">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="text-dark text-sm font-medium md:text-base">Variant {index + 1}</h3>
                                            {form.data.variants.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeVariant(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label htmlFor={`variantName-${index}`} className="mb-2 block text-sm font-medium text-gray-700">
                                                    Variant Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id={`variantName-${index}`}
                                                    value={variant.name}
                                                    onChange={(e) => handleVariantChange(index, 'name', e.target.value)}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition duration-300 focus:border-primary focus:ring-primary md:text-base"
                                                    placeholder="e.g., Small, Red, Premium"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor={`variantPrice-${index}`} className="mb-2 block text-sm font-medium text-gray-700">
                                                    Variant Price (₱)
                                                </label>
                                                <input
                                                    type="number"
                                                    id={`variantPrice-${index}`}
                                                    min="0"
                                                    step="0.01"
                                                    value={variant.price}
                                                    onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition duration-300 focus:border-primary focus:ring-primary md:text-base"
                                                    placeholder="0.00"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="mb-2 block text-sm font-medium text-gray-700">Variant Image</label>
                                            <div className="flex flex-col gap-4 md:flex-row">
                                                <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                                                    <div
                                                        className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-3 text-center transition duration-300 hover:border-primary md:w-48 md:p-4"
                                                        onClick={() => document.getElementById(`variantImage-${index}`)?.click()}
                                                    >
                                                        <i className="fas fa-cloud-upload-alt mb-2 text-lg text-gray-400 md:text-xl"></i>
                                                        <p className="text-xs text-gray-600 md:text-sm">Upload variant image</p>
                                                        <input
                                                            id={`variantImage-${index}`}
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => handleVariantImageUpload(index, e)}
                                                            className="hidden"
                                                        />
                                                    </div>

                                                    {variant.imagePreview && (
                                                        <div className="relative aspect-square w-full rounded-lg border border-gray-200 bg-gray-100">
                                                            <img
                                                                src={variant.imagePreview}
                                                                alt={`Variant ${index + 1} preview`}
                                                                className="h-full w-full rounded-lg object-cover"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => removeVariantImage(index)}
                                                                className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white md:h-6 md:w-6"
                                                            >
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label htmlFor={`variantDescription-${index}`} className="mb-2 block text-sm font-medium text-gray-700">
                                                Variant Description
                                            </label>
                                            <textarea
                                                id={`variantDescription-${index}`}
                                                rows={2}
                                                value={variant.description}
                                                onChange={(e) => handleVariantChange(index, 'description', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition duration-300 focus:border-primary focus:ring-primary md:text-base"
                                                placeholder="Describe this specific variant"
                                            />
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={addVariant}
                                    className="flex w-full items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-200 md:text-base"
                                >
                                    <i className="fas fa-plus mr-2"></i>Add Another Variant
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-4 border-t border-gray-200 pt-4 md:flex-row">
                            <button
                                type="button"
                                onClick={() => {
                                    form.reset();
                                    form.clearErrors();
                                    setImagePreviews([]);
                                    setNextVariantId(1);
                                }}
                                className="flex w-full items-center justify-center rounded-lg bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-200 md:w-auto md:text-base"
                            >
                                <i className="fas fa-times mr-2"></i>Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={form.processing}
                                className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 disabled:opacity-50 md:w-auto md:text-base"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                {form.processing ? 'Adding Product...' : 'Add Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
