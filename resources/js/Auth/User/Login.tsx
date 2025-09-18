import { Head, useForm, usePage } from '@inertiajs/react';
import FormIconed from '@UserUtils/components/Form/InputIconed';
import FormPassword from '@UserUtils/components/Form/InputPassword';
import { FormEvent, useState } from 'react';

type FormData = {
    email: string;
    password: string;
    remember: boolean;
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

export default function Login() {
    const title = 'Pakil Tourism | Login';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    const { flash, errors } = usePage<PageProps>().props;
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const form = useForm<FormData>({
        email: '',
        password: '',
        remember: false,
    });

    const validateField = (field: keyof FormData, value: string) => {
        switch (field) {
            case 'email':
                if (!value) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Invalid email address' : '';
            case 'password':
                if (!value) return 'Password is required';
                return value.length < 6 ? 'Password must be at least 6 characters' : '';
            default:
                return '';
        }
    };

    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, typeof form.data[field] === 'string' ? form.data[field] : '');
        form.setError(field, error ?? '');
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let hasError = false;
        (Object.keys(form.data) as (keyof FormData)[]).forEach((field) => {
            if (field === 'remember') return;

            const error = validateField(field, form.data[field]);
            if (error) hasError = true;
            form.setError(field, error ?? '');
            setTouched((prev) => ({ ...prev, [field]: true }));
        });

        if (hasError) return;

        form.post('/Login', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setTouched({});
            },
        });
    };

    const handleGoogleLogin = () => {
        window.location.href = `${window.location.origin}/auth/google`;
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
                    <img src="User/Login/loginbg.jpg" alt="Login background" className="h-full w-full object-cover" />
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
                            <div className="mb-3 text-center lg:mb-8">
                                <h2 className="mb-2 text-2xl font-bold text-primary lg:text-3xl">Welcome Back!</h2>
                                <p className="text-sm text-gray-600 lg:text-lg">
                                    Sign in to continue exploring attractions, joining events, and earning rewards.
                                </p>
                            </div>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <FormIconed
                                    Icon="fas fa-envelope"
                                    label="Email Address"
                                    id="email"
                                    value={form.data.email}
                                    onChange={(e) => form.setData('email', e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                    error={form.errors.email}
                                    touched={touched.email}
                                    placeholder="Ex. Juan"
                                    required
                                />

                                <FormPassword
                                    Icon="fas fa-lock text-gray/50"
                                    label="Password"
                                    id="password"
                                    value={form.data.password}
                                    onChange={(e) => form.setData('password', e.target.value)}
                                    onBlur={() => handleBlur('password')}
                                    error={form.errors.password}
                                    touched={touched.password}
                                    placeholder="*********"
                                    required
                                />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember"
                                            type="checkbox"
                                            checked={form.data.remember}
                                            onChange={(e) => form.setData('remember', e.target.checked)}
                                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-700 lg:text-sm">
                                            Remember me
                                        </label>
                                    </div>

                                    <a href="/forgot-password" className="text-xs text-primary hover:text-primary/70 lg:text-sm">
                                        Forgot password?
                                    </a>
                                </div>

                                {flash?.success && <div className="mt-1 text-sm text-green-600">{flash.success}</div>}
                                {flash?.error && <div className="mt-1 text-sm text-red-500">{flash.error}</div>}

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition duration-150 hover:bg-primary/70 sm:px-4 sm:py-3 sm:text-base"
                                    disabled={form.processing}
                                >
                                    {form.processing ? (
                                        <>
                                            <svg
                                                className="mr-2 h-5 w-5 animate-spin text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>
                            </form>

                            <div className="mb-6 flex items-center">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-4 text-gray-500">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            <button
                                onClick={handleGoogleLogin}
                                className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition duration-150 hover:bg-gray-50 sm:px-4 sm:py-3 sm:text-base"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path
                                        d="M17.5781 9.20578C17.5781 8.56641 17.5223 7.95312 17.4187 7.36523H9.14062V10.8486H13.9688C13.7812 11.9719 13.1625 12.9234 12.1766 13.5578V15.5766H14.9545C16.5539 14.0906 17.5781 11.8852 17.5781 9.20578Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M9.14062 17.9999C11.4187 17.9999 13.3219 17.2233 14.9545 15.5765L12.1766 13.5577C11.4187 14.0765 10.4531 14.3671 9.14062 14.3671C6.9375 14.3671 5.07656 12.914 4.42969 10.9359H1.57031V13.014C3.1875 16.0312 5.9625 17.9999 9.14062 17.9999Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M4.42969 10.9359C4.26094 10.4359 4.1625 9.90303 4.1625 9.35303C4.1625 8.80303 4.26094 8.27015 4.42969 7.77015V5.69203H1.57031C1.01016 6.78278 0.703125 8.01703 0.703125 9.35303C0.703125 10.689 1.01016 11.9233 1.57031 13.014L4.42969 10.9359Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M9.14062 4.33906C10.5187 4.33906 11.7281 4.82656 12.6797 5.78203L15.0328 3.42891C13.3172 1.81406 11.4187 0.706055 9.14062 0.706055C5.9625 0.706055 3.1875 2.67468 1.57031 5.69141L4.42969 7.77047C5.07656 5.79234 6.9375 4.33906 9.14062 4.33906Z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?
                                <a href="/Signup" className="ml-2 font-medium text-primary hover:text-primary/70">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
