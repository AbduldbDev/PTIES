import { Head, router, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        otp?: string;
        [key: string]: string | undefined;
    };
    email?: string;
};

export default function VerifyOtp() {
    const title = 'Pakil Tourism | Verify OTP';
    const description = 'Verify your account with the OTP sent to your email.';

    const { flash, errors, email } = usePage<PageProps>().props;
    const [countdown, setCountdown] = useState(60);
    const [canResend, setCanResend] = useState(false);

    const form = useForm({
        otp: '',
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if ((flash?.error && flash.error.includes('session')) || (flash?.error && flash.error.includes('register'))) {
            const timer = setTimeout(() => {
                router.get('/signup');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        form.post('/verify-otp');
    };

    const handleResendOtp = () => {
        if (!canResend) return;

        setCanResend(false);
        setCountdown(60);

        fetch('/resend-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(() => {
                setCanResend(true);
            });
    };

    const maskEmail = (email: string) => {
        if (!email) return '';

        const [localPart, domain] = email.split('@');
        const [domainName, tld] = domain.split('.');

        const maskedLocal = localPart.length > 2 ? localPart.substring(0, 2) + '*'.repeat(localPart.length - 2) : localPart.substring(0, 1) + '*';

        const maskedDomain = domainName.length > 1 ? domainName.substring(0, 1) + '*'.repeat(domainName.length - 1) : domainName;

        return `${maskedLocal}@${maskedDomain}.${tld}`;
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
                        <h2 className="mb-2 text-3xl font-bold">Verify Your Account</h2>
                        <p className="text-lg opacity-90">Enter the OTP sent to your email or mobile to start earning pakil points!</p>
                    </div>
                </div>

                <div className="flex w-full flex-col items-center justify-center overflow-y-auto p-3 md:w-1/2 lg:w-5/12 lg:p-7">
                    <div className="w-full max-w-xl">
                        <div className="mb-8 flex justify-center">
                            <div className="flex items-center space-x-4">
                                <img src="/User/Layout/Seal.png" alt="Seal" className="h-14 w-14" />
                                <img src="/User/Layout/Logo.png" alt="Logo" className="h-16 w-16" />
                            </div>
                        </div>
                        {flash?.success && <div className="mb-4 rounded bg-green-100 p-3 text-sm text-green-700">{flash.success}</div>}
                        {flash?.error && <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">{flash.error}</div>}

                        <form className="z-100 space-y-6 overflow-hidden rounded-xl bg-white p-8 shadow-md" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <h2 className="mb-2 text-2xl font-bold text-primary lg:text-3xl">Verify Your Email</h2>
                                <p className="text-sm text-gray-600 lg:text-base">
                                    We've sent a 6-digit verification code to your email address. Please enter it below to verify your account.
                                    {email && <span className="mt-1 block font-medium text-primary">({maskEmail(email)})</span>}
                                </p>
                            </div>

                            <div>
                                <div className="mt-10 flex items-center justify-center space-x-2">
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength={1}
                                                className="h-12 w-12 rounded-md border border-gray-300 text-center text-xl font-semibold shadow-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                                                value={form.data.otp[index] || ''}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '');
                                                    if (value) {
                                                        const newOtp = form.data.otp.split('');
                                                        newOtp[index] = value;
                                                        const updatedOtp = newOtp.join('');
                                                        form.setData('otp', updatedOtp);

                                                        if (index < 5) {
                                                            const nextInput = document.getElementById(`otp-${index + 1}`);
                                                            if (nextInput) {
                                                                nextInput.focus();
                                                            }
                                                        }
                                                    } else {
                                                        const newOtp = form.data.otp.split('');
                                                        newOtp[index] = '';
                                                        form.setData('otp', newOtp.join(''));
                                                    }
                                                }}
                                                onKeyDown={(e) => {
                                                    const target = e.target as HTMLInputElement;
                                                    if (e.key === 'Backspace') {
                                                        if (!target.value && index > 0) {
                                                            const prevInput = document.getElementById(`otp-${index - 1}`);
                                                            if (prevInput) {
                                                                prevInput.focus();
                                                            }
                                                        } else if (target.value) {
                                                            const newOtp = form.data.otp.split('');
                                                            newOtp[index] = '';
                                                            form.setData('otp', newOtp.join(''));
                                                        }
                                                    }
                                                }}
                                                onFocus={(e) => e.target.select()}
                                                id={`otp-${index}`}
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                                {errors?.otp && <p className="mt-2 text-center text-sm text-red-600">{errors.otp}</p>}
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-gray-600">
                                    Didn't receive the code?{' '}
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        disabled={!canResend}
                                        className={`mt-10 font-medium ${canResend ? 'text-primary hover:text-primary/70' : 'text-gray-400'}`}
                                    >
                                        {canResend ? 'Resend OTP' : `Resend in ${countdown}s`}
                                    </button>
                                </p>
                            </div>

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
                                    'Verify Account'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
