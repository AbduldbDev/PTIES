import MapComponent from '@AdminUtils/components/map/MapComponent';
import { useForm, usePage } from '@inertiajs/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

type FormData = {
    business_name: string;
    barangay: string;
    location: string;
    bio: string;
    logo: File | null;
    owner_name: string;
    owner_contact: string;
    owner_address: string;
    email: string;
    category: string[];
    product_description: string;
    product_images: File[];
    min_price: string;
    max_price: string;
    availability: string;
    facebook_link: string;
    instagram_link: string;
    tiktok_link: string;
    website_link: string;
    other_links: string;
    business_permit: File | null;
    additional_docs: File[] | null;
    long: string;
    lat: string;
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

export default function RegistrationForm() {
    const { flash, errors } = usePage<PageProps>().props;

    const form = useForm<FormData>({
        business_name: '',
        barangay: '',
        location: '',
        bio: '',
        logo: null,
        owner_name: '',
        owner_contact: '',
        owner_address: '',
        email: '',
        category: [],
        product_description: '',
        product_images: [],
        min_price: '',
        max_price: '',
        availability: '',
        facebook_link: '',
        instagram_link: '',
        tiktok_link: '',
        website_link: '',
        other_links: '',
        business_permit: null,
        additional_docs: null,
        long: '',
        lat: '',
    });

    const [logoPreview, setLogoPreview] = useState<string>('');
    const [productImagePreviews, setProductImagePreviews] = useState<string[]>([]);
    const [permitPreview, setPermitPreview] = useState<string>('');
    const [permitFileName, setPermitFileName] = useState<string>('');

    const logoInputRef = useRef<HTMLInputElement>(null);
    const productImagesInputRef = useRef<HTMLInputElement>(null);
    const businessPermitInputRef = useRef<HTMLInputElement>(null);
    const additionalDocsInputRef = useRef<HTMLInputElement>(null);
    const [additionalDocsPreviews, setAdditionalDocsPreviews] = useState<
        Array<{
            name: string;
            type: string;
            preview: string;
        }>
    >([]);
    const [lat, setLat] = useState<number>(14.381009);
    const [lng, setLng] = useState<number>(121.478769);

    useEffect(() => {
        form.setData({
            ...form.data,
            lat: lat.toString(),
            long: lng.toString(),
        });
    }, [lat, lng]);

    const handleMarkerMove = (newLat: number, newLng: number) => {
        setLat(newLat);
        setLng(newLng);
    };

    const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            form.setData('logo', file);
            form.clearErrors('logo');

            const reader = new FileReader();
            reader.onload = (e) => {
                setLogoPreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProductImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            form.setData('product_images', files);
            form.clearErrors('product_images');

            const previews: string[] = [];
            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previews.push(e.target?.result as string);
                    if (previews.length === files.length) {
                        setProductImagePreviews(previews);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleBusinessPermitChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            form.setData('business_permit', file);
            form.clearErrors('business_permit');
            setPermitFileName(file.name);

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setPermitPreview(e.target?.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                setPermitPreview('');
            }
        }
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const currentCategories = form.data.category;

        if (checked) {
            form.setData('category', [...currentCategories, value]);
        } else {
            form.setData(
                'category',
                currentCategories.filter((cat) => cat !== value),
            );
        }
        form.clearErrors('category');
    };

    const removeProductImage = (index: number) => {
        const updatedFiles = form.data['product_images'].filter((_, i) => i !== index);
        const updatedPreviews = productImagePreviews.filter((_, i) => i !== index);

        form.setData('product_images', updatedFiles);
        setProductImagePreviews(updatedPreviews);

        if (productImagesInputRef.current) {
            productImagesInputRef.current.value = '';
        }
    };

    const handleAdditionalDocsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            form.setData('additional_docs', files);

            const newPreviews: Array<{ name: string; type: string; preview: string }> = [];

            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    newPreviews.push({
                        name: file.name,
                        type: file.type,
                        preview: file.type.startsWith('image/') ? (e.target?.result as string) : '',
                    });

                    if (newPreviews.length === files.length) {
                        setAdditionalDocsPreviews(newPreviews);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeAdditionalDoc = (index: number) => {
        const currentFiles = form.data['additional_docs'] || [];
        const updatedFiles = currentFiles.filter((_, i) => i !== index);
        const updatedPreviews = additionalDocsPreviews.filter((_, i) => i !== index);

        form.setData('additional_docs', updatedFiles);
        setAdditionalDocsPreviews(updatedPreviews);

        if (additionalDocsInputRef.current) {
            additionalDocsInputRef.current.value = '';
        }
    };

    const getFileIcon = (fileType: string) => {
        if (fileType === 'application/pdf') return 'fa-file-pdf';
        if (fileType === 'application/zip' || fileType === 'application/x-zip-compressed') return 'fa-file-archive';
        if (fileType.startsWith('image/')) return 'fa-file-image';
        return 'fa-file';
    };

    const getFileIconColor = (fileType: string) => {
        if (fileType === 'application/pdf') return 'text-red-500';
        if (fileType === 'application/zip' || fileType === 'application/x-zip-compressed') return 'text-yellow-500';
        if (fileType.startsWith('image/')) return 'text-green-500';
        return 'text-gray-500';
    };

    const getBorderColor = (fieldName: keyof FormData) => {
        return form.errors[fieldName] ? 'border-red-500' : 'border-gray-300';
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let hasErrors = false;

        if (!form.data.business_name.trim()) {
            form.setError('business_name', 'Business name is required');
            hasErrors = true;
        }

        if (!form.data.barangay) {
            form.setError('barangay', 'Barangay is required');
            hasErrors = true;
        }

        if (!form.data.location.trim()) {
            form.setError('location', 'Specific location is required');
            hasErrors = true;
        }

        if (!form.data.bio.trim()) {
            form.setError('bio', 'Business bio is required');
            hasErrors = true;
        }

        if (!form.data.logo) {
            form.setError('logo', 'Business logo is required');
            hasErrors = true;
        }

        if (!form.data.owner_name.trim()) {
            form.setError('owner_name', 'Owner name is required');
            hasErrors = true;
        }

        if (!form.data.owner_contact.trim()) {
            form.setError('owner_contact', 'Contact number is required');
            hasErrors = true;
        }

        if (!form.data.owner_address.trim()) {
            form.setError('owner_address', 'Owner address is required');
            hasErrors = true;
        }

        if (!form.data.email.trim()) {
            form.setError('email', 'Email address is required');
            hasErrors = true;
        }

        if (form.data.category.length === 0) {
            form.setError('category', 'At least one product category is required');
            hasErrors = true;
        }

        if (!form.data.product_description.trim()) {
            form.setError('product_description', 'Store description is required');
            hasErrors = true;
        }

        if (form.data.product_images.length === 0) {
            form.setError('product_images', 'At least one product image is required');
            hasErrors = true;
        }

        if (!form.data.min_price.trim()) {
            form.setError('min_price', 'Minimum price is required');
            hasErrors = true;
        }

        if (!form.data.max_price.trim()) {
            form.setError('max_price', 'Maximum price is required');
            hasErrors = true;
        }

        if (!form.data.availability) {
            form.setError('availability', 'Availability option is required');
            hasErrors = true;
        }

        if (!form.data.business_permit) {
            form.setError('business_permit', 'Business permit is required');
            hasErrors = true;
        }

        if (hasErrors) {
            // Scroll to top when there are errors
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            // Optional: Focus on the first error field
            const firstErrorField = Object.keys(form.errors)[0];
            if (firstErrorField) {
                const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
                if (errorElement) {
                    (errorElement as HTMLElement).focus();
                }
            }
            return;
        }

        form.post('/seller/registration/submit', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setLogoPreview('');
                setProductImagePreviews([]);
                setPermitPreview('');
                setPermitFileName('');
                setAdditionalDocsPreviews([]);

                if (logoInputRef.current) logoInputRef.current.value = '';
                if (productImagesInputRef.current) productImagesInputRef.current.value = '';
                if (businessPermitInputRef.current) businessPermitInputRef.current.value = '';
                if (additionalDocsInputRef.current) additionalDocsInputRef.current.value = '';
            },
        });
    };

    return (
        <>
            <main className="pt-28 pb-12 sm:pt-32 sm:pb-16">
                <div className="mx-auto px-3 sm:px-4">
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

                    <div className="mx-auto mb-8 max-w-4xl sm:mb-12">
                        <div className="px- flex items-center justify-between px-3">
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
                    {flash?.success && flash.success}
                    {errors?.error && errors.error}
                    {flash?.error && errors?.error !== flash.error && flash.error}
                    <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-white shadow-md">
                        <form id="seller-registration-form" className="p-4 sm:p-6 md:p-8" onSubmit={handleSubmit}>
                            {/* Seller Information Section */}
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-store mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Seller Information
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
                                    <div className="md:col-span-2">
                                        <label htmlFor="business-name" className="mb-1 block text-sm font-medium text-gray-700">
                                            Business Name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="business-name"
                                            name="business-name"
                                            value={form.data['business_name']}
                                            onChange={(e) => {
                                                form.setData('business_name', e.target.value);
                                                form.clearErrors('business_name');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('business_name')}`}
                                        />
                                        {form.errors.business_name && <p className="mt-1 text-xs text-red-600">{form.errors.business_name}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="bio" className="mb-1 block text-sm font-medium text-gray-700">
                                            Short Bio / About the Seller <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="bio"
                                            name="bio"
                                            rows={5}
                                            value={form.data.bio}
                                            onChange={(e) => {
                                                form.setData('bio', e.target.value);
                                                form.clearErrors('bio');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('bio')}`}
                                            placeholder="Brief description of your business"
                                        />
                                        {form.errors.bio && <p className="mt-1 text-xs text-red-600">{form.errors.bio}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Business Logo <span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="logo"
                                                className={`flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg ${
                                                    form.errors.logo ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-cloud-upload-alt mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
                                                </div>
                                                <input
                                                    id="logo"
                                                    name="logo"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleLogoChange}
                                                    ref={logoInputRef}
                                                />
                                            </label>
                                        </div>
                                        {logoPreview && (
                                            <div className="mt-4">
                                                <p className="text-xs text-gray-600 sm:text-sm">Preview:</p>
                                                <img src={logoPreview} className="mt-2 h-50 w-50 rounded border border-primary object-cover" />
                                            </div>
                                        )}
                                        {form.errors.logo && <p className="mt-1 text-xs text-red-600">{form.errors.logo}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Business Location Section */}
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-map-pin mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Business Location
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
                                    <div>
                                        <label htmlFor="barangay" className="mb-1 block text-sm font-medium text-gray-700">
                                            Barangay <span className="text-red-600">*</span>
                                        </label>
                                        <select
                                            id="barangay"
                                            name="barangay"
                                            value={form.data.barangay}
                                            onChange={(e) => {
                                                form.setData('barangay', e.target.value);
                                                form.clearErrors('barangay');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('barangay')}`}
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
                                        {form.errors.barangay && <p className="mt-1 text-xs text-red-600">{form.errors.barangay}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
                                            Specific Location <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={form.data.location}
                                            onChange={(e) => {
                                                form.setData('location', e.target.value);
                                                form.clearErrors('location');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('location')}`}
                                            placeholder="Street, Purok, or Landmark"
                                        />
                                        {form.errors.location && <p className="mt-1 text-xs text-red-600">{form.errors.location}</p>}
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="mb-1 block text-sm font-medium text-gray-700">
                                            Pin Location <span className="text-red-600">*</span>
                                        </p>
                                        <label className="mb-1 block text-xs text-gray-500">Drag Pin Marker</label>
                                        <div>
                                            <MapComponent initialLat={lat} initialLng={lng} onMarkerMove={handleMarkerMove} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Person Section */}
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-user mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Contact Person
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
                                    <div>
                                        <label htmlFor="owner-name" className="mb-1 block text-sm font-medium text-gray-700">
                                            Owner Name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="owner-name"
                                            name="owner-name"
                                            value={form.data['owner_name']}
                                            onChange={(e) => {
                                                form.setData('owner_name', e.target.value);
                                                form.clearErrors('owner_name');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('owner_name')}`}
                                        />
                                        {form.errors.owner_name && <p className="mt-1 text-xs text-red-600">{form.errors.owner_name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="owner-contact" className="mb-1 block text-sm font-medium text-gray-700">
                                            Contact Number <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="owner-contact"
                                            name="owner-contact"
                                            value={form.data['owner_contact']}
                                            onChange={(e) => {
                                                form.setData('owner_contact', e.target.value);
                                                form.clearErrors('owner_contact');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('owner_contact')}`}
                                        />
                                        {form.errors.owner_contact && <p className="mt-1 text-xs text-red-600">{form.errors.owner_contact}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="owner-address" className="mb-1 block text-sm font-medium text-gray-700">
                                            Owner Address <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="owner-address"
                                            name="owner-address"
                                            value={form.data['owner_address']}
                                            onChange={(e) => {
                                                form.setData('owner_address', e.target.value);
                                                form.clearErrors('owner_address');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('owner_address')}`}
                                        />
                                        {form.errors.owner_address && <p className="mt-1 text-xs text-red-600">{form.errors.owner_address}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                            Email Address <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.data.email}
                                            onChange={(e) => {
                                                form.setData('email', e.target.value);
                                                form.clearErrors('email');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('email')}`}
                                        />
                                        {form.errors.email && <p className="mt-1 text-xs text-red-600">{form.errors.email}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Store Information Section */}
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-box mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Store Information
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Products Category <span className="text-red-600">*</span>
                                        </label>
                                        <div className={`rounded-lg border p-4 ${form.errors.category ? 'border-red-500' : 'border-gray-200'}`}>
                                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                                                {['Crafts', 'Clothing', 'Food', 'Art', 'Home Decor', 'Jewelry', 'Beauty', 'Other'].map((category) => (
                                                    <div key={category} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id={`category-${category.toLowerCase().replace(' ', '-')}`}
                                                            name="category"
                                                            value={category}
                                                            checked={form.data.category.includes(category)}
                                                            onChange={handleCategoryChange}
                                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <label
                                                            htmlFor={`category-${category.toLowerCase().replace(' ', '-')}`}
                                                            className="ml-2 text-xs text-gray-700 sm:text-sm"
                                                        >
                                                            {category}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {form.errors.category && <p className="mt-1 text-xs text-red-600">{form.errors.category}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="product-description" className="mb-1 block text-sm font-medium text-gray-700">
                                            Store Description <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="product-description"
                                            name="product-description"
                                            rows={4}
                                            value={form.data['product_description']}
                                            onChange={(e) => {
                                                form.setData('product_description', e.target.value);
                                                form.clearErrors('product_description');
                                            }}
                                            className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('product_description')}`}
                                            placeholder="Describe your products, materials used, unique features, etc."
                                        />
                                        {form.errors.product_description && (
                                            <p className="mt-1 text-xs text-red-600">{form.errors.product_description}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Sample Product Images <span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="product-images"
                                                className={`flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg ${
                                                    form.errors.product_images ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            >
                                                <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6">
                                                    <i className="fas fa-images mb-1 text-xl text-gray-400 sm:mb-2 sm:text-2xl" />
                                                    <p className="mb-1 text-xs text-gray-500 sm:mb-2 sm:text-sm">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 10MB each)</p>
                                                </div>
                                                <input
                                                    id="product-images"
                                                    name="product-images"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleProductImagesChange}
                                                    multiple
                                                    ref={productImagesInputRef}
                                                />
                                            </label>
                                        </div>
                                        {productImagePreviews.length > 0 && (
                                            <div className="mt-4">
                                                <p className="text-xs text-gray-600 sm:text-sm">Previews:</p>
                                                <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-7">
                                                    {productImagePreviews.map((preview, index) => (
                                                        <div key={index} className="relative aspect-square w-full rounded border border-primary">
                                                            <img
                                                                src={preview}
                                                                alt={`Product ${index}`}
                                                                className="h-full w-full rounded object-cover"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() => removeProductImage(index)}
                                                                className="absolute -top-1 -right-1 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white hover:bg-red-600"
                                                            >
                                                                ×
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {form.errors.product_images && <p className="mt-1 text-xs text-red-600">{form.errors.product_images}</p>}
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Price Ranges <span className="text-red-600">*</span>
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
                                                    value={form.data['min_price']}
                                                    onChange={(e) => {
                                                        form.setData('min_price', e.target.value);
                                                        form.clearErrors('min_price');
                                                    }}
                                                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('min_price')}`}
                                                />
                                                {form.errors.min_price && <p className="mt-1 text-xs text-red-600">{form.errors.min_price}</p>}
                                            </div>
                                            <div className="flex-1">
                                                <label htmlFor="max-price" className="mb-1 block text-xs text-gray-500">
                                                    Maximum Price (₱)
                                                </label>
                                                <input
                                                    type="number"
                                                    id="max-price"
                                                    name="max-price"
                                                    value={form.data['max_price']}
                                                    onChange={(e) => {
                                                        form.setData('max_price', e.target.value);
                                                        form.clearErrors('max_price');
                                                    }}
                                                    className={`w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3 ${getBorderColor('max_price')}`}
                                                />
                                                {form.errors.max_price && <p className="mt-1 text-xs text-red-600">{form.errors.max_price}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Availability <span className="text-red-600">*</span>
                                        </label>
                                        <div className={`rounded-lg border p-4 ${form.errors.availability ? 'border-red-500' : 'border-gray-200'}`}>
                                            <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-3">
                                                {['For Display', 'Made to Order', 'Both'].map((option) => (
                                                    <div key={option} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            id={`availability-${option.toLowerCase().replace(' ', '-')}`}
                                                            name="availability"
                                                            value={option}
                                                            checked={form.data.availability === option}
                                                            onChange={(e) => {
                                                                form.setData('availability', e.target.value);
                                                                form.clearErrors('availability');
                                                            }}
                                                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <label
                                                            htmlFor={`availability-${option.toLowerCase().replace(' ', '-')}`}
                                                            className="ml-2 text-xs text-gray-700 sm:text-sm"
                                                        >
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {form.errors.availability && <p className="mt-1 text-xs text-red-600">{form.errors.availability}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Business Permits & Documents Section */}
                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-file-alt mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Business Permits &amp; Documents
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Business Permit <span className="text-red-600">*</span>
                                        </label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="business-permit"
                                                className={`flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg ${
                                                    form.errors.business_permit ? 'border-red-500' : 'border-gray-300'
                                                }`}
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
                                                    onChange={handleBusinessPermitChange}
                                                    ref={businessPermitInputRef}
                                                />
                                            </label>
                                        </div>
                                        {(permitPreview || permitFileName) && (
                                            <div className="mt-4">
                                                <p className="text-xs text-gray-600 sm:text-sm">Preview:</p>
                                                <div className="flex items-center justify-between rounded border border-gray-200 px-2 py-3">
                                                    <div className="flex">
                                                        {permitPreview ? (
                                                            <img src={permitPreview} className="h-10 w-10 rounded border object-contain" />
                                                        ) : (
                                                            <>
                                                                <i className="fas fa-file-pdf mr-2 text-xl text-red-500" />
                                                                <span className="text-sm font-medium">{permitFileName}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {form.errors.business_permit && <p className="mt-1 text-xs text-red-600">{form.errors.business_permit}</p>}
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">Additional Documents (Optional)</label>
                                        <div className="flex w-full items-center justify-center">
                                            <label
                                                htmlFor="additional-docs"
                                                className="flex h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 sm:h-32 sm:rounded-lg"
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
                                                    onChange={handleAdditionalDocsChange}
                                                    multiple
                                                    ref={additionalDocsInputRef}
                                                />
                                            </label>
                                        </div>

                                        {additionalDocsPreviews.length > 0 && (
                                            <div className="mt-4">
                                                <p className="text-xs text-gray-600 sm:text-sm">Uploaded Documents:</p>
                                                <div className="mt-2 space-y-2">
                                                    {additionalDocsPreviews.map((doc, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center justify-between rounded border border-gray-200 p-2"
                                                        >
                                                            <div className="flex items-center">
                                                                {doc.preview ? (
                                                                    <img src={doc.preview} className="h-10 w-10 rounded border object-contain" />
                                                                ) : (
                                                                    <i
                                                                        className={`fas ${getFileIcon(doc.type)} mr-3 text-xl ${getFileIconColor(doc.type)}`}
                                                                    />
                                                                )}
                                                                <div>
                                                                    <p className="text-sm font-medium">{doc.name}</p>
                                                                    <p className="text-xs text-gray-500">{doc.type}</p>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeAdditionalDoc(index)}
                                                                className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                                                            >
                                                                <i className="fas fa-times text-xs" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-section mb-8 rounded-lg border border-gray-200 p-4 sm:mb-12 sm:p-6">
                                <h2 className="mb-4 flex items-center text-lg font-bold text-primary sm:mb-6 sm:text-xl">
                                    <i className="fas fa-link mr-2 text-sm sm:mr-3 sm:text-base" />
                                    Contact &amp; Links
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="facebook-link" className="mb-1 block text-sm font-medium text-gray-700">
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
                                                value={form.data['facebook_link']}
                                                onChange={(e) => form.setData('facebook_link', e.target.value)}
                                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://facebook.com/yourpage"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="instagram-link" className="mb-1 block text-sm font-medium text-gray-700">
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
                                                value={form.data['instagram_link']}
                                                onChange={(e) => form.setData('instagram_link', e.target.value)}
                                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://instagram.com/yourprofile"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="tiktok-link" className="mb-1 block text-sm font-medium text-gray-700">
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
                                                value={form.data['tiktok_link']}
                                                onChange={(e) => form.setData('tiktok_link', e.target.value)}
                                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://tiktok.com/@yourprofile"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="website-link" className="mb-1 block text-sm font-medium text-gray-700">
                                            Website
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                <i className="fas fa-globe" />
                                            </span>
                                            <input
                                                type="url"
                                                id="website-link"
                                                name="website-link"
                                                value={form.data['website_link']}
                                                onChange={(e) => form.setData('website_link', e.target.value)}
                                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary sm:px-3 sm:py-3"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="other-links" className="mb-1 block text-sm font-medium text-gray-700">
                                            Other Links
                                        </label>
                                        <textarea
                                            id="other-links"
                                            name="other-links"
                                            rows={5}
                                            value={form.data['other_links']}
                                            onChange={(e) => form.setData('other_links', e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary sm:rounded-lg sm:px-4 sm:py-3"
                                            placeholder="Add any other relevant links (one per line)"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-between sm:pt-6 md:flex-row">
                                <button
                                    type="button"
                                    className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-50 sm:rounded-lg sm:px-6 sm:py-3 md:mb-0 md:w-auto"
                                >
                                    <i className="fas fa-arrow-left mr-2" /> Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={form.processing}
                                    className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 disabled:opacity-50 sm:px-8 sm:py-3 md:w-auto"
                                >
                                    {form.processing ? 'Submitting...' : 'Submit Application'}
                                    <i className="fas fa-paper-plane ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
