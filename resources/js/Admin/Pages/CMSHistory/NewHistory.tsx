import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FormData = {
    date: string;
    title: string;
    description: string;
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
        date: '',
        title: '',
        description: '',
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['date', 'title', 'description', 'image'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/cms/pakil-history/create', {
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
                <PageBreadcrumb pageTitle="Pakil History Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                {/* Rest of your form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="History Details">
                            <InputField
                                type="text"
                                label="Title"
                                name="title"
                                required={true}
                                value={form.data.title}
                                onChange={(e) => form.setData('title', e.target.value)}
                                error={form.errors.title}
                                errorMessage="Please enter history title"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Date"
                                name="date"
                                required={true}
                                value={form.data.date}
                                onChange={(e) => form.setData('date', e.target.value)}
                                error={form.errors.date}
                                errorMessage="Please enter history date"
                                resetSignal={resetSignal}
                            />

                            <FileInput
                                label="History Image"
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
                        </ComponentCard>

                        <ComponentCard title="History Description">
                            <Textarea
                                label="History Description"
                                name="description"
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.description}
                                errorMessage="Please enter history description"
                                rows={12}
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
                        {form.processing ? 'Processing...' : 'Add New History'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
