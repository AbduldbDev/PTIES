import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

type RewardsProps = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    status: string;
};

type RedeemProps = {
    id: number;
    reward_id: string;
    user_id: string;
    completed_at: string;
    points: string;
    created_at: string;
    status: string;
    reward: RewardsProps;
    user: UserProps;
};

type UserProps = {
    email: string;
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
    item: RedeemProps;
};

export default function RewardDetails() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const form = useForm();

    const handleApprove = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/rewards/redeem/complete/${item.id}`);
    };

    const handleReject = (e: FormEvent) => {
        e.preventDefault();
        form.post(`/Admin/rewards/redeem/refund/${item.id}`);
    };

    return (
        <>
            <Head title="PTIES | Reward Details" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Rewards Redemption " />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Reward Information */}
                    <ComponentCard title="Reward Information">
                        <div className="space-y-6">
                            {item.reward?.image && (
                                <div className="flex justify-center">
                                    <div className="h-50 w-50 overflow-hidden rounded-lg">
                                        <img src={`/storage/${item.reward.image}`} alt={item.reward.name} className="h-full w-full object-cover" />
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Reward Name</label>
                                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-400">{item.reward?.name}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Points Required</label>
                                    <p className="mt-1 text-lg font-semibold text-blue-600">{item.points} points</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Category</label>
                                    <p className="mt-1 text-sm text-gray-900 capitalize dark:text-gray-400">{item.reward?.category}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Description</label>
                                    <p className="mt-1 text-sm whitespace-pre-wrap text-gray-900 dark:text-gray-400">{item.reward?.description}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Reward Status</label>
                                    <span
                                        className={`mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.reward?.status == '1' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    >
                                        {item.reward?.status == '1' ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ComponentCard>

                    <ComponentCard title="Redemption Details">
                        <div className="flex h-full flex-col justify-between">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500">User Email</label>
                                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-400">{item.user?.email}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Redemption Date</label>
                                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-400">
                                        {new Date(item.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Completed At</label>
                                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-400">
                                        {item.completed_at
                                            ? new Date(item.completed_at).toLocaleDateString('en-US', {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric',
                                                  hour: '2-digit',
                                                  minute: '2-digit',
                                              })
                                            : 'Not completed'}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom section - buttons always at bottom */}
                            {item.status == '0' && (
                                <div className="mt-6 space-y-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                                    <button
                                        type="button"
                                        onClick={handleApprove}
                                        disabled={form.processing}
                                        className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                        }`}
                                    >
                                        {form.processing ? 'Processing...' : 'Complete Redemption'}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleReject}
                                        disabled={form.processing}
                                        className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                            form.processing ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                        }`}
                                    >
                                        {form.processing ? 'Processing...' : 'Refund Redemption'}
                                    </button>
                                </div>
                            )}
                        </div>
                    </ComponentCard>
                </div>
            </AppWrapper>
        </>
    );
}
