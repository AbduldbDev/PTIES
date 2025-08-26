import FileInput from '@/Admin/Utils/components/form/input/FileInput';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import SelectField from '@AdminUtils/components/form/Select';
import MapComponent from '@AdminUtils/components/map/MapComponent';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type FormData = {
    type: string;
    name: string;
    location: string;
    contact: string;
    facebook: string;
    long: string;
    lat: string;
    image: File | null;
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

export default function GuideCreateForm() {
    const { flash, errors } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        type: '',
        name: '',
        location: '',
        contact: '',
        facebook: '',
        long: '',
        lat: '',
        image: null,
    });

    const [lat, setLat] = useState<number>(14.381009);
    const [lng, setLng] = useState<number>(121.478769);

    useEffect(() => {
        form.setData({
            ...form.data,
            lat: lat.toString(),
            long: lng.toString(),
        });
    }, [lat, lng]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['type', 'name', 'location', 'contact', 'facebook'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }
        const contactRegex = /^(09|\+639)\d{9}$/;
        if (!contactRegex.test(form.data.contact)) {
            form.setError('contact', 'Please enter a valid contact number');
            return;
        }

        form.post('/Admin/establishment/create', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
                setLat(14.381009);
                setLng(121.478769);
            },
        });
    };

    const handleMarkerMove = (newLat: number, newLng: number) => {
        setLat(newLat);
        setLng(newLng);
    };

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Establishment Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Establishment">
                            <SelectField
                                label="Establishment Type"
                                name="type"
                                options={[
                                    { value: 'food', label: 'Food' },
                                    { value: 'accommodation', label: 'Accommodations' },
                                ]}
                                required={true}
                                value={form.data.type}
                                onChange={(e) => form.setData('type', e.target.value)}
                                error={form.errors.type}
                                errorMessage="Please select establishment type"
                            />

                            <InputField
                                type="text"
                                label="Establishment Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter establishment name"
                                resetSignal={resetSignal}
                            />
                            <InputField
                                type="text"
                                label="Address"
                                name="location"
                                required={true}
                                value={form.data.location}
                                onChange={(e) => form.setData('location', e.target.value)}
                                error={form.errors.location}
                                errorMessage="Please enter establishment address"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Contact"
                                name="contact"
                                required={true}
                                validation={/^[0-9]{10,15}$/}
                                value={form.data.contact}
                                onChange={(e) => form.setData('contact', e.target.value)}
                                error={form.errors.contact}
                                errorMessage="Please enter establishment contact"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Facebook Link"
                                name="facebook"
                                required={true}
                                value={form.data.facebook}
                                onChange={(e) => form.setData('facebook', e.target.value)}
                                error={form.errors.facebook}
                                errorMessage="Please enter establishment facebook"
                                resetSignal={resetSignal}
                            />
                            <FileInput
                                label="Establishment Image"
                                name="image"
                                onChange={(e, isValid) => {
                                    if (isValid && e.target.files?.[0]) {
                                        form.setData('image', e.target.files[0]);
                                        form.clearErrors('image');
                                    } else if (!isValid) {
                                        form.setError('image', 'File must be under 5MB');
                                    }
                                }}
                                validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                error={form.errors.image}
                                errorMessage={form.errors.image || 'File must be under 5MB'}
                                resetSignal={resetSignal}
                                required={true}
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Add New Establishment'}
                            </button>
                        </ComponentCard>
                        <ComponentCard title="Pin Establishment Map">
                            <MapComponent initialLat={lat} initialLng={lng} onMarkerMove={handleMarkerMove} />
                            <InputField
                                type="text"
                                label="Maps Latitude"
                                name="lat"
                                required={true}
                                value={form.data.lat}
                                onChange={(e) => form.setData('lat', e.target.value)}
                                error={form.errors.lat}
                                errorMessage="Please enter Establishment latitude"
                                resetSignal={resetSignal}
                                readonly={true}
                            />

                            <InputField
                                type="text"
                                label="Maps Longtitude "
                                name="long"
                                required={true}
                                value={form.data.long}
                                onChange={(e) => form.setData('long', e.target.value)}
                                error={form.errors.long}
                                errorMessage="Please enter Establishment longtitude "
                                resetSignal={resetSignal}
                                readonly={true}
                            />
                        </ComponentCard>
                    </div>
                </form>
            </AppWrapper>
        </>
    );
}
