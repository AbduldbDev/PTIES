import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import { TableControls } from '@AdminUtils/components/tables/TableControls';
import { SortableColumn, Table, TableBody, TableCell, TableHeader, TableRow } from '@AdminUtils/components/ui/table';
import Pagination from '@AdminUtils/components/ui/table/pagination';
import SortIndicator from '@AdminUtils/components/ui/table/sort-indicator';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { useTableManagement } from '@AdminUtils/hooks/useTableManagement';

import { Head, router, useForm, usePage } from '@inertiajs/react';

type SubscribedProps = {
    id: number;
    name: string;
    email: string;
    created_at: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    items: PaginatedResponse<SubscribedProps>;
};

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedResponse<T> {
    data: T[];
    links: PaginationLink[];
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        from?: number;
        to?: number;
    } | null;
}

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
    } = useTableManagement<SubscribedProps>({
        data: items.data,
        initialSort: { key: 'created_at', direction: 'desc' },
        meta: items.meta || undefined,
        customSearchFilter: (item, searchTerm) => {
            const searchLower = searchTerm.toLowerCase();
            return item.name.toLowerCase().includes(searchLower) || item.email.toLowerCase().includes(searchLower);
        },
    });

    const handleDelete = (id: number) => {
        form.delete(`/Admin/Subscribed/delete/${id}`);
    };

    const handleView = (id: any) => {
        router.get(`/Admin/Subscribed/edit/${id}`);
    };

    const columns: SortableColumn[] = [
        { key: 'email', label: 'Email', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'created_at', label: 'Subscribed At', sortable: true },
    ];

    return (
        <>
            <Head title="PTIES | Mabuhay!" />
            <AppWrapper>
                <PageMeta
                    title="Pakil Tourism Information and Engagement System"
                    description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
                />
                {flash?.success && <FlashMessage type="success" message={flash.success} key={Date.now()} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} key={Date.now()} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} key={Date.now()} />}

                <PageBreadcrumb pageTitle="Subscribed User Management" />

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title="All Subscribed">
                        <TableControls
                            searchTerm={searchTerm}
                            onSearchChange={handleSearch}
                            itemsPerPage={currentPerPage}
                            onItemsPerPageChange={(e) => handleItemsPerPageChange(e.target.value)}
                            searchPlaceholder="Search subscribed user..."
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
                                            sortedItems.map((Subscribed) => (
                                                <TableRow key={Subscribed.id}>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Subscribed.email}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Subscribed.name}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Subscribed.created_at &&
                                                            new Date(Subscribed.created_at).toLocaleDateString('en-US', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                            })}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="px-4 py-20 text-center text-gray-500 capitalize dark:text-gray-400"
                                                >
                                                    {searchTerm
                                                        ? `No Subscribed User found matching "${searchTerm}"`
                                                        : 'No Subscribed User available'}
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
