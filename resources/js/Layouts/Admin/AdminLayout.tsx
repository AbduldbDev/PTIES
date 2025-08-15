import { SidebarProvider, useSidebar } from '@AdminUtils/context/SidebarContext';

import { usePage } from '@inertiajs/react';
import React, { PropsWithChildren, useEffect } from 'react';
import AppHeader from '../Admin/AppHeader';
import AppSidebar from '../Admin/AppSidebar';
import Backdrop from '../Admin/Backdrop';

interface LayoutContentProps extends PropsWithChildren {
    auth?: {
        user: {
            name: string;
        };
    };
}

const LayoutContent: React.FC<LayoutContentProps> = ({ children, auth }) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    useEffect(() => {
        import('@css/admin.css');
    }, []);
    return (
        <div className="bg-whit min-h-screen bg-white transition-all duration-300 ease-in-out xl:flex dark:bg-[#101828]">
            <div>
                <AppSidebar />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
                } ${isMobileOpen ? 'ml-0' : ''}`}
            >
                <AppHeader />
                <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">{children}</div>
            </div>
        </div>
    );
};

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const { auth } = usePage().props as { auth?: { user: { name: string } } };

    return (
        <SidebarProvider>
            <LayoutContent auth={auth}>{children}</LayoutContent>
        </SidebarProvider>
    );
};

export default AppLayout;
