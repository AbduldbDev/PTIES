'use client';

import type React from 'react';
import { createContext, useContext, useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
    theme: Theme;
    resolvedTheme: 'light' | 'dark';
    setThemeMode: (mode: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // user-selected theme
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as Theme) || 'system';
        }
        return 'system';
    });

    // actual theme applied
    const getResolvedTheme = (): 'light' | 'dark' => {
        if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return theme;
    };

    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => (typeof window !== 'undefined' ? getResolvedTheme() : 'light'));

    // apply theme class
    useLayoutEffect(() => {
        const actual = getResolvedTheme();
        setResolvedTheme(actual);

        if (actual === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');

        localStorage.setItem('theme', theme);
    }, [theme]);

    // auto-sync system preference if in 'system' mode
    useLayoutEffect(() => {
        if (theme !== 'system') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => setResolvedTheme(getResolvedTheme());

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [theme]);

    const setThemeMode = (mode: Theme) => setTheme(mode);

    const toggleTheme = () => {
        if (resolvedTheme === 'light') setTheme('dark');
        else setTheme('light');
    };

    return <ThemeContext.Provider value={{ theme, resolvedTheme, setThemeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
