import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { auth } = usePage().props as { auth?: { user: { email: string } } };
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState({
        home: false,
        about: false,
        Contact: false,
        explore: false,
        events: false,
        UserIcon: false,
        rewards: false,
    });

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            setMobileSubMenuOpen(null);
        }
    };

    const toggleMobileSubMenu = (menu: string) => {
        setMobileSubMenuOpen(mobileSubMenuOpen === menu ? null : menu);
    };

    const toggleDropdown = (menu: keyof typeof dropdownOpen) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    const dropdownItems = {
        about: [
            { label: 'About Us', href: '/tourism#' },
            { label: 'Mission & Vision', href: '/tourism#mission&vision' },
            { label: 'Department Structure', href: '/tourism#department_structure' },
            { label: 'Citizen Charter', href: '/tourism#citizen_charter' },
            { label: 'Key Officials', href: '/officials' },
        ],
        explore: [
            { label: 'About Pakil', href: '/about' },
            { label: 'Attractions', href: '/attractions' },
            { label: 'Personalities', href: '#' },
            { label: 'Local Products', href: '/localproducts' },
            { label: 'Terminals', href: '/terminals' },
            { label: 'Guide', href: '/guide' },
        ],
        Contact: [
            { label: 'Contact Us', href: '/contact#' },
            { label: 'Emergency Hotlines', href: '/contact#hotlines' },
            { label: 'Tour Guides', href: '/contact#tourguides' },
        ],
        events: [
            { label: 'Events', href: '/events' },
            // { label: 'News', href: '#' },
            { label: 'Social Wall', href: '/socialwall' },
        ],
        rewards: [
            { label: 'Rewards', href: '/rewardshop' },
            { label: 'Guide', href: '/pakilguide' },
        ],
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-50">
            {/* Top bar with date/time */}
            <div className="flex items-center justify-between bg-primary px-4 py-2 text-sm text-white sm:text-[11px]">
                <div className="flex items-center space-x-4 text-[11px] sm:text-sm">
                    <span className="sm" id="current-date">
                        {currentDate}
                    </span>
                    <span id="current-time">{currentTime}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative inline-block">
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
                    </div>
                    <div className="hidden space-x-2 md:flex">
                        <a href="https://www.facebook.com/pakilturismo" className="hover:text-blue-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <header className="bg-white/80 shadow-sm backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between py-2">
                        <a href="#" className="flex items-center space-x-2">
                            <img src="/User/Layout/Logo.png" alt="Logo" className="h-[55px] w-[55px]" />
                            <img src="/User/Layout/Seal.png" alt="Seal" className="h-[50px] w-[50px]" />
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
                                        onMouseEnter={() => toggleDropdown('about')}
                                        onMouseLeave={() => toggleDropdown('about')}
                                    >
                                        About
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.about ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => toggleDropdown('about')}
                                        onMouseLeave={() => toggleDropdown('about')}
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
                                        onMouseEnter={() => toggleDropdown('explore')}
                                        onMouseLeave={() => toggleDropdown('explore')}
                                    >
                                        Explore
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.explore ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => toggleDropdown('explore')}
                                        onMouseLeave={() => toggleDropdown('explore')}
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
                                        onMouseEnter={() => toggleDropdown('Contact')}
                                        onMouseLeave={() => toggleDropdown('Contact')}
                                    >
                                        Contact
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.Contact ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => toggleDropdown('Contact')}
                                        onMouseLeave={() => toggleDropdown('Contact')}
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
                                        onMouseEnter={() => toggleDropdown('events')}
                                        onMouseLeave={() => toggleDropdown('events')}
                                    >
                                        Events
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.events ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => toggleDropdown('events')}
                                        onMouseLeave={() => toggleDropdown('events')}
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

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link group px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('rewards')}
                                        onMouseLeave={() => toggleDropdown('rewards')}
                                    >
                                        Rewards
                                    </a>
                                    <div
                                        className={`ring-opacity-5 absolute top-9 left-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.rewards ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                        onMouseEnter={() => toggleDropdown('rewards')}
                                        onMouseLeave={() => toggleDropdown('rewards')}
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
                                <a href="#" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Market
                                </a>
                            </div>

                            {/* User section */}
                            <div className="ml-6 flex items-center space-x-3">
                                {auth?.user ? (
                                    <>
                                        <div className="dropdown relative">
                                            <div className="flex items-center space-x-2">
                                                <a
                                                    href="#"
                                                    className="nav-link group flex items-center px-4 py-3 font-medium text-primary hover:text-primary/60"
                                                    onMouseEnter={() => toggleDropdown('UserIcon')}
                                                    onMouseLeave={() => toggleDropdown('UserIcon')}
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
                                                    0 points
                                                </div>
                                            </div>

                                            <div
                                                className={`ring-opacity-5 absolute right-0 z-10 w-56 origin-top-right rounded-lg bg-white p-2 shadow-lg ring-1 ring-primary/30 transition-all duration-200 ${dropdownOpen.UserIcon ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
                                                onMouseEnter={() => toggleDropdown('UserIcon')}
                                                onMouseLeave={() => toggleDropdown('UserIcon')}
                                            >
                                                <div className="border-b px-4 py-3">
                                                    <p className="text-md font-medium text-gray-900">Hello, {auth.user.email.split('@')[0]} </p>
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
                                                        0 points
                                                    </p>
                                                </div>

                                                <div className="py-1">
                                                    <a
                                                        href="/profile"
                                                        className="flex items-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        <i className="fa-regular fa-user mr-3 w-5 text-center"></i>
                                                        Profile
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex items-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        <i className="fa-solid fa-coins mr-3 w-5 text-center"></i>
                                                        My Rewards
                                                    </a>
                                                </div>

                                                <div className="border-t py-1">
                                                    <form method="POST" action="/logout">
                                                        <input type="hidden" name="_token" value={csrfToken ?? ''} />
                                                        <button
                                                            type="submit"
                                                            className="flex w-full items-center rounded-md px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <i className="fa-solid fa-arrow-right-from-bracket mr-3 w-5 text-center"></i>
                                                            Logout
                                                        </button>
                                                    </form>
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
                    className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t bg-white transition-all duration-300 ease-in-out`}
                >
                    <div className="container max-h-[80vh] space-y-1 overflow-y-auto px-4 py-2">
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

                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-primary/8">
                            Market
                        </a>

                        {/* Mobile user section */}
                        <div className="mt-2 space-y-2 border-t pt-2">
                            {auth?.user ? (
                                <>
                                    <div className="flex items-center justify-between rounded-md px-4 py-2">
                                        <span className="max-1/3 font-medium">Hello, {auth.user.email.split('@')[0]} </span>
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
                                            0 points
                                        </div>
                                    </div>
                                    <a href="/profile" className="block rounded-md px-4 py-2 text-primary hover:bg-primary/8">
                                        <i className="fa-regular fa-user mr-3"></i> Profile
                                    </a>
                                    <a href="#" className="block rounded-md px-4 py-2 text-primary hover:bg-primary/8">
                                        <i className="fa-solid fa-coins mr-3"></i> My Rewards
                                    </a>
                                    <form method="POST" action="/Logout">
                                        <input type="hidden" name="_token" value={csrfToken ?? ''} />
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md px-4 py-2 text-start text-primary hover:bg-primary/8"
                                        >
                                            <i className="fa-solid fa-arrow-right-from-bracket mr-3"></i> Logout
                                        </button>
                                    </form>
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

                        {/* <div className="flex justify-center space-x-4 py-3">
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
