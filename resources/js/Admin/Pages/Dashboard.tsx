import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import TotalVisitsChart from '@AdminUtils/components/dashboard/Chart';
import StatCard from '@AdminUtils/components/dashboard/StatsCard';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, usePage } from '@inertiajs/react';
import { useTheme } from '../Utils/context/ThemeContext';

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };

    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    events: EventProps[];
    total_Employees: string;
    total_Sellers: string;
    total_tourist: string;
    total_products: string;
    pending_Sellers: string;
    pending_products: string;
    social_wall: string;
    pending_redemption: string;
};

type EventProps = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    schedules: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: File[];
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
};

export default function Home() {
    const {
        flash,
        errors,
        total_Employees,
        total_Sellers,
        total_tourist,
        total_products,
        pending_Sellers,
        pending_products,
        social_wall,
        pending_redemption,
    } = usePage<PageProps>().props;

    const { auth } = usePage().props as {
        auth?: {
            user?: {
                email: string;
                user_type: string;
            };
        };
    };
    const { resolvedTheme } = useTheme();

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
                    {auth?.user?.user_type === 'admin' && (
                        <>
                            <StatCard
                                title="Total Employee"
                                value={total_Employees}
                                icon="fa-user-group"
                                iconColor="text-blue-600 dark:text-blue-400"
                                bgColor="bg-blue-50 dark:bg-blue-900/20"
                            />

                            <StatCard
                                title="Total Sellers"
                                value={total_Sellers}
                                icon="fa-store"
                                iconColor="text-green-600 dark:text-green-400"
                                bgColor="bg-green-50 dark:bg-green-900/20"
                            />

                            <StatCard
                                title="Total Tourists"
                                value={total_tourist}
                                icon="fa-plane"
                                iconColor="text-purple-600 dark:text-purple-400"
                                bgColor="bg-purple-50 dark:bg-purple-900/20"
                            />

                            <StatCard
                                title="Total Products"
                                value={total_products}
                                icon="fa-boxes-stacked"
                                iconColor="text-amber-600 dark:text-amber-400"
                                bgColor="bg-amber-50 dark:bg-amber-900/20"
                            />
                        </>
                    )}
                </div>
                {/* Pending items section */}
                <div className="mt-5">
                    {auth?.user?.user_type === 'admin' && (
                        <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">Pending Approvals</h3>
                    )}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
                        <StatCard
                            title="Pending Sellers"
                            value={pending_Sellers}
                            icon="fa-user-clock"
                            iconColor="text-orange-600 dark:text-orange-400"
                            bgColor="bg-orange-50 dark:bg-orange-900/20"
                            status="pending"
                            badgeColor="bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300"
                        />

                        <StatCard
                            title="Pending Products"
                            value={pending_products}
                            icon="fa-box-open"
                            iconColor="text-red-600 dark:text-red-400"
                            bgColor="bg-red-50 dark:bg-red-900/20"
                            status="pending"
                            badgeColor="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                        />

                        <StatCard
                            title="Pending Post Approval"
                            value={social_wall}
                            icon="fa-image"
                            iconColor="text-indigo-600 dark:text-indigo-400"
                            bgColor="bg-indigo-50 dark:bg-indigo-900/20"
                            status="pending"
                            badgeColor="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300"
                        />

                        <StatCard
                            title="Pending Redemption"
                            value={pending_redemption}
                            icon="fa-coins"
                            iconColor="text-emerald-600 dark:text-emerald-400"
                            bgColor="bg-emerald-50 dark:bg-emerald-900/20"
                            status="pending"
                            badgeColor="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <TotalVisitsChart />
                </div>
            </AppWrapper>
        </>
    );
}
