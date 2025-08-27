import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, usePage } from '@inertiajs/react';
type FormData = {
    firstname: string;
    middlename: string;
    lastname: string;
    contact: string;
    gender: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    user_type: string;
    confirm_password: string;
    profileImage: File | null;
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
};

export default function Home() {
    const { flash, errors } = usePage<PageProps>().props;

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title="Admin Dashboard">
                        <h1 className="text-lg text-gray-800 dark:text-white">Dashboard</h1>
                    </ComponentCard>
                </div>
            </AppWrapper>
        </>
    );
}
