import { Head, useForm, usePage } from '@inertiajs/react';
import FormIconed from '@UserUtils/components/Form/InputIconed';
import FormPassword from '@UserUtils/components/Form/InputPassword';
import TermsModal from '@UserUtils/components/Modals/TermsCondition';
import { FormEvent, useState } from 'react';

type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    password_confirmation: string;
    agreeToTerms: boolean;
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
    const title = 'Pakil Tourism | Signup';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    const { flash, errors } = usePage<PageProps>().props;
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [showTermsModal, setShowTermsModal] = useState(false);
    const form = useForm<FormData>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        agreeToTerms: false,
    });

    const validateField = (field: keyof FormData, value: string | boolean) => {
        switch (field) {
            case 'firstname':
            case 'lastname':
                return value.toString().trim() === '' ? 'This field is required' : '';
            case 'email':
                if (!value) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value.toString()) ? 'Invalid email address' : '';
            case 'password':
                if (!value) return 'Password is required';
                return value.toString().length < 8 ? 'Password must be at least 8 characters' : '';
            case 'password_confirmation':
                if (!value) return 'Confirm your password';
                return value !== form.data.password ? 'Password does not match' : '';
            case 'agreeToTerms':
                return !value ? 'You must agree to the terms and conditions' : '';
            default:
                return '';
        }
    };

    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, form.data[field]);
        form.setError(field, error ?? '');
    };

    const handleTermsAgree = () => {
        form.setData('agreeToTerms', true);
        setShowTermsModal(false);
    };

    const handleTermsCheckboxClick = () => {
        if (!form.data.agreeToTerms) {
            setShowTermsModal(true);
        } else {
            form.setData('agreeToTerms', false);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let hasError = false;
        (Object.keys(form.data) as (keyof FormData)[]).forEach((field) => {
            const error = validateField(field, form.data[field]);
            if (error) hasError = true;
            form.setError(field, error ?? '');
            setTouched((prev) => ({ ...prev, [field]: true }));
        });

        if (hasError) return;

        form.post('/Signup', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
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
                    <img src="User/Login/loginbg.jpg" alt="Login background" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 z-50 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
                    <div className="absolute bottom-10 left-10 z-51 text-white">
                        <h2 className="mb-2 text-3xl font-bold">Join Us, Mabuhay!</h2>
                        <p className="text-lg opacity-90">Sign up now and start earning pakil points!</p>
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

                        <form className="z-100 space-y-3 overflow-hidden rounded-xl bg-white p-8 shadow-md" onSubmit={handleSubmit}>
                            <div className="mb-3 text-center lg:mb-8">
                                <h2 className="mb-2 text-2xl font-bold text-primary lg:text-3xl">Create An Account</h2>
                                <p className="text-sm text-gray-600 lg:text-lg">
                                    Join our community to explore attractions, join events, and earn rewards.
                                </p>
                            </div>

                            <FormIconed
                                Icon="fas fa-user"
                                label="First name"
                                id="firstname"
                                value={form.data.firstname}
                                onChange={(e) => form.setData('firstname', e.target.value)}
                                onBlur={() => handleBlur('firstname')}
                                error={form.errors.firstname}
                                touched={touched.firstname}
                                placeholder="Ex. Juan"
                                required
                            />

                            <FormIconed
                                Icon="fas fa-user"
                                label="Last name"
                                id="lastname"
                                value={form.data.lastname}
                                onChange={(e) => form.setData('lastname', e.target.value)}
                                onBlur={() => handleBlur('lastname')}
                                error={form.errors.lastname}
                                touched={touched.lastname}
                                placeholder="Ex. Juan"
                                required
                            />

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

                            <FormPassword
                                Icon="fas fa-lock text-gray/50"
                                label="Confirm Password"
                                id="password_confirmation"
                                value={form.data.password_confirmation}
                                onChange={(e) => form.setData('password_confirmation', e.target.value)}
                                onBlur={() => handleBlur('password_confirmation')}
                                error={form.errors.password_confirmation}
                                touched={touched.password_confirmation}
                                placeholder="*********"
                                required
                            />

                            <div className="mt-4 flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        id="agreeToTerms"
                                        type="checkbox"
                                        checked={form.data.agreeToTerms}
                                        onChange={handleTermsCheckboxClick}
                                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <label
                                    htmlFor="agreeToTerms"
                                    className="ml-2 cursor-pointer text-xs text-gray-600 lg:text-sm"
                                    onClick={handleTermsCheckboxClick}
                                >
                                    I agree to the <span className="cursor-pointer font-medium text-primary hover:underline">Terms & Conditions</span>{' '}
                                    and <span className="cursor-pointer font-medium text-primary hover:underline">Privacy Policy</span>.
                                </label>
                            </div>
                            {form.errors.agreeToTerms && touched.agreeToTerms && (
                                <p className="mt-1 text-sm text-red-500">{form.errors.agreeToTerms}</p>
                            )}
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
                                    'Sign Up'
                                )}
                            </button>
                        </form>

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

                <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} onAgree={handleTermsAgree} />
            </div>
        </>
    );
}
