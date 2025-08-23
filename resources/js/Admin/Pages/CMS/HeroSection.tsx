import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import HeroSection from '@/User/Utils/components/Sections/Home/Hero';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useMemo, useState } from 'react';

type HeroSectionProps = {
    title: string;
    subtitle: string;
    slogan: string;
    feature_title: string;
    feature_img: string | null;
};

type FormData = {
    title: string;
    subtitle: string;
    slogan: string;
    feature_title: string;
    feature_img: File | null;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content?: {
        hero?: HeroSectionProps;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const initialFormData = {
        title: content?.hero?.title || '',
        subtitle: content?.hero?.subtitle || '',
        slogan: content?.hero?.slogan || '',
        feature_title: content?.hero?.feature_title || '',
        feature_img: null,
    };
    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/hero-section`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            form.setData('feature_img', e.target.files[0]);
        }
    };

    const heroImageUrl = useMemo(() => {
        if (form.data.feature_img instanceof File) {
            return URL.createObjectURL(form.data.feature_img);
        }
        return content?.hero?.feature_img ? `/storage/${content?.hero?.feature_img}` : '/User/Images/church.jpg';
    }, [form.data.feature_img, content?.hero?.feature_img]);

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Hero Section" description="Edit hero section content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Edit Hero Section">
                        <div className="texture-box overflow-hidden rounded-xl">
                            <HeroSection
                                content={{
                                    ...form.data,
                                    feature_img: heroImageUrl,
                                }}
                            />
                        </div>
                    </ComponentCard>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Hero Content ">
                            <InputField
                                type="text"
                                label="Title"
                                name="title"
                                required={true}
                                value={form.data.title}
                                onChange={(e) => form.setData('title', e.target.value)}
                                error={form.errors.title}
                                errorMessage="Please enter title"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Subtitle"
                                name="subtitle"
                                required={true}
                                value={form.data.subtitle}
                                onChange={(e) => form.setData('subtitle', e.target.value)}
                                error={form.errors.subtitle}
                                errorMessage="Please enter subtitle"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Slogan"
                                name="slogan"
                                required={true}
                                value={form.data.slogan}
                                onChange={(e) => form.setData('slogan', e.target.value)}
                                error={form.errors.slogan}
                                errorMessage="Please enter slogan"
                                resetSignal={resetSignal}
                            />
                        </ComponentCard>
                        <ComponentCard className="mt-10" title="Floating Featured">
                            <InputField
                                type="text"
                                label="Feature Title"
                                name="feature_title"
                                required={true}
                                value={form.data.feature_title}
                                onChange={(e) => form.setData('feature_title', e.target.value)}
                                error={form.errors.feature_title}
                                errorMessage="Please enter feature title"
                                resetSignal={resetSignal}
                            />

                            <FileInput
                                label="Featured Image"
                                name="feature_img"
                                onChange={handleImageChange}
                                error={form.errors.feature_img}
                                errorMessage="Please select a valid image"
                                resetSignal={resetSignal}
                            />
                        </ComponentCard>
                    </div>
                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Hero Section'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
