import '@css/user.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import Navbar from './NavBar';

export default function UserLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-scree">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <section className="floating-texture"></section>
        </div>
    );
}
