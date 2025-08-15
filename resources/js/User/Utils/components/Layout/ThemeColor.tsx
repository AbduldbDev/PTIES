import { useEffect, useState } from 'react';

interface ThemeColors {
    primary?: string;
    secondary?: string;
    accent?: string;
}

export default function useThemeColors(): boolean {
    const [colorsLoaded, setColorsLoaded] = useState(false);

    useEffect(() => {
        async function fetchColors() {
            try {
                const res = await fetch('/colors');
                const data: ThemeColors = await res.json();

                if (data.primary) {
                    document.documentElement.style.setProperty('--primary', data.primary);
                }
                if (data.secondary) {
                    document.documentElement.style.setProperty('--secondary', data.secondary);
                }
                if (data.accent) {
                    document.documentElement.style.setProperty('--accent', data.accent);
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
