import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type BarangayInfoProps = {
    id: number;
    barangay: string;
    captain: string;
    highlights: string;
};

type FormData = {
    id: number;
    barangay: string;
    captain: string;
    highlights: string;
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
    item: BarangayInfoProps;
};

export default function GuideCreateForm() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        id: item.id,
        barangay: item.barangay,
        captain: item.captain,
        highlights: item.highlights,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['captain'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/barangay-info/update/${item.id}`, {
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
                <PageBreadcrumb pageTitle="Barangay Info Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit Barangay Info">
                            <InputField
                                type="text"
                                label="Barangay Name"
                                name="barangay"
                                required={true}
                                value={form.data.barangay}
                                onChange={(e) => form.setData('barangay', e.target.value)}
                                readonly
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Captain Name"
                                name="captain"
                                required={true}
                                value={form.data.captain}
                                onChange={(e) => form.setData('captain', e.target.value)}
                                error={form.errors.captain}
                                errorMessage="Please enter captain name"
                                resetSignal={resetSignal}
                            />
                            <Textarea
                                label="Brangay Highlights"
                                name="highlights"
                                value={form.data.highlights}
                                onChange={(e) => form.setData('highlights', e.target.value)}
                                required={false}
                                readonly={false}
                                error={form.errors.highlights}
                                errorMessage="Please enter highlights"
                                rows={5}
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Barangay Info'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
