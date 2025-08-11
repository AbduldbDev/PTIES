// components/ui/table-head.tsx
import { SortableColumn, SortConfig, TableCell, TableHeader, TableRow } from './index';

interface TableHeadProps {
    columns: SortableColumn[];
    sortConfig?: SortConfig;
    onSort?: (key: string) => void;
    className?: string;
}

const TableHead = ({ columns, sortConfig, onSort, className }: TableHeadProps) => {
    return (
        <TableHeader className={className}>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.key}
                        isHeader
                        className={`text-theme-xs px-5 py-3 font-medium text-gray-500 dark:text-gray-400 ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'} `}
                        sortable={column.sortable}
                        sortDirection={sortConfig?.key === column.key ? sortConfig.direction : null}
                        onClick={() => column.sortable && onSort?.(column.key)}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHeader>
    );
};

export default TableHead;
