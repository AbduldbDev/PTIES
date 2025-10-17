import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import MarketProduct from '@UserUtils/components/Cards/MarketProduct';
import ActiveFilters from '@UserUtils/components/Ui/ActiveFilters';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import FilterButtons from '@UserUtils/components/Ui/FilterButtons';
import SearchBar from '@UserUtils/components/Ui/SearchBar';
import { useSearchFilter } from '@UserUtils/hooks/useSearchFilter';
import { useMemo, useState } from 'react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type ProductProps = {
    id: number;
    product_id: string;
    product_name: string;
    category: string;
    description: string;
    images: string;
    shop: ShopProps;
    variants: string; // This is likely a JSON string
};

type Variant = {
    name: string;
    price: string;
    description: string;
    image: string;
};

type ShopProps = {
    business_name: string;
};

type PageProps = {
    banner: PageBannerProps;
    items: ProductProps[];
};

type PriceRange = 'all' | 'under-100' | '100-500' | '500-1000' | 'over-1000';

export default function LocalMarket() {
    const { banner, items } = usePage<PageProps>().props;
    const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
    const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');

    // Parse variants and calculate lowest price for each product
    const productsWithPrices = useMemo(() => {
        return items.map((product) => {
            try {
                const variants: Variant[] = JSON.parse(product.variants);
                const prices = variants.map((variant) => parseFloat(variant.price) || 0);
                const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;

                return {
                    ...product,
                    lowestPrice,
                    variantsData: variants,
                };
            } catch (error) {
                console.error('Error parsing variants:', error);
                return {
                    ...product,
                    lowestPrice: 0,
                    variantsData: [],
                };
            }
        });
    }, [items]);

    const { searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, filteredData, clearFilters, hasActiveFilters } = useSearchFilter({
        data: productsWithPrices,
        searchFields: ['product_name', 'category', 'description'],
        filterField: 'category',
        initialFilter: 'all',
    });

    const title = 'Pakil Tourism | Local Market';
    const description =
        "Discover Pakil's festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.";

    // Apply price range filtering and sorting
    const finalFilteredData = useMemo(() => {
        let result = [...filteredData];

        // Apply price range filter
        if (selectedPriceRange !== 'all') {
            result = result.filter((product) => {
                const price = product.lowestPrice;
                switch (selectedPriceRange) {
                    case 'under-100':
                        return price < 100;
                    case '100-500':
                        return price >= 100 && price <= 500;
                    case '500-1000':
                        return price >= 500 && price <= 1000;
                    case 'over-1000':
                        return price > 1000;
                    default:
                        return true;
                }
            });
        }

        // Apply sorting
        result.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.lowestPrice - b.lowestPrice;
                case 'price-high':
                    return b.lowestPrice - a.lowestPrice;
                case 'name':
                default:
                    return a.product_name.localeCompare(b.product_name);
            }
        });

        return result;
    }, [filteredData, selectedPriceRange, sortBy]);

    const filterOptions = useMemo(() => {
        const types = items.map((est) => est.category?.toLowerCase() || 'other');
        const uniqueTypes = ['all', ...new Set(types)].filter((type) => type);

        return uniqueTypes.map((type) => ({
            value: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
        }));
    }, [items]);

    const activeFilters = [
        ...(searchTerm
            ? [
                  {
                      key: 'search',
                      value: searchTerm,
                      label: 'Search',
                      onRemove: () => setSearchTerm(''),
                  },
              ]
            : []),
        ...(selectedFilter !== 'all'
            ? [
                  {
                      key: 'type',
                      value: selectedFilter,
                      label: 'Type',
                      onRemove: () => setSelectedFilter('all'),
                  },
              ]
            : []),
        ...(selectedPriceRange !== 'all'
            ? [
                  {
                      key: 'priceRange',
                      value: selectedPriceRange,
                      label: 'Price Range',
                      onRemove: () => setSelectedPriceRange('all'),
                  },
              ]
            : []),
    ];

    const handleClearAllFilters = () => {
        clearFilters();
        setSelectedPriceRange('all');
        setSortBy('name');
    };

    const hasExtendedActiveFilters = hasActiveFilters || selectedPriceRange !== 'all';

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            {banner ? (
                <Banner
                    title={banner?.title}
                    subtitle={banner?.subtitle}
                    desc={banner?.desc}
                    imageSrc={banner?.image ? `${banner.image}` : '/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section className="px-4 py-16">
                <div className="container mx-auto">
                    {items.length > 0 ? (
                        <PageTitle
                            title="LOCAL MARKET"
                            subtitle="Discover Local Products"
                            desc="Support local artisans and businesses with authentic Pakil products and crafts"
                        />
                    ) : (
                        <PageTitle
                            title="NO PRODUCTS AVAILABLE"
                            subtitle="Currently No Local Market Products"
                            desc="Please check back later for updates"
                        />
                    )}

                    {items.length > 0 && (
                        <div className="mb-8">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <SearchBar
                                    placeholder="Search products by name, category, or description..."
                                    onSearch={setSearchTerm}
                                    value={searchTerm}
                                    className="max-w-2xl flex-1"
                                />

                                <FilterButtons filters={filterOptions} selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
                            </div>

                            {hasExtendedActiveFilters && (
                                <ActiveFilters
                                    filters={activeFilters}
                                    resultsCount={finalFilteredData.length}
                                    totalCount={items.length}
                                    onClearAll={handleClearAllFilters}
                                    className="mt-4"
                                />
                            )}
                        </div>
                    )}

                    {/* Sorting and Price Range Filters */}
                    {items.length > 0 && (
                        <div className="mb-8 rounded-xl p-4 sm:p-6">
                            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
                                {/* Sort By */}
                                <div>
                                    <h4 className="text-dark mb-3 flex items-center gap-2 text-base font-semibold sm:mb-4 sm:text-lg">
                                        <i className="fas fa-sort text-xs text-primary sm:text-sm" />
                                        Sort By
                                    </h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <button
                                            onClick={() => setSortBy('name')}
                                            className={`flex transform items-center gap-1 rounded-full bg-gray-200 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                sortBy === 'name'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                                                    : 'border border-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <i className="fas fa-font text-xs sm:text-sm" />
                                            <span className="xs:inline hidden">Name</span>
                                        </button>
                                        <button
                                            onClick={() => setSortBy('price-low')}
                                            className={`flex transform items-center gap-1 rounded-full bg-gray-200 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                sortBy === 'price-low'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                                                    : 'border border-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <i className="fas fa-arrow-down text-xs sm:text-sm" />
                                            <span className="xs:inline hidden">Price: Low to High</span>
                                            <span className="xs:hidden">Low</span>
                                        </button>
                                        <button
                                            onClick={() => setSortBy('price-high')}
                                            className={`flex transform items-center gap-1 rounded-full bg-gray-200 px-3 py-2 text-xs font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                sortBy === 'price-high'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white'
                                                    : 'border border-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <i className="fas fa-arrow-up text-xs sm:text-sm" />
                                            <span className="xs:inline hidden">Price: High to Low</span>
                                            <span className="xs:hidden">High</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Price Range */}

                                <div>
                                    <h4 className="text-dark mb-3 flex items-center gap-2 text-base font-semibold sm:mb-4 sm:text-lg">
                                        <i className="fas fa-filter text-xs text-primary sm:text-sm" />
                                        Price Range
                                    </h4>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <button
                                            onClick={() => setSelectedPriceRange('all')}
                                            className={`transform rounded-full px-3 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                selectedPriceRange === 'all'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                                                    : 'border border-gray-200 bg-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <span className="xs:inline hidden">All Prices</span>
                                            <span className="xs:hidden">All</span>
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('under-100')}
                                            className={`transform rounded-full px-3 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                selectedPriceRange === 'under-100'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                                                    : 'border border-gray-200 bg-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <span className="xs:inline hidden">Under ₱100</span>
                                            <span className="xs:hidden">-₱100</span>
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('100-500')}
                                            className={`transform rounded-full px-3 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                selectedPriceRange === '100-500'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                                                    : 'border border-gray-200 bg-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <span className="xs:inline hidden">₱100-₱500</span>
                                            <span className="xs:hidden">₱100-500</span>
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('500-1000')}
                                            className={`transform rounded-full px-3 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                selectedPriceRange === '500-1000'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                                                    : 'border border-gray-200 bg-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <span className="xs:inline hidden">₱500-₱1000</span>
                                            <span className="xs:hidden">₱500-1k</span>
                                        </button>
                                        <button
                                            onClick={() => setSelectedPriceRange('over-1000')}
                                            className={`transform rounded-full px-3 py-2 text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm ${
                                                selectedPriceRange === 'over-1000'
                                                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-md'
                                                    : 'border border-gray-200 bg-gray-200 text-gray-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                                            }`}
                                        >
                                            <span className="xs:inline hidden">Over ₱1000</span>
                                            <span className="xs:hidden">₱1k+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {items.length > 0 ? (
                        <>
                            {finalFilteredData.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {finalFilteredData.map((item, index) => (
                                        <MarketProduct key={index} product={item} />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="No Products found"
                                    message="Try adjusting your search terms or filters."
                                    actionText="Clear All Filters"
                                    onAction={handleClearAllFilters}
                                />
                            )}
                        </>
                    ) : (
                        <EmptyState
                            title="No Products Added"
                            message="There are currently no products listed in the local marketplace. Please check back later."
                            actionText="Return Home"
                            onAction={() => (window.location.href = '/')}
                        />
                    )}
                </div>
            </section>
        </>
    );
}
