import { useForm } from '@inertiajs/react';
import FormIconed from '@UserUtils/components/Form/InputIconed';
import { FormEvent, useState } from 'react';

type FormData = {
    name: string;
    email: string;
};

export default function NewsLetter() {
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const form = useForm<FormData>({
        name: '',
        email: '',
    });

    const validateField = (field: keyof FormData, value: string) => {
        switch (field) {
            case 'email':
                if (!value) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Invalid email address' : '';
            case 'name':
                if (!value) return 'Name is required';
                return '';
            default:
                return '';
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'email'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/newsletter/subscribe', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
            },
        });
    };
    
    const handleBlur = (field: keyof FormData) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const error = validateField(field, form.data[field]);
        form.setError(field, error ?? '');
    };

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-5 md:px-6">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md md:rounded-xl md:shadow-lg">
                    <div className="md:flex">
                        <div className="flex items-center justify-center bg-primary p-6 md:w-2/5 md:p-8">
                            <div className="text-center">
                                <i className="fas fa-envelope-open-text mb-4 text-4xl text-white md:mb-5 md:text-5xl"></i>
                                <h3 className="mb-2 text-xl font-bold text-white md:mb-3 md:text-2xl">Stay Updated</h3>
                                <p className="text-sm text-white/90 md:text-base">Get the latest Pakil news straight to your inbox</p>
                            </div>
                        </div>

                        <div className="p-6 md:w-3/5 md:p-8 lg:p-10">
                            <div className="mb-2">
                                <div className="mb-2 h-1 w-6 rounded-full bg-secondary md:mb-3 md:w-8"></div>
                                <h2 className="text-xs font-semibold tracking-wide text-primary uppercase md:text-sm">Connect With Us</h2>
                            </div>
                            <h3 className="text-dark mb-4 text-xl font-bold md:mb-5 md:text-2xl lg:text-3xl">
                                Subscribe to our <span className="text-primary">Newsletter</span>
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                <FormIconed
                                    Icon="fas fa-user"
                                    className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                                    label="Full Name"
                                    id="name"
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    onBlur={() => handleBlur('name')}
                                    error={form.errors.name}
                                    touched={touched.name}
                                    placeholder="Full Name"
                                    required
                                />

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
                                    placeholder="Email"
                                    required
                                />
                                <div className="flex items-start">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-xs text-gray-700 md:text-sm">
                                        I agree to receive emails about Pakil news and events
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:px-6 md:py-3 md:text-base"
                                >
                                    <i className="fas fa-paper-plane mr-1.5 text-xs md:mr-2 md:text-sm"></i> Subscribe Now
                                </button>
                            </form>

                            <p className="mt-3 text-[10px] text-gray-500 md:mt-4 md:text-xs">We respect your privacy. Unsubscribe at any time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
