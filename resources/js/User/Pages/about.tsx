import { Head, Link, usePage } from '@inertiajs/react';

export default function About() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const { auth } = usePage().props as {
        auth?: {
            user?: {
                name: string;
            };
        };
    };

    return (
        <>
            <Head title="About" />
            <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
                <h1 className="text-4xl font-bold">Hello, Abdul!</h1>

                {auth?.user ? (
                    <>
                        <p>Welcome back, {auth.user.name}!</p>
                        <Link href="/dashboard" className="underline">
                            Go to Dashboard
                        </Link>
                        <form method="POST" action="/logout">
                            <input type="hidden" name="_token" value={csrfToken ?? ''} />
                            <button type="submit" className="underline">
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <p>You are not logged in.</p>
                        <Link href="/CreateProduct" className="underline">
                            Create
                        </Link>
                        <Link href="/login" className="underline">
                            Login
                        </Link>
                        <Link href="/register" className="underline">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </>
    );
}
