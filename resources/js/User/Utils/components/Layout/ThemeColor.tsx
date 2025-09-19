import { useEffect, useState } from 'react';

interface ThemeColors {
    primary?: string;
    secondary?: string;
    accent?: string;
    updatedAt?: string;
}

export default function useThemeColors(): boolean {
    const [colorsLoaded, setColorsLoaded] = useState(() => {
        const cached = localStorage.getItem('themeColors');
        if (cached) {
            try {
                const data: ThemeColors = JSON.parse(cached);
                if (data?.primary) document.documentElement.style.setProperty('--primary', data.primary);
                if (data?.secondary) document.documentElement.style.setProperty('--secondary', data.secondary);
                if (data?.accent) document.documentElement.style.setProperty('--accent', data.accent);
                return true;
            } catch (err) {
                console.error('Failed to parse cached theme colors:', err);
                return false;
            }
        }
        return false;
    });

    useEffect(() => {
        async function fetchColors() {
            try {
                const cached = localStorage.getItem('themeColors');
                let data: ThemeColors | null = cached ? JSON.parse(cached) : null;

                const res = await fetch('/colors');
                const serverData: ThemeColors = await res.json();

                const needUpdate = !data || (serverData.updatedAt && serverData.updatedAt !== data.updatedAt);

                if (needUpdate) {
                    localStorage.setItem('themeColors', JSON.stringify(serverData));
                    if (serverData?.primary) document.documentElement.style.setProperty('--primary', serverData.primary);
                    if (serverData?.secondary) document.documentElement.style.setProperty('--secondary', serverData.secondary);
                    if (serverData?.accent) document.documentElement.style.setProperty('--accent', serverData.accent);
                }

                setColorsLoaded(true);
            } catch (err) {
                console.error('Failed to fetch theme colors:', err);
                setColorsLoaded(true); 
            }
        }
        fetchColors();
    }, []);

    return colorsLoaded;
}
