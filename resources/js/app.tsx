import { AppWrapper } from '@AdminUtils/components/common/PageMeta';
import { ThemeProvider } from '@AdminUtils/context/ThemeContext';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ComponentType, JSX, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import '../css/app.css';

import AdminAuthLayout from './Auth/Admin/AuthPageLayout';
import UserAuthLayout from './Auth/User/AuthPageLayout';
import AdminLayout from './Layouts/Admin/AdminLayout';
import ErrorLayout from './Layouts/Errors/ErrorLayout';
import MainLayout from './Layouts/User/UserLayout';

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./**/*.tsx');
        const path = `./${name}.tsx`;

        let module: {
            default: ComponentType & { layout?: (page: JSX.Element) => JSX.Element };
        };

        try {
            if (!(path in pages)) {
                throw new Error(`Page not found: ${name}`);
            }
            module = (await resolvePageComponent(path, pages)) as typeof module;
        } catch {
            module = (await resolvePageComponent('./Errors/Pages/ErrorPage.tsx', pages)) as typeof module;
            module.default.layout = (page) => (
                <StrictMode>
                    <AppWrapper>
                        <ErrorLayout>{page}</ErrorLayout>
                    </AppWrapper>
                </StrictMode>
            );
            return module;
        }

        if (!module.default.layout) {
            if (name.startsWith('Admin/')) {
                module.default.layout = (page) => (
                    <StrictMode>
                        <ThemeProvider>
                            <AppWrapper>
                                <AdminLayout>{page}</AdminLayout>
                            </AppWrapper>
                        </ThemeProvider>
                    </StrictMode>
                );
            } else if (name.startsWith('User/')) {
                module.default.layout = (page) => (
                    <StrictMode>
                        <AppWrapper>
                            <MainLayout>{page}</MainLayout>
                        </AppWrapper>
                    </StrictMode>
                );
            } else if (name.startsWith('Auth/Admin/')) {
                module.default.layout = (page) => (
                    <ThemeProvider>
                        <AdminAuthLayout>{page}</AdminAuthLayout>
                    </ThemeProvider>
                );
            } else if (name.startsWith('Auth/User/')) {
                module.default.layout = (page) => <UserAuthLayout> {page}</UserAuthLayout>;
            } else {
                module.default.layout = (page) => <MainLayout>{page}</MainLayout>;
            }
        }

        return module;
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <HelmetProvider>
                <App {...props} />
            </HelmetProvider>,
        );
    },
});
