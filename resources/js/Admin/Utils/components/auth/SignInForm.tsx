import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { EyeCloseIcon, EyeIcon } from '../../icons';
import Label from '../form/Label';
import Checkbox from '../form/input/Checkbox';
import Input from '../form/input/InputField';
import Button from '../ui/button/Button';

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex flex-1 flex-col bg-white dark:bg-gray-900">
            <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6">
                <div>
                    {/* Heading */}
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-900 dark:text-white">Sign In</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Enter your email and password to sign in!</p>
                    </div>

                    {/* Form */}
                    <form>
                        <div className="space-y-6">
                            {/* Email */}
                            <div>
                                <Label>
                                    Email <span className="text-error-600">*</span>
                                </Label>
                                <Input
                                    placeholder="info@gmail.com"
                                    className="border-gray-300 bg-white text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <Label>
                                    Password <span className="text-error-600">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="border-gray-300 bg-white text-gray-900 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <EyeIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                                        ) : (
                                            <EyeCloseIcon className="size-5 fill-gray-500 dark:fill-gray-400" />
                                        )}
                                    </span>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                                    <span className="text-theme-sm font-normal text-gray-700 dark:text-gray-300">Keep me logged in</span>
                                </div>
                                <Link
                                    href="/reset-password"
                                    className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 text-sm font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit */}
                            <div>
                                <Button className="w-full" size="sm">
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
