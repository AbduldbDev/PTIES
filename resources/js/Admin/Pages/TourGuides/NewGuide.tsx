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

type FormData = {
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
};

export default function GuideCreateForm() {
    const { flash, errors } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        name: '',
        gender: '',
        contact: '',
        description: '',
        facebook: '',
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'gender', 'contact', 'description', 'facebook', 'image'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }
        const contactRegex = /^(09|\+639)\d{9}$/;
        if (!contactRegex.test(form.data.contact)) {
            form.setError('contact', 'Please enter a valid contact number');
            return;
        }

        form.post('/Admin/tour-guides/create', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
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

                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                {/* Rest of your form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Tour Guide">
                            <InputField
                                type="text"
                                label="Full Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter guide full name"
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
                                validation={/^[0-9]{10,15}$/}
                                required={true}
                                value={form.data.contact}
                                onChange={(e) => form.setData('contact', e.target.value)}
                                error={form.errors.contact}
                                errorMessage="Please enter valid contact number"
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
                                        form.clearErrors('image'); // Clear error when valid file is selected
                                    } else if (!isValid) {
                                        form.setError('image', 'File must be under 5MB');
                                    }
                                }}
                                validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                error={form.errors.image} // Make sure this is passed correctly
                                errorMessage={form.errors.image || 'File must be under 5MB'} // Use actual error message
                                resetSignal={resetSignal}
                                required={true} // Add required prop if supported
                            />
                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Add Tour Guide'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
