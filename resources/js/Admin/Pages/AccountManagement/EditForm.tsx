import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type UserData = {
    id: string;
    firstname: string;
    user_type: string;
    profile: ProfileData;
    profileImage: File | null;
};

type ProfileData = {
    first_name: string;
    middle_name: string;
    last_name: string;
    gender: string;
    contact: string;
    address: string;
    position: string;
};

type FormData = {
    id: string;
    firstname: string;
    lastname: string;
    middlename: string;
    gender: string;
    contact: string;
    address: string;
    position: string;
    user_type: string;
    profileImage: File | null;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string>;
    user: UserData;
    csrf_token: string;
};

export default function AccountEditForm() {
    const { flash, errors, user, csrf_token } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        id: user.id,
        firstname: user.profile.first_name || '',
        lastname: user.profile.last_name || '',
        middlename: user.profile.middle_name || '',
        gender: user.profile.gender || '',
        contact: user.profile.contact || '',
        address: user.profile.address || '',
        position: user.profile.position || '',
        user_type: user.user_type || '',
        profileImage: user.profileImage || null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const requiredFields: (keyof FormData)[] = ['firstname', 'lastname', 'gender', 'contact', 'address', 'position', 'user_type'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/AccountManagement/update`, {
            forceFormData: true,
            onSuccess: () => {
                form.setData({
                    ...form.data,
                });
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <>
            <Head title="Edit User Account" />
            <AppWrapper>
                <PageMeta title="Edit User Account" description="Edit existing user account information" />
                <PageBreadcrumb pageTitle="Account Management" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                        <ComponentCard title="Edit Account">
                            <div className="grid grid-cols-1 gap-0 lg:gap-10 xl:grid-cols-2">
                                <div>
                                    <h1 className="mb-3 text-black dark:text-white">Pesonal Information</h1>
                                    <InputField
                                        type="text"
                                        label="First Name"
                                        name="firstname"
                                        required={true}
                                        value={form.data.firstname}
                                        onChange={(e) => form.setData('firstname', e.target.value)}
                                        error={form.errors.firstname}
                                        errorMessage="Please enter user first name"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Middle Name"
                                        name="middlename"
                                        required={true}
                                        value={form.data.middlename}
                                        onChange={(e) => form.setData('middlename', e.target.value)}
                                        error={form.errors.middlename}
                                        errorMessage="Please enter user middle name"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Last Name"
                                        name="lastname"
                                        required={true}
                                        value={form.data.lastname}
                                        onChange={(e) => form.setData('lastname', e.target.value)}
                                        error={form.errors.lastname}
                                        errorMessage="Please enter user last name"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Phone Number"
                                        name="contact"
                                        required={true}
                                        value={form.data.contact}
                                        onChange={(e) => form.setData('contact', e.target.value)}
                                        error={form.errors.contact}
                                        errorMessage="Please enter user phone number"
                                        resetSignal={resetSignal}
                                    />

                                    <InputField
                                        type="text"
                                        label="Address"
                                        name="address"
                                        required={true}
                                        value={form.data.address}
                                        onChange={(e) => form.setData('address', e.target.value)}
                                        error={form.errors.address}
                                        errorMessage="Please enter user address"
                                        resetSignal={resetSignal}
                                    />
                                    <SelectField
                                        label="Gender"
                                        name="gender"
                                        options={[
                                            { value: 'male', label: 'Male' },
                                            { value: 'female', label: 'Female' },
                                            { value: 'other', label: 'Other' },
                                        ]}
                                        required={true}
                                        value={form.data.gender}
                                        onChange={(e) => form.setData('gender', e.target.value)}
                                        error={form.errors.gender}
                                        errorMessage="Please select a valid gender"
                                    />
                                </div>
                                <div>
                                    <h1 className="mb-3 text-black dark:text-white">Account Information</h1>
                                    <InputField
                                        type="text"
                                        label="Position"
                                        name="position"
                                        required={true}
                                        value={form.data.position}
                                        onChange={(e) => form.setData('position', e.target.value)}
                                        error={form.errors.position}
                                        errorMessage="Please enter user position"
                                        resetSignal={resetSignal}
                                    />
                                    <SelectField
                                        label="Account Type"
                                        name="user_type"
                                        options={[
                                            { value: 'admin', label: 'Admin' },
                                            { value: 'content_manager', label: 'Content Manager' },
                                        ]}
                                        required={true}
                                        value={form.data.user_type}
                                        onChange={(e) => form.setData('user_type', e.target.value)}
                                        error={form.errors.user_type}
                                        errorMessage="Please select account type"
                                    />

                                    <FileInput
                                        label="Profile Image"
                                        name="profileImage"
                                        onChange={(e, isValid) => {
                                            if (isValid && e.target.files?.[0]) {
                                                form.setData('profileImage', e.target.files[0]);
                                            }
                                        }}
                                        validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                        error={form.errors.profileImage}
                                        errorMessage="File must be under 5MB"
                                        resetSignal={resetSignal}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Account'}
                            </button>
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
