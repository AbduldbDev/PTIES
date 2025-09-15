import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FormData = {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    parent_id: number | null;
};
interface Departments {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    parent_id?: number;
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
    items: Departments[];
    item: Departments;
};

export default function GuideCreateForm() {
    const { flash, errors, items, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        icon: item.icon,
        parent_id: item.parent_id || null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['title', 'subtitle', 'description', 'icon'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/structure/department/create', {
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
                <PageBreadcrumb pageTitle="Department Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit Department">
                            <InputField
                                type="text"
                                label="Department Name"
                                name="title"
                                required={true}
                                value={form.data.title}
                                onChange={(e) => form.setData('title', e.target.value)}
                                error={form.errors.title}
                                errorMessage="Please enter department name"
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
                                label="Description"
                                name="description"
                                required={true}
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                error={form.errors.description}
                                errorMessage="Please enter description"
                                resetSignal={resetSignal}
                            />
                            <SelectField
                                label="Department Icon"
                                name="icon"
                                options={[
                                    // Tourism & Culture
                                    { value: 'fa-umbrella-beach', label: 'Tourism' },
                                    { value: 'fa-landmark', label: 'Heritage / Landmark' },
                                    { value: 'fa-palette', label: 'Arts & Culture' },
                                    { value: 'fa-theater-masks', label: 'Events / Festivals' },
                                    { value: 'fa-hotel', label: 'Hospitality / Hotels' },
                                    { value: 'fa-mountain', label: 'Mountain / Hiking' },
                                    { value: 'fa-water', label: 'Water / Rivers / Lakes' },
                                    { value: 'fa-tree', label: 'Environment / Parks' },

                                    // LGU Core Departments
                                    { value: 'fa-users', label: 'Community / People' },
                                    { value: 'fa-user-tie', label: 'Mayor / Officials' },
                                    { value: 'fa-gavel', label: 'Legal / Council' },
                                    { value: 'fa-building-columns', label: 'Government / LGU Office' },
                                    { value: 'fa-handshake', label: 'Public Service' },
                                    { value: 'fa-briefcase', label: 'Business / Permits' },

                                    // Infrastructure & Services
                                    { value: 'fa-road', label: 'Infrastructure / Roads' },
                                    { value: 'fa-bus', label: 'Transportation' },
                                    { value: 'fa-tools', label: 'Engineering / Public Works' },
                                    { value: 'fa-bolt', label: 'Utilities / Energy' },
                                    { value: 'fa-recycle', label: 'Waste Management' },
                                    { value: 'fa-shield-alt', label: 'Disaster / Safety' },

                                    // Education & Health
                                    { value: 'fa-school', label: 'Education' },
                                    { value: 'fa-user-graduate', label: 'Scholarships / Training' },
                                    { value: 'fa-book', label: 'Libraries / Knowledge' },
                                    { value: 'fa-hospital', label: 'Health Services' },
                                    { value: 'fa-ambulance', label: 'Emergency / Rescue' },
                                    { value: 'fa-seedling', label: 'Agriculture' },
                                    { value: 'fa-fish', label: 'Fisheries' },
                                    { value: 'fa-tractor', label: 'Farming Support' },

                                    // Culture, Events & Recreation
                                    { value: 'fa-music', label: 'Music / Arts' },
                                    { value: 'fa-calendar-day', label: 'Events / Calendar' },
                                    { value: 'fa-church', label: 'Religion / Faith-based' },
                                    { value: 'fa-paintbrush', label: 'Creative Arts' },
                                    { value: 'fa-drum', label: 'Cultural Performances' },
                                    { value: 'fa-map-marked-alt', label: 'Maps / Directions' },

                                    // Other Support
                                    { value: 'fa-hand-holding-heart', label: 'Social Welfare' },
                                    { value: 'fa-utensils', label: 'Food & Culinary Tourism' },
                                    { value: 'fa-leaf', label: 'Sustainability' },
                                    { value: 'fa-flag', label: 'Barangay / Local Units' },
                                ]}
                                required={true}
                                value={form.data.icon}
                                onChange={(e) => form.setData('icon', e.target.value)}
                                errorMessage="Please select an icon"
                            />

                            <SelectField
                                label="Department Head"
                                name="department"
                                options={[
                                    { value: '', label: '— None —' },
                                    ...items.map((dept) => ({
                                        value: String(dept.id),
                                        label: dept.title,
                                    })),
                                ]}
                                required={false}
                                value={form.data.parent_id ? String(form.data.parent_id) : ''}
                                onChange={(e) => form.setData('parent_id', e.target.value ? parseInt(e.target.value, 10) : null)}
                                error={form.errors.parent_id}
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Department'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
