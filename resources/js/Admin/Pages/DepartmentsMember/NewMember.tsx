import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FormData = {
    department: number | null;
    name: string;
    position: string;
    is_leader: string;
};

interface Department {
    id: number;
    title: string;
}

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    items: Department[];
};

export default function GuideCreateForm() {
    const { flash, errors, items } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        department: null,
        name: '',
        position: '',
        is_leader: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['is_leader', 'department', 'name', 'position'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/structure/members/create', {
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
                <PageBreadcrumb pageTitle="Department Member Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Member">
                            <InputField
                                type="text"
                                label="Member Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter name"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Member Position"
                                name="position"
                                required={true}
                                value={form.data.position}
                                onChange={(e) => form.setData('position', e.target.value)}
                                error={form.errors.position}
                                errorMessage="Please enter member position"
                                resetSignal={resetSignal}
                            />

                            <SelectField
                                label="Department"
                                name="department"
                                options={items.map((dept) => ({
                                    value: String(dept.id),
                                    label: dept.title,
                                }))}
                                required={true}
                                value={form.data.department ? String(form.data.department) : ''}
                                onChange={(e) => form.setData('department', parseInt(e.target.value, 10))}
                                error={form.errors.department}
                                errorMessage="Please select a department"
                            />

                            <SelectField
                                label="Member Type"
                                name="is_leader"
                                options={[
                                    { value: 'head', label: 'Head' },
                                    { value: 'member', label: 'Member' },
                                ]}
                                required={true}
                                value={form.data.is_leader}
                                onChange={(e) => form.setData('is_leader', e.target.value)}
                                error={form.errors.is_leader}
                                errorMessage="Please select a valid member type"
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Add Department Member'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
