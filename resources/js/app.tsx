import AuthLayout from '@/Auth/Admin/AuthPageLayout';
import { AppWrapper } from '@AdminUtils/components/common/PageMeta';
import { ThemeProvider } from '@AdminUtils/context/ThemeContext';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ComponentType, JSX, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import '../css/app.css';
import AdminAuth from './Auth/Admin/AuthPageLayout';
import AdminLayout from './Layouts/Admin/AdminLayout';
import MainLayout from './Layouts/User/UserLayout';

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./**/*.tsx');
        const path = `./${name}.tsx`;

        if (!(path in pages)) {
            throw new Error(`Page not found: ${path}`);
        }

        const module = (await resolvePageComponent(path, pages)) as {
            default: ComponentType & {
                layout?: (page: JSX.Element) => JSX.Element;
            };
        };

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
                module.default.layout = (page) => <MainLayout>{page}</MainLayout>;
            } else if (name.startsWith('Auth/Admin/')) {
                module.default.layout = (page) => (
                    <ThemeProvider>
                        <AuthLayout>{page}</AuthLayout>
                    </ThemeProvider>
                );
            } else {
                module.default.layout = (page) => <AdminAuth>{page}</AdminAuth>;
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
