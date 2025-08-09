import { useForm } from '@inertiajs/react';
import React from 'react';

type Props = {
    user: {
        name: string;
        email: string;
    } | null;
};

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="mx-auto mt-20 max-w-md">
            <h1 className="mb-6 text-2xl font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Name</label>
                    <input type="text" className="w-full rounded border p-2" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" className="w-full rounded border p-2" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                    {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="w-full rounded border p-2"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="w-full rounded border p-2"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                </div>

                <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" disabled={processing}>
                    Register
                </button>
            </form>
        </div>
    );
}
