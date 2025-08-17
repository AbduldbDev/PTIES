import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useSidebar } from '@AdminUtils/context/SidebarContext';
import { ChevronDownIcon, GridIcon, HorizontaLDots, PageIcon, UserCircleIcon } from '@AdminUtils/icons';
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
type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; new?: boolean }[];
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
            { name: 'All Accounts', path: '/Admin/AccountManagement' },
            { name: 'Add New Account', path: '/Admin/AccountManagement/New' },
        ],
    },
    {
        icon: <PageIcon />,
        name: 'Website Settings',
        subItems: [{ name: 'Theme Settitngs', path: '/Admin/Settings/Website' }],
    },
];

const AppSidebar: React.FC<AppHeaderProps> = ({ auth }) => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const { url } = usePage();

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: 'main' | 'others';
        index: number;
    } | null>(null);
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const isActive = useCallback((path: string) => url === path, [url]);

    useEffect(() => {
        let submenuMatched = false;
        ['main'].forEach((menuType) => {
            const items = menuType === 'main' ? navItems : [];
            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubmenu({
                                type: menuType as 'main' | 'others',
                                index,
                            });
                            submenuMatched = true;
                        }
                    });
                }
            });
        });

        if (!submenuMatched) {
            setOpenSubmenu(null);
        }
    }, [url, isActive]);

    useEffect(() => {
        // Calculate heights after a small delay to ensure DOM is ready
        if (openSubmenu) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                const key = `${openSubmenu.type}-${openSubmenu.index}`;
                const element = subMenuRefs.current[key];
                if (element) {
                    // Force reflow by accessing offsetHeight
                    element.offsetHeight;
                    element.style.height = `${element.scrollHeight}px`;
                }
            }, 50);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [openSubmenu, isExpanded, isHovered, isMobileOpen]);

    const handleSubmenuToggle = (index: number, menuType: 'main' | 'others') => {
        setOpenSubmenu((prevOpenSubmenu) => {
            if (prevOpenSubmenu && prevOpenSubmenu.type === menuType && prevOpenSubmenu.index === index) {
                return null;
            }
            return { type: menuType, index };
        });
    };

    const renderMenuItems = (items: NavItem[], menuType: 'main' | 'others') => (
        <ul className="flex flex-col gap-4">
            {items.map((nav, index) => {
                const isOpen = openSubmenu?.type === menuType && openSubmenu?.index === index;
                const subMenuKey = `${menuType}-${index}`;

                return (
                    <li key={nav.name}>
                        {nav.subItems ? (
                            <button
                                onClick={() => handleSubmenuToggle(index, menuType)}
                                className={`menu-item group ${
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
                                <Link href={nav.path} className={`menu-item group ${isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'}`}>
                                    <span
                                        className={`menu-item-icon-size ${isActive(nav.path) ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`}
                                    >
                                        {nav.icon}
                                    </span>
                                    {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                                </Link>
                            )
                        )}
                        {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[subMenuKey] = el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height: isOpen ? 'auto' : '0px',
                                }}
                            >
                                <ul className="mt-2 ml-9 space-y-1">
                                    {nav.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                            <Link
                                                href={subItem.path}
                                                className={`menu-dropdown-item ${
                                                    isActive(subItem.path) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'
                                                }`}
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
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <aside
            className={`fixed top-0 left-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out lg:mt-0 dark:border-gray-800 dark:bg-gray-900 ${
                isExpanded || isMobileOpen ? 'w-[290px]' : isHovered ? 'w-[290px]' : 'w-[90px]'
            } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex py-8 ${!isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'}`}>
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
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2
                                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${
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
