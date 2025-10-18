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
type RedeemProps = {
    id: number;
    reward_id: string;
    user_id: string;
    completed_at: string;
    points: string;
    created_at: string;
    status: string;
    reward: RewardsProps;
    user: UserProps;
};

type RewardsProps = {
    name: string;
    category: string;
    price: string;
};

type UserProps = {
    email: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    items: PaginatedResponse<RedeemProps>;
    status: string;
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

export default function Rewards() {
    const { flash, errors, items, status } = usePage<PageProps>().props;
    const form = useForm();

    const {
        currentPerPage,
        handleItemsPerPageChange,
        sortConfig,
        handleSort,
        searchTerm,
        handleSearch,
        filteredItems: sortedItems,
    } = useTableManagement<RedeemProps>({
        data: items.data,
        initialSort: { key: 'created_at', direction: 'desc' },
        meta: items.meta || undefined,
        customSearchFilter: (item, searchTerm) => {
            const searchLower = searchTerm.toLowerCase();
            return (
                item.reward.name.toLowerCase().includes(searchLower) ||
                item.user.email.toLowerCase().includes(searchLower) ||
                item.reward.category.toLowerCase().includes(searchLower) ||
                item.points.toLowerCase().includes(searchLower)
            );
        },
    });

    const handleView = (id: any) => {
        router.get(`/Admin/rewards/redeem/details/${id}`);
    };

    const columns: SortableColumn[] = [
        { key: 'user.email', label: 'User Email', sortable: true },
        { key: 'reward.name', label: 'Reward Name', sortable: true },
        { key: 'reward.category', label: 'Category', sortable: true },
        { key: 'reward.points', label: 'Points', sortable: true },
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

                <PageBreadcrumb pageTitle="Rewards Redemption" />

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title={`${status} Redemption`}>
                        <TableControls
                            searchTerm={searchTerm}
                            onSearchChange={handleSearch}
                            itemsPerPage={currentPerPage}
                            onItemsPerPageChange={(e) => handleItemsPerPageChange(e.target.value)}
                            searchPlaceholder="Search Redemption ..."
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
                                            sortedItems.map((Rewards) => (
                                                <TableRow key={Rewards.id}>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Rewards.user.email}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Rewards.reward.name}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                        {Rewards.reward.category}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-center text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {Rewards.reward.price}
                                                    </TableCell>

                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                        <div className="col-span-1 flex justify-center">
                                                            <div className="flex w-full items-center justify-center gap-2">
                                                                <button
                                                                    aria-label="Edit-btn"
                                                                    onClick={() => handleView(Rewards.id)}
                                                                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90"
                                                                >
                                                                    <svg
                                                                        className="fill-current"
                                                                        width="21"
                                                                        height="21"
                                                                        viewBox="0 0 21 21"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M17.0911 3.53206C16.2124 2.65338 14.7878 2.65338 13.9091 3.53206L5.6074 11.8337C5.29899 12.1421 5.08687 12.5335 4.99684 12.9603L4.26177 16.445C4.20943 16.6931 4.286 16.9508 4.46529 17.1301C4.64458 17.3094 4.90232 17.3859 5.15042 17.3336L8.63507 16.5985C9.06184 16.5085 9.45324 16.2964 9.76165 15.988L18.0633 7.68631C18.942 6.80763 18.942 5.38301 18.0633 4.50433L17.0911 3.53206ZM14.9697 4.59272C15.2626 4.29982 15.7375 4.29982 16.0304 4.59272L17.0027 5.56499C17.2956 5.85788 17.2956 6.33276 17.0027 6.62565L16.1043 7.52402L14.0714 5.49109L14.9697 4.59272ZM13.0107 6.55175L6.66806 12.8944C6.56526 12.9972 6.49455 13.1277 6.46454 13.2699L5.96704 15.6283L8.32547 15.1308C8.46772 15.1008 8.59819 15.0301 8.70099 14.9273L15.0436 8.58468L13.0107 6.55175Z"
                                                                            fill=""
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="px-4 py-20 text-center text-gray-500 capitalize dark:text-gray-400"
                                                >
                                                    {searchTerm ? `No Redemption found matching "${searchTerm}"` : 'No Redemptions available'}
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
