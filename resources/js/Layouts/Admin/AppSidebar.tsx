import { useSidebar } from '@AdminUtils/context/SidebarContext';
import {
    ChevronDownIcon,
    CommenQuestion,
    Crown,
    DocsIcon,
    GearIconThin,
    GridIcon,
    HorizontaLDots,
    HouseMedical,
    ImageRegular,
    MapDot,
    Shop,
    SiteMap,
    UserCircleIcon,
    UserCrown,
    UserGroup,
    UserTie,
} from '@AdminUtils/icons';
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
    user_type?: string;

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
    requiredUserType?: string[];
};

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: SubMenuItem[];
    requiredUserType?: string[];
};

const mainNavItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: 'Dashboard',
        path: '/Admin/',
        requiredUserType: ['admin'],
    },
    {
        icon: <UserCircleIcon />,
        name: 'Account Management',
        requiredUserType: ['admin'],
        subItems: [
            { name: 'Add Account', path: '/Admin/accounts/new', requiredUserType: ['admin'] },
            { name: 'All Accounts', path: '/Admin/accounts', requiredUserType: ['admin'] },
        ],
    },

    {
        icon: <GearIconThin />,
        name: 'Website Settings',
        requiredUserType: ['admin'], // Only admin can access
        subItems: [{ name: 'Color Theme', path: '/Admin/theme/color', requiredUserType: ['admin'] }],
    },
];

const otherNavItems: NavItem[] = [
    {
        icon: <CommenQuestion />,
        name: 'FAQs',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add New FAQs', path: '/Admin/faqs/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All FAQs', path: '/Admin/faqs', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <MapDot />,
        name: 'Terminals',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add New Terminal', path: '/Admin/terminal/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Terminal', path: '/Admin/terminal', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <UserTie />,
        name: 'Tour Guides',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add Tour Guide', path: '/Admin/tour-guides/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Tour Guide', path: '/Admin/tour-guides', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <Shop />,
        name: 'Establishments',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add Establishment', path: '/Admin/establishment/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Establishments', path: '/Admin/establishment', requiredUserType: ['admin', 'content_manager'] },
        ],
    },

    {
        icon: <Crown />,
        name: 'Local Products',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add New Products', path: '/Admin/local-products/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Products', path: '/Admin/local-products/', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <UserCrown />,
        name: 'Local Personalities',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add New Personality', path: '/Admin/local-personalities/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Personalities', path: '/Admin/local-personalities', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <HouseMedical />,
        name: 'Emergency Hotlines',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Add New Hotlines', path: '/Admin/hotlines/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Hotlines', path: '/Admin/hotlines', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
    {
        icon: <ImageRegular />,
        name: 'Social Wall Post',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Pending Posts', path: '/Admin/social-wall/pending', requiredUserType: ['admin', 'content_manager'] },
            { name: 'Approved Posts', path: '/Admin/social-wall/approved', requiredUserType: ['admin', 'content_manager'] },
            { name: 'Rejected Posts', path: '/Admin/social-wall/rejected', requiredUserType: ['admin', 'content_manager'] },
        ],
    },

    {
        icon: <DocsIcon />,
        name: 'Content Management',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'Page Banners', path: '/Admin/cms/banner', requiredUserType: ['admin', 'content_manager'] },
            {
                name: 'Home Sections',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'Banner ', path: '/Admin/cms/hero-section', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Introduction ', path: '/Admin/cms/introduction-section', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Promotional Vid', path: '/Admin/content/promotional-video', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
            {
                name: 'About Sections',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'Tourism About', path: '/Admin/cms/tourism-section', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Mission & Vision', path: '/Admin/cms/mission-vision', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Citizen Charter', path: '/Admin/cms/citizen-charter', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
            {
                name: 'Explore Sections',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'About Pakil', path: '/Admin/cms/pakil-intro', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Barangay Information', path: '/Admin/barangay-info', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'Municipal Statistics', path: '/Admin/cms/municipal-statistics', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
            {
                name: 'History Sections',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'New History', path: '/Admin/cms/pakil-history/new', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'All History', path: '/Admin/cms/pakil-history/', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
        ],
    },

    {
        icon: <SiteMap />,
        name: 'Deparment Structure',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            {
                name: 'Departments',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'New Department ', path: '/Admin/structure/department/new', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'All Departments ', path: '/Admin/structure/department', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
            {
                name: 'Departments Members',
                path: '',
                requiredUserType: ['admin', 'content_manager'],
                subItems: [
                    { name: 'New Member', path: '/Admin/structure/members/new', requiredUserType: ['admin', 'content_manager'] },
                    { name: 'All Memebers', path: '/Admin/structure/members', requiredUserType: ['admin', 'content_manager'] },
                ],
            },
        ],
    },

    {
        icon: <UserGroup />,
        name: 'Key Officials',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'New Official', path: '/Admin/officials/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Officials', path: '/Admin/officials', requiredUserType: ['admin', 'content_manager'] },
        ],
    },

    {
        icon: <UserGroup />,
        name: 'Past Mayors',
        requiredUserType: ['admin', 'content_manager'],
        subItems: [
            { name: 'New Mayor', path: '/Admin/past-mayor/new', requiredUserType: ['admin', 'content_manager'] },
            { name: 'All Mayors', path: '/Admin/past-mayor', requiredUserType: ['admin', 'content_manager'] },
        ],
    },
];

