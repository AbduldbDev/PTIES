import GridShape from '@/Admin/Utils/components/common/GridShape';
import ThemeTogglerTwo from '@/Admin/Utils/components/common/ThemeTogglerTwo';
import useThemeColors from '@UserUtils/components/Layout/ThemeColor';
import React from 'react';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const themeColors = useThemeColors();
    return (
        <div className="relative z-1 bg-white p-6 sm:p-0 dark:bg-gray-900">
            <div className="relative flex h-screen w-full flex-col justify-center sm:p-0 lg:flex-row dark:bg-gray-900">
                {children}

                <div className="hidden h-full w-full items-center bg-primary lg:grid lg:w-1/2 dark:bg-white/5">
                    <div className="relative z-1 flex items-center justify-center">
                        <GridShape />
                        <div className="flex max-w-md flex-col items-center gap-6 p-8 text-center">
                            <img className="h-50 w-50" src="/User/Layout/Logo.png" alt="Company Logo" />
                            <h2 className="text-2xl font-bold text-white">PTIES Employee Portal Access</h2>
                            <div className="space-y-2 text-white/80">
                                <p className="flex items-center gap-2">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Welcome back travel experts!
                                </p>
                            </div>
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
