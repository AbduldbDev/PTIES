import { usePage } from '@inertiajs/react';

interface RewardRedeemLogProps {
    id: number;
    status: string;
    completed_at: string | null;
    reward: RewardProps;
    points: string;
}

type RewardProps = {
    name: string;
    image: string;
};

type PageProps = {
    redeemLogs: RewardRedeemLogProps[];
};

export default function RewardRedeemLogs() {
    const { redeemLogs } = usePage<PageProps>().props;

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'PENDING';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const getStatusColor = (completedDate: string | null) => {
        return completedDate ? 'text-green-600' : 'text-yellow-600';
    };

    const getStatusText = (completedDate: string | null) => {
        return completedDate ? 'Completed' : 'Pending';
    };

    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:rounded-xl">
                    <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-4">
                        <h2 className="flex items-center text-lg font-bold text-primary sm:text-lg">
                            <i className="fas fa-gift mr-2 text-base sm:text-lg"></i>
                            <span className="text-sm sm:text-base">Reward Redemption History</span>
                        </h2>
                    </div>
                    <div className="p-3 sm:p-4">
                        {redeemLogs.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center py-8 text-center sm:py-12">
                                <div className="mb-3 rounded-full bg-gray-100 p-4 sm:mb-4 sm:p-6">
                                    <i className="fas fa-gift text-2xl text-gray-400 sm:text-3xl"></i>
                                </div>
                                <h3 className="mb-2 text-base font-semibold text-gray-700 sm:text-lg">No redemption history</h3>
                                <p className="mb-4 text-sm text-gray-500 sm:text-base">
                                    Your reward redemptions will appear here once you start claiming rewards.
                                </p>
                                <a
                                    href="/reward-shop"
                                    className="rounded-full border border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-primary sm:text-base"
                                >
                                    Browse Rewards
                                </a>
                            </div>
                        ) : (
                            <div className="space-y-3 sm:space-y-4">
                                {redeemLogs.map((item, index) => (
                                    <div
                                        key={item.id || index}
                                        className="flex flex-col gap-3 rounded-xl bg-gray-50 p-3 sm:flex-row sm:items-center sm:justify-between sm:rounded-lg sm:p-4"
                                    >
                                        <div className="flex items-start gap-3 sm:items-center sm:space-x-4">
                                            {item.reward.image && (
                                                <img
                                                    src={`/storage/${item.reward.image}`}
                                                    alt={item.reward.name}
                                                    className="h-16 w-16 flex-shrink-0 rounded-lg object-cover sm:h-20 sm:w-20"
                                                />
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <p className="line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">{item.reward.name}</p>
                                                <div className="mt-1.5 flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                                                    {/* Redeemed Date - Always shown */}
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="flex items-center gap-1">
                                                            <i className="fas fa-calendar-alt text-xs opacity-70 sm:hidden"></i>
                                                            <span className="font-medium text-gray-600 sm:font-normal sm:text-gray-500">
                                                                Redeemed:
                                                            </span>
                                                        </span>
                                                        <span className="text-gray-700">{formatDate(item.completed_at)}</span>
                                                    </div>

                                                    {/* Status Badge */}
                                                    <div className={`flex items-center gap-1.5 ${getStatusColor(item.completed_at)}`}>
                                                        <span className="flex items-center gap-1">
                                                            <i className="fas fa-circle text-xs opacity-70 sm:hidden"></i>
                                                            <span className="font-medium text-gray-600 sm:font-normal">Status:</span>
                                                        </span>
                                                        <span className="font-semibold">{getStatusText(item.completed_at)}</span>
                                                    </div>

                                                    {/* Completed Date - Only show if exists */}
                                                    {item.completed_at && (
                                                        <div className="flex items-center gap-1.5 text-green-600">
                                                            <span className="flex items-center gap-1">
                                                                <i className="fas fa-check-circle text-xs opacity-70 sm:hidden"></i>
                                                                <span className="font-medium text-gray-600 sm:font-normal sm:text-gray-500">
                                                                    Completed:
                                                                </span>
                                                            </span>
                                                            <span className="font-medium">{formatDate(item.completed_at)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end">
                                            <div className="flex items-center text-red-500">
                                                <img src="/User/Layout/Pakilpoints.png" className="mr-1 h-5 w-5 sm:h-6 sm:w-6" alt="Points" />
                                                <span className="text-sm font-medium">-{item.points} pts</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
