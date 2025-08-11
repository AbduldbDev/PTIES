import { ReactNode, useMemo, useState } from 'react';

type Column<T> = {
    header: string;
    accessor: keyof T;
    render?: (row: T) => ReactNode;
};

type DataTableProps<T> = {
    data: T[];
    columns: Column<T>[];
    perPageOptions?: number[];
};

function DataTable<T extends Record<string, any>>({ data, columns, perPageOptions = [5, 10, 20] }: DataTableProps<T>) {
    const [search, setSearch] = useState('');
    const [perPage, setPerPage] = useState(perPageOptions[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState<keyof T>(columns[0]?.accessor);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Filtered + sorted
    const filteredData = useMemo(() => {
        let filtered = data.filter((row) => Object.values(row).some((val) => String(val).toLowerCase().includes(search.toLowerCase())));

        filtered.sort((a, b) => {
            const valA = a[sortKey]?.toString().toLowerCase();
            const valB = b[sortKey]?.toString().toLowerCase();
            if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
            if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        return filtered;
    }, [data, search, sortKey, sortOrder]);

    // Paginated
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * perPage;
        return filteredData.slice(start, start + perPage);
    }, [filteredData, currentPage, perPage]);

    const totalPages = Math.ceil(filteredData.length / perPage);

    const handleSort = (key: keyof T) => {
        if (sortKey === key) {
            setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="flex items-center gap-2">
                    <label>Per Page:</label>
                    <select
                        value={perPage}
                        onChange={(e) => {
                            setPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="rounded border px-2 py-1"
                    >
                        {perPageOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="rounded border px-2 py-1"
                />
            </div>

            {/* Table */}
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.accessor)} className="cursor-pointer border p-2 select-none" onClick={() => handleSort(col.accessor)}>
                                {col.header} {sortKey === col.accessor && (sortOrder === 'asc' ? '↑' : '↓')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td key={String(col.accessor)} className="border p-2">
                                        {col.render ? col.render(row) : String(row[col.accessor])}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="border p-2 text-center">
                                No results found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-center gap-2">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded border px-3 py-1 disabled:opacity-50"
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`rounded border px-3 py-1 ${currentPage === i + 1 ? 'bg-gray-300' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded border px-3 py-1 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default DataTable;
