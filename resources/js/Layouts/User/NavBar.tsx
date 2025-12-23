import { router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { auth } = usePage().props as {
        auth?: {
            user: {
                email: string;
                user_type: string;
                avatar?: string;
                pakil_points: number;
                profile: any;
                is_seller?: boolean;
            };
        };
    };

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDate(
                now.toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
            );
            setCurrentTime(
                now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                }),
            );
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleDropdownEnter = (menu: string) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
            dropdownTimeoutRef.current = null;
        }
        setActiveDropdown(menu);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300);
    };

    const handleDropdownClick = (menu: string) => {
        if (activeDropdown === menu) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(menu);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            setMobileSubMenuOpen(null);
        }
    };

    const toggleMobileSubMenu = (menu: string) => {
        setMobileSubMenuOpen(mobileSubMenuOpen === menu ? null : menu);
    };

    const getUserMenuItems = () => {
        const baseItems = [{ label: 'Profile', href: '/profile', icon: 'fa-regular fa-user' }];

        if (auth?.user?.is_seller) {
            baseItems.push({
                label: 'Seller Dashboard',
                href: '/seller/dashboard',
                icon: 'fa-solid fa-store',
            });
        }

        return baseItems;
    };

    const dropdownItems = {
        about: [
            { label: 'About Us', href: '/about/tourism#' },
            { label: 'Mission & Vision', href: '/about/tourism#mission&vision' },
            { label: 'Department Structure', href: '/about/tourism#department_structure' },
            { label: 'Citizen Charter', href: '/about/tourism#citizen_charter' },
            { label: 'Key Officials', href: '/about/officials' },
            { label: 'Past Mayors', href: '/about/past-mayor' },
        ],
        explore: [
            { label: 'About Pakil', href: '/explore/about' },
            { label: 'Attractions', href: '/explore/attractions' },
            { label: 'Personalities', href: '/explore/local-personalities' },
            { label: 'Local Products', href: '/explore/local-products' },
            { label: 'Cultural Properties', href: '/explore/cultural-properties' },
            { label: 'Terminals', href: '/explore/terminals' },
            { label: 'Guide', href: '/explore/guide' },
        ],
        Contact: [
            { label: 'Contact Us', href: '/contact#' },
            { label: 'Emergency Hotlines', href: '/contact#hotlines' },
            { label: 'Tour Guides', href: '/contact#tourguides' },
        ],
        events: [
            { label: 'Events', href: '/events' },
            { label: 'Social Wall', href: '/events/socialwall' },
        ],
        rewards: [
            { label: 'Guide', href: '/pakil-guide' },
            { label: 'Rewards', href: '/reward-shop' },
            { label: 'QR Scanner', href: '/explore/scanner' },
        ],
        market: [
            { label: 'Local Market', href: '/localmarket' },
            { label: 'Become a Pakil Seller', href: '/seller/terms' },
        ],
        user: getUserMenuItems(),
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-40">
            <div className="flex items-center justify-between bg-primary px-4 py-2 text-sm text-white sm:text-[11px]">
                <div className="flex items-center space-x-2 text-[11px] sm:text-sm">
                    <span className="sm" id="current-date">
                        {currentDate}
                    </span>
                    <span id="current-time">{currentTime}</span>
                </div>
                <div className="flex items-center space-x-4">
                    {/* <div className="relative inline-block">
                        <select className="cursor-pointer appearance-none rounded-md border-0 bg-primary pr-8 pl-3 text-xs text-white transition-all hover:bg-white/20 focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none sm:text-sm">
                            <option value="en" className="bg-white text-gray-900">
                                EN
                            </option>
                            <option value="fil" className="bg-white text-gray-900">
                                FIL
                            </option>
                        </select>
                        <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 transform text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div> */}
                    <div className="flex space-x-2">
                        <a href="https://www.facebook.com/pakilturismo" target="_blank" className="hover:text-blue-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <header className="bg-white/80 shadow-sm backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between py-2">
                        <a href="/" className="flex items-center space-x-2">
                            <img src="/User/Layout/Seal.png" alt="Seal" className="h-[50px] w-[50px]" />
                            <img src="/User/Layout/Logo.png" alt="Logo" className="h-[55px] w-[55px]" />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-1 lg:flex">
                            <div className="flex items-center space-x-1">
                                <a href="/" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Home
                                </a>

                                {/* About Dropdown */}
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('about')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('about')}
                                    >
                                        About
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'about' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('about')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.about.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Explore Dropdown */}
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('explore')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('explore')}
                                    >
                                        Explore
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'explore' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('explore')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.explore.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Dropdown */}
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('Contact')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('Contact')}
                                    >
                                        Contact
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'Contact' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('Contact')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.Contact.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Events Dropdown */}
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('events')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('events')}
                                    >
                                        Events
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'events' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('events')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.events.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Rewards Dropdown */}
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('rewards')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('rewards')}
                                    >
                                        Rewards
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'rewards' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('rewards')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.rewards.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => handleDropdownEnter('market')}
                                        onMouseLeave={handleDropdownLeave}
                                        onClick={() => handleDropdownClick('market')}
                                    >
                                        Market
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'market' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => handleDropdownEnter('market')}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownItems.market.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="block rounded-md px-4 py-2 text-primary transition-colors hover:bg-primary/10 hover:text-primary/90"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* User section */}
                            <div className="ml-6 flex items-center space-x-3">
                                {auth?.user && auth.user.user_type === 'user' ? (
                                    <>
                                        <div className="dropdown relative">
                                            <div className="flex items-center space-x-2">
                                                <a
                                                    href="#"
                                                    className="nav-link group flex items-center px-4 py-3 font-medium text-primary hover:text-primary/60"
                                                    onMouseEnter={() => handleDropdownEnter('user')}
                                                    onMouseLeave={handleDropdownLeave}
                                                    onClick={() => handleDropdownClick('user')}
                                                >
                                                    <div className="relative">
                                                        <i className="fa-regular fa-user text-lg"></i>
                                                    </div>
                                                </a>
                                                <div className="flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-800">
                                                    <img
                                                        src="/User/Layout/Pakilpoints.png"
                                                        alt="Points"
                                                        className="mr-1 h-6 w-6"
                                                        onError={(e) => {
                                                            e.currentTarget.src =
                                                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23eab308'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-1.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm-3.5-7v1h7v-1h-7z'/%3E%3C/svg%3E";
                                                        }}
                                                    />
                                                    {(auth?.user?.pakil_points ?? 0) === 0 ? 0 : (auth?.user?.pakil_points ?? 0).toLocaleString()}{' '}
                                                    points
                                                </div>
                                            </div>

                                            <div
                                                className={`ring-opacity-5 absolute right-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${activeDropdown === 'user' ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                                onMouseEnter={() => handleDropdownEnter('user')}
                                                onMouseLeave={handleDropdownLeave}
                                            >
                                                <div className="border-b border-primary/10 px-4 py-3">
                                                    <p className="text-md font-medium text-gray-900">
                                                        Hello, {auth?.user?.profile?.first_name?.split(' ')[0]}
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <img
                                                            src="/User/Layout/Pakilpoints.png"
                                                            alt="Points"
                                                            className="mr-1 h-6 w-6"
                                                            onError={(e) => {
                                                                e.currentTarget.src =
                                                                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23eab308'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-1.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm-3.5-7v1h7v-1h-7z'/%3E%3C/svg%3E";
                                                            }}
                                                        />
                                                        {(auth?.user?.pakil_points ?? 0) === 0 ? 0 : (auth?.user?.pakil_points ?? 0).toLocaleString()}{' '}
                                                        points
                                                    </p>
                                                </div>

                                                <div className="py-1">
                                                    {dropdownItems.user.map((item, index) => (
                                                        <a
                                                            key={index}
                                                            href={item.href}
                                                            className="flex items-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <i className={`${item.icon} mr-3 w-5 text-center`}></i>
                                                            {item.label}
                                                        </a>
                                                    ))}
                                                </div>

                                                <div className="border-t border-primary/10 py-1">
                                                    <button
                                                        onClick={() => router.post('/logout')}
                                                        type="submit"
                                                        className="flex w-full items-center rounded-md px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        <i className="fa-solid fa-arrow-right-from-bracket mr-3 w-5 text-center"></i>
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href="/Login"
                                        className="transform rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-primary/70"
                                    >
                                        Login <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button id="menu-toggle" className="text-gray-600 hover:text-primary/60 focus:outline-none" onClick={toggleMobileMenu}>
                                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </nav>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} w-full border-t border-primary/20 bg-white transition-all duration-300 ease-in-out`}
                >
                    <div className="max-h-[80vh] space-y-1 overflow-y-auto px-4 py-2">
                        <a href="/" className="block rounded-md px-4 py-3 text-primary hover:bg-primary/8">
                            Home
                        </a>

                        {/* About mobile dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('about')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>About</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'about' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'about' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.about.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Explore mobile dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('explore')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>Explore</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'explore' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'explore' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.explore.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact mobile dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('Contact')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>Contact</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'Contact' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'Contact' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.Contact.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Events mobile dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('events')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>Events</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'events' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'events' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.events.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('rewards')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>Rewards</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'rewards' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'rewards' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.rewards.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => toggleMobileSubMenu('market')}
                                className="flex w-full items-center justify-between rounded-md px-4 py-3 text-primary hover:bg-primary/8"
                            >
                                <span>Market</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === 'market' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden rounded-md bg-primary/5 transition-all duration-300 ${mobileSubMenuOpen === 'market' ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="space-y-2 py-2">
                                    {dropdownItems.market.map((item, index) => (
                                        <a key={index} href={item.href} className="block rounded-md px-9 py-2 text-primary hover:bg-primary/30">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile user section */}
                        <div className="mt-2 space-y-2 border-t border-primary/20 pt-2">
                            {auth?.user && auth.user.user_type === 'user' ? (
                                <>
                                    <div className="flex items-center justify-between rounded-md px-4 py-2">
                                        <span className="max-1/3 font-medium">Hello, {auth?.user?.profile?.first_name?.split(' ')[0]} </span>
                                        <div className="flex items-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-800">
                                            <img
                                                src="/User/Layout/Pakilpoints.png"
                                                alt="Points"
                                                className="mr-1 h-6 w-6"
                                                onError={(e) => {
                                                    e.currentTarget.src =
                                                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23eab308'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-1.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm-3.5-7v1h7v-1h-7z'/%3E%3C/svg%3E";
                                                }}
                                            />
                                            {(auth?.user?.pakil_points ?? 0) === 0 ? 0 : (auth?.user?.pakil_points ?? 0).toLocaleString()} points
                                        </div>
                                    </div>
                                    <a href="/profile" className="block rounded-md px-4 py-2 text-primary hover:bg-primary/8">
                                        <i className="fa-regular fa-user mr-3"></i> Profile
                                    </a>

                                    {/* Seller Dashboard for Mobile - Conditionally shown */}
                                    {auth?.user?.is_seller && (
                                        <a href="/seller/dashboard" className="block rounded-md px-4 py-2 text-primary hover:bg-primary/8">
                                            <i className="fa-solid fa-store mr-3"></i> Seller Dashboard
                                        </a>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => router.post('/logout')}
                                        className="block w-full rounded-md px-4 py-2 text-start text-primary hover:bg-primary/8"
                                    >
                                        <i className="fa-solid fa-arrow-right-from-bracket mr-3"></i> Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/Login" className="block rounded-md px-4 py-2 text-center text-primary hover:bg-primary/8">
                                        Login
                                    </a>
                                    <a href="/Register" className="block rounded-md bg-primary px-4 py-2 text-center text-white hover:bg-primary/80">
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
