import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import MarketProduct from '@UserUtils/components/Cards/MarketProduct';
import ActiveFilters from '@UserUtils/components/Ui/ActiveFilters';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import FilterButtons from '@UserUtils/components/Ui/FilterButtons';
import SearchBar from '@UserUtils/components/Ui/SearchBar';
import { useSearchFilter } from '@UserUtils/hooks/useSearchFilter';
import { useMemo } from 'react';

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
    variants: string;
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

export default function LocalMarket() {
    const { banner, items } = usePage<PageProps>().props;

    const { searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, filteredData, clearFilters, hasActiveFilters } = useSearchFilter({
        data: items,
        searchFields: ['product_name', 'category', 'description'],
        filterField: 'category',
        initialFilter: 'all',
    });

    const title = 'Pakil Tourism | Local Market';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

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
    ];

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
                                    placeholder="Search attractions by name, information, or category..."
                                    onSearch={setSearchTerm}
                                    value={searchTerm}
                                    className="max-w-2xl flex-1"
                                />

                                <FilterButtons filters={filterOptions} selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
                            </div>

                            {hasActiveFilters && (
                                <ActiveFilters
                                    filters={activeFilters}
                                    resultsCount={filteredData.length}
                                    totalCount={items.length}
                                    onClearAll={clearFilters}
                                    className="mt-4"
                                />
                            )}
                        </div>
                    )}
                    {/* Price Range Filter */}
                    <div className="mb-8e rounded-xl p-6">
                        <h4 className="text-dark mb-4 flex items-center gap-2 text-lg font-semibold">
                            <i className="fas fa-filter text-sm text-primary" />
                            Price Range
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex transform items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                                <i className="fas fa-layer-group text-sm" />
                                All Prices
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                Under ₱100
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                ₱100 - ₱500
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                ₱500 - ₱1000
                            </button>
                            <button className="transform rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95">
                                Over ₱1000
                            </button>
                        </div>
                    </div>

                    {items.length > 0 ? (
                        <>
                            {filteredData.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {filteredData.map((item, index) => (
                                        <MarketProduct key={index} product={item} />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="No Products found"
                                    message="Try adjusting your search terms or filters."
                                    actionText="Clear All Filters"
                                    onAction={clearFilters}
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
