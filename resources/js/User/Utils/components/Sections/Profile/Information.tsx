import { useForm, usePage } from '@inertiajs/react';
import { ChangeEvent, useRef, useState } from 'react';

type User = {
    id: number;
    email: string;
    avatar?: string;
    pakil_points: number;
    created_at: string;
};

type UserProfile = {
    first_name: string;
    middle_name?: string;
    last_name: string;
    phone?: string;
    address?: string;
    user: User;
};
type PageProps = {
    item: UserProfile;
};

export default function Information() {
    const { item } = usePage<PageProps>().props;
    const [isEditing, setIsEditing] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        first_name: item.first_name,
        middle_name: item.middle_name || '',
        last_name: item.last_name,
        phone: item.phone || '',
        address: item.address || '',
        avatar: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(`/profile/update/${item.user.id}`, {
            forceFormData: true,
            onSuccess: () => {
                reset();
                clearErrors();
                setIsEditing(false);
            },
        });
    };

    const handleCancel = () => {
        reset();
        clearErrors();
        setIsEditing(false);
        setAvatarPreview(null);
        setData({
            first_name: item.first_name,
            middle_name: item.middle_name || '',
            last_name: item.last_name,
            phone: item.phone || '',
            address: item.address || '',
            avatar: null,
        });
    };

    const handleAvatarClick = () => {
        if (isEditing && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('avatar', file);

            const reader = new FileReader();
            reader.onload = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const getAvatarUrl = () => {
        if (avatarPreview) {
            return avatarPreview;
        }
        if (item?.user?.avatar && item.user.avatar.trim() !== '') {
            return item.user.avatar;
        }
        return '/images/user/User.png';
    };

    return (
        <section className="mt-10 py-1 lg:py-4">
            <div className="container mx-auto px-4">
                <div className="mb-8 hidden items-start gap-6 md:flex">
                    <div className="group relative flex-shrink-0">
                        <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                            <img src={getAvatarUrl()} alt="Profile photo" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-dark mb-2 text-3xl font-bold">
                            <span className="text-primary">{item.first_name} </span> {item.middle_name ?? ''} {item.last_name}
                        </h1>

                        <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-primary">
                            <img src="/User/Layout/Pakilpoints.png" className="mr-2 h-[28px] w-[28px]" alt="" />
                            <span className="text-sm font-medium">
                                {(item.user.pakil_points ?? 0) === 0 ? 0 : (item.user.pakil_points ?? 0).toLocaleString()}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="mb-1 text-xs text-gray-500">Member Since</p>
                                <p className="font-medium">
                                    {item.user.created_at
                                        ? new Date(item.user.created_at).toLocaleDateString('en-US', {
                                              month: 'long',
                                              day: 'numeric',
                                              year: 'numeric',
                                          })
                                        : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="mb-1 text-xs text-gray-500">Email</p>
                                <p className="truncate font-medium">{item.user.email}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-xs text-gray-500">Phone</p>
                                <p className="font-medium">{item.phone ?? 'N/A'}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-xs text-gray-500">Location</p>
                                <p className="font-medium">{item.address ?? 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6 flex flex-col items-center md:hidden">
                    <div className="group relative mb-4">
                        <div className="absolute -inset-2 rounded-full bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
                            <img src={getAvatarUrl()} alt="Profile photo" className="h-full w-full object-cover" />
                            <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" className="hidden" />
                            {isEditing && (
                                <button onClick={handleAvatarClick} className="absolute right-0 bottom-0 rounded-full bg-primary p-1.5 text-white">
                                    <i className="fas fa-camera text-xs"></i>
                                </button>
                            )}
                        </div>
                        {errors.avatar && <p className="mt-2 text-center text-xs text-red-600">{errors.avatar}</p>}
                    </div>

                    <div className="text-center">
                        <h1 className="text-dark text-2xl font-bold">
                            <span className="text-primary">{item.first_name} </span> {item.middle_name ?? ''} {item.last_name}
                        </h1>

                        <div className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-5 py-1.5 text-primary">
                            <img src="/User/Layout/Pakilpoints.png" className="mr-2 h-[28px] w-[28px]" alt="" />
                            <span className="text-sm font-medium">
                                {(item.user.pakil_points ?? 0) === 0 ? 0 : (item.user.pakil_points ?? 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="border-b border-gray-100 p-4">
                        <h2 className="flex items-center text-lg font-bold text-primary sm:text-lg">
                            <i className="fas fa-info-circle mr-2 text-base sm:text-lg"></i>
                            <span className="text-sm sm:text-base"> Complete Profile</span>
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {isEditing ? (
                                    <>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">First Name</label>
                                            <input
                                                type="text"
                                                value={data.first_name}
                                                onChange={(e) => setData('first_name', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                                            />
                                            {errors.first_name && <p className="mt-1 text-xs text-red-600">{errors.first_name}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Last Name</label>
                                            <input
                                                type="text"
                                                value={data.last_name}
                                                onChange={(e) => setData('last_name', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                                            />
                                            {errors.last_name && <p className="mt-1 text-xs text-red-600">{errors.last_name}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Middle Name</label>
                                            <input
                                                type="text"
                                                value={data.middle_name}
                                                onChange={(e) => setData('middle_name', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                                            />
                                            {errors.middle_name && <p className="mt-1 text-xs text-red-600">{errors.middle_name}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Phone</label>
                                            <input
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                                            />
                                            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="mb-1 block text-xs text-gray-500">Address</label>
                                            <textarea
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                rows={3}
                                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                                            />
                                            {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="mb-1 block text-xs text-gray-500">Profile Photo</label>
                                            <div className="flex items-center space-x-4">
                                                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gray-300">
                                                    <img src={getAvatarUrl()} alt="Profile preview" className="h-full w-full object-cover" />
                                                </div>
                                                <div>
                                                    <input
                                                        type="file"
                                                        ref={fileInputRef}
                                                        onChange={handleAvatarChange}
                                                        accept="image/*"
                                                        className="hidden"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={handleAvatarClick}
                                                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                    >
                                                        Change Photo
                                                    </button>
                                                    <p className="mt-1 text-xs text-gray-500">JPG, PNG, WEBP or GIF. Max 25MB.</p>
                                                </div>
                                            </div>
                                            {errors.avatar && <p className="mt-1 text-xs text-red-600">{errors.avatar}</p>}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">First Name</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.first_name}</div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Last Name</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.last_name}</div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Middle Name</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.middle_name || 'N/A'}</div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Email</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.user.email}</div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Phone</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.phone ?? 'N/A'}</div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-xs text-gray-500">Address</label>
                                            <div className="rounded-lg bg-gray-50 px-3 py-2">{item.address ?? 'N/A'}</div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {isEditing ? (
                                <div className="mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90 disabled:opacity-50"
                                    >
                                        <i className="fas fa-save mr-2"></i> {processing ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="flex items-center justify-center rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                                    >
                                        <i className="fas fa-times mr-2"></i> Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition hover:bg-primary/90 md:w-auto"
                                >
                                    <i className="fas fa-edit mr-2"></i> Edit Profile
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
