import { SidebarProvider, useSidebar } from '@AdminUtils/context/SidebarContext';
import '@css/admin.css';
import { usePage } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';
import AppHeader from '../Admin/AppHeader';
import AppSidebar from '../Admin/AppSidebar';
import Backdrop from '../Admin/Backdrop';
export interface UserProfile {
    first_name: string;
    middle_name?: string;
    last_name?: string;
}

export interface AuthUser {
    email: string;
    image: string;
    user_type?: string;
    profile?: UserProfile;
}

export interface AuthData {
    user?: AuthUser;
}

export interface AuthData {
    user?: AuthUser;
}
interface LayoutContentProps extends PropsWithChildren {
    auth?: AuthData;
}

const LayoutContent: React.FC<LayoutContentProps> = ({ children, auth }) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    return (
        <div className="bg-whit min-h-screen bg-white transition-all duration-300 ease-in-out xl:flex dark:bg-[#101828]">
            <div>
                <AppSidebar auth={auth} />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
                } ${isMobileOpen ? 'ml-0' : ''}`}
            >
                <AppHeader auth={auth} />
                <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">{children}</div>
            </div>
        </div>
    );
};

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const { auth } = usePage().props as { auth?: AuthData };

    return (
        <SidebarProvider>
            <LayoutContent auth={auth}>{children}</LayoutContent>
        </SidebarProvider>
    );
};

export default AppLayout;
