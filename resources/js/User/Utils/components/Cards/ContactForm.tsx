import { useForm } from '@inertiajs/react';
import FormIconed from '@UserUtils/components/Form/InputIconed';
import TextArea from '@UserUtils/components/Form/TextArea';
import { FormEvent, useState } from 'react';
type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const form = useForm<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
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
            case 'email':
                if (!value) return 'Email is required';
                return '';
            case 'subject':
                if (!value) return 'Subject is required';
                return '';
            case 'message':
                if (!value) return 'Message is required';
                return '';
            default:
                return '';
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'email', 'subject', 'message'];

        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/contactus/send', {
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
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="p-8">
                <div className="mb-6 flex items-center">
                    <div className="mr-4 rounded-lg bg-primary/10 p-3">
                        <i className="fa-solid fa-envelope text-xl text-primary"></i>
                    </div>
                    <h4 className="text-dark text-xl font-bold">Send Us a Message</h4>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                    </div>

                    <div>
                        <FormIconed
                            Icon="fas fa-tag"
                            className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                            label="Subject"
                            id="subject"
                            value={form.data.subject}
                            onChange={(e) => form.setData('subject', e.target.value)}
                            onBlur={() => handleBlur('subject')}
                            error={form.errors.subject}
                            touched={touched.subject}
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div>
                        <TextArea
                            Icon="fas fa-comment-dots"
                            className="w-full rounded-lg border px-4 py-3 transition duration-150 outline-none focus:ring-1"
                            label="Message"
                            id="message"
                            value={form.data.message}
                            onChange={(e) => form.setData('message', e.target.value)}
                            onBlur={() => handleBlur('message')}
                            error={form.errors.message}
                            touched={touched.message}
                            placeholder="Message..."
                            required
                            rows={5}
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                    >
                        <i className="fas fa-paper-plane mr-2"></i> Send Message
                    </button>
                </form>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
                <h5 className="mb-3 text-sm font-semibold tracking-wider text-gray-500 uppercase">Other Ways to Reach Us</h5>
                <div className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2">
                    <div className="flex items-center">
                        <div className="mr-3 rounded-lg bg-primary/10 p-2">
                            <i className="fas fa-phone-alt text-primary"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Phone</p>
                            <p className="font-medium">(049) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-3 rounded-lg bg-primary/10 p-2">
                            <i className="fas fa-map-marker-alt text-primary"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Address</p>
                            <p className="font-medium">Municipal Hall, Pakil</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
