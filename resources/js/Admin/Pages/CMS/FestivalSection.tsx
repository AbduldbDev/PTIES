import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import Festival from '@UserUtils/components/Sections/About/Festival';
import { FormEvent, useState } from 'react';

type FestivalProps = {
    name: string;
    founded: string;
    duration: string;
    venue: string;
    description: string;
    highlights: Highlight[];
};

type FormData = {
    name: string;
    founded: string;
    duration: string;
    venue: string;
    description: string;
    highlights: Highlight[];
};

type Highlight = {
    icon: string;
    title: string;
    desc: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content?: {
        festival?: FestivalProps;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const initialFormData = {
        highlights: content?.festival?.highlights || [],
        name: content?.festival?.name || '',
        description: content?.festival?.description || '',
        founded: content?.festival?.founded || '',
        duration: content?.festival?.duration || '',
        venue: content?.festival?.venue || '',
    };

    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/festival-section`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    const [newHighlight, setNewHighlight] = useState<Highlight>({
        icon: '',
        title: '',
        desc: '',
    });

    const addHighlight = () => {
        if (newHighlight.title.trim()) {
            form.setData('highlights', [...form.data.highlights, newHighlight]);
            setNewHighlight({ icon: '', title: '', desc: '' });
        }
    };

    const updateHighlight = (index: number, updatedHighlight: Highlight) => {
        const updatedHighlights = [...form.data.highlights];
        updatedHighlights[index] = updatedHighlight;
        form.setData('highlights', updatedHighlights);
    };

    const removeHighlight = (index: number) => {
        const updatedHighlights = form.data.highlights.filter((_, i) => i !== index);
        form.setData('highlights', updatedHighlights);
    };

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Hero Section" description="Edit hero section content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage key={Date.now()} type="success" message={flash.success} />}
                {errors?.error && <FlashMessage key={`error-${Date.now()}`} type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && (
                    <FlashMessage key={`flash-error-${Date.now()}`} type="error" message={flash.error} />
                )}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Edit Festival Section">
                        <div className="texture-box overflow-hidden rounded-xl p-5">
                            <Festival content={form.data} />
                        </div>
                    </ComponentCard>

                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Highlights Content">
                            <div>
                                <InputField
                                    label="Festival Name"
                                    name="festival_name"
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    required={true}
                                    error={form.errors.name}
                                    errorMessage="Please enter festival name"
                                />
                                <InputField
                                    label="Founded"
                                    name="founded"
                                    value={form.data.founded}
                                    onChange={(e) => form.setData('founded', e.target.value)}
                                    required={true}
                                    error={form.errors.founded}
                                    errorMessage="Please enter founded year"
                                />

                                <InputField
                                    label="Duration"
                                    name="duration"
                                    value={form.data.duration}
                                    onChange={(e) => form.setData('duration', e.target.value)}
                                    required={true}
                                    error={form.errors.duration}
                                    errorMessage="Please enter festival duration"
                                />

                                <InputField
                                    label="Venue"
                                    name="venue"
                                    value={form.data.venue}
                                    onChange={(e) => form.setData('venue', e.target.value)}
                                    required={true}
                                    error={form.errors.venue}
                                    errorMessage="Please enter venue name"
                                />

                                <Textarea
                                    label="Description"
                                    name="description"
                                    value={form.data.description}
                                    onChange={(e) => form.setData('description', e.target.value)}
                                    required={true}
                                    readonly={false}
                                    error={form.errors.description}
                                    errorMessage="Please enter festival description"
                                    rows={20}
                                />
                            </div>
                        </ComponentCard>
                        <ComponentCard className="mt-10" title="Highlights Content">
                            <div>
                                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                    <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Highlights</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <InputField
                                                label="Highlight Text"
                                                name="new_highlight"
                                                value={newHighlight.title}
                                                onChange={(e) => setNewHighlight({ ...newHighlight, title: e.target.value })}
                                                required={true}
                                                error={form.errors.highlights}
                                                errorMessage="Please enter highlight text"
                                            />
                                        </div>
                                        <div className="w-35">
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
                                                    { value: 'fa-solid fa-building-columns', label: 'Building' },
                                                    { value: 'fa-mountain', label: 'Mountain' },
                                                    { value: 'fa-water', label: 'Water' },
                                                    { value: 'fa-solid  fa-paintbrush', label: 'Paint' },
                                                ]}
                                                required={true}
                                                value={newHighlight.icon}
                                                onChange={(e) => setNewHighlight({ ...newHighlight, icon: e.target.value })}
                                                error={form.errors.highlights}
                                                errorMessage="Please enter highlight text"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={addHighlight}
                                            disabled={form.processing || !newHighlight.title.trim()}
                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                form.processing || !newHighlight.title.trim()
                                                    ? 'cursor-not-allowed bg-blue-400'
                                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                            }`}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <Textarea
                                        rows={6}
                                        label="Description"
                                        name="Description"
                                        value={newHighlight.desc}
                                        required={true}
                                        onChange={(e) => setNewHighlight({ ...newHighlight, desc: e.target.value })}
                                        error={form.errors.highlights}
                                        errorMessage="Please enter responsibility description"
                                        placeholder="Enter detailed description of this responsibility"
                                    />
                                </div>
                                <div className="mt-6 rounded-lg">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                            Current Highlights
                                            {form.data.highlights.length > 0 && (
                                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                    (Items: {form.data.highlights.length})
                                                </span>
                                            )}
                                        </h4>
                                    </div>

                                    {form.data.highlights.length === 0 ? (
                                        <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                            <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                            <p>No highlights added yet</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {form.data.highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-10 text-center text-gray-500 active:cursor-grabbing dark:text-gray-400">
                                                            <i className={`fas ${highlight.icon} text-lg`}></i>
                                                        </div>
                                                        <div className="flex-1">
                                                            <InputField
                                                                label={`Highlight ${index + 1}`}
                                                                name={`highlight_${index}`}
                                                                value={highlight.title}
                                                                onChange={(e) => updateHighlight(index, { ...highlight, title: e.target.value })}
                                                                required={true}
                                                                errorMessage="Please enter highlight text"
                                                            />
                                                        </div>
                                                        <div className="w-35">
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
                                                                    { value: 'fa-solid fa-building-columns', label: 'Building' },
                                                                    { value: 'fa-mountain', label: 'Mountain' },
                                                                    { value: 'fa-water', label: 'Water' },
                                                                    { value: 'fa-solid  fa-paintbrush', label: 'Paint' },
                                                                ]}
                                                                required={true}
                                                                value={highlight.icon}
                                                                onChange={(e) => updateHighlight(index, { ...highlight, icon: e.target.value })}
                                                                errorMessage="Please enter highlight text"
                                                            />
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeHighlight(index)}
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
                                                    <Textarea
                                                        rows={6}
                                                        label="Description"
                                                        name="Description"
                                                        value={highlight.desc}
                                                        onChange={(e) => updateHighlight(index, { ...highlight, desc: e.target.value })}
                                                        placeholder="Enter detailed description of this responsibility"
                                                    />
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
                        {form.processing ? 'Processing...' : 'Update Festival Section'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
