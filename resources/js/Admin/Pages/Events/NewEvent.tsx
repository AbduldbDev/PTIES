import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import MapComponent from '@AdminUtils/components/map/MapComponent';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type FormData = {
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    Schedule: Schedule[];
    admission: string;
    attire: string;
    contacts: string;
    long: string;
    lat: string;
    image: File[];
};

type Schedule = {
    title: string;
    date_time: string;
    desc: string;
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
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        Schedule: [],
        admission: '',
        attire: '',
        contacts: '',
        long: '',
        lat: '',
        image: [],
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

        const requiredFields: (keyof FormData)[] = ['title', 'description', 'start_date', 'end_date', 'lat', 'long', 'image'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post('/Admin/events/create', {
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
    const [newSchedule, setnewSchedule] = useState<Schedule>({
        title: '',
        date_time: '',
        desc: '',
    });

    const addSchedule = () => {
        if (newSchedule.title.trim()) {
            form.setData('Schedule', [...form.data.Schedule, newSchedule]);
            setnewSchedule({ title: '', date_time: '', desc: '' });
        }
    };

    const updateSchedule = (index: number, updatedRoute: Schedule) => {
        const updatedScheduleArr = [...form.data.Schedule];
        updatedScheduleArr[index] = updatedRoute;
        form.setData('Schedule', updatedScheduleArr);
    };

    const removeSchedule = (index: number) => {
        const updatedSchedule = form.data.Schedule.filter((_, i) => i !== index);
        form.setData('Schedule', updatedSchedule);
    };

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Events Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Add New Event">
                            <InputField
                                type="text"
                                label="Event title"
                                name="title"
                                required={true}
                                value={form.data.title}
                                onChange={(e) => form.setData('title', e.target.value)}
                                error={form.errors.title}
                                errorMessage="Please enter event title"
                                resetSignal={resetSignal}
                            />
                            <InputField
                                type="date"
                                label="Start Date"
                                name="start_date"
                                required={true}
                                value={form.data.start_date}
                                onChange={(e) => form.setData('start_date', e.target.value)}
                                error={form.errors.start_date}
                                errorMessage="Please enter event start date"
                                resetSignal={resetSignal}
                            />

                            <InputField
                                type="date"
                                label="End Date"
                                name="end_date"
                                required={true}
                                value={form.data.end_date}
                                onChange={(e) => form.setData('end_date', e.target.value)}
                                error={form.errors.end_date}
                                errorMessage="Please enter event end date"
                                resetSignal={resetSignal}
                            />

                            <FileInput
                                label="Banner Images"
                                name="images"
                                multiple={true}
                                onChange={(e) => {
                                    const files = Array.from(e.target.files || []);
                                    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024);
                                    const invalidFiles = files.filter((file) => file.size > 5 * 1024 * 1024);

                                    if (validFiles.length > 0) {
                                        form.setData('image', validFiles);
                                        form.clearErrors('image');
                                    }

                                    if (invalidFiles.length > 0) {
                                        form.setError('image', `${invalidFiles.length} file(s) exceed 5MB`);
                                    }
                                }}
                                validation={(file) => (file ? file.size <= 5 * 1024 * 1024 : false)}
                                error={form.errors.image}
                                errorMessage={form.errors.image || 'Each file must be under 5MB'}
                                resetSignal={resetSignal}
                                required={true}
                            />
                        </ComponentCard>
                        <ComponentCard title="Event Details">
                            <Textarea
                                rows={15}
                                label="Description"
                                name="description"
                                required={true}
                                value={form.data.description}
                                onChange={(e) => form.setData('description', e.target.value)}
                                error={form.errors.Schedule}
                                errorMessage="Please enter description"
                            />
                        </ComponentCard>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard title="Events Schedules">
                                <div>
                                    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                        <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Schedules</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <InputField
                                                    label="Schedule Title"
                                                    name="sched_title"
                                                    value={newSchedule.title}
                                                    onChange={(e) => setnewSchedule({ ...newSchedule, title: e.target.value })}
                                                    required={true}
                                                    error={form.errors.Schedule}
                                                    errorMessage="Please enter schedule title"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={addSchedule}
                                                disabled={form.processing || !newSchedule.title.trim()}
                                                className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                    form.processing || !newSchedule.title.trim()
                                                        ? 'cursor-not-allowed bg-blue-400'
                                                        : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                                }`}
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <InputField
                                            type="datetime-local"
                                            label="Schedule Date & Time"
                                            name="sched_title"
                                            value={newSchedule.date_time}
                                            onChange={(e) => setnewSchedule({ ...newSchedule, date_time: e.target.value })}
                                            required={true}
                                            error={form.errors.Schedule}
                                            errorMessage="Please enter schedule date & time"
                                        />
                                        <Textarea
                                            rows={3}
                                            label="Description"
                                            name="Description"
                                            value={newSchedule.desc}
                                            required={true}
                                            onChange={(e) => setnewSchedule({ ...newSchedule, desc: e.target.value })}
                                            error={form.errors.Schedule}
                                            errorMessage="Please enter schedule description"
                                        />
                                    </div>
                                    <div className="mt-6 rounded-lg">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                                Current Schedules
                                                {form.data.Schedule.length > 0 && (
                                                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                        (Items: {form.data.Schedule.length})
                                                    </span>
                                                )}
                                            </h4>
                                        </div>

                                        {form.data.Schedule.length === 0 ? (
                                            <div className="rounded-lg border border-dashed border-gray-300 py-20 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                                <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                                <p>No Schedules added yet</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {form.data.Schedule.map((Schedules, index) => (
                                                    <div
                                                        key={index}
                                                        className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex-1">
                                                                <InputField
                                                                    label={`Schedule ${index + 1}`}
                                                                    name={`Schedule_${index}`}
                                                                    value={Schedules.title}
                                                                    onChange={(e) => updateSchedule(index, { ...Schedules, title: e.target.value })}
                                                                    required={true}
                                                                    errorMessage="Please enter schedule title"
                                                                />
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeSchedule(index)}
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
                                                            type="datetime-local"
                                                            label={`Schedule ${index + 1} Date & Time`}
                                                            name={`Schedule_${index}`}
                                                            value={Schedules.date_time}
                                                            onChange={(e) => setnewSchedule({ ...newSchedule, date_time: e.target.value })}
                                                            required={true}
                                                            error={form.errors.Schedule}
                                                            errorMessage="Please enter schedule date & time"
                                                        />
                                                        <Textarea
                                                            rows={3}
                                                            label={`Schedule ${index + 1} Description`}
                                                            name={`Schedule_${index}`}
                                                            value={Schedules.desc}
                                                            required={true}
                                                            onChange={(e) => updateSchedule(index, { ...Schedules, desc: e.target.value })}
                                                            error={form.errors.Schedule}
                                                            errorMessage="Please enter schedule description"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ComponentCard>
                        </div>

                        <div>
                            <ComponentCard title="Pin Event Location">
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
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-1">
                        <ComponentCard title="Event Details (Separete by new line)">
                            <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
                                <Textarea
                                    rows={10}
                                    label="Event Admission"
                                    name="admission"
                                    required={false}
                                    value={form.data.admission}
                                    onChange={(e) => form.setData('admission', e.target.value)}
                                    error={form.errors.admission}
                                />
                                <Textarea
                                    rows={10}
                                    label="Event Attires "
                                    name="attire"
                                    required={false}
                                    value={form.data.attire}
                                    onChange={(e) => form.setData('attire', e.target.value)}
                                    error={form.errors.attire}
                                />
                                <Textarea
                                    rows={10}
                                    label="Event Contacts "
                                    name="contacts"
                                    required={false}
                                    value={form.data.contacts}
                                    onChange={(e) => form.setData('contacts', e.target.value)}
                                    error={form.errors.contacts}
                                />
                            </div>
                        </ComponentCard>
                    </div>
                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Add New Event'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
