import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

type RewardsProps = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    status: string;
};

type Props = {
    item: RewardsProps;
};

type FormData = {
    reward_id: number;
};

export default function RewardsCard({ item }: Props) {
    const { post, processing, reset, clearErrors } = useForm<FormData>({
        reward_id: item.id,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        post('/reward/redeem', {
            forceFormData: true,
            onSuccess: () => {
                reset();
                clearErrors();
            },
        });
    };

    return (
        <div className="group relative h-full">
            <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
                <div className="relative pt-[100%]">
                    <img src={`/storage/${item.image}`} alt="Wooden handicrafts" className="absolute inset-0 h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2 py-1 text-xs text-white capitalize">
                        {item.category}
                    </span>
                    {item.status == '0' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-red-700/50 px-2 py-1 text-xs font-medium text-white">
                                Not Available
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex flex-1 flex-col p-3">
                    <h3 className="text-dark mb-1 line-clamp-1 font-semibold">{item.name}</h3>
                    <div className="flex-1">
                        <h1 className="text-sm text-gray-500">{item.description}</h1>
                        <span className="mt-2 flex items-center text-sm text-gray-600">
                            <img src="/User/Layout/Pakilpoints.png" className="h-[30px] w-[30px]" alt="" />
                            <span>{item.price} pts</span>
                        </span>
                    </div>
                    <div className="text-end">
                        <button
                            onClick={handleSubmit}
                            disabled={processing || item.status == '0'}
                            type="button"
                            className={`mt-2 rounded-full border px-5 py-1 text-sm font-medium ${
                                item.status == '0'
                                    ? 'cursor-not-allowed border-gray-400 bg-gray-400 text-gray-200'
                                    : 'border-primary bg-primary text-white hover:border-primary hover:bg-transparent hover:text-primary'
                            }`}
                        >
                            {processing ? 'Processing...' : 'Redeem'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
