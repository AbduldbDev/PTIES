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
    culture_type: string | string[];
    highlights_title: string;
    highlights_content: Highlight[];
    image: string;
    legacy: string;
};

type FormData = {
    category: string;
    category_icon: string;
    name: string;
    description: string;
    culture_type: string[];
    highlights_title: string;
    highlights_content: Highlight[];
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

// Cultural property types data
const CULTURE_TYPES = [
    // By Physical Form
    {
        category: 'By Physical Form',
        options: [
            { value: 'tangible_cultural_property', label: 'Tangible Cultural Property – Has physical form' },
            { value: 'intangible_cultural_heritage', label: 'Intangible Cultural Heritage – Traditions, practices, expressions' },
        ],
    },
    // By Mobility
    {
        category: 'By Mobility',
        options: [
            { value: 'movable_cultural_property', label: 'Movable Cultural Property – Can be transferred or carried' },
            { value: 'immovable_cultural_property', label: 'Immovable Cultural Property – Fixed to a location' },
        ],
    },
    // By Legal / Heritage Status (Philippines – RA 10066)
    {
        category: 'By Legal / Heritage Status (Philippines – RA 10066)',
        options: [
            { value: 'important_cultural_property', label: 'Important Cultural Property (ICP)' },
            { value: 'national_cultural_treasure', label: 'National Cultural Treasure (NCT)' },
        ],
    },
    // By Nature or Use
    {
        category: 'By Nature or Use',
        options: [
            { value: 'built_heritage', label: 'Built Heritage – Churches, houses, bridges, structures' },
            { value: 'cultural_landscape', label: 'Cultural Landscape – Areas shaped by people and nature' },
            { value: 'archaeological_heritage', label: 'Archaeological Heritage – Sites, artifacts, ruins' },
            { value: 'ethnographic_heritage', label: 'Ethnographic Heritage – Objects and practices of daily life' },
            { value: 'religious_sacred_heritage', label: 'Religious / Sacred Heritage – Churches, images, rituals' },
            { value: 'archival_documentary_heritage', label: 'Archival & Documentary Heritage – Records, manuscripts, photos' },
        ],
    },
    // By Cultural Meaning
    {
        category: 'By Cultural Meaning',
        options: [
            { value: 'associative_cultural_property', label: 'Associative Cultural Property – Important due to cultural or historical association' },
            {
                value: 'natural_heritage_cultural_significance',
                label: 'Natural Heritage with Cultural Significance – Natural sites with cultural value',
            },
        ],
    },
    // By Recognition Scope
    {
        category: 'By Recognition Scope',
        options: [
            { value: 'national_cultural_property', label: 'National Cultural Property' },
            { value: 'local_cultural_property', label: 'Local Cultural Property' },
        ],
    },
];

export default function CulturalPropertiesEditForm() {
    const { flash, errors, csrf_token, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const [category_icon, category_title] = item.category?.split('|') || ['', ''];
    const [legacy_icon, legacy_title, legacy_desc] = item.legacy?.split('|') || ['', '', ''];

    // Parse culture_type from item
    let initialCultureTypes: string[] = [];
    if (item.culture_type) {
        if (Array.isArray(item.culture_type)) {
            initialCultureTypes = item.culture_type;
        } else if (typeof item.culture_type === 'string') {
            try {
                // Try to parse as JSON first
                const parsed = JSON.parse(item.culture_type);
                initialCultureTypes = Array.isArray(parsed) ? parsed : [parsed];
            } catch {
                // If not JSON, treat as comma-separated string
                initialCultureTypes = item.culture_type
                    .split(',')
                    .map((t) => t.trim())
                    .filter((t) => t);
            }
        }
    }

    const form = useForm<FormData>({
        category: category_title,
        category_icon: category_icon,
        name: item.name || '',
        description: item.description || '',
        culture_type: initialCultureTypes,
        highlights_title: item.highlights_title || '',
        highlights_content: item.highlights_content || [],
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
            'culture_type',
            'legacy_title',
            'legacy_icon',
            'legacy_desc',
            'highlights_content',
        ];

        const emptyFields = requiredFields.filter((field) => {
            if (field === 'culture_type') {
                return form.data[field].length === 0;
            }
            return !form.data[field];
        });

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/cultural-properties/update/${item.id}`, {
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

    // Handle checkbox change for culture_type
    const handleCultureTypeChange = (value: string) => {
        const currentTypes = form.data.culture_type;
        const updatedTypes = currentTypes.includes(value) ? currentTypes.filter((type) => type !== value) : [...currentTypes, value];

        form.setData('culture_type', updatedTypes);
    };

    // Handle select all/none for a category
    const handleCategoryToggle = (categoryOptions: (typeof CULTURE_TYPES)[0]['options'], selectAll: boolean) => {
        const currentTypes = form.data.culture_type;
        const categoryValues = categoryOptions.map((option) => option.value);

        const updatedTypes = selectAll
            ? Array.from(new Set([...currentTypes, ...categoryValues]))
            : currentTypes.filter((type) => !categoryValues.includes(type));

        form.setData('culture_type', updatedTypes);
    };

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Cultural Property" description="Edit cultural property content" />
                <PageBreadcrumb pageTitle="Cultural Properties Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard className="" title="Cultural Property Content">
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

                                    <Textarea
                                        label="Description"
                                        name="description"
                                        value={form.data.description}
                                        onChange={(e) => form.setData('description', e.target.value)}
                                        required={true}
                                        readonly={false}
                                        error={form.errors.description}
                                        errorMessage="Please enter description"
                                        rows={10}
                                    />

                                    {/* Culture Type Checkboxes */}
                                    <div className="mt-6">
                                        <div className="mb-4">
                                            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Culture Type <span className="text-red-500">*</span>
                                            </label>
                                            {form.errors.culture_type && <p className="mt-1 text-sm text-red-600">{form.errors.culture_type}</p>}
                                            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                                Select all applicable cultural property types
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            {CULTURE_TYPES.map((typeCategory, categoryIndex) => {
                                                const categorySelectedCount = typeCategory.options.filter((option) =>
                                                    form.data.culture_type.includes(option.value),
                                                ).length;
                                                const isAllSelected = categorySelectedCount === typeCategory.options.length;
                                                const isPartialSelected =
                                                    categorySelectedCount > 0 && categorySelectedCount < typeCategory.options.length;

                                                return (
                                                    <div key={categoryIndex} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                                                        <div className="mb-3 flex items-center justify-between">
                                                            <h4 className="font-medium text-gray-800 dark:text-white/90">{typeCategory.category}</h4>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleCategoryToggle(typeCategory.options, !isAllSelected)}
                                                                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                                            >
                                                                {isAllSelected ? 'Deselect All' : 'Select All'}
                                                            </button>
                                                        </div>
                                                        <div className="space-y-2">
                                                            {typeCategory.options.map((option, optionIndex) => (
                                                                <div key={option.value} className="flex items-start">
                                                                    <div className="flex h-5 items-center">
                                                                        <input
                                                                            id={`culture_type_${categoryIndex}_${optionIndex}`}
                                                                            name="culture_type"
                                                                            type="checkbox"
                                                                            checked={form.data.culture_type.includes(option.value)}
                                                                            onChange={() => handleCultureTypeChange(option.value)}
                                                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                                                                        />
                                                                    </div>
                                                                    <div className="ml-3 text-sm">
                                                                        <label
                                                                            htmlFor={`culture_type_${categoryIndex}_${optionIndex}`}
                                                                            className="cursor-pointer font-medium text-gray-700 dark:text-gray-300"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {isPartialSelected && (
                                                            <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                                                                <i className="fas fa-exclamation-circle mr-1"></i>
                                                                {categorySelectedCount} of {typeCategory.options.length} selected in this category
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Selected types summary */}
                                        {form.data.culture_type.length > 0 && (
                                            <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h5 className="font-medium text-blue-800 dark:text-blue-300">
                                                            <i className="fas fa-check-circle mr-2"></i>
                                                            Selected Types ({form.data.culture_type.length})
                                                        </h5>
                                                        <div className="mt-2 flex flex-wrap gap-2">
                                                            {form.data.culture_type.map((type, index) => {
                                                                const findLabel = () => {
                                                                    for (const category of CULTURE_TYPES) {
                                                                        const option = category.options.find((opt) => opt.value === type);
                                                                        if (option) {
                                                                            // Extract just the main label without description
                                                                            const label = option.label.split(' – ')[0];
                                                                            return label;
                                                                        }
                                                                    }
                                                                    return type;
                                                                };

                                                                return (
                                                                    <span
                                                                        key={index}
                                                                        className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-800/30 dark:text-blue-300"
                                                                    >
                                                                        {findLabel()}
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleCultureTypeChange(type)}
                                                                            className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
                                                                        >
                                                                            ×
                                                                        </button>
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => form.setData('culture_type', [])}
                                                        className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                                    >
                                                        Clear All
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

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
                                        label="Legacy Description"
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
                                                                    errorMessage="Please select highlight icon"
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
                        {form.processing ? 'Processing...' : 'Update Cultural Property'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
