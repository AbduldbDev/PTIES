import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type PostProps = {
    id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: number;
    user: User;
    created_at: string;
    updated_at: string;
};

interface User {
    id: number;
    name: string;
    email: string;
    image?: string;
}

type FormData = {
    id: string;
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
    item: PostProps;
};

export default function EditGuide() {
    const { flash, errors, item, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm();

    const handleApprove = (e: FormEvent) => {
        e.preventDefault();

        form.post(`/Admin/social-wall/approve/${item.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to approve post');
            },
        });
    };

    const handleReject = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/social-wall/reject/${item.id}`, {
            onError: (errors) => {
                console.error(errors);
                alert('Failed to reject post');
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
                <PageBreadcrumb pageTitle="Social Wall Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                    <ComponentCard title="Pending Approval Posts">
                        <InputField type="text" label="Posted By" readonly name="name" required value={item.user.email} />
                        <InputField
                            type="text"
                            label="Uploaded At"
                            readonly
                            name="uploaded_at"
                            required
                            value={new Date(item.created_at).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                            })}
                        />

                        <Textarea label="Post Caption" name="description" value={item.caption} readonly rows={5} />

                        <img className="mt-2 w-full rounded-md" src={`/storage/${item.image}`} alt="" />

                        {item.is_approved === 0 && (
                            <div className="mt-4 space-y-2">
                                <button
                                    type="button"
                                    onClick={handleApprove}
                                    disabled={form.processing}
                                    className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                        form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                    }`}
                                >
                                    {form.processing ? 'Processing...' : 'Approve Post'}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleReject}
                                    disabled={form.processing}
                                    className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                        form.processing ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                    }`}
                                >
                                    {form.processing ? 'Processing...' : 'Reject Post'}
                                </button>
                            </div>
                        )}
                    </ComponentCard>
                </div>
            </AppWrapper>
        </>
    );
}
