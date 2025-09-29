import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import MunicipalStatsCard from '@UserUtils/components/Cards/MunicipalStats';
import { FormEvent, useState } from 'react';
type MunicipalStats = {
    area: string;
    population: string;
    growth: string;
    literacy_rate: string;
    employment_rate: string;
    languages: string;
};

type FormData = {
    area: string;
    population: string;
    growth: string;
    literacy_rate: string;
    employment_rate: string;
    languages: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    content?: {
        municipal_stats?: MunicipalStats;
    };
    csrf_token: string;
};

export default function HeroSectionEditForm() {
    const { flash, errors, content, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const initialFormData = {
        area: content?.municipal_stats?.area || '',
        population: content?.municipal_stats?.population || '',
        growth: content?.municipal_stats?.growth || '',
        literacy_rate: content?.municipal_stats?.literacy_rate || '',
        employment_rate: content?.municipal_stats?.employment_rate || '',
        languages: content?.municipal_stats?.languages || '',
        updated: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
    };

    const form = useForm<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/cms/update/municipal-statistics`, {
            forceFormData: true,
            onSuccess: () => {
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <>
            <Head title="Admin | CMS" />
            <AppWrapper>
                <PageMeta title="Edit Hero Section" description="Edit hero section content" />
                <PageBreadcrumb pageTitle="Content Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />

                    <ComponentCard title="Municipal Statistics">
                        <div className="texture-box overflow-hidden rounded-xl p-4">
                            <MunicipalStatsCard content={form.data} />
                        </div>
                    </ComponentCard>
                    <ComponentCard className="mt-10" title="Edit Municipal Statistics">
                        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                            <div>
                                <InputField
                                    type="text"
                                    label="Area"
                                    name="title"
                                    required={true}
                                    value={form.data.area}
                                    onChange={(e) => form.setData('area', e.target.value)}
                                    error={form.errors.area}
                                    errorMessage="Please enter area"
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Population"
                                    name="population"
                                    required={true}
                                    value={form.data.population}
                                    onChange={(e) => form.setData('population', e.target.value)}
                                    error={form.errors.population}
                                    errorMessage="Please enter population"
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Population Growth"
                                    name="growth"
                                    required={true}
                                    value={form.data.growth}
                                    onChange={(e) => form.setData('growth', e.target.value)}
                                    error={form.errors.growth}
                                    errorMessage="Please enter population growth"
                                    resetSignal={resetSignal}
                                />
                            </div>
                            <div>
                                <InputField
                                    type="text"
                                    label="Literacy Rate"
                                    name="literacy_rate"
                                    required={true}
                                    value={form.data.literacy_rate}
                                    onChange={(e) => form.setData('literacy_rate', e.target.value)}
                                    error={form.errors.literacy_rate}
                                    errorMessage="Please enter literacy rate"
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Employment Rate"
                                    name="employment_rate"
                                    required={true}
                                    value={form.data.employment_rate}
                                    onChange={(e) => form.setData('employment_rate', e.target.value)}
                                    error={form.errors.employment_rate}
                                    errorMessage="Please enter employment rate"
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Languages"
                                    name="languages"
                                    required={true}
                                    value={form.data.languages}
                                    onChange={(e) => form.setData('languages', e.target.value)}
                                    error={form.errors.languages}
                                    errorMessage="Please enter languages"
                                    resetSignal={resetSignal}
                                />
                            </div>
                        </div>
                    </ComponentCard>

                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Municipal Statistics Section'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
