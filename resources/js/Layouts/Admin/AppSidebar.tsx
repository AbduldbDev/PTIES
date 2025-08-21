import { useSidebar } from '@AdminUtils/context/SidebarContext';
import { ChevronDownIcon, DocsIcon, GridIcon, HorizontaLDots, PageIcon, UserCircleIcon } from '@AdminUtils/icons';
import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface UserProfile {
    first_name: string;
    middle_name?: string;
    last_name?: string;
}

export interface AuthUser {
    email: string;
    image: string;
    profile?: UserProfile;
}

export interface AuthData {
    user?: AuthUser;
}

export interface AppHeaderProps {
    auth?: AuthData;
}

type SubMenuItem = {
    name: string;
    path: string;
    new?: boolean;
    subItems?: SubMenuItem[];
};

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: SubMenuItem[];
};

const navItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: 'Dashboard',
        path: '/Admin/',
    },
    {
        icon: <UserCircleIcon />,
        name: 'Account Management',
        subItems: [
            {
                name: 'All Accounts',
                path: '',
                subItems: [{ name: 'Active Accounts', path: '/Admin/Accounts' }],
            },
            {
                name: 'Add New Account',
                path: '',
                subItems: [{ name: 'Add Account', path: '/Admin/Accounts/New' }],
            },
        ],
    },
    {
        icon: <DocsIcon />,
        name: 'Content Management',
        subItems: [
            { name: 'Page Banners', path: '/Admin/CMS/Banners' },
            {
                name: 'Home Sections',
                path: '',
                subItems: [
                    { name: 'Banner ', path: '/Admin/CMS/HeroSection' },
                    { name: 'Introduction ', path: '/Admin/CMS/IntroductionSection' },

                    { name: 'Promotional Vid', path: '/Admin/Content/PromotionalVid' },
                ],
            },
            {
                name: 'About Sections',
                path: '',
                subItems: [
                    { name: 'Tourism About', path: '/Admin/CMS/TourismSection' },
                    { name: 'Mission & Vision', path: '/Admin/CMS/MissionVision' },
                ],
            },
            {
                name: 'Explore Sections',
                path: '',
                subItems: [{ name: 'About Pakil', path: '/Admin/CMS/PakilIntro' }],
            },
        ],
    },
    {
        icon: <PageIcon />,
        name: 'Website Settings',
        subItems: [{ name: 'Color Theme', path: '/Admin/Settings/Website' }],
    },
];

