interface UserMetaCardProps {
    user: {
        name: string;
        email: string;
        avatar?: string | null;
        profile?: {
            first_name?: string | null;
            middle_name?: string | null;
            last_name?: string | null;
            address?: string | null;
            contact?: string | null;
            position?: string | null;
        } | null;
    };
}

export default function UserMetaCard({ user }: UserMetaCardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex w-full flex-col items-center gap-6 xl:flex-row">
                    <div className="h-20 w-20 overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
                        <img
                            src={user?.avatar ? `${user.avatar}` : '/images/user/User.png'}
                            alt={user?.email || 'User'}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="order-3 xl:order-2">
                        <h4 className="mb-2 text-center text-lg font-semibold text-gray-800 xl:text-left dark:text-white/90">
                            {user.profile?.first_name} {user.profile?.middle_name} {user.profile?.last_name}
                        </h4>
                        <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                            <div className="hidden h-3.5 w-px bg-gray-300 xl:block dark:bg-gray-700"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{user.profile?.position ?? 'No address'}</p>
                        </div>
                    </div>

                    <div className="order-2 flex grow items-center gap-2 xl:order-3 xl:justify-end"></div>
                </div>
            </div>
        </div>
    );
}
