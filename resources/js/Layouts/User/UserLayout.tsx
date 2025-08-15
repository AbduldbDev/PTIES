import '@css/user.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { waitForAllAssets } from '@UserUtils/components/Layout/assetLoader';
import AnimatedBackground from '@UserUtils/components/Layout/Background';
import CookieConsentBanner from '@UserUtils/components/Layout/Cookies';
import Loader from '@UserUtils/components/Layout/Loader';
import useThemeColors from '@UserUtils/components/Layout/ThemeColor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Footer } from './Footer';
import Navbar from './NavBar';

export default function UserLayout({ children }: PropsWithChildren) {
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

    useEffect(() => {
        if (!showLoader) {
            AOS.init({
                duration: 1000,
            });
            AOS.refresh();
        }
    }, [showLoader]);

    return (
        <>
            {showLoader && <Loader />}

            <div className="min-h-screen" style={{ opacity: assetsLoaded ? 1 : 0 }}>
                <Navbar />
                <AnimatedBackground />
                <main>{children}</main>
                <Footer />
                <section className="floating-texture"></section>
                <CookieConsentBanner />
            </div>
        </>
    );
}
