import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface PageMetaProps {
    title: string;
    description: string;
    children?: React.ReactNode; // Optional children
}

export const PageMeta = ({ title, description, children }: PageMetaProps) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* Additional default meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        {children}
    </>
);

interface AppWrapperProps {
    children: React.ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => (
    <HelmetProvider>
        {/* Default meta tags that apply to all pages */}
        <Helmet>
            <meta name="theme-color" content="#ffffff" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        {children}
    </HelmetProvider>
);
