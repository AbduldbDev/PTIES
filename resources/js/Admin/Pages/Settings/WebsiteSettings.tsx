import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import ColorInputField from '@AdminUtils/components/form/input/InputColor';

import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type FormData = {
    primary: string;
    secondary: string;
    accent: string;
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
    primary: string;
    secondary: string;
    accent: string;
};

export default function AccountCreateForm() {
    const { flash, errors, primary, secondary, accent } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        primary: primary,
        secondary: secondary,
        accent: accent,
    });
    useEffect(() => {
        form.setData({
            primary: primary,
            secondary: secondary,
            accent: accent,
        });
    }, [primary, secondary, accent]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        form.post('/Admin/theme/color/update', {
            forceFormData: true,
            onSuccess: () => {
                // form.reset();
                form.clearErrors();
                setResetSignal((prev) => prev + 1);
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
                <PageBreadcrumb pageTitle="Website Settings" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Color Theme">
                            <div>
                                <ColorInputField
                                    label="Primary Color"
                                    name="primary"
                                    value={form.data.primary}
                                    required
                                    onChange={(e) => form.setData('primary', e.target.value)}
                                />
                                <ColorInputField
                                    label="Secondary Color"
                                    name="secondary"
                                    value={form.data.secondary}
                                    required
                                    onChange={(e) => form.setData('secondary', e.target.value)}
                                />

                                <ColorInputField
                                    label="Accent Color"
                                    name="accent"
                                    value={form.data.accent}
                                    required
                                    onChange={(e) => form.setData('accent', e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Save Settings'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
