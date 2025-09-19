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
import MainLayout from './Layouts/User/UserLayout';

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./**/*.tsx');
        const path = `./${name}.tsx`;

        if (!(path in pages)) {
            const module = (await resolvePageComponent('./Error/NotFound.tsx', pages)) as {
                default: ComponentType & { layout?: (page: JSX.Element) => JSX.Element };
            };

            return {
                ...module,
                default: {
                    ...module.default,
                    layout: (page: JSX.Element) => (
                        <StrictMode>
                            <AppWrapper>
                                <MainLayout>{page}</MainLayout>
                            </AppWrapper>
                        </StrictMode>
                    ),
                },
            };
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
