import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import Introductions from '@UserUtils/components/Sections/About/Introduction';
import { FormEvent, useMemo, useState } from 'react';

type IntroductionProps = {
    description: string;
    image1: string | null;
    image2: string | null;
    image3: string | null;
    image4: string | null;
    highlights: never[];
};

type FormData = {
    description: string;
    image1: File | null;
    image2: File | null;
    image3: File | null;
    image4: File | null;
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
    content: {
        introduction: IntroductionProps;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        description: content.introduction.description,
        highlights: content.introduction.highlights || [],
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/pakil-intro`, {
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
        return content.introduction.image1 ? `/storage/${content.introduction.image1}` : '/User/Images/church.jpg';
    }, [form.data.image1, content.introduction.image1]);

    const heroImageUrl2 = useMemo(() => {
        if (form.data.image2 instanceof File) {
            return URL.createObjectURL(form.data.image2);
        }
        return content.introduction.image2 ? `/storage/${content.introduction.image2}` : '/User/Images/church.jpg';
    }, [form.data.image2, content.introduction.image2]);

    const heroImageUrl3 = useMemo(() => {
        if (form.data.image3 instanceof File) {
            return URL.createObjectURL(form.data.image3);
        }
        return content.introduction.image3 ? `/storage/${content.introduction.image3}` : '/User/Images/church.jpg';
    }, [form.data.image3, content.introduction.image3]);

    const heroImageUrl4 = useMemo(() => {
        if (form.data.image4 instanceof File) {
            return URL.createObjectURL(form.data.image4);
        }
        return content.introduction.image4 ? `/storage/${content.introduction.image4}` : '/User/Images/church.jpg';
    }, [form.data.image4, content.introduction.image4]);

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
            <Head title="Edit Introduction Section" />
            <AppWrapper>
                <PageMeta title="Edit Hero Section" description="Edit hero section content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Edit Hero Section">
                        <div className="texture-box overflow-hidden rounded-xl p-5">
                            {content.introduction && (
                                <Introductions
                                    content={{
                                        ...form.data,
                                        image1: heroImageUrl1,
                                        image2: heroImageUrl2,
                                        image3: heroImageUrl3,
                                        image4: heroImageUrl4,
                                    }}
                                />
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
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
                                    rows={20}
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

                                <FileInput
                                    label="Image 4"
                                    name="image4"
                                    onChange={(e) => handleImageChange(e, 'image4')}
                                    error={form.errors.image3}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                                <div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <InputField
                                                    label="Highlights Text"
                                                    name="new_Highlights"
                                                    value={newHighlight.title}
                                                    onChange={(e) => setNewHighlight({ ...newHighlight, title: e.target.value })}
                                                    required={false}
                                                    error={form.errors.description}
                                                    errorMessage="Please enter Highlights text"
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
                                                    ]}
                                                    required={true}
                                                    value={newHighlight.icon}
                                                    onChange={(e) => setNewHighlight({ ...newHighlight, icon: e.target.value })}
                                                    error={form.errors.highlights}
                                                    errorMessage="Please enter Highlights text"
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
                                    </div>
                                    <Textarea
                                        rows={5}
                                        label={`Description`}
                                        name={`Description`}
                                        value={newHighlight.desc}
                                        onChange={(e) => setNewHighlight({ ...newHighlight, desc: e.target.value })}
                                        required={true}
                                        error={form.errors.highlights}
                                        errorMessage="Please enter Highlights description"
                                    />

                                    {form.data.highlights.map((highlight, index) => (
                                        <div className="mb-5" key={index}>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1">
                                                    <InputField
                                                        label={`Highlights ${index + 1}`}
                                                        name={`Highlights_${index}`}
                                                        value={highlight.title}
                                                        onChange={(e) => updateHighlight(index, { ...highlight, title: e.target.value })}
                                                        required={true}
                                                        error={form.errors.highlights}
                                                        errorMessage="Please enter Highlights title"
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
                                                        ]}
                                                        required={true}
                                                        value={highlight.icon}
                                                        onChange={(e) => updateHighlight(index, { ...highlight, icon: e.target.value })}
                                                        error={form.errors.highlights}
                                                        errorMessage="Please enter Highlights icon"
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
                                                rows={5}
                                                label={`Description ${index + 1}`}
                                                name={`Description_${index}`}
                                                value={highlight.desc}
                                                onChange={(e) => updateHighlight(index, { ...highlight, desc: e.target.value })}
                                                required={true}
                                                error={form.errors.highlights}
                                                errorMessage="Please enter Highlights description"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                            }`}
                        >
                            {form.processing ? 'Processing...' : 'Update About Intro Section'}
                        </button>
                    </ComponentCard>
                </form>
            </AppWrapper>
        </>
    );
}
