import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FAQsProps = {
    id: number;
    question: string;
    answer: string;
};

type FormData = {
    question: string;
    answer: string;
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
    item: FAQsProps;
};

export default function GuideCreateForm() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        question: item.question,
        answer: item.answer,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['question', 'answer'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/faqs/update/${item.id}`, {
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
                <PageBreadcrumb pageTitle="FAQs Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit FAQs">
                            <Textarea
                                label="Question"
                                name="question"
                                value={form.data.question}
                                onChange={(e) => form.setData('question', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.question}
                                errorMessage="Please enter question"
                                rows={5}
                            />
                            <Textarea
                                label="Answer"
                                name="answer"
                                value={form.data.answer}
                                onChange={(e) => form.setData('answer', e.target.value)}
                                required={true}
                                readonly={false}
                                error={form.errors.answer}
                                errorMessage="Please enter answer"
                                rows={5}
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update FAQs'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
