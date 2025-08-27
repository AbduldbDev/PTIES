import AnimatedBackground from '@/User/Utils/components/Layout/Background2';
import '@css/user.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { waitForAllAssets } from '@UserUtils/components/Layout/assetLoader';
import Loader from '@UserUtils/components/Layout/Loader';
import useThemeColors from '@UserUtils/components/Layout/ThemeColor';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export default function AuthPageLayout({ children }: PropsWithChildren) {
    const colorsLoaded = useThemeColors();
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const loaderTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!colorsLoaded) return;

        const checkAssets = async () => {
            await waitForAllAssets();
            if (typeof (AnimatedBackground as any).isLoaded === 'function') {
                await (AnimatedBackground as any).isLoaded();
            }
            setAssetsLoaded(true);
            loaderTimeout.current = setTimeout(() => {
                setShowLoader(false);
            }, 300);
        };

        if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => checkAssets());
        } else {
            setTimeout(checkAssets, 0);
        }

        return () => {
            if (loaderTimeout.current) {
                clearTimeout(loaderTimeout.current);
            }
        };
    }, [colorsLoaded]);

    return (
        <>
            {showLoader && <Loader />}

            <AnimatedBackground />
            <main className="user-body">{children}</main>
        </>
    );
}
