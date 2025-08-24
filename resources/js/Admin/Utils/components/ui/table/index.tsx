import { ReactNode } from 'react';

// Props for Table
interface TableProps {
    children: ReactNode; // Table content (thead, tbody, etc.)
    className?: string; // Optional className for styling
}

// Props for TableHeader
// Update TableHeaderProps
interface TableHeaderProps {
    children: ReactNode;
    className?: string;
    columns?: SortableColumn[];
    sortConfig?: SortConfig;
    onSort?: (key: string) => void;
}

// Props for TableBody
interface TableBodyProps {
    children: ReactNode; // Body row(s)
    className?: string; // Optional className for styling
}

// Props for TableRow
interface TableRowProps {
    children: ReactNode; // Cells (th or td)
    className?: string; // Optional className for styling
}

// Props for TableCell
interface TableCellProps {
    children: ReactNode;
    isHeader?: boolean;
    className?: string;
    sortable?: boolean;
    sortDirection?: SortDirection;
    colSpan?: number;
    onClick?: () => void;
}

// Table Component
const Table: React.FC<TableProps> = ({ children, className }) => {
    return <table className={`min-w-full ${className}`}>{children}</table>;
};

// TableHeader Component
const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
    return <thead className={className}>{children}</thead>;
};

// TableBody Component
const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
    return <tbody className={className}>{children}</tbody>;
};

// TableRow Component
const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
    return <tr className={className}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({ children, isHeader = false, className, colSpan }) => {
    const CellTag = isHeader ? 'th' : 'td';
    return (
        <CellTag colSpan={colSpan} className={` ${className}`}>
            {children}
        </CellTag>
    );
};

export { Table, TableBody, TableCell, TableHeader, TableRow };
export type SortDirection = 'asc' | 'desc' | null;
export interface SortConfig {
    key: string;
    direction: SortDirection;
}

export interface SortableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    align?: 'left' | 'center' | 'right';
}
