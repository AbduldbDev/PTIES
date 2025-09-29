import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import FileInput from '@AdminUtils/components/form/input/FileInput';
import InputField from '@AdminUtils/components/form/input/InputField';
import Textarea from '@AdminUtils/components/form/input/TextArea';
import SelectField from '@AdminUtils/components/form/Select';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

type OfficialsProps = {
    id: number;
    name: string;
    position: string;
    customPosition: string;
    term: string;
    biography: string;
    achievements: string;
    education: Education[];
    facebook: string;
    contact: string;
    email: string;
    image: File | null;
};

type FormData = {
    name: string;
    position: string;
    customPosition: string;
    term: string;
    biography: string;
    achievements: string;
    education: Education[];
    facebook: string;
    contact: string;
    email: string;
    image: File | null;
};

type Education = {
    name: string;
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
    item: OfficialsProps;
};

export default function GuideCreateForm() {
    const { flash, errors, item } = usePage<PageProps>().props;
    const [resetSignal, setResetSignal] = useState(0);
    const form = useForm<FormData>({
        name: item.name || '',
        position: item.position || '',
        customPosition: item.position || '',
        term: item.term || '',
        biography: item.biography || '',
        achievements: item.achievements || '',
        education: item.education || [],
        facebook: item.facebook || '',
        contact: item.contact || '',
        email: item.email || '',
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const requiredFields: (keyof FormData)[] = ['name', 'position', 'term'];
        const emptyFields = requiredFields.filter((field) => !form.data[field]);

        if (emptyFields.length > 0) {
            emptyFields.forEach((field) => {
                form.setError(field, `This field is required`);
            });
            return;
        }

        form.post(`/Admin/officials/update/${item.id}`, {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                form.clearErrors();
                setResetSignal(Date.now());
            },
        });
    };

    const [newEducation, setnewEducation] = useState<Education>({
        name: '',
        desc: '',
    });

    const addEducation = () => {
        if (newEducation.name.trim()) {
            form.setData('education', [...form.data.education, newEducation]);
            setnewEducation({ name: '', desc: '' });
        }
    };

    const updateEducation = (index: number, updatedRoute: Education) => {
        const updatedEducationArr = [...form.data.education];
        updatedEducationArr[index] = updatedRoute;
        form.setData('education', updatedEducationArr);
    };

    const removeEducation = (index: number) => {
        const updatedEducation = form.data.education.filter((_, i) => i !== index);
        form.setData('education', updatedEducation);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageField: keyof FormData) => {
        if (e.target.files && e.target.files[0]) {
            form.setData(imageField, e.target.files[0]);
        }
    };

    const predefinedPositions = [
        { value: 'Municipal Mayor', label: 'Municipal Mayor' },
        { value: 'Municipal Vice Mayor', label: 'Municipal Vice Mayor' },
        { value: 'SB Member', label: 'SB Member' },
    ];

    const allOptions = [...predefinedPositions, { value: 'other', label: 'Other' }];
    const isPredefined = predefinedPositions.some((pos) => pos.value === form.data.position);
    const selectedValue = isPredefined ? form.data.position : 'other';
    const customValue = isPredefined ? '' : form.data.position;
    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                <PageBreadcrumb pageTitle="Key Officials Management" />

                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard title="Edit Official">
                                <InputField
                                    type="text"
                                    label="Name"
                                    name="name"
                                    required={true}
                                    value={form.data.name}
                                    onChange={(e) => form.setData('name', e.target.value)}
                                    error={form.errors.name}
                                    errorMessage="Please enter official name"
                                    resetSignal={resetSignal}
                                />

                                <SelectField
                                    label="Position"
                                    name="position"
                                    options={allOptions}
                                    required={true}
                                    value={selectedValue}
                                    onChange={(e) => form.setData('position', e.target.value)}
                                    error={form.errors.position}
                                    errorMessage="Please select a valid position"
                                />

                                {selectedValue === 'other' && (
                                    <InputField
                                        type="text"
                                        label="Custom Position"
                                        name="customPosition"
                                        required={true}
                                        value={form.data.customPosition ?? customValue}
                                        onChange={(e) => form.setData('customPosition', e.target.value)}
                                        error={form.errors.customPosition}
                                        errorMessage="Please enter official position"
                                        resetSignal={resetSignal}
                                    />
                                )}

                                <InputField
                                    type="text"
                                    label="Term"
                                    name="sched"
                                    required={true}
                                    value={form.data.term}
                                    onChange={(e) => form.setData('term', e.target.value)}
                                    error={form.errors.term}
                                    errorMessage="Please enter official term"
                                    resetSignal={resetSignal}
                                />

                                <InputField
                                    type="text"
                                    label="Facebook"
                                    name="facebook"
                                    required={false}
                                    value={form.data.facebook}
                                    onChange={(e) => form.setData('facebook', e.target.value)}
                                    resetSignal={resetSignal}
                                />
                                <InputField
                                    type="text"
                                    label="Contact"
                                    name="contact"
                                    required={false}
                                    value={form.data.contact}
                                    onChange={(e) => form.setData('contact', e.target.value)}
                                    resetSignal={resetSignal}
                                />

                                <InputField
                                    type="text"
                                    label="Email"
                                    name="email"
                                    required={false}
                                    value={form.data.email}
                                    onChange={(e) => form.setData('email', e.target.value)}
                                    resetSignal={resetSignal}
                                />
                                <FileInput
                                    label="Image"
                                    name="image"
                                    onChange={(e) => handleImageChange(e, 'image')}
                                    error={form.errors.image}
                                    errorMessage="Please select a valid image"
                                    resetSignal={resetSignal}
                                />
                            </ComponentCard>
                        </div>

                        <div>
                            <ComponentCard title="Educations Section">
                                <div>
                                    <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                                        <h3 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">Add New Educations</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <InputField
                                                    label="Education Text"
                                                    name="new_Education"
                                                    value={newEducation.name}
                                                    onChange={(e) => setnewEducation({ ...newEducation, name: e.target.value })}
                                                    required={true}
                                                    error={form.errors.education}
                                                    errorMessage="Please enter education name"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={addEducation}
                                                disabled={form.processing || !newEducation.name.trim() || !newEducation.desc.trim()}
                                                className={`rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                                                    form.processing || !newEducation.name.trim()
                                                        ? 'cursor-not-allowed bg-blue-400'
                                                        : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                                }`}
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        <Textarea
                                            rows={3}
                                            label="Description"
                                            name="description"
                                            value={newEducation.desc}
                                            required={true}
                                            onChange={(e) => setnewEducation({ ...newEducation, desc: e.target.value })}
                                            error={form.errors.education}
                                            errorMessage="Please enter education details"
                                        />
                                    </div>
                                    <div className="mt-6 rounded-lg">
                                        <div className="mb-4 flex items-center justify-between">
                                            <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                                                Current Educations
                                                {form.data.education.length > 0 && (
                                                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                                        (Items: {form.data.education.length})
                                                    </span>
                                                )}
                                            </h4>
                                        </div>

                                        {form.data.education.length === 0 ? (
                                            <div className="rounded-lg border border-dashed border-gray-300 py-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                                <i className="fa-solid fa-list-check mb-2 block text-3xl"></i>
                                                <p>No Educations added yet</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {form.data.education.map((Education, index) => (
                                                    <div
                                                        key={index}
                                                        className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex-1">
                                                                <InputField
                                                                    label={`Education ${index + 1}`}
                                                                    name={`Education_${index}`}
                                                                    value={Education.name}
                                                                    onChange={(e) => updateEducation(index, { ...Education, name: e.target.value })}
                                                                    required={true}
                                                                    errorMessage="Please enter Education text"
                                                                />
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() => removeEducation(index)}
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
                                                        <Textarea
                                                            rows={3}
                                                            label="Description"
                                                            name="Description"
                                                            value={Education.desc}
                                                            onChange={(e) => updateEducation(index, { ...Education, desc: e.target.value })}
                                                            placeholder="Enter detailed description of this responsibility"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ComponentCard>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
                        <div>
                            <ComponentCard title="Biography Section">
                                <Textarea
                                    label="Biography (Seperate Using New Line)"
                                    name="biography"
                                    value={form.data.biography}
                                    onChange={(e) => form.setData('biography', e.target.value)}
                                    rows={20}
                                />
                            </ComponentCard>
                        </div>

                        <div>
                            <ComponentCard title="Achievements Section">
                                <Textarea
                                    label="Achievements (Seperate Using New Line)"
                                    name="achievements"
                                    value={form.data.achievements}
                                    onChange={(e) => form.setData('achievements', e.target.value)}
                                    rows={20}
                                />
                            </ComponentCard>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={form.processing}
                        className={`mt-10 w-full rounded-lg px-4 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none ${
                            form.processing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                        }`}
                    >
                        {form.processing ? 'Processing...' : 'Update Official'}
                    </button>
                </form>
            </AppWrapper>
        </>
    );
}
