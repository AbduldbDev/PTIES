import PdfFileInput from '@/Admin/Utils/components/form/input/PDFInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import CitizenCharter from '@UserUtils/components/Sections/Tourism/CitizenCharter';
import { FormEvent, useState } from 'react';
type CitizenCharterProps = {
    description: string;
    updated: string;
    size: string;
    pdf: string | null;
};

type FormData = {
    description: string;
    updated: string;
    size: string;
    pdf: File | null;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content?: {
        citizen_charter?: CitizenCharterProps;
    };
    csrf_token: string;
};

export default function CitizenCharterEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const initialFormData = {
        description: content?.citizen_charter?.description || '',
        updated: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        size: content?.citizen_charter?.size || '',
        pdf: null,
    };

    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/citizen-charter`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>, isValid: boolean) => {
        if (isValid && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            form.setData('pdf', file);

            const formattedSize = formatFileSize(file.size);
            form.setData('size', formattedSize);
        } else {
            form.setData('pdf', null);

            if (!form.data.size) {
                form.setData('size', '');
            }
        }
    };

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Citizen Charter" description="Edit citizen charter content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Citizen Charter ">
                        <div className="texture-box overflow-hidden rounded-xl">
                            <CitizenCharter
                                content={{
                                    ...form.data,
                                    pdf: form.data.pdf instanceof File ? null : content?.citizen_charter?.pdf || null,
                                }}
                            />
                        </div>
                    </ComponentCard>

                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard className="mt-10" title="Citizen Charter Content">
                            <Textarea
                                label="Description"
                                name="description"
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.description}
                                errorMessage="Please enter description"
                                rows={20}
                            />
                        </ComponentCard>

                        <ComponentCard className="mt-10" title="PDF Document">
                            <PdfFileInput
                                label="PDF File"
                                name="pdf"
                                onChange={handlePdfChange}
                                error={form.errors.pdf}
                                errorMessage="Please select a valid PDF file"
                                resetSignal={resetSignal}
                            />
                            {form.data.size && (
                                <InputField
                                    type="text"
                                    label="File Size"
                                    name="size"
                                    required={true}
                                    value={form.data.size}
                                    onChange={(e) => form.setData('size', e.target.value)}
                                    error={form.errors.size}
                                    errorMessage="Invalid size"
                                    resetSignal={resetSignal}
                                />
                            )}

                            {content?.citizen_charter?.pdf && (
                                <div className="mt-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Current PDF: {content.citizen_charter.pdf}</p>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Size: {content.citizen_charter.size}</p>
                                    <a
                                        href={`/storage/${content.citizen_charter.pdf}`}
                                        target="_blank"
                                        className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        View current PDF
                                    </a>
                                </div>
                            )}
                        </ComponentCard>
                    </div>

                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Citizen Charter'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
