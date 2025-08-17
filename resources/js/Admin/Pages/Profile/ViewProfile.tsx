import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { PageMeta } from '@AdminUtils/components/common/PageMeta';
import UserInfoCard from '@AdminUtils/components/UserProfile/UserInfoCard';
import UserMetaCard from '@AdminUtils/components/UserProfile/UserMetaCard';
import { usePage } from '@inertiajs/react';

type Profile = {
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
    profile?: {
        first_name?: string | null;
        middle_name?: string | null;
        last_name?: string | null;
        contact?: string | null;
        address?: string | null;
        gender?: string | null;
    } | null;
};

export default function UserProfiles() {
    const { profile } = usePage().props as unknown as { profile: Profile };

    return (
        <>
            <PageMeta
                title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Profile" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
                <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7 dark:text-white/90">Profile</h3>
                <div className="space-y-6">
                    <UserMetaCard user={profile} />
                    <UserInfoCard user={profile} />
                    {/* <UserAddressCard /> */}
                </div>
            </div>
        </>
    );
}
