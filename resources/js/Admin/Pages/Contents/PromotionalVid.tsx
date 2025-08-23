import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import VideoInput from '@AdminUtils/components/form/input/VideoInput';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import PromotionalVideo from '@UserUtils/components/Sections/Home/Promotion';
import { FormEvent, useState } from 'react';

type PromotionalVideoProps = {
    id: string;
    title: string;
    slogan: string;
    description: string;
    thumbnail: string | null;
    video: string | null;
    highlights: string[];
};

type FormData = {
    id: string;
    title: string;
    slogan: string;
    description: string;
    thumbnail: File | null;
    video: File | null;
    highlights: string[];
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    details?: PromotionalVideoProps;
    csrf_token: string;
};

export default function PromotionalVideoEditForm() {
    const { flash, errors, details, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const [newHighlight, setNewHighlight] = useState('');

    const initialFormData = {
        id: details?.id || '',
        title: details?.title || '',
        slogan: details?.slogan || '',
        description: details?.description || '',
        highlights: details?.highlights || [],
        thumbnail: null,
        video: null,
    };
    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/content/promotional-video/update`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    const addHighlight = () => {
        if (newHighlight.trim() && !form.data.highlights.includes(newHighlight.trim())) {
            form.setData('highlights', [...form.data.highlights, newHighlight.trim()]);
            setNewHighlight('');
        }
    };

    const removeHighlight = (index: number) => {
        const updatedHighlights = [...form.data.highlights];
        updatedHighlights.splice(index, 1);
        form.setData('highlights', updatedHighlights);
    };

    const updateHighlight = (index: number, value: string) => {
        const updatedHighlights = [...form.data.highlights];
        updatedHighlights[index] = value;
        form.setData('highlights', updatedHighlights);
    };

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            form.clearErrors('video');

            if (file.size > 100 * 1024 * 1024) {
                form.setError('video', `Video must be at min 100MB (selected: ${(file.size / (1024 * 1024)).toFixed(1)}MB)`);
                form.setData('video', null);
                return;
            }

            const validTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-ms-wmv', 'video/x-matroska', 'video/webm'];
            if (!validTypes.includes(file.type)) {
                form.setError('video', 'Invalid video format. Accepted: MP4, MOV, AVI, WMV, MKV, WEBM');
                form.setData('video', null);
                return;
            }

            form.setData('video', file);
        } else {
            form.setData('video', null);
        }
    };

    return (
        <>
            <Head title="Edit Promotional Video" />
            <AppWrapper>
                <PageMeta title="Edit Promotional Video" description="Edit promotional video content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Edit Promotional Video">
                        <div className="texture-box overflow-hidden rounded-xl">
                            <PromotionalVideo
                                title={form.data.title}
                                slogan={form.data.slogan}
                                description={form.data.description}
                                highlights={form.data.highlights}
                                thumbnail={
                                    form.data.thumbnail instanceof File
                                        ? URL.createObjectURL(form.data.thumbnail)
                                        : details?.thumbnail
                                          ? `/storage/${details?.thumbnail}`
                                          : ''
                                }
                                videoUrl={
                                    form.data.video instanceof File
                                        ? URL.createObjectURL(form.data.video)
                                        : details?.video
                                          ? `/storage/${details?.video}`
                                          : ''
                                }
                            />
                        </div>
                    </ComponentCard>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Video Details">
                            <div>
                                <InputField
                                    type="text"
                                    label="Video Title"
                                    name="title"
                                    required={true}
                                    value={form.data.title}
                                    onChange={(e) => form.setData('title', e.target.value)}
                                    error={form.errors.title}
                                    errorMessage="Please enter video title"
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Video Slogan"
                                    name="slogan"
                                    required={true}
                                    value={form.data.slogan}
                                    onChange={(e) => form.setData('slogan', e.target.value)}
                                    error={form.errors.slogan}
                                    errorMessage="Please enter video slogan"
                                    resetSignal={resetSignal}
                                />
                                <Textarea
                                    label="Video Description"
                                    name="description"
                                    value={form.data.description}
                                    onChange={(e) => form.setData('description', e.target.value)}
                                    required={true}
                                    readonly={false}
                                    error={form.errors.description}
                                    errorMessage="Please enter video description"
                                    rows={10}
                                />
                                <FileInput
                                    label="Banner Image"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const file = e.target.files[0];
                                            if (file.size > 5 * 1024 * 1024) {
                                                form.setError('thumbnail', 'File must be under 5MB');
                                            } else {
                                                form.clearErrors('thumbnail');
                                                form.setData('thumbnail', file);
                                            }
                                        }
                                    }}
                                    error={form.errors.thumbnail}
                                    errorMessage={form.errors.thumbnail || 'File must be under 5MB'}
                                    resetSignal={resetSignal}
                                />

                                <VideoInput
                                    label="Promotional Video"
                                    name="video"
                                    accept="video/*"
                                    onChange={handleVideoUpload}
                                    error={form.errors.video}
                                    errorMessage={form.errors.video || 'Video must be at most 100MB'}
                                    resetSignal={resetSignal}
                                />
                            </div>
                        </ComponentCard>
                        <ComponentCard className="mt-10" title="Video Highlights">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1">
                                        <InputField
                                            label="Video Highlights"
                                            name="description"
                                            value={newHighlight}
                                            onChange={(e) => setNewHighlight(e.target.value)}
                                            required={true}
                                            error={form.errors.description}
                                            errorMessage="Please enter video highlights"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addHighlight}
                                        className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                        }`}
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
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
                                                        <InputField
                                                            label={`Video Highlight ${index + 1}`}
                                                            name={`highlight_${index}`}
                                                            className="flex-1"
                                                            value={highlight}
                                                            onChange={(e) => updateHighlight(index, e.target.value)}
                                                            required={true}
                                                            error={form.errors.description}
                                                            errorMessage="Please enter video highlights"
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={() => removeHighlight(index)}
                                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                                form.processing ? 'bg-blue-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
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
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Video'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
