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
        market: false,
        explore: false,
        events: false,
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
            <div className="flex items-center justify-between bg-primary px-4 py-2 text-sm text-gray-600 text-white sm:text-[11px]">
                <div className="flex items-center space-x-4 text-[11px] sm:text-sm">
                    <span className="sm" id="current-date">
                        {currentDate}
                    </span>
                    <span id="current-time">{currentTime}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select className="border-none bg-transparent pr-6 text-[11px] text-white focus:ring-0 focus:outline-none sm:text-sm">
                            <option className="text-black">EN</option>
                            <option className="text-black">FIL</option>
                        </select>
                    </div>
                    <div className="hidden space-x-2 md:flex">
                        <a href="#" className="hover:text-blue-500">
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
                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('home')}
                                        onMouseLeave={() => toggleDropdown('home')}
                                    >
                                        Home
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.home ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('home')}
                                        onMouseLeave={() => toggleDropdown('home')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Special Offers
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Travel Guides
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Seasonal Deals
                                        </a>
                                    </div>
                                </div>

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
                                            Our Story
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Team
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Careers
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <a
                                        href="#"
                                        className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60"
                                        onMouseEnter={() => toggleDropdown('market')}
                                        onMouseLeave={() => toggleDropdown('market')}
                                    >
                                        Market
                                    </a>
                                    <div
                                        className={`dropdown-menu ${dropdownOpen.market ? 'block' : 'hidden'} absolute left-0 z-10 w-48 rounded-b-md bg-white shadow-lg`}
                                        onMouseEnter={() => toggleDropdown('market')}
                                        onMouseLeave={() => toggleDropdown('market')}
                                    >
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Flights
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Hotels
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Packages
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
                                            Destinations
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Activities
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Cultural Tours
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-primary hover:bg-blue-50">
                                            Adventure Trips
                                        </a>
                                    </div>
                                </div>

                                <a href="#" className="nav-link px-4 py-3 font-medium text-primary hover:text-primary/60">
                                    Social
                                </a>
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
                                            Upcoming
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
                                    Contact
                                </a>
                            </div>

                            <div className="ml-6 flex items-center space-x-3">
                                {auth?.user ? (
                                    <>
                                        <span className="text-sm text-gray-600">{auth.user.email}</span>
                                        <form method="POST" action="/Logout">
                                            <input type="hidden" name="_token" value={csrfToken ?? ''} />
                                            <button type="submit" className="underline">
                                                Logout
                                            </button>
                                        </form>
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
