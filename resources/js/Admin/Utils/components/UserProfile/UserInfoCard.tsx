type UserInfoCardProps = {
    user: {
        id: number;
        name: string;
        email: string;
        image?: string | null;
        profile?: {
            first_name?: string | null;
            middle_name?: string | null;
            last_name?: string | null;
            contact?: string | null;
            address?: string | null;
            gender?: string | null;
        } | null;
    };
};
export default function UserMetaCard({ user }: UserInfoCardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 lg:mb-6 dark:text-white/90">Personal Information</h4>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">First Name</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user.profile?.first_name}</p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Last Name</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user.profile?.middle_name}</p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Middle Name</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user.profile?.last_name}</p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Phone</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user.profile?.contact}</p>
                        </div>

                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Gender</p>
                            <p className="text-sm font-medium text-gray-800 capitalize dark:text-white/90">{user.profile?.gender}</p>
                        </div>
                        <div>
                            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">Address</p>
                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">{user.profile?.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
