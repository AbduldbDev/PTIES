import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import { FormEvent, useState } from 'react';

type BannerProps = {
    id: string;
    key: string;
    title: string;
    subtitle: string;
    desc: string;
    image: File | null;
};

type FormData = {
    id: string;
    key: string;
    title: string;
    subtitle: string;
    desc: string;
    image: File | null;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    details: BannerProps;
    csrf_token: string;
};

export default function AccountEditForm() {
    const { flash, errors, details, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        id: details.id,
        key: details.key,
        title: details.title,
        subtitle: details.subtitle,
        desc: details.desc,
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const requiredFields: (keyof FormData)[] = ['title', 'subtitle', 'desc'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/cms/banner/update`, {
            forceFormData: true,
            onSuccess: () => {
                form.setData({
                    ...form.data,
                });
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <>
            <Head title="Edit User Account" />
            <AppWrapper>
                <PageMeta title="Edit User Account" description="Edit existing user account information" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                        <ComponentCard title="Edit Banner">
                            <div className="overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
                                <Banner
                                    title={form.data.title}
                                    subtitle={form.data.subtitle}
                                    desc={form.data.desc}
                                    imageSrc={
                                        form.data.image instanceof File
                                            ? URL.createObjectURL(form.data.image)
                                            : form.data.image
                                              ? `/storage/${form.data.image}`
                                              : '/User/Images/church.jpg'
                                    }
                                ></Banner>
                            </div>
                            <div className="grid grid-cols-1 gap-0 lg:gap-10 xl:grid-cols-2">
                                <div>
                                    <InputField
                                        type="text"
                                        label="Banner Title"
                                        name="title"
                                        required={true}
                                        value={form.data.title}
                                        onChange={(e) => form.setData('title', e.target.value)}
                                        error={form.errors.title}
                                        errorMessage="Please enter banner title"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Banner Subtitle"
                                        name="subtitle"
                                        required={true}
                                        value={form.data.subtitle}
                                        onChange={(e) => form.setData('subtitle', e.target.value)}
                                        error={form.errors.subtitle}
                                        errorMessage="Please enter banner subtitle"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Banner Description"
                                        name="desc"
                                        required={true}
                                        value={form.data.desc}
                                        onChange={(e) => form.setData('desc', e.target.value)}
                                        error={form.errors.desc}
                                        errorMessage="Please enter banner description"
                                        resetSignal={resetSignal}
                                    />
                                </div>
                                <div>
                                    <FileInput
                                        label="Banner Image"
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                const file = e.target.files[0];
                                                if (file.size > 5 * 1024 * 1024) {
                                                    form.setError('image', 'File must be under 5MB');
                                                } else {
                                                    form.clearErrors('image');
                                                    form.setData('image', file);
                                                }
                                            }
                                        }}
                                        error={form.errors.image}
                                        errorMessage={form.errors.image || 'File must be under 5MB'}
                                        resetSignal={resetSignal}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-3 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Banner'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
