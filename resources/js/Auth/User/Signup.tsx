import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    password_confirmation: string;
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
};
export default function Signup() {
    const { flash, errors } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // ✅ Prevent page reload

        if (form.data.password !== form.data.password_confirmation) {
            form.setError('password_confirmation', 'Passwords do not match');
            return;
        }

        form.post('/Signup/Submit', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal((prev) => prev + 1);
            },
        });
    };

    return (
        <div className="flex min-h-screen flex-col bg-white md:flex-row">
            <div className="relative hidden md:block md:w-1/2 lg:w-7/12">
                <img src="User/Login/loginbg.jpg" alt="Login background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 z-50 bg-gradient-to-r from-[#052675] to-transparent opacity-70"></div>
                <div className="absolute bottom-10 left-10 z-51 text-white">
                    <h2 className="mb-2 text-3xl font-bold">Welcome, Mabuhay!</h2>
                    <p className="text-lg opacity-90">Sign in to gain pakil points!</p>
                </div>
            </div>

            <div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:w-5/12">
                <div className="w-full max-w-md">
                    <div className="mb-8 flex justify-center">
                        <img src="/User/Layout/Logo.png" alt="Company Logo" className="h-20" />
                    </div>

                    {flash?.success && <div className="text-green-600">{flash.success}</div>}
                    {flash?.error && <div className="text-red-600">{flash.error}</div>}
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">Create an account</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstname" className="mb-1 block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                value={form.data.firstname}
                                onChange={(e) => form.setData('firstname', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Ex. Juan"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                value={form.data.lastname}
                                onChange={(e) => form.setData('lastname', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="Ex. Dela Cruz"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={form.data.email}
                                onChange={(e) => form.setData('email', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="juandc@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={form.data.password}
                                onChange={(e) => form.setData('password', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                value={form.data.password_confirmation}
                                onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition duration-150 hover:bg-blue-700"
                        >
                            Sign up
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                            <a href="/Login" className="font-medium text-blue-600 hover:text-blue-500">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
