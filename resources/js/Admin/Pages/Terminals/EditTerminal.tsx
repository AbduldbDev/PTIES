import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import InputField from '@AdminUtils/components/form/input/InputField';
import MapComponent from '@AdminUtils/components/map/MapComponent';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

type TerminalProps = {
    id: number;
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Routes[];
};

type FormData = {
    name: string;
    sched: string;
    sched_desc: string;
    long: string;
    lat: string;
    routes: Routes[];
};

type Routes = {
    name: string;
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
    item: TerminalProps;
};

export default function GuideCreateForm() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        name: item.name,
        sched: item.sched,
        sched_desc: item.sched_desc,
        long: item.long,
        lat: item.lat,
        routes: item.routes || [],
    });

    const [lat, setLat] = useState<number>(Number(item.lat));
    const [lng, setLng] = useState<number>(Number(item.long));

    useEffect(() => {
        form.setData({
            ...form.data,
            lat: lat.toString(),
            long: lng.toString(),
        });
    }, [lat, lng]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'sched', 'sched_desc'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/terminal/update/${item.id}`, {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
                form.setData({
                    ...form.data,
                });
            },
        });
    };

    const handleMarkerMove = (newLat: number, newLng: number) => {
        setLat(newLat);
        setLng(newLng);
    };
    const [newRoutes, setnewRoutes] = useState<Routes>({
        name: '',
    });

    const addroutes = () => {
        if (newRoutes.name.trim()) {
            form.setData('routes', [...form.data.routes, newRoutes]);
            setnewRoutes({ name: '' });
        }
    };

    const updateRoutes = (index: number, updatedRoute: Routes) => {
        const updatedRoutesArr = [...form.data.routes];
        updatedRoutesArr[index] = updatedRoute;
        form.setData('routes', updatedRoutesArr);
    };

    const removeroutes = (index: number) => {
        const updatedroutes = form.data.routes.filter((_, i) => i !== index);
        form.setData('routes', updatedroutes);
    };

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Terminals Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <ComponentCard title="Edit Terminal">
                            <InputField
                                type="text"
                                label="Terminal Name"
                                name="name"
                                required={true}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                error={form.errors.name}
                                errorMessage="Please enter terminal name"
                                resetSignal={resetSignal}
                            />
                            <InputField
                                type="text"
                                label="Schedule Hours"
                                name="sched"
                                required={true}
                                value={form.data.sched}
                                onChange={(e) => form.setData('sched', e.target.value)}
                                error={form.errors.sched}
                                errorMessage="Please enter terminal schedule hours"
                                resetSignal={resetSignal}
                            />
                            <InputField
                                type="text"
                                label="Schedule Description"
                                name="sched_desc"
                                required={true}
                                value={form.data.sched_desc}
                                onChange={(e) => form.setData('sched_desc', e.target.value)}
                                error={form.errors.sched_desc}
                                errorMessage="Please enter terminal schedule hours"
                                resetSignal={resetSignal}
                            />
                            <div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <InputField
                                                label="Route Name"
                                                name="new_routes"
                                                value={newRoutes.name}
                                                onChange={(e) => setnewRoutes({ ...newRoutes, name: e.target.value })}
                                                required={false}
                                                error={form.errors.routes}
                                                errorMessage="Please enter route name"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            onClick={addroutes}
                                            disabled={form.processing || !newRoutes.name.trim()}
                                            className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                form.processing || !newRoutes.name.trim()
                                                    ? 'cursor-not-allowed bg-blue-400'
                                                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                            }`}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>

                                {form.data.routes.map((routes, index) => (
                                    <div className="" key={index}>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <InputField
                                                    label={`Route ${index + 1}`}
                                                    name={`routes_${index}`}
                                                    value={routes.name}
                                                    onChange={(e) => updateRoutes(index, { ...routes, name: e.target.value })}
                                                    required={true}
                                                    error={form.errors.routes}
                                                    errorMessage="Please enter route name"
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => removeroutes(index)}
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
                                    </div>
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={form.processing}
                                className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                    form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {form.processing ? 'Processing...' : 'Update Terminal'}
                            </button>
                        </ComponentCard>
                        <ComponentCard title="Pin Terminal Map">
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
