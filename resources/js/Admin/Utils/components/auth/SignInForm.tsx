import InputField from '@AdminUtils/components/form/input/InputField';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import Checkbox from '../form/input/Checkbox';
import Button from '../ui/button/Button';

type FormData = {
    email: string;
    password: string;
    remember: boolean;
};

export default function SignInForm() {
    const [resetSignal, setResetSignal] = useState(0);

    const form = useForm<FormData>({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['email', 'password'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/login', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
            },
        });
    };

    return (
        <div className="flex flex-1 flex-col bg-white dark:bg-gray-900">
            <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6">
                <div>
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-900 dark:text-white">Sign In</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Enter your email and password to sign in!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <InputField
                                type="email"
                                label="Email"
                                name="email"
                                required
                                value={form.data.email}
                                onChange={(e) => form.setData('email', e.target.value)}
                                error={form.errors.email}
                                errorMessage="Please enter user email"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="password"
                                label="Password"
                                name="password"
                                required
                                value={form.data.password}
                                onChange={(e) => form.setData('password', e.target.value)}
                                error={form.errors.password}
                                errorMessage="Please enter user password"
                                resetSignal={resetSignal}
                            />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Checkbox checked={form.data.remember} onChange={(checked: boolean) => form.setData('remember', checked)} />
                                    <span className="text-theme-xs lg:text-theme-sm font-normal text-gray-700 dark:text-gray-300">
                                        Keep me logged in
                                    </span>
                                </div>
                            </div>

                            <Button className="w-full" size="sm" type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
