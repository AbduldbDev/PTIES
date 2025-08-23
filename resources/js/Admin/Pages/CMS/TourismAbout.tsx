import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import TourismAbout from '@UserUtils/components/Sections/Tourism/TourismAbout';
import { FormEvent, useMemo, useState } from 'react';

type TourismAboutProps = {
    responsibilities: never[];
    goals: never[];
    description: string;
    facts: string;
    image1: string | null;
    image2: string | null;
    image3: string | null;
};

type FormData = {
    description: string;
    facts: string;
    image1: File | null;
    image2: File | null;
    image3: File | null;
    responsibilities: Responsibilities[];
    goals: Goals[];
};

type Responsibilities = {
    icon: string;
    title: string;
    desc: string;
};

type Goals = {
    title: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content?: {
        about?: TourismAboutProps;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const initialFormData = {
        description: content?.about?.description || '',
        facts: content?.about?.facts || '',
        responsibilities: content?.about?.responsibilities || [],
        goals: content?.about?.goals || [],
        image1: null,
        image2: null,
        image3: null,
    };
    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/tourism-about-section`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageField: keyof FormData) => {
        if (e.target.files && e.target.files[0]) {
            form.setData(imageField, e.target.files[0]);
        }
    };

    const heroImageUrl1 = useMemo(() => {
        if (form.data.image1 instanceof File) {
            return URL.createObjectURL(form.data.image1);
        }
        return content?.about?.image1 ? `/storage/${content?.about?.image1}` : '/User/Images/church.jpg';
    }, [form.data.image1, content?.about?.image1]);

    const heroImageUrl2 = useMemo(() => {
        if (form.data.image2 instanceof File) {
            return URL.createObjectURL(form.data.image2);
        }
        return content?.about?.image2 ? `/storage/${content?.about?.image2}` : '/User/Images/church.jpg';
    }, [form.data.image2, content?.about?.image2]);

    const heroImageUrl3 = useMemo(() => {
        if (form.data.image3 instanceof File) {
            return URL.createObjectURL(form.data.image3);
        }
        return content?.about?.image3 ? `/storage/${content?.about?.image3}` : '/User/Images/church.jpg';
    }, [form.data.image3, content?.about?.image3]);

    const [newResponsibilities, setNewResponsibilities] = useState<Responsibilities>({
        icon: '',
        title: '',
        desc: '',
    });

    const addResponsibilities = () => {
        if (newResponsibilities.title.trim()) {
            form.setData('responsibilities', [...form.data.responsibilities, newResponsibilities]);
            setNewResponsibilities({ title: '', icon: '', desc: '' });
        }
    };

    const updateResponsibilities = (index: number, updatedResponsibilities: Responsibilities) => {
        const updatedresponsibilities = [...form.data.responsibilities];
        updatedresponsibilities[index] = updatedResponsibilities;
        form.setData('responsibilities', updatedresponsibilities);
    };

    const removeResponsibilities = (index: number) => {
        const updatedresponsibilities = form.data.responsibilities.filter((_, i) => i !== index);
        form.setData('responsibilities', updatedresponsibilities);
    };

    const [newGoals, setNewGoals] = useState<Goals>({
        title: '',
    });

    const addGoals = () => {
        if (newGoals.title.trim()) {
            form.setData('goals', [...form.data.goals, newGoals]);
            setNewGoals({ title: '' });
        }
    };

    const updateGoals = (index: number, updatedGoals: Goals) => {
        const updatedgoals = [...form.data.goals];
        updatedgoals[index] = updatedGoals;
        form.setData('goals', updatedgoals);
    };

    const removeGoals = (index: number) => {
        const updatedgoals = form.data.goals.filter((_, i) => i !== index);
        form.setData('goals', updatedgoals);
    };

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

                    <ComponentCard title="Edit Tourism About Section">
                        <div className="texture-box overflow-hidden rounded-xl p-3">
                            <TourismAbout
                                content={{
                                    ...form.data,
                                    image1: heroImageUrl1,
                                    image2: heroImageUrl2,
                                    image3: heroImageUrl3,
                                }}
                            />
                        </div>
                    </ComponentCard>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Tourism About Content">
                            <div>
                                <Textarea
                                    label="Description"
                                    name="description"
                                    value={form.data.description}
                                    onChange={(e) => form.setData('description', e.target.value)}
                                    required={true}
                                    readonly={false}
                                    error={form.errors.description}
                                    errorMessage="Please enter video description"
                                    rows={15}
                                />
                            </div>
                        </ComponentCard>
                        <ComponentCard className="mt-10" title="Tourism About Facts">
                            <div>
                                <InputField
                                    type="text"
                                    label="Facts"
                                    name="facts"
                                    required={true}
                                    value={form.data.facts}
                                    onChange={(e) => form.setData('facts', e.target.value)}
                                    error={form.errors.facts}
                                    errorMessage="Please enter facts"
                                    resetSignal={resetSignal}
                                />

                                <FileInput
                                    label="Image 1"
                                    name="image1"
                                    onChange={(e) => handleImageChange(e, 'image1')}
                                    error={form.errors.image1}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />

                                <FileInput
                                    label="Image 2"
                                    name="image2"
                                    onChange={(e) => handleImageChange(e, 'image2')}
                                    error={form.errors.image2}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />

                                <FileInput
                                    label="Image 3"
                                    name="image3"
                                    onChange={(e) => handleImageChange(e, 'image3')}
                                    error={form.errors.image3}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />
                            </div>
                        </ComponentCard>
                    </div>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Responsibilities">
                            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Responsibility</h3>

                                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-12">
                                    <div className="md:col-span-7">
                                        <InputField
                                            label="Responsibility Title"
                                            name="new_Responsibilities"
                                            value={newResponsibilities.title}
                                            onChange={(e) => setNewResponsibilities({ ...newResponsibilities, title: e.target.value })}
                                            required={false}
                                            errorMessage="Please enter responsibility text"
                                            placeholder="Enter responsibility title"
                                        />
                                    </div>

                                    <div className="md:col-span-4">
                                        <SelectField
                                            label="Select Icon"
                                            name="Icon"
                                            options={[
                                                { value: 'fa-church', label: 'Religion' },
                                                { value: 'fa-music', label: 'Music' },
                                                { value: 'fa-calendar-day', label: 'Calendar' },
                                                { value: 'fa-seedling', label: 'Seedling' },
                                                { value: 'fa-tree', label: 'Tree' },
                                                { value: 'fa-user-graduate', label: 'User' },
                                                { value: 'fa-tools', label: 'Tools' },
                                                { value: 'fa-map-marked-alt', label: 'Maps' },
                                            ]}
                                            required={true}
                                            value={newResponsibilities.icon}
                                            onChange={(e) => setNewResponsibilities({ ...newResponsibilities, icon: e.target.value })}
                                            error={form.errors.responsibilities}
                                            errorMessage="Please select an icon"
                                        />
                                    </div>

                                    <div className="flex items-center md:col-span-1">
                                        <button
                                            type="button"
                                            onClick={addResponsibilities}
                                            disabled={form.processing || !newResponsibilities.title.trim()}
                                            className={`flex h-11 w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                form.processing || !newResponsibilities.title.trim()
                                                    ? 'cursor-not-allowed bg-blue-400'
                                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                            }`}
                                            title="Add responsibility"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>

                                <Textarea
                                    rows={3}
                                    label="Description"
                                    name="Description"
                                    value={newResponsibilities.desc}
                                    onChange={(e) => setNewResponsibilities({ ...newResponsibilities, desc: e.target.value })}
                                    required={true}
                                    error={form.errors.responsibilities}
                                    errorMessage="Please enter responsibility description"
                                    placeholder="Enter detailed description of this responsibility"
                                />
                            </div>

                            <div className="mt-6 rounded-lg">
                                <div className="mb-4 flex items-center justify-between">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                        Current Responsibilities
                                        {form.data.responsibilities.length > 0 && (
                                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                (Items: {form.data.responsibilities.length})
                                            </span>
                                        )}
                                    </h4>
                                </div>

                                {form.data.responsibilities.length === 0 ? (
                                    <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                        <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                        <p>No responsibilities added yet</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4" id="responsibilities-list">
                                        {form.data.responsibilities.map((responsibility, index) => (
                                            <div
                                                key={index}
                                                className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                            >
                                                <div className="mb-3 flex items-start gap-3">
                                                    <div className="mt-9 flex cursor-grab flex-col items-center text-gray-500 active:cursor-grabbing dark:text-gray-400">
                                                        <i className={`fas ${responsibility.icon} text-lg`}></i>
                                                    </div>

                                                    <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-12">
                                                        <div className="md:col-span-7">
                                                            <InputField
                                                                label={`Responsibility ${index + 1}`}
                                                                name={`Responsibilities_${index}`}
                                                                value={responsibility.title}
                                                                onChange={(e) =>
                                                                    updateResponsibilities(index, { ...responsibility, title: e.target.value })
                                                                }
                                                                required={true}
                                                                error={form.errors.responsibilities}
                                                                errorMessage="Please enter responsibility title"
                                                            />
                                                        </div>

                                                        <div className="md:col-span-4">
                                                            <SelectField
                                                                label="Icon"
                                                                name="Icon"
                                                                options={[
                                                                    { value: 'fa-church', label: 'Religion' },
                                                                    { value: 'fa-music', label: 'Music' },
                                                                    { value: 'fa-calendar-day', label: 'Calendar' },
                                                                    { value: 'fa-seedling', label: 'Seedling' },
                                                                    { value: 'fa-tree', label: 'Tree' },
                                                                    { value: 'fa-user-graduate', label: 'User' },
                                                                    { value: 'fa-tools', label: 'Tools' },
                                                                    { value: 'fa-map-marked-alt', label: 'Maps' },
                                                                ]}
                                                                required={true}
                                                                value={responsibility.icon}
                                                                onChange={(e) =>
                                                                    updateResponsibilities(index, { ...responsibility, icon: e.target.value })
                                                                }
                                                                error={form.errors.responsibilities}
                                                                errorMessage="Please select an icon"
                                                            />
                                                        </div>

                                                        <div className="flex items-center md:col-span-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeResponsibilities(index)}
                                                                disabled={form.processing}
                                                                className={`flex h-11 w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                                    form.processing
                                                                        ? 'cursor-not-allowed bg-red-400'
                                                                        : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                                                }`}
                                                                title="Remove responsibility"
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Textarea
                                                    rows={3}
                                                    label="Description"
                                                    name={`Description_${index}`}
                                                    value={responsibility.desc}
                                                    onChange={(e) => updateResponsibilities(index, { ...responsibility, desc: e.target.value })}
                                                    required={true}
                                                    error={form.errors.responsibilities}
                                                    errorMessage="Please enter responsibility description"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </ComponentCard>
                        <ComponentCard className="mt-10" title="Goals">
                            <div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <InputField
                                                label="Goal Title"
                                                name="new_goals"
                                                value={newGoals.title}
                                                onChange={(e) => setNewGoals({ ...newGoals, title: e.target.value })}
                                                required={false}
                                                errorMessage="Please enter Responsibilities text"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={addGoals}
                                            disabled={form.processing || !newGoals.title.trim()}
                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                form.processing || !newGoals.title.trim()
                                                    ? 'cursor-not-allowed bg-blue-400'
                                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                            }`}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-lg">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                            Current Goals
                                            {form.data.goals.length > 0 && (
                                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                    (Items: {form.data.goals.length})
                                                </span>
                                            )}
                                        </h4>
                                    </div>
                                    {form.data.goals.length === 0 ? (
                                        <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                            <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                            <p>No goals added yet</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4" id="goals-list">
                                            {form.data.goals.map((goal, index) => (
                                                <div
                                                    className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                                    key={index}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex-1">
                                                            <InputField
                                                                label={`Goal ${index + 1}`}
                                                                name={`goals_${index}`}
                                                                value={goal.title}
                                                                onChange={(e) => updateGoals(index, { ...goal, title: e.target.value })}
                                                                required={true}
                                                                error={form.errors.responsibilities}
                                                                errorMessage="Please enter goal title"
                                                            />
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => removeGoals(index)}
                                                            disabled={form.processing}
                                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                                form.processing
                                                                    ? 'cursor-not-allowed bg-red-400'
                                                                    : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                                            }`}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ComponentCard>
                    </div>

                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Tourism About Section'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
