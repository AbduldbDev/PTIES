import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FormData = {
    name: string;
    position: string;
    start_term: string;
    end_term: string;
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
        position: '',
        start_term: '',
        end_term: '',
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'position', 'start_term', 'end_term', 'image'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        const termregex = /^[0-9]{4}$/;
        if (!termregex.test(form.data.start_term)) {
            form.setError('start_term', 'Please enter a valid year');
            return;
        }

        if (!termregex.test(form.data.start_term)) {
            form.setError('end_term', 'Please enter a valid year');
            return;
        }

        form.post('/Admin/past-mayor/create', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
            },
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageField: keyof FormData) => {
        if (e.target.files && e.target.files[0]) {
            form.setData(imageField, e.target.files[0]);
        }
    };
    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Past Mayors Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard title="Add Past Mayor">
                                <InputField
                                    type="text"
                                    label="Name"
                                    name="name"
                                    required={true}
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    error={form.errors.name}
                                    errorMessage="Please enter mayor name"
                                    resetSignal={resetSignal}
                                />

                                <InputField
                                    type="text"
                                    label="Position"
                                    name="position"
                                    required={true}
                                    value={form.data.position}
                                    onChange={(e) => form.setData('position', e.target.value)}
                                    error={form.errors.position}
                                    errorMessage="Please enter mayor position"
                                    resetSignal={resetSignal}
                                />

                                <InputField
                                    type="text"
                                    label="Term Started"
                                    name="start_term"
                                    required={true}
                                    validation={/^[0-9]{4}$/}
                                    value={form.data.start_term}
                                    onChange={(e) => form.setData('start_term', e.target.value)}
                                    error={form.errors.start_term}
                                    errorMessage="Please enter the start term year."
                                    resetSignal={resetSignal}
                                />

                                <InputField
                                    type="text"
                                    label="Term Ended"
                                    name="end_term"
                                    required={true}
                                    validation={/^[0-9]{4}$/}
                                    value={form.data.end_term}
                                    onChange={(e) => form.setData('end_term', e.target.value)}
                                    error={form.errors.end_term}
                                    errorMessage="Please enter the end term year."
                                    resetSignal={resetSignal}
                                />

                                <FileInput
                                    label="Image"
                                    name="image"
                                    required={true}
                                    onChange={(e) => handleImageChange(e, 'image')}
                                    error={form.errors.image}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />
                                <button
                                    type="submit"
                                    disabled={form.processing}
                                    className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                        form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                    }`}
                                >
                                    {form.processing ? 'Processing...' : 'Add Past mayor'}
                                </button>
                            </ComponentCard>
                        </div>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
