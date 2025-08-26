import { Head, useForm, usePage } from '@inertiajs/react';
import FormIconed from '@UserUtils/components/Form/InputIconed';
import FormPassword from '@UserUtils/components/Form/InputPassword';
import { FormEvent, useState } from 'react';

type FormData = {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
};

type ResetPasswordPageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    email: string;
    token: string;
};

export default function ResetPassword() {
    const title = 'Pakil Tourism | Login';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    const { flash, errors, email, token } = usePage<ResetPasswordPageProps>().props;
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [localErrors, setLocalErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const form = useForm<FormData>({
        email: email || '',
        password: '',
        password_confirmation: '',
        token: token || '',
    });

    const validateField = (field: keyof FormData, value: string) => {
        switch (field) {
            case 'email':
                if (!value) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Invalid Email Address' : '';
            case 'password':
                if (!value) return 'New Password is required';
                return value.length < 8 ? 'Password must be at least 8 characters' : '';
            case 'password_confirmation':
                if (!value) return 'Confirm Your New password';
                return value !== form.data.password ? 'Passwords do not match' : '';
            default:
                return '';
        }
    };

    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, form.data[field]);

        setLocalErrors((prev) => ({ ...prev, [field]: error })); // store client error
        form.clearErrors(field); // clear server error so it won’t override
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (form.data.password !== form.data.password_confirmation) {
            form.setError('password_confirmation', 'Passwords do not match');
            return;
        }

        form.post('/reset-password', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                setTouched({});
            },
        });
    };

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            <div className="flex h-screen flex-col overflow-hidden md:flex-row">
                <div className="relative hidden md:block md:w-1/2 lg:w-7/12">
                    <img src="/User/Login/loginbg.jpg" alt="Login background" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 z-50 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
                    <div className="absolute bottom-10 left-10 z-51 text-white">
                        <h2 className="mb-2 text-3xl font-bold">Welcome, Mabuhay!</h2>
                        <p className="text-lg opacity-90">Sign in to gain pakil points!</p>
                    </div>
                </div>

                <div className="flex w-full flex-col items-center justify-center overflow-y-auto p-3 md:w-1/2 lg:w-5/12 lg:p-7">
                    <div className="w-full max-w-xl">
                        <div className="mb-8 flex justify-center">
                            <div className="flex items-center space-x-4">
                                <img src="/User/Layout/Logo.png" alt="Logo" className="h-16 w-16" />
                                <img src="/User/Layout/Seal.png" alt="Seal" className="h-14 w-14" />
                            </div>
                        </div>

                        <div className="z-100 space-y-3 overflow-hidden rounded-xl bg-white p-8 shadow-md">
                            <div className="mb-8 text-center">
                                <h2 className="mb-2 text-2xl font-bold text-primary lg:text-3xl">Reset Your Password</h2>
                                <p className="text-md text-gray-600 lg:text-lg">
                                    Forgot your password? No worries! Just enter your email and we’ll help you set a new one so you can continue
                                    exploring attractions and earning Pakil points.
                                </p>
                            </div>
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <input type="hidden" name="token" value={form.data.token} />
                                {/* <input type="hidden" name="email" value={form.data.email} /> */}
                                <FormIconed
                                    Icon="fas fa-envelope"
                                    className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                                    label="Email Address"
                                    id="email"
                                    value={form.data.email}
                                    onChange={(e) => form.setData('email', e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                    error={form.errors.email}
                                    touched={touched.email}
                                    placeholder="Ex. Juan@gmail.com"
                                    readOnly
                                />
                                <FormPassword
                                    Icon="fas fa-lock text-gray/50"
                                    className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                                    label="New Password"
                                    id="password"
                                    value={form.data.password}
                                    onChange={(e) => form.setData('password', e.target.value)}
                                    onBlur={() => handleBlur('password')}
                                    error={form.errors.password}
                                    touched={touched.password}
                                    placeholder="*********"
                                    required
                                />

                                <FormPassword
                                    Icon="fas fa-lock text-gray/50"
                                    className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                                    label="Confirm New Password"
                                    id="password_confirmation"
                                    value={form.data.password_confirmation}
                                    onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                    onBlur={() => handleBlur('password_confirmation')}
                                    error={form.errors.password_confirmation}
                                    touched={touched.password_confirmation}
                                    placeholder="*********"
                                    required
                                />

                                {flash?.success && <div className="text-sm text-green-600">{flash.success}</div>}
                                {flash?.error && <div className="text-sm text-red-600">{flash.error}</div>}

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-primary py-3 font-medium text-white transition duration-150 hover:bg-primary/70"
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?
                                <a href="/Login" className="ml-2 font-medium text-primary hover:text-primary/70">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
