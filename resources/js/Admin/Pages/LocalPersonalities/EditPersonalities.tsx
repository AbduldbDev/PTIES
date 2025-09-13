import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type Personality = {
    id: number;
    category: string;
    name: string;
    description: string;
    highlights_title: string;
    highlights_content: Highlight[];
    born?: string;
    died?: string;
    image: string;
    legacy: string;
};

type FormData = {
    category: string;
    category_icon: string;
    name: string;
    description: string;
    highlights_title: string;
    highlights_content: Highlight[];
    born: string;
    died: string;
    image: File | null;
    legacy_title: string;
    legacy_icon: string;
    legacy_desc: string;
};

type Highlight = {
    text: string;
    icon: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    personality?: Personality;
    errors?: Record<string, string>;
    csrf_token: string;
    item: Personality;
};

export default function LocalPersonalitiesEditForm() {
    const { flash, errors, csrf_token, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const [category_icon, category_title] = item.category?.split('|') || ['', ''];
    const [legacy_icon, legacy_title, legacy_desc] = item.legacy?.split('|') || ['', '', ''];

    const form = useForm<FormData>({
        category: category_title,
        category_icon: category_icon,
        name: item.name || '',
        description: item.description || '',
        highlights_title: item.highlights_title || '',
        highlights_content: item.highlights_content || [],
        born: item.born || '',
        died: item.died || '',
        image: null,
        legacy_title: legacy_title,
        legacy_icon: legacy_icon,
        legacy_desc: legacy_desc,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const requiredFields: (keyof FormData)[] = [
            'category',
            'category_icon',
            'name',
            'description',
            'legacy_title',
            'legacy_icon',
            'legacy_desc',
            'highlights_content',
        ];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/local-personalities/update/${item.id}`, {
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

    const [newHighlight, setNewHighlight] = useState<Highlight>({
        text: '',
        icon: '',
    });

    const addHighlight = () => {
        if (newHighlight.text.trim()) {
            form.setData('highlights_content', [...form.data.highlights_content, newHighlight]);
            setNewHighlight({ text: '', icon: '' });
        }
    };

    const updateHighlight = (index: number, updatedHighlight: Highlight) => {
        const updatedhighlights_content = [...form.data.highlights_content];
        updatedhighlights_content[index] = updatedHighlight;
        form.setData('highlights_content', updatedhighlights_content);
    };

    const removeHighlight = (index: number) => {
        const updatedhighlights_content = form.data.highlights_content.filter((_, i) => i !== index);
        form.setData('highlights_content', updatedhighlights_content);
    };

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Introduction Section" description="Edit introduction section content" />
                <PageBreadcrumb pageTitle="Local Personalities Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard className="" title="Local Personalities Content">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <InputField
                                                label="Category Title"
                                                name="category"
                                                value={form.data.category}
                                                onChange={(e) => form.setData('category', e.target.value)}
                                                required={true}
                                                error={form.errors.category}
                                                errorMessage="Please enter category title"
                                            />
                                        </div>
                                        <div className="w-35">
                                            <SelectField
                                                label="Icon"
                                                name="category_icon"
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
                                                value={form.data.category_icon}
                                                onChange={(e) => form.setData('category_icon', e.target.value)}
                                                error={form.errors.category_icon}
                                                errorMessage="Please select icon"
                                            />
                                        </div>
                                    </div>
                                    <InputField
                                        type="text"
                                        label="Name"
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
                                        label="Born Date"
                                        name="born"
                                        required={true}
                                        value={form.data.born}
                                        onChange={(e) => form.setData('born', e.target.value)}
                                        error={form.errors.born}
                                        errorMessage="Please born date"
                                        resetSignal={resetSignal}
                                    />
                                    <InputField
                                        type="text"
                                        label="Died Date"
                                        name="died"
                                        required={false}
                                        value={form.data.died}
                                        onChange={(e) => form.setData('died', e.target.value)}
                                        error={form.errors.died}
                                        errorMessage="Please enter died date"
                                        resetSignal={resetSignal}
                                    />
                                    <Textarea
                                        label="Description"
                                        name="description"
                                        value={form.data.description}
                                        onChange={(e) => form.setData('description', e.target.value)}
                                        required={true}
                                        readonly={false}
                                        error={form.errors.description}
                                        errorMessage="Please enter personality description"
                                        rows={20}
                                    />
                                    <FileInput
                                        label="Image"
                                        name="image"
                                        onChange={(e) => handleImageChange(e, 'image')}
                                        error={form.errors.image}
                                        errorMessage="Please select a valid image"
                                        resetSignal={resetSignal}
                                    />
                                </div>
                            </ComponentCard>
                        </div>
                        <div>
                            <ComponentCard className="" title="Legacy Content">
                                <div className="flex items-center gap-2">
                                    <div className="flex-1">
                                        <InputField
                                            label="Legacy Title"
                                            name="legacy_title"
                                            value={form.data.legacy_title}
                                            onChange={(e) => form.setData('legacy_title', e.target.value)}
                                            required={true}
                                            error={form.errors.legacy_title}
                                            errorMessage="Please enter legacy title"
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
                                            value={form.data.legacy_icon}
                                            onChange={(e) => form.setData('legacy_icon', e.target.value)}
                                            error={form.errors.legacy_icon}
                                            errorMessage="Please enter legacy icon"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Textarea
                                        label="Legacy Desciption"
                                        name="legacy_desc"
                                        value={form.data.legacy_desc}
                                        onChange={(e) => form.setData('legacy_desc', e.target.value)}
                                        required={true}
                                        readonly={false}
                                        error={form.errors.legacy_desc}
                                        errorMessage="Please enter legacy description"
                                        rows={5}
                                    />
                                </div>
                            </ComponentCard>
                            <ComponentCard className="mt-10" title="Highlights Content">
                                <div>
                                    <InputField
                                        label="Highlights Title"
                                        name="highlights_title"
                                        value={form.data.highlights_title}
                                        onChange={(e) => form.setData('highlights_title', e.target.value)}
                                        required={false}
                                        error={form.errors.highlights_content}
                                        errorMessage="Please enter highlights title"
                                    />
                                    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                        <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Highlights</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <InputField
                                                    label="Highlight Text"
                                                    name="new_highlight"
                                                    value={newHighlight.text}
                                                    onChange={(e) => setNewHighlight({ ...newHighlight, text: e.target.value })}
                                                    required={false}
                                                    error={form.errors.highlights_content}
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
                                                    error={form.errors.highlights_content}
                                                    errorMessage="Please select highlight icon"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={addHighlight}
                                                disabled={form.processing || !newHighlight.text.trim()}
                                                className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                    form.processing || !newHighlight.text.trim()
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
                                                Highlights Content
                                                {form.data.highlights_content.length > 0 && (
                                                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                        (Items: {form.data.highlights_content.length})
                                                    </span>
                                                )}
                                            </h4>
                                        </div>

                                        {form.data.highlights_content.length === 0 ? (
                                            <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                                <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                                <p>No Highlights Content added yet</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {form.data.highlights_content.map((highlight, index) => (
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
                                                                    value={highlight.text}
                                                                    onChange={(e) => updateHighlight(index, { ...highlight, text: e.target.value })}
                                                                    required={true}
                                                                    error={form.errors.highlights_content}
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
                                                                    error={form.errors.highlights_content}
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
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ComponentCard>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Local Personality'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