const AppSidebar: React.FC<AppHeaderProps> = ({ auth }) => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const { url } = usePage();

    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const animationRefs = useRef<Record<string, Animation>>({});

    const isActive = useCallback((path: string) => url === path, [url]);

    const hasAccess = useCallback(
        (requiredUserType?: string[]) => {
            if (!requiredUserType || requiredUserType.length === 0) return true;
            if (!auth?.user?.user_type) return false;
            return requiredUserType.includes(auth.user.user_type);
        },
        [auth],
    );

    useEffect(() => {
        const newOpenSubmenus: Record<string, boolean> = {};

        const checkItems = (items: SubMenuItem[] | undefined, parentKeys: string[], type: string) => {
            if (!items) return false;

            let foundActive = false;

            items.forEach((item, index) => {
                if (!hasAccess(item.requiredUserType)) return;

                const currentKey = [...parentKeys, index.toString()].join('-');

                if (isActive(item.path)) {
                    foundActive = true;

                    parentKeys.forEach((key, i) => {
                        const partialKey = parentKeys.slice(0, i + 1).join('-');
                        newOpenSubmenus[`${type}-${partialKey}`] = true;
                    });
                }

                if (item.subItems) {
                    const childFound = checkItems(item.subItems, [...parentKeys, index.toString()], type);
                    if (childFound) {
                        foundActive = true;
                        newOpenSubmenus[`${type}-${currentKey}`] = true;
                    }
                }
            });

            return foundActive;
        };

        // Check main nav items
        mainNavItems.forEach((nav, index) => {
            // Skip items that user doesn't have access to
            if (!hasAccess(nav.requiredUserType)) return;

            if (nav.subItems) {
                checkItems(nav.subItems, [index.toString()], 'main');
            }
        });

        // Check other nav items
        otherNavItems.forEach((nav, index) => {
            // Skip items that user doesn't have access to
            if (!hasAccess(nav.requiredUserType)) return;

            if (nav.subItems) {
                checkItems(nav.subItems, [index.toString()], 'other');
            }
        });

        setOpenSubmenus(newOpenSubmenus);
    }, [url, isActive, hasAccess]);

    useEffect(() => {
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

            if (animationRefs.current[key]) {
                animationRefs.current[key].cancel();
            }

            if (newState[key]) {
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
        // Filter items based on user access
        const accessibleItems = items.filter((item) => hasAccess(item.requiredUserType));

        if (accessibleItems.length === 0) return null;

        return (
            <ul className={`mt-1 ${level > 1 ? 'ml-3' : 'ml-8'} space-y-1`}>
                {accessibleItems.map((subItem, index) => {
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
                                        <span className="truncate">{subItem.name}</span>
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
                                    className={`menu-dropdown-item flex items-center ${
                                        isActive(subItem.path) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'
                                    } ${level > 1 ? 'pl-3' : 'pl-2'}`}
                                >
                                    <span className="truncate">{subItem.name}</span>
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

    const renderMenuItems = (items: NavItem[], menuType: 'main' | 'other') => {
        // Filter items based on user access
        const accessibleItems = items.filter((item) => hasAccess(item.requiredUserType));

        if (accessibleItems.length === 0) return null;

        return (
            <ul className="flex flex-col gap-1">
                {accessibleItems.map((nav, index) => {
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
                                    {(isExpanded || isHovered || isMobileOpen) && (
                                        <span className="menu-item-text ml-3 flex-1 truncate text-left">{nav.name}</span>
                                    )}
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
                                        className={`menu-item group w-full ${isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'} ${
                                            !isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start'
                                        }`}
                                    >
                                        <span
                                            className={`menu-item-icon-size ${isActive(nav.path) ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`}
                                        >
                                            {nav.icon}
                                        </span>
                                        {(isExpanded || isHovered || isMobileOpen) && (
                                            <span className="menu-item-text ml-3 flex-1 truncate text-left">{nav.name}</span>
                                        )}
                                    </Link>
                                )
                            )}
                            {hasSubItems && (isExpanded || isHovered || isMobileOpen) && (
                                <div
                                    ref={(el) => {
                                        subMenuRefs.current[menuKey] = el;
                                    }}
                                    className="ml-5 overflow-hidden"
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
    };

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
                            <div className="max-w-[150px] truncate text-xl text-black dark:text-white">
                                {auth?.user?.profile?.last_name || 's'}, {auth?.user?.profile?.first_name || 'Unknown'}
                                <div className="mt-1 text-xs text-gray-500 capitalize">{(auth?.user?.user_type || 'Unknown').replace(/_/g, ' ')}</div>
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
                        {/* Main Menu Section - Only show if user has access to at least one item */}
                        {mainNavItems.some((item) => hasAccess(item.requiredUserType)) && (
                            <div>
                                <h2
                                    className={`mb-3 flex text-xs font-medium tracking-wider text-gray-500 uppercase ${
                                        !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                                    }`}
                                >
                                    <span
                                        className={`transition-opacity duration-300 ${isExpanded || isHovered || isMobileOpen ? 'opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}
                                    >
                                        Admin Menu
                                    </span>
                                    <span
                                        className={`transition-opacity duration-300 ${!isExpanded && !isHovered && !isMobileOpen ? 'opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}
                                    >
                                        <HorizontaLDots className="size-6" />
                                    </span>
                                </h2>
                                {renderMenuItems(mainNavItems, 'main')}
                            </div>
                        )}

                        {/* Other Items Section - Only show if user has access to at least one item */}
                        {otherNavItems.some((item) => hasAccess(item.requiredUserType)) && (
                            <div className="mt-6">
                                <h2
                                    className={`mb-3 flex text-xs font-medium tracking-wider text-gray-500 uppercase ${
                                        !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                                    }`}
                                >
                                    <span
                                        className={`transition-opacity duration-300 ${isExpanded || isHovered || isMobileOpen ? 'opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}
                                    >
                                        Content Manager
                                    </span>
                                    <span
                                        className={`transition-opacity duration-300 ${!isExpanded && !isHovered && !isMobileOpen ? 'opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}
                                    >
                                        <HorizontaLDots className="size-6" />
                                    </span>
                                </h2>
                                {renderMenuItems(otherNavItems, 'other')}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
