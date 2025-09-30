import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import MapComponent from '@AdminUtils/components/map/MapComponent';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type FormData = {
    name: string;
    category: string;
    operating_hours: string;
    information: string;
    history: string;
    local_rules: string;
    fun_facts: string;
    fees: string;
    distance: string;
    points: string;
    long: string;
    lat: string;
    images: File[];
    Contact: Contact[];
};

type Contact = {
    name: string;
    position: string;
    contact: string;
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
        operating_hours: '',
        information: '',
        history: '',
        local_rules: '',
        fun_facts: '',
        fees: '',
        distance: '',
        long: '',
        lat: '',
        points: '',
        Contact: [],
        images: [],
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

        const requiredFields: (keyof FormData)[] = [
            'name',
            'category',
            'operating_hours',
            'information',
            'fees',
            'distance',
            'lat',
            'long',
            'points',
            'images',
        ];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/attractions/create', {
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
    const [newContact, setnewContact] = useState<Contact>({
        name: '',
        position: '',
        contact: '',
    });

    const addContact = () => {
        if (newContact.name.trim()) {
            form.setData('Contact', [...form.data.Contact, newContact]);
            setnewContact({ name: '', position: '', contact: '' });
        }
    };

    const updateContact = (index: number, updatedRoute: Contact) => {
        const updatedContactArr = [...form.data.Contact];
        updatedContactArr[index] = updatedRoute;
        form.setData('Contact', updatedContactArr);
    };

    const removeContact = (index: number) => {
        const updatedContact = form.data.Contact.filter((_, i) => i !== index);
        form.setData('Contact', updatedContact);
    };

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, Attractions, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Attractions Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Attraction">
                            <InputField
                                type="text"
                                label="Attaction Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter attaction name"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="number"
                                label="Points"
                                name="points"
                                required={true}
                                value={form.data.points}
                                onChange={(e) => form.setData('points', e.target.value)}
                                error={form.errors.points}
                                errorMessage="Please enter attaction points"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="text"
                                label="Distance from municipal hall (in KM)"
                                name="distance"
                                required={true}
                                value={form.data.distance}
                                onChange={(e) => form.setData('distance', e.target.value)}
                                error={form.errors.distance}
                                errorMessage="Please enter attaction distance"
                                resetSignal={resetSignal}
                            />

                            <SelectField
                                label="Category"
                                name="category"
                                options={[
                                    { value: 'cultural', label: 'Cultural' },
                                    { value: 'nature', label: 'Nature' },
                                    { value: 'historical', label: 'Historical' },
                                    { value: 'religious', label: 'Religious' },
                                ]}
                                required={true}
                                value={form.data.category}
                                onChange={(e) => form.setData('category', e.target.value)}
                                error={form.errors.category}
                                errorMessage="Please select a valid category"
                            />

                            <FileInput
                                label="Attraction images"
                                name="images"
                                multiple={true}
                                onChange={(e) => {
                                    const files = Array.from(e.target.files || []);
                                    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024);
                                    const invalidFiles = files.filter((file) => file.size > 5 * 1024 * 1024);

                                    if (validFiles.length > 0) {
                                        form.setData('images', validFiles);
                                        form.clearErrors('images');
                                    }

                                    if (invalidFiles.length > 0) {
                                        form.setError('images', `${invalidFiles.length} file(s) exceed 5MB`);
                                    }
                                }}
                                validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                error={form.errors.images}
                                errorMessage={form.errors.images || 'Each file must be under 5MB'}
                                resetSignal={resetSignal}
                                required={true}
                            />
                        </ComponentCard>
                        <ComponentCard title="Pin Attraction Location">
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
                    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-1">
                        <ComponentCard title="Attraction Details (Separete by new line)">
                            <Textarea
                                rows={10}
                                label="Information"
                                name="information"
                                required={true}
                                value={form.data.information}
                                onChange={(e) => form.setData('information', e.target.value)}
                                error={form.errors.information}
                            />
                            <Textarea
                                rows={10}
                                label="History "
                                name="history"
                                required={false}
                                value={form.data.history}
                                onChange={(e) => form.setData('history', e.target.value)}
                                error={form.errors.history}
                            />
                            <Textarea
                                rows={10}
                                label="Fun Facts "
                                name="contacts"
                                required={false}
                                value={form.data.fun_facts}
                                onChange={(e) => form.setData('fun_facts', e.target.value)}
                                error={form.errors.fun_facts}
                            />
                            <Textarea
                                rows={10}
                                label="Local Rules"
                                name="local_rules"
                                required={false}
                                value={form.data.local_rules}
                                onChange={(e) => form.setData('local_rules', e.target.value)}
                                error={form.errors.local_rules}
                            />
                        </ComponentCard>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Attractions Contact Persons">
                            <div>
                                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                    <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Contacts</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <InputField
                                                label="Contact Title"
                                                name="contact_title"
                                                value={newContact.name}
                                                onChange={(e) => setnewContact({ ...newContact, name: e.target.value })}
                                                required={true}
                                                error={form.errors.Contact}
                                                errorMessage="Please enter Contact title"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={addContact}
                                            disabled={form.processing || !newContact.name.trim()}
                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                form.processing || !newContact.name.trim()
                                                    ? 'cursor-not-allowed bg-blue-400'
                                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                            }`}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <InputField
                                        type="text"
                                        label="Contact Label"
                                        name="contact_label"
                                        value={newContact.position}
                                        onChange={(e) => setnewContact({ ...newContact, position: e.target.value })}
                                        required={true}
                                        error={form.errors.Contact}
                                        errorMessage="Please enter contact label"
                                    />
                                    <Textarea
                                        rows={3}
                                        label="Contact Number/Email"
                                        name="contact_number"
                                        value={newContact.contact}
                                        required={true}
                                        onChange={(e) => setnewContact({ ...newContact, contact: e.target.value })}
                                        error={form.errors.Contact}
                                        errorMessage="Please enter contact number/email"
                                    />
                                </div>
                                <div className="mt-6 rounded-lg">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                            Current Contacts
                                            {form.data.Contact.length > 0 && (
                                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                    (Items: {form.data.Contact.length})
                                                </span>
                                            )}
                                        </h4>
                                    </div>

                                    {form.data.Contact.length === 0 ? (
                                        <div className="rounded-lg border border-dashed border-gray-300 py-20 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                            <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                            <p>No Contacts added yet</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {form.data.Contact.map((Contacts, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex-1">
                                                            <InputField
                                                                label={`Contact ${index + 1}`}
                                                                name={`Contact_${index}`}
                                                                value={Contacts.name}
                                                                onChange={(e) => updateContact(index, { ...Contacts, name: e.target.value })}
                                                                required={true}
                                                                errorMessage="Please enter Contact title"
                                                            />
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeContact(index)}
                                                            disabled={form.processing}
                                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                                form.processing
                                                                    ? 'cursor-not-allowed bg-red-400'
                                                                    : 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
                                                            }`}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                    <InputField
                                                        type="text"
                                                        label={`Contact ${index + 1} Label `}
                                                        name={`Contact_${index}`}
                                                        value={Contacts.position}
                                                        onChange={(e) => updateContact(index, { ...Contacts, position: e.target.value })}
                                                        required={true}
                                                        error={form.errors.Contact}
                                                        errorMessage="Please enter Contact Label"
                                                    />
                                                    <Textarea
                                                        rows={3}
                                                        label={`Contact ${index + 1} Number/Email`}
                                                        name={`Contact_${index}`}
                                                        value={Contacts.contact}
                                                        required={true}
                                                        onChange={(e) => updateContact(index, { ...Contacts, contact: e.target.value })}
                                                        error={form.errors.Contact}
                                                        errorMessage="Please enter contact number/email"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ComponentCard>

                        <ComponentCard title="Attraction Details">
                            <Textarea
                                rows={10}
                                label="Attraction Fees"
                                name="fees"
                                required={true}
                                value={form.data.fees}
                                onChange={(e) => form.setData('fees', e.target.value)}
                                error={form.errors.fees}
                                errorMessage="Please enter fees"
                            />
                            <Textarea
                                rows={10}
                                label="Operating Hours"
                                name="operating_hours"
                                required={true}
                                value={form.data.operating_hours}
                                onChange={(e) => form.setData('operating_hours', e.target.value)}
                                error={form.errors.operating_hours}
                                errorMessage="Please enter operating hours"
                            />
                        </ComponentCard>
                    </div>

                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Add New Attraction'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
