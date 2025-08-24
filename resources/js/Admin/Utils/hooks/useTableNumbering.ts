// utils/tableNumbering.ts
export const getRowNumber = (index: number, currentPage: number, perPage: number | string): number => {
    if (perPage === 'all') {
        return index + 1;
    }

    const itemsPerPage = typeof perPage === 'string' ? parseInt(perPage) : perPage;
    return (currentPage - 1) * itemsPerPage + index + 1;
};

// Alternative: Get row number from meta data if available
// Enhanced getRowNumberFromMeta function
export const getRowNumberFromMeta = (
    index: number,
    meta: {
        current_page: number;
        per_page: number;
        from?: number;
        to?: number;
        total: number;
    } | null,
): number => {
    if (!meta) return index + 1;

    // Most accurate: use the 'from' value provided by Laravel/Eloquent
    if (meta.from !== undefined) {
        return meta.from + index;
    }

    // Fallback calculation
    return (meta.current_page - 1) * meta.per_page + index + 1;
};
