import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { auth } = usePage().props as { auth?: { user: { email: string } } };
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        home: false,
        about: false,
        Contact: false,
        explore: false,
        events: false,
        UserIcon: false,
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
    };

    const toggleDropdown = (menu: keyof typeof dropdownOpen) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-50">
            <div className="flex items-center justify-between bg-primary px-4 py-2 text-sm text-white sm:text-[11px]">
                <div className="flex items-center space-x-4 text-[11px] sm:text-sm">
                    <span className="sm" id="current-date">
                        {currentDate}
                    </span>
                    <span id="current-time">{currentTime}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative inline-block">
                        <select className="h-8 cursor-pointer appearance-none rounded-md border border-0 pr-8 pl-3 text-xs text-white transition-all hover:bg-white/20 focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:outline-none sm:text-sm">
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

            <header className="bg-opacity-80 bg-white shadow-sm backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between py-2">
                        <a href="#" className="flex items-center space-x-2">
                            <img src="/User/Layout/Logo.png" alt="Logo" className="h-[55px] w-[55px]" />
                            <img src="/User/Layout/Seal.png" alt="Seal" className="h-[50px] w-[50px]" />
                        </a>

                        
                        <div className="hidden items-center space-x-1 lg:flex">
                            <div className="flex items-center space-x-1">
                                <a href="/" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Home
                                </a>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('about')}
                                        onMouseLeave={() => toggleDropdown('about')}
                                    >
                                        About
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.about ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('about')}
                                        onMouseLeave={() => toggleDropdown('about')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            About Us
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Department Structure
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Mission & Vission
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Citizen Charter
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Key Officials
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('explore')}
                                        onMouseLeave={() => toggleDropdown('explore')}
                                    >
                                        Explore
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.explore ? 'block' : 'hidden'} absolute left-0 z-10 w-56 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('explore')}
                                        onMouseLeave={() => toggleDropdown('explore')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            About Pakil
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Attractions
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Personalities
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Local Products
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Terminals
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('Contact')}
                                        onMouseLeave={() => toggleDropdown('Contact')}
                                    >
                                        Contact
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.Contact ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('Contact')}
                                        onMouseLeave={() => toggleDropdown('Contact')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Contact Us
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            FAQs
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Emergency Hotlines
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Tour Guides
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('events')}
                                        onMouseLeave={() => toggleDropdown('events')}
                                    >
                                        Events
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.events ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('events')}
                                        onMouseLeave={() => toggleDropdown('events')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Events
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Past Events
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Gallery
                                        </a>
                                    </div>
                                </div>

                                <a href="#" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Rewards
                                </a>
                                <a href="#" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Market
                                </a>
                            </div>

                            <div className="ml-6 flex items-center space-x-3">
                                {auth?.user ? (
                                    <>
                                        <div className="dropdown relative">
                                            <div className="flex items-center space-x-2">
                                                <a
                                                    href="#"
                                                    className="nav-link flex items-center px-4 py-3 font-medium text-primary hover:text-primary/60"
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
                                                className={`dropdown-menu ${dropdownOpen.UserIcon ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-md border border-primary/30 bg-white shadow-lg`}
                                                onMouseEnter={() => toggleDropdown('UserIcon')}
                                                onMouseLeave={() => toggleDropdown('UserIcon')}
                                            >
                                                <div className="border-b px-4 py-3">
                                                    <p className="text-md font-medium text-gray-900">Hello, Tibursyo </p>
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
                                                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                        <i className="fa-regular fa-user mr-3 w-5 text-center"></i>
                                                        Profile
                                                    </a>
                                                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                        <i className="fa-solid fa-coins mr-3 w-5 text-center"></i>
                                                        My Rewards
                                                    </a>
                                                </div>

                                                <div className="border-t py-1">
                                                    <form method="POST" action="/Logout">
                                                        <input type="hidden" name="_token" value={csrfToken ?? ''} />
                                                        <button
                                                            type="submit"
                                                            className="flex w-full items-center px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100"
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

                        <div className="lg:hidden">
                            <button id="menu-toggle" className="text-gray-600 hover:text-primary/60 focus:outline-none" onClick={toggleMobileMenu}>
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </nav>
                </div>

                <div id="mobile-menu" className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t bg-white`}>
                    <div className="container space-y-1 px-4 py-2">
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Home
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            About
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Market
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Explore
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Social
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Events
                        </a>
                        <a href="#" className="block rounded-md px-4 py-3 text-primary hover:bg-blue-50">
                            Contact
                        </a>

                        <div className="mt-2 space-y-2 border-t pt-2">
                            <a href="#" className="block rounded-md px-4 py-2 text-center text-blue-600 hover:bg-blue-50">
                                Login
                            </a>
                            <a href="#" className="block rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700">
                                Sign Up
                            </a>
                        </div>

                        <div className="flex justify-center space-x-4 py-3">
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
