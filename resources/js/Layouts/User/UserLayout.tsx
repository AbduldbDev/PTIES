import AnimatedBackground from '@/User/Utils/components/Layout/Background';
import '@css/user.css'; // Import directly here
import '@fortawesome/fontawesome-free/css/all.min.css';
import { waitForAllAssets } from '@UserUtils/components/Layout/assetLoader';
import Loader from '@UserUtils/components/Layout/Loader';
import useThemeColors from '@UserUtils/components/Layout/ThemeColor';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Footer } from './Footer';
import Navbar from './NavBar';
import PrivacyModal from './PrivacyModal';

export default function UserLayout({ children }: PropsWithChildren) {
    const colorsLoaded = useThemeColors();
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const loaderTimeout = useRef<NodeJS.Timeout | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        if (!colorsLoaded) return;

        const checkAssets = async () => {
            try {
                await waitForAllAssets();
                if (typeof (AnimatedBackground as any).isLoaded === 'function') {
                    await (AnimatedBackground as any).isLoaded();
                }
                setAssetsLoaded(true);
                loaderTimeout.current = setTimeout(() => {
                    setShowLoader(false);
                }, 100);
            } catch (error) {
                console.error('Asset loading error:', error);
                setAssetsLoaded(true);
                setShowLoader(false);
            }
        };

        checkAssets();

        return () => {
            if (loaderTimeout.current) {
                clearTimeout(loaderTimeout.current);
            }
        };
    }, [colorsLoaded]);

    Aos.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        offset: 0,
    });

    return (
        <>
            {showLoader && <Loader />}

            <div
                className="user-body min-h-screen"
                style={{
                    opacity: assetsLoaded ? 1 : 0.99,
                    transition: 'opacity 0.2s ease-in',
                    position: 'relative',
                    zIndex: 1,
                    minHeight: '100vh',
                }}
            >
                <Navbar />
                <AnimatedBackground />
                <main style={{ position: 'relative', zIndex: 2 }}>{children}</main>
                <Footer />
                <section className="floating-texture"></section>
                {/* <CookieConsentBanner /> */}
                {location.pathname === '/' && <PrivacyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </div>
        </>
    );
}
