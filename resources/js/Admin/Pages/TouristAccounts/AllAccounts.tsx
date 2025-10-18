import { TableControls } from '@/Admin/Utils/components/tables/TableControls';
import Pagination from '@/Admin/Utils/components/ui/table/pagination';
import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import DeleteConfirm from '@AdminUtils/components/ui/alert/DeleteConfirm';
import { SortableColumn, Table, TableBody, TableCell, TableHeader, TableRow } from '@AdminUtils/components/ui/table';
import SortIndicator from '@AdminUtils/components/ui/table/sort-indicator';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { useTableManagement } from '@AdminUtils/hooks/useTableManagement';
import { Head, router, useForm, usePage } from '@inertiajs/react';

type UserItemProps = {
    id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    phone: string;
    user: any;
    created_at: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    items: PaginatedResponse<UserItemProps>;
};

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedResponse<T> {
    data: T[];
    links: PaginationLink[];
    meta?: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        from?: number;
        to?: number;
    };
}

const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
};

export default function Home() {
    const { flash, errors, items } = usePage<PageProps>().props;
    const form = useForm();

    const {
        currentPerPage,
        handleItemsPerPageChange,
        sortConfig,
        handleSort,
        searchTerm,
        handleSearch,
        filteredItems: sortedItems,
    } = useTableManagement<UserItemProps>({
        data: items.data,
        initialSort: { key: 'created_at', direction: 'desc' },
        meta: items.meta || undefined,
        customSearchFilter: (item, searchTerm) => {
            const searchLower = searchTerm.toLowerCase();

            const fullName = `${item.last_name ?? ''}, ${item.first_name ?? ''} ${item.middle_name ?? ''}`.toLowerCase();

            return (
                fullName.includes(searchLower) ||
                (item.user.email ?? '').toLowerCase().includes(searchLower) ||
                (item.phone ?? '').toLowerCase().includes(searchLower)
            );
        },
    });

    const handleDelete = (id: number) => {
        form.delete(`/Admin/accounts/delete/${id}`, {
            onSuccess: () => {
                console.log('Deleted successfully');
            },
            onError: (errors) => {
                console.error('Delete error:', errors);
            },
        });
    };

    const handleView = (id: any) => {
        router.get(`/Admin/accounts/edit/${id}`);
    };

    const columns: SortableColumn[] = [
        { key: 'profile.last_name', label: 'User', sortable: true },
        { key: 'email', label: 'Email', sortable: true },
        { key: 'profile.contact', label: 'Contact', sortable: false },
        { key: 'created_at', label: 'Account Age', sortable: true },
        { key: 'action', label: 'Action', sortable: false, align: 'center' },
    ];

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <PageBreadcrumb pageTitle="Account Management" />

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title="All Tourists Accounts">
                        <TableControls
                            searchTerm={searchTerm}
                            onSearchChange={handleSearch}
                            itemsPerPage={currentPerPage}
                            onItemsPerPageChange={(e) => handleItemsPerPageChange(e.target.value)}
                            searchPlaceholder="Search users..."
                        />

                        <div className="overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
                            <div className="max-w-full overflow-x-auto">
                                <Table>
                                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                        <TableRow>
                                            {columns.map((column) => (
                                                <th
                                                    key={column.key}
                                                    className={`border border-gray-100 px-5 py-3 text-theme-xs font-medium text-gray-500 dark:border-white/[0.05] dark:text-gray-400 ${
                                                        column.align === 'center'
                                                            ? 'text-center'
                                                            : column.align === 'right'
                                                              ? 'text-right'
                                                              : 'text-left'
                                                    } ${column.sortable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : ''} `}
                                                    onClick={() => column.sortable && handleSort(column.key)}
                                                >
                                                    <div className="flex items-center">
                                                        {column.label}
                                                        {column.sortable && (
                                                            <SortIndicator direction={sortConfig.key === column.key ? sortConfig.direction : null} />
                                                        )}
                                                    </div>
                                                </th>
                                            ))}
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                        {sortedItems.length > 0 ? (
                                            sortedItems.map((user) => (
                                                <TableRow key={user.id}>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        <div className="flex items-center gap-3">
                                                            <img
                                                                className="h-10 w-10 overflow-hidden rounded-full object-cover"
                                                                width={40}
                                                                height={40}
                                                                src={user.user.avatar ? `${user.user.avatar}` : '/images/user/User.png'}
                                                                alt={`${user.user.avatar} ${user.user.avatar}`}
                                                            />
                                                            <div>
                                                                <span className="font-medium text-gray-800 dark:text-white/90">
                                                                    {user.last_name}, {user.first_name} {user.middle_name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {user.user.email}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {user.phone}
                                                    </TableCell>

                                                    <TableCell className="border border-gray-100 px-4 py-3 text-center text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {(() => {
                                                            if (!user.created_at) return '';

                                                            const createdAt = new Date(user.created_at);
                                                            const now = new Date();

                                                            const diffTime = Math.abs(now.getTime() - createdAt.getTime());
                                                            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

                                                            const years = Math.floor(diffDays / 365);
                                                            const months = Math.floor((diffDays % 365) / 30);
                                                            const days = diffDays % 30;

                                                            let result = '';

                                                            if (years > 0) result += `${years} year${years > 1 ? 's' : ''} `;
                                                            if (months > 0) result += `${months} month${months > 1 ? 's' : ''} `;
                                                            if (days > 0 || result === '') result += `${days} day${days > 1 ? 's' : ''}`;

                                                            return result.trim() + ' old';
                                                        })()}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                        <div className="col-span-1 flex justify-center">
                                                            <div className="flex w-full items-center justify-center gap-2">
                                                                <DeleteConfirm
                                                                    onDeleteConfirmed={() => handleDelete(user.user.id)}
                                                                    message={`Are you sure you want to delete user ${user.last_name} ${user.first_name}?`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="px-4 py-20 text-center text-gray-500 dark:text-gray-400"
                                                >
                                                    {searchTerm ? `No Tourist found matching "${searchTerm}"` : 'No Tourists available'}
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                            <Pagination links={items.links} meta={items.meta} />
                        </div>
                    </ComponentCard>
                </div>
            </AppWrapper>
        </>
    );
}
