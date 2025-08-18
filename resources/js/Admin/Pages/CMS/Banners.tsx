import ComponentCard from '@AdminUtils/components/common/ComponentCard';
import PageBreadcrumb from '@AdminUtils/components/common/PageBreadCrumb';
import { AppWrapper, PageMeta } from '@AdminUtils/components/common/PageMeta';
import { SortableColumn, SortConfig, Table, TableBody, TableCell, TableHeader, TableRow } from '@AdminUtils/components/ui/table';
import SortIndicator from '@AdminUtils/components/ui/table/sort-indicator';
import FlashMessage from '@AdminUtils/context/FlashMessage';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

type BannerItem = {
    id: number;
    key: string;
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: Record<string, string | undefined>;
    items: BannerItem[]; // Changed to direct array
};

export default function Banners() {
    const { flash, errors, items } = usePage<PageProps>().props;
    const form = useForm();
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: 'title',
        direction: 'desc',
    });

    const sortedItems = useMemo(() => {
        const sortableItems = [...items]; // Now using items directly
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (sortConfig.key === 'title') {
                    return sortConfig.direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
                }

                if (sortConfig.key === 'subtitle') {
                    return sortConfig.direction === 'asc' ? a.subtitle.localeCompare(b.subtitle) : b.subtitle.localeCompare(a.subtitle);
                }

                if (sortConfig.key === 'desc') {
                    return sortConfig.direction === 'asc' ? a.desc.localeCompare(b.desc) : b.desc.localeCompare(a.desc);
                }

                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const handleView = (id: any) => {
        router.get(`/Admin/CMS/Banner/Edit/${id}`);
    };

    const handleSort = (key: string) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    const columns: SortableColumn[] = [
        { key: 'title', label: 'Title', sortable: true },
        { key: 'subtitle', label: 'Subtitle', sortable: true },
        { key: 'desc', label: 'Description', sortable: true },
        { key: 'action', label: 'Action', sortable: false, align: 'center' },
    ];

    return (
        <>
            <Head title="Banners Management" />
            <AppWrapper>
                <PageMeta title="Banners Management" description="Manage your website banners" />
                {flash?.success && <FlashMessage type="success" message={flash.success} />}
                {errors?.error && <FlashMessage type="error" message={errors.error} />}
                {flash?.error && errors?.error !== flash.error && <FlashMessage type="error" message={flash.error} />}

                <PageBreadcrumb pageTitle="Banners Management" />

                <div className="grid grid-cols-1 gap-10 xl:grid-cols-1">
                    <ComponentCard title="All Banners">
                        <div className="overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
                            <div className="max-w-full overflow-x-auto">
                                <Table>
                                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                        <TableRow>
                                            {columns.map((column) => (
                                                <th
                                                    key={column.key}
                                                    className={`text-theme-xs border border-gray-100 px-5 py-3 font-medium text-gray-500 dark:border-white/[0.05] dark:text-gray-400 ${
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
                                        {sortedItems.map((banner) => (
                                            <TableRow key={banner.id}>
                                                <TableCell className="text-theme-sm border border-gray-100 px-4 py-3 text-start text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                    {banner.title}
                                                </TableCell>
                                                <TableCell className="text-theme-sm border border-gray-100 px-4 py-3 text-start text-gray-500 dark:border-white/[0.05] dark:text-gray-400">
                                                    {banner.subtitle}
                                                </TableCell>
                                                <TableCell className="text-theme-sm border border-gray-100 px-4 py-3 text-start text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                    {banner.desc}
                                                </TableCell>

                                                <TableCell className="text-theme-sm border border-gray-100 px-4 py-3 text-start text-gray-500 capitalize dark:border-white/[0.05] dark:text-gray-400">
                                                    <div className="col-span-1 flex justify-center">
                                                        <div className="flex w-full items-center justify-center gap-2">
                                                            <button
                                                                aria-label="Edit-btn"
                                                                onClick={() => handleView(banner.id)}
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
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </ComponentCard>
                </div>
            </AppWrapper>
        </>
    );
}
