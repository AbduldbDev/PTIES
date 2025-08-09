import GridShape from '@/Admin/Utils/components/common/GridShape';
import ThemeTogglerTwo from '@/Admin/Utils/components/common/ThemeTogglerTwo';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-1 bg-white p-6 sm:p-0 dark:bg-gray-900">
            <div className="relative flex h-screen w-full flex-col justify-center sm:p-0 lg:flex-row dark:bg-gray-900">
                {children}

                {/* Right Side Image/Shape */}
                <div className="bg-brand-950 hidden h-full w-full items-center lg:grid lg:w-1/2 dark:bg-white/5">
                    <div className="relative z-1 flex items-center justify-center">
                        <GridShape />
                        <div className="flex max-w-xs flex-col items-center">
                            <img width={231} height={48} src="" alt="Paklil Logo" />
                        </div>
                    </div>
                </div>

                {/* Floating Theme Toggler */}
                <div className="fixed right-6 bottom-6 z-50 hidden sm:block">
                    <ThemeTogglerTwo />
                </div>
            </div>
        </div>
    );
}