const AppSidebar: React.FC<AppHeaderProps> = ({ auth }) => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const { url } = usePage();

    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const animationRefs = useRef<Record<string, Animation>>({});

    const isActive = useCallback((path: string) => url === path, [url]);

    useEffect(() => {
        const newOpenSubmenus: Record<string, boolean> = {};

        const checkItems = (items: SubMenuItem[] | undefined, parentKeys: string[]) => {
            if (!items) return false;

            let foundActive = false;

            items.forEach((item, index) => {
                const currentKey = [...parentKeys, index.toString()].join('-');

                if (isActive(item.path)) {
                    foundActive = true;
                    // Open all parent menus
                    parentKeys.forEach((key, i) => {
                        const partialKey = parentKeys.slice(0, i + 1).join('-');
                        newOpenSubmenus[partialKey] = true;
                    });
                }

                if (item.subItems) {
                    const childFound = checkItems(item.subItems, [...parentKeys, index.toString()]);
                    if (childFound) {
                        foundActive = true;
                        newOpenSubmenus[currentKey] = true;
                    }
                }
            });

            return foundActive;
        };

        navItems.forEach((nav, index) => {
            if (nav.subItems) {
                checkItems(nav.subItems, [`main-${index}`]);
            }
        });

        setOpenSubmenus(newOpenSubmenus);
    }, [url, isActive]);

    useEffect(() => {
        // Clean up animations on unmount
        return () => {
            Object.values(animationRefs.current).forEach((animation) => {
                if (animation) animation.cancel();
            });
        };
    }, []);

    const toggleSubmenu = (key: string) => {
        setOpenSubmenus((prev) => {
            const newState = { ...prev, [key]: !prev[key] };
            const element = subMenuRefs.current[key];

            if (!element) return newState;

            // Cancel any ongoing animation
            if (animationRefs.current[key]) {
                animationRefs.current[key].cancel();
            }

            if (newState[key]) {
                // Opening animation
                element.style.display = 'block';
                element.style.height = '0px';
                element.style.overflow = 'hidden';

                const targetHeight = element.scrollHeight;
                const animation = element.animate([{ height: '0px' }, { height: `${targetHeight}px` }], {
                    duration: 300,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                });

                animation.onfinish = () => {
                    element.style.height = 'auto';
                    element.style.overflow = 'visible';
                };

                animationRefs.current[key] = animation;
            } else {
                // Closing animation
                const startHeight = element.scrollHeight;
                element.style.height = `${startHeight}px`;
                element.style.overflow = 'hidden';

                const animation = element.animate([{ height: `${startHeight}px` }, { height: '0px' }], {
                    duration: 300,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                });

                animation.onfinish = () => {
                    element.style.display = 'none';
                };

                animationRefs.current[key] = animation;
            }

            return newState;
        });
    };

    const renderSubItems = (items: SubMenuItem[], parentKey: string, level: number = 1) => {
        return (
            <ul className={`mt-1 ${level > 1 ? 'ml-3' : 'ml-8'} space-y-1`}>
                {items.map((subItem, index) => {
                    const currentKey = `${parentKey}-${index}`;
                    const hasSubItems = subItem.subItems && subItem.subItems.length > 0;
                    const isOpen = openSubmenus[currentKey];

                    return (
                        <li key={subItem.name} className="relative">
                            {hasSubItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubmenu(currentKey)}
                                        className={`menu-dropdown-item flex w-full items-center justify-between ${
                                            isActive(subItem.path) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'
                                        } ${level > 1 ? 'pl-3' : 'pl-2'}`}
                                    >
                                        <span>{subItem.name}</span>
                                        {subItem.new && (
                                            <span
                                                className={`ml-2 ${
                                                    isActive(subItem.path) ? 'menu-dropdown-badge-active' : 'menu-dropdown-badge-inactive'
                                                } menu-dropdown-badge`}
                                            >
                                                new
                                            </span>
                                        )}
                                        <ChevronDownIcon
                                            className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'text-brand-500 rotate-180' : ''}`}
                                        />
                                    </button>
                                    <div
                                        ref={(el) => {
                                            subMenuRefs.current[currentKey] = el;
                                        }}
                                        className="overflow-hidden"
                                        style={{
                                            display: isOpen ? 'block' : 'none',
                                            height: isOpen ? 'auto' : '0px',
                                        }}
                                    >
                                        {renderSubItems(subItem.subItems!, currentKey, level + 1)}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={subItem.path}
                                    className={`menu-dropdown-item block ${
                                        isActive(subItem.path) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'
                                    } ${level > 1 ? 'pl-3' : 'pl-2'}`}
                                >
                                    {subItem.name}
                                    {subItem.new && (
                                        <span
                                            className={`ml-auto ${
                                                isActive(subItem.path) ? 'menu-dropdown-badge-active' : 'menu-dropdown-badge-inactive'
                                            } menu-dropdown-badge`}
                                        >
                                            new
                                        </span>
                                    )}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const renderMenuItems = (items: NavItem[], menuType: 'main' | 'others') => (
        <ul className="flex flex-col gap-1">
            {items.map((nav, index) => {
                const menuKey = `${menuType}-${index}`;
                const isOpen = openSubmenus[menuKey];
                const hasSubItems = nav.subItems && nav.subItems.length > 0;

                return (
                    <li key={nav.name} className="relative">
                        {hasSubItems ? (
                            <button
                                onClick={() => toggleSubmenu(menuKey)}
                                className={`menu-item group w-full ${
                                    isOpen ? 'menu-item-active' : 'menu-item-inactive'
                                } cursor-pointer ${!isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start'}`}
                            >
                                <span className={`menu-item-icon-size ${isOpen ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`}>
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <ChevronDownIcon
                                        className={`ml-auto h-5 w-5 transition-transform duration-200 ${isOpen ? 'text-brand-500 rotate-180' : ''}`}
                                    />
                                )}
                            </button>
                        ) : (
                            nav.path && (
                                <Link
                                    href={nav.path}
                                    className={`menu-item group w-full ${isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'}`}
                                >
                                    <span
                                        className={`menu-item-icon-size ${isActive(nav.path) ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`}
                                    >
                                        {nav.icon}
                                    </span>
                                    {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                                </Link>
                            )
                        )}
                        {hasSubItems && (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[menuKey] = el;
                                }}
                                className="overflow-hidden"
                                style={{
                                    display: isOpen ? 'block' : 'none',
                                    height: isOpen ? 'auto' : '0px',
                                }}
                            >
                                {renderSubItems(nav.subItems!, menuKey)}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <aside
            className={`fixed top-0 left-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-4 text-gray-900 transition-all duration-300 ease-in-out lg:mt-0 dark:border-gray-800 dark:bg-gray-900 ${
                isExpanded || isMobileOpen ? 'w-[290px]' : isHovered ? 'w-[290px]' : 'w-[90px]'
            } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex py-6 ${!isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'}`}>
                <Link href="/Admin" className="flex items-center justify-center gap-3 align-middle">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img
                                className="rounded-full"
                                src={auth?.user?.image ? `/storage/${auth.user.image}` : '/images/user/User.png'}
                                alt={auth?.user?.profile?.first_name || 'User'}
                                width={50}
                                height={50}
                            />
                            <div className="text-xl text-black dark:text-white">
                                {auth?.user?.profile?.last_name || 's'}, {auth?.user?.profile?.first_name || 's'}
                            </div>
                        </>
                    ) : (
                        <img
                            className="rounded-full"
                            src={auth?.user?.image ? `/storage/${auth.user.image}` : '/images/user/User.png'}
                            alt={auth?.user?.profile?.first_name || 'User'}
                            width={50}
                            height={50}
                        />
                    )}
                </Link>
            </div>
            <div className="no-scrollbar flex flex-1 flex-col overflow-y-auto py-2 duration-300 ease-linear">
                <nav className="mb-4">
                    <div className="flex flex-col gap-1">
                        <div>
                            <h2
                                className={`mb-3 flex text-xs font-medium tracking-wider text-gray-500 uppercase ${
                                    !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? 'Menu' : <HorizontaLDots className="size-6" />}
                            </h2>
                            {renderMenuItems(navItems, 'main')}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
