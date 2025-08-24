import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type GuideProps = {
    id: string;
    name: string;
    gender: string;
    description: string;
    contact: string;
    facebook: string;
    image: string;
};

type FormData = {
    id: string;
    name: string;
    gender: string;
    description: string;
    contact: string;
    facebook: string;
    image: File | null;
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
    item: GuideProps;
};

export default function EditGuide() {
    const { flash, errors, item, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        id: item.id,
        name: item.name,
        gender: item.gender,
        contact: item.contact,
        description: item.description,
        facebook: item.facebook,
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'gender', 'contact', 'description', 'facebook'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/tour-guides/update/${item.id}`, {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.setData({
                    ...form.data,
                });
                form.clearErrors();
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Tour Guides Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit Tour Guide">
                            <InputField
                                type="text"
                                label="Full Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter guide fullname "
                                resetSignal={resetSignal}
                            />
                            <SelectField
                                label="Gender"
                                name="gender"
                                options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                    { value: 'other', label: 'Other' },
                                ]}
                                required={true}
                                value={form.data.gender}
                                onChange={(e) => form.setData('gender', e.target.value)}
                                error={form.errors.gender}
                                errorMessage="Please select a valid gender"
                            />
                            <InputField
                                type="text"
                                label="Contact No."
                                name="contact"
                                required={true}
                                value={form.data.contact}
                                onChange={(e) => form.setData('contact', e.target.value)}
                                error={form.errors.contact}
                                errorMessage="Please enter contact number"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Facebook Link"
                                name="facebook"
                                required={true}
                                value={form.data.facebook}
                                onChange={(e) => form.setData('facebook', e.target.value)}
                                error={form.errors.facebook}
                                errorMessage="Please enter facebook link"
                                resetSignal={resetSignal}
                            />
                            <Textarea
                                label="Guide Description"
                                name="description"
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.description}
                                errorMessage="Please enter guide description"
                                rows={5}
                            />
                            <FileInput
                                label="Tour Guide Image"
                                name="image"
                                onChange={(e, isValid) => {
                                    if (isValid && e.target.files?.[0]) {
                                        form.setData('image', e.target.files[0]);
                                        form.clearErrors('image');
                                    } else if (!isValid) {
                                        form.setError('image', 'File must be under 5MB');
                                    }
                                }}
                                validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                error={form.errors.image}
                                errorMessage={form.errors.image || 'File must be under 5MB'}
                                resetSignal={resetSignal}
                                required={true}
                            />
                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Tour Guide'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
