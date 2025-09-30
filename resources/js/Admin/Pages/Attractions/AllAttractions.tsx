import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import { TableControls } from '@AdminUtils/components/tables/TableControls';
import DeleteConfirm from '@AdminUtils/components/ui/alert/DeleteConfirm';
import { SortableColumn, Table, TableBody, TableCell, TableHeader, TableRow } from '@AdminUtils/components/ui/table';
import Pagination from '@AdminUtils/components/ui/table/pagination';
import SortIndicator from '@AdminUtils/components/ui/table/sort-indicator';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { useTableManagement } from '@AdminUtils/hooks/useTableManagement';

import { Head, router, useForm, usePage } from '@inertiajs/react';

type AttractionProps = {
    id: number;
    attraction_id: string;
    name: string;
    category: string;
    operating_hours: string;
    information: string;
    history: string;
    local_rules: string;
    fun_facts: string;
    fees: string;
    distance: string;
    points: number;
    long: string;
    lat: string;
    images: string;
    qr_path: string;
    contact: Contact[];
};

type Contact = {
    name: string;
    position: string;
    contact: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    items: PaginatedResponse<AttractionProps>;
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
    } = useTableManagement<AttractionProps>({
        data: items.data,
        initialSort: { key: 'created_at', direction: 'desc' },
        meta: items.meta || undefined,
        customSearchFilter: (item, searchTerm) => {
            const searchLower = searchTerm.toLowerCase();
            return (
                item.name.toLowerCase().includes(searchLower) ||
                item.points.toString().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower)
            );
        },
    });

    const handleDelete = (id: number) => {
        form.delete(`/Admin/attractions/delete/${id}`);
    };

    const handleView = (id: any) => {
        router.get(`/Admin/attractions/edit/${id}`);
    };

    const columns: SortableColumn[] = [
        { key: 'qr_path', label: 'QR Code', sortable: true },
        { key: 'name', label: 'Attraction Name', sortable: true },
        { key: 'points', label: 'Points', sortable: true },
        { key: 'category', label: 'Category', sortable: true, align: 'center' },
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

                <PageBreadcrumb pageTitle="Attractions Management" />

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title="All Pakil Attractions">
                        <TableControls
                            searchTerm={searchTerm}
                            onSearchChange={handleSearch}
                            itemsPerPage={currentPerPage}
                            onItemsPerPageChange={(e) => handleItemsPerPageChange(e.target.value)}
                            searchPlaceholder="Search attractions..."
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
                                            sortedItems.map((attraction) => (
                                                <TableRow key={attraction.id}>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        <div className="flex flex-col items-center justify-center gap-2">
                                                            <a href={attraction.qr_path} target="_blank" rel="noopener noreferrer">
                                                                <img
                                                                    className="h-[70px] w-[70px] cursor-pointer object-cover"
                                                                    src={attraction.qr_path}
                                                                    alt={`${attraction.name}`}
                                                                />
                                                            </a>
                                                            <span className="font-medium text-gray-800 dark:text-white/90">
                                                                {attraction.attraction_id}
                                                            </span>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {attraction.name}
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-center text-theme-sm text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                        {attraction.points} Points
                                                    </TableCell>
                                                    <TableCell className="border border-gray-100 px-4 py-3 text-center text-theme-sm text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                        {attraction.category}
                                                    </TableCell>

                                                    <TableCell className="border border-gray-100 px-4 py-3 text-start text-theme-sm text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                        <div className="col-span-1 flex justify-center">
                                                            <div className="flex w-full items-center justify-center gap-2">
                                                                <button
                                                                    aria-label="Download QR"
                                                                    onClick={() => {
                                                                        const link = document.createElement('a');
                                                                        link.href = attraction.qr_path;
                                                                        link.download = `qr-${attraction.attraction_id}.png`;
                                                                        link.click();
                                                                    }}
                                                                    className="text-gray-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-700"
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
                                                                            d="M10.5 2.5C10.2239 2.5 10 2.72386 10 3V12.0858L7.70711 9.79289C7.31658 9.40237 6.68342 9.40237 6.29289 9.79289C5.90237 10.1834 5.90237 10.8166 6.29289 11.2071L10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L15.7071 11.2071C16.0976 10.8166 16.0976 10.1834 15.7071 9.79289C15.3166 9.40237 14.6834 9.40237 14.2929 9.79289L12 12.0858V3C12 2.72386 11.7761 2.5 11.5 2.5H10.5ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H16C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17H5Z"
                                                                            fill=""
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                <button
                                                                    aria-label="Edit-btn"
                                                                    onClick={() => handleView(attraction.id)}
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
                                                                <DeleteConfirm
                                                                    onDeleteConfirmed={() => handleDelete(attraction.id)}
                                                                    message={`Are you sure you want to delete attraction named "${attraction.name}"?`}
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
                                                    className="px-4 py-20 text-center text-gray-500 capitalize dark:text-gray-400"
                                                >
                                                    {searchTerm ? `No Attractions found matching "${searchTerm}"` : 'No Attractions available'}
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
