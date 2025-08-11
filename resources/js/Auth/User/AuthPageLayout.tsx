import '@fortawesome/fontawesome-free/css/all.min.css';
import { PropsWithChildren } from 'react';

export default function AuthPageLayout({ children }: PropsWithChildren) {
    return <main>{children}</main>;
}
