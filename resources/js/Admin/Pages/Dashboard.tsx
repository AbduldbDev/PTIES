import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, usePage } from '@inertiajs/react';
import VisitChart from '../Utils/components/charts/VisitChart';
import ComponentCard from '../Utils/components/common/ComponentCard';
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

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                    {auth?.user?.user_type == 'admin' && (
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                                <i className="fa-solid fa-user-group text-gray-800 dark:text-white/90"></i>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Total Employee</span>
                                    <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{total_Employees}</h4>
                                </div>
                            </div>
                        </div>
                    )}

                    {auth?.user?.user_type == 'admin' && (
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                                <i className="fa-solid fa-user-group text-gray-800 dark:text-white/90"></i>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Total Sellers</span>
                                    <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{total_Sellers}</h4>
                                </div>
                            </div>
                        </div>
                    )}

                    {auth?.user?.user_type == 'admin' && (
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                                <i className="fa-solid fa-user-group text-gray-800 dark:text-white/90"></i>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Total Toursits</span>
                                    <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{total_tourist}</h4>
                                </div>
                            </div>
                        </div>
                    )}

                    {auth?.user?.user_type == 'admin' && (
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                                <i className="fa-solid fa-boxes-stacked text-gray-800 dark:text-white/90"></i>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Total Products</span>
                                    <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{total_products}</h4>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                            <i className="fa-solid fa-user-group text-gray-800 dark:text-white/90"></i>
                        </div>

                        <div className="mt-5 flex items-end justify-between">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Pending Sellers</span>
                                <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{pending_Sellers}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                            <i className="fa-solid fa-boxes-stacked text-gray-800 dark:text-white/90"></i>
                        </div>

                        <div className="mt-5 flex items-end justify-between">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Pending Products</span>
                                <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{pending_products}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                            <i className="fa-solid fa-image text-gray-800 dark:text-white/90"></i>
                        </div>

                        <div className="mt-5 flex items-end justify-between">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Pending Post Approval</span>
                                <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{social_wall}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                            <i className="fa-solid fa-coins text-gray-800 dark:text-white/90"></i>
                        </div>

                        <div className="mt-5 flex items-end justify-between">
                            <div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Pending Redemption</span>
                                <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">{pending_redemption}</h4>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-span-4">
                        <ComponentCard title="Website Visits">
                            <div>
                                <VisitChart
                                    darkMode={resolvedTheme === 'dark'}
                                    height={400}
                                    // other props...
                                />
                            </div>
                        </ComponentCard>
                    </div> */}
                </div>
            </AppWrapper>
        </>
    );
}
