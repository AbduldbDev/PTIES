import MissionVision from '@/User/Utils/components/Sections/Tourism/MissionVision';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type IntroductionProps = {
    mission: string;
    vision: string;
};

type FormData = {
    mission: string;
    vision: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content: {
        mission_vision: IntroductionProps;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        mission: content.mission_vision.mission || '',
        vision: content.mission_vision.vision || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/CMS/UpdateMissionVision`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
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

                    <ComponentCard title="Edit Mission & Vision Section">
                        <div className="texture-box overflow-hidden rounded-xl p-4">
                            {content.mission_vision && <MissionVision content={form.data} />}
                        </div>
                        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                            <div>
                                <Textarea
                                    label="Mission"
                                    name="mission"
                                    value={form.data.mission}
                                    onChange={(e) => form.setData('mission', e.target.value)}
                                    required={true}
                                    readonly={false}
                                    error={form.errors.mission}
                                    errorMessage="Please enter mission"
                                    rows={15}
                                />
                            </div>
                            <div>
                                <Textarea
                                    label="Vision"
                                    name="vision"
                                    value={form.data.vision}
                                    onChange={(e) => form.setData('vision', e.target.value)}
                                    required={true}
                                    readonly={false}
                                    error={form.errors.vision}
                                    errorMessage="Please enter vision"
                                    rows={15}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                            }`}
                        >
                            {form.processing ? 'Processing...' : 'Update Hero Section'}
                        </button>
                    </ComponentCard>
                </form>
            </AppWrapper>
        </>
    );
}
