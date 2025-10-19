import { Link, router, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';
import { Dropdown } from '../ui/dropdown/Dropdown';
import { DropdownItem } from '../ui/dropdown/DropdownItem';

type NotificationItem = {
    id: number;
    type: string;
    title: string;
    message: string;
    url?: string;
    is_read?: boolean;
    created_at?: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    notifications?: NotificationItem[];
    status?: string;
};

// Time formatting utility
const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return 'Just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    }

    // For older dates, show the actual date
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
    });
};

export default function NotificationDropdown() {
    const { notifications = [] } = usePage<PageProps>().props;

    const [isOpen, setIsOpen] = useState(false);
    const [notifying, setNotifying] = useState(notifications.some((n) => !n.is_read));

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    const handleClick = () => {
        toggleDropdown();
        setNotifying(false);
    };

    // Sort notifications by date (newest first)
    const sortedNotifications = useMemo(() => {
        return [...notifications].sort((a, b) => {
            const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
            const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
            return dateB - dateA;
        });
    }, [notifications]);

    return (
        <div className="relative">
            <button
                className="dropdown-toggle relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={handleClick}
            >
                <span className={`absolute top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-orange-400 ${!notifying ? 'hidden' : 'flex'}`}>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                </span>

                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
                        fill="currentColor"
                    />
                </svg>
            </button>

            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute left-0 mt-[17px] max-w-[350px] min-w-[300px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg sm:w-[361px] lg:right-0 lg:left-auto dark:border-gray-800 dark:bg-gray-dark"
            >
                <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-700">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Notifications</h5>
                    <button
                        onClick={toggleDropdown}
                        className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="flex custom-scrollbar h-auto max-h-96 flex-col space-y-2 overflow-y-auto">
                    {sortedNotifications.length > 0 ? (
                        sortedNotifications.map((notif) => (
                            <li key={notif.id} className="group relative">
                                <DropdownItem
                                    onItemClick={() => {
                                        closeDropdown();
                                        if (notif.id) {
                                            window.location.href = `/notifications/read/${notif.id}`;
                                        }
                                    }}
                                    className={`flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5 ${
                                        !notif.is_read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
                                    } ${notif.url ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    {/* Delete button - appears on hover */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            router.delete(`/notifications/${notif.id}`, {
                                                preserveScroll: true,
                                            });
                                        }}
                                        className="absolute top-3 right-3 rounded-full p-1 text-gray-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-gray-200 hover:text-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-red-400"
                                        title="Delete notification"
                                    >
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    {/* Icon placeholder instead of image */}
                                    <span className="relative z-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {/* Unread indicator */}
                                        {!notif.is_read && (
                                            <span className="absolute right-0 bottom-0 z-10 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-orange-500 dark:border-gray-900"></span>
                                        )}
                                    </span>

                                    <span className="block flex-1 pr-6">
                                        <span className="mb-1.5 block space-x-1 text-theme-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-medium text-gray-800 dark:text-white/90">{notif.title}</span>
                                            <br />
                                            <span>"{notif.message}"</span>
                                        </span>

                                        <span className="flex items-center gap-2 text-theme-xs text-gray-500 dark:text-gray-400">
                                            <span>{notif.type}</span>
                                            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                                            <span>{notif.created_at ? formatTimeAgo(notif.created_at) : 'Recently'}</span>
                                        </span>
                                    </span>
                                </DropdownItem>
                            </li>
                        ))
                    ) : (
                        <li className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-gray-400 dark:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3c0 .386-.149.735-.395.995L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">No notifications</p>
                            <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">We'll notify you when something arrives</p>
                        </li>
                    )}
                </ul>

                {sortedNotifications.length > 0 && (
                    <Link
                        href="/notifications"
                        className="mt-3 block rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                        Mark All As Read
                    </Link>
                )}
            </Dropdown>
        </div>
    );
}
