import { Head } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <div className="flex min-h-screen flex-col bg-white md:flex-row">
                <div className="relative hidden md:block md:w-1/2 lg:w-7/12">
                    <img src="User/Login/loginbg.jpg" alt="Login background" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 z-50 bg-gradient-to-r from-[#052675] to-transparent opacity-70"></div>
                    <div className="absolute bottom-10 left-10 z-51 text-white">
                        <h2 className="mb-2 text-3xl font-bold">Welcome Back</h2>
                        <p className="text-lg opacity-90">Sign in to gain pakil points!</p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:w-5/12">
                    <div className="w-full max-w-md">
                        <div className="mb-8 flex justify-center">
                            <img src="/User/Layout/Logo.png" alt="Company Logo" className="h-20" />
                        </div>

                        <h1 className="mb-6 text-2xl font-bold text-gray-800">Log in to your account</h1>

                        <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition duration-150 hover:bg-gray-50">
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

                        <div className="mb-6 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-150 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>

                                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition duration-150 hover:bg-blue-700"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?
                                <a href="/Signup" className="font-medium text-blue-600 hover:text-blue-500">
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
