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
    name: string;
    category: string;
    icon: string;
    hotline: string;
    contact: string;
    location: string;
    long: string;
    lat: string;
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
        name: '',
        category: '',
        icon: '',
        hotline: '',
        contact: '',
        location: '',
        long: '',
        lat: '',
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

        const requiredFields: (keyof FormData)[] = ['name', 'category', 'hotline', 'contact', 'location'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        const contactRegex = /^(09|\+639)\d{9}$/;
        if (!contactRegex.test(form.data.contact)) {
            form.setError('contact', 'Please enter a valid phone number');
            return;
        }

        const hotlineRegex = /^(0\d{2,4})[- ]?\d{5,7}$/;
        if (!hotlineRegex.test(form.data.hotline)) {
            form.setError('hotline', 'Please enter a valid hotline number');
            return;
        }

        form.post('/Admin/hotlines/create', {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
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
                <PageBreadcrumb pageTitle="Emergency Hotlines Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Hotline">
                            <InputField
                                type="text"
                                label="Hotline Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter hotline name"
                                resetSignal={resetSignal}
                            />

                            <SelectField
                                label="Icon"
                                name="icon"
                                options={[
                                    { value: 'fa-solid fa-suitcase-medical', label: 'Medical' },
                                    { value: 'fa-solid fa-fire-extinguisher', label: 'Fire' },
                                    { value: 'fa-solid fa-building-shield', label: 'Police' },
                                    { value: 'fa-solid fa-building-columns', label: 'General' },
                                ]}
                                required={true}
                                value={form.data.icon}
                                onChange={(e) => form.setData('icon', e.target.value)}
                                error={form.errors.icon}
                                errorMessage="Please select a valid icon"
                            />

                            <InputField
                                type="text"
                                label="Hotline Category"
                                name="category"
                                required={true}
                                value={form.data.category}
                                onChange={(e) => form.setData('category', e.target.value)}
                                error={form.errors.category}
                                errorMessage="Please enter hotline category"
                                resetSignal={resetSignal}
                            />
                            <InputField
                                type="text"
                                label="Hotline Number"
                                name="hotline_number"
                                required={true}
                                value={form.data.hotline}
                                onChange={(e) => form.setData('hotline', e.target.value)}
                                error={form.errors.hotline}
                                errorMessage="Please enter hotline number"
                                resetSignal={resetSignal}
                                validation={/^(0\d{2,4})[- ]?\d{5,7}$/}
                            />

                            <InputField
                                type="text"
                                label="Contact Number"
                                name="hotline_number"
                                required={true}
                                validation={/^(09|\+639)\d{9}$/}
                                value={form.data.contact}
                                onChange={(e) => form.setData('contact', e.target.value)}
                                error={form.errors.contact}
                                errorMessage="Please enter contact number"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Address"
                                name="hotline_location"
                                required={true}
                                value={form.data.location}
                                onChange={(e) => form.setData('location', e.target.value)}
                                error={form.errors.location}
                                errorMessage="Please enter location address"
                                resetSignal={resetSignal}
                            />

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Add Emergency Hotline'}
                            </button>
                        </ComponentCard>
                        <ComponentCard title="Pin Hotline Location">
                            <MapComponent initialLat={lat} initialLng={lng} onMarkerMove={handleMarkerMove} />
                            <InputField
                                type="text"
                                label="Maps Latitude"
                                name="lat"
                                required={true}
                                value={form.data.lat}
                                onChange={(e) => form.setData('lat', e.target.value)}
                                error={form.errors.lat}
                                errorMessage="Please enter terminal latitude"
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
                                errorMessage="Please enter terminal longtitude "
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
