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

type RewardsProps = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    status: number;
};

type FormData = {
    name: string;
    description: string;
    category: string;
    points: number;
    image: File | null;
    status: number;
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
    item: RewardsProps;
};

export default function GuideCreateForm() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        name: item.name,
        description: item.description,
        category: item.category,
        points: Number(item.price),
        image: null,
        status: Number(item.status),
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'category', 'description', 'points'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/rewards/update/${item.id}`, {
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
                <PageBreadcrumb pageTitle="Gamification Rewards Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit Reward">
                            <InputField
                                type="text"
                                label="Reward  Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter reward name"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="number"
                                label="Points Needed"
                                name="points"
                                required={true}
                                value={form.data.points?.toString() || ''}
                                onChange={(e) => form.setData('points', Number(e.target.value))}
                                error={form.errors.points}
                                errorMessage="Please enter reward price"
                                resetSignal={resetSignal}
                            />

                            <SelectField
                                label="Category"
                                name="category"
                                options={[
                                    { value: 'cultural', label: 'Cultural' },
                                    { value: 'nature', label: 'Nature' },
                                    { value: 'historical', label: 'Historical' },
                                    { value: 'religious', label: 'Religious' },
                                ]}
                                required={true}
                                value={form.data.category}
                                onChange={(e) => form.setData('category', e.target.value)}
                                error={form.errors.category}
                                errorMessage="Please select a valid category"
                            />

                            <Textarea
                                label="Description"
                                name="description"
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.description}
                                errorMessage="Please enter reward description"
                                rows={5}
                            />

                            <SelectField
                                label="Status"
                                name="status"
                                options={[
                                    { value: '0', label: 'Inactive' },
                                    { value: '1', label: 'Active' },
                                ]}
                                required={true}
                               value={form.data.status?.toString() || ''}
                                onChange={(e) => form.setData('status', Number(e.target.value))}
                                error={form.errors.status}
                                errorMessage="Please select a valid status"
                            />

                            <FileInput
                                label="Reward Image"
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
                                {form.processing ? 'Processing...' : 'Update Gamification Reward'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
