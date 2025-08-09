import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <div className="col-span-12 md:col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-gray-200 px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
                        <h1 className="text-black dark:text-white">Test</h1>
                    </div>
                </div>
            </AppWrapper>
        </>
    );
}
