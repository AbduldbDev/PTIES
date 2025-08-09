import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
export default function UserLayout({ children }: PropsWithChildren) {
    const { auth } = usePage().props as { auth?: { user: { name: string } } };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="fixed top-0 right-0 left-0 z-9999 bg-white shadow">
                <div className="mx-auto flex max-w-7xl justify-between px-4 py-4">
                    <h1 className="text-xl font-bold">My App</h1>
                    <nav className="space-x-4">
                        <Link href="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                        <Link href="/CreateProduct" className="text-blue-600 hover:underline">
                            Create
                        </Link>
                        {auth?.user && <span className="text-sm text-gray-600">Welcome, {auth.user.name}</span>}
                    </nav>
                </div>
            </header>
            <main className="pt-20">{children}</main>
        </div>
    );
}
