import { useForm, usePage } from '@inertiajs/react';
import FlashMessage from '@UserUtils/components/Ui/ErrorToast';
import { useState } from 'react';

type SellerProps = {
    id: number;
    shop_id: string;
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

    sellerData: SellerProps;
    active: number;
    pending: number;
    edit: number;
};

type EditFormData = {
    bio: string;
    product_description: string;
    logo: string;
    facebook_link: string;
    instagram_link: string;
    tiktok_link: string;
    website_link: string;
    owner_contact: string;
    email: string;
};

export default function SellerDashboard() {
    const { active, sellerData, edit, pending, flash, errors } = usePage<PageProps>().props;
    const { auth } = usePage().props as {
        auth?: {
            user: {
                id: number;
            };
        };
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingSection, setEditingSection] = useState<'about' | 'description' | 'social' | 'logo' | 'contact' | null>(null);

    // Use useForm for form handling
    const { data, setData, post, reset, clearErrors, processing } = useForm<EditFormData>({
        bio: sellerData.bio || '',
        product_description: sellerData.product_description || '',
        logo: sellerData.logo || '',
        facebook_link: sellerData.facebook_link || '',
        instagram_link: sellerData.instagram_link || '',
        tiktok_link: sellerData.tiktok_link || '',
        website_link: sellerData.website_link || '',
        owner_contact: sellerData.owner_contact || '',
        email: sellerData.email || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(`/seller/shop/update/${sellerData.id}`, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                clearErrors();
                closeEditModal();
            },
            onError: () => {
                reset();
                clearErrors();
                closeEditModal();
            },
        });
    };

    const calculateMonthsActive = () => {
        const createdDate = new Date(sellerData.created_at);
        const currentDate = new Date();
        const months = (currentDate.getFullYear() - createdDate.getFullYear()) * 12 + (currentDate.getMonth() - createdDate.getMonth());
        return Math.max(months, 1);
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const productImages = sellerData.product_images ? JSON.parse(sellerData.product_images) : [];

    const openEditModal = (section: 'about' | 'description' | 'social' | 'logo' | 'contact') => {
        setEditingSection(section);

        // Pre-populate form data based on section
        const sectionData: Partial<EditFormData> = {};
        switch (section) {
            case 'about':
                sectionData.bio = sellerData.bio || '';
                break;
            case 'description':
                sectionData.product_description = sellerData.product_description || '';
                break;
            case 'contact':
                sectionData.owner_contact = sellerData.owner_contact || '';
                sectionData.email = sellerData.email || '';
                break;
            case 'social':
                sectionData.facebook_link = sellerData.facebook_link || '';
                sectionData.instagram_link = sellerData.instagram_link || '';
                sectionData.tiktok_link = sellerData.tiktok_link || '';
                sectionData.website_link = sellerData.website_link || '';
                break;
            case 'logo':
                sectionData.logo = sellerData.logo || '';
                break;
        }

        // Update form data for the specific section
        setData((prev) => ({
            ...prev,
            ...sectionData,
        }));

        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditingSection(null);
        clearErrors();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(name as keyof EditFormData, value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setData('logo', result);
            };
            reader.readAsDataURL(file);
        }
    };

    const renderEditForm = () => {
        switch (editingSection) {
            case 'about':
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="bio" className="mb-2 block text-sm font-medium text-gray-700">
                                About/Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                rows={6}
                                value={data.bio}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="Tell customers about your business..."
                            />
                            {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio}</p>}
                        </div>
                    </div>
                );

            case 'description':
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="product_description" className="mb-2 block text-sm font-medium text-gray-700">
                                Product Description
                            </label>
                            <textarea
                                id="product_description"
                                name="product_description"
                                rows={6}
                                value={data.product_description}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="Describe your products and services..."
                            />
                            {errors.product_description && <p className="mt-1 text-sm text-red-600">{errors.product_description}</p>}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="owner_contact" className="mb-2 block text-sm font-medium text-gray-700">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                id="owner_contact"
                                name="owner_contact"
                                value={data.owner_contact}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                            />
                            {errors.owner_contact && <p className="mt-1 text-sm text-red-600">{errors.owner_contact}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                    </div>
                );

            case 'social':
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="facebook_link" className="mb-2 block text-sm font-medium text-gray-700">
                                Facebook Link
                            </label>
                            <input
                                type="url"
                                id="facebook_link"
                                name="facebook_link"
                                value={data.facebook_link}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="https://facebook.com/yourpage"
                            />
                            {errors.facebook_link && <p className="mt-1 text-sm text-red-600">{errors.facebook_link}</p>}
                        </div>
                        <div>
                            <label htmlFor="instagram_link" className="mb-2 block text-sm font-medium text-gray-700">
                                Instagram Link
                            </label>
                            <input
                                type="url"
                                id="instagram_link"
                                name="instagram_link"
                                value={data.instagram_link}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="https://instagram.com/yourprofile"
                            />
                            {errors.instagram_link && <p className="mt-1 text-sm text-red-600">{errors.instagram_link}</p>}
                        </div>
                        <div>
                            <label htmlFor="tiktok_link" className="mb-2 block text-sm font-medium text-gray-700">
                                TikTok Link
                            </label>
                            <input
                                type="url"
                                id="tiktok_link"
                                name="tiktok_link"
                                value={data.tiktok_link}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="https://tiktok.com/@yourprofile"
                            />
                            {errors.tiktok_link && <p className="mt-1 text-sm text-red-600">{errors.tiktok_link}</p>}
                        </div>
                        <div>
                            <label htmlFor="website_link" className="mb-2 block text-sm font-medium text-gray-700">
                                Website Link
                            </label>
                            <input
                                type="url"
                                id="website_link"
                                name="website_link"
                                value={data.website_link}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary"
                                placeholder="https://yourwebsite.com"
                            />
                            {errors.website_link && <p className="mt-1 text-sm text-red-600">{errors.website_link}</p>}
                        </div>
                    </div>
                );

            case 'logo':
                return (
                    <div className="space-y-4">
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {data.logo ? (
                                    <img
                                        src={data.logo}
                                        alt="Current logo"
                                        className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                                    />
                                ) : (
                                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-blue-800 text-3xl font-bold text-white shadow-lg">
                                        {getInitials(sellerData.business_name)}
                                    </div>
                                )}
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="logo-upload"
                                    className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:border-primary hover:bg-blue-50"
                                >
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <i className="fas fa-cloud-upload-alt text-2xl text-primary"></i>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-gray-700">Click to upload logo</p>
                                            <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                                        </div>
                                    </div>
                                    <input
                                        id="logo-upload"
                                        type="file"
                                        accept="image/png, image/jpeg, image/jpg"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>

                            <p className="mt-2 text-center text-xs text-gray-500">Recommended: Square image, at least 200x200 pixels, max 5MB</p>
                        </div>
                        {errors.logo && <p className="mt-1 text-sm text-red-600">{errors.logo}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    // Get modal title based on editing section
    const getModalTitle = () => {
        switch (editingSection) {
            case 'about':
                return 'Edit About Section';
            case 'description':
                return 'Edit Product Description';
            case 'social':
                return 'Edit Social Links';
            case 'contact':
                return 'Edit Contact Information';
            case 'logo':
                return 'Update Logo';
            default:
                return 'Edit';
        }
    };

    return (
        <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
            <div className="container mx-auto px-3 sm:px-4">
                {/* Header Section */}
                <div className="mb-8 text-center sm:mb-12">
                    <div className="mb-3 inline-flex items-center sm:mb-4">
                        <div className="mr-2 h-1 w-6 rounded-full bg-secondary sm:mr-3 sm:w-8" />
                        <h2 className="text-xs font-semibold tracking-wider text-primary uppercase sm:text-sm">Seller Profile</h2>
                        <div className="ml-2 h-1 w-6 rounded-full bg-secondary sm:ml-3 sm:w-8" />
                    </div>
                    <h1 className="text-dark mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
                        Seller <span className="text-primary">Profile</span>
                    </h1>
                    <p className="mx-auto max-w-3xl px-2 text-sm text-gray-600 sm:text-lg">View and manage your seller profile information</p>
                </div>
                {flash?.success && <FlashMessage type="success" message={flash.success} duration={3000} key={`success-${Date.now()}`} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={`error-${Date.now()}`} duration={3000} />}
                {flash?.error && errors?.error !== flash.error && (
                    <FlashMessage type="error" key={`flash-error-${Date.now()}`} message={flash.error} duration={3000} />
                )}
                {/* Seller Profile Section */}
                <div className="mx-auto max-w-7xl">
                    {/* Profile Header */}
                    <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 md:mb-8 md:p-8">
                        <div className="flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:items-center md:gap-8">
                            {/* Logo */}
                            <div className="relative flex-shrink-0 self-center md:self-auto">
                                {sellerData.logo ? (
                                    <img
                                        src={sellerData.logo}
                                        alt={`${sellerData.business_name} logo`}
                                        className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg sm:h-24 sm:w-24 md:h-28 md:w-28"
                                    />
                                ) : (
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-blue-800 text-xl font-bold text-white shadow-lg sm:h-24 sm:w-24 sm:text-2xl md:h-28 md:w-28 md:text-3xl">
                                        {getInitials(sellerData.business_name)}
                                    </div>
                                )}
                            </div>

                            {/* Business Info */}
                            <div className="w-full min-w-0 flex-1">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                                    <div className="min-w-0 flex-1">
                                        <h1 className="mb-2 text-lg leading-tight font-bold text-gray-900 sm:mb-3 sm:text-xl md:text-2xl lg:text-3xl">
                                            {sellerData.business_name}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <a
                                                href={`https://www.google.com/maps?q=${sellerData.lat},${sellerData.long}`}
                                                target="_blank"
                                                className="flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2"
                                            >
                                                <i className="fas fa-map-marker-alt mr-1.5 text-xs text-primary sm:mr-2 sm:text-sm" />
                                                <span className="text-xs font-medium text-gray-700 sm:text-sm">
                                                    {sellerData.barangay}, {sellerData.location}
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3">
                                        {/* <button
                                            onClick={() => openEditModal('logo')}
                                            className="flex min-w-[100px] items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg sm:min-w-[110px] sm:px-5 sm:py-2.5 sm:text-sm md:min-w-[120px] md:rounded-xl md:px-6 md:py-3"
                                        >
                                            <i className="fas fa-edit mr-1.5 text-xs sm:mr-2 sm:text-sm" />
                                            Edit
                                        </button> */}
                                    </div>
                                </div>
                                {/* Additional Info */}
                                <div className="mt-4 border-t border-gray-100 pt-4 sm:mt-5 sm:pt-5 md:mt-6 md:pt-6">
                                    <div className="flex flex-wrap gap-3 text-xs text-gray-600 sm:gap-4 sm:text-sm">
                                        <div className="flex items-center">
                                            <i className="fas fa-user mr-1.5 text-xs text-primary sm:mr-2 sm:text-sm" />
                                            <span>{sellerData.owner_name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar mr-1.5 text-xs text-primary sm:mr-2 sm:text-sm" />
                                            <span>Member since {formatDate(sellerData.created_at)}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-box mr-1.5 text-xs text-primary sm:mr-2 sm:text-sm" />
                                            <span>{active} Active Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {auth?.user && Number(auth.user.id) === Number(sellerData.user_id) && (
                        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                                    <i className="fas fa-box text-xl text-primary" />
                                </div>
                                <p className="text-2xl font-bold text-gray-800">{active}</p>
                                <p className="mt-1 text-xs text-gray-600">Active Products</p>
                            </div>

                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                                    <i className="fas fa-calendar-alt text-xl text-primary" />
                                </div>
                                <p className="text-2xl font-bold text-gray-800">{calculateMonthsActive()}</p>
                                <p className="mt-1 text-xs text-gray-600">Months Active</p>
                            </div>

                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                                    <i className="fas fa-clock text-xl text-primary" />
                                </div>
                                <p className="text-2xl font-bold text-gray-800">{pending}</p>
                                <p className="mt-1 text-xs text-gray-600">Pending Products</p>
                            </div>

                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                                    <i className="fas fa-edit text-xl text-primary" />
                                </div>
                                <p className="text-2xl font-bold text-gray-800">{edit}</p>
                                <p className="mt-1 text-xs text-gray-600">Pending Edit</p>
                            </div>
                        </div>
                    )}

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Left Column - Business Info */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* About Section */}
                            <div className="hover-lift relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="flex items-center text-lg font-bold text-gray-800">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-info-circle text-primary" />
                                        </div>
                                        About
                                    </h3>
                                    {auth?.user && Number(auth.user.id) === Number(sellerData.user_id) && (
                                        <button
                                            onClick={() => openEditModal('about')}
                                            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                                        >
                                            <i className="fas fa-edit text-xs" />
                                            Edit
                                        </button>
                                    )}
                                </div>
                                <p className="leading-relaxed text-gray-700">{sellerData.bio || 'No bio provided.'}</p>
                            </div>

                            {/* Product Description */}
                            <div className="hover-lift relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="flex items-center text-lg font-bold text-gray-800">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-boxes text-primary" />
                                        </div>
                                        Product Description
                                    </h3>
                                    {auth?.user && Number(auth.user.id) === Number(sellerData.user_id) && (
                                        <button
                                            onClick={() => openEditModal('description')}
                                            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                                        >
                                            <i className="fas fa-edit text-xs" />
                                            Edit
                                        </button>
                                    )}
                                </div>
                                <p className="leading-relaxed text-gray-700">
                                    {sellerData.product_description || 'No product description provided.'}
                                </p>
                            </div>

                            {/* Product Categories */}
                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                        <i className="fas fa-tags text-primary" />
                                    </div>
                                    Product Categories
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {sellerData.category ? (
                                        sellerData.category
                                            .replace(/[\[\]"]/g, '')
                                            .split(',')
                                            .map((cat, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center rounded-full bg-primary px-4 py-2 text-xs text-white shadow-sm lg:text-sm"
                                                >
                                                    <i className="fas fa-tag mr-2" />
                                                    {cat.trim()}
                                                </span>
                                            ))
                                    ) : (
                                        <span className="text-gray-500">No categories specified</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact & Details */}
                        <div className="space-y-6">
                            {/* Contact Information */}
                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="flex items-center text-lg font-bold text-gray-800">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-address-card text-primary" />
                                        </div>
                                        Contact Information
                                    </h3>
                                    {auth?.user && Number(auth.user.id) === Number(sellerData.user_id) && (
                                        <button
                                            onClick={() => openEditModal('contact')}
                                            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                                        >
                                            <i className="fas fa-edit text-xs" />
                                            Edit
                                        </button>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100">
                                        <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-user text-sm text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Owner</p>
                                            <p className="text-sm font-medium text-gray-800">{sellerData.owner_name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100">
                                        <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-phone text-sm text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Contact Number</p>
                                            <p className="text-sm font-medium text-gray-800">{sellerData.owner_contact}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100">
                                        <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-envelope text-sm text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Email</p>
                                            <p className="text-sm font-medium text-gray-800">{sellerData.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Details */}
                            <div className="hover-lift rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                        <i className="fas fa-store text-primary" />
                                    </div>
                                    Business Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                        <div className="flex items-center">
                                            <i className="fas fa-tag mr-3 text-primary" />
                                            <span className="text-sm font-medium text-gray-700">Price Range</span>
                                        </div>
                                        <span className="text-sm font-bold text-primary">
                                            ₱{sellerData.min_price} - ₱{sellerData.max_price}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                        <div className="flex items-center">
                                            <i className="fas fa-box mr-3 text-primary" />
                                            <span className="text-sm font-medium text-gray-700">Availability</span>
                                        </div>
                                        <span className="text-sm font-bold text-primary">{sellerData.availability}</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar mr-3 text-primary" />
                                            <span className="text-sm font-medium text-gray-700">Member Since</span>
                                        </div>
                                        <span className="text-sm font-bold text-primary">{formatDate(sellerData.created_at)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="hover-lift relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="flex items-center text-lg font-bold text-gray-800">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                                            <i className="fas fa-share-alt text-primary" />
                                        </div>
                                        Follow Us
                                    </h3>
                                    {auth?.user && Number(auth.user.id) === Number(sellerData.user_id) && (
                                        <button
                                            onClick={() => openEditModal('social')}
                                            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                                        >
                                            <i className="fas fa-edit text-xs" />
                                            Edit
                                        </button>
                                    )}
                                </div>
                                <div className="flex justify-center space-x-4">
                                    {sellerData.facebook_link && (
                                        <a
                                            href={sellerData.facebook_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition duration-300 hover:bg-blue-800"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    )}

                                    {sellerData.instagram_link && (
                                        <a
                                            href={sellerData.instagram_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition duration-300 hover:bg-blue-800"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    )}
                                    {sellerData.tiktok_link && (
                                        <a
                                            href={sellerData.tiktok_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition duration-300 hover:bg-blue-800"
                                        >
                                            <i className="fab fa-tiktok" />
                                        </a>
                                    )}
                                    {sellerData.website_link && (
                                        <a
                                            href={sellerData.website_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition duration-300 hover:bg-blue-800"
                                        >
                                            <i className="fas fa-globe" />
                                        </a>
                                    )}
                                    {!sellerData.facebook_link &&
                                        !sellerData.instagram_link &&
                                        !sellerData.tiktok_link &&
                                        !sellerData.website_link && <p className="text-sm text-gray-500">No social links provided</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md">
                    <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl">
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900">{getModalTitle()}</h3>
                                <button onClick={closeEditModal} className="text-gray-400 transition-colors hover:text-gray-600">
                                    <i className="fas fa-times text-xl" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {renderEditForm()}

                                <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={closeEditModal}
                                        disabled={processing}
                                        className="w-full flex-1 rounded-full border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50 sm:text-base"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full flex-1 rounded-full bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800 disabled:opacity-50 sm:text-base"
                                    >
                                        {processing ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
