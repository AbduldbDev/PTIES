import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import { Head } from '@inertiajs/react';

type UserData = {};

type ProfileData = {};

type FormData = {
    id: string;
    email: string;
    first_name: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    user: UserData;
};

export default function AccountEditForm() {
    // const { flash, errors, user } = usePage<PageProps>().props;

    // const form = useForm<FormData>({

    // });

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();

    //     form.post(`/`, {
    //         forceFormData: true,
    //         onSuccess: () => {
    //             form.setData({
    //                 ...form.data,
    //             });
    //         },
    //     });
    // };

    return (
        <>
            <Head title="Edit User Account" />
            <AppWrapper>
                <PageMeta title="Edit User Account" description="Edit existing user account information" />
                <PageBreadcrumb pageTitle="Account Management" />

                <form>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                        <ComponentCard title="Edit Account">
                            <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                                <div></div>
                                <div></div>
                            </div>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
