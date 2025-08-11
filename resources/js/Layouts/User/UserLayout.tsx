import '@css/user.css';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Navbar from './NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function UserLayout({ children }: PropsWithChildren) {
   

    return (
        <div className="min-h-scree">
  
            <Navbar />
            <main className="pt-20">{children}</main>
            <section className='floating-texture'></section>

        </div>
    );
}
