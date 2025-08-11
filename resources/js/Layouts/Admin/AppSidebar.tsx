import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useSidebar } from '@AdminUtils/context/SidebarContext';
import { ChevronDownIcon, GridIcon, HorizontaLDots, UserCircleIcon } from '@AdminUtils/icons';

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
    // {
    //     icon: <CalenderIcon />,
    //     name: 'Calendar',
    //     path: '/calendar',
    // },
    //
    // {
    //     name: 'Forms',
    //     icon: <ListIcon />,
    //     subItems: [{ name: 'Form Elements', path: '/form-elements' }],
    // },
    // {
    //     name: 'Tables',
    //     icon: <TableIcon />,
    //     subItems: [{ name: 'Basic Tables', path: '/basic-tables' }],
    // },
    // {
    //     name: 'Pages',
    //     icon: <PageIcon />,
    //     subItems: [
    //         { name: 'Blank Page', path: '/blank' },
    //         { name: '404 Error', path: '/error-404' },
    //     ],
    // },
];

const othersItems: NavItem[] = [
    // {
    //     icon: <PieChartIcon />,
    //     name: 'Charts',
    //     subItems: [
    //         { name: 'Line Chart', path: '/line-chart' },
    //         { name: 'Bar Chart', path: '/bar-chart' },
    //     ],
    // },
    // {
    //     icon: <BoxCubeIcon />,
    //     name: 'UI Elements',
    //     subItems: [
    //         { name: 'Alerts', path: '/alerts' },
    //         { name: 'Avatar', path: '/avatars' },
    //         { name: 'Badge', path: '/badge' },
    //         { name: 'Buttons', path: '/buttons' },
    //         { name: 'Images', path: '/images' },
    //         { name: 'Videos', path: '/videos' },
    //     ],
    // },
    // {
    //     icon: <PlugInIcon />,
    //     name: 'Authentication',
    //     subItems: [
    //         { name: 'Sign In', path: '/signin' },
    //         { name: 'Sign Up', path: '/signup' },
    //     ],
    // },
];

const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const { url } = usePage();

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: 'main' | 'others';
        index: number;
    } | null>(null);
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const isActive = useCallback((path: string) => url === path, [url]);

    useEffect(() => {
        let submenuMatched = false;
        ['main', 'others'].forEach((menuType) => {
            const items = menuType === 'main' ? navItems : othersItems;
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
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prevHeights) => ({
                    ...prevHeights,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);

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
            {items.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`menu-item group ${
                                openSubmenu?.type === menuType && openSubmenu?.index === index ? 'menu-item-active' : 'menu-item-inactive'
                            } cursor-pointer ${!isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start'}`}
                        >
                            <span
                                className={`menu-item-icon-size ${
                                    openSubmenu?.type === menuType && openSubmenu?.index === index
                                        ? 'menu-item-icon-active'
                                        : 'menu-item-icon-inactive'
                                }`}
                            >
                                {nav.icon}
                            </span>
                            {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                            {(isExpanded || isHovered || isMobileOpen) && (
                                <ChevronDownIcon
                                    className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                                        openSubmenu?.type === menuType && openSubmenu?.index === index ? 'text-brand-500 rotate-180' : ''
                                    }`}
                                />
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link href={nav.path} className={`menu-item group ${isActive(nav.path) ? 'menu-item-active' : 'menu-item-inactive'}`}>
                                <span className={`menu-item-icon-size ${isActive(nav.path) ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`}>
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                            </Link>
                        )
                    )}
                    {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                        <div
                            ref={(el) => {
                                subMenuRefs.current[`${menuType}-${index}`] = el;
                            }}
                            className="overflow-hidden transition-all duration-300"
                            style={{
                                height:
                                    openSubmenu?.type === menuType && openSubmenu?.index === index
                                        ? `${subMenuHeight[`${menuType}-${index}`]}px`
                                        : '0px',
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
            ))}
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
                <Link href="/" className="flex items-center justify-center gap-3 align-middle">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img className="block rounded-full dark:hidden" src="/images/user/User.png" alt="Logo" width={50} height={50} />
                            <img className="hidden rounded-full dark:block" src="/images/user/User.png" alt="Logo" width={50} height={50} />
                            <div className="text-xl text-black dark:text-white">Deborja, Abdul</div>
                        </>
                    ) : (
                        <img className="block rounded-full" src="/images/user/User.png" alt="Logo" width={50} height={50} />
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
                        {/* <div className="">
                            <h2
                                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${
                                    !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
                                }`}
                            >
                                {isExpanded || isHovered || isMobileOpen ? 'Others' : <HorizontaLDots />}
                            </h2>
                            {renderMenuItems(othersItems, 'others')}
                        </div> */}
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
