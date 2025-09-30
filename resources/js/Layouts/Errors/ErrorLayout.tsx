import { ReactNode } from 'react';
import '@css/user.css'; // Import directly here
function ErrorLayout({ children }: { children: ReactNode }) {
    return (
        <div className="user-body">
            <main>{children}</main>
        </div>
    );
}

export default ErrorLayout;
