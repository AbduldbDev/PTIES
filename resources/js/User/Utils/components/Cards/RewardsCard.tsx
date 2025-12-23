import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

type RewardsProps = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    status: number;
};

type Props = {
    item: RewardsProps;
    index: number;
};

type FormData = {
    reward_id: number;
};

export default function RewardsCard({ item, index }: Props) {
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

    const isAvailable = item.status != 0;

    return (
        <div className="group relative h-full" data-aos="fade-up" data-aos-delay={100 + index * 50}>
            <div className="absolute -inset-0.5 rounded-lg bg-primary/10 opacity-0 transition duration-300 group-hover:opacity-70" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-200 hover:shadow-md">
                {/* Image section */}
                <div className="relative overflow-hidden pt-[75%]">
                    <img src={`/storage/${item.image}`} alt={item.name} className="absolute inset-0 h-full w-full object-cover" />

                    {/* Category badge */}
                    <span className="absolute top-2 left-2 z-10 rounded-full bg-primary px-2 py-1 text-xs text-white capitalize">
                        {item.category}
                    </span>

                    {/* Unavailable overlay */}
                    {!isAvailable && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <span className="rounded bg-black/70 px-3 py-1.5 text-xs font-medium text-white">Not Available</span>
                        </div>
                    )}
                </div>

                {/* Content section */}
                <div className="relative flex flex-1 flex-col p-3">
                    {/* Product name */}
                    <h3 className="text-dark mb-1.5 line-clamp-1 text-sm font-semibold">{item.name}</h3>

                    {/* Description */}
                    <div className="mb-3 flex-1">
                        <p className="line-clamp-2 text-xs leading-relaxed text-gray-600">{item.description}</p>
                    </div>

                    {/* Price section */}
                    <div className="mb-3 flex items-center justify-between border-t border-gray-100 pt-3">
                        <div className="flex items-center">
                            <img src="/User/Layout/Pakilpoints.png" className="mr-1.5 h-5 w-5" alt="Pakil Points" />
                            <div>
                                <span className="text-base font-bold text-gray-800">{item.price.toLocaleString()}</span>
                                <span className="ml-1 text-xs text-gray-500">pts</span>
                            </div>
                        </div>

                        {/* Stock indicator */}
                        <div className="flex items-center">
                            <div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className={`text-xs ${isAvailable ? 'text-green-600' : 'text-red-500'}`}>
                                {isAvailable ? 'In Stock' : 'Out Of Stock'}
                            </span>
                        </div>
                    </div>

                    {/* Redeem button */}
                    <button
                        onClick={handleSubmit}
                        disabled={processing || !isAvailable}
                        type="button"
                        className={`h-9 w-full rounded-md text-xs font-medium transition duration-200 ${
                            isAvailable
                                ? processing
                                    ? 'bg-gray-400 text-white'
                                    : 'bg-primary text-white hover:bg-primary/90'
                                : 'cursor-not-allowed bg-gray-100 text-gray-400'
                        }`}
                    >
                        {processing ? 'Processing...' : isAvailable ? 'Redeem Now' : 'Unavailable'}
                    </button>
                </div>
            </div>
        </div>
    );
}
