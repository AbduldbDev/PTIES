import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import MapComponent from '@AdminUtils/components/map/MapComponent';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type SellerProps = {
    id: number;
    user_id: number;
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
    min_price: number;
    max_price: number;
    availability: string;
    facebook_link: string;
    instagram_link: string;
    tiktok_link: string;
    website_link: string;
    other_links: string;
    business_permit: string;
    additional_docs: string;
    long: string;
    lat: string;
    status: number;
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
    seller: SellerProps;
};

export default function SellerDisplay() {
    const { flash, errors, seller } = usePage<PageProps>().props;
    const [lat] = useState<number>(Number(seller.lat));
    const [lng] = useState<number>(Number(seller.long));
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

    const categories = parseJsonSafely(seller.category);
    const productImages = parseJsonSafely(seller.product_images);
    const additionalDocs = parseJsonSafely(seller.additional_docs);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(price);
    };

    const getStatusBadge = (status: number) => {
        switch (status) {
            case 0:
                return <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Pending</span>;
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

        form.post(`/Admin/sellers/approve/${seller.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to approve seller');
            },
        });
    };

    const handleReject = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/sellers/reject/${seller.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to reject seller');
            },
        });
    };

    const handleDelete = (e: FormEvent) => {
        e.preventDefault();
        form.delete(`/Admin/sellers/delete/${seller.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to delete seller');
            },
        });
    };

    return (
        <>
            <Head title={`PTIES | ${seller.business_name}`} />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Seller Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                    <ComponentCard title="Business Information">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                {seller.logo && (
                                    <div className="flex-shrink-0">
                                        <img
                                            src={seller.logo}
                                            alt={`${seller.business_name} logo`}
                                            className="h-20 w-20 rounded-lg border object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{seller.business_name}</h2>
                                        {getStatusBadge(seller.status)}
                                    </div>
                                    <p className="mb-1 text-gray-600 dark:text-white/70">
                                        <i className="fas fa-map-pin"></i> {seller.barangay}, {seller.location}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-white/70">
                                        <i className="fas fa-calendar mr-1"></i> Registered on: {new Date(seller.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <Textarea label="Business Bio" name="bio" value={seller.bio} readonly={true} rows={5} />

                                <div className="grid grid-cols-2 gap-4">
                                    <InputField
                                        type="text"
                                        label="Business Category"
                                        name="category"
                                        value={categories.length > 0 ? categories.join(', ') : 'No categories specified'}
                                        readonly={true}
                                    />
                                    <InputField
                                        type="text"
                                        label="Product Availability"
                                        name="availability"
                                        value={seller.availability}
                                        readonly={true}
                                    />
                                </div>

                                <Textarea
                                    label="Products Description"
                                    name="product_description"
                                    value={seller.product_description}
                                    readonly={true}
                                    rows={5}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <InputField
                                        type="text"
                                        label="Minimum Price"
                                        name="min_price"
                                        value={formatPrice(seller.min_price)}
                                        readonly={true}
                                    />
                                    <InputField
                                        type="text"
                                        label="Maximum Price"
                                        name="max_price"
                                        value={formatPrice(seller.max_price)}
                                        readonly={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </ComponentCard>

                    <ComponentCard title="Owner Information">
                        <div className="space-y-4">
                            <InputField type="text" label="Owner Name" name="owner_name" value={seller.owner_name} readonly={true} />
                            <InputField type="text" label="Owner Contact" name="owner_contact" value={seller.owner_contact} readonly={true} />
                            <InputField type="email" label="Email Address" name="email" value={seller.email} readonly={true} />
                            <Textarea label="Owner Address" name="owner_address" value={seller.owner_address} readonly={true} rows={5} />
                        </div>
                    </ComponentCard>

                    <ComponentCard title="Social Media & Links">
                        <div className="space-y-4">
                            <InputField type="text" label="Facebook" name="facebook_link" value={seller.facebook_link} readonly={true} />
                            <InputField type="text" label="Instagram" name="instagram_link" value={seller.instagram_link} readonly={true} />
                            <InputField type="text" label="TikTok" name="tiktok_link" value={seller.tiktok_link} readonly={true} />
                            <InputField type="text" label="Website" name="website_link" value={seller.website_link} readonly={true} />
                            {seller.other_links && (
                                <Textarea label="Other Links" name="other_links" value={seller.other_links} readonly={true} rows={5} />
                            )}
                        </div>
                    </ComponentCard>

                    <ComponentCard title="Location & Documents">
                        <div className="space-y-6">
                            <div className="h-64">
                                <MapComponent initialLat={lat} initialLng={lng} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <InputField type="text" label="Latitude" name="lat" value={seller.lat} readonly={true} />
                                <InputField type="text" label="Longitude" name="long" value={seller.long} readonly={true} />
                            </div>

                            {/* Documents */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Business Documents</label>
                                <div className="space-y-2">
                                    {seller.business_permit && (
                                        <div className="flex items-center justify-between rounded-lg p-3 dark:bg-[#101828]">
                                            <span className="text-sm text-gray-600 dark:text-white">Business Permit</span>
                                            <a
                                                href={seller.business_permit}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                            >
                                                View Document
                                            </a>
                                        </div>
                                    )}

                                    {additionalDocs.length > 0 && (
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">Additional Documents</label>
                                            {additionalDocs.map(
                                                (doc, index) =>
                                                    doc && (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-between rounded-lg p-3 dark:bg-[#101828]"
                                                        >
                                                            <span className="text-sm text-gray-600 dark:text-white">Document {index + 1}</span>
                                                            <a
                                                                href={doc}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                                            >
                                                                View Document
                                                            </a>
                                                        </div>
                                                    ),
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ComponentCard>

                    {productImages.length > 0 && (
                        <ComponentCard title="Product Images" className="xl:col-span-2">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                                {productImages.map(
                                    (image, index) =>
                                        image && (
                                            <div key={index} className="group relative">
                                                <img
                                                    src={image}
                                                    alt={`Product ${index + 1}`}
                                                    className="aspect-square w-full rounded-lg border object-cover transition-shadow hover:shadow-lg"
                                                />
                                            </div>
                                        ),
                                )}
                            </div>
                        </ComponentCard>
                    )}
                    <div className="xl:col-span-2">
                        {seller.status === 0 && (
                            <div className="mt-4 space-y-2">
                                <button
                                    type="button"
                                    onClick={handleApprove}
                                    disabled={form.processing}
                                    className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                        form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                    }`}
                                >
                                    {form.processing ? 'Processing...' : 'Approve Seller'}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleReject}
                                    disabled={form.processing}
                                    className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                        form.processing ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                    }`}
                                >
                                    {form.processing ? 'Processing...' : 'Reject Seller'}
                                </button>
                            </div>
                        )}

                        {seller.status === 2 && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={form.processing}
                                className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Delete Seller'}
                            </button>
                        )}
                    </div>
                </div>
            </AppWrapper>
        </>
    );
}
